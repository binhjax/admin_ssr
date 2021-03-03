import React, { PureComponent } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Modal, message, Card, Row, Col, InputNumber } from 'antd';

import RoleMenu from './RoleMenu';
import WithDva from '../../utils/store';

// @connect(state => ({
//   role: state.role,
// }))

@Form.create()
class RoleCard extends PureComponent {
  onOKClick = () => {
    const { form, onSubmit } = this.props;

    form.validateFieldsAndScroll((err, values) => {
      if (err) {
        return;
      }
      const formData = { ...values };
      formData.sequence = parseInt(formData.sequence, 10);
      formData.status = 1;
      if (!formData.role_menus || formData.role_menus.length === 0) {
        message.warning('Please select menu permissions!');
        return;
      }

      const roleMenus = [];
      formData.role_menus.forEach(item => {
        if (item.actions && item.actions.length > 0) {
          item.actions.forEach(v => {
            roleMenus.push({ menu_id: item.menu_id, action_id: v });
          });
        } else {
          roleMenus.push({ menu_id: item.menu_id });
        }
      });
      formData.role_menus = roleMenus;

      onSubmit(formData);
    });
  };

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  render() {
    const {
      role: { formTitle, formVisible, formData, submitting },
      form: { getFieldDecorator },
      onCancel,
    } = this.props;

    const formItemLayout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 18,
      },
    };

    const formItemLayout2 = {
      labelCol: {
        span: 3,
      },
      wrapperCol: {
        span: 21,
      },
    };

    return (
      <Modal
        title={formTitle}
        width={800}
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
          <Row>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="Role Name">
                {getFieldDecorator('name', {
                  initialValue: formData.name,
                  rules: [
                    {
                      required: true,
                      message: 'Please enter the role name',
                    },
                  ],
                })(<Input placeholder="Please enter the role name" />)}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item {...formItemLayout} label="Sort value">
                {getFieldDecorator('sequence', {
                  initialValue: formData.sequence ? formData.sequence.toString() : '1000000',
                  rules: [
                    {
                      required: true,
                      message: 'Please enter a sort value',
                    },
                  ],
                })(<InputNumber min={1} style={{ width: '100%' }} />)}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item {...formItemLayout2} label="Remarks">
            {getFieldDecorator('memo', {
              initialValue: formData.memo,
            })(<Input.TextArea rows={2} placeholder="Please enter a note" />)}
          </Form.Item>
          <Form.Item>
            <Card title="Select menu permissions" bordered={false}>
              {getFieldDecorator('role_menus', {
                initialValue: formData.role_menus,
              })(<RoleMenu />)}
            </Card>
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}
export default WithDva(state => ({
  role: state.role,
}))(RoleCard);
// export default RoleCard;
