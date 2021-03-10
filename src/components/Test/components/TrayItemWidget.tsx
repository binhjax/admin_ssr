import * as React from 'react';
import styled from '@emotion/styled';
import { Tooltip } from 'antd';
export interface TrayItemWidgetProps {
  model: any;
  color?: string;
  name: string;
}

export const Tray = styled.div<{ color: string }>`
  color: black;
  font-family: Helvetica, Arial;
  border: solid 3px ${p => p.color};
  border-radius: 5px;
  margin-bottom: 2px;
  cursor: pointer;
`;

const TrayItemWidget: React.FC<TrayItemWidgetProps> = props => {
  return (
    <Tooltip placement="bottom" color="blue" title="Drag to add table">
      <Tray
        color={props.color}
        draggable={true}
        onDragStart={event => {
          event.dataTransfer.setData('storm-diagram-node', JSON.stringify(props.model));
        }}
        className="tray-item"
      >
        <div style={{ padding: 5, fontSize: 11 }}>{props.name}</div>
      </Tray>
    </Tooltip>
  );
};
export default TrayItemWidget;
