import React, { PureComponent } from 'react';
import { connect } from 'dva';

import { Form } from '@ant-design/compatible';
// import '../login/index.css';
import { Row, Col, Card, Input, Button, Table, Modal, Badge } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PButton from '../../components/PermButton';
import { formatDate } from '../../utils/utils';
import DemoCard from '../../components/Demo/DemoCard';

import styles from './demo.less';

class DemoList extends PureComponent {
  state = {
    selectedRowKeys: [],
    selectedRows: [],
  };

  componentDidMount() {
    this.dispatch({
      type: 'demo/fetch',
      search: {},
      pagination: {},
    });
  }

  onItemDisableClick = item => {
    this.dispatch({
      type: 'demo/changeStatus',
      payload: { id: item.id, status: 2 },
    });
  };

  onItemEnableClick = item => {
    this.dispatch({
      type: 'demo/changeStatus',
      payload: { id: item.id, status: 1 },
    });
  };

  onItemEditClick = item => {
    this.dispatch({
      type: 'demo/loadForm',
      payload: {
        type: 'E',
        id: item.id,
      },
    });
  };

  onAddClick = () => {
    this.dispatch({
      type: 'demo/loadForm',
      payload: {
        type: 'A',
      },
    });
  };

  onDelOKClick(id) {
    this.dispatch({
      type: 'demo/del',
      payload: { id },
    });
    this.clearSelectRows();
  }

  clearSelectRows = () => {
    const { selectedRowKeys } = this.state;
    if (selectedRowKeys.length === 0) {
      return;
    }
    this.setState({ selectedRowKeys: [], selectedRows: [] });
  };

  onItemDelClick = item => {
    Modal.confirm({
      title: `Confirm to delete [Basic sample data:${item.name}】？`,
      okText: 'Confirm',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: this.onDelOKClick.bind(this, item.id),
    });
  };

  handleTableSelectRow = (record, selected) => {
    const keys = [];
    const rows = [];
    if (selected) {
      keys.push(record.id);
      rows.push(record);
    }
    this.setState({
      selectedRowKeys: keys,
      selectedRows: rows,
    });
  };

  onTableChange = pagination => {
    this.dispatch({
      type: 'demo/fetch',
      pagination: {
        current: pagination.current,
        pageSize: pagination.pageSize,
      },
    });
    this.clearSelectRows();
  };

  onResetFormClick = () => {
    const { form } = this.props;
    form.resetFields();
    this.dispatch({
      type: 'demo/fetch',
      search: {},
      pagination: {},
    });
  };

  onSearchFormSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    const { form } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if (err) {
        return;
      }
      this.dispatch({
        type: 'demo/fetch',
        search: values,
        pagination: {},
      });
      this.clearSelectRows();
    });
  };

  onDataFormSubmit = data => {
    this.dispatch({
      type: 'demo/submit',
      payload: data,
    });
    this.clearSelectRows();
  };

  onDataFormCancel = () => {
    this.dispatch({
      type: 'demo/changeFormVisible',
      payload: false,
    });
  };

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  renderDataForm() {
    return <DemoCard onCancel={this.onDataFormCancel} onSubmit={this.onDataFormSubmit} />;
  }

  renderSearchForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.onSearchFormSubmit}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('queryValue')(<Input placeholder="请输入需要查询的内容" />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <div style={{ overflow: 'hidden', paddingTop: 4 }}>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.onResetFormClick}>
                重置
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    );
  }

  render() {
    const {
      loading,
      demo: {
        data: { list, pagination },
      },
    } = this.props;

    const { selectedRows, selectedRowKeys } = this.state;

    const columns = [
      {
        title: 'Code',
        dataIndex: 'code',
      },
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Remarks',
        dataIndex: 'memo',
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: val => {
          if (val === 1) {
            return <Badge status="success" text="Enable" />;
          }
          return <Badge status="error" text="Deactivate" />;
        },
      },
      {
        title: 'Created Time',
        dataIndex: 'created_at',
        render: val => <span>{formatDate(val, 'YYYY-MM-DD HH:mm')}</span>,
      },
    ];

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => <span>Total {total} pages</span>,
      ...pagination,
    };

    const breadcrumbList = [
      { title: 'Demo use case' },
      { title: 'Basic example', href: '/example/demo' },
    ];

    return (
      <PageHeaderLayout title="Basic example" breadcrumbList={breadcrumbList}>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderSearchForm()}</div>
            <div className={styles.tableListOperator}>
              <PButton code="add" type="primary" onClick={() => this.onAddClick()}>
                New
              </PButton>
              {selectedRows.length === 1 && [
                <PButton
                  key="edit"
                  code="edit"
                  onClick={() => this.onItemEditClick(selectedRows[0])}
                >
                  Edit
                </PButton>,
                <PButton
                  key="del"
                  code="del"
                  type="danger"
                  onClick={() => this.onItemDelClick(selectedRows[0])}
                >
                  Delete
                </PButton>,
                selectedRows[0].status === 2 && (
                  <PButton
                    key="enable"
                    code="enable"
                    onClick={() => this.onItemEnableClick(selectedRows[0])}
                  >
                    Enable
                  </PButton>
                ),
                selectedRows[0].status === 1 && (
                  <PButton
                    key="disable"
                    code="disable"
                    type="danger"
                    onClick={() => this.onItemDisableClick(selectedRows[0])}
                  >
                    Disable
                  </PButton>
                ),
              ]}
            </div>
            <div>
              <Table
                rowSelection={{
                  selectedRowKeys,
                  onSelect: this.handleTableSelectRow,
                }}
                loading={loading}
                rowKey={record => record.id}
                dataSource={list}
                columns={columns}
                pagination={paginationProps}
                onChange={this.onTableChange}
                size="small"
              />
            </div>
          </div>
        </Card>
        {this.renderDataForm()}
      </PageHeaderLayout>
    );
  }
}

export default connect(state => ({
  loading: state.loading.models.demo,
  demo: state.demo,
}))(Form.create()(DemoList));

// export default DemoList;
