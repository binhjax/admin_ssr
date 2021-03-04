import React from "react";
import App from "next/app";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import { LocaleProvider } from 'antd';
import jsHttpCookie from 'cookie';

import Router from "next/router";
import "./styles.css";

export function redirectUser(ctx, location) {
    if (ctx.req) {
        console.log("redirectUser from server: ", location);
        ctx.res.writeHead(302, { Location: location });
        ctx.res.end();
    } else {
        console.log("redirectUser from client");
        Router.push(location);
    }
}

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const { req } = ctx;
        const isServer = !!req
        const isBrowser = !req

        let initProps = {};

        console.log("Query pathname: ", ctx.pathname)
        if (isServer) {
            console.log("From server");

            if (req == undefined) {
                console.log("req is undefined ", ctx)
            }
            if (req && req.headers) {
                const cookies = req.headers.cookie;
                if (typeof cookies === 'string') {
                    console.log("cookies = ", cookies);
                    const cookiesJSON = jsHttpCookie.parse(cookies);
                    console.log("cookiesJSON = ", cookiesJSON);
                    initProps.token = cookiesJSON.token;
                } else if (cookies == undefined) {
                    console.log("No find cookies")
                } else {
                    console.log("cookies is not string ")
                }
            } else {
                console.log("req.headers: ", req)
            }

            // Redirect route 
            if (initProps.token === undefined) {
                console.log("initProps.token  not found ")
                if (ctx.pathname != '/user/login' && ctx.pathname !== '/login' && ctx.pathname !== '/_error' && ctx.pathname !== '/404') {
                    console.log(" 1. Redirect to signin from ", ctx.pathname, initProps.token)
                    redirectUser(ctx, '/login');
                }
            } else {
                console.log("initProps.token  = ", initProps.token);
                if (ctx.pathname == '/user/login' || ctx.pathname == '/login') {
                    redirectUser(ctx, "/");
                }
            }

        } else {
            console.log("In client");
        }
        //Init component 
        if (Component.getInitialProps) {
            initProps = await Component.getInitialProps(ctx);
        }
        console.log("Loggin to ", ctx.pathname)
        return { ...initProps };
    }
    render() {
        const { Component, pageProps, router, ...arg } = this.props;

        if (router.pathname.startsWith('/user/login')) {
            return (
                <UserLayout>
                    <Component {...pageProps} {...arg} ></Component>
                </UserLayout>
            )
        }

        if (router.pathname.startsWith("/login") || router.pathname.startsWith("/404")) {
            return <Component {...pageProps} {...arg} ></Component>
        }
        return (
            <AdminLayout>
                <Component {...pageProps}></Component>
            </AdminLayout>
        )

    }
}

export default MyApp;