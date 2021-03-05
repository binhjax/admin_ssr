import * as React from 'react';
import styled from '@emotion/styled';

export const Tray = styled.div`
  background: white;
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
`;

const TrayWidget: React.FC = (props) => {
  return <Tray>{props.children}</Tray>;
};
export default TrayWidget;
