import React, { PureComponent } from 'react';
import WithDva from '../../utils/store';

import moment from 'moment';
import { Typography, Card, Alert } from 'antd';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';
import styles from './index.less';

const CodePreview = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

class Home extends PureComponent {
  static async getInitialProps(props) {
    // first time run in server side
    // other times run in client side ( client side init with default props
    // console.log('get init props', props);
    const { pathname, query, isServer, store } = props;
    // dispatch effects to fetch data here
    await props.store.dispatch({ type: 'global/init' });
    return {
      // dont use store as property name, it will confilct with initial store
      pathname,
      query,
      isServer,
      dvaStore: store,
    };
  }

  state = {
    currentTime: moment().format('HH:mm:ss'),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ currentTime: moment().format('HH:mm:ss') });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getHeaderContent = () => {
    const {
      global: { user },
    } = this.props;

    const { role_names: roleNames } = user;

    const text = [];
    if (roleNames && roleNames.length > 0) {
      text.push(
        <span key="role" style={{ marginRight: 20 }}>{`所属角色：${roleNames.join('/')}`}</span>
      );
    }

    if (text.length > 0) {
      return text;
    }
    return null;
  };

  render() {
    const {
      global: { user },
    } = this.props;

    const { currentTime } = this.state;

    const breadcrumbList = [{ title: 'Homepage' }];

    return (
      <PageHeaderLayout
        title={`Hello，${user.real_name}，I wish you happy everyday！`}
        breadcrumbList={breadcrumbList}
        content={this.getHeaderContent()}
        action={<span>Current Time：{currentTime}</span>}
      >
        <Card></Card>
      </PageHeaderLayout>
    );
  }
}
export default WithDva(state => {
  return { global: state.global };
})(Home);
