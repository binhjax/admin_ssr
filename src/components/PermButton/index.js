import React, { useEffect } from 'react';
import { Button } from 'antd';
import context from '../../utils/context';

export default ({ code, children, ...rest }) => {


  const { GlobalContext } = context;


  let pathname = "";
  if (typeof window !== "undefined") {
    pathname = window.location.pathname
  }

  // useEffect(function mount() {
  //   pathname = window.location.pathname
  //   return function unMount() {
  //     //Do something when unmoun
  //   };
  // });

  return (
    <GlobalContext.Consumer>
      {
        global => {
          const { menuPaths } = global;
          if (menuPaths) {
            const item = menuPaths[pathname];
            if (item && item.actions) {
              const { actions } = item;
              for (let i = 0; i < actions.length; i += 1) {
                if (actions[i].code === code) {
                  return <Button {...rest}>{children}</Button>;
                }
              }
            }
          }
          return null;
        }}
    </GlobalContext.Consumer>
  );
};
