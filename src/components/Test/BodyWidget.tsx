import React from 'react';
import ActionMenu from './components/ActionMenu';

import { Application } from './Application';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import DemoCanvasWidget from '../helpers/DemoCanvasWidget';
import { CustomNodeModel } from './CustomNodeModel';
import styled from '@emotion/styled';

export interface BodyWidgetProps {
  app: Application;
}

export const Layer = styled.div`
  height: 100%;
  position: relative;
  flex-grow: 1;
`;

const BodyWidget: React.FC<BodyWidgetProps> = props => {
  const [, updateState] = React.useState();

  const forceUpdate = React.useCallback(() => updateState({}), []);

  return (
    <div style={{ height: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          background: '#fff',
        }}
      >
        <ActionMenu app={props.app} />
      </div>
      <Layer
        onDrop={event => {
          var node: CustomNodeModel;
          node = new CustomNodeModel('Name');
          var point = props.app.getDiagramEngine().getRelativeMousePoint(event);
          node.setPosition(point);
          props.app
            .getDiagramEngine()
            .getModel()
            .addNode(node);
          forceUpdate();
        }}
        onDragOver={event => {
          event.preventDefault();
        }}
      >
        <DemoCanvasWidget background="#ffff">
          <CanvasWidget engine={props.app.getDiagramEngine()} />
        </DemoCanvasWidget>
      </Layer>
    </div>
  );
};
export default BodyWidget;
