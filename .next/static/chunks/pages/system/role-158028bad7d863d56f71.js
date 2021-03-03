_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [33],
  {
    UDU0: function(e, t, n) {
      'use strict';
      n.r(t);
      n('mN36');
      var a = n('N9UN'),
        r = n.n(a),
        c = (n('zmYW'), n('DtFj')),
        o = n.n(c),
        i = (n('CbT5'), n('RWbP')),
        l = n.n(i),
        u = (n('hr7U'), n('9xET')),
        s = n.n(u),
        d = (n('MaXC'), n('4IMT')),
        f = n.n(d),
        p = (n('fv9D'), n('ZPTe')),
        h = n.n(p),
        b = (n('cUip'), n('iJl9')),
        m = n.n(b),
        O = (n('fwXI'), n('CC+v')),
        j = n.n(O),
        y = n('1OyB'),
        v = n('vuIU'),
        g = n('JX7q'),
        S = n('Ji7U'),
        w = n('md7G'),
        C = n('foSv'),
        D = n('rePB'),
        k = n('q1tI'),
        R = n.n(k),
        P = n('WsrF'),
        x = (n('XlDN'), n('XZXw')),
        _ = n('rZaG'),
        I = n('+n12'),
        E = (n('b+Mx'), n('5Dct')),
        F = n.n(E),
        A = n('wx14'),
        T = (n('tL+A'), n('QpBz')),
        N = n.n(T),
        K = n('KQm4'),
        q = n('SEfv'),
        M = n('Ff2n'),
        U = (n('pJsf'), n('g4D/')),
        X = n.n(U),
        V = R.a.createElement;
      function J(e) {
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
          var n,
            a = Object(C.a)(e);
          if (t) {
            var r = Object(C.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(w.a)(this, n);
        };
      }
      var L = (function(e) {
          Object(S.a)(n, e);
          var t = J(n);
          function n() {
            var e;
            Object(y.a)(this, n);
            for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(D.a)(Object(g.a)(e), 'findItem', function() {
                for (var t = e.props, n = t.data, a = t.record, r = 0; r < n.length; r += 1)
                  if (n[r].menu_id === a.id) return n[r];
                return null;
              }),
              Object(D.a)(Object(g.a)(e), 'handleChange', function(t) {
                var n = e.props,
                  a = n.record,
                  r = n.dataIndex;
                (0, n.handleSave)(a, r, t);
              }),
              Object(D.a)(Object(g.a)(e), 'renderAction', function() {
                var t = e.props.record;
                if (!t.actions || 0 === t.actions.length) return null;
                var n = e.findItem();
                return V(
                  X.a.Group,
                  { disabled: !n, value: n ? n.actions : [], onChange: e.handleChange },
                  V(
                    s.a,
                    null,
                    t.actions.map(function(e) {
                      return V(h.a, { key: e.id }, V(X.a, { value: e.id }, e.name));
                    })
                  )
                );
              }),
              e
            );
          }
          return (
            Object(v.a)(n, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.dataIndex,
                    n =
                      (e.record,
                      e.menuData,
                      e.handleSave,
                      Object(M.a)(e, ['dataIndex', 'record', 'menuData', 'handleSave']));
                  return V(
                    'td',
                    n,
                    'actions' === t && this.renderAction(),
                    !('actions' === t) && n.children
                  );
                },
              },
            ]),
            n
          );
        })(k.PureComponent),
        z = R.a.createElement;
      function Y(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Y(Object(n), !0).forEach(function(t) {
                Object(D.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Y(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function G(e) {
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
          var n,
            a = Object(C.a)(e);
          if (t) {
            var r = Object(C.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(w.a)(this, n);
        };
      }
      var Q,
        W = (function(e) {
          Object(S.a)(n, e);
          var t = G(n);
          function n(e) {
            var a;
            return (
              Object(y.a)(this, n),
              (a = t.call(this, e)),
              Object(D.a)(Object(g.a)(a), 'fillData', function(e) {
                for (var t = Object(K.a)(e), n = 0; n < t.length; n += 1) {
                  var r = t[n].children,
                    c = B(B({}, t[n]), {}, { hasChild: r && r.length > 0 });
                  c.hasChild && (c.children = a.fillData(r)), (t[n] = c);
                }
                return t;
              }),
              Object(D.a)(Object(g.a)(a), 'handleSave', function(e, t, n) {
                var r = a.state.dataSource,
                  c = Object(K.a)(r),
                  o = c.findIndex(function(t) {
                    return t.menu_id === e.id;
                  }),
                  i = c[o];
                i ? (i[t] = n) : (i = { menu_id: e.id, dataIndex: n }),
                  c.splice(o, 1, B({}, i)),
                  a.setState({ dataSource: c }, function() {
                    a.triggerChange(c);
                  });
              }),
              Object(D.a)(Object(g.a)(a), 'triggerChange', function(e) {
                var t = a.props.onChange;
                t && t(e);
              }),
              Object(D.a)(Object(g.a)(a), 'expandAllChild', function(e) {
                for (var t = [], n = 0; n < e.length; n += 1)
                  t.push(e[n]),
                    e[n].children &&
                      (t = [].concat(Object(K.a)(t), Object(K.a)(a.expandAllChild(e[n].children))));
                return t;
              }),
              Object(D.a)(Object(g.a)(a), 'checkAndAdd', function(e, t) {
                for (var n = Object(K.a)(e), a = 0; a < t.length; a += 1) {
                  for (var r = !1, c = 0; c < n.length; c += 1)
                    if (n[c].menu_id === t[a].id) {
                      r = !0;
                      break;
                    }
                  if (!r) {
                    var o = {
                      menu_id: t[a].id,
                      actions: t[a].actions
                        ? t[a].actions.map(function(e) {
                            return e.id;
                          })
                        : [],
                    };
                    n.push(o);
                  }
                }
                return n;
              }),
              Object(D.a)(Object(g.a)(a), 'cancelSelected', function(e, t) {
                for (var n = [], a = 0; a < e.length; a += 1) {
                  for (var r = !1, c = 0; c < t.length; c += 1)
                    if (e[a].menu_id === t[c].id) {
                      r = !0;
                      break;
                    }
                  r || n.push(e[a]);
                }
                return n;
              }),
              Object(D.a)(Object(g.a)(a), 'handleSelectedRow', function(e, t) {
                var n = [e];
                e.children &&
                  (n = [].concat(Object(K.a)(n), Object(K.a)(a.expandAllChild(e.children))));
                var r = a.state.dataSource,
                  c = [];
                (c = t ? a.checkAndAdd(r, n) : a.cancelSelected(r, n)),
                  a.setState({ dataSource: c }, function() {
                    a.triggerChange(c);
                  });
              }),
              Object(D.a)(Object(g.a)(a), 'handleSelectAll', function(e, t) {
                var n = [];
                e &&
                  (n = t.map(function(e) {
                    return {
                      menu_id: e.id,
                      actions: e.actions
                        ? e.actions.map(function(e) {
                            return e.id;
                          })
                        : [],
                    };
                  })),
                  a.setState({ dataSource: n }, function() {
                    a.triggerChange(n);
                  });
              }),
              (a.columns = [
                { title: '\u83dc\u5355\u540d\u79f0', dataIndex: 'name', width: '35%' },
                { title: '\u52a8\u4f5c\u6743\u9650', dataIndex: 'actions', editable: !0 },
              ]),
              (a.state = { menuData: [], dataSource: e.value || [] }),
              a
            );
          }
          return (
            Object(v.a)(
              n,
              [
                {
                  key: 'componentDidMount',
                  value: function() {
                    var e = this;
                    q.g().then(function(t) {
                      var n = t.list || [];
                      e.setState({ menuData: e.fillData(n) });
                    });
                  },
                },
                {
                  key: 'render',
                  value: function() {
                    var e = this,
                      t = this.state,
                      n = t.dataSource,
                      a = t.menuData,
                      r = { body: { cell: L } },
                      c = this.columns.map(function(t) {
                        return t.editable
                          ? B(
                              B({}, t),
                              {},
                              {
                                onCell: function(a) {
                                  return {
                                    record: a,
                                    data: n,
                                    dataIndex: t.dataIndex,
                                    handleSave: e.handleSave,
                                  };
                                },
                              }
                            )
                          : t;
                      });
                    return (
                      a.length > 0 &&
                      z(o.a, {
                        bordered: !0,
                        defaultExpandAllRows: !0,
                        rowSelection: {
                          selectedRowKeys: n.map(function(e) {
                            return e.menu_id;
                          }),
                          onSelect: this.handleSelectedRow,
                          onSelectAll: this.handleSelectAll,
                        },
                        rowKey: function(e) {
                          return e.id;
                        },
                        components: r,
                        dataSource: a,
                        columns: c,
                        pagination: !1,
                      })
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function(e, t) {
                    return 'value' in e ? B(B({}, t), {}, { dataSource: e.value || [] }) : t;
                  },
                },
              ]
            ),
            n
          );
        })(k.PureComponent),
        Z = n('2m8j'),
        H = R.a.createElement;
      function $(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $(Object(n), !0).forEach(function(t) {
                Object(D.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : $(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function te(e) {
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
          var n,
            a = Object(C.a)(e);
          if (t) {
            var r = Object(C.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(w.a)(this, n);
        };
      }
      var ne,
        ae =
          P.a.create()(
            (Q = (function(e) {
              Object(S.a)(n, e);
              var t = te(n);
              function n() {
                var e;
                Object(y.a)(this, n);
                for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
                  r[c] = arguments[c];
                return (
                  (e = t.call.apply(t, [this].concat(r))),
                  Object(D.a)(Object(g.a)(e), 'onOKClick', function() {
                    var t = e.props,
                      n = t.form,
                      a = t.onSubmit;
                    n.validateFieldsAndScroll(function(e, t) {
                      if (!e) {
                        var n = ee({}, t);
                        if (
                          ((n.sequence = parseInt(n.sequence, 10)),
                          (n.status = 1),
                          n.role_menus && 0 !== n.role_menus.length)
                        ) {
                          var r = [];
                          n.role_menus.forEach(function(e) {
                            e.actions && e.actions.length > 0
                              ? e.actions.forEach(function(t) {
                                  r.push({ menu_id: e.menu_id, action_id: t });
                                })
                              : r.push({ menu_id: e.menu_id });
                          }),
                            (n.role_menus = r),
                            a(n);
                        } else N.a.warning('Please select menu permissions!');
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
                Object(v.a)(n, [
                  {
                    key: 'render',
                    value: function() {
                      var e = this.props,
                        t = e.role,
                        n = t.formTitle,
                        a = t.formVisible,
                        c = t.formData,
                        o = t.submitting,
                        i = e.form.getFieldDecorator,
                        l = e.onCancel,
                        u = { labelCol: { span: 6 }, wrapperCol: { span: 18 } };
                      return H(
                        j.a,
                        {
                          title: n,
                          width: 800,
                          visible: a,
                          maskClosable: !1,
                          confirmLoading: o,
                          destroyOnClose: !0,
                          onOk: this.onOKClick,
                          onCancel: l,
                          style: { top: 20 },
                          bodyStyle: { maxHeight: 'calc( 100vh - 158px )', overflowY: 'auto' },
                        },
                        H(
                          P.a,
                          null,
                          H(
                            s.a,
                            null,
                            H(
                              h.a,
                              { span: 12 },
                              H(
                                P.a.Item,
                                Object(A.a)({}, u, { label: 'Role Name' }),
                                i('name', {
                                  initialValue: c.name,
                                  rules: [{ required: !0, message: 'Please enter the role name' }],
                                })(H(m.a, { placeholder: 'Please enter the role name' }))
                              )
                            ),
                            H(
                              h.a,
                              { span: 12 },
                              H(
                                P.a.Item,
                                Object(A.a)({}, u, { label: 'Sort value' }),
                                i('sequence', {
                                  initialValue: c.sequence ? c.sequence.toString() : '1000000',
                                  rules: [{ required: !0, message: 'Please enter a sort value' }],
                                })(H(F.a, { min: 1, style: { width: '100%' } }))
                              )
                            )
                          ),
                          H(
                            P.a.Item,
                            Object(A.a)(
                              {},
                              { labelCol: { span: 3 }, wrapperCol: { span: 21 } },
                              { label: 'Remarks' }
                            ),
                            i('memo', { initialValue: c.memo })(
                              H(m.a.TextArea, { rows: 2, placeholder: 'Please enter a note' })
                            )
                          ),
                          H(
                            P.a.Item,
                            null,
                            H(
                              r.a,
                              { title: 'Select menu permissions', bordered: !1 },
                              i('role_menus', { initialValue: c.role_menus })(H(W, null))
                            )
                          )
                        )
                      );
                    },
                  },
                ]),
                n
              );
            })(k.PureComponent))
          ) || Q,
        re = Object(Z.a)(function(e) {
          return { role: e.role };
        })(ae),
        ce = n('oXlo'),
        oe = n.n(ce),
        ie = R.a.createElement;
      function le(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          t &&
            (a = a.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, a);
        }
        return n;
      }
      function ue(e) {
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
          var n,
            a = Object(C.a)(e);
          if (t) {
            var r = Object(C.a)(this).constructor;
            n = Reflect.construct(a, arguments, r);
          } else n = a.apply(this, arguments);
          return Object(w.a)(this, n);
        };
      }
      var se =
        P.a.create()(
          (ne = (function(e) {
            Object(S.a)(n, e);
            var t = ue(n);
            function n() {
              var e;
              Object(y.a)(this, n);
              for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++)
                r[c] = arguments[c];
              return (
                (e = t.call.apply(t, [this].concat(r))),
                Object(D.a)(Object(g.a)(e), 'state', { selectedRowKeys: [], selectedRows: [] }),
                Object(D.a)(Object(g.a)(e), 'onItemDisableClick', function(t) {
                  e.dispatch({ type: 'role/changeStatus', payload: { id: t.id, status: 2 } });
                }),
                Object(D.a)(Object(g.a)(e), 'onItemEnableClick', function(t) {
                  e.dispatch({ type: 'role/changeStatus', payload: { id: t.id, status: 1 } });
                }),
                Object(D.a)(Object(g.a)(e), 'clearSelectRows', function() {
                  0 !== e.state.selectedRowKeys.length &&
                    e.setState({ selectedRowKeys: [], selectedRows: [] });
                }),
                Object(D.a)(Object(g.a)(e), 'dispatch', function(t) {
                  (0, e.props.dispatch)(t);
                }),
                Object(D.a)(Object(g.a)(e), 'handleAddClick', function() {
                  e.dispatch({ type: 'role/loadForm', payload: { type: 'A' } });
                }),
                Object(D.a)(Object(g.a)(e), 'handleEditClick', function(t) {
                  e.dispatch({ type: 'role/loadForm', payload: { type: 'E', id: t.id } });
                }),
                Object(D.a)(Object(g.a)(e), 'handleDelClick', function(t) {
                  j.a.confirm({
                    title: 'Confirm to delete [role data\uff1a'.concat(t.name, '\u3011\uff1f'),
                    okText: 'Confirm',
                    okType: 'danger',
                    cancelText: 'Cancel',
                    onOk: e.handleDelOKClick.bind(Object(g.a)(e), t.id),
                  });
                }),
                Object(D.a)(Object(g.a)(e), 'handleTableSelectRow', function(t, n) {
                  var a = [],
                    r = [];
                  n && (a.push(t.id), r.push(t)),
                    e.setState({ selectedRowKeys: a, selectedRows: r });
                }),
                Object(D.a)(Object(g.a)(e), 'handleTableChange', function(t) {
                  e.dispatch({
                    type: 'role/fetch',
                    pagination: { current: t.current, pageSize: t.pageSize },
                  }),
                    e.clearSelectRows();
                }),
                Object(D.a)(Object(g.a)(e), 'onResetFormClick', function() {
                  e.props.form.resetFields(),
                    e.dispatch({ type: 'role/fetch', search: {}, pagination: {} });
                }),
                Object(D.a)(Object(g.a)(e), 'handleSearchFormSubmit', function(t) {
                  t && t.preventDefault(),
                    e.props.form.validateFields({ force: !0 }, function(t, n) {
                      t ||
                        (e.dispatch({ type: 'role/fetch', search: n, pagination: {} }),
                        e.clearSelectRows());
                    });
                }),
                Object(D.a)(Object(g.a)(e), 'handleDataFormSubmit', function(t) {
                  e.dispatch({ type: 'role/submit', payload: t }), e.clearSelectRows();
                }),
                Object(D.a)(Object(g.a)(e), 'handleDataFormCancel', function() {
                  e.dispatch({ type: 'role/changeFormVisible', payload: !1 });
                }),
                e
              );
            }
            return (
              Object(v.a)(n, [
                {
                  key: 'componentDidMount',
                  value: function() {
                    this.dispatch({ type: 'role/fetch', search: {}, pagination: {} });
                  },
                },
                {
                  key: 'handleDelOKClick',
                  value: function(e) {
                    this.dispatch({ type: 'role/del', payload: { id: e } }), this.clearSelectRows();
                  },
                },
                {
                  key: 'renderDataForm',
                  value: function() {
                    return ie(re, {
                      onCancel: this.handleDataFormCancel,
                      onSubmit: this.handleDataFormSubmit,
                    });
                  },
                },
                {
                  key: 'renderSearchForm',
                  value: function() {
                    var e = this.props.form.getFieldDecorator;
                    return ie(
                      P.a,
                      { onSubmit: this.handleSearchFormSubmit },
                      ie(
                        s.a,
                        { gutter: 16 },
                        ie(
                          h.a,
                          { span: 8 },
                          ie(
                            P.a.Item,
                            null,
                            e('queryValue')(
                              ie(m.a, { placeholder: 'Please enter the content to be queried' })
                            )
                          )
                        ),
                        ie(
                          h.a,
                          { span: 8 },
                          ie(
                            'div',
                            { style: { overflow: 'hidden', paddingTop: 4 } },
                            ie(f.a, { type: 'primary', htmlType: 'submit' }, '\u67e5\u8be2'),
                            ie(
                              f.a,
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
                      n = t.loading,
                      a = t.role.data,
                      c = a.list,
                      i = a.pagination,
                      u = this.state,
                      s = u.selectedRowKeys,
                      d = u.selectedRows,
                      f = [
                        { title: 'Role Name', dataIndex: 'name' },
                        { title: 'Sort Value', dataIndex: 'sequence' },
                        {
                          title: 'Status',
                          dataIndex: 'status',
                          render: function(e) {
                            return ie(
                              l.a,
                              1 === e
                                ? { status: 'success', text: 'Enable' }
                                : { status: 'error', text: 'Deactivate' }
                            );
                          },
                        },
                        {
                          title: 'Create Time',
                          dataIndex: 'created_at',
                          render: function(e) {
                            return ie('span', null, Object(I.a)(e, 'YYYY-MM-DD'));
                          },
                        },
                        { title: 'Remarks', dataIndex: 'memo' },
                      ],
                      p = (function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? le(Object(n), !0).forEach(function(t) {
                                Object(D.a)(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                            : le(Object(n)).forEach(function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                              });
                        }
                        return e;
                      })(
                        {
                          showSizeChanger: !0,
                          showQuickJumper: !0,
                          showTotal: function(e) {
                            return ie('span', null, 'Total ', e, ' pages');
                          },
                        },
                        i
                      );
                    return ie(
                      x.a,
                      {
                        title: 'Role Management',
                        breadcrumbList: [
                          { title: 'System Management' },
                          { title: 'Role Management', href: '/system/role' },
                        ],
                      },
                      ie(
                        r.a,
                        { bordered: !1 },
                        ie(
                          'div',
                          { className: oe.a.tableList },
                          ie('div', { className: oe.a.tableListForm }, this.renderSearchForm()),
                          ie(
                            'div',
                            { className: oe.a.tableListOperator },
                            ie(
                              _.a,
                              {
                                code: 'add',
                                type: 'primary',
                                onClick: function() {
                                  return e.handleAddClick();
                                },
                              },
                              'New'
                            ),
                            1 === d.length && [
                              ie(
                                _.a,
                                {
                                  key: 'edit',
                                  code: 'edit',
                                  onClick: function() {
                                    return e.handleEditClick(d[0]);
                                  },
                                },
                                'Edit'
                              ),
                              ie(
                                _.a,
                                {
                                  key: 'del',
                                  code: 'del',
                                  type: 'danger',
                                  onClick: function() {
                                    return e.handleDelClick(d[0]);
                                  },
                                },
                                'Delete'
                              ),
                              2 === d[0].status &&
                                ie(
                                  _.a,
                                  {
                                    key: 'enable',
                                    code: 'enable',
                                    onClick: function() {
                                      return e.onItemEnableClick(d[0]);
                                    },
                                  },
                                  'Enable'
                                ),
                              1 === d[0].status &&
                                ie(
                                  _.a,
                                  {
                                    key: 'disable',
                                    code: 'disable',
                                    type: 'danger',
                                    onClick: function() {
                                      return e.onItemDisableClick(d[0]);
                                    },
                                  },
                                  'Disable'
                                ),
                            ]
                          ),
                          ie(
                            'div',
                            null,
                            ie(o.a, {
                              rowSelection: {
                                selectedRowKeys: s,
                                onSelect: this.handleTableSelectRow,
                              },
                              loading: n,
                              rowKey: function(e) {
                                return e.id;
                              },
                              dataSource: c,
                              columns: f,
                              pagination: p,
                              onChange: this.handleTableChange,
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
              n
            );
          })(k.PureComponent))
        ) || ne;
      t.default = Object(Z.a)(function(e) {
        return { role: e.role, loading: e.loading.models.role };
      })(se);
    },
    ukBG: function(e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/system/role',
        function() {
          return n('UDU0');
        },
      ]);
    },
  },
  [['ukBG', 0, 2, 6, 1, 3, 4, 5, 8, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 9]],
]);
