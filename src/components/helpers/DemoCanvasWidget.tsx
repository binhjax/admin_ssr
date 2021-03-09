import * as React from 'react';
import styled from '@emotion/styled';

export interface DemoCanvasWidgetProps {
  color?: string;
  background?: string;
}

export const Container = styled.div<{ color: string; background: string }>`
  height: 100%;
  background-color: ${p => p.background};
  display: flex;

  > * {
    height: calc(100vh - 125px);
    width: 100%;
    overflow: auto;
  }
`;

const DemoCanvasWidget: React.FC<DemoCanvasWidgetProps> = props => {
  return (
    <Container
      background={props.background || 'rgba(0, 0, 0, 0.08)'}
      color={props.color || 'rgba(255,255,255, 0.05)'}
    >
      {props.children}
    </Container>
  );
};
export default DemoCanvasWidget;
