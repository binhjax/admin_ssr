import React, { PureComponent } from 'react';
import { connect } from 'dva';

import '@ant-design/compatible/assets/index.css';
import { Input, Modal, Radio, Form } from 'antd';

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
        initialValue={{
          code: formData.code,
          name: formData.name,
          memo: formData.memo,
          status: formData.status
        }}
      >
        <Form>
          <Form.Item {...formItemLayout} label="Code" name='code' rules={[
            {
              required: true,
              message: 'Please enter the number',
            },
          ]} >
            <Input placeholder="Please enter the number" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Name" name='name' rules={[
            {
              required: true,
              message: 'Please enter a name',
            },
          ]}>
            <Input placeholder="Please enter a name" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Menu" name='memo' >
            <Input.TextArea rows={2} placeholder="Please enter a name" />
          </Form.Item>
          <Form.Item {...formItemLayout} label="Status" name='status' >
            <Radio.Group>
              <Radio value="1">Active</Radio>
              <Radio value="2">Deactive</Radio>
            </Radio.Group>
          </Form.Item>
        </Form>
      </Modal >
    );
  }
}
export default connect(state => {
  return { demo: state.demo };
})(DemoCard);
