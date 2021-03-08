import React from 'react';
import { Application } from '../Application';
import { Button, Row, Tooltip } from 'antd';
import TrayItemWidget from '../components/TrayItemWidget';
import {
  ShrinkOutlined,
  ApartmentOutlined,
  ArrowsAltOutlined,
  LockOutlined,
  UnlockOutlined,
  SaveOutlined,
  ConsoleSqlOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';
export interface ActionmenuProps {
  app: Application;
}
const style = {
  border: 'none',
  marginLeft: '20px',
};
const ActionMenu: React.FC<ActionmenuProps> = (props) => {
  return (
    <Row>
      <TrayItemWidget model={{ type: 'custom' }} name='Table' color='rgb(0,192,255)' />
      <Tooltip placement='bottom' color='blue' title='Auto distribute'>
        <Button
          onClick={() => props.app.autoDistribute()}
          icon={<ApartmentOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
      <Tooltip placement='bottom' color='blue' title='Zoom to fit'>
        <Button
          onClick={() => props.app.zoomToFit()}
          icon={<ShrinkOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
      <Tooltip placement='bottom' color='blue' title='Zoom node'>
        <Button
          onClick={() => props.app.zoomNode()}
          icon={<ArrowsAltOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
      <Tooltip placement='bottom' color='blue' title='Lock drag'>
        <Button
          onClick={() => props.app.getDiagramEngine().getModel().setLocked(true)}
          icon={<LockOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
      <Tooltip placement='bottom' color='blue' title='Unlock drag'>
        <Button
          onClick={() => props.app.getDiagramEngine().getModel().setLocked(false)}
          icon={<UnlockOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
      <Tooltip placement='bottom' color='blue' title='Save'>
        <Button
          onClick={() => props.app.saveNode()}
          icon={<SaveOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
      <Tooltip placement='bottom' color='blue' title='Convert to Json'>
        <Button
          onClick={() => props.app.toJson()}
          icon={<ConsoleSqlOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
      <Tooltip placement='bottom' color='blue' title='Zoom in'>
        <Button
          onClick={() => props.app.zoomIn()}
          icon={<ZoomInOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
      <Tooltip placement='bottom' color='blue' title='Zoom out'>
        <Button
          onClick={() => props.app.zoomOut()}
          icon={<ZoomOutOutlined style={{ fontSize: 30 }} />}
          style={style}
        />
      </Tooltip>
    </Row>
  );
};
export default ActionMenu;
