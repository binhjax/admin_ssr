import React, { PureComponent } from 'react';
import { Table, Button, Popconfirm, Divider } from 'antd';
import { newUUID } from '@/utils/utils';
import FormDialog from '../FormDialog';
import TplDialog from '../TplDialog';
import styles from './index.less';

function fillKey(data) {
  if (!data) {
    return [];
  }
  return data.map(item => {
    const nitem = { ...item };
    if (!nitem.key) {
      nitem.key = newUUID();
    }
    return nitem;
  });
}

export default class MenuAction extends PureComponent {
  state = {
    dataSource: [],
    formVisible: false,
    formData: {},
    tplVisible: false,
  };

  static getDerivedStateFromProps(nextProps, state) {
    if ('value' in nextProps) {
      return {
        ...state,
        dataSource: fillKey(nextProps.value),
      };
    }
    return state;
  }

  handleDelete = key => {
    const { dataSource } = this.state;
    const data = dataSource.filter(item => item.key !== key);
    this.setState({ dataSource: data }, () => {
      this.triggerChange(data);
    });
  };

  handleEdit = item => {
    this.setState({
      formVisible: true,
      formData: item,
    });
  };

  handleFormCancel = () => {
    this.setState({ formVisible: false });
  };

  handleFormSubmit = formData => {
    const { dataSource } = this.state;
    const data = [...dataSource];
    let exists = false;
    for (let i = 0; i < data.length; i += 1) {
      if (data[i].code === formData.code) {
        exists = true;
        data[i] = { key: formData.code, ...formData };
        break;
      }
    }
    if (!exists) {
      data.push({ key: formData.code, ...formData });
    }
    this.setState({ dataSource: data, formVisible: false }, () => {
      this.triggerChange(data);
    });
  };

  handleAdd = () => {
    this.setState({ formVisible: true, formData: {} });
  };

  handleTplCancel = () => {
    this.setState({ tplVisible: false });
  };

  handleTplSubmit = formData => {
    const { path } = formData;
    const tplData = [
      {
        code: 'add',
        name: 'Add',
        resources: [{ method: 'POST', path }],
      },
      {
        code: 'edit',
        name: 'Edit',
        resources: [{ method: 'GET', path: `${path}/:id` }, { method: 'PUT', path: `${path}/:id` }],
      },
      {
        code: 'del',
        name: 'Delete',
        resources: [{ method: 'DELETE', path: `${path}/:id` }],
      },
      {
        code: 'view',
        name: 'View',
        resources: [{ method: 'GET', path: `${path}/:id` }],
      },
      {
        code: 'query',
        name: 'Query',
        resources: [{ method: 'GET', path }],
      },
    ];

    const newData = tplData.map(v => ({ key: v.code, ...v }));
    const { dataSource } = this.state;
    const data = [...dataSource];
    const mDataSource = data.reduce((m, cur) => {
      const nm = { ...m };
      nm[cur.code] = cur;
      return nm;
    }, {});
    for (let i = 0; i < newData.length; i += 1) {
      if (!mDataSource[newData[i].key]) {
        data.push({ ...newData[i] });
      }
    }

    this.setState(
      {
        dataSource: data,
        tplVisible: false,
      },
      () => {
        this.triggerChange(data);
      }
    );
  };

  handleTplAdd = () => {
    this.setState({ tplVisible: true });
  };

  handleSave = row => {
    const { dataSource } = this.state;
    const data = [...dataSource];
    const index = data.findIndex(item => row.key === item.key);
    const item = data[index];
    data.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: data }, () => {
      this.triggerChange(data);
    });
  };

  triggerChange = data => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(data);
    }
  };

  render() {
    const { dataSource, tplVisible, formData, formVisible } = this.state;

    const columns = [
      {
        title: 'Code',
        dataIndex: 'code',
        width: '35%',
      },
      {
        title: 'Action Name',
        dataIndex: 'name',
        width: '35%',
      },
      {
        title: 'Key',
        dataIndex: 'key',
        width: '30%',
        render: (_, record) => {
          return [
            <a href="#" onClick={() => this.handleEdit(record)}>
              Edit
            </a>,
            <Divider type="vertical" />,
            <Popconfirm
              title="Are you sure you want to delete this data?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <a href="#">Delete</a>
            </Popconfirm>,
          ];
        },
      },
    ];

    return (
      <div className={styles.tableList}>
        <div className={styles.tableListOperator}>
          <Button onClick={this.handleAdd} size="small" type="primary">
            Add
          </Button>
          <Button onClick={this.handleTplAdd} size="small" type="primary">
            Quick template
          </Button>
        </div>
        <Table
          rowKey={record => record.key}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
        <TplDialog
          visible={tplVisible}
          onSubmit={this.handleTplSubmit}
          onCancel={this.handleTplCancel}
        />
        <FormDialog
          visible={formVisible}
          formData={formData}
          onSubmit={this.handleFormSubmit}
          onCancel={this.handleFormCancel}
        />
      </div>
    );
  }
}
