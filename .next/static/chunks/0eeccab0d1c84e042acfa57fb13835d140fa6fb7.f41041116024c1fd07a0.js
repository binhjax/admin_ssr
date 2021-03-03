(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [13],
  {
    '+0iv': function(e, t, n) {
      'use strict';
      var r = n('qDJ8');
      function a(e) {
        return !0 === r(e) && '[object Object]' === Object.prototype.toString.call(e);
      }
      e.exports = function(e) {
        var t, n;
        return (
          !1 !== a(e) &&
          ('function' === typeof (t = e.constructor) &&
            (!1 !== a((n = t.prototype)) && !1 !== n.hasOwnProperty('isPrototypeOf')))
        );
      };
    },
    '/MKj': function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return f;
      }),
        n.d(t, 'b', function() {
          return K;
        });
      var r = n('q1tI'),
        a = n.n(r),
        o = (n('17x9'), a.a.createContext(null));
      var c = function(e) {
          e();
        },
        u = { notify: function() {} };
      function i() {
        var e = c,
          t = null,
          n = null;
        return {
          clear: function() {
            (t = null), (n = null);
          },
          notify: function() {
            e(function() {
              for (var e = t; e; ) e.callback(), (e = e.next);
            });
          },
          get: function() {
            for (var e = [], n = t; n; ) e.push(n), (n = n.next);
            return e;
          },
          subscribe: function(e) {
            var r = !0,
              a = (n = { callback: e, next: null, prev: n });
            return (
              a.prev ? (a.prev.next = a) : (t = a),
              function() {
                r &&
                  null !== t &&
                  ((r = !1),
                  a.next ? (a.next.prev = a.prev) : (n = a.prev),
                  a.prev ? (a.prev.next = a.next) : (t = a.next));
              }
            );
          },
        };
      }
      var s = (function() {
        function e(e, t) {
          (this.store = e),
            (this.parentSub = t),
            (this.unsubscribe = null),
            (this.listeners = u),
            (this.handleChangeWrapper = this.handleChangeWrapper.bind(this));
        }
        var t = e.prototype;
        return (
          (t.addNestedSub = function(e) {
            return this.trySubscribe(), this.listeners.subscribe(e);
          }),
          (t.notifyNestedSubs = function() {
            this.listeners.notify();
          }),
          (t.handleChangeWrapper = function() {
            this.onStateChange && this.onStateChange();
          }),
          (t.isSubscribed = function() {
            return Boolean(this.unsubscribe);
          }),
          (t.trySubscribe = function() {
            this.unsubscribe ||
              ((this.unsubscribe = this.parentSub
                ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                : this.store.subscribe(this.handleChangeWrapper)),
              (this.listeners = i()));
          }),
          (t.tryUnsubscribe = function() {
            this.unsubscribe &&
              (this.unsubscribe(),
              (this.unsubscribe = null),
              this.listeners.clear(),
              (this.listeners = u));
          }),
          e
        );
      })();
      var f = function(e) {
          var t = e.store,
            n = e.context,
            c = e.children,
            u = Object(r.useMemo)(
              function() {
                var e = new s(t);
                return (e.onStateChange = e.notifyNestedSubs), { store: t, subscription: e };
              },
              [t]
            ),
            i = Object(r.useMemo)(
              function() {
                return t.getState();
              },
              [t]
            );
          Object(r.useEffect)(
            function() {
              var e = u.subscription;
              return (
                e.trySubscribe(),
                i !== t.getState() && e.notifyNestedSubs(),
                function() {
                  e.tryUnsubscribe(), (e.onStateChange = null);
                }
              );
            },
            [u, i]
          );
          var f = n || o;
          return a.a.createElement(f.Provider, { value: u }, c);
        },
        p = n('wx14'),
        l = n('zLVn'),
        d = n('2mql'),
        y = n.n(d),
        v = n('TOwV'),
        h =
          'undefined' !== typeof window &&
          'undefined' !== typeof window.document &&
          'undefined' !== typeof window.document.createElement
            ? r.useLayoutEffect
            : r.useEffect,
        b = [],
        m = [null, null];
      function g(e, t) {
        var n = e[1];
        return [t.payload, n + 1];
      }
      function O(e, t, n) {
        h(function() {
          return e.apply(void 0, t);
        }, n);
      }
      function w(e, t, n, r, a, o, c) {
        (e.current = r), (t.current = a), (n.current = !1), o.current && ((o.current = null), c());
      }
      function x(e, t, n, r, a, o, c, u, i, s) {
        if (e) {
          var f = !1,
            p = null,
            l = function() {
              if (!f) {
                var e,
                  n,
                  l = t.getState();
                try {
                  e = r(l, a.current);
                } catch (d) {
                  (n = d), (p = d);
                }
                n || (p = null),
                  e === o.current
                    ? c.current || i()
                    : ((o.current = e),
                      (u.current = e),
                      (c.current = !0),
                      s({ type: 'STORE_UPDATED', payload: { error: n } }));
              }
            };
          (n.onStateChange = l), n.trySubscribe(), l();
          return function() {
            if (((f = !0), n.tryUnsubscribe(), (n.onStateChange = null), p)) throw p;
          };
        }
      }
      var j = function() {
        return [null, 0];
      };
      function k(e, t) {
        void 0 === t && (t = {});
        var n = t,
          c = n.getDisplayName,
          u =
            void 0 === c
              ? function(e) {
                  return 'ConnectAdvanced(' + e + ')';
                }
              : c,
          i = n.methodName,
          f = void 0 === i ? 'connectAdvanced' : i,
          d = n.renderCountProp,
          h = void 0 === d ? void 0 : d,
          k = n.shouldHandleStateChanges,
          E = void 0 === k || k,
          P = n.storeKey,
          S = void 0 === P ? 'store' : P,
          T = (n.withRef, n.forwardRef),
          D = void 0 !== T && T,
          _ = n.context,
          C = void 0 === _ ? o : _,
          A = Object(l.a)(n, [
            'getDisplayName',
            'methodName',
            'renderCountProp',
            'shouldHandleStateChanges',
            'storeKey',
            'withRef',
            'forwardRef',
            'context',
          ]),
          F = C;
        return function(t) {
          var n = t.displayName || t.name || 'Component',
            o = u(n),
            c = Object(p.a)({}, A, {
              getDisplayName: u,
              methodName: f,
              renderCountProp: h,
              shouldHandleStateChanges: E,
              storeKey: S,
              displayName: o,
              wrappedComponentName: n,
              WrappedComponent: t,
            }),
            i = A.pure;
          var d = i
            ? r.useMemo
            : function(e) {
                return e();
              };
          function k(n) {
            var o = Object(r.useMemo)(
                function() {
                  var e = n.reactReduxForwardedRef,
                    t = Object(l.a)(n, ['reactReduxForwardedRef']);
                  return [n.context, e, t];
                },
                [n]
              ),
              u = o[0],
              i = o[1],
              f = o[2],
              y = Object(r.useMemo)(
                function() {
                  return u &&
                    u.Consumer &&
                    Object(v.isContextConsumer)(a.a.createElement(u.Consumer, null))
                    ? u
                    : F;
                },
                [u, F]
              ),
              h = Object(r.useContext)(y),
              k = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch);
            Boolean(h) && Boolean(h.store);
            var P = k ? n.store : h.store,
              S = Object(r.useMemo)(
                function() {
                  return (function(t) {
                    return e(t.dispatch, c);
                  })(P);
                },
                [P]
              ),
              T = Object(r.useMemo)(
                function() {
                  if (!E) return m;
                  var e = new s(P, k ? null : h.subscription),
                    t = e.notifyNestedSubs.bind(e);
                  return [e, t];
                },
                [P, k, h]
              ),
              D = T[0],
              _ = T[1],
              C = Object(r.useMemo)(
                function() {
                  return k ? h : Object(p.a)({}, h, { subscription: D });
                },
                [k, h, D]
              ),
              A = Object(r.useReducer)(g, b, j),
              N = A[0][0],
              R = A[1];
            if (N && N.error) throw N.error;
            var I = Object(r.useRef)(),
              M = Object(r.useRef)(f),
              L = Object(r.useRef)(),
              U = Object(r.useRef)(!1),
              q = d(
                function() {
                  return L.current && f === M.current ? L.current : S(P.getState(), f);
                },
                [P, N, f]
              );
            O(w, [M, I, U, f, q, L, _]), O(x, [E, P, D, S, M, I, U, L, _, R], [P, D, S]);
            var K = Object(r.useMemo)(
              function() {
                return a.a.createElement(t, Object(p.a)({}, q, { ref: i }));
              },
              [i, t, q]
            );
            return Object(r.useMemo)(
              function() {
                return E ? a.a.createElement(y.Provider, { value: C }, K) : K;
              },
              [y, K, C]
            );
          }
          var P = i ? a.a.memo(k) : k;
          if (((P.WrappedComponent = t), (P.displayName = o), D)) {
            var T = a.a.forwardRef(function(e, t) {
              return a.a.createElement(P, Object(p.a)({}, e, { reactReduxForwardedRef: t }));
            });
            return (T.displayName = o), (T.WrappedComponent = t), y()(T, t);
          }
          return y()(P, t);
        };
      }
      function E(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e === 1 / t : e !== e && t !== t;
      }
      function P(e, t) {
        if (E(e, t)) return !0;
        if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (var a = 0; a < n.length; a++)
          if (!Object.prototype.hasOwnProperty.call(t, n[a]) || !E(e[n[a]], t[n[a]])) return !1;
        return !0;
      }
      var S = n('ANjH');
      function T(e) {
        return function(t, n) {
          var r = e(t, n);
          function a() {
            return r;
          }
          return (a.dependsOnOwnProps = !1), a;
        };
      }
      function D(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps
          ? Boolean(e.dependsOnOwnProps)
          : 1 !== e.length;
      }
      function _(e, t) {
        return function(t, n) {
          n.displayName;
          var r = function(e, t) {
            return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
          };
          return (
            (r.dependsOnOwnProps = !0),
            (r.mapToProps = function(t, n) {
              (r.mapToProps = e), (r.dependsOnOwnProps = D(e));
              var a = r(t, n);
              return (
                'function' === typeof a &&
                  ((r.mapToProps = a), (r.dependsOnOwnProps = D(a)), (a = r(t, n))),
                a
              );
            }),
            r
          );
        };
      }
      var C = [
        function(e) {
          return 'function' === typeof e ? _(e) : void 0;
        },
        function(e) {
          return e
            ? void 0
            : T(function(e) {
                return { dispatch: e };
              });
        },
        function(e) {
          return e && 'object' === typeof e
            ? T(function(t) {
                return Object(S.b)(e, t);
              })
            : void 0;
        },
      ];
      var A = [
        function(e) {
          return 'function' === typeof e ? _(e) : void 0;
        },
        function(e) {
          return e
            ? void 0
            : T(function() {
                return {};
              });
        },
      ];
      function F(e, t, n) {
        return Object(p.a)({}, n, e, t);
      }
      var N = [
        function(e) {
          return 'function' === typeof e
            ? (function(e) {
                return function(t, n) {
                  n.displayName;
                  var r,
                    a = n.pure,
                    o = n.areMergedPropsEqual,
                    c = !1;
                  return function(t, n, u) {
                    var i = e(t, n, u);
                    return c ? (a && o(i, r)) || (r = i) : ((c = !0), (r = i)), r;
                  };
                };
              })(e)
            : void 0;
        },
        function(e) {
          return e
            ? void 0
            : function() {
                return F;
              };
        },
      ];
      function R(e, t, n, r) {
        return function(a, o) {
          return n(e(a, o), t(r, o), o);
        };
      }
      function I(e, t, n, r, a) {
        var o,
          c,
          u,
          i,
          s,
          f = a.areStatesEqual,
          p = a.areOwnPropsEqual,
          l = a.areStatePropsEqual,
          d = !1;
        function y(a, d) {
          var y = !p(d, c),
            v = !f(a, o);
          return (
            (o = a),
            (c = d),
            y && v
              ? ((u = e(o, c)), t.dependsOnOwnProps && (i = t(r, c)), (s = n(u, i, c)))
              : y
              ? (e.dependsOnOwnProps && (u = e(o, c)),
                t.dependsOnOwnProps && (i = t(r, c)),
                (s = n(u, i, c)))
              : v
              ? (function() {
                  var t = e(o, c),
                    r = !l(t, u);
                  return (u = t), r && (s = n(u, i, c)), s;
                })()
              : s
          );
        }
        return function(a, f) {
          return d
            ? y(a, f)
            : ((u = e((o = a), (c = f))), (i = t(r, c)), (s = n(u, i, c)), (d = !0), s);
        };
      }
      function M(e, t) {
        var n = t.initMapStateToProps,
          r = t.initMapDispatchToProps,
          a = t.initMergeProps,
          o = Object(l.a)(t, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']),
          c = n(e, o),
          u = r(e, o),
          i = a(e, o);
        return (o.pure ? I : R)(c, u, i, e, o);
      }
      function L(e, t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
          var a = t[r](e);
          if (a) return a;
        }
        return function(t, r) {
          throw new Error(
            'Invalid value of type ' +
              typeof e +
              ' for ' +
              n +
              ' argument when connecting component ' +
              r.wrappedComponentName +
              '.'
          );
        };
      }
      function U(e, t) {
        return e === t;
      }
      function q(e) {
        var t = void 0 === e ? {} : e,
          n = t.connectHOC,
          r = void 0 === n ? k : n,
          a = t.mapStateToPropsFactories,
          o = void 0 === a ? A : a,
          c = t.mapDispatchToPropsFactories,
          u = void 0 === c ? C : c,
          i = t.mergePropsFactories,
          s = void 0 === i ? N : i,
          f = t.selectorFactory,
          d = void 0 === f ? M : f;
        return function(e, t, n, a) {
          void 0 === a && (a = {});
          var c = a,
            i = c.pure,
            f = void 0 === i || i,
            y = c.areStatesEqual,
            v = void 0 === y ? U : y,
            h = c.areOwnPropsEqual,
            b = void 0 === h ? P : h,
            m = c.areStatePropsEqual,
            g = void 0 === m ? P : m,
            O = c.areMergedPropsEqual,
            w = void 0 === O ? P : O,
            x = Object(l.a)(c, [
              'pure',
              'areStatesEqual',
              'areOwnPropsEqual',
              'areStatePropsEqual',
              'areMergedPropsEqual',
            ]),
            j = L(e, o, 'mapStateToProps'),
            k = L(t, u, 'mapDispatchToProps'),
            E = L(n, s, 'mergeProps');
          return r(
            d,
            Object(p.a)(
              {
                methodName: 'connect',
                getDisplayName: function(e) {
                  return 'Connect(' + e + ')';
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: j,
                initMapDispatchToProps: k,
                initMergeProps: E,
                pure: f,
                areStatesEqual: v,
                areOwnPropsEqual: b,
                areStatePropsEqual: g,
                areMergedPropsEqual: w,
              },
              x
            )
          );
        };
      }
      var K = q();
      var H,
        V = n('i8i4');
      (H = V.unstable_batchedUpdates), (c = H);
    },
    '03io': function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return i;
      }),
        n.d(t, 'g', function() {
          return f;
        }),
        n.d(t, 'e', function() {
          return l;
        }),
        n.d(t, 'a', function() {
          return y;
        }),
        n.d(t, 'h', function() {
          return h;
        }),
        n.d(t, 'b', function() {
          return m;
        }),
        n.d(t, 'd', function() {
          return O;
        }),
        n.d(t, 'c', function() {
          return x;
        });
      var r = n('o0o1'),
        a = n.n(r),
        o = n('HaE+'),
        c = n('t3Un'),
        u = 'roles';
      function i(e) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = Object(o.a)(
          a.a.mark(function e(t) {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt('return', Object(c.b)('/v1/'.concat(u), { params: t }));
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function f() {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(o.a)(
          a.a.mark(function e() {
            var t,
              n = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}),
                      e.abrupt('return', Object(c.b)('/v1/'.concat(u, '.select'), { params: t }))
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function l(e) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = Object(o.a)(
          a.a.mark(function e(t) {
            var n,
              r = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(c.b)('/v1/'.concat(u, '/').concat(t), { params: n })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function y(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(o.a)(
          a.a.mark(function e(t) {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c.b)('/v1/'.concat(u), { method: c.d.POST, data: t })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function h(e, t) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = Object(o.a)(
          a.a.mark(function e(t, n) {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c.b)('/v1/'.concat(u, '/').concat(t), { method: c.d.PUT, data: n })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function m(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = Object(o.a)(
          a.a.mark(function e(t) {
            var n,
              r = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(c.b)('/v1/'.concat(u, '/').concat(t), {
                          method: c.d.DELETE,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function O(e) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = Object(o.a)(
          a.a.mark(function e(t) {
            var n,
              r = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(c.b)('/v1/'.concat(u, '/').concat(t, '/enable'), {
                          method: c.d.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function x(e) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = Object(o.a)(
          a.a.mark(function e(t) {
            var n,
              r = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(c.b)('/v1/'.concat(u, '/').concat(t, '/disable'), {
                          method: c.d.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    15: function(e, t) {},
    '2m8j': function(e, t, n) {
      'use strict';
      (function(e) {
        n.d(t, 'a', function() {
          return g;
        });
        var r = n('o0o1'),
          a = n.n(r),
          o = n('rePB'),
          c = n('HaE+'),
          u = n('Ff2n'),
          i = n('q1tI'),
          s = n.n(i),
          f = n('kjFo'),
          p = n('/MKj'),
          l = n('OjRq'),
          d = n('Whig');
        function y(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function v(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? y(Object(n), !0).forEach(function(t) {
                  Object(o.a)(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : y(Object(n)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        var h = function() {
          return '[object process]' === Object.prototype.toString.call(e.process);
        };
        function b(e) {
          var t;
          return (
            (t = e ? Object(f.a)({ initialState: e }) : Object(f.a)({})),
            Array.isArray(l.a)
              ? l.a.forEach(function(e) {
                  t.model(e);
                })
              : t.model(l.a),
            t.router(function() {}),
            t.use(Object(d.a)({})),
            t.start(),
            t._store
          );
        }
        function m(e) {
          return h()
            ? b(e)
            : (window.__NEXT_DVA_STORE__ || (window.__NEXT_DVA_STORE__ = b(e)),
              window.__NEXT_DVA_STORE__);
        }
        function g() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
          return function(e) {
            var n = function() {
              var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = n.store,
                a = n.initialState,
                o = Object(u.a)(n, ['store', 'initialState']),
                c = p.b.apply(void 0, t)(e);
              return s.a.createElement(
                p.a,
                { store: r && r.dispatch ? r : m(a) },
                s.a.createElement(c, o)
              );
            };
            return (
              (n.getInitialProps = Object(c.a)(
                a.a.mark(function t() {
                  var n,
                    r,
                    o,
                    c,
                    u = arguments;
                  return a.a.wrap(function(t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = u.length > 0 && void 0 !== u[0] ? u[0] : {}),
                            (r = h()),
                            (o = m(n.req)),
                            !e.getInitialProps)
                          ) {
                            t.next = 9;
                            break;
                          }
                          return (
                            (t.next = 6),
                            e.getInitialProps(v(v({}, n), {}, { isServer: r, store: o }))
                          );
                        case 6:
                          (t.t0 = t.sent), (t.next = 10);
                          break;
                        case 9:
                          t.t0 = {};
                        case 10:
                          return (
                            (c = t.t0),
                            t.abrupt('return', {
                              store: o,
                              initialProps: c,
                              initialState: o.getState(),
                            })
                          );
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )),
              n
            );
          };
        }
      }.call(this, n('yLpj')));
    },
    '2mql': function(e, t, n) {
      'use strict';
      var r = n('TOwV'),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        c = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        u = {};
      function i(e) {
        return r.isMemo(e) ? c : u[e.$$typeof] || a;
      }
      (u[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (u[r.Memo] = c);
      var s = Object.defineProperty,
        f = Object.getOwnPropertyNames,
        p = Object.getOwnPropertySymbols,
        l = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        y = Object.prototype;
      e.exports = function e(t, n, r) {
        if ('string' !== typeof n) {
          if (y) {
            var a = d(n);
            a && a !== y && e(t, a, r);
          }
          var c = f(n);
          p && (c = c.concat(p(n)));
          for (var u = i(t), v = i(n), h = 0; h < c.length; ++h) {
            var b = c[h];
            if (!o[b] && (!r || !r[b]) && (!v || !v[b]) && (!u || !u[b])) {
              var m = l(n, b);
              try {
                s(t, b, m);
              } catch (g) {}
            }
          }
        }
        return t;
      };
    },
    '3UD+': function(e, t) {
      e.exports = function(e) {
        if (!e.webpackPolyfill) {
          var t = Object.create(e);
          t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function() {
                return t.l;
              },
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function() {
                return t.i;
              },
            }),
            Object.defineProperty(t, 'exports', { enumerable: !0 }),
            (t.webpackPolyfill = 1);
        }
        return t;
      };
    },
    '6DQo': function(e, t, n) {
      'use strict';
      e.exports = function() {};
    },
    '7zRj': function(e, t, n) {
      (function(t) {
        var r,
          a = 'undefined' !== typeof t ? t : 'undefined' !== typeof window ? window : {},
          o = n(15);
        'undefined' !== typeof document
          ? (r = document)
          : (r = a['__GLOBAL_DOCUMENT_CACHE@4']) || (r = a['__GLOBAL_DOCUMENT_CACHE@4'] = o),
          (e.exports = r);
      }.call(this, n('yLpj')));
    },
    ANjH: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return h;
      }),
        n.d(t, 'b', function() {
          return p;
        }),
        n.d(t, 'c', function() {
          return s;
        }),
        n.d(t, 'd', function() {
          return v;
        }),
        n.d(t, 'e', function() {
          return u;
        });
      var r = n('bCCX'),
        a = function() {
          return Math.random()
            .toString(36)
            .substring(7)
            .split('')
            .join('.');
        },
        o = {
          INIT: '@@redux/INIT' + a(),
          REPLACE: '@@redux/REPLACE' + a(),
          PROBE_UNKNOWN_ACTION: function() {
            return '@@redux/PROBE_UNKNOWN_ACTION' + a();
          },
        };
      function c(e) {
        if ('object' !== typeof e || null === e) return !1;
        for (var t = e; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
        return Object.getPrototypeOf(e) === t;
      }
      function u(e, t, n) {
        var a;
        if (
          ('function' === typeof t && 'function' === typeof n) ||
          ('function' === typeof n && 'function' === typeof arguments[3])
        )
          throw new Error(
            'It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.'
          );
        if (
          ('function' === typeof t && 'undefined' === typeof n && ((n = t), (t = void 0)),
          'undefined' !== typeof n)
        ) {
          if ('function' !== typeof n) throw new Error('Expected the enhancer to be a function.');
          return n(u)(e, t);
        }
        if ('function' !== typeof e) throw new Error('Expected the reducer to be a function.');
        var i = e,
          s = t,
          f = [],
          p = f,
          l = !1;
        function d() {
          p === f && (p = f.slice());
        }
        function y() {
          if (l)
            throw new Error(
              'You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.'
            );
          return s;
        }
        function v(e) {
          if ('function' !== typeof e) throw new Error('Expected the listener to be a function.');
          if (l)
            throw new Error(
              'You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
            );
          var t = !0;
          return (
            d(),
            p.push(e),
            function() {
              if (t) {
                if (l)
                  throw new Error(
                    'You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.'
                  );
                (t = !1), d();
                var n = p.indexOf(e);
                p.splice(n, 1), (f = null);
              }
            }
          );
        }
        function h(e) {
          if (!c(e))
            throw new Error(
              'Actions must be plain objects. Use custom middleware for async actions.'
            );
          if ('undefined' === typeof e.type)
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
          if (l) throw new Error('Reducers may not dispatch actions.');
          try {
            (l = !0), (s = i(s, e));
          } finally {
            l = !1;
          }
          for (var t = (f = p), n = 0; n < t.length; n++) {
            (0, t[n])();
          }
          return e;
        }
        function b(e) {
          if ('function' !== typeof e)
            throw new Error('Expected the nextReducer to be a function.');
          (i = e), h({ type: o.REPLACE });
        }
        function m() {
          var e,
            t = v;
          return (
            ((e = {
              subscribe: function(e) {
                if ('object' !== typeof e || null === e)
                  throw new TypeError('Expected the observer to be an object.');
                function n() {
                  e.next && e.next(y());
                }
                return n(), { unsubscribe: t(n) };
              },
            })[r.a] = function() {
              return this;
            }),
            e
          );
        }
        return (
          h({ type: o.INIT }),
          ((a = { dispatch: h, subscribe: v, getState: y, replaceReducer: b })[r.a] = m),
          a
        );
      }
      function i(e, t) {
        var n = t && t.type;
        return (
          'Given ' +
          ((n && 'action "' + String(n) + '"') || 'an action') +
          ', reducer "' +
          e +
          '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        );
      }
      function s(e) {
        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
          var a = t[r];
          0, 'function' === typeof e[a] && (n[a] = e[a]);
        }
        var c,
          u = Object.keys(n);
        try {
          !(function(e) {
            Object.keys(e).forEach(function(t) {
              var n = e[t];
              if ('undefined' === typeof n(void 0, { type: o.INIT }))
                throw new Error(
                  'Reducer "' +
                    t +
                    '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don\'t want to set a value for this reducer, you can use null instead of undefined.'
                );
              if ('undefined' === typeof n(void 0, { type: o.PROBE_UNKNOWN_ACTION() }))
                throw new Error(
                  'Reducer "' +
                    t +
                    '" returned undefined when probed with a random type. Don\'t try to handle ' +
                    o.INIT +
                    ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                );
            });
          })(n);
        } catch (s) {
          c = s;
        }
        return function(e, t) {
          if ((void 0 === e && (e = {}), c)) throw c;
          for (var r = !1, a = {}, o = 0; o < u.length; o++) {
            var s = u[o],
              f = n[s],
              p = e[s],
              l = f(p, t);
            if ('undefined' === typeof l) {
              var d = i(s, t);
              throw new Error(d);
            }
            (a[s] = l), (r = r || l !== p);
          }
          return (r = r || u.length !== Object.keys(e).length) ? a : e;
        };
      }
      function f(e, t) {
        return function() {
          return t(e.apply(this, arguments));
        };
      }
      function p(e, t) {
        if ('function' === typeof e) return f(e, t);
        if ('object' !== typeof e || null === e)
          throw new Error(
            'bindActionCreators expected an object or a function, instead received ' +
              (null === e ? 'null' : typeof e) +
              '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
          );
        var n = {};
        for (var r in e) {
          var a = e[r];
          'function' === typeof a && (n[r] = f(a, t));
        }
        return n;
      }
      function l(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function d(e, t) {
        var n = Object.keys(e);
        return (
          Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)),
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
          n
        );
      }
      function y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(n, !0).forEach(function(t) {
                l(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(n).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function v() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length
          ? function(e) {
              return e;
            }
          : 1 === t.length
          ? t[0]
          : t.reduce(function(e, t) {
              return function() {
                return e(t.apply(void 0, arguments));
              };
            });
      }
      function h() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e) {
          return function() {
            var n = e.apply(void 0, arguments),
              r = function() {
                throw new Error(
                  'Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.'
                );
              },
              a = {
                getState: n.getState,
                dispatch: function() {
                  return r.apply(void 0, arguments);
                },
              },
              o = t.map(function(e) {
                return e(a);
              });
            return y({}, n, { dispatch: (r = v.apply(void 0, o)(n.dispatch)) });
          };
        };
      }
    },
    OjRq: function(e, t, n) {
      'use strict';
      var r = n('rePB'),
        a = n('o0o1'),
        o = n.n(a),
        c = n('anxO');
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var s = {
          namespace: 'global',
          state: {
            title: 'System Management',
            copyRight: '2020 Vnpay',
            defaultURL: '/dashboard',
            collapsed: !1,
            openKeys: [],
            selectedKeys: [],
            user: { user_name: 'admin', real_name: 'Administrator', role_names: [] },
            menuPaths: {},
            menuMap: {},
            menus: [],
          },
          effects: {
            menuEvent: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = t.pathname), (a = n.put), (c = n.select), '/' !== (u = r))) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (e.next = 6),
                        c(function(e) {
                          return e.global.defaultURL;
                        })
                      );
                    case 6:
                      u = e.sent;
                    case 7:
                      return (
                        (e.next = 9),
                        c(function(e) {
                          return e.global.menuPaths;
                        })
                      );
                    case 9:
                      if (((i = e.sent), (s = i[u]))) {
                        e.next = 13;
                        break;
                      }
                      return e.abrupt('return');
                    case 13:
                      if (!s.parent_path || '' === s.parent_path) {
                        e.next = 16;
                        break;
                      }
                      return (
                        (e.next = 16),
                        a({ type: 'changeOpenKeys', payload: s.parent_path.split('/') })
                      );
                    case 16:
                      return (e.next = 18), a({ type: 'changeSelectedKeys', payload: [s.id] });
                    case 18:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchUser: o.a.mark(function e(t, n) {
              var r, a, u;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = n.call), (a = n.put), (e.next = 3), r(c.c);
                    case 3:
                      return (u = e.sent), (e.next = 6), a({ type: 'saveUser', payload: u });
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchMenuTree: o.a.mark(function e(t, n) {
              var r, a, u, i, s, f, p, l;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (l = function(e) {
                          for (var t = 0; t < e.length; t += 1)
                            (p[e[t].id] = e[t]),
                              '' !== e[t].router && (f[e[t].router] = e[t]),
                              e[t].children && e[t].children.length > 0 && l(e[t].children);
                        }),
                        (r = t.pathname),
                        (a = n.call),
                        (u = n.put),
                        (e.next = 5),
                        a(c.f)
                      );
                    case 5:
                      return (
                        (i = e.sent),
                        (s = i.list || []),
                        (e.next = 9),
                        u({ type: 'saveMenus', payload: s })
                      );
                    case 9:
                      return (
                        (f = {}),
                        (p = {}),
                        l(s),
                        (e.next = 14),
                        [
                          u({ type: 'saveMenuPaths', payload: f }),
                          u({ type: 'saveMenuMap', payload: p }),
                          u({ type: 'menuEvent', pathname: r }),
                        ]
                      );
                    case 14:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          },
          reducers: {
            changeLayoutCollapsed: function(e, t) {
              var n = t.payload;
              return i(i({}, e), {}, { collapsed: n });
            },
            changeOpenKeys: function(e, t) {
              var n = t.payload;
              return i(i({}, e), {}, { openKeys: n });
            },
            changeSelectedKeys: function(e, t) {
              var n = t.payload;
              return i(i({}, e), {}, { selectedKeys: n });
            },
            saveUser: function(e, t) {
              var n = t.payload;
              return i(i({}, e), {}, { user: n });
            },
            saveMenuPaths: function(e, t) {
              var n = t.payload;
              return i(i({}, e), {}, { menuPaths: n });
            },
            saveMenuMap: function(e, t) {
              var n = t.payload;
              return i(i({}, e), {}, { menuMap: n });
            },
            saveMenus: function(e, t) {
              var n = t.payload;
              return i(i({}, e), {}, { menus: n });
            },
          },
          subscriptions: {
            setup: function(e) {
              var t = e.dispatch,
                n = e.history;
              'undefined' !== typeof n &&
                n.listen(function(e) {
                  var n = e.pathname;
                  t({ type: 'menuEvent', pathname: n });
                });
            },
          },
        },
        f = (n('tL+A'), n('QpBz')),
        p = n.n(f),
        l = n('HaE+'),
        d = n('t3Un'),
        y = 'demos';
      function v() {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = Object(l.a)(
          o.a.mark(function e() {
            var t,
              n = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}),
                      e.abrupt('return', Object(d.b)('/v1/'.concat(y), { params: t }))
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function b(e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(d.b)('/v1/'.concat(y, '/').concat(t), { params: n })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function g(e) {
        return O.apply(this, arguments);
      }
      function O() {
        return (O = Object(l.a)(
          o.a.mark(function e(t) {
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(d.b)('/v1/'.concat(y), { method: d.d.POST, data: t })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function w(e, t) {
        return x.apply(this, arguments);
      }
      function x() {
        return (x = Object(l.a)(
          o.a.mark(function e(t, n) {
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(d.b)('/v1/'.concat(y, '/').concat(t), { method: d.d.PUT, data: n })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function j(e) {
        return k.apply(this, arguments);
      }
      function k() {
        return (k = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(d.b)('/v1/'.concat(y, '/').concat(t), {
                          method: d.d.DELETE,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function E(e) {
        return P.apply(this, arguments);
      }
      function P() {
        return (P = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(d.b)('/v1/'.concat(y, '/').concat(t, '/enable'), {
                          method: d.d.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function S(e) {
        return T.apply(this, arguments);
      }
      function T() {
        return (T = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(d.b)('/v1/'.concat(y, '/').concat(t, '/disable'), {
                          method: d.d.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function D(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function _(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? D(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : D(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var C = {
          namespace: 'demo',
          state: {
            search: {},
            pagination: {},
            data: { list: [], pagination: {} },
            submitting: !1,
            formTitle: '',
            formID: '',
            formVisible: !1,
            formData: {},
          },
          effects: {
            fetch: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, p, l;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.search),
                        (a = t.pagination),
                        (c = n.call),
                        (u = n.put),
                        (i = n.select),
                        (s = {}),
                        !r)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (s = _(_({}, s), r)), (e.next = 7), u({ type: 'saveSearch', payload: r })
                      );
                    case 7:
                      e.next = 13;
                      break;
                    case 9:
                      return (
                        (e.next = 11),
                        i(function(e) {
                          return e.demo.search;
                        })
                      );
                    case 11:
                      (f = e.sent) && (s = _(_({}, s), f));
                    case 13:
                      if (!a) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (s = _(_({}, s), a)),
                        (e.next = 17),
                        u({ type: 'savePagination', payload: a })
                      );
                    case 17:
                      e.next = 23;
                      break;
                    case 19:
                      return (
                        (e.next = 21),
                        i(function(e) {
                          return e.demo.pagination;
                        })
                      );
                    case 21:
                      (p = e.sent) && (s = _(_({}, s), p));
                    case 23:
                      return (e.next = 25), c(v, s);
                    case 25:
                      return (l = e.sent), (e.next = 28), u({ type: 'saveData', payload: l });
                    case 28:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            loadForm: o.a.mark(function e(t, n) {
              var r, a;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.put),
                        (e.next = 4),
                        a({ type: 'changeFormVisible', payload: !0 })
                      );
                    case 4:
                      return (
                        (e.next = 6),
                        [
                          a({ type: 'saveFormType', payload: r.type }),
                          a({ type: 'saveFormTitle', payload: 'New Basic Example' }),
                          a({ type: 'saveFormID', payload: '' }),
                          a({ type: 'saveFormData', payload: {} }),
                        ]
                      );
                    case 6:
                      if ('E' !== r.type) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.next = 9),
                        [
                          a({ type: 'saveFormTitle', payload: 'Edit Basic Example' }),
                          a({ type: 'saveFormID', payload: r.id }),
                          a({ type: 'fetchForm', payload: { id: r.id } }),
                        ]
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchForm: o.a.mark(function e(t, n) {
              var r, a, c, u;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(b, r.id);
                    case 4:
                      return (u = e.sent), (e.next = 7), [c({ type: 'saveFormData', payload: u })];
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            submit: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.call),
                        (c = n.put),
                        (u = n.select),
                        (e.next = 4),
                        c({ type: 'changeSubmitting', payload: !0 })
                      );
                    case 4:
                      return (
                        (i = _({}, r)),
                        (e.next = 7),
                        u(function(e) {
                          return e.demo.formType;
                        })
                      );
                    case 7:
                      if (((s = e.sent), (f = !1), 'E' !== s)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.next = 12),
                        u(function(e) {
                          return e.demo.formID;
                        })
                      );
                    case 12:
                      return (l = e.sent), (e.next = 15), a(w, l, i);
                    case 15:
                      'OK' === e.sent.status && (f = !0), (e.next = 23);
                      break;
                    case 19:
                      return (e.next = 21), a(g, i);
                    case 21:
                      (d = e.sent).id && '' !== d.id && (f = !0);
                    case 23:
                      return (e.next = 25), c({ type: 'changeSubmitting', payload: !1 });
                    case 25:
                      if (!f) {
                        e.next = 31;
                        break;
                      }
                      return (
                        p.a.success('\u4fdd\u5b58\u6210\u529f'),
                        (e.next = 29),
                        c({ type: 'changeFormVisible', payload: !1 })
                      );
                    case 29:
                      return (e.next = 31), c({ type: 'fetch' });
                    case 31:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            del: o.a.mark(function e(t, n) {
              var r, a, c;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(j, r.id);
                    case 4:
                      if ('OK' !== e.sent.status) {
                        e.next = 9;
                        break;
                      }
                      return p.a.success('Delete successfully'), (e.next = 9), c({ type: 'fetch' });
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            changeStatus: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d, y;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.payload), (a = n.call), (c = n.put), (u = n.select), 1 !== r.status)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), a(E, r.id);
                    case 5:
                      (i = e.sent), (e.next = 11);
                      break;
                    case 8:
                      return (e.next = 10), a(S, r.id);
                    case 10:
                      i = e.sent;
                    case 11:
                      if ('OK' !== i.status) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (s = 'Enable successfully'),
                        2 === r.status && (s = 'Deactivated successfully'),
                        p.a.success(s),
                        (e.next = 17),
                        u(function(e) {
                          return e.demo.data;
                        })
                      );
                    case 17:
                      for (
                        f = e.sent, l = { list: [], pagination: f.pagination }, d = 0;
                        d < f.list.length;
                        d += 1
                      )
                        (y = f.list[d]).id === r.id && (y.status = r.status), l.list.push(y);
                      return (e.next = 22), c({ type: 'saveData', payload: l });
                    case 22:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          },
          reducers: {
            saveData: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { data: n });
            },
            saveSearch: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { search: n });
            },
            savePagination: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { pagination: n });
            },
            changeFormVisible: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { formVisible: n });
            },
            saveFormTitle: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { formTitle: n });
            },
            saveFormType: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { formType: n });
            },
            saveFormID: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { formID: n });
            },
            saveFormData: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { formData: n });
            },
            changeSubmitting: function(e, t) {
              var n = t.payload;
              return _(_({}, e), {}, { submitting: n });
            },
          },
        },
        A = n('Qyje');
      function F(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? F(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : F(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var R = {
          namespace: 'login',
          state: { status: '', tip: '', submitting: !1, captchaID: '', captcha: '' },
          effects: {
            loadCaptcha: o.a.mark(function e(t, n) {
              var r, a, u, i;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = n.call), (a = n.put), (e.next = 3), r(c.b);
                    case 3:
                      return (
                        (u = e.sent),
                        (i = u.captcha_id),
                        (e.next = 7),
                        a({ type: 'saveCaptchaID', payload: i })
                      );
                    case 7:
                      return (e.next = 9), a({ type: 'saveCaptcha', payload: c.a(i) });
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            reloadCaptcha: o.a.mark(function e(t, n) {
              var r, a, u;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = n.put),
                        (a = n.select),
                        (e.next = 3),
                        a(function(e) {
                          return e.login.captchaID;
                        })
                      );
                    case 3:
                      return (
                        (u = e.sent),
                        (e.next = 6),
                        r({
                          type: 'saveCaptcha',
                          payload: ''.concat(c.a(u), '&reload=').concat(Math.random()),
                        })
                      );
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            submit: o.a.mark(function e(t, n) {
              var r, a, u, i, s, f, p, l;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.call),
                        (u = n.put),
                        (e.next = 4),
                        u({ type: 'changeSubmitting', payload: !0 })
                      );
                    case 4:
                      return (e.next = 6), a(c.d, r);
                    case 6:
                      if (!(i = e.sent).data || !i.data.error) {
                        e.next = 12;
                        break;
                      }
                      return (
                        (s = i.data.error.message),
                        (f = i.status),
                        (e.next = 11),
                        [
                          u({ type: 'saveTip', payload: s }),
                          u({ type: 'saveStatus', payload: f >= 500 ? 'ERROR' : 'FAIL' }),
                          u({ type: 'changeSubmitting', payload: !1 }),
                          u({ type: 'loadCaptcha' }),
                        ]
                      );
                    case 11:
                      return e.abrupt('return');
                    case 12:
                      return (
                        Object(d.e)(i),
                        (e.next = 15),
                        [
                          u({ type: 'saveTip', payload: '' }),
                          u({ type: 'saveStatus', payload: '' }),
                          u({ type: 'changeSubmitting', payload: !1 }),
                        ]
                      );
                    case 15:
                      if (
                        ((p = Object(A.parse)(window.location.href.split('?')[1])),
                        !(l = p.redirect))
                      ) {
                        e.next = 20;
                        break;
                      }
                      return (window.location.href = l), e.abrupt('return');
                    case 20:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            logout: o.a.mark(function e(t, n) {
              var r;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = n.call), (e.next = 3), r(c.e);
                    case 3:
                      'OK' === e.sent.status && Object(d.c)();
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          },
          reducers: {
            saveCaptchaID: function(e, t) {
              var n = t.payload;
              return N(N({}, e), {}, { captchaID: n });
            },
            saveCaptcha: function(e, t) {
              var n = t.payload;
              return N(N({}, e), {}, { captcha: n });
            },
            saveStatus: function(e, t) {
              var n = t.payload;
              return N(N({}, e), {}, { status: n });
            },
            saveTip: function(e, t) {
              var n = t.payload;
              return N(N({}, e), {}, { tip: n });
            },
            changeSubmitting: function(e, t) {
              var n = t.payload;
              return N(N({}, e), {}, { submitting: n });
            },
          },
        },
        I = n('SEfv');
      function M(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function L(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? M(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : M(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var U = {
          namespace: 'menu',
          state: {
            search: {},
            pagination: {},
            data: { list: [], pagination: {} },
            submitting: !1,
            formType: '',
            formTitle: '',
            formID: '',
            formVisible: !1,
            formData: {},
            treeData: [],
            expandedKeys: [],
          },
          effects: {
            fetch: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, p, l;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.search),
                        (a = t.pagination),
                        (c = n.call),
                        (u = n.put),
                        (i = n.select),
                        (s = { parentID: '' }),
                        !r)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (s = L(L({}, s), r)), (e.next = 7), u({ type: 'saveSearch', payload: r })
                      );
                    case 7:
                      e.next = 13;
                      break;
                    case 9:
                      return (
                        (e.next = 11),
                        i(function(e) {
                          return e.menu.search;
                        })
                      );
                    case 11:
                      (f = e.sent) && (s = L(L({}, s), f));
                    case 13:
                      if (!a) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (s = L(L({}, s), a)),
                        (e.next = 17),
                        u({ type: 'savePagination', payload: a })
                      );
                    case 17:
                      e.next = 23;
                      break;
                    case 19:
                      return (
                        (e.next = 21),
                        i(function(e) {
                          return e.menu.pagination;
                        })
                      );
                    case 21:
                      (p = e.sent) && (s = L(L({}, s), p));
                    case 23:
                      return (e.next = 25), c(I.f, s);
                    case 25:
                      return (l = e.sent), (e.next = 28), u({ type: 'saveData', payload: l });
                    case 28:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            loadForm: o.a.mark(function e(t, n) {
              var r, a, c, u;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.put),
                        (c = n.select),
                        (e.next = 4),
                        a({ type: 'changeFormVisible', payload: !0 })
                      );
                    case 4:
                      return (
                        (e.next = 6),
                        [
                          a({ type: 'saveFormType', payload: r.type }),
                          a({ type: 'saveFormTitle', payload: 'New menu' }),
                          a({ type: 'saveFormID', payload: '' }),
                          a({ type: 'saveFormData', payload: {} }),
                          a({ type: 'fetchTree' }),
                        ]
                      );
                    case 6:
                      if ('E' !== r.type) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 9),
                        [
                          a({ type: 'saveFormTitle', payload: 'Edit menu' }),
                          a({ type: 'saveFormID', payload: r.id }),
                          a({ type: 'fetchForm', payload: { id: r.id } }),
                        ]
                      );
                    case 9:
                      e.next = 16;
                      break;
                    case 11:
                      return (
                        (e.next = 13),
                        c(function(e) {
                          return e.menu.search;
                        })
                      );
                    case 13:
                      return (
                        (u = e.sent),
                        (e.next = 16),
                        a({
                          type: 'saveFormData',
                          payload: { parent_id: u.parentID ? u.parentID : '' },
                        })
                      );
                    case 16:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchForm: o.a.mark(function e(t, n) {
              var r, a, c, u;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(I.e, r.id);
                    case 4:
                      return (u = e.sent), (e.next = 7), c({ type: 'saveFormData', payload: u });
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            submit: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.call),
                        (c = n.put),
                        (u = n.select),
                        (e.next = 4),
                        c({ type: 'changeSubmitting', payload: !0 })
                      );
                    case 4:
                      return (
                        (i = L({}, r)),
                        (e.next = 7),
                        u(function(e) {
                          return e.menu.formType;
                        })
                      );
                    case 7:
                      if (((s = e.sent), (f = !1), 'E' !== s)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.next = 12),
                        u(function(e) {
                          return e.menu.formID;
                        })
                      );
                    case 12:
                      return (l = e.sent), (e.next = 15), a(I.h, l, i);
                    case 15:
                      'OK' === e.sent.status && (f = !0), (e.next = 23);
                      break;
                    case 19:
                      return (e.next = 21), a(I.a, i);
                    case 21:
                      (d = e.sent).id && '' !== d.id && (f = !0);
                    case 23:
                      return (e.next = 25), c({ type: 'changeSubmitting', payload: !1 });
                    case 25:
                      if (!f) {
                        e.next = 33;
                        break;
                      }
                      return (
                        p.a.success('Saved successfully'),
                        (e.next = 29),
                        c({ type: 'changeFormVisible', payload: !1 })
                      );
                    case 29:
                      return (e.next = 31), c({ type: 'fetchTree' });
                    case 31:
                      return (e.next = 33), c({ type: 'fetch' });
                    case 33:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            del: o.a.mark(function e(t, n) {
              var r, a, c;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(I.b, r.id);
                    case 4:
                      if ('OK' !== e.sent.status) {
                        e.next = 11;
                        break;
                      }
                      return (
                        p.a.success('successfully deleted'), (e.next = 9), c({ type: 'fetchTree' })
                      );
                    case 9:
                      return (e.next = 11), c({ type: 'fetch' });
                    case 11:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchTree: o.a.mark(function e(t, n) {
              var r, a, c, u, i;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.call),
                        (c = n.put),
                        (u = {}),
                        r && (u = L(L({}, u), r)),
                        (e.next = 6),
                        a(I.g, u)
                      );
                    case 6:
                      return (
                        (i = e.sent),
                        (e.next = 9),
                        c({ type: 'saveTreeData', payload: i.list || [] })
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            changeStatus: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d, y;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.payload), (a = n.call), (c = n.put), (u = n.select), 1 !== r.status)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), a(I.d, r.id);
                    case 5:
                      (i = e.sent), (e.next = 11);
                      break;
                    case 8:
                      return (e.next = 10), a(I.c, r.id);
                    case 10:
                      i = e.sent;
                    case 11:
                      if ('OK' !== i.status) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (s = 'Successfully activated'),
                        2 === r.status && (s = 'Deactivated successfully'),
                        p.a.success(s),
                        (e.next = 17),
                        u(function(e) {
                          return e.menu.data;
                        })
                      );
                    case 17:
                      for (
                        f = e.sent, l = { list: [], pagination: f.pagination }, d = 0;
                        d < f.list.length;
                        d += 1
                      )
                        (y = f.list[d]).id === r.id && (y.status = r.status), l.list.push(y);
                      return (e.next = 22), c({ type: 'saveData', payload: l });
                    case 22:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          },
          reducers: {
            saveData: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { data: n });
            },
            saveSearch: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { search: n });
            },
            savePagination: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { pagination: n });
            },
            changeFormVisible: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { formVisible: n });
            },
            saveFormType: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { formType: n });
            },
            saveFormTitle: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { formTitle: n });
            },
            saveFormID: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { formID: n });
            },
            saveFormData: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { formData: n });
            },
            changeSubmitting: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { submitting: n });
            },
            saveTreeData: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { treeData: n });
            },
            saveExpandedKeys: function(e, t) {
              var n = t.payload;
              return L(L({}, e), {}, { expandedKeys: n });
            },
          },
        },
        q = n('KQm4'),
        K = n('03io');
      function H(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function V(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? H(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : H(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var B = {
          namespace: 'role',
          state: {
            search: {},
            pagination: {},
            data: { list: [], pagination: {} },
            submitting: !1,
            formTitle: '',
            formID: '',
            formVisible: !1,
            formData: {},
            selectData: [],
          },
          effects: {
            fetch: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, p, l;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.search),
                        (a = t.pagination),
                        (c = n.call),
                        (u = n.put),
                        (i = n.select),
                        (s = {}),
                        !r)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (s = V(V({}, s), r)), (e.next = 7), u({ type: 'saveSearch', payload: r })
                      );
                    case 7:
                      e.next = 13;
                      break;
                    case 9:
                      return (
                        (e.next = 11),
                        i(function(e) {
                          return e.role.search;
                        })
                      );
                    case 11:
                      (f = e.sent) && (s = V(V({}, s), f));
                    case 13:
                      if (!a) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (s = V(V({}, s), a)),
                        (e.next = 17),
                        u({ type: 'savePagination', payload: a })
                      );
                    case 17:
                      e.next = 23;
                      break;
                    case 19:
                      return (
                        (e.next = 21),
                        i(function(e) {
                          return e.role.pagination;
                        })
                      );
                    case 21:
                      (p = e.sent) && (s = V(V({}, s), p));
                    case 23:
                      return (e.next = 25), c(K.f, s);
                    case 25:
                      return (l = e.sent), (e.next = 28), u({ type: 'saveData', payload: l });
                    case 28:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            loadForm: o.a.mark(function e(t, n) {
              var r, a;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.put),
                        (e.next = 4),
                        a({ type: 'changeFormVisible', payload: !0 })
                      );
                    case 4:
                      return (
                        (e.next = 6),
                        [
                          a({ type: 'saveFormType', payload: r.type }),
                          a({ type: 'saveFormTitle', payload: 'New role' }),
                          a({ type: 'saveFormID', payload: '' }),
                          a({ type: 'saveFormData', payload: {} }),
                        ]
                      );
                    case 6:
                      if ('E' !== r.type) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.next = 9),
                        [
                          a({ type: 'saveFormTitle', payload: 'Edit role' }),
                          a({ type: 'saveFormID', payload: r.id }),
                          a({ type: 'fetchForm', payload: { id: r.id } }),
                        ]
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchForm: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(K.e, r.id);
                    case 4:
                      return (
                        (u = e.sent),
                        (i = u.role_menus) &&
                          ((s = {}),
                          (f = []),
                          i.forEach(function(e) {
                            s[e.menu_id]
                              ? (s[e.menu_id] = [].concat(Object(q.a)(s[e.menu_id]), [e.action_id]))
                              : (s[e.menu_id] = [e.action_id]);
                          }),
                          Object.keys(s).forEach(function(e) {
                            f.push({ menu_id: e, actions: s[e] });
                          }),
                          (u.role_menus = f)),
                        (e.next = 9),
                        [c({ type: 'saveFormData', payload: u })]
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            submit: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.call),
                        (c = n.put),
                        (u = n.select),
                        (e.next = 4),
                        c({ type: 'changeSubmitting', payload: !0 })
                      );
                    case 4:
                      return (
                        (i = V({}, r)),
                        (e.next = 7),
                        u(function(e) {
                          return e.role.formType;
                        })
                      );
                    case 7:
                      if (((s = e.sent), (f = !1), 'E' !== s)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.next = 12),
                        u(function(e) {
                          return e.role.formID;
                        })
                      );
                    case 12:
                      return (l = e.sent), (e.next = 15), a(K.h, l, i);
                    case 15:
                      'OK' === e.sent.status && (f = !0), (e.next = 23);
                      break;
                    case 19:
                      return (e.next = 21), a(K.a, i);
                    case 21:
                      (d = e.sent).id && '' !== d.id && (f = !0);
                    case 23:
                      return (e.next = 25), c({ type: 'changeSubmitting', payload: !1 });
                    case 25:
                      if (!f) {
                        e.next = 31;
                        break;
                      }
                      return (
                        p.a.success('Saved successfully'),
                        (e.next = 29),
                        c({ type: 'changeFormVisible', payload: !1 })
                      );
                    case 29:
                      return (e.next = 31), c({ type: 'fetch' });
                    case 31:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            del: o.a.mark(function e(t, n) {
              var r, a, c;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(K.b, r.id);
                    case 4:
                      if ('OK' !== e.sent.status) {
                        e.next = 9;
                        break;
                      }
                      return (
                        p.a.success('successfully deleted'), (e.next = 9), c({ type: 'fetch' })
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchSelect: o.a.mark(function e(t, n) {
              var r, a, c;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = n.call), (a = n.put), (e.next = 3), r(K.g);
                    case 3:
                      return (
                        (c = e.sent),
                        (e.next = 6),
                        a({ type: 'saveSelectData', payload: c.list || [] })
                      );
                    case 6:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            changeStatus: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d, y;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.payload), (a = n.call), (c = n.put), (u = n.select), 1 !== r.status)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), a(K.d, r.id);
                    case 5:
                      (i = e.sent), (e.next = 11);
                      break;
                    case 8:
                      return (e.next = 10), a(K.c, r.id);
                    case 10:
                      i = e.sent;
                    case 11:
                      if ('OK' !== i.status) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (s = 'Successfully activated'),
                        2 === r.status && (s = 'Deactivated successfully'),
                        p.a.success(s),
                        (e.next = 17),
                        u(function(e) {
                          return e.role.data;
                        })
                      );
                    case 17:
                      for (
                        f = e.sent, l = { list: [], pagination: f.pagination }, d = 0;
                        d < f.list.length;
                        d += 1
                      )
                        (y = f.list[d]).id === r.id && (y.status = r.status), l.list.push(y);
                      return (e.next = 22), c({ type: 'saveData', payload: l });
                    case 22:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          },
          reducers: {
            saveData: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { data: n });
            },
            saveSearch: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { search: n });
            },
            savePagination: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { pagination: n });
            },
            changeFormVisible: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { formVisible: n });
            },
            saveFormTitle: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { formTitle: n });
            },
            saveFormType: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { formType: n });
            },
            saveFormID: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { formID: n });
            },
            saveFormData: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { formData: n });
            },
            changeSubmitting: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { submitting: n });
            },
            saveSelectData: function(e, t) {
              var n = t.payload;
              return V(V({}, e), {}, { selectData: n });
            },
          },
        },
        W = 'users';
      function Q(e) {
        return G.apply(this, arguments);
      }
      function G() {
        return (G = Object(l.a)(
          o.a.mark(function e(t) {
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt('return', Object(d.b)('/v1/'.concat(W), { params: t }));
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function X(e) {
        return z.apply(this, arguments);
      }
      function z() {
        return (z = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(d.b)('/v1/'.concat(W, '/').concat(t), { params: n })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function $(e) {
        return J.apply(this, arguments);
      }
      function J() {
        return (J = Object(l.a)(
          o.a.mark(function e(t) {
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(d.b)('/v1/'.concat(W), { method: d.d.POST, data: t })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Y(e, t) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = Object(l.a)(
          o.a.mark(function e(t, n) {
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(d.b)('/v1/'.concat(W, '/').concat(t), { method: d.d.PUT, data: n })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ee(e) {
        return te.apply(this, arguments);
      }
      function te() {
        return (te = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(d.b)('/v1/'.concat(W, '/').concat(t), {
                          method: d.d.DELETE,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ne(e) {
        return re.apply(this, arguments);
      }
      function re() {
        return (re = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(d.b)('/v1/'.concat(W, '/').concat(t, '/enable'), {
                          method: d.d.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ae(e) {
        return oe.apply(this, arguments);
      }
      function oe() {
        return (oe = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(d.b)('/v1/'.concat(W, '/').concat(t, '/disable'), {
                          method: d.d.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function ce(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ue(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ce(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ce(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var ie,
        se,
        fe = {
          namespace: 'user',
          state: {
            search: {},
            data: { list: [], pagination: {} },
            submitting: !1,
            formTitle: '',
            formID: '',
            formVisible: !1,
            formData: {},
          },
          effects: {
            fetch: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, p, l;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.search),
                        (a = t.pagination),
                        (c = n.call),
                        (u = n.put),
                        (i = n.select),
                        (s = {}),
                        !r)
                      ) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (s = ue(ue({}, s), r)), (e.next = 7), u({ type: 'saveSearch', payload: r })
                      );
                    case 7:
                      e.next = 13;
                      break;
                    case 9:
                      return (
                        (e.next = 11),
                        i(function(e) {
                          return e.user.search;
                        })
                      );
                    case 11:
                      (f = e.sent) && (s = ue(ue({}, s), f));
                    case 13:
                      if (!a) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (s = ue(ue({}, s), a)),
                        (e.next = 17),
                        u({ type: 'savePagination', payload: a })
                      );
                    case 17:
                      e.next = 23;
                      break;
                    case 19:
                      return (
                        (e.next = 21),
                        i(function(e) {
                          return e.user.pagination;
                        })
                      );
                    case 21:
                      (p = e.sent) && (s = ue(ue({}, s), p));
                    case 23:
                      return (e.next = 25), c(Q, s);
                    case 25:
                      return (l = e.sent), (e.next = 28), u({ type: 'saveData', payload: l });
                    case 28:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            loadForm: o.a.mark(function e(t, n) {
              var r, a;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.put),
                        (e.next = 4),
                        a({ type: 'changeFormVisible', payload: !0 })
                      );
                    case 4:
                      return (
                        (e.next = 6),
                        [
                          a({ type: 'saveFormType', payload: r.type }),
                          a({ type: 'saveFormTitle', payload: 'New User' }),
                          a({ type: 'saveFormID', payload: '' }),
                          a({ type: 'saveFormData', payload: {} }),
                        ]
                      );
                    case 6:
                      if ('E' !== r.type) {
                        e.next = 9;
                        break;
                      }
                      return (
                        (e.next = 9),
                        [
                          a({ type: 'saveFormTitle', payload: 'Edit user' }),
                          a({ type: 'saveFormID', payload: r.id }),
                          a({ type: 'fetchForm', payload: { id: r.id } }),
                        ]
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchForm: o.a.mark(function e(t, n) {
              var r, a, c, u;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(X, r.id);
                    case 4:
                      return (u = e.sent), (e.next = 7), c({ type: 'saveFormData', payload: u });
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            submit: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.call),
                        (c = n.put),
                        (u = n.select),
                        (e.next = 4),
                        c({ type: 'changeSubmitting', payload: !0 })
                      );
                    case 4:
                      return (
                        (i = ue({}, r)),
                        (e.next = 7),
                        u(function(e) {
                          return e.user.formType;
                        })
                      );
                    case 7:
                      if (((s = e.sent), (f = !1), 'E' !== s)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.next = 12),
                        u(function(e) {
                          return e.user.formID;
                        })
                      );
                    case 12:
                      return (l = e.sent), (e.next = 15), a(Y, l, i);
                    case 15:
                      'OK' === e.sent.status && (f = !0), (e.next = 23);
                      break;
                    case 19:
                      return (e.next = 21), a($, i);
                    case 21:
                      (d = e.sent).id && '' !== d.id && (f = !0);
                    case 23:
                      return (e.next = 25), c({ type: 'changeSubmitting', payload: !1 });
                    case 25:
                      if (!f) {
                        e.next = 31;
                        break;
                      }
                      return (
                        p.a.success('Saved successfully'),
                        (e.next = 29),
                        c({ type: 'changeFormVisible', payload: !1 })
                      );
                    case 29:
                      return (e.next = 31), c({ type: 'fetch' });
                    case 31:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            del: o.a.mark(function e(t, n) {
              var r, a, c;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(ee, r.id);
                    case 4:
                      if ('OK' !== e.sent.status) {
                        e.next = 9;
                        break;
                      }
                      return (
                        p.a.success('successfully deleted'), (e.next = 9), c({ type: 'fetch' })
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            changeStatus: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d, y;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.payload), (a = n.call), (c = n.put), (u = n.select), 1 !== r.status)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), a(ne, r.id);
                    case 5:
                      (i = e.sent), (e.next = 11);
                      break;
                    case 8:
                      return (e.next = 10), a(ae, r.id);
                    case 10:
                      i = e.sent;
                    case 11:
                      if ('OK' !== i.status) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (s = 'Successfully activated'),
                        2 === r.status && (s = 'Deactivated successfully'),
                        p.a.success(s),
                        (e.next = 17),
                        u(function(e) {
                          return e.user.data;
                        })
                      );
                    case 17:
                      for (
                        f = e.sent, l = { list: [], pagination: f.pagination }, d = 0;
                        d < f.list.length;
                        d += 1
                      )
                        (y = f.list[d]).id === r.id && (y.status = r.status), l.list.push(y);
                      return (e.next = 22), c({ type: 'saveData', payload: l });
                    case 22:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          },
          reducers: {
            saveData: function(e, t) {
              var n = t.payload;
              return ue(ue({}, e), {}, { data: n });
            },
            saveSearch: function(e, t) {
              var n = t.payload;
              return ue(ue({}, e), {}, { search: n });
            },
            changeFormVisible: function(e, t) {
              var n = t.payload;
              return ue(ue({}, e), {}, { formVisible: n });
            },
            saveFormTitle: function(e, t) {
              var n = t.payload;
              return ue(ue({}, e), {}, { formTitle: n });
            },
            saveFormType: function(e, t) {
              var n = t.payload;
              return ue(ue({}, e), {}, { formType: n });
            },
            saveFormID: function(e, t) {
              var n = t.payload;
              return ue(ue({}, e), {}, { formID: n });
            },
            saveFormData: function(e, t) {
              var n = t.payload;
              return ue(ue({}, e), {}, { formData: n });
            },
            changeSubmitting: function(e, t) {
              var n = t.payload;
              return ue(ue({}, e), {}, { submitting: n });
            },
          },
        },
        pe = (n('pjuD'), n('rR1Q')),
        le = n.n(pe),
        de = n('vDqi'),
        ye = n.n(de),
        ve = n('wd/R'),
        he = n.n(ve),
        be = (n('YFqc'), n('oyVS'));
      function me(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? me(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : me(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Oe = '/cms',
        we = 'application/x-www-form-urlencoded',
        xe = 'application/json',
        je = 'Content-Type',
        ke = 'Authorization',
        Ee = {
          GET: 'GET',
          POST: 'POST',
          PUT: 'PUT',
          DELETE: 'DELETE',
          PATCH: 'PATCH',
          HEAD: 'HEAD',
          OPTIONS: 'OPTIONS',
        };
      function Pe() {
        ie && clearTimeout(ie), be.a.remove(be.b.AccessToken);
        var e = Object(A.parse)(window.location.href.split('?')[1]).redirect;
        '/login' === window.location.pathname || e || (window.location = '/login');
      }
      function Se(e) {
        var t = ge({}, e),
          n = be.a.get(be.b.AccessToken);
        return n && (t.headers[ke] = ''.concat(n.token_type, ' ').concat(n.access_token)), t;
      }
      function Te(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        console.log('AccessToken: ', be.b.AccessToken);
        var n = be.a.get(be.b.AccessToken);
        if (n && n.expires_at - se <= 0)
          return ie && clearTimeout(ie), Pe(), Promise.reject(new Error('The token has expired'));
        se = he()().unix();
        var r = ge({}, t),
          a = !0;
        r.hideNotify && ((a = !1), delete r.hideNotify);
        var o = ge(
          {
            method: Ee.GET,
            baseURL: Oe,
            headers: {},
            transformRequest: function(e, t) {
              switch (t[je]) {
                case xe:
                  return JSON.stringify(e);
                case we:
                  return Object(A.stringify)(e);
                default:
                  return e;
              }
            },
            paramsSerializer: function(e) {
              return Object(A.stringify)(e);
            },
            timeout: 6e4,
          },
          r
        );
        (o.headers && o.headers[je]) ||
          !([Ee.POST, Ee.PUT, Ee.PATCH].indexOf(o.method) > -1) ||
          (o.headers[je] = xe);
        var c = ye.a.create(o);
        return (
          c.interceptors.request.use(Se),
          c
            .request({ url: e })
            .then(function(e) {
              var t = e.data;
              return console.log('Data', t), t;
            })
            .catch(function(t) {
              var n = t.response,
                r = n.status,
                c = n.data;
              if (401 === r && c.error && 9999 === c.error.code) return Pe(), n;
              if (a) {
                var u = 'Request error';
                504 === r ? (u = 'Not connected to server') : c && c.error && (u = c.error.message),
                  le.a.error({ message: ''.concat(o.baseURL).concat(e), description: u });
              }
              return n;
            })
        );
      }
      var De = 'restaurants';
      function _e() {
        return Ce.apply(this, arguments);
      }
      function Ce() {
        return (Ce = Object(l.a)(
          o.a.mark(function e() {
            var t,
              n = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}),
                      e.abrupt('return', Te('/'.concat(De), { params: t }))
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ae() {
        return Fe.apply(this, arguments);
      }
      function Fe() {
        return (Fe = Object(l.a)(
          o.a.mark(function e() {
            var t,
              n = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}),
                      e.abrupt('return', Te('/'.concat(De, '.tree'), { params: t }))
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ne(e) {
        return Re.apply(this, arguments);
      }
      function Re() {
        return (Re = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt('return', Te('/'.concat(De, '/').concat(t), { params: n }))
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Ie(e) {
        return Me.apply(this, arguments);
      }
      function Me() {
        return (Me = Object(l.a)(
          o.a.mark(function e(t) {
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt('return', Te('/'.concat(De), { method: Ee.POST, data: t }));
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Le(e, t) {
        return Ue.apply(this, arguments);
      }
      function Ue() {
        return (Ue = Object(l.a)(
          o.a.mark(function e(t, n) {
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Te('/'.concat(De, '/').concat(t), { method: Ee.PUT, data: n })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function qe(e) {
        return Ke.apply(this, arguments);
      }
      function Ke() {
        return (Ke = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Te('/'.concat(De, '/').concat(t), { method: Ee.DELETE, params: n })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function He(e) {
        return Ve.apply(this, arguments);
      }
      function Ve() {
        return (Ve = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Te('/'.concat(De, '/').concat(t, '/enable'), {
                          method: Ee.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Be(e) {
        return We.apply(this, arguments);
      }
      function We() {
        return (We = Object(l.a)(
          o.a.mark(function e(t) {
            var n,
              r = arguments;
            return o.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Te('/'.concat(De, '/').concat(t, '/disable'), {
                          method: Ee.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function Qe(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Ge(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Qe(Object(n), !0).forEach(function(t) {
                Object(r.a)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Qe(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var Xe = [
        s,
        fe,
        C,
        R,
        U,
        B,
        {
          namespace: 'restaurant',
          state: {
            search: {},
            pagination: {},
            data: { list: [], pagination: {} },
            submitting: !1,
            formType: '',
            formTitle: '',
            formID: '',
            formVisible: !1,
            formData: {},
            treeData: [],
            expandedKeys: [],
          },
          effects: {
            fetch: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, p, l, d;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.search),
                        (a = t.pagination),
                        (c = n.call),
                        (u = n.put),
                        (i = n.select),
                        console.log('restarant.model.fetch: is triggered'),
                        (s = {}),
                        !r)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (s = Ge(Ge({}, s), r)), (e.next = 8), u({ type: 'saveSearch', payload: r })
                      );
                    case 8:
                      e.next = 14;
                      break;
                    case 10:
                      return (
                        (e.next = 12),
                        i(function(e) {
                          return e.menu.search;
                        })
                      );
                    case 12:
                      (f = e.sent) && (s = Ge(Ge({}, s), f));
                    case 14:
                      if (!a) {
                        e.next = 20;
                        break;
                      }
                      return (
                        (s = Ge(Ge({}, s), a)),
                        (e.next = 18),
                        u({ type: 'savePagination', payload: a })
                      );
                    case 18:
                      e.next = 24;
                      break;
                    case 20:
                      return (
                        (e.next = 22),
                        i(function(e) {
                          return e.menu.pagination;
                        })
                      );
                    case 22:
                      (p = e.sent) && (s = Ge(Ge({}, s), p));
                    case 24:
                      return (e.next = 26), c(_e, s);
                    case 26:
                      return (
                        (l = e.sent),
                        console.log('model.fetch: return value, ', l),
                        (d = { list: l, pagination: 0 }),
                        (e.next = 31),
                        u({ type: 'saveData', payload: d })
                      );
                    case 31:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            loadForm: o.a.mark(function e(t, n) {
              var r, a, c, u;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.put),
                        (c = n.select),
                        (e.next = 4),
                        a({ type: 'changeFormVisible', payload: !0 })
                      );
                    case 4:
                      return (
                        (e.next = 6),
                        [
                          a({ type: 'saveFormType', payload: r.type }),
                          a({ type: 'saveFormTitle', payload: 'New menu' }),
                          a({ type: 'saveFormID', payload: '' }),
                          a({ type: 'saveFormData', payload: {} }),
                          a({ type: 'fetchTree' }),
                        ]
                      );
                    case 6:
                      if ('E' !== r.type) {
                        e.next = 11;
                        break;
                      }
                      return (
                        (e.next = 9),
                        [
                          a({ type: 'saveFormTitle', payload: 'Edit menu' }),
                          a({ type: 'saveFormID', payload: r.id }),
                          a({ type: 'fetchForm', payload: { id: r.id } }),
                        ]
                      );
                    case 9:
                      e.next = 16;
                      break;
                    case 11:
                      return (
                        (e.next = 13),
                        c(function(e) {
                          return e.menu.search;
                        })
                      );
                    case 13:
                      return (
                        (u = e.sent),
                        (e.next = 16),
                        a({
                          type: 'saveFormData',
                          payload: { parent_id: u.parentID ? u.parentID : '' },
                        })
                      );
                    case 16:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchForm: o.a.mark(function e(t, n) {
              var r, a, c, u;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(Ne, r.id);
                    case 4:
                      return (u = e.sent), (e.next = 7), c({ type: 'saveFormData', payload: u });
                    case 7:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            submit: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.call),
                        (c = n.put),
                        (u = n.select),
                        (e.next = 4),
                        c({ type: 'changeSubmitting', payload: !0 })
                      );
                    case 4:
                      return (
                        (i = Ge({}, r)),
                        (e.next = 7),
                        u(function(e) {
                          return e.menu.formType;
                        })
                      );
                    case 7:
                      if (((s = e.sent), (f = !1), 'E' !== s)) {
                        e.next = 19;
                        break;
                      }
                      return (
                        (e.next = 12),
                        u(function(e) {
                          return e.menu.formID;
                        })
                      );
                    case 12:
                      return (l = e.sent), (e.next = 15), a(Le, l, i);
                    case 15:
                      'OK' === e.sent.status && (f = !0), (e.next = 23);
                      break;
                    case 19:
                      return (e.next = 21), a(Ie, i);
                    case 21:
                      (d = e.sent).id && '' !== d.id && (f = !0);
                    case 23:
                      return (e.next = 25), c({ type: 'changeSubmitting', payload: !1 });
                    case 25:
                      if (!f) {
                        e.next = 33;
                        break;
                      }
                      return (
                        p.a.success('Saved successfully'),
                        (e.next = 29),
                        c({ type: 'changeFormVisible', payload: !1 })
                      );
                    case 29:
                      return (e.next = 31), c({ type: 'fetchTree' });
                    case 31:
                      return (e.next = 33), c({ type: 'fetch' });
                    case 33:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            del: o.a.mark(function e(t, n) {
              var r, a, c;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = t.payload), (a = n.call), (c = n.put), (e.next = 4), a(qe, r.id);
                    case 4:
                      if ('OK' !== e.sent.status) {
                        e.next = 11;
                        break;
                      }
                      return (
                        p.a.success('successfully deleted'), (e.next = 9), c({ type: 'fetchTree' })
                      );
                    case 9:
                      return (e.next = 11), c({ type: 'fetch' });
                    case 11:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            fetchTree: o.a.mark(function e(t, n) {
              var r, a, c, u, i;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = t.payload),
                        (a = n.call),
                        (c = n.put),
                        (u = {}),
                        r && (u = Ge(Ge({}, u), r)),
                        (e.next = 6),
                        a(Ae, u)
                      );
                    case 6:
                      return (
                        (i = e.sent),
                        (e.next = 9),
                        c({ type: 'saveTreeData', payload: i.list || [] })
                      );
                    case 9:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
            changeStatus: o.a.mark(function e(t, n) {
              var r, a, c, u, i, s, f, l, d, y;
              return o.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        ((r = t.payload), (a = n.call), (c = n.put), (u = n.select), 1 !== r.status)
                      ) {
                        e.next = 8;
                        break;
                      }
                      return (e.next = 5), a(He, r.id);
                    case 5:
                      (i = e.sent), (e.next = 11);
                      break;
                    case 8:
                      return (e.next = 10), a(Be, r.id);
                    case 10:
                      i = e.sent;
                    case 11:
                      if ('OK' !== i.status) {
                        e.next = 22;
                        break;
                      }
                      return (
                        (s = 'Successfully activated'),
                        2 === r.status && (s = 'Deactivated successfully'),
                        p.a.success(s),
                        (e.next = 17),
                        u(function(e) {
                          return e.menu.data;
                        })
                      );
                    case 17:
                      for (
                        f = e.sent, l = { list: [], pagination: f.pagination }, d = 0;
                        d < f.list.length;
                        d += 1
                      )
                        (y = f.list[d]).id === r.id && (y.status = r.status), l.list.push(y);
                      return (e.next = 22), c({ type: 'saveData', payload: l });
                    case 22:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          },
          reducers: {
            saveData: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { data: n });
            },
            saveSearch: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { search: n });
            },
            savePagination: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { pagination: n });
            },
            changeFormVisible: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { formVisible: n });
            },
            saveFormType: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { formType: n });
            },
            saveFormTitle: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { formTitle: n });
            },
            saveFormID: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { formID: n });
            },
            saveFormData: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { formData: n });
            },
            changeSubmitting: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { submitting: n });
            },
            saveTreeData: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { treeData: n });
            },
            saveExpandedKeys: function(e, t) {
              var n = t.payload;
              return Ge(Ge({}, e), {}, { expandedKeys: n });
            },
          },
        },
      ];
      t.a = Xe;
    },
    QLaP: function(e, t, n) {
      'use strict';
      e.exports = function(e, t, n, r, a, o, c, u) {
        if (!e) {
          var i;
          if (void 0 === t)
            i = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.'
            );
          else {
            var s = [n, r, a, o, c, u],
              f = 0;
            (i = new Error(
              t.replace(/%s/g, function() {
                return s[f++];
              })
            )).name = 'Invariant Violation';
          }
          throw ((i.framesToPop = 1), i);
        }
      };
    },
    QTEQ: function(e, t) {
      e.exports = function(e, t) {
        return (t = 'number' == typeof t ? t : 1 / 0)
          ? (function e(n, r) {
              return n.reduce(function(n, a) {
                return Array.isArray(a) && r < t ? n.concat(e(a, r + 1)) : n.concat(a);
              }, []);
            })(e, 1)
          : Array.isArray(e)
          ? e.map(function(e) {
              return e;
            })
          : e;
      };
    },
    SEfv: function(e, t, n) {
      'use strict';
      n.d(t, 'f', function() {
        return i;
      }),
        n.d(t, 'g', function() {
          return f;
        }),
        n.d(t, 'e', function() {
          return l;
        }),
        n.d(t, 'a', function() {
          return y;
        }),
        n.d(t, 'h', function() {
          return h;
        }),
        n.d(t, 'b', function() {
          return m;
        }),
        n.d(t, 'd', function() {
          return O;
        }),
        n.d(t, 'c', function() {
          return x;
        });
      var r = n('o0o1'),
        a = n.n(r),
        o = n('HaE+'),
        c = n('t3Un'),
        u = 'menus';
      function i() {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = Object(o.a)(
          a.a.mark(function e() {
            var t,
              n = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}),
                      e.abrupt('return', Object(c.b)('/v1/'.concat(u), { params: t }))
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function f() {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(o.a)(
          a.a.mark(function e() {
            var t,
              n = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}),
                      e.abrupt('return', Object(c.b)('/v1/'.concat(u, '.tree'), { params: t }))
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function l(e) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = Object(o.a)(
          a.a.mark(function e(t) {
            var n,
              r = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(c.b)('/v1/'.concat(u, '/').concat(t), { params: n })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function y(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(o.a)(
          a.a.mark(function e(t) {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c.b)('/v1/'.concat(u), { method: c.d.POST, data: t })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function h(e, t) {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = Object(o.a)(
          a.a.mark(function e(t, n) {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c.b)('/v1/'.concat(u, '/').concat(t), { method: c.d.PUT, data: n })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function m(e) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = Object(o.a)(
          a.a.mark(function e(t) {
            var n,
              r = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(c.b)('/v1/'.concat(u, '/').concat(t), {
                          method: c.d.DELETE,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function O(e) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = Object(o.a)(
          a.a.mark(function e(t) {
            var n,
              r = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(c.b)('/v1/'.concat(u, '/').concat(t, '/enable'), {
                          method: c.d.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function x(e) {
        return j.apply(this, arguments);
      }
      function j() {
        return (j = Object(o.a)(
          a.a.mark(function e(t) {
            var n,
              r = arguments;
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = r.length > 1 && void 0 !== r[1] ? r[1] : {}),
                      e.abrupt(
                        'return',
                        Object(c.b)('/v1/'.concat(u, '/').concat(t, '/disable'), {
                          method: c.d.PATCH,
                          params: n,
                        })
                      )
                    );
                  case 2:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    SLVX: function(e, t, n) {
      'use strict';
      function r(e) {
        var t,
          n = e.Symbol;
        return (
          'function' === typeof n
            ? n.observable
              ? (t = n.observable)
              : ((t = n('observable')), (n.observable = t))
            : (t = '@@observable'),
          t
        );
      }
      n.d(t, 'a', function() {
        return r;
      });
    },
    Whig: function(e, t, n) {
      'use strict';
      var r = n('o0o1'),
        a = n.n(r),
        o = n('rePB'),
        c = n('vpQ4'),
        u = '@@DVA_LOADING/SHOW',
        i = '@@DVA_LOADING/HIDE',
        s = 'loading';
      t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.namespace || s,
          n = e.only,
          r = void 0 === n ? [] : n,
          f = e.except,
          p = void 0 === f ? [] : f;
        if (r.length > 0 && p.length > 0)
          throw Error('It is ambiguous to configurate `only` and `except` items at the same time.');
        var l = { global: !1, models: {}, effects: {} },
          d = Object(o.a)({}, t, function() {
            var e,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
              n = arguments.length > 1 ? arguments[1] : void 0,
              r = n.type,
              a = n.payload,
              s = a || {},
              f = s.namespace,
              p = s.actionType;
            switch (r) {
              case u:
                e = Object(c.a)({}, t, {
                  global: !0,
                  models: Object(c.a)({}, t.models, Object(o.a)({}, f, !0)),
                  effects: Object(c.a)({}, t.effects, Object(o.a)({}, p, !0)),
                });
                break;
              case i:
                var d = Object(c.a)({}, t.effects, Object(o.a)({}, p, !1)),
                  y = Object(c.a)(
                    {},
                    t.models,
                    Object(o.a)(
                      {},
                      f,
                      Object.keys(d).some(function(e) {
                        return e.split('/')[0] === f && d[e];
                      })
                    )
                  ),
                  v = Object.keys(y).some(function(e) {
                    return y[e];
                  });
                e = Object(c.a)({}, t, { global: v, models: y, effects: d });
                break;
              default:
                e = t;
            }
            return e;
          });
        function y(e, t, n, o) {
          var c = t.put,
            s = n.namespace;
          return (0 === r.length && 0 === p.length) ||
            (r.length > 0 && -1 !== r.indexOf(o)) ||
            (p.length > 0 && -1 === p.indexOf(o))
            ? a.a.mark(function t() {
                var n = arguments;
                return a.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2), c({ type: u, payload: { namespace: s, actionType: o } })
                        );
                      case 2:
                        return (t.next = 4), e.apply(void 0, n);
                      case 4:
                        return (
                          (t.next = 6), c({ type: i, payload: { namespace: s, actionType: o } })
                        );
                      case 6:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            : e;
        }
        return { extraReducers: d, onEffect: y };
      };
    },
    anxO: function(e, t, n) {
      'use strict';
      n.d(t, 'b', function() {
        return u;
      }),
        n.d(t, 'a', function() {
          return s;
        }),
        n.d(t, 'd', function() {
          return f;
        }),
        n.d(t, 'e', function() {
          return l;
        }),
        n.d(t, 'g', function() {
          return y;
        }),
        n.d(t, 'c', function() {
          return h;
        }),
        n.d(t, 'f', function() {
          return m;
        });
      var r = n('o0o1'),
        a = n.n(r),
        o = n('HaE+'),
        c = n('t3Un');
      function u() {
        return i.apply(this, arguments);
      }
      function i() {
        return (i = Object(o.a)(
          a.a.mark(function e() {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt('return', Object(c.b)('/v1/pub/login/captchaid'));
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function s(e) {
        return ''.concat(c.a, '/v1/pub/login/captcha?id=').concat(e);
      }
      function f(e) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(o.a)(
          a.a.mark(function e(t) {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c.b)('/v1/pub/login', { method: c.d.POST, data: t, hideNotify: !0 })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function l() {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = Object(o.a)(
          a.a.mark(function e() {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c.b)('/v1/pub/login/exit', { method: c.d.POST })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function y(e) {
        return v.apply(this, arguments);
      }
      function v() {
        return (v = Object(o.a)(
          a.a.mark(function e(t) {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      'return',
                      Object(c.b)('/v1/pub/current/password', { method: c.d.PUT, data: t })
                    );
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function h() {
        return b.apply(this, arguments);
      }
      function b() {
        return (b = Object(o.a)(
          a.a.mark(function e() {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt('return', Object(c.b)('/v1/pub/current/user'));
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      function m() {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = Object(o.a)(
          a.a.mark(function e() {
            return a.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt('return', Object(c.b)('/v1/pub/current/menutree'));
                  case 1:
                  case 'end':
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
    },
    bCCX: function(e, t, n) {
      'use strict';
      (function(e, r) {
        var a,
          o = n('SLVX');
        a =
          'undefined' !== typeof self
            ? self
            : 'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof e
            ? e
            : r;
        var c = Object(o.a)(a);
        t.a = c;
      }.call(this, n('yLpj'), n('3UD+')(e)));
    },
    kjFo: function(e, t, n) {
      'use strict';
      var r = {};
      n.r(r),
        n.d(r, 'take', function() {
          return Ne;
        }),
        n.d(r, 'takem', function() {
          return Re;
        }),
        n.d(r, 'put', function() {
          return Ie;
        }),
        n.d(r, 'all', function() {
          return Me;
        }),
        n.d(r, 'race', function() {
          return Le;
        }),
        n.d(r, 'call', function() {
          return qe;
        }),
        n.d(r, 'apply', function() {
          return Ke;
        }),
        n.d(r, 'cps', function() {
          return He;
        }),
        n.d(r, 'fork', function() {
          return Ve;
        }),
        n.d(r, 'spawn', function() {
          return Be;
        }),
        n.d(r, 'join', function() {
          return We;
        }),
        n.d(r, 'cancel', function() {
          return Qe;
        }),
        n.d(r, 'select', function() {
          return Ge;
        }),
        n.d(r, 'actionChannel', function() {
          return Xe;
        }),
        n.d(r, 'cancelled', function() {
          return ze;
        }),
        n.d(r, 'flush', function() {
          return $e;
        }),
        n.d(r, 'getContext', function() {
          return Je;
        }),
        n.d(r, 'setContext', function() {
          return Ye;
        }),
        n.d(r, 'takeEvery', function() {
          return Pt;
        }),
        n.d(r, 'takeLatest', function() {
          return St;
        }),
        n.d(r, 'throttle', function() {
          return Tt;
        });
      var a = n('rePB'),
        o = n('q1tI'),
        c = n.n(o),
        u = n('QLaP'),
        i = n.n(u),
        s = n('7zRj'),
        f = n.n(s),
        p = n('/MKj'),
        l = n('vpQ4'),
        d = n('ANjH'),
        y =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        v =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              },
        h = function(e) {
          return '@@redux-saga/' + e;
        },
        b = h('TASK'),
        m = h('HELPER'),
        g = h('MATCH'),
        O = h('CANCEL_PROMISE'),
        w = h('SAGA_ACTION'),
        x = h('SELF_CANCELLATION'),
        j = function(e) {
          return function() {
            return e;
          };
        },
        k = j(!0),
        E = function() {},
        P = function(e) {
          return e;
        };
      function S(e, t, n) {
        if (!t(e)) throw (K('error', 'uncaught at check', n), new Error(n));
      }
      var T = Object.prototype.hasOwnProperty;
      function D(e, t) {
        return _.notUndef(e) && T.call(e, t);
      }
      var _ = {
          undef: function(e) {
            return null === e || void 0 === e;
          },
          notUndef: function(e) {
            return null !== e && void 0 !== e;
          },
          func: function(e) {
            return 'function' === typeof e;
          },
          number: function(e) {
            return 'number' === typeof e;
          },
          string: function(e) {
            return 'string' === typeof e;
          },
          array: Array.isArray,
          object: function(e) {
            return e && !_.array(e) && 'object' === ('undefined' === typeof e ? 'undefined' : v(e));
          },
          promise: function(e) {
            return e && _.func(e.then);
          },
          iterator: function(e) {
            return e && _.func(e.next) && _.func(e.throw);
          },
          iterable: function(e) {
            return e && _.func(Symbol) ? _.func(e[Symbol.iterator]) : _.array(e);
          },
          task: function(e) {
            return e && e[b];
          },
          observable: function(e) {
            return e && _.func(e.subscribe);
          },
          buffer: function(e) {
            return e && _.func(e.isEmpty) && _.func(e.take) && _.func(e.put);
          },
          pattern: function(e) {
            return (
              e &&
              (_.string(e) ||
                'symbol' === ('undefined' === typeof e ? 'undefined' : v(e)) ||
                _.func(e) ||
                _.array(e))
            );
          },
          channel: function(e) {
            return e && _.func(e.take) && _.func(e.close);
          },
          helper: function(e) {
            return e && e[m];
          },
          stringableFunc: function(e) {
            return _.func(e) && D(e, 'toString');
          },
        },
        C = function(e, t) {
          for (var n in t) D(t, n) && (e[n] = t[n]);
        };
      function A(e, t) {
        var n = e.indexOf(t);
        n >= 0 && e.splice(n, 1);
      }
      var F = function(e) {
        var t = Array(e.length);
        for (var n in e) D(e, n) && (t[n] = e[n]);
        return t;
      };
      function N() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = y({}, e),
          n = new Promise(function(e, n) {
            (t.resolve = e), (t.reject = n);
          });
        return (t.promise = n), t;
      }
      function R(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          n = void 0,
          r = new Promise(function(r) {
            n = setTimeout(function() {
              return r(t);
            }, e);
          });
        return (
          (r[O] = function() {
            return clearTimeout(n);
          }),
          r
        );
      }
      function I() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return function() {
          return ++e;
        };
      }
      var M = I(),
        L = function(e) {
          throw e;
        },
        U = function(e) {
          return { value: e, done: !0 };
        };
      function q(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : L,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
          r = arguments[3],
          a = { name: n, next: e, throw: t, return: U };
        return (
          r && (a[m] = !0),
          'undefined' !== typeof Symbol &&
            (a[Symbol.iterator] = function() {
              return a;
            }),
          a
        );
      }
      function K(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '';
        'undefined' === typeof window
          ? console.log('redux-saga ' + e + ': ' + t + '\n' + ((n && n.stack) || n))
          : console[e](t, n);
      }
      function H(e, t) {
        return function() {
          return e.apply(void 0, arguments);
        };
      }
      var V = function(e, t) {
          return e + ' has been deprecated in favor of ' + t + ', please update your code';
        },
        B = function(e) {
          return new Error(
            "\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " +
              e +
              '\n'
          );
        },
        W = function(e, t) {
          return (e ? e + '.' : '') + 'setContext(props): argument ' + t + ' is not a plain object';
        },
        Q = function(e) {
          return function(t) {
            return e(Object.defineProperty(t, w, { value: !0 }));
          };
        },
        G = "Channel's Buffer overflow!",
        X = { isEmpty: k, put: E, take: E };
      function z() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          t = arguments[1],
          n = new Array(e),
          r = 0,
          a = 0,
          o = 0,
          c = function(t) {
            (n[a] = t), (a = (a + 1) % e), r++;
          },
          u = function() {
            if (0 != r) {
              var t = n[o];
              return (n[o] = null), r--, (o = (o + 1) % e), t;
            }
          },
          i = function() {
            for (var e = []; r; ) e.push(u());
            return e;
          };
        return {
          isEmpty: function() {
            return 0 == r;
          },
          put: function(u) {
            if (r < e) c(u);
            else {
              var s = void 0;
              switch (t) {
                case 1:
                  throw new Error(G);
                case 3:
                  (n[a] = u), (o = a = (a + 1) % e);
                  break;
                case 4:
                  (s = 2 * e),
                    (n = i()),
                    (r = n.length),
                    (a = n.length),
                    (o = 0),
                    (n.length = s),
                    (e = s),
                    c(u);
              }
            }
          },
          take: u,
          flush: i,
        };
      }
      var $ = function() {
          return X;
        },
        J = function(e) {
          return z(e, 1);
        },
        Y = function(e) {
          return z(e, 3);
        },
        Z = [],
        ee = 0;
      function te(e) {
        try {
          re(), e();
        } finally {
          ae();
        }
      }
      function ne(e) {
        Z.push(e), ee || (re(), oe());
      }
      function re() {
        ee++;
      }
      function ae() {
        ee--;
      }
      function oe() {
        ae();
        for (var e = void 0; !ee && void 0 !== (e = Z.shift()); ) te(e);
      }
      var ce =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        ue = '@@redux-saga/CHANNEL_END',
        ie = { type: ue },
        se = function(e) {
          return e && e.type === ue;
        };
      function fe() {
        var e = [];
        return {
          subscribe: function(t) {
            return (
              e.push(t),
              function() {
                return A(e, t);
              }
            );
          },
          emit: function(t) {
            for (var n = e.slice(), r = 0, a = n.length; r < a; r++) n[r](t);
          },
        };
      }
      var pe = 'invalid buffer passed to channel factory function',
        le = 'Saga was provided with an undefined action';
      function de() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J(),
          t = !1,
          n = [];
        function r() {
          if (t && n.length) throw B('Cannot have a closed channel with pending takers');
          if (n.length && !e.isEmpty()) throw B('Cannot have pending takers with non empty buffer');
        }
        function a(a) {
          if ((r(), S(a, _.notUndef, le), !t)) {
            if (!n.length) return e.put(a);
            for (var o = 0; o < n.length; o++) {
              var c = n[o];
              if (!c[g] || c[g](a)) return n.splice(o, 1), c(a);
            }
          }
        }
        function o(a) {
          r(),
            S(a, _.func, "channel.take's callback must be a function"),
            t && e.isEmpty()
              ? a(ie)
              : e.isEmpty()
              ? (n.push(a),
                (a.cancel = function() {
                  return A(n, a);
                }))
              : a(e.take());
        }
        function c(n) {
          r(),
            S(n, _.func, "channel.flush' callback must be a function"),
            t && e.isEmpty() ? n(ie) : n(e.flush());
        }
        function u() {
          if ((r(), !t && ((t = !0), n.length))) {
            var e = n;
            n = [];
            for (var a = 0, o = e.length; a < o; a++) e[a](ie);
          }
        }
        return (
          S(e, _.buffer, pe),
          {
            take: o,
            put: a,
            flush: c,
            close: u,
            get __takers__() {
              return n;
            },
            get __closed__() {
              return t;
            },
          }
        );
      }
      function ye(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $(),
          n = arguments[2];
        arguments.length > 2 && S(n, _.func, 'Invalid match function passed to eventChannel');
        var r = de(t),
          a = function() {
            r.__closed__ || (o && o(), r.close());
          },
          o = e(function(e) {
            se(e) ? a() : (n && !n(e)) || r.put(e);
          });
        if ((r.__closed__ && o(), !_.func(o)))
          throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
        return { take: r.take, flush: r.flush, close: a };
      }
      function ve(e) {
        var t = ye(function(t) {
          return e(function(e) {
            e[w]
              ? t(e)
              : ne(function() {
                  return t(e);
                });
          });
        });
        return ce({}, t, {
          take: function(e, n) {
            arguments.length > 1 &&
              (S(n, _.func, "channel.take's matcher argument must be a function"), (e[g] = n)),
              t.take(e);
          },
        });
      }
      var he = h('IO'),
        be = 'TAKE',
        me = 'PUT',
        ge = 'RACE',
        Oe = 'CALL',
        we = 'CPS',
        xe = 'FORK',
        je = 'JOIN',
        ke = 'CANCEL',
        Ee = 'SELECT',
        Pe = 'ACTION_CHANNEL',
        Se = 'CANCELLED',
        Te = 'FLUSH',
        De = 'GET_CONTEXT',
        _e = 'SET_CONTEXT',
        Ce =
          '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)',
        Ae = function(e, t) {
          var n;
          return ((n = {})[he] = !0), (n[e] = t), n;
        },
        Fe = function(e) {
          return (
            S(et.fork(e), _.object, 'detach(eff): argument must be a fork effect'),
            (e.FORK.detached = !0),
            e
          );
        };
      function Ne() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '*';
        if (
          (arguments.length &&
            S(arguments[0], _.notUndef, 'take(patternOrChannel): patternOrChannel is undefined'),
          _.pattern(e))
        )
          return Ae(be, { pattern: e });
        if (_.channel(e)) return Ae(be, { channel: e });
        throw new Error(
          'take(patternOrChannel): argument ' +
            String(e) +
            ' is not valid channel or a valid pattern'
        );
      }
      Ne.maybe = function() {
        var e = Ne.apply(void 0, arguments);
        return (e.TAKE.maybe = !0), e;
      };
      var Re = H(Ne.maybe);
      function Ie(e, t) {
        return (
          arguments.length > 1
            ? (S(e, _.notUndef, 'put(channel, action): argument channel is undefined'),
              S(e, _.channel, 'put(channel, action): argument ' + e + ' is not a valid channel'),
              S(t, _.notUndef, 'put(channel, action): argument action is undefined'))
            : (S(e, _.notUndef, 'put(action): argument action is undefined'), (t = e), (e = null)),
          Ae(me, { channel: e, action: t })
        );
      }
      function Me(e) {
        return Ae('ALL', e);
      }
      function Le(e) {
        return Ae(ge, e);
      }
      function Ue(e, t, n) {
        S(t, _.notUndef, e + ': argument fn is undefined');
        var r = null;
        if (_.array(t)) {
          var a = t;
          (r = a[0]), (t = a[1]);
        } else if (t.fn) {
          var o = t;
          (r = o.context), (t = o.fn);
        }
        return (
          r && _.string(t) && _.func(r[t]) && (t = r[t]),
          S(t, _.func, e + ': argument ' + t + ' is not a function'),
          { context: r, fn: t, args: n }
        );
      }
      function qe(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        return Ae(Oe, Ue('call', e, n));
      }
      function Ke(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        return Ae(Oe, Ue('apply', { context: e, fn: t }, n));
      }
      function He(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        return Ae(we, Ue('cps', e, n));
      }
      function Ve(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        return Ae(xe, Ue('fork', e, n));
      }
      function Be(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        return Fe(Ve.apply(void 0, [e].concat(n)));
      }
      function We() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (t.length > 1)
          return Me(
            t.map(function(e) {
              return We(e);
            })
          );
        var r = t[0];
        return (
          S(r, _.notUndef, 'join(task): argument task is undefined'),
          S(r, _.task, 'join(task): argument ' + r + ' is not a valid Task object ' + Ce),
          Ae(je, r)
        );
      }
      function Qe() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (t.length > 1)
          return Me(
            t.map(function(e) {
              return Qe(e);
            })
          );
        var r = t[0];
        return (
          1 === t.length &&
            (S(r, _.notUndef, 'cancel(task): argument task is undefined'),
            S(r, _.task, 'cancel(task): argument ' + r + ' is not a valid Task object ' + Ce)),
          Ae(ke, r || x)
        );
      }
      function Ge(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
          n[r - 1] = arguments[r];
        return (
          0 === arguments.length
            ? (e = P)
            : (S(e, _.notUndef, 'select(selector,[...]): argument selector is undefined'),
              S(e, _.func, 'select(selector,[...]): argument ' + e + ' is not a function')),
          Ae(Ee, { selector: e, args: n })
        );
      }
      function Xe(e, t) {
        return (
          S(e, _.notUndef, 'actionChannel(pattern,...): argument pattern is undefined'),
          arguments.length > 1 &&
            (S(t, _.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined'),
            S(
              t,
              _.buffer,
              'actionChannel(pattern, buffer): argument ' + t + ' is not a valid buffer'
            )),
          Ae(Pe, { pattern: e, buffer: t })
        );
      }
      function ze() {
        return Ae(Se, {});
      }
      function $e(e) {
        return (
          S(e, _.channel, 'flush(channel): argument ' + e + ' is not valid channel'), Ae(Te, e)
        );
      }
      function Je(e) {
        return S(e, _.string, 'getContext(prop): argument ' + e + ' is not a string'), Ae(De, e);
      }
      function Ye(e) {
        return S(e, _.object, W(null, e)), Ae(_e, e);
      }
      (Ie.resolve = function() {
        var e = Ie.apply(void 0, arguments);
        return (e.PUT.resolve = !0), e;
      }),
        (Ie.sync = H(Ie.resolve));
      var Ze = function(e) {
          return function(t) {
            return t && t[he] && t[e];
          };
        },
        et = {
          take: Ze(be),
          put: Ze(me),
          all: Ze('ALL'),
          race: Ze(ge),
          call: Ze(Oe),
          cps: Ze(we),
          fork: Ze(xe),
          join: Ze(je),
          cancel: Ze(ke),
          select: Ze(Ee),
          actionChannel: Ze(Pe),
          cancelled: Ze(Se),
          flush: Ze(Te),
          getContext: Ze(De),
          setContext: Ze(_e),
        },
        tt =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        nt =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              };
      function rt(e, t) {
        for (var n in t) {
          var r = t[n];
          (r.configurable = r.enumerable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, n, r);
        }
        return e;
      }
      var at = 'proc first argument (Saga function result) must be an iterator',
        ot = {
          toString: function() {
            return '@@redux-saga/CHANNEL_END';
          },
        },
        ct = {
          toString: function() {
            return '@@redux-saga/TASK_CANCEL';
          },
        },
        ut = function() {
          return k;
        },
        it = function(e) {
          return 'symbol' === ('undefined' === typeof e ? 'undefined' : nt(e))
            ? function(t) {
                return t.type === e;
              }
            : function(t) {
                return t.type === String(e);
              };
        },
        st = function(e) {
          return function(t) {
            return e.some(function(e) {
              return pt(e)(t);
            });
          };
        },
        ft = function(e) {
          return function(t) {
            return e(t);
          };
        };
      function pt(e) {
        return ('*' === e ? ut : _.array(e) ? st : _.stringableFunc(e) ? it : _.func(e) ? ft : it)(
          e
        );
      }
      function lt(e, t, n) {
        var r = [],
          a = void 0,
          o = !1;
        function c(e) {
          i(), n(e, !0);
        }
        function u(e) {
          r.push(e),
            (e.cont = function(u, i) {
              o ||
                (A(r, e),
                (e.cont = E),
                i ? c(u) : (e === t && (a = u), r.length || ((o = !0), n(a))));
            });
        }
        function i() {
          o ||
            ((o = !0),
            r.forEach(function(e) {
              (e.cont = E), e.cancel();
            }),
            (r = []));
        }
        return (
          u(t),
          {
            addTask: u,
            cancelAll: i,
            abort: c,
            getTasks: function() {
              return r;
            },
            taskNames: function() {
              return r.map(function(e) {
                return e.name;
              });
            },
          }
        );
      }
      function dt(e) {
        var t = e.context,
          n = e.fn,
          r = e.args;
        if (_.iterator(n)) return n;
        var a = void 0,
          o = void 0;
        try {
          a = n.apply(t, r);
        } catch (c) {
          o = c;
        }
        return _.iterator(a)
          ? a
          : q(
              o
                ? function() {
                    throw o;
                  }
                : (function() {
                    var e = void 0,
                      t = { done: !1, value: a };
                    return function(n) {
                      return e ? { done: !0, value: n } : ((e = !0), t);
                    };
                  })()
            );
      }
      var yt = function(e) {
        return { fn: e };
      };
      function vt(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : function() {
                  return E;
                },
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E,
          a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
          c = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
          u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 'anonymous',
          i = arguments[8];
        S(e, _.iterator, at);
        var s = '[...effects]',
          f = H($, V(s, 'all(' + s + ')')),
          p = o.sagaMonitor,
          l = o.logger,
          d = o.onError,
          y = l || K,
          v = function(e) {
            var t = e.sagaStack;
            !t &&
              e.stack &&
              (t =
                -1 !== e.stack.split('\n')[0].indexOf(e.message)
                  ? e.stack
                  : 'Error: ' + e.message + '\n' + e.stack),
              y('error', 'uncaught at ' + u, t || e.message || e);
          },
          h = ve(t),
          m = Object.create(a);
        T.cancel = E;
        var g = ie(c, u, e, i),
          w = { name: u, cancel: k, isRunning: !0 },
          j = lt(0, w, D);
        function k() {
          w.isRunning && !w.isCancelled && ((w.isCancelled = !0), T(ct));
        }
        function P() {
          e._isRunning && !e._isCancelled && ((e._isCancelled = !0), j.cancelAll(), D(ct));
        }
        return i && (i.cancel = P), (e._isRunning = !0), T(), g;
        function T(t, n) {
          if (!w.isRunning) throw new Error('Trying to resume an already finished generator');
          try {
            var r = void 0;
            n
              ? (r = e.throw(t))
              : t === ct
              ? ((w.isCancelled = !0),
                T.cancel(),
                (r = _.func(e.return) ? e.return(ct) : { done: !0, value: ct }))
              : (r = t === ot ? (_.func(e.return) ? e.return() : { done: !0 }) : e.next(t)),
              r.done ? ((w.isMainRunning = !1), w.cont && w.cont(r.value)) : R(r.value, c, '', T);
          } catch (a) {
            w.isCancelled && v(a), (w.isMainRunning = !1), w.cont(a, !0);
          }
        }
        function D(t, n) {
          (e._isRunning = !1),
            h.close(),
            n
              ? (t instanceof Error &&
                  Object.defineProperty(t, 'sagaStack', {
                    value: 'at ' + u + ' \n ' + (t.sagaStack || t.stack),
                    configurable: !0,
                  }),
                g.cont || (t instanceof Error && d ? d(t) : v(t)),
                (e._error = t),
                (e._isAborted = !0),
                e._deferredEnd && e._deferredEnd.reject(t))
              : ((e._result = t), e._deferredEnd && e._deferredEnd.resolve(t)),
            g.cont && g.cont(t, n),
            g.joiners.forEach(function(e) {
              return e.cb(t, n);
            }),
            (g.joiners = null);
        }
        function R(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : '',
            r = arguments[3],
            a = M();
          p && p.effectTriggered({ effectId: a, parentEffectId: t, label: n, effect: e });
          var o = void 0;
          function c(e, t) {
            o ||
              ((o = !0),
              (r.cancel = E),
              p && (t ? p.effectRejected(a, e) : p.effectResolved(a, e)),
              r(e, t));
          }
          (c.cancel = E),
            (r.cancel = function() {
              if (!o) {
                o = !0;
                try {
                  c.cancel();
                } catch (e) {
                  v(e);
                }
                (c.cancel = E), p && p.effectCancelled(a);
              }
            });
          var i = void 0;
          return _.promise(e)
            ? I(e, c)
            : _.helper(e)
            ? G(yt(e), a, c)
            : _.iterator(e)
            ? L(e, a, u, c)
            : _.array(e)
            ? f(e, a, c)
            : (i = et.take(e))
            ? U(i, c)
            : (i = et.put(e))
            ? q(i, c)
            : (i = et.all(e))
            ? $(i, a, c)
            : (i = et.race(e))
            ? Y(i, a, c)
            : (i = et.call(e))
            ? B(i, a, c)
            : (i = et.cps(e))
            ? Q(i, c)
            : (i = et.fork(e))
            ? G(i, a, c)
            : (i = et.join(e))
            ? X(i, c)
            : (i = et.cancel(e))
            ? z(i, c)
            : (i = et.select(e))
            ? Z(i, c)
            : (i = et.actionChannel(e))
            ? ee(i, c)
            : (i = et.flush(e))
            ? ae(i, c)
            : (i = et.cancelled(e))
            ? te(i, c)
            : (i = et.getContext(e))
            ? ce(i, c)
            : (i = et.setContext(e))
            ? ue(i, c)
            : c(e);
        }
        function I(e, t) {
          var n = e[O];
          _.func(n)
            ? (t.cancel = n)
            : _.func(e.abort) &&
              (t.cancel = function() {
                return e.abort();
              }),
            e.then(t, function(e) {
              return t(e, !0);
            });
        }
        function L(e, a, c, u) {
          vt(e, t, n, r, m, o, a, c, u);
        }
        function U(e, t) {
          var n = e.channel,
            r = e.pattern,
            a = e.maybe;
          n = n || h;
          var o = function(e) {
            return e instanceof Error ? t(e, !0) : se(e) && !a ? t(ot) : t(e);
          };
          try {
            n.take(o, pt(r));
          } catch (c) {
            return t(c, !0);
          }
          t.cancel = o.cancel;
        }
        function q(e, t) {
          var r = e.channel,
            a = e.action,
            o = e.resolve;
          ne(function() {
            var e = void 0;
            try {
              e = (r ? r.put : n)(a);
            } catch (c) {
              if (r || o) return t(c, !0);
              v(c);
            }
            if (!o || !_.promise(e)) return t(e);
            I(e, t);
          });
        }
        function B(e, t, n) {
          var r = e.context,
            a = e.fn,
            o = e.args,
            c = void 0;
          try {
            c = a.apply(r, o);
          } catch (u) {
            return n(u, !0);
          }
          return _.promise(c) ? I(c, n) : _.iterator(c) ? L(c, t, a.name, n) : n(c);
        }
        function Q(e, t) {
          var n = e.context,
            r = e.fn,
            a = e.args;
          try {
            var o = function(e, n) {
              return _.undef(e) ? t(n) : t(e, !0);
            };
            r.apply(n, a.concat(o)),
              o.cancel &&
                (t.cancel = function() {
                  return o.cancel();
                });
          } catch (c) {
            return t(c, !0);
          }
        }
        function G(e, a, c) {
          var u = e.context,
            i = e.fn,
            s = e.args,
            f = e.detached,
            p = dt({ context: u, fn: i, args: s });
          try {
            re();
            var l = vt(p, t, n, r, m, o, a, i.name, f ? null : E);
            f ? c(l) : p._isRunning ? (j.addTask(l), c(l)) : p._error ? j.abort(p._error) : c(l);
          } finally {
            oe();
          }
        }
        function X(e, t) {
          if (e.isRunning()) {
            var n = { task: g, cb: t };
            (t.cancel = function() {
              return A(e.joiners, n);
            }),
              e.joiners.push(n);
          } else e.isAborted() ? t(e.error(), !0) : t(e.result());
        }
        function z(e, t) {
          e === x && (e = g), e.isRunning() && e.cancel(), t();
        }
        function $(e, t, n) {
          var r = Object.keys(e);
          if (!r.length) return n(_.array(e) ? [] : {});
          var a = 0,
            o = void 0,
            c = {},
            u = {};
          r.forEach(function(t) {
            var i = function(u, i) {
              o ||
                (i || se(u) || u === ot || u === ct
                  ? (n.cancel(), n(u, i))
                  : ((c[t] = u),
                    ++a === r.length &&
                      ((o = !0), n(_.array(e) ? F(tt({}, c, { length: r.length })) : c))));
            };
            (i.cancel = E), (u[t] = i);
          }),
            (n.cancel = function() {
              o ||
                ((o = !0),
                r.forEach(function(e) {
                  return u[e].cancel();
                }));
            }),
            r.forEach(function(n) {
              return R(e[n], t, n, u[n]);
            });
        }
        function Y(e, t, n) {
          var r = void 0,
            a = Object.keys(e),
            o = {};
          a.forEach(function(t) {
            var c = function(o, c) {
              if (!r)
                if (c) n.cancel(), n(o, !0);
                else if (!se(o) && o !== ot && o !== ct) {
                  var u;
                  n.cancel(), (r = !0);
                  var i = (((u = {})[t] = o), u);
                  n(_.array(e) ? [].slice.call(tt({}, i, { length: a.length })) : i);
                }
            };
            (c.cancel = E), (o[t] = c);
          }),
            (n.cancel = function() {
              r ||
                ((r = !0),
                a.forEach(function(e) {
                  return o[e].cancel();
                }));
            }),
            a.forEach(function(n) {
              r || R(e[n], t, n, o[n]);
            });
        }
        function Z(e, t) {
          var n = e.selector,
            a = e.args;
          try {
            t(n.apply(void 0, [r()].concat(a)));
          } catch (o) {
            t(o, !0);
          }
        }
        function ee(e, n) {
          var r = e.pattern,
            a = e.buffer,
            o = pt(r);
          (o.pattern = r), n(ye(t, a || J(), o));
        }
        function te(e, t) {
          t(!!w.isCancelled);
        }
        function ae(e, t) {
          e.flush(t);
        }
        function ce(e, t) {
          t(m[e]);
        }
        function ue(e, t) {
          C(m, e), t();
        }
        function ie(e, t, n, r) {
          var a, o;
          return (
            (n._deferredEnd = null),
            ((a = {})[b] = !0),
            (a.id = e),
            (a.name = t),
            'done',
            ((o = {}).done = o.done || {}),
            (o.done.get = function() {
              if (n._deferredEnd) return n._deferredEnd.promise;
              var e = N();
              return (
                (n._deferredEnd = e),
                n._isRunning || (n._error ? e.reject(n._error) : e.resolve(n._result)),
                e.promise
              );
            }),
            (a.cont = r),
            (a.joiners = []),
            (a.cancel = P),
            (a.isRunning = function() {
              return n._isRunning;
            }),
            (a.isCancelled = function() {
              return n._isCancelled;
            }),
            (a.isAborted = function() {
              return n._isAborted;
            }),
            (a.result = function() {
              return n._result;
            }),
            (a.error = function() {
              return n._error;
            }),
            (a.setContext = function(e) {
              S(e, _.object, W('task', e)), C(m, e);
            }),
            rt(a, o),
            a
          );
        }
      }
      var ht =
        'runSaga(storeInterface, saga, ...args): saga argument must be a Generator function!';
      function bt(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
          r[a - 2] = arguments[a];
        var o = void 0;
        _.iterator(e)
          ? ((o = e), (e = t))
          : (S(t, _.func, ht), S((o = t.apply(void 0, r)), _.iterator, ht));
        var c = e,
          u = c.subscribe,
          i = c.dispatch,
          s = c.getState,
          f = c.context,
          p = c.sagaMonitor,
          l = c.logger,
          d = c.onError,
          y = M();
        p &&
          ((p.effectTriggered = p.effectTriggered || E),
          (p.effectResolved = p.effectResolved || E),
          (p.effectRejected = p.effectRejected || E),
          (p.effectCancelled = p.effectCancelled || E),
          (p.actionDispatched = p.actionDispatched || E),
          p.effectTriggered({
            effectId: y,
            root: !0,
            parentEffectId: 0,
            effect: { root: !0, saga: t, args: r },
          }));
        var v = vt(o, u, Q(i), s, f, { sagaMonitor: p, logger: l, onError: d }, y, t.name);
        return p && p.effectResolved(y, v), v;
      }
      function mt(e, t) {
        var n = {};
        for (var r in e)
          t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
        return n;
      }
      var gt = { done: !0, value: void 0 },
        Ot = {};
      function wt(e) {
        return _.channel(e)
          ? 'channel'
          : Array.isArray(e)
          ? String(
              e.map(function(e) {
                return String(e);
              })
            )
          : String(e);
      }
      function xt(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'iterator',
          r = void 0,
          a = t;
        function o(t, n) {
          if (a === Ot) return gt;
          if (n) throw ((a = Ot), n);
          r && r(t);
          var o = e[a](),
            c = o[0],
            u = o[1],
            i = o[2];
          return (r = i), (a = c) === Ot ? gt : u;
        }
        return q(
          o,
          function(e) {
            return o(null, e);
          },
          n,
          !0
        );
      }
      function jt(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
          r[a - 2] = arguments[a];
        var o = { done: !1, value: Ne(e) },
          c = function(e) {
            return { done: !1, value: Ve.apply(void 0, [t].concat(r, [e])) };
          },
          u = void 0,
          i = function(e) {
            return (u = e);
          };
        return xt(
          {
            q1: function() {
              return ['q2', o, i];
            },
            q2: function() {
              return u === ie ? [Ot] : ['q1', c(u)];
            },
          },
          'q1',
          'takeEvery(' + wt(e) + ', ' + t.name + ')'
        );
      }
      function kt(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
          r[a - 2] = arguments[a];
        var o = { done: !1, value: Ne(e) },
          c = function(e) {
            return { done: !1, value: Ve.apply(void 0, [t].concat(r, [e])) };
          },
          u = function(e) {
            return { done: !1, value: Qe(e) };
          },
          i = void 0,
          s = void 0,
          f = function(e) {
            return (i = e);
          },
          p = function(e) {
            return (s = e);
          };
        return xt(
          {
            q1: function() {
              return ['q2', o, p];
            },
            q2: function() {
              return s === ie ? [Ot] : i ? ['q3', u(i)] : ['q1', c(s), f];
            },
            q3: function() {
              return ['q1', c(s), f];
            },
          },
          'q1',
          'takeLatest(' + wt(e) + ', ' + t.name + ')'
        );
      }
      function Et(e, t, n) {
        for (var r = arguments.length, a = Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++)
          a[o - 3] = arguments[o];
        var c = void 0,
          u = void 0,
          i = { done: !1, value: Xe(t, Y(1)) },
          s = function() {
            return { done: !1, value: Ne(u) };
          },
          f = function(e) {
            return { done: !1, value: Ve.apply(void 0, [n].concat(a, [e])) };
          },
          p = { done: !1, value: qe(R, e) },
          l = function(e) {
            return (c = e);
          },
          d = function(e) {
            return (u = e);
          };
        return xt(
          {
            q1: function() {
              return ['q2', i, d];
            },
            q2: function() {
              return ['q3', s(), l];
            },
            q3: function() {
              return c === ie ? [Ot] : ['q4', f(c)];
            },
            q4: function() {
              return ['q2', p];
            },
          },
          'q1',
          'throttle(' + wt(t) + ', ' + n.name + ')'
        );
      }
      function Pt(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
          r[a - 2] = arguments[a];
        return Ve.apply(void 0, [jt, e, t].concat(r));
      }
      function St(e, t) {
        for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
          r[a - 2] = arguments[a];
        return Ve.apply(void 0, [kt, e, t].concat(r));
      }
      function Tt(e, t, n) {
        for (var r = arguments.length, a = Array(r > 3 ? r - 3 : 0), o = 3; o < r; o++)
          a[o - 3] = arguments[o];
        return Ve.apply(void 0, [Et, e, t, n].concat(a));
      }
      var Dt = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = e.context,
            n = void 0 === t ? {} : t,
            r = mt(e, ['context']),
            a = r.sagaMonitor,
            o = r.logger,
            c = r.onError;
          if (_.func(r))
            throw new Error(
              'Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead'
            );
          if (o && !_.func(o))
            throw new Error('`options.logger` passed to the Saga middleware is not a function!');
          if (c && !_.func(c))
            throw new Error('`options.onError` passed to the Saga middleware is not a function!');
          if (r.emitter && !_.func(r.emitter))
            throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
          function u(e) {
            var t = e.getState,
              i = e.dispatch,
              s = fe();
            return (
              (s.emit = (r.emitter || P)(s.emit)),
              (u.run = bt.bind(null, {
                context: n,
                subscribe: s.subscribe,
                dispatch: i,
                getState: t,
                sagaMonitor: a,
                logger: o,
                onError: c,
              })),
              function(e) {
                return function(t) {
                  a && a.actionDispatched && a.actionDispatched(t);
                  var n = e(t);
                  return s.emit(t), n;
                };
              }
            );
          }
          return (
            (u.run = function() {
              throw new Error(
                'Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware'
              );
            }),
            (u.setContext = function(e) {
              S(e, _.object, W('sagaMiddleware', e)), C(n, e);
            }),
            u
          );
        },
        _t = n('U8pU'),
        Ct = n('+0iv'),
        At = n.n(Ct),
        Ft = n('6DQo'),
        Nt = n.n(Ft),
        Rt = n('1OyB'),
        It = n('vuIU'),
        Mt = n('KQm4'),
        Lt = n('QTEQ'),
        Ut = n.n(Lt),
        qt = (n('vgmO'), n('ODXe')),
        Kt = n('o0o1'),
        Ht = n.n(Kt),
        Vt = Array.isArray.bind(Array),
        Bt = function(e) {
          return 'function' === typeof e;
        },
        Wt = function(e) {
          return e;
        },
        Qt = function() {},
        Gt = function(e, t) {
          for (var n = 0, r = e.length; n < r; n += 1) if (t(e[n], n)) return n;
          return -1;
        };
      At.a;
      var Xt = '/';
      function zt(e, t, n) {
        return Object.keys(e).reduce(function(r, a) {
          return (
            Nt()(
              0 !== a.indexOf(''.concat(t).concat(Xt)),
              '[prefixNamespace]: '
                .concat(n, ' ')
                .concat(a, ' should not be prefixed with namespace ')
                .concat(t)
            ),
            (r[
              ''
                .concat(t)
                .concat(Xt)
                .concat(a)
            ] = e[a]),
            r
          );
        }, {});
      }
      function $t(e) {
        var t = e.namespace,
          n = e.reducers,
          r = e.effects;
        return (
          n &&
            (Vt(n) ? (e.reducers[0] = zt(n[0], t, 'reducer')) : (e.reducers = zt(n, t, 'reducer'))),
          r && (e.effects = zt(r, t, 'effect')),
          e
        );
      }
      var Jt = [
        'onError',
        'onStateChange',
        'onAction',
        'onHmr',
        'onReducer',
        'onEffect',
        'extraReducers',
        'extraEnhancers',
        '_handleActions',
      ];
      function Yt(e) {
        return Object.keys(e).reduce(function(t, n) {
          return Jt.indexOf(n) > -1 && (t[n] = e[n]), t;
        }, {});
      }
      var Zt = (function() {
        function e() {
          Object(Rt.a)(this, e),
            (this._handleActions = null),
            (this.hooks = Jt.reduce(function(e, t) {
              return (e[t] = []), e;
            }, {}));
        }
        return (
          Object(It.a)(e, [
            {
              key: 'use',
              value: function(e) {
                i()(At()(e), 'plugin.use: plugin should be plain object');
                var t = this.hooks;
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) &&
                    (i()(t[n], 'plugin.use: unknown plugin property: '.concat(n)),
                    '_handleActions' === n
                      ? (this._handleActions = e[n])
                      : 'extraEnhancers' === n
                      ? (t[n] = e[n])
                      : t[n].push(e[n]));
              },
            },
            {
              key: 'apply',
              value: function(e, t) {
                var n = this.hooks;
                i()(
                  ['onError', 'onHmr'].indexOf(e) > -1,
                  'plugin.apply: hook '.concat(e, ' cannot be applied')
                );
                var r = n[e];
                return function() {
                  if (r.length) {
                    var e = !0,
                      n = !1,
                      a = void 0;
                    try {
                      for (var o, c = r[Symbol.iterator](); !(e = (o = c.next()).done); e = !0) {
                        var u = o.value;
                        u.apply(void 0, arguments);
                      }
                    } catch (i) {
                      (n = !0), (a = i);
                    } finally {
                      try {
                        e || null == c.return || c.return();
                      } finally {
                        if (n) throw a;
                      }
                    }
                  } else t && t.apply(void 0, arguments);
                };
              },
            },
            {
              key: 'get',
              value: function(e) {
                var t,
                  n = this.hooks;
                return (
                  i()(e in n, 'plugin.get: hook '.concat(e, ' cannot be got')),
                  'extraReducers' === e
                    ? (function(e) {
                        var t = {},
                          n = !0,
                          r = !1,
                          a = void 0;
                        try {
                          for (
                            var o, c = e[Symbol.iterator]();
                            !(n = (o = c.next()).done);
                            n = !0
                          ) {
                            var u = o.value;
                            t = Object(l.a)({}, t, u);
                          }
                        } catch (i) {
                          (r = !0), (a = i);
                        } finally {
                          try {
                            n || null == c.return || c.return();
                          } finally {
                            if (r) throw a;
                          }
                        }
                        return t;
                      })(n[e])
                    : 'onReducer' === e
                    ? ((t = n[e]),
                      function(e) {
                        var n = !0,
                          r = !1,
                          a = void 0;
                        try {
                          for (var o, c = t[Symbol.iterator](); !(n = (o = c.next()).done); n = !0)
                            e = (0, o.value)(e);
                        } catch (u) {
                          (r = !0), (a = u);
                        } finally {
                          try {
                            n || null == c.return || c.return();
                          } finally {
                            if (r) throw a;
                          }
                        }
                        return e;
                      })
                    : n[e]
                );
              },
            },
          ]),
          e
        );
      })();
      function en(e) {
        var t = e.reducers,
          n = e.initialState,
          r = e.plugin,
          a = e.sagaMiddleware,
          o = e.promiseMiddleware,
          c = e.createOpts.setupMiddlewares,
          u = void 0 === c ? Wt : c,
          s = r.get('extraEnhancers');
        i()(Vt(s), '[app.start] extraEnhancers should be array, but got '.concat(Object(_t.a)(s)));
        var f = r.get('onAction'),
          p = u([o, a].concat(Object(Mt.a)(Ut()(f)))),
          l = d.d,
          y = [d.a.apply(void 0, Object(Mt.a)(p))].concat(Object(Mt.a)(s));
        return Object(d.e)(t, n, l.apply(void 0, Object(Mt.a)(y)));
      }
      function tn(e, t) {
        var n = ''
            .concat(t.namespace)
            .concat(Xt)
            .concat(e),
          r = n.replace(/\/@@[^/]+?$/, '');
        return (t.reducers && t.reducers[r]) || (t.effects && t.effects[r]) ? n : e;
      }
      function nn(e, t, n, a) {
        var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return Ht.a.mark(function c() {
          var u;
          return Ht.a.wrap(function(c) {
            for (;;)
              switch ((c.prev = c.next)) {
                case 0:
                  c.t0 = Ht.a.keys(e);
                case 1:
                  if ((c.t1 = c.t0()).done) {
                    c.next = 7;
                    break;
                  }
                  if (((u = c.t1.value), !Object.prototype.hasOwnProperty.call(e, u))) {
                    c.next = 5;
                    break;
                  }
                  return c.delegateYield(
                    Ht.a.mark(function c() {
                      var i, s;
                      return Ht.a.wrap(function(c) {
                        for (;;)
                          switch ((c.prev = c.next)) {
                            case 0:
                              return (i = rn(u, e[u], t, n, a, o)), (c.next = 3), r.fork(i);
                            case 3:
                              return (
                                (s = c.sent),
                                (c.next = 6),
                                r.fork(
                                  Ht.a.mark(function e() {
                                    return Ht.a.wrap(function(e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2),
                                              r.take(''.concat(t.namespace, '/@@CANCEL_EFFECTS'))
                                            );
                                          case 2:
                                            return (e.next = 4), r.cancel(s);
                                          case 4:
                                          case 'end':
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                )
                              );
                            case 6:
                            case 'end':
                              return c.stop();
                          }
                      }, c);
                    })(),
                    't2',
                    5
                  );
                case 5:
                  c.next = 1;
                  break;
                case 7:
                case 'end':
                  return c.stop();
              }
          }, c);
        });
      }
      function rn(e, t, n, a, o, c) {
        var u,
          s,
          f = Ht.a.mark(h),
          p = t,
          l = 'takeEvery';
        if (Array.isArray(t)) {
          var d = Object(qt.a)(t, 1);
          p = d[0];
          var y = t[1];
          y &&
            y.type &&
            ('throttle' === (l = y.type) &&
              (i()(y.ms, 'app.start: opts.ms should be defined if type is throttle'), (u = y.ms)),
            'poll' === l &&
              (i()(y.delay, 'app.start: opts.delay should be defined if type is poll'),
              (s = y.delay))),
            i()(
              ['watcher', 'takeEvery', 'takeLatest', 'throttle', 'poll'].indexOf(l) > -1,
              'app.start: effect type should be takeEvery, takeLatest, throttle, poll or watcher'
            );
        }
        function v() {}
        function h() {
          var t,
            o,
            u,
            i,
            s,
            l,
            d,
            y,
            h,
            b = arguments;
          return Ht.a.wrap(
            function(f) {
              for (;;)
                switch ((f.prev = f.next)) {
                  case 0:
                    for (t = b.length, o = new Array(t), u = 0; u < t; u++) o[u] = b[u];
                    return (
                      (i = o.length > 0 ? o[0] : {}),
                      (s = i.__dva_resolve),
                      (l = void 0 === s ? v : s),
                      (d = i.__dva_reject),
                      (y = void 0 === d ? v : d),
                      (f.prev = 2),
                      (f.next = 5),
                      r.put({ type: ''.concat(e).concat(Xt, '@@start') })
                    );
                  case 5:
                    return (f.next = 7), p.apply(void 0, Object(Mt.a)(o.concat(an(n, c))));
                  case 7:
                    return (
                      (h = f.sent), (f.next = 10), r.put({ type: ''.concat(e).concat(Xt, '@@end') })
                    );
                  case 10:
                    l(h), (f.next = 17);
                    break;
                  case 13:
                    (f.prev = 13),
                      (f.t0 = f.catch(2)),
                      a(f.t0, { key: e, effectArgs: o }),
                      f.t0._dontReject || y(f.t0);
                  case 17:
                  case 'end':
                    return f.stop();
                }
            },
            f,
            null,
            [[2, 13]]
          );
        }
        var b = (function(e, t, n, a) {
          var o = !0,
            c = !1,
            u = void 0;
          try {
            for (var i, s = e[Symbol.iterator](); !(o = (i = s.next()).done); o = !0) {
              t = (0, i.value)(t, r, n, a);
            }
          } catch (f) {
            (c = !0), (u = f);
          } finally {
            try {
              o || null == s.return || s.return();
            } finally {
              if (c) throw u;
            }
          }
          return t;
        })(o, h, n, e);
        switch (l) {
          case 'watcher':
            return h;
          case 'takeLatest':
            return Ht.a.mark(function t() {
              return Ht.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), r.takeLatest(e, b);
                    case 2:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            });
          case 'throttle':
            return Ht.a.mark(function t() {
              return Ht.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), r.throttle(u, e, b);
                    case 2:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            });
          case 'poll':
            return Ht.a.mark(function t() {
              var n, a, o, c, u, i, f;
              return Ht.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      (o = function(e, t) {
                        var r;
                        return Ht.a.wrap(function(n) {
                          for (;;)
                            switch ((n.prev = n.next)) {
                              case 0:
                                r = e.call;
                              case 1:
                                return (n.next = 4), r(b, t);
                              case 4:
                                return (n.next = 6), r(a, s);
                              case 6:
                                n.next = 1;
                                break;
                              case 8:
                              case 'end':
                                return n.stop();
                            }
                        }, n);
                      }),
                        (a = function(e) {
                          return new Promise(function(t) {
                            return setTimeout(t, e);
                          });
                        }),
                        (n = Ht.a.mark(o)),
                        (c = r.call),
                        (u = r.take),
                        (i = r.race);
                    case 4:
                      return (t.next = 7), u(''.concat(e, '-start'));
                    case 7:
                      return (f = t.sent), (t.next = 10), i([c(o, r, f), u(''.concat(e, '-stop'))]);
                    case 10:
                      t.next = 4;
                      break;
                    case 12:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            });
          default:
            return Ht.a.mark(function t() {
              return Ht.a.wrap(function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), r.takeEvery(e, b);
                    case 2:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            });
        }
      }
      function an(e, t) {
        function n(n, r) {
          i()(n, 'dispatch: action should be a plain Object with type');
          var a = t.namespacePrefixWarning;
          (void 0 === a || a) &&
            Nt()(
              0 !== n.indexOf(''.concat(e.namespace).concat(Xt)),
              '['
                .concat(r, '] ')
                .concat(n, ' should not be prefixed with namespace ')
                .concat(e.namespace)
            );
        }
        function a(t) {
          var a = t.type;
          return n(a, 'sagaEffects.put'), r.put(Object(l.a)({}, t, { type: tn(a, e) }));
        }
        return (
          (a.resolve = function(t) {
            var a = t.type;
            return (
              n(a, 'sagaEffects.put.resolve'), r.put.resolve(Object(l.a)({}, t, { type: tn(a, e) }))
            );
          }),
          Object(l.a)({}, r, {
            put: a,
            take: function(t) {
              return 'string' === typeof t
                ? (n(t, 'sagaEffects.take'), r.take(tn(t, e)))
                : Array.isArray(t)
                ? r.take(
                    t.map(function(t) {
                      return 'string' === typeof t ? (n(t, 'sagaEffects.take'), tn(t, e)) : t;
                    })
                  )
                : r.take(t);
            },
          })
        );
      }
      function on(e) {
        return e;
      }
      function cn() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e, n) {
          return t.reduce(function(e, t) {
            return t(e, n);
          }, e);
        };
      }
      function un(e, t) {
        var n = Object.keys(e).map(function(t) {
            return (function(e) {
              var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : on;
              return function(n, r) {
                var a = r.type;
                return (
                  i()(a, 'dispatch: action should be a plain Object with type'),
                  e === a ? t(n, r) : n
                );
              };
            })(t, e[t]);
          }),
          r = cn.apply(void 0, Object(Mt.a)(n));
        return function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
            n = arguments.length > 1 ? arguments[1] : void 0;
          return r(e, n);
        };
      }
      function sn(e, t, n) {
        return Array.isArray(e) ? e[1]((n || un)(e[0], t)) : (n || un)(e || {}, t);
      }
      function fn(e) {
        return function() {
          return function(t) {
            return function(n) {
              return (function(t) {
                if (!t || 'string' !== typeof t) return !1;
                var n = t.split(Xt),
                  r = Object(qt.a)(n, 1)[0],
                  a = e._models.filter(function(e) {
                    return e.namespace === r;
                  })[0];
                if (a && a.effects && a.effects[t]) return !0;
                return !1;
              })(n.type)
                ? new Promise(function(e, r) {
                    t(Object(l.a)({ __dva_resolve: e, __dva_reject: r }, n));
                  })
                : t(n);
            };
          };
        };
      }
      function pn(e, t) {
        return function(n) {
          var r = n.type;
          return (
            i()(r, 'dispatch: action should be a plain Object with type'),
            Nt()(
              0 !== r.indexOf(''.concat(t.namespace).concat(Xt)),
              'dispatch: '.concat(r, ' should not be prefixed with namespace ').concat(t.namespace)
            ),
            e(Object(l.a)({}, n, { type: tn(r, t) }))
          );
        };
      }
      function ln(e, t, n, r) {
        var a = [],
          o = [];
        for (var c in e)
          if (Object.prototype.hasOwnProperty.call(e, c)) {
            var u = (0, e[c])({ dispatch: pn(n._store.dispatch, t), history: n._history }, r);
            Bt(u) ? a.push(u) : o.push(c);
          }
        return { funcs: a, nonFuncs: o };
      }
      function dn(e, t) {
        if (e[t]) {
          var n = e[t],
            r = n.funcs,
            a = n.nonFuncs;
          Nt()(
            0 === a.length,
            '[app.unmodel] subscription should return unlistener function, check these subscriptions '.concat(
              a.join(', ')
            )
          );
          var o = !0,
            c = !1,
            u = void 0;
          try {
            for (var i, s = r[Symbol.iterator](); !(o = (i = s.next()).done); o = !0) {
              (0, i.value)();
            }
          } catch (f) {
            (c = !0), (u = f);
          } finally {
            try {
              o || null == s.return || s.return();
            } finally {
              if (c) throw u;
            }
          }
          delete e[t];
        }
      }
      var yn = Qt,
        vn = Gt,
        hn = {
          namespace: '@@dva',
          state: 0,
          reducers: {
            UPDATE: function(e) {
              return e + 1;
            },
          },
        };
      function bn() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = t.initialReducer,
          r = t.setupApp,
          a = void 0 === r ? yn : r,
          o = new Zt();
        o.use(Yt(e));
        var c = {
          _models: [$t(Object(l.a)({}, hn))],
          _store: null,
          _plugin: o,
          use: o.use.bind(o),
          model: u,
          start: y,
        };
        return c;
        function u(e) {
          var t = $t(Object(l.a)({}, e));
          return c._models.push(t), t;
        }
        function s(t, n, r, a) {
          a = u(a);
          var i = c._store;
          (i.asyncReducers[a.namespace] = sn(a.reducers, a.state, o._handleActions)),
            i.replaceReducer(t()),
            a.effects && i.runSaga(c._getSaga(a.effects, a, n, o.get('onEffect'), e)),
            a.subscriptions && (r[a.namespace] = ln(a.subscriptions, a, c, n));
        }
        function f(e, t, n, r) {
          var a = c._store;
          delete a.asyncReducers[r],
            delete t[r],
            a.replaceReducer(e()),
            a.dispatch({ type: '@@dva/UPDATE' }),
            a.dispatch({ type: ''.concat(r, '/@@CANCEL_EFFECTS') }),
            dn(n, r),
            (c._models = c._models.filter(function(e) {
              return e.namespace !== r;
            }));
        }
        function p(e, t, n, r, a) {
          var o = c._store,
            u = a.namespace,
            i = vn(c._models, function(e) {
              return e.namespace === u;
            });
          ~i &&
            (o.dispatch({ type: ''.concat(u, '/@@CANCEL_EFFECTS') }),
            delete o.asyncReducers[u],
            delete t[u],
            dn(n, u),
            c._models.splice(i, 1)),
            c.model(a),
            o.dispatch({ type: '@@dva/UPDATE' });
        }
        function y() {
          var r = function(e, t) {
              e &&
                ('string' === typeof e && (e = new Error(e)),
                (e.preventDefault = function() {
                  e._dontReject = !0;
                }),
                o.apply('onError', function(e) {
                  throw new Error(e.stack || e);
                })(e, c._store.dispatch, t));
            },
            u = Dt(),
            y = fn(c);
          c._getSaga = nn.bind(null);
          var v = [],
            h = Object(l.a)({}, n),
            b = !0,
            m = !1,
            g = void 0;
          try {
            for (var O, w = c._models[Symbol.iterator](); !(b = (O = w.next()).done); b = !0) {
              var x = O.value;
              (h[x.namespace] = sn(x.reducers, x.state, o._handleActions)),
                x.effects && v.push(c._getSaga(x.effects, x, r, o.get('onEffect'), e));
            }
          } catch (K) {
            (m = !0), (g = K);
          } finally {
            try {
              b || null == w.return || w.return();
            } finally {
              if (m) throw g;
            }
          }
          var j = o.get('onReducer'),
            k = o.get('extraReducers');
          i()(
            Object.keys(k).every(function(e) {
              return !(e in h);
            }),
            '[app.start] extraReducers is conflict with other reducers, reducers list: '.concat(
              Object.keys(h).join(', ')
            )
          ),
            (c._store = en({
              reducers: q(),
              initialState: e.initialState || {},
              plugin: o,
              createOpts: t,
              sagaMiddleware: u,
              promiseMiddleware: y,
            }));
          var E = c._store;
          (E.runSaga = u.run), (E.asyncReducers = {});
          var P = o.get('onStateChange'),
            S = !0,
            T = !1,
            D = void 0;
          try {
            for (
              var _,
                C = function() {
                  var e = _.value;
                  E.subscribe(function() {
                    e(E.getState());
                  });
                },
                A = P[Symbol.iterator]();
              !(S = (_ = A.next()).done);
              S = !0
            )
              C();
          } catch (K) {
            (T = !0), (D = K);
          } finally {
            try {
              S || null == A.return || A.return();
            } finally {
              if (T) throw D;
            }
          }
          v.forEach(u.run), a(c);
          var F = {},
            N = !0,
            R = !1,
            I = void 0;
          try {
            for (var M, L = this._models[Symbol.iterator](); !(N = (M = L.next()).done); N = !0) {
              var U = M.value;
              U.subscriptions && (F[U.namespace] = ln(U.subscriptions, U, c, r));
            }
          } catch (K) {
            (R = !0), (I = K);
          } finally {
            try {
              N || null == L.return || L.return();
            } finally {
              if (R) throw I;
            }
          }
          function q() {
            return j(Object(d.c)(Object(l.a)({}, h, k, c._store ? c._store.asyncReducers : {})));
          }
          (c.model = s.bind(c, q, r, F)),
            (c.unmodel = f.bind(c, q, h, F)),
            (c.replaceModel = p.bind(c, q, h, F, r));
        }
      }
      var mn = c.a.createElement;
      function gn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var On = function(e) {
        return 'function' === typeof e;
      };
      t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = bn(e),
          n = t.start;
        return (t.router = r), (t.start = a), t;
        function r(e) {
          i()(On(e), '[app.router] router should be function, but got '.concat(typeof e)),
            (t._router = e);
        }
        function a(e) {
          xn(e) &&
            ((e = f.a.querySelector(e)), i()(e, '[app.start] container '.concat(e, ' not found'))),
            i()(!e || wn(e), '[app.start] container should be HTMLElement'),
            i()(t._router, '[app.start] router must be registered before app.start()'),
            t._store || n.call(t);
          var r = t._store;
          if (((t._getProvider = jn.bind(null, r, t)), !e)) return jn(r, this, this._router);
          kn(e, r, t, t._router), t._plugin.apply('onHmr')(kn.bind(null, e, r, t));
        }
      };
      function wn(e) {
        return 'object' === typeof e && null !== e && e.nodeType && e.nodeName;
      }
      function xn(e) {
        return 'string' === typeof e;
      }
      function jn(e, t, n) {
        return function(r) {
          return mn(
            p.a,
            { store: e },
            n(
              (function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? gn(Object(n), !0).forEach(function(t) {
                        Object(a.a)(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : gn(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      });
                }
                return e;
              })({ app: t }, r)
            )
          );
        };
      }
      function kn(e, t, r, a) {
        n('i8i4').render(c.a.createElement(jn(t, r, a)), e);
      }
    },
    qDJ8: function(e, t, n) {
      'use strict';
      e.exports = function(e) {
        return null != e && 'object' === typeof e && !1 === Array.isArray(e);
      };
    },
    'tL+A': function(e, t, n) {
      'use strict';
      n('VEUW'), n('wWjF');
    },
    vgmO: function(e, t, n) {
      (function(t) {
        var n;
        (n =
          'undefined' !== typeof window
            ? window
            : 'undefined' !== typeof t
            ? t
            : 'undefined' !== typeof self
            ? self
            : {}),
          (e.exports = n);
      }.call(this, n('yLpj')));
    },
    vpQ4: function(e, t, n) {
      'use strict';
      n.d(t, 'a', function() {
        return a;
      });
      var r = n('rePB');
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? Object(arguments[t]) : {},
            a = Object.keys(n);
          'function' === typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              })
            )),
            a.forEach(function(t) {
              Object(r.a)(e, t, n[t]);
            });
        }
        return e;
      }
    },
    wWjF: function(e, t, n) {},
  },
]);
