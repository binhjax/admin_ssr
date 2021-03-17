import React, { PureComponent } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Modal, Input, Row, Col, Tooltip, Form } from 'antd';
import '@ant-design/compatible/assets/index.css';

class TplDialog extends PureComponent {
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
    const { visible, form } = this.props;
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
        title="Quickly create templates"
        width={450}
        visible={visible}
        maskClosable={false}
        destroyOnClose
        onOk={this.handleOKClick}
        onCancel={this.handleCancel}
        style={{ top: 20 }}
        bodyStyle={{ maxHeight: 'calc( 100vh - 158px )', overflowY: 'auto' }}
      >
        <Form
          initialValue={{
            path: '/api/v1/',
          }}
        >
          <Form.Item label="Interface path" {...formItemLayout} name='path' rules={
            [
              {
                required: true,
                message: 'Please enter the interface path',
              },
            ]
          }>
            <Row>
              <Col span={20}>
                <Input placeholder="please enter" />
              </Col>
              <Col span={4} style={{ textAlign: 'center' }}>
                <Tooltip title="example: /api/v1/demos">
                  <QuestionCircleOutlined />
                </Tooltip>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default TplDialog;
