import React from 'react';
import { Input, Button, AutoComplete, Select } from 'antd';
import { TYPE } from '../../../const';
import { RollbackOutlined } from '@ant-design/icons';
const PortDetail = (props) => {
  const { Option } = Select;

  return (
    <div>
      {props.port !== undefined ? (
        <div>
          <Button
            style={{ border: 'none', paddingLeft: '0' }}
            icon={<RollbackOutlined style={{ fontSize: '20' }} />}
            onClick={() => {
              props.setActive('table');
              props.setSelectedPort(undefined);
            }}
          >
            {props.selectedNode ? props.selectedNode.getOptions().extras : ''}
          </Button>
          <div>
            Name:
            <Input
              id='name'
              value={props.port ? props.port.getOptions().extras.name : ''}
              onChange={props.handleChangePort}
            />
          </div>
          <div>
            <p>Data type:</p>
            <AutoComplete
              style={{ width: 200 }}
              options={TYPE}
              filterOption={(inputValue, option) =>
                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
              }
              value={props.port.getOptions().extras.type}
              onChange={(value) => {
                props.port.getOptions().extras.type = value;
                props.dispatchPorts();
              }}
              onSelect={(value) => {
                props.port.getOptions().extras.type = value;

                props.dispatchPorts();
              }}
            ></AutoComplete>
          </div>
          <div>
            <p>Key:</p>
            <Select
              value={props.port.getOptions().extras.key}
              style={{ width: 200 }}
              onSelect={(key) => {
                props.port.getOptions().extras.key = key;
                props.dispatchPorts();
              }}
            >
              <Option value=''>null</Option>
              <Option value='PRIMARY KEY'>PRIMARY KEY</Option>
            </Select>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default PortDetail;
