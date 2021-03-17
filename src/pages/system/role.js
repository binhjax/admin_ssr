import React, { PureComponent } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Card, Input, Button, Table, Modal, Badge } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import PButton from '../../components/PermButton';
import { formatDate } from '../../utils/utils';
import RoleCard from '../../components/Role/RoleCard';
import { connect } from 'dva';

import styles from './role.less';

// @Form.create()
class RoleList extends PureComponent {
  state = {
    selectedRowKeys: [],
    selectedRows: [],
  };

  componentDidMount() {
    this.dispatch({
      type: 'role/fetch',
      search: {},
      pagination: {},
    });
  }

  onItemDisableClick = item => {
    this.dispatch({
      type: 'role/changeStatus',
      payload: { id: item.id, status: 2 },
    });
  };

  onItemEnableClick = item => {
    this.dispatch({
      type: 'role/changeStatus',
      payload: { id: item.id, status: 1 },
    });
  };

  clearSelectRows = () => {
    const { selectedRowKeys } = this.state;
    if (selectedRowKeys.length === 0) {
      return;
    }
    this.setState({ selectedRowKeys: [], selectedRows: [] });
  };

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  handleAddClick = () => {
    this.dispatch({
      type: 'role/loadForm',
      payload: {
        type: 'A',
      },
    });
  };

  handleEditClick = item => {
    this.dispatch({
      type: 'role/loadForm',
      payload: {
        type: 'E',
        id: item.id,
      },
    });
  };

  handleDelClick = item => {
    Modal.confirm({
      title: `Confirm to delete [role data：${item.name}】？`,
      okText: 'Confirm',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: this.handleDelOKClick.bind(this, item.id),
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

  handleTableChange = pagination => {
    this.dispatch({
      type: 'role/fetch',
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
      type: 'role/fetch',
      search: {},
      pagination: {},
    });
  };

  handleSearchFormSubmit = e => {
    if (e) {
      e.preventDefault();
    }

    const { form } = this.props;
    form.validateFields({ force: true }, (err, values) => {
      if (err) {
        return;
      }
      this.dispatch({
        type: 'role/fetch',
        search: values,
        pagination: {},
      });
      this.clearSelectRows();
    });
  };

  handleDataFormSubmit = data => {
    this.dispatch({
      type: 'role/submit',
      payload: data,
    });
    this.clearSelectRows();
  };

  handleDataFormCancel = () => {
    this.dispatch({
      type: 'role/changeFormVisible',
      payload: false,
    });
  };

  handleDelOKClick(id) {
    this.dispatch({
      type: 'role/del',
      payload: { id },
    });
    this.clearSelectRows();
  }

  renderDataForm() {
    return <RoleCard onCancel={this.handleDataFormCancel} onSubmit={this.handleDataFormSubmit} />;
  }

  renderSearchForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;

    return (
      <Form onSubmit={this.handleSearchFormSubmit}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item>
              {getFieldDecorator('queryValue')(
                <Input placeholder="Please enter the content to be queried" />
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <div style={{ overflow: 'hidden', paddingTop: 4 }}>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.onResetFormClick}>
                Reset
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
      role: {
        data: { list, pagination },
      },
    } = this.props;

    const { selectedRowKeys, selectedRows } = this.state;

    const columns = [
      {
        title: 'Role Name',
        dataIndex: 'name',
      },
      {
        title: 'Sort Value',
        dataIndex: 'sequence',
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
        title: 'Create Time',
        dataIndex: 'created_at',
        render: val => <span>{formatDate(val, 'YYYY-MM-DD')}</span>,
      },
      {
        title: 'Remarks',
        dataIndex: 'memo',
      },
    ];

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => <span>Total {total} pages</span>,
      ...pagination,
    };

    const breadcrumbList = [
      { title: 'Teko Landing Admin' },
      { title: 'Role Management', href: '/system/role' },
    ];

    return (
      <PageHeaderLayout title="Role Management" breadcrumbList={breadcrumbList}>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderSearchForm()}</div>
            <div className={styles.tableListOperator}>
              <PButton code="add" type="primary" onClick={() => this.handleAddClick()}>
                New
              </PButton>
              {selectedRows.length === 1 && [
                <PButton
                  key="edit"
                  code="edit"
                  onClick={() => this.handleEditClick(selectedRows[0])}
                >
                  Edit
                </PButton>,
                <PButton
                  key="del"
                  code="del"
                  type="danger"
                  onClick={() => this.handleDelClick(selectedRows[0])}
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
                onChange={this.handleTableChange}
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
  role: state.role,
  loading: state.loading.models.role,
}))(Form.create()(RoleList));
