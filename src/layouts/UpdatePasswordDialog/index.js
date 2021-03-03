import React, { PureComponent } from 'react';
import { Form } from '@ant-design/compatible';
// import '../../pages/menu/MenuAction/index.css';
import { Input, Modal, message } from 'antd';
import { updatePwd } from '@/services/login';
import { md5Hash } from '../../utils/utils';

@Form.create()
class UpdatePasswordDialog extends PureComponent {
  state = {
    submitting: false,
  };

  onOKClick = () => {
    const { form } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      if (values.new_password !== values.confirm_new_password) {
        message.warning('新密码与确认新密码不一致！');
        return;
      }

      this.setState({ submitting: true });
      const formData = {
        old_password: md5Hash(values.old_password),
        new_password: md5Hash(values.new_password),
      };
      updatePwd(formData).then(res => {
        if (res.status === 'OK') {
          message.success('密码更新成功！');
          this.handleCancel();
        }
        this.setState({ submitting: false });
      });
    });
  };

  handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  render() {
    const {
      visible,
      form: { getFieldDecorator },
    } = this.props;

    const { submitting } = this.state;

    const formItemLayout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 16,
      },
    };

    return (
      <Modal
        title="Change personal password"
        width={450}
        visible={visible}
        maskClosable={false}
        confirmLoading={submitting}
        destroyOnClose
        onOk={this.onOKClick}
        onCancel={this.handleCancel}
        style={{ top: 20 }}
        bodyStyle={{ maxHeight: 'calc( 100vh - 158px )', overflowY: 'auto' }}
      >
        <Form>
          <Form.Item {...formItemLayout} label="Old Password">
            {getFieldDecorator('old_password', {
              rules: [
                {
                  required: true,
                  message: 'Please enter the old password',
                },
              ],
            })(<Input type="password" placeholder="Please enter the old password" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="New Password">
            {getFieldDecorator('new_password', {
              rules: [
                {
                  required: true,
                  message: 'Please enter a new password',
                },
              ],
            })(<Input type="password" placeholder="Please" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Confirm the new password">
            {getFieldDecorator('confirm_new_password', {
              rules: [
                {
                  required: true,
                  message: 'Please enter confirm new password',
                },
              ],
            })(<Input type="password" placeholder="Please enter confirm new password" />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default UpdatePasswordDialog;
