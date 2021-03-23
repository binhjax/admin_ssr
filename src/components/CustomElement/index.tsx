import React, { memo, FC, useState } from 'react';
import { Button, Row, Popover, Modal } from 'antd';
import {
  DeleteOutlined,
  MoreOutlined,
  LinkOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { NodeProps, Handle, Position, removeElements } from 'react-flow-renderer';
import './index.css';
import EditModal from '../Modal/EditElementModal';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/element';
import Relationship from '../Modal/RelationshipModal';

const CustomElement: FC<NodeProps> = (props) => {
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.element.elements);
  const selectedNode = useSelector((state) => state.element.selectedNode);

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const confirm = () => {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Confirm delete table',
      okText: 'Yes',
      cancelText: 'No',
      onOk() {
        const element = elements.filter((el) => el.id === props.id);
        dispatch(action.setElements(removeElements(element, elements)));
      },
    });
  };
  const content = (
    <Row>
      <Button
        type='ghost'
        icon={<LinkOutlined style={{ color: 'green' }} />}
        onClick={() => setVisible(true)}
      />
      <Button
        type='ghost'
        icon={<DeleteOutlined style={{ color: 'red' }} />}
        onClick={() => confirm()}
      />
    </Row>
  );
  return (
    <>
      <EditModal data={props.data} open={open} id={props.id} setOpen={setOpen} />
      <Relationship open={visible} id={props.id} setVisible={setVisible} />
      <div
        onDoubleClick={() => handleOpen()}
        className='element'
        style={{
          boxShadow: props.id === selectedNode.id ? ' rgba(0, 0, 0, 0.2) 0px 20px 30px' : '',
        }}
      >
        <div className='element_popover'>
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
        <div className='element_header'>
          <div className='element_header_text'>{props.data.label}</div>
        </div>
        {props.data.columns.map((item, index) => (
          <div className='element_row' key={index}>
            {item.key === 'pk' ? (
              <>
                <Handle
                  type='target'
                  position={Position.Left}
                  id={item.id}
                  className='element_port'
                />
                <Handle
                  type='source'
                  position={Position.Right}
                  id={item.id}
                  className='element_port'
                />
                <div className='element_property' style={{ fontWeight: 700 }}>
                  <div style={{ color: '#000' }}>{item.name}</div>
                  <div style={{ color: '#999', marginLeft: 100 }}>{item.type}</div>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        ))}
        {props.data.columns.map((item, index) => (
          <div className='element_row' key={index}>
            {item.key !== 'pk' ? (
              <>
                <Handle
                  type='target'
                  position={Position.Left}
                  id={item.id}
                  className='element_port'
                />
                <Handle
                  type='source'
                  position={Position.Right}
                  id={item.id}
                  className='element_port'
                />

                <div className='element_property'>
                  <div>{item.name}</div>
                  <div style={{ marginLeft: 100 }}>{item.type}</div>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default memo(CustomElement);
