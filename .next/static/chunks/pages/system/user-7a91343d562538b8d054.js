_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [34],
  {
    '7m+u': function(e, t, a) {
      'use strict';
      a.r(t);
      a('mN36');
      var n = a('N9UN'),
        r = a.n(n),
        o = (a('zmYW'), a('DtFj')),
        c = a.n(o),
        i = (a('CbT5'), a('RWbP')),
        l = a.n(i),
        s = (a('hr7U'), a('9xET')),
        u = a.n(s),
        p = (a('MaXC'), a('4IMT')),
        d = a.n(p),
        f = (a('fv9D'), a('ZPTe')),
        b = a.n(f),
        m = (a('cUip'), a('iJl9')),
        h = a.n(m),
        O = (a('fwXI'), a('CC+v')),
        y = a.n(O),
        j = a('1OyB'),
        v = a('vuIU'),
        g = a('JX7q'),
        w = a('Ji7U'),
        C = a('md7G'),
        k = a('foSv'),
        D = a('rePB'),
        P = a('q1tI'),
        S = a.n(P),
        R = a('WsrF'),
        I = (a('XlDN'), a('rZaG')),
        F = a('XZXw'),
        _ = (a('7kJ1'), a('qPIi')),
        E = a.n(_),
        x = a('wx14'),
        T = a('+n12'),
        N = (a('ek7I'), a('FAat')),
        q = a.n(N),
        U = a('03io'),
        A = S.a.createElement;
      function K(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(a), !0).forEach(function(t) {
                Object(D.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : K(Object(a)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function V(e) {
        var t = (function() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var a,
            n = Object(k.a)(e);
          if (t) {
            var r = Object(k.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(C.a)(this, a);
        };
      }
      function z(e) {
        return e
          ? e.map(function(e) {
              return e.role_id;
            })
          : [];
      }
      var M,
        X = (function(e) {
          Object(w.a)(a, e);
          var t = V(a);
          function a(e) {
            var n;
            return (
              Object(j.a)(this, a),
              (n = t.call(this, e)),
              Object(D.a)(Object(g.a)(n), 'handleChange', function(e) {
                n.setState({ value: e }), n.triggerChange(e);
              }),
              Object(D.a)(Object(g.a)(n), 'triggerChange', function(e) {
                var t = n.props.onChange;
                t &&
                  t(
                    e.map(function(e) {
                      return { role_id: e };
                    })
                  );
              }),
              (n.state = { value: z(e.value), data: [] }),
              n
            );
          }
          return (
            Object(v.a)(
              a,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this;
                    Object(U.f)({ q: 'select' }).then(function(t) {
                      e.setState({ data: t.list || [] });
                    });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this.state,
                      t = e.value,
                      a = e.data;
                    return A(
                      q.a,
                      {
                        mode: 'tags',
                        value: t,
                        onChange: this.handleChange,
                        placeholder: 'Please choose a role',
                        style: { width: '100%' },
                      },
                      a.map(function(e) {
                        return A(q.a.Option, { key: e.id, value: e.id }, e.name);
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    return 'value' in e ? Y(Y({}, t), {}, { value: z(e.value) }) : t;
                  },
                },
              ]
            ),
            a
          );
        })(P.PureComponent),
        J = a('2m8j'),
        L = S.a.createElement;
      function B(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? B(Object(a), !0).forEach(function(t) {
                Object(D.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : B(Object(a)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function H(e) {
        var t = (function() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var a,
            n = Object(k.a)(e);
          if (t) {
            var r = Object(k.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(C.a)(this, a);
        };
      }
      var W,
        Z =
          R.a.create()(
            (M = (function(e) {
              Object(w.a)(a, e);
              var t = H(a);
              function a() {
                var e;
                Object(j.a)(this, a);
                for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                  r[o] = arguments[o];
                return (
                  (e = t.call.apply(t, [this].concat(r))),
                  Object(D.a)(Object(g.a)(e), 'onOKClick', function() {
                    var t = e.props,
                      a = t.form,
                      n = t.onSubmit;
                    a.validateFieldsAndScroll(function(e, t) {
                      if (!e) {
                        var a = G({}, t);
                        (a.status = parseInt(a.status, 10)),
                          a.password && '' !== a.password && (a.password = Object(T.b)(a.password)),
                          n(a);
                      }
                    });
                  }),
                  Object(D.a)(Object(g.a)(e), 'dispatch', function(t) {
                    (0, e.props.dispatch)(t);
                  }),
                  e
                );
              }
              return (
                Object(v.a)(a, [
                  {
                    key: 'render',
                    value: function() {
                      var e = this.props,
                        t = e.onCancel,
                        a = e.user,
                        n = a.formType,
                        r = a.formTitle,
                        o = a.formVisible,
                        c = a.formData,
                        i = a.submitting,
                        l = e.form.getFieldDecorator,
                        s = {
                          labelCol: { xs: { span: 24 }, sm: { span: 6 } },
                          wrapperCol: { xs: { span: 24 }, sm: { span: 16 } },
                        };
                      return L(
                        y.a,
                        {
                          title: r,
                          width: 600,
                          visible: o,
                          maskClosable: !1,
                          confirmLoading: i,
                          destroyOnClose: !0,
                          onOk: this.onOKClick,
                          onCancel: t,
                          style: { top: 20 },
                          bodyStyle: { maxHeight: 'calc( 100vh - 158px )', overflowY: 'auto' },
                        },
                        L(
                          R.a,
                          null,
                          L(
                            R.a.Item,
                            Object(x.a)({}, s, { label: 'Username' }),
                            l('user_name', {
                              initialValue: c.user_name,
                              rules: [{ required: !0, message: 'please enter username' }],
                            })(L(h.a, { placeholder: 'please enter username' }))
                          ),
                          L(
                            R.a.Item,
                            Object(x.a)({}, s, { label: 'login password' }),
                            l('password', {
                              initialValue: c.password,
                              rules: [
                                { required: 'A' === n, message: 'Please enter your password' },
                              ],
                            })(
                              L(h.a, {
                                type: 'password',
                                placeholder:
                                  'A' === n
                                    ? 'Please enter your password'
                                    : 'Leave blank to not modify the login password',
                              })
                            )
                          ),
                          L(
                            R.a.Item,
                            Object(x.a)({}, s, { label: 'Actual Name' }),
                            l('real_name', {
                              initialValue: c.real_name,
                              rules: [{ required: !0, message: 'Please enter your name' }],
                            })(L(h.a, { placeholder: 'enter your name' }))
                          ),
                          L(
                            R.a.Item,
                            Object(x.a)({}, s, { label: 'User Role' }),
                            l('user_roles', {
                              initialValue: c.user_roles,
                              rules: [{ required: !0, message: 'Please select the role' }],
                            })(L(X, null))
                          ),
                          L(
                            R.a.Item,
                            Object(x.a)({}, s, { label: 'User Status' }),
                            l('status', { initialValue: c.status ? c.status.toString() : '1' })(
                              L(
                                E.a.Group,
                                null,
                                L(E.a, { value: '1' }, 'Normal'),
                                L(E.a, { value: '2' }, 'Deactivate')
                              )
                            )
                          ),
                          L(
                            R.a.Item,
                            Object(x.a)({}, s, { label: 'Mailbox' }),
                            l('email', { initialValue: c.email })(
                              L(h.a, { placeholder: 'Please input your email' })
                            )
                          ),
                          L(
                            R.a.Item,
                            Object(x.a)({}, s, { label: 'Phone Number' }),
                            l('phone', { initialValue: c.phone })(
                              L(h.a, { placeholder: 'Please enter phone number' })
                            )
                          )
                        )
                      );
                    },
                  },
                ]),
                a
              );
            })(P.PureComponent))
          ) || M,
        Q = Object(J.a)(function(e) {
          return { user: e.user };
        })(Z),
        $ = a('FjYM'),
        ee = a.n($),
        te = S.a.createElement;
      function ae(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ae(Object(a), !0).forEach(function(t) {
                Object(D.a)(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : ae(Object(a)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t));
              });
        }
        return e;
      }
      function re(e) {
        var t = (function() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var a,
            n = Object(k.a)(e);
          if (t) {
            var r = Object(k.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(C.a)(this, a);
        };
      }
      var oe =
        R.a.create()(
          (W = (function(e) {
            Object(w.a)(a, e);
            var t = re(a);
            function a() {
              var e;
              Object(j.a)(this, a);
              for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
                r[o] = arguments[o];
              return (
                (e = t.call.apply(t, [this].concat(r))),
                Object(D.a)(Object(g.a)(e), 'state', { selectedRowKeys: [], selectedRows: [] }),
                Object(D.a)(Object(g.a)(e), 'onItemDisableClick', function(t) {
                  e.dispatch({ type: 'user/changeStatus', payload: { id: t.id, status: 2 } });
                }),
                Object(D.a)(Object(g.a)(e), 'onItemEnableClick', function(t) {
                  e.dispatch({ type: 'user/changeStatus', payload: { id: t.id, status: 1 } });
                }),
                Object(D.a)(Object(g.a)(e), 'onItemEditClick', function(t) {
                  e.dispatch({ type: 'user/loadForm', payload: { type: 'E', id: t.id } });
                }),
                Object(D.a)(Object(g.a)(e), 'onAddClick', function() {
                  e.dispatch({ type: 'user/loadForm', payload: { type: 'A' } });
                }),
                Object(D.a)(Object(g.a)(e), 'clearSelectRows', function() {
                  0 !== e.state.selectedRowKeys.length &&
                    e.setState({ selectedRowKeys: [], selectedRows: [] });
                }),
                Object(D.a)(Object(g.a)(e), 'onItemDelClick', function(t) {
                  y.a.confirm({
                    title: 'Fuzzy query confirm delete [user data: '.concat(
                      t.user_name,
                      '\u3011\uff1f'
                    ),
                    okText: 'Confirm',
                    okType: 'danger',
                    cancelText: 'Cancel',
                    onOk: e.onDelOKClick.bind(Object(g.a)(e), t.id),
                  });
                }),
                Object(D.a)(Object(g.a)(e), 'handleTableSelectRow', function(t, a) {
                  var n = [],
                    r = [];
                  a && (n.push(t.id), r.push(t)),
                    e.setState({ selectedRowKeys: n, selectedRows: r });
                }),
                Object(D.a)(Object(g.a)(e), 'onTableChange', function(t) {
                  e.dispatch({
                    type: 'user/fetch',
                    pagination: { current: t.current, pageSize: t.pageSize },
                  }),
                    e.clearSelectRows();
                }),
                Object(D.a)(Object(g.a)(e), 'onResetFormClick', function() {
                  e.props.form.resetFields(),
                    e.dispatch({ type: 'user/fetch', search: {}, pagination: {} });
                }),
                Object(D.a)(Object(g.a)(e), 'onSearchFormSubmit', function(t) {
                  t && t.preventDefault(),
                    e.props.form.validateFields({ force: !0 }, function(t, a) {
                      if (!t) {
                        var n = ne({}, a);
                        n.roleIDs &&
                          (n.roleIDs = n.roleIDs
                            .map(function(e) {
                              return e.role_id;
                            })
                            .join(',')),
                          e.dispatch({ type: 'user/fetch', search: n, pagination: {} }),
                          e.clearSelectRows();
                      }
                    });
                }),
                Object(D.a)(Object(g.a)(e), 'onDataFormSubmit', function(t) {
                  e.dispatch({ type: 'user/submit', payload: t }), e.clearSelectRows();
                }),
                Object(D.a)(Object(g.a)(e), 'onDataFormCancel', function() {
                  e.dispatch({ type: 'user/changeFormVisible', payload: !1 });
                }),
                Object(D.a)(Object(g.a)(e), 'dispatch', function(t) {
                  (0, e.props.dispatch)(t);
                }),
                e
              );
            }
            return (
              Object(v.a)(a, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.dispatch({ type: 'user/fetch', search: {}, pagination: {} });
                  },
                },
                {
                  key: 'onDelOKClick',
                  value: function(e) {
                    this.dispatch({ type: 'user/del', payload: { id: e } }), this.clearSelectRows();
                  },
                },
                {
                  key: 'renderDataForm',
                  value: function() {
                    return te(Q, {
                      onCancel: this.onDataFormCancel,
                      onSubmit: this.onDataFormSubmit,
                    });
                  },
                },
                {
                  key: 'renderSearchForm',
                  value: function() {
                    var e = this.props.form.getFieldDecorator;
                    return te(
                      R.a,
                      { onSubmit: this.onSearchFormSubmit },
                      te(
                        u.a,
                        { gutter: 16 },
                        te(
                          b.a,
                          { span: 8 },
                          te(
                            R.a.Item,
                            { label: 'Fuzzy query' },
                            e('queryValue')(
                              te(h.a, { placeholder: 'Please enter the content to be queried' })
                            )
                          )
                        ),
                        te(
                          b.a,
                          { span: 8 },
                          te(R.a.Item, { label: 'User Role' }, e('roleIDs')(te(X, null)))
                        ),
                        te(
                          b.a,
                          { span: 8 },
                          te(
                            'div',
                            { style: { overflow: 'hidden', paddingTop: 4 } },
                            te(d.a, { type: 'primary', htmlType: 'submit' }, '\u67e5\u8be2'),
                            te(
                              d.a,
                              { style: { marginLeft: 8 }, onClick: this.onResetFormClick },
                              '\u91cd\u7f6e'
                            )
                          )
                        )
                      )
                    );
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.props,
                      a = t.loading,
                      n = t.user.data,
                      o = n.list,
                      i = n.pagination,
                      s = this.state,
                      u = s.selectedRows,
                      p = s.selectedRowKeys,
                      d = [
                        { title: 'Username', dataIndex: 'user_name' },
                        { title: 'Realname', dataIndex: 'real_name' },
                        {
                          title: 'Roles',
                          dataIndex: 'roles',
                          render: function(e) {
                            if (!e || 0 === e.length) return te('span', null, '-');
                            for (var t = [], a = 0; a < e.length; a += 1) t.push(e[a].name);
                            return te('span', null, t.join(' | '));
                          },
                        },
                        {
                          title: 'User Status',
                          dataIndex: 'status',
                          render: function(e) {
                            return te(
                              l.a,
                              1 === e
                                ? { status: 'success', text: 'Enable' }
                                : { status: 'error', text: 'Deactivate' }
                            );
                          },
                        },
                        { title: 'Email', dataIndex: 'email' },
                        { title: 'Phone Number', dataIndex: 'phone' },
                        {
                          title: 'Created At',
                          dataIndex: 'created_at',
                          render: function(e) {
                            return te('span', null, Object(T.a)(e, 'YYYY-MM-DD HH:mm'));
                          },
                        },
                      ],
                      f = ne(
                        {
                          showSizeChanger: !0,
                          showQuickJumper: !0,
                          showTotal: function(e) {
                            return te('span', null, 'Total ', e, ' pages');
                          },
                        },
                        i
                      );
                    return te(
                      F.a,
                      { title: 'User Management' },
                      te(
                        r.a,
                        { bordered: !1 },
                        te(
                          'div',
                          { className: ee.a.tableList },
                          te('div', { className: ee.a.tableListForm }, this.renderSearchForm()),
                          te(
                            'div',
                            { className: ee.a.tableListOperator },
                            te(
                              I.a,
                              {
                                code: 'add',
                                type: 'primary',
                                onClick: function() {
                                  return e.onAddClick();
                                },
                              },
                              'New'
                            ),
                            1 === u.length && [
                              te(
                                I.a,
                                {
                                  key: 'edit',
                                  code: 'edit',
                                  onClick: function() {
                                    return e.onItemEditClick(u[0]);
                                  },
                                },
                                'Edit'
                              ),
                              te(
                                I.a,
                                {
                                  key: 'del',
                                  code: 'del',
                                  type: 'danger',
                                  onClick: function() {
                                    return e.onItemDelClick(u[0]);
                                  },
                                },
                                'Delete'
                              ),
                              2 === u[0].status &&
                                te(
                                  I.a,
                                  {
                                    key: 'enable',
                                    code: 'enable',
                                    onClick: function() {
                                      return e.onItemEnableClick(u[0]);
                                    },
                                  },
                                  'Enable'
                                ),
                              1 === u[0].status &&
                                te(
                                  I.a,
                                  {
                                    key: 'disable',
                                    code: 'disable',
                                    type: 'danger',
                                    onClick: function() {
                                      return e.onItemDisableClick(u[0]);
                                    },
                                  },
                                  'Disable'
                                ),
                            ]
                          ),
                          te(
                            'div',
                            null,
                            te(c.a, {
                              rowSelection: {
                                selectedRowKeys: p,
                                onSelect: this.handleTableSelectRow,
                              },
                              loading: a,
                              rowKey: function(e) {
                                return e.id;
                              },
                              dataSource: o,
                              columns: d,
                              pagination: f,
                              onChange: this.onTableChange,
                              size: 'small',
                            })
                          )
                        )
                      ),
                      this.renderDataForm()
                    );
                  },
                },
              ]),
              a
            );
          })(P.PureComponent))
        ) || W;
      t.default = Object(J.a)(function(e) {
        return { loading: e.loading.models.user, user: e.user };
      })(oe);
    },
    BYYP: function(e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/system/user',
        function() {
          return a('7m+u');
        },
      ]);
    },
  },
  [['BYYP', 0, 2, 6, 1, 3, 4, 5, 8, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 9]],
]);
