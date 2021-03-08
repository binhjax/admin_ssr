import React from 'react';
import { Col, Row, Input, Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { PortModel } from '@projectstorm/react-diagrams';
const TableDetail = (props) => {
  return (
    <div>
      Table:
      <Input
        value={props.selectedNode ? props.selectedNode.getOptions().extras : ''}
        name='name'
        key='name'
        onChange={props.handelChangeName}
      />
      <div style={{ paddingTop: 20 }}>
        Columns:
        {props.selectedNode !== undefined
          ? Object.entries(
              props.selectedNode
                ? (props.selectedNode.getPorts() as { [s: string]: PortModel })
                : ''
            ).map(([key, value], index: any) =>
              value.getOptions().extras.key === 'PRIMARY KEY' ? (
                <Row
                  gutter={8}
                  key={index}
                  onClick={() => props.selectPort(value)}
                  style={{
                    paddingTop: '5px',
                    background: props.selectedPort === value ? '#DEECF3' : '',
                  }}
                >
                  <Col span='10'>
                    <p
                      style={{
                        color: '#1890ff',
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                      onClick={() => props.openDetail(value)}
                    >
                      {value.getOptions().extras.name}
                    </p>
                  </Col>
                  <Col span='9'>
                    <p>{value.getOptions().extras.type}</p>
                  </Col>
                  <Col span='5'>
                    <p>PK</p>
                  </Col>
                </Row>
              ) : (
                ''
              )
            )
          : ''}
        <hr />
        {props.selectedNode !== undefined
          ? Object.entries(
              props.selectedNode
                ? (props.selectedNode.getPorts() as { [s: string]: PortModel })
                : ''
            ).map(([key, value], index: any) =>
              value.getOptions().extras.key !== 'PRIMARY KEY' ? (
                <Row
                  gutter={8}
                  key={index}
                  style={{
                    paddingTop: '5px',
                    background: props.selectedPort === value ? '#DEECF3' : '',
                  }}
                  onClick={() => props.selectPort(value)}
                >
                  <Col span='10'>
                    <p
                      style={{
                        color: '#1890ff',
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                      }}
                      onClick={() => props.openDetail(value)}
                    >
                      {value.getOptions().extras.name}
                    </p>
                  </Col>
                  <Col span='9'>
                    <p>{value.getOptions().extras.type}</p>
                  </Col>
                  <Col span='5'>
                    <p>{value.getOptions().extras.key}</p>
                  </Col>
                </Row>
              ) : (
                ''
              )
            )
          : ''}
      </div>
      <div style={{ fontSize: '20px' }}>
        <hr />
        <Button
          onClick={() => props.addPort()}
          style={{ border: 'none' }}
          icon={<PlusOutlined />}
        />
        <Button
          disabled={props.selectedPort === undefined}
          onClick={() => props.confirmDeletePort(props.selectedPort)}
          style={{ border: 'none' }}
          icon={<DeleteOutlined />}
        />
      </div>
    </div>
  );
};
export default TableDetail;
