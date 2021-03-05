import React, { useEffect } from 'react';
import TrayWidget from './components/TrayWidget';
import ActionMenu from './components/ActionMenu';
import LinkDetail from './components/LinkDetail';
import TableDetail from './components/TableDetail';
import PortDetail from './components/PortDetail';

import { Application } from './Application';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import DemoCanvasWidget from '../helpers/DemoCanvasWidget';
import { CustomNodeModel } from '../CustomNode/CustomNodeModel';
import styled from '@emotion/styled';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { PortModel } from '@projectstorm/react-diagrams';
import { CustomPortModel } from '../CustomNode/CustomPortModel';
// import * as action from '../../actions/node';
import { CustomLinkModel } from '../CustomNode/CustomLinkModel';
export interface BodyWidgetProps {
  app: Application;
}

export const Layer = styled.div`
  position: relative;
  flex-grow: 1;
`;

const BodyWidget: React.FC<BodyWidgetProps> = (props) => {
  const dispatch = useDispatch();
  const [, updateState] = React.useState();
  // const node = useSelector((state) => state.node);
  // const ports: { [s: string]: PortModel } = useSelector((state) => state.node.ports);

  const forceUpdate = React.useCallback(() => updateState({}), []);
  const [port, setPort] = React.useState<CustomPortModel>();
  const [selectedNode, setSelectedNode] = React.useState<CustomNodeModel>();
  const [active, setActive] = React.useState('table');
  const [selectedPort, setSelectedPort] = React.useState<PortModel>();
  const [link, setLink] = React.useState<CustomLinkModel>();
  // useEffect(() => {
  //   setSelectedNode(node.selectedNode);
  //   setActive(node.active);
  //   setLink(node.link);
  // }, [node.selectedNode, node.active, node.link, node.name, setSelectedNode]);

  const handelChangeName = (e: any) => {
    selectedNode.getOptions().extras = e.target.value;
    // dispatch(action.setSelectedNode(selectedNode));
    props.app.getDiagramEngine().repaintCanvas();
  };

  const handleChangePort = (e) => {
    const { id, value } = e.target;
    port.getOptions().extras[id] = value;
    // dispatch(
    //   action.setPorts({
    //     ...ports
    //   })
    // );
  };
  const openDetail = (value) => {
    setPort(value as CustomPortModel);
    setActive('detail');
  };
  const confirmDeletePort = (port: PortModel) => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Confirm delete port',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        selectedNode.deletePort(port as CustomPortModel);
        // dispatch(action.setPorts(selectedNode.getPorts()));
      },
    });
  };
  const selectPort = (value) => {
    setSelectedPort(value);
  };

  const addPort = () => {
    let port = selectedNode.addCustomPort('new_col', '', '');
    // dispatch(action.setPorts(selectedNode.getPorts()));
    openDetail(port);
  };

  // const dispatchPorts = () => {
  //   dispatch(
  //     action.setPorts({
  //       ...ports,
  //     })
  //   );
  // };
  return (
    <Card extra={<ActionMenu app={props.app} />}>
      <Row gutter={16} style={{ width: '100%', marginTop: '5px' }}>
        <Col lg={18} md={24} sm={24} xs={24}>
          <Layer
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPort(undefined);
            }}
            onDrop={(event) => {
              var node: CustomNodeModel;
              node = new CustomNodeModel('Name');
              var point = props.app.getDiagramEngine().getRelativeMousePoint(event);
              node.setPosition(point);
              props.app.getDiagramEngine().getModel().addNode(node);
              forceUpdate();
            }}
            onDragOver={(event) => {
              event.preventDefault();
            }}
          >
            <DemoCanvasWidget background='#ffff'>
              <CanvasWidget engine={props.app.getDiagramEngine()} />
            </DemoCanvasWidget>
          </Layer>
        </Col>
        <Col lg={6} md={24} xs={24} sm={24}>
          <TrayWidget>
            {active === 'table' ? (
              <TableDetail
                selectedPort={selectedPort}
                selectedNode={selectedNode}
                selectPort={selectPort}
                addPort={addPort}
                confirmDeletePort={confirmDeletePort}
                handelChangeName={handelChangeName}
                openDetail={openDetail}
              />
            ) : (
              ''
            )}
            {active === 'detail' ? (
              <PortDetail
                port={port}
                selectedNode={selectedNode}
                dispatchPorts={dispatchPorts}
                handleChangePort={handleChangePort}
                setActive={setActive}
                setSelectedPort={setSelectedPort}
              />
            ) : (
              ''
            )}
            {active === 'link' ? (
              <div>{link !== undefined ? <LinkDetail link={link} /> : ''}</div>
            ) : (
              ''
            )}
          </TrayWidget>
        </Col>
      </Row>
    </Card>
  );
};
export default BodyWidget;
