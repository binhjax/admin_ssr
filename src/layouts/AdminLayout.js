import React from 'react';
import AntdIcon from '@ant-design/icons-react';

import {
  LockOutlined,
  LogoutOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


import { Layout, Menu, Avatar, Dropdown, Spin } from 'antd';
import { withRouter } from "react-router";

import DocumentTitle from 'react-document-title';

import { connect } from 'dva';
import { router } from 'dva';

// import WithDva from '../utils/store';

// eslint-disable-next-line import/no-extraneous-dependencies

import { Link } from 'react-router-dom';

import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import Debounce from 'lodash-decorators/debounce';
import GlobalFooter from '../layouts/GlobalFooter';
import CopyRight from '../layouts/CopyRight';

import UpdatePasswordDialog from '../components/UpdatePasswordDialog';

import context from '../utils/context';
import { getAccessToken } from '../utils/request'

import './AdminLayout.less';
import logo from '../assets/logo.svg';
import { startURL } from '../config/constant';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

class AdminLayout extends React.PureComponent {
  // static async getInitialProps(props) {
  //   // first time run in server side
  //   // other times run in client side ( client side init with default props
  //   // console.log('get init props', props);
  //   const { pathname, query, isServer, store } = props;
  //   // dispatch effects to fetch data here
  //   console.log("Binhnt.AdminLayout: props = ", props)
  //   return {
  //     // dont use store as property name, it will confilct with initial store
  //     pathname,
  //     query,
  //     isServer,
  //     dvaStore: store,
  //   };
  // }

  state = {
    updatePwdVisible: false,
  };

  componentDidMount() {
    // console.log('binhnt.AdminLayout: componentDidMount: ', this.props);

    const {
      location: { pathname },
    } = this.props;

    console.log("Binhnt.AdminLayout: props = ", this.props)


    this.dispatch({
      type: 'global/fetchUser',
    });

    this.dispatch({
      type: 'global/fetchMenuTree',
      pathname,
    });
  }

  dispatch = action => {
    const { dispatch } = this.props;
    dispatch(action);
  };

  onCollapse = () => {
    const { collapsed } = this.props;
    this.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !collapsed,
    });
  };

  onMenuClick = ({ key }) => {
    if (key === 'logout') {
      this.dispatch({
        type: 'login/logout',
      });
    } else if (key === 'updatepwd') {
      this.setState({ updatePwdVisible: true });
    }
  };

  onMenuOpenChange = openKeys => {
    // console.log("AdminLayout.onMenuOpenChange: Open menu ")
    const { menuMap } = this.props;
    if (openKeys.length > 1) {
      const lastKey = openKeys[openKeys.length - 1];
      const lastItem = menuMap[lastKey];
      if (!lastItem) {
        this.dispatch({
          type: 'global/changeOpenKeys',
          payload: [],
        });
        return;
      }

      let isParent = false;
      for (let i = 0; i < openKeys.length - 1; i += 1) {
        const item = menuMap[openKeys[i]] || {};
        let path = item.id;
        if (item.parent_path !== '') {
          path = `${item.parent_path}/${path}`;
        }
        if (lastItem.parent_path === path) {
          isParent = true;
          break;
        }
      }

      if (!isParent) {
        // console.log("AdminLayout.onMenuOpenChange: not isParent => call global/changeOpenKeys ")
        this.dispatch({
          type: 'global/changeOpenKeys',
          payload: [lastKey],
        });
        return;
      }
    }

    this.dispatch({
      type: 'global/changeOpenKeys',
      payload: [...openKeys],
    });
  };

  onToggleClick = () => {
    const { collapsed } = this.props;
    this.dispatch({
      type: 'global/changeLayoutCollapsed',
      payload: !collapsed,
    });
    this.onTriggerResizeEvent();
  };

  onTriggerResizeEvent = () => {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  };

  handleUpdatePwdCancel = () => {
    this.setState({ updatePwdVisible: false });
  };
  renderNavMenuItems(menusData) {
    if (!menusData) {
      return [];
    }

    return menusData.map(item => {
      if (!item.name || item.show_status !== 1) {
        return null;
      }

      if (item.children && item.children.some(child => child.name && child.show_status === 1)) {

        console.log("Binhnt.AdminLayout.RenderNavMenuItem: icon = ", item.icon)
        return (
          <SubMenu
            title={
              item.icon ? (
                <span>
                  {/* <LegacyIcon type={item.icon} /> */
                    <AntdIcon type={item.icon} />
                  }
                  <span>{item.name}</span>
                </span>
              ) : (
                item.name
              )
            }
            key={item.id}
          >
            {this.renderNavMenuItems(item.children)}
          </SubMenu>
        );
      }

      const { router } = item;
      // const icon = item.icon && <LegacyIcon type={item.icon} />;

      // console.log("AdminLayout.renderNavMenuItems:  router = ", router);
      const {
        location: { pathname },
      } = this.props;

      return (
        <Menu.Item key={item.id}>
          {router.startsWith('http') ? (
            <a href={router} target="_blank" rel="noopener noreferrer">
              {icon}
              <span>{item.name}</span>
            </a>
          ) : (
            <Link href={startURL + router} to={startURL + router} replace={router === pathname}>
              <div>
                {/* {icon} */}
                <span>{item.name}</span>
              </div>
            </Link>
          )}
        </Menu.Item>
      );
    });
  }

  renderPageTitle() {
    // console.log(this.props);
    const pathname = this.props.location.pathname;
    const {
      menuPaths,
      title,
    } = this.props;

    // console.log('AdminLayout: => renderPageTitle: pathname', pathname);

    let ptitle = title;
    const item = menuPaths[pathname];
    if (item) {
      ptitle = `${item.name} - ${title}`;
    }
    return ptitle;
  }

  render() {

    //Check login 
    const access_token = getAccessToken()
    if (access_token == '') {
      //Redirect to login page 
      const { Redirect } = router
      return <Redirect to="/login" />
    }


    const {
      children,
      user,
      collapsed,
      menus,
      copyRight,
      openKeys,
      title,
      selectedKeys,
      global,
    } = this.props;



    // console.log("AdminLayout.render: menus = ", menus);
    const { updatePwdVisible } = this.state;

    const menu = (
      <Menu className="menu" selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="updatepwd">
          <LockOutlined />
          Change Password
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <LogoutOutlined />
          Sign Out
        </Menu.Item>
      </Menu>
    );

    // Don't show popup menu when it is been collapsed
    const menuProps = collapsed ? {} : { openKeys };
    const siderWidth = 256;

    const homePage = startURL;

    const layout = (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="lg"
          onCollapse={this.onCollapse}
          width={siderWidth}
          className="sider"
        >
          <div className="logo">
            <Link href={homePage} to="/">
              <div>
                <img src={logo} alt="logo" />
                <h1>{title}</h1>
              </div>
            </Link>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            {...menuProps}
            onOpenChange={this.onMenuOpenChange}
            selectedKeys={selectedKeys}
            style={{ margin: '16px 0', width: '100%' }}
          >
            {this.renderNavMenuItems(menus)}
          </Menu>
        </Sider>

        <Layout>
          <Header
            className={classNames('header')}
            style={{
              paddingLeft: 12,
              paddingRight: 12,
            }}
          >
            <div className={classNames('foldout')} onClick={() => this.onCollapse()}>
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </div>
            <div className={classNames('right')}>
              {user.user_name ? (
                <Dropdown overlay={menu}>
                  <span className={classNames(['action', 'account'])}>
                    <Avatar size="small" className={classNames('avatar')} icon={<UserOutlined />} />
                    {
                      // user.real_name !== ''
                      // ? `${user.user_name}(${user.real_name})`
                      // : user.user_name
                      user.user_name
                    }
                  </span>
                </Dropdown>
              ) : (
                <Spin size="small" style={{ marginLeft: 8 }} />
              )}
            </div>
          </Header>
          <Content className={classNames('content')}>
            <div style={{ minHeight: 'calc(100vh - 150px)' }}>
              <context.GlobalContext.Provider value={global}>
                {children}
              </context.GlobalContext.Provider>
            </div>
            <GlobalFooter copyright={<CopyRight title={copyRight} />} />
          </Content>
        </Layout>
        <UpdatePasswordDialog visible={updatePwdVisible} onCancel={this.handleUpdatePwdCancel} />
      </Layout>
    );

    return (
      <DocumentTitle title={this.renderPageTitle()}>
        <ContainerQuery query={query}>
          {params => <div className={classNames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    );
  }
}

// export default AdminLayout;
export default connect(state => ({
  title: state.global.title,
  copyRight: state.global.copyRight,
  collapsed: state.global.collapsed,
  openKeys: state.global.openKeys,
  selectedKeys: state.global.selectedKeys,
  user: state.global.user,
  menuPaths: state.global.menuPaths,
  menuMap: state.global.menuMap,
  menus: state.global.menus,
  global: state.global,
}))(withRouter(AdminLayout));
