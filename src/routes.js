import Home from './pages/index';
import Dashboard from './pages/dashboard/index';

const admin_routes = [
  {
    path: "/",
    contentType: "Home",
    exact: true,
    screenName: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    contentType: "Dashboard",
    exact: true,
    screenName: "Dashboard",
    component: Dashboard,
  }
];
const user_routes = [
];

export default admin_routes;
