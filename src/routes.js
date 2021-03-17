import Home from './pages/index';
import Dashboard from './pages/dashboard/index';

import Demo from './pages/example/demo'
import Login from './pages/login'

import Menu from './pages/system/menu'
import Role from './pages/system/role'
import User from './pages/system/user'

import Test from './pages/system/user'
import NotFound from './pages/404'

const routes = [
  {
    path: "/login",
    contentType: "Login",
    exact: true,
    screenName: "Login",
    component: Login
  },
  {
    path: "/",
    contentType: "Home",
    exact: true,
    screenName: "Home",
    component: Home,
  },
  {
    path: "/example/demo",
    contentType: "Demo",
    exact: true,
    screenName: "Demo",
    component: Demo,
  },
  {
    path: "/dashboard",
    contentType: "Dashboard",
    exact: true,
    screenName: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/system/menu",
    contentType: "Menu",
    exact: true,
    screenName: "Menu",
    component: Menu,
  }, {
    path: "/system/role",
    contentType: "Role",
    exact: true,
    screenName: "Role",
    component: Role,
  },

  {
    path: "/system/user",
    contentType: "User",
    exact: true,
    screenName: "User",
    component: User,
  },
  {
    path: "*",
    contentType: "NotFound",
    exact: true,
    screenName: "NotFound",
    component: NotFound,
  }
]

export default routes;