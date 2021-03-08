import React, { useEffect, useState } from 'react';
import { CustomNodeModel } from './CustomNodeModel';
import { TYPE } from '../../const';

import {
  DiagramEngine,
  PortModel,
  PortModelAlignment,
  PortWidget,
} from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';

import {
  ExclamationCircleOutlined,
  PlusOutlined,
  EditOutlined,
  MoreOutlined,
  DeleteOutlined,
  DeleteRowOutlined,
  PlaySquareOutlined,
  PlusSquareOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';
import { Col, Modal, Input, Button, Typography, Row, Popover, AutoComplete, Select } from 'antd';

export interface CustomNodeWidgetProps {
  node: CustomNodeModel;
  engine: DiagramEngine;
  size?: number;
}

const styles = {
  rightPort: {
    width: '25px',
    height: '25px',
    position: 'absolute',
    right: '0px',
  },

  leftPort: {
    width: '25px',
    height: '25px',
    position: 'absolute',
    left: '0',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    fontWeight: 900,
    fontSize: '18px',
    background: '#316896',
    marginBottom: '-2px',
  },
  tableHeadText: {
    fill: '#fff',
    fontWeight: 700,
    border: ' 0 solid #e2e8f0',
    padding: '7px 30px 7px ',
  },
  tableRow: {
    fontSize: '16px',
    display: 'flex',
    width: '100%',
    flexBasis: 100,
    justifyContent: 'space-between',
    background: '#f6f6f6',
    padding: '5px 0px 5px 0px',
  },
};
export const Port = styled.div`
  height: 25px;
  cursor: pointer;

  &:hover {
    background: #deecf3;
  }
`;

export const CustomNodeWidget: React.FC<CustomNodeWidgetProps> = props => {
  const [editNode, setEditNode] = useState(false);
  const [tableName, setTableName] = useState('');
  const [hover, setHover] = useState('');
  const [ports, setPorts] = useState<{ [s: string]: PortModel }>({});

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
    <div>
      <Modal visible={editNode} onCancel={() => closeEdit()} centered={true} footer={false}>
        <div style={{ marginBottom: 5, fontWeight: 700 }}>Table:</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Input style={{ width: 390 }} value={tableName} onChange={handelChangeName} />
          <Button onClick={addPort} icon={<PlusOutlined />} style={{ color: 'green' }}>
            Add
          </Button>
        </div>
        <div style={{ marginTop: 5, fontWeight: 700 }}>Columns:</div>
        {Object.entries(ports).map(([key, value], index: any) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 5,
            }}
          >
            <Input
              id="name"
              value={value.getOptions().extras.name}
              name={key}
              key={index}
              onChange={handleChangePort}
            />

            <AutoComplete
              style={{ width: 250 }}
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

            <Select
              defaultValue={value.getOptions().extras.key}
              style={{ width: 120 }}
              onChange={key => {
                value.getOptions().extras.key = key;
                setPorts({ ...ports });
              }}
            >
              <Select.Option value="PK">PK</Select.Option>
              <Select.Option value="null">Null</Select.Option>
            </Select>
            <DeleteRowOutlined
              onClick={() => confirmDeletePort(value)}
              style={{ fontSize: 20, cursor: 'pointer', color: 'red' }}
            />
          </div>
        ))}
      </Modal>
      <div
        style={{
          minWidth: props.size * 2,
          height: 'auto',
        }}
      >
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
        <div style={styles.tableHeader}>
          <div style={styles.tableHeadText}>{tableName}</div>
        </div>
        {Object.entries(props.node.getPorts()).map(([key, value], index: any) => (
          <div style={styles.tableRow} key={index}>
            <PortWidget port={value} engine={props.engine} style={styles.leftPort}>
              <Port />
            </PortWidget>
            <PortWidget port={value} engine={props.engine} style={styles.rightPort}>
              <Port />
            </PortWidget>
            <div
              style={{
                paddingLeft: 30,
                fontWeight: value.getOptions().extras.key === 'PK' ? 700 : 500,
                color: value.getOptions().extras.key === 'PK' ? '#000' : '#999',
              }}
            >
              {value.getOptions().extras.name}
            </div>
            <div style={{ flex: '1 0 100px' }}></div>
            <div
              style={{
                paddingRight: 30,
                color: '#999',
                fontWeight: value.getOptions().extras.key === 'PK' ? 700 : 500,
              }}
            >
              {value.getOptions().extras.type}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
