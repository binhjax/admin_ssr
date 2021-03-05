import * as React from 'react';
import { CustomNodeModel } from './CustomNodeModel';
import { useDispatch, useSelector } from 'react-redux';
// import * as action from '../../actions/node';
import { DiagramEngine, PortWidget, PortModel } from '@projectstorm/react-diagrams';
import styled from '@emotion/styled';
import { TYPE } from '../../const';
import {
  ExclamationCircleOutlined,
  PlusOutlined,
  EditOutlined,
  KeyOutlined,
  MoreOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import { Col, Modal, Input, Button, Typography, Row, Popover, AutoComplete, Select } from 'antd';
const { Text } = Typography;
const { Option } = Select;
export interface CustomNodeWidgetProps {
  node: CustomNodeModel;
  engine: DiagramEngine;
  size?: number | undefined;
}

/**
 * @author Nguyen Tuan Quang
 */
export const Port = styled.div`
  width: 20px;
  height: 20px;
  background: #f6f6f6;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    background: #deecf3;
  }
`;

const styles = {
  cardHeader: {
    color: 'white',
    border: ' 0 solid #e2e8f0',
    fontWeight: 400,
    fontSize: '20px',
    padding: '5px 20px',
    height: '40px',
    background: '#316896',
    marginBottom: '-2px',
  },
  rightPort: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '380px',
  },
  leftPort: {
    width: '20px',
    height: '20px',
    position: 'absolute',
    left: '0',
  },
  fieldText: { fontSize: '20px' },
};
const CustomNodeWidget: React.FC<CustomNodeWidgetProps> = (props) => {
  // const { dispatch } = props;

  const [editNode, setEditNode] = React.useState(false);
  const [name, setName] = React.useState('');
  const [hover, setHover] = React.useState('');
  // const ports: { [s: string]: PortModel } = useSelector((state) => state.node.ports);
  const dispatch = useDispatch();
  const save = () => {
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
  // const confirmDeletePort = (port: PortModel) => {
  //   Modal.confirm({
  //     title: 'Confirm',
  //     icon: <ExclamationCircleOutlined />,
  //     content: 'Confirm delete port',
  //     okText: 'Yes',
  //     cancelText: 'No',
  //     onOk() {
  //       props.node.removePort(port);
  //       dispatch(action.setPorts(props.node.getPorts()));
  //       props.engine.repaintCanvas();
  //     },
  //   });
  // };
  // const openEdit = () => {
  //   setEditNode(true);
  //   setName(props.node.getOptions().extras);
  //   dispatch(action.setPorts(props.node.getPorts()));
  // };
  // const closeEdit = () => {
  //   setEditNode(false);
  //   setName('');
  // };
  // const handelChangeName = (e: any) => {
  //   setName(e.target.value);
  // };
  // const handleChangePort = (e) => {
  //   const { id, name, value } = e.target;

  //   ports[name].getOptions().extras[id] = value;
  //   // dispatch(action.setPorts({ ...ports }));
  // };
  const submit = () => {
    props.node.setName(name);
    closeEdit();
  };
  const handleDeleteButton = (e, value) => {
    e.stopPropagation();
    if (e.key === 'Delete') {
      confirmDeletePort(value);
    }
  };
  const handleRowClick = (e, key, value) => {
    setHover(key);
    // dispatch(action.setPort(value));
    props.node.setSelected(false);
  };
  const selectTable = (e) => {
    props.node.setSelected(false);
    // dispatch(action.setSelectedNode(props.node));
    // dispatch(action.setActive('table'));
  };
  const content = (
    <Row>
      <Button
        type='ghost'
        icon={<PlusOutlined style={{ color: 'green' }} />}
        onClick={() => save()}
      />
      <Button
        type='ghost'
        icon={<EditOutlined style={{ color: 'cyan' }} />}
        onClick={() => openEdit()}
      />
      <Button
        type='ghost'
        icon={<DeleteOutlined style={{ color: 'red' }} />}
        onClick={() => confirm()}
      />
    </Row>
  );

  return (
    <div>
      {/* <Modal
        visible={editNode}
        onCancel={() => closeEdit()}
        okText='Save'
        cancelText='Cancel'
        onOk={() => submit()}
      >
        Name:
        <Input value={name} name='name' key='name' onChange={handelChangeName} />
        Body:
        {ports !== undefined
          ? Object.entries(ports).map(([key, value], index: any) =>
              value.getOptions().extras.key === 'PRIMARY KEY' ? (
                <Row gutter={16} key={index}>
                  <Col span='10'>
                    <Input
                      id='name'
                      value={value.getOptions().extras.name}
                      name={key}
                      key={index}
                      onChange={handleChangePort}
                    />
                  </Col>
                  <Col span='8'>
                    <AutoComplete
                      style={{ width: 150 }}
                      options={TYPE}
                      filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                      }
                      value={value.getOptions().extras.type}
                      onChange={(type) => {
                        value.getOptions().extras.type = type;
                        // dispatch(action.setPorts({ ...ports }));
                      }}
                      onSelect={(type) => {
                        value.getOptions().extras.type = type;

                        // dispatch(action.setPorts({ ...ports }));
                      }}
                    ></AutoComplete>
                  </Col>
                  <Col span='6'>
                    <Select
                      defaultValue={value.getOptions().extras.key}
                      style={{ width: 120 }}
                      onChange={(key) => {
                        value.getOptions().extras.key = key;
                        // dispatch(action.setPorts({ ...ports }));
                      }}
                    >
                      <Option value=''>null</Option>
                      <Option value='PRIMARY KEY'>PRIMARY KEY</Option>
                    </Select>
                  </Col>
                </Row>
              ) : (
                ''
              )
            )
          : ''}
        <hr />
        {ports !== undefined
          ? Object.entries(ports).map(([key, value], index: any) =>
              value.getOptions().extras.key !== 'PRIMARY KEY' ? (
                <Row gutter={16} key={index} style={{ paddingTop: '5px' }}>
                  <Col span='10'>
                    <Input
                      id='name'
                      value={value.getOptions().extras.name}
                      name={key}
                      key={index}
                      onChange={handleChangePort}
                    />
                  </Col>
                  <Col span='8'>
                    <AutoComplete
                      style={{ width: 150 }}
                      options={TYPE}
                      filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                      }
                      value={value.getOptions().extras.type}
                      onChange={(type) => {
                        value.getOptions().extras.type = type;
                        // dispatch(action.setPorts({ ...ports }));
                      }}
                      onSelect={(type) => {
                        value.getOptions().extras.type = type;

                        // dispatch(action.setPorts({ ...ports }));
                      }}
                    ></AutoComplete>
                  </Col>
                  <Col span='6'>
                    <Select
                      defaultValue={value.getOptions().extras.key}
                      style={{ width: 120 }}
                      onChange={(key) => {
                        value.getOptions().extras.key = key;
                        // dispatch(action.setPorts({ ...ports }));
                      }}
                    >
                      <Option value=''>null</Option>
                      <Option value='PRIMARY KEY'>PRIMARY KEY</Option>
                    </Select>
                  </Col>
                </Row>
              ) : (
                ''
              )
            )
          : ''}
      </Modal> */}
      <div
        className={'custom-node'}
        style={{
          position: 'relative',
          minWidth: props.size * 4,
          minHeight: props.size,
        }}
        onKeyDown={(e) => {
          e.stopPropagation();
          if (e.key === 'Delete') {
            confirm();
          }
        }}
        onClick={(e) => {
          selectTable(e);
        }}
        tabIndex={-1}
      >
        <div style={styles.cardHeader}>
          <p>{props.node.getOptions().extras}</p>
        </div>
        <div
          style={{
            background: '#F6F6F6',
            padding: '20px',
            border: 'none',
          }}
        >
          <div style={{ position: 'absolute', top: '0', right: '0' }}>
            <Popover placement='rightBottom' content={content} trigger='focus'>
              <Button
                type='ghost'
                style={{ border: 'none' }}
                icon={
                  <MoreOutlined style={{ color: 'white', fontSize: '20px', paddingTop: '5px' }} />
                }
              />
            </Popover>
          </div>
          {Object.entries(props.node.getPorts()).map(([key, value], index: any) =>
            value.getOptions().extras.key === 'PRIMARY KEY' ? (
              <Row
                key={index}
                onFocus={() => setHover(key)}
                onBlur={() => setHover('')}
                style={{
                  backgroundColor: hover === key ? '#4770FF' : '',
                  fontWeight: 'bold',
                  fontSize: '20px',
                }}
              >
                <PortWidget port={value} engine={props.engine} style={styles.leftPort}>
                  <Port />
                </PortWidget>
                <PortWidget port={value} engine={props.engine} style={styles.rightPort}>
                  <Port />
                </PortWidget>
                <Col span={10}>
                  <Text>{value.getOptions().extras.name}</Text>
                </Col>
                <Col span={8}>
                  <Text style={{ color: '#dbdd4d' }}>{value.getOptions().extras.type}</Text>
                </Col>
                <Col span={3}>
                  <Text>PK</Text>
                </Col>
                <Col span={3}>
                  <KeyOutlined style={{ color: 'yellow', fontSize: 20 }} />
                </Col>
              </Row>
            ) : (
              ''
            )
          )}
          <hr />

          {Object.entries(props.node.getPorts()).map(([key, value], index: any) =>
            value.getOptions().extras.key !== 'PRIMARY KEY' ? (
              <Row
                key={index}
                onClick={(e) => handleRowClick(e, key, value)}
                onBlur={() => setHover('')}
                style={{ backgroundColor: hover === key ? '#deecf3' : '' }}
                onKeyDown={(e) => handleDeleteButton(e, value)}
                tabIndex={-1}
              >
                <PortWidget port={value} engine={props.engine} style={styles.leftPort}>
                  <Port />
                </PortWidget>
                <PortWidget port={value} engine={props.engine} style={styles.rightPort}>
                  <Port />
                </PortWidget>
                <Col lg={10}>
                  <Text style={styles.fieldText}>{value.getOptions().extras.name}</Text>
                </Col>
                <Col lg={8}>
                  <Text style={styles.fieldText}>{value.getOptions().extras.type}</Text>
                </Col>
                <Col lg={3}>
                  <Text style={styles.fieldText}>{value.getOptions().extras.key}</Text>
                </Col>
              </Row>
            ) : (
              ''
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default CustomNodeWidget;
