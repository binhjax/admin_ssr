import React, { PureComponent } from 'react';
import { Modal, Input, Card } from 'antd';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import MenuResource from './MenuResource';

class FormDialog extends PureComponent {
  handleCancel = () => {
    const { onCancel } = this.props;
    if (onCancel) {
      onCancel();
    }
  };

  handleOKClick = () => {
    const { form, onSubmit } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit({ ...values });
      }
    });
  };

  render() {
    const { visible, formData, form } = this.props;
    const { getFieldDecorator } = form;

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
        title="Menu action (button) management"
        width={650}
        visible={visible}
        maskClosable={false}
        destroyOnClose
        onOk={this.handleOKClick}
        onCancel={this.handleCancel}
        style={{ top: 20 }}
        bodyStyle={{ maxHeight: 'calc( 100vh - 158px )', overflowY: 'auto' }}
      >
        <Form>
          <Form.Item {...formItemLayout} label="Action Number">
            {getFieldDecorator('code', {
              initialValue: formData.code,
              rules: [
                {
                  required: true,
                  message: 'Please enter the action number',
                },
              ],
            })(<Input placeholder="please enter" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Action name">
            {getFieldDecorator('name', {
              initialValue: formData.name,
              rules: [
                {
                  required: true,
                  message: 'Please enter the action name',
                },
              ],
            })(<Input placeholder="please enter" />)}
          </Form.Item>
          <Form.Item>
            <Card title="Resource management (server interface mapping)" bordered={false}>
              {getFieldDecorator('resources', {
                initialValue: formData.resources,
              })(<MenuResource />)}
            </Card>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(FormDialog);
