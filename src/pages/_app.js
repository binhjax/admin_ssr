import React from 'react';
import App from 'next/app';

import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';
import { LocaleProvider } from 'antd';
import jsHttpCookie from 'cookie';

import Router from 'next/router';
import './styles.css';
import { startURL } from '../config/constant';

//Check development environment or production to change baseUrl
// const baseUrl = '/admin'

const enableRedirect = false;

export function redirectUser(ctx, location) {
  if (ctx.req) {
    console.log('app.redirectUser: redirectUser from server: ', location);
    ctx.res.writeHead(302, { Location: startURL + location });
    ctx.res.end();
  } else {
    console.log('app.redirectUser: redirectUser from client');
    Router.push(startURL + location);
  }
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {

    let initProps = {};

    if (enableRedirect) {
      checkLogin(ctx)
    }

    //Init component
    if (Component.getInitialProps) {
      initProps = await Component.getInitialProps(ctx);
    }
    console.log('app.getInitialProps: Loggin to ', ctx.pathname);
    return { ...initProps };
  }

  checkLogin = (ctx) => {
    const { req } = ctx;
    const isServer = !!req;
    const isBrowser = !req;

    console.log('app.getInitialProps: Query pathname: ', ctx.pathname);
    if (isServer) {
      console.log('app.getInitialProps:  From server');

      if (req == undefined) {
        console.log('app.getInitialProps: req is undefined ', ctx);
      }
      if (req && req.headers) {
        const cookies = req.headers.cookie;
        if (typeof cookies === 'string') {
          console.log('app.getInitialProps: cookies = ', cookies);
          const cookiesJSON = jsHttpCookie.parse(cookies);
          console.log('app.getInitialProps: cookiesJSON = ', cookiesJSON);
          initProps.token = cookiesJSON.token;
        } else if (cookies == undefined) {
          console.log('app.getInitialProps: No find cookies');
        } else {
          console.log('app.getInitialProps: cookies is not string ');
        }
      } else {
        console.log('app.getInitialProps: req.headers: ', req);
      }
      // Redirect route
      if (initProps.token === undefined) {
        console.log(
          'app.getInitialProps: initProps.token  not found  => redirect to login if not /login'
        );
        if (!ctx.pathname.startsWith('/login') || !ctx.pathname.startsWith('/test')) {
          console.log(' app.getInitialProps: Redirect to signin from ', ctx.pathname);
          redirectUser(ctx, '/login');
        } else {
          console.log(' app.getInitialProps: Current ', ctx.pathname, ' keep pathname. ');
        }
      } else {
        console.log('app.getInitialProps: initProps.token  = ', initProps.token);
        if (ctx.pathname == '/login') {
          redirectUser(ctx, '/dashboard');
        }
      }
    } else {
      console.log('app.getInitialProps: In client');
    }
  }
  render() {
    const { Component, pageProps, router, ...arg } = this.props;

    if (router.pathname.startsWith('/user')) {
      return (
        <UserLayout>
          <Component {...pageProps} {...arg}></Component>
        </UserLayout>
      );
    }

    if (router.pathname.startsWith('/login') || router.pathname.startsWith('/404')) {
      return <Component {...pageProps} {...arg}></Component>;
    }
    return (
      <AdminLayout>
        <Component {...pageProps}></Component>
      </AdminLayout>
    );
  }
}

export default MyApp;
