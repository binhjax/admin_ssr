import React, { PureComponent } from 'react';

import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Modal, Radio } from 'antd';
import { md5Hash } from '../../utils/utils';
import RoleSelect from './RoleSelect';
import WithDva from '../../utils/store';

// @connect(state => ({
//   user: state.user,
// }))
@Form.create()
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
      form: { getFieldDecorator },
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
        <Form>
          <Form.Item {...formItemLayout} label="Username">
            {getFieldDecorator('user_name', {
              initialValue: formData.user_name,
              rules: [
                {
                  required: true,
                  message: 'please enter username',
                },
              ],
            })(<Input placeholder="please enter username" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="login password">
            {getFieldDecorator('password', {
              initialValue: formData.password,
              rules: [
                {
                  required: formType === 'A',
                  message: 'Please enter your password',
                },
              ],
            })(
              <Input
                type="password"
                placeholder={
                  formType === 'A'
                    ? 'Please enter your password'
                    : 'Leave blank to not modify the login password'
                }
              />
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Actual Name">
            {getFieldDecorator('real_name', {
              initialValue: formData.real_name,
              rules: [
                {
                  required: true,
                  message: 'Please enter your name',
                },
              ],
            })(<Input placeholder="enter your name" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="User Role">
            {getFieldDecorator('user_roles', {
              initialValue: formData.user_roles,
              rules: [
                {
                  required: true,
                  message: 'Please select the role',
                },
              ],
            })(<RoleSelect />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="User Status">
            {getFieldDecorator('status', {
              initialValue: formData.status ? formData.status.toString() : '1',
            })(
              <Radio.Group>
                <Radio value="1">Normal</Radio>
                <Radio value="2">Deactivate</Radio>
              </Radio.Group>
            )}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Mailbox">
            {getFieldDecorator('email', {
              initialValue: formData.email,
            })(<Input placeholder="Please input your email" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Phone Number">
            {getFieldDecorator('phone', {
              initialValue: formData.phone,
            })(<Input placeholder="Please enter phone number" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default WithDva(state => ({
  user: state.user,
}))(UserCard);
// export default UserCard;
