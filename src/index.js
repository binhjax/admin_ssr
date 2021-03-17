import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

import history from './history'
import admin_routes from "./routes";

import AdminLayout from './layouts/AdminLayout'

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

app.router(({ history }) => (
  <Router history={history} >
    {
      <AdminLayout>
        <Switch>
          {
            admin_routes.map((route) => (
              <Route {...route} key={route.path} />
            ))
          }
        </Switch>
      </AdminLayout>
    }
  </Router>
));

app.start('#root');