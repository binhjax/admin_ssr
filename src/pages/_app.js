import React from "react";
import App from "next/app";

import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import { LocaleProvider } from 'antd';

class MyApp extends App {

    render() {
        const { Component, pageProps, router, ...arg } = this.props;

        console.log("pathname: ", router.pathname)
        if (router.pathname.startsWith('/user/login')) {
            return (
                <UserLayout>
                    <Component {...pageProps} {...arg} ></Component>
                </UserLayout>
            )
        }
        if (router.pathname.startsWith('/login')) {
            return (
                <Component {...pageProps} />
            );
        }

        return (
            <AdminLayout>
                <Component {...pageProps}></Component>
            </AdminLayout>
        )

    }
}

export default MyApp;