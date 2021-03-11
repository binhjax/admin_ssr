import React, { useEffect, useRef, useState } from 'react';
import { CustomNodeModel } from './CustomNodeModel';
import { TYPE } from '../../const';

import { DiagramEngine, PortModel, PortWidget } from '@projectstorm/react-diagrams-core';
import styled from '@emotion/styled';

import {
  ExclamationCircleOutlined,
  PlusOutlined,
  EditOutlined,
  MoreOutlined,
  DeleteOutlined,
  DeleteRowOutlined,
  KeyOutlined,
} from '@ant-design/icons';
import { Modal, Input, Button, Row, Popover, AutoComplete, Select } from 'antd';

export interface CustomNodeWidgetProps {
  node: CustomNodeModel;
  engine: DiagramEngine;
  size?: number;
}

export const Port = styled.div`
  height: 25px;
  cursor: pointer;
`;

export const CustomNodeWidget: React.FC<CustomNodeWidgetProps> = props => {
  const [editNode, setEditNode] = useState(false);
  const [tableName, setTableName] = useState('');
  const [hover, setHover] = useState('');
  const [ports, setPorts] = useState<{ [s: string]: PortModel }>({});
  const styles = {
    port: {
      width: '100%',
      height: '35px',
      position: 'absolute',
      right: '0px',
      margin: '-5px 0px -5px 0px',
    },

    tableHeader: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 900,
      fontSize: '18px',
      background: '#316896',
      marginBottom: '-2px',
      width: '100%',
    },
    tableHeadText: {
      fill: '#fff',
      fontWeight: 700,
      border: ' 0 solid #e2e8f0',
      padding: '7px 30px 7px ',
    },
  };
  useEffect(() => {
    setTableName(props.node.getOptions().extras);
    setPorts(props.node.getPorts());
  }, []);
  const addPort = () => {
    props.node.addCustomPort('new_col', '', '');
    props.engine.repaintCanvas();
  };
  const confirm = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Confirm delete table',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        props.node.remove();
        props.engine.repaintCanvas();
      },
    });
  };
  const confirmDeletePort = (port: PortModel) => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Confirm delete port',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        props.node.removePort(port);
        props.engine.repaintCanvas();
      },
    });
  };
  const openEdit = () => {
    setPorts(props.node.getPorts());
    setEditNode(true);
  };
  const closeEdit = () => {
    setEditNode(false);
  };
  const handelChangeName = (e: any) => {
    setTableName(e.target.value);
    props.node.setName(e.target.value);
  };
  const handleChangePort = e => {
    const { id, name, value } = e.target;

    ports[name].getOptions().extras[id] = value;
    setPorts({ ...ports });
    props.node.setPorts(ports);
  };
  const content = (
    <Row>
      <Button
        type="ghost"
        icon={<PlusOutlined style={{ color: 'green' }} />}
        onClick={() => addPort()}
      />
      <Button
        type="ghost"
        icon={<EditOutlined style={{ color: 'cyan' }} />}
        onClick={() => openEdit()}
      />
      <Button
        type="ghost"
        icon={<DeleteOutlined style={{ color: 'red' }} />}
        onClick={() => confirm()}
      />
    </Row>
  );
  return (
    <>
      <Modal visible={editNode} onCancel={() => closeEdit()} centered={true} footer={false}>
        <div style={{ marginBottom: 5, fontWeight: 700 }}>Table:</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Input style={{ width: 390 }} value={tableName} onChange={handelChangeName} />
          <Button onClick={addPort} icon={<PlusOutlined />} style={{ color: 'green' }}>
            Add
          </Button>
        </div>
        <div style={{ marginTop: 5, fontWeight: 700 }}>Columns:</div>
        <table style={{ width: '100%' }}>
          <tbody>
            {Object.entries(ports).map(([key, value], index: any) => (
              <tr key={index}>
                <td style={{ width: '40%' }}>
                  <Input
                    id="name"
                    value={value.getOptions().extras.name}
                    name={key}
                    key={index}
                    onChange={handleChangePort}
                  />
                </td>
                <td style={{ width: '30%' }}>
                  <AutoComplete
                    style={{ width: '100%' }}
                    options={TYPE}
                    filterOption={(inputValue, option) =>
                      option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
                    }
                    value={value.getOptions().extras.type}
                    onChange={type => {
                      value.getOptions().extras.type = type;
                      setPorts({ ...ports });
                    }}
                    onSelect={type => {
                      value.getOptions().extras.type = type;
                    }}
                  ></AutoComplete>
                </td>
                <td style={{ width: '20%' }}>
                  <Select
                    style={{ width: '100%' }}
                    defaultValue={value.getOptions().extras.key}
                    onChange={key => {
                      value.getOptions().extras.key = key;
                      setPorts({ ...ports });
                    }}
                  >
                    <Select.Option value="pk">pk</Select.Option>
                    <Select.Option value="fk">fk</Select.Option>
                    <Select.Option value="null">null</Select.Option>
                    <Select.Option value="not null">not null</Select.Option>
                  </Select>
                </td>
                <td>
                  <DeleteRowOutlined
                    onClick={() => confirmDeletePort(value)}
                    style={{ fontSize: 20, cursor: 'pointer', color: 'red' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
      <div onClick={() => props.node.setSelected(false)} style={{ width: props.size * 2 }}>
        <div style={{ position: 'absolute', top: '0', right: '0' }}>
          <Popover placement="rightBottom" content={content} trigger="focus">
            <Button
              type="ghost"
              style={{ border: 'none' }}
              icon={
                <MoreOutlined style={{ color: 'white', fontSize: '20px', paddingTop: '5px' }} />
              }
            />
          </Popover>
        </div>
        <div
          style={styles.tableHeader}
          onDoubleClick={() => {
            openEdit();
          }}
        >
          <div style={styles.tableHeadText}>{tableName}</div>
        </div>
        {Object.entries(props.node.getPorts()).map(([key, value], index: any) => (
          <div
            style={{
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              background: hover === key ? '#deecf3' : '#f6f6f6',
              padding: '5px 0px 5px 0px',
            }}
            key={index}
            onMouseEnter={() => setHover(key)}
            onMouseLeave={() => setHover('')}
          >
            <PortWidget port={value} engine={props.engine} style={styles.port}></PortWidget>

            <div
              style={{
                paddingLeft: 30,
                fontWeight: value.getOptions().extras.key === 'pk' ? 700 : 500,
                color: value.getOptions().extras.key === 'pk' ? '#000' : '#999',
                maxWidth: 150,
                wordWrap: 'break-word',
              }}
            >
              {value.getOptions().extras.name}
            </div>
            <div
              style={{
                paddingRight: 30,
                color: '#999',
                fontWeight: value.getOptions().extras.key === 'pk' ? 700 : 500,
              }}
            >
              {value.getOptions().extras.type}
            </div>
            <div
              style={{
                position: 'absolute',
                right: 5,
                visibility:
                  value.getOptions().extras.key === 'pk' || value.getOptions().extras.key === 'fk'
                    ? 'visible'
                    : 'hidden',
              }}
            >
              <KeyOutlined
                style={{ color: value.getOptions().extras.key === 'pk' ? '#cbb202' : '' }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
