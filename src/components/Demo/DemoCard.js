import React, { PureComponent } from 'react';
import { connect } from 'dva';


import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Modal, Radio } from 'antd';

// @Form.create()
class DemoCard extends PureComponent {
  onOKClick = () => {
    const { form, onSubmit } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const formData = { ...values };
        formData.status = parseInt(formData.status, 10);
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
      demo: { formTitle, formVisible, formData, submitting },
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
          <Form.Item {...formItemLayout} label="Code">
            {getFieldDecorator('code', {
              initialValue: formData.code,
              rules: [
                {
                  required: true,
                  message: 'Please enter the number',
                },
              ],
            })(<Input placeholder="Please enter the number" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Name">
            {getFieldDecorator('name', {
              initialValue: formData.name,
              rules: [
                {
                  required: true,
                  message: 'Please enter a name',
                },
              ],
            })(<Input placeholder="Please enter a name" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Menu">
            {getFieldDecorator('memo', {
              initialValue: formData.memo,
            })(<Input.TextArea rows={2} placeholder="Please enter a name" />)}
          </Form.Item>
          <Form.Item {...formItemLayout} label="Status">
            {getFieldDecorator('status', {
              initialValue: formData.status ? formData.status.toString() : '1',
            })(
              <Radio.Group>
                <Radio value="1">Active</Radio>
                <Radio value="2">Deactive</Radio>
              </Radio.Group>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default connect(state => {
  return { demo: state.demo };
})(Form.create()(DemoCard));
