import React, { PureComponent } from 'react';

import '@ant-design/compatible/assets/index.css';
import { Input, Modal, Radio, Form } from 'antd';
import { md5Hash } from '../../utils/utils';
import RoleSelect from './RoleSelect';
import { connect } from 'dva';

class UserCard extends PureComponent {
  onOKClick = () => {
    const { form, onSubmit } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const formData = { ...values };
        formData.status = parseInt(formData.status, 10);
        if (formData.password && formData.password !== '') {
          formData.password = md5Hash(formData.password);
        }
        onSubmit(formData);
      }
    });
  };

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  render() {
    const {
      onCancel,
      user: { formType, formTitle, formVisible, formData, submitting },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };

    return (
      <Modal
        title={formTitle}
        width={600}
        visible={formVisible}
        maskClosable={false}
        confirmLoading={submitting}
        destroyOnClose
        onOk={this.onOKClick}
        onCancel={onCancel}
        style={{ top: 20 }}
        bodyStyle={{ maxHeight: 'calc( 100vh - 158px )', overflowY: 'auto' }}
      >
        <Form
          initialValue={{
            user_name: formData.user_name,
            password: formData.password,
            real_name: formData.real_name,
            user_roles: formData.user_roles,
            status: formData.status,
            email: formData.email,
            phone: formData.phone
          }}
        >
          <Form.Item {...formItemLayout} label="Username" name='user_name' rules={[
            {
              required: true,
              message: 'please enter username',
            },
          ]}>
            <Input placeholder="please enter username" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="login password" name='password' rules={[
            {
              required: formType === 'A',
              message: 'Please enter your password',
            },
          ]}>
            <Input
              type="password"
              placeholder={
                formType === 'A'
                  ? 'Please enter your password'
                  : 'Leave blank to not modify the login password'
              }
            />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Actual Name" name='real_name' rules={
            [
              {
                required: true,
                message: 'Please enter your name',
              },
            ]
          }>
            <Input placeholder="enter your name" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="User Role" name='user_roles' rules={[
            {
              required: true,
              message: 'Please select the role',
            },
          ]}>
            <RoleSelect />
          </Form.Item>
          <Form.Item {...formItemLayout} label="User Status" name='status'>
            <Radio.Group>
              <Radio value="1">Normal</Radio>
              <Radio value="2">Deactivate</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item {...formItemLayout} label="Mailbox" name='email'>
            <Input placeholder="Please input your email" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Phone Number" name='phone'>
            <Input placeholder="Please enter phone number" />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default connect(state => ({
  user: state.user,
}))(UserCard);