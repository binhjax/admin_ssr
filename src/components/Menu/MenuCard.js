import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Card, Radio, Modal, TreeSelect, Tooltip, InputNumber, Row, Col } from 'antd';
import MenuAction from './MenuAction';
// import WithDva from '../../utils/store';

class MenuCard extends PureComponent {
  onOKClick = () => {
    const { form, onSubmit } = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const formData = { ...values };
        formData.show_status = parseInt(formData.show_status, 10);
        formData.status = parseInt(formData.status, 10);
        formData.sequence = parseInt(formData.sequence, 10);
        onSubmit(formData);
      }
    });
  };

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  toTreeSelect = data => {
    if (!data) {
      return [];
    }
    const newData = [];
    for (let i = 0; i < data.length; i += 1) {
      const item = { ...data[i], title: data[i].name, value: data[i].id };
      if (item.children && item.children.length > 0) {
        item.children = this.toTreeSelect(item.children);
      }
      newData.push(item);
    }
    return newData;
  };

  render() {
    const {
      menu: { formVisible, formTitle, formData, submitting, treeData },
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

    return (
      <Modal
        title={formTitle}
        width={1000}
        visible={formVisible}
        maskClosable={false}
        confirmLoading={submitting}
        destroyOnClose
        onOk={this.onOKClick}
        onCancel={onCancel}
        style={{ top: 20 }}
        bodyStyle={{ maxHeight: 'calc( 100vh - 158px )', overflowY: 'auto' }}
      >
        <Card bordered={false}>
          <Form>
            <Row>
              <Col span={12}>
                <Form.Item {...formItemLayout} label="Menu name">
                  {getFieldDecorator('name', {
                    initialValue: formData.name,
                    rules: [
                      {
                        required: true,
                        message: 'Please enter the menu name',
                      },
                    ],
                  })(<Input placeholder="please enter" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item {...formItemLayout} label="Upper menu">
                  {getFieldDecorator('parent_id', {
                    initialValue: formData.parent_id,
                  })(
                    <TreeSelect
                      showSearch
                      treeNodeFilterProp="title"
                      style={{ width: '100%' }}
                      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                      treeData={this.toTreeSelect(treeData)}
                      placeholder="please choose"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item {...formItemLayout} label="Access path">
                  {getFieldDecorator('router', {
                    initialValue: formData.router,
                  })(<Input placeholder="please enter" />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item {...formItemLayout} label="Menu icon">
                  <Row>
                    <Col span={20}>
                      {getFieldDecorator('icon', {
                        initialValue: formData.icon,
                      })(<Input placeholder="please enter" />)}
                    </Col>
                    <Col span={4} style={{ textAlign: 'center' }}>
                      <Tooltip title="Icons only support official Icon icons">
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </Col>
                  </Row>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item {...formItemLayout} label="Whether to show">
                  {getFieldDecorator('show_status', {
                    initialValue: formData.show_status ? formData.show_status.toString() : '1',
                  })(
                    <Radio.Group>
                      <Radio value="1">display</Radio>
                      <Radio value="2">hide</Radio>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item {...formItemLayout} label="Status">
                  {getFieldDecorator('status', {
                    initialValue: formData.status ? formData.status.toString() : '1',
                  })(
                    <Radio.Group>
                      <Radio value="1">Enable</Radio>
                      <Radio value="2">Disable</Radio>
                    </Radio.Group>
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row>
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
              <Col span={12}>
                <Form.Item {...formItemLayout} label="Remarks">
                  {getFieldDecorator('memo', {
                    initialValue: formData.memo,
                  })(<Input placeholder="please enter" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Card title="Action (button) management" bordered={false}>
                  {getFieldDecorator('actions', {
                    initialValue: formData.actions,
                  })(<MenuAction />)}
                </Card>
              </Col>
            </Row>
          </Form>
        </Card>
      </Modal>
    );
  }
}
export default connect(({ menu }) => ({
  menu,
}))(Form.create(MenuCard));
// export default MenuCard;
