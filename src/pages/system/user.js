import React, { PureComponent } from 'react';

import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Card, Input, Button, Table, Modal, Badge } from 'antd';
import PButton from '../../components/PermButton';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import UserCard from '../../components/User/UserCard';
import RoleSelect from '../../components/User/RoleSelect';
import { formatDate } from '../../utils/utils';

import WithDva from '../../utils/store';

import styles from './user.less';

// @connect(state => ({
//   loading: state.loading.models.user,
//   user: state.user,
// }))

@Form.create()
class UserList extends PureComponent {
  state = {
    selectedRowKeys: [],
    selectedRows: [],
  };

  componentDidMount() {
    this.dispatch({
      type: 'user/fetch',
      search: {},
      pagination: {},
    });
  }

  onItemDisableClick = item => {
    this.dispatch({
      type: 'user/changeStatus',
      payload: { id: item.id, status: 2 },
    });
  };

  onItemEnableClick = item => {
    this.dispatch({
      type: 'user/changeStatus',
      payload: { id: item.id, status: 1 },
    });
  };

  onItemEditClick = item => {
    this.dispatch({
      type: 'user/loadForm',
      payload: {
        type: 'E',
        id: item.id,
      },
    });
  };

  onAddClick = () => {
    this.dispatch({
      type: 'user/loadForm',
      payload: {
        type: 'A',
      },
    });
  };

  onDelOKClick(id) {
    this.dispatch({
      type: 'user/del',
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
      title: `Fuzzy query confirm delete [user data: ${item.user_name}】？`,
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
      type: 'user/fetch',
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
      type: 'user/fetch',
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

      const formData = { ...values };
      if (formData.roleIDs) {
        formData.roleIDs = formData.roleIDs.map(v => v.role_id).join(',');
      }
      this.dispatch({
        type: 'user/fetch',
        search: formData,
        pagination: {},
      });
      this.clearSelectRows();
    });
  };

  onDataFormSubmit = data => {
    this.dispatch({
      type: 'user/submit',
      payload: data,
    });
    this.clearSelectRows();
  };

  onDataFormCancel = () => {
    this.dispatch({
      type: 'user/changeFormVisible',
      payload: false,
    });
  };

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  renderDataForm() {
    return <UserCard onCancel={this.onDataFormCancel} onSubmit={this.onDataFormSubmit} />;
  }

  renderSearchForm() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Form onSubmit={this.onSearchFormSubmit}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Fuzzy query">
              {getFieldDecorator('queryValue')(
                <Input placeholder="Please enter the content to be queried" />
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="User Role">{getFieldDecorator('roleIDs')(<RoleSelect />)}</Form.Item>
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
      user: {
        data: { list, pagination },
      },
    } = this.props;

    const { selectedRows, selectedRowKeys } = this.state;
    const columns = [
      {
        title: 'Username',
        dataIndex: 'user_name',
      },
      {
        title: 'Realname',
        dataIndex: 'real_name',
      },
      {
        title: 'Roles',
        dataIndex: 'roles',
        render: val => {
          if (!val || val.length === 0) {
            return <span>-</span>;
          }
          const names = [];
          for (let i = 0; i < val.length; i += 1) {
            names.push(val[i].name);
          }
          return <span>{names.join(' | ')}</span>;
        },
      },
      {
        title: 'User Status',
        dataIndex: 'status',
        render: val => {
          if (val === 1) {
            return <Badge status="success" text="Enable" />;
          }
          return <Badge status="error" text="Deactivate" />;
        },
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Phone Number',
        dataIndex: 'phone',
      },
      {
        title: 'Created At',
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

    return (
      <PageHeaderLayout title="User Management">
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
export default WithDva(state => ({
  loading: state.loading.models.user,
  user: state.user,
}))(UserList);
// export default UserList;
