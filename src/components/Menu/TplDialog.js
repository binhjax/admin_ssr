import React, { PureComponent } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Modal, Input, Row, Col, Tooltip } from 'antd';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';

@Form.create()
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
        <Form>
          <Form.Item label="Interface path" {...formItemLayout}>
            <Row>
              <Col span={20}>
                {getFieldDecorator('path', {
                  initialValue: '/api/v1/',
                  rules: [
                    {
                      required: true,
                      message: 'Please enter the interface path',
                    },
                  ],
                })(<Input placeholder="please enter" />)}
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
