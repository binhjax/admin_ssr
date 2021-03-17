import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import history from './history'
import routes from "./routes";

import AdminLayout from './layouts/AdminLayout'
import UserLayout from './layouts/UserLayout'

import createLoading from 'dva-loading';
import dva, { connect } from 'dva';
import { router } from 'dva';

import model from './models/index';


const { Router, Switch, Route } = router

const app = dva();

const isArray = Array.isArray(model);
if (isArray) {
  model.forEach(m => {
    app.model(m);
  });
} else {
  app.model(model);
}
app.use(createLoading({}));


function RouteWithLayout({ layout, component, ...rest }) {
  return (
    <Route {...rest} render={(props) =>
      React.createElement(layout, props, React.createElement(component, props))
    } />
  );
}

app.router(({ history }) => (

  <Router history={history} >
    <Switch>
      {
        routes.map((route) => {
          if (route.path == '/login') {
            return <Route {...route} key={route.path} />
          }
          else if (route.path != '*' && !route.path.startsWith('/user')) {
            return <RouteWithLayout layout={AdminLayout} {...route} key={route.path} />
          }
          else if (route.path != '*' && !route.path.startsWith('/admin')) {
            return <RouteWithLayout layout={UserLayout} {...route} key={route.path} />
          }
          else {
            return <Route {...route} key={route.path} />
          }
        })
      }
    </Switch>
  </Router >
));

app.start('#root');