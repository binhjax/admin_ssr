_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [34],
  {
    '+QRC': function(e, t, a) {
      'use strict';
      var n = a('E9nw'),
        r = { 'text/plain': 'Text', 'text/html': 'Url', default: 'Text' };
      e.exports = function(e, t) {
        var a,
          o,
          c,
          l,
          i,
          u,
          s = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            ((c = n()),
            (l = document.createRange()),
            (i = document.getSelection()),
            ((u = document.createElement('span')).textContent = e),
            (u.style.all = 'unset'),
            (u.style.position = 'fixed'),
            (u.style.top = 0),
            (u.style.clip = 'rect(0, 0, 0, 0)'),
            (u.style.whiteSpace = 'pre'),
            (u.style.webkitUserSelect = 'text'),
            (u.style.MozUserSelect = 'text'),
            (u.style.msUserSelect = 'text'),
            (u.style.userSelect = 'text'),
            u.addEventListener('copy', function(n) {
              if ((n.stopPropagation(), t.format))
                if ((n.preventDefault(), 'undefined' === typeof n.clipboardData)) {
                  a && console.warn('unable to use e.clipboardData'),
                    a && console.warn('trying IE specific stuff'),
                    window.clipboardData.clearData();
                  var o = r[t.format] || r.default;
                  window.clipboardData.setData(o, e);
                } else n.clipboardData.clearData(), n.clipboardData.setData(t.format, e);
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(u),
            l.selectNodeContents(u),
            i.addRange(l),
            !document.execCommand('copy'))
          )
            throw new Error('copy command was unsuccessful');
          s = !0;
        } catch (d) {
          a && console.error('unable to copy using execCommand: ', d),
            a && console.warn('trying IE specific stuff');
          try {
            window.clipboardData.setData(t.format || 'text', e),
              t.onCopy && t.onCopy(window.clipboardData),
              (s = !0);
          } catch (d) {
            a && console.error('unable to copy using clipboardData: ', d),
              a && console.error('falling back to prompt'),
              (o = (function(e) {
                var t = (/mac os x/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl') + '+C';
                return e.replace(/#{\s*key\s*}/g, t);
              })('message' in t ? t.message : 'Copy to clipboard: #{key}, Enter')),
              window.prompt(o, e);
          }
        } finally {
          i && ('function' == typeof i.removeRange ? i.removeRange(l) : i.removeAllRanges()),
            u && document.body.removeChild(u),
            c();
        }
        return s;
      };
    },
    '+hxy': function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = n(a('q1tI')),
        i = r(a('6UMo')),
        u = r(a('TSYQ')),
        s = r(a('b6Tb')),
        d = a('vgIT'),
        f = function(e) {
          var t = function(t) {
            var a = t.getPrefixCls,
              n = e.prefixCls,
              r = e.className,
              d = e.active,
              f = a('skeleton', n),
              p = (0, i.default)(e, ['prefixCls']),
              v = (0, u.default)(
                f,
                ''.concat(f, '-element'),
                (0, c.default)({}, ''.concat(f, '-active'), d),
                r
              );
            return l.createElement(
              'div',
              { className: v },
              l.createElement(s.default, (0, o.default)({ prefixCls: ''.concat(f, '-button') }, p))
            );
          };
          return l.createElement(d.ConfigConsumer, null, t);
        };
      f.defaultProps = { size: 'default' };
      var p = f;
      t.default = p;
    },
    '0PSX': function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('q1tI')),
        c = n(a('ygfH')),
        l = n(a('O/y6')),
        i = function(e, t) {
          return o.createElement(l.default, Object.assign({}, e, { ref: t, icon: c.default }));
        };
      i.displayName = 'CheckOutlined';
      var u = o.forwardRef(i);
      t.default = u;
    },
    '1Ot+': function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = r(a('cDf5')),
        i = r(a('J4zp')),
        u = n(a('q1tI')),
        s = r(a('TSYQ')),
        d = a('vgIT'),
        f = r(a('5u0s')),
        p = a('KEtS'),
        v = n(a('hf16')),
        m = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        b =
          ((0, p.tuple)('top', 'middle', 'bottom', 'stretch'),
          (0, p.tuple)('start', 'end', 'center', 'space-around', 'space-between'),
          u.forwardRef(function(e, t) {
            var a,
              n = e.prefixCls,
              r = e.justify,
              p = e.align,
              b = e.className,
              y = e.style,
              h = e.children,
              g = e.gutter,
              E = void 0 === g ? 0 : g,
              O = e.wrap,
              x = m(e, [
                'prefixCls',
                'justify',
                'align',
                'className',
                'style',
                'children',
                'gutter',
                'wrap',
              ]),
              j = u.useContext(d.ConfigContext),
              C = j.getPrefixCls,
              N = j.direction,
              w = u.useState({ xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 }),
              T = (0, i.default)(w, 2),
              P = T[0],
              S = T[1],
              R = u.useRef(E);
            u.useEffect(function() {
              var e = v.default.subscribe(function(e) {
                var t = R.current || 0;
                ((!Array.isArray(t) && 'object' === (0, l.default)(t)) ||
                  (Array.isArray(t) &&
                    ('object' === (0, l.default)(t[0]) || 'object' === (0, l.default)(t[1])))) &&
                  S(e);
              });
              return function() {
                return v.default.unsubscribe(e);
              };
            }, []);
            var _ = C('row', n),
              I = (function() {
                var e = [0, 0];
                return (
                  (Array.isArray(E) ? E : [E, 0]).forEach(function(t, a) {
                    if ('object' === (0, l.default)(t))
                      for (var n = 0; n < v.responsiveArray.length; n++) {
                        var r = v.responsiveArray[n];
                        if (P[r] && void 0 !== t[r]) {
                          e[a] = t[r];
                          break;
                        }
                      }
                    else e[a] = t || 0;
                  }),
                  e
                );
              })(),
              M = (0, s.default)(
                _,
                ((a = {}),
                (0, c.default)(a, ''.concat(_, '-no-wrap'), !1 === O),
                (0, c.default)(a, ''.concat(_, '-').concat(r), r),
                (0, c.default)(a, ''.concat(_, '-').concat(p), p),
                (0, c.default)(a, ''.concat(_, '-rtl'), 'rtl' === N),
                a),
                b
              ),
              k = (0, o.default)(
                (0, o.default)(
                  (0, o.default)(
                    {},
                    I[0] > 0 ? { marginLeft: I[0] / -2, marginRight: I[0] / -2 } : {}
                  ),
                  I[1] > 0 ? { marginTop: I[1] / -2, marginBottom: I[1] / 2 } : {}
                ),
                y
              );
            return u.createElement(
              f.default.Provider,
              { value: { gutter: I, wrap: O } },
              u.createElement('div', (0, o.default)({}, x, { className: M, style: k, ref: t }), h)
            );
          }));
      b.displayName = 'Row';
      var y = b;
      t.default = y;
    },
    '1PJx': function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('q1tI')),
        c = n(a('XuBP')),
        l = n(a('O/y6')),
        i = function(e, t) {
          return o.createElement(l.default, Object.assign({}, e, { ref: t, icon: c.default }));
        };
      i.displayName = 'DownOutlined';
      var u = o.forwardRef(i);
      t.default = u;
    },
    '1yXF': function(e, t, a) {
      'use strict';
      a('VEUW'), a('dnqb');
    },
    '3PeW': function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('cDf5')),
        l = n(a('q1tI')),
        i = r(a('m4nH')),
        u = r(a('g5iu')),
        s = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        d = function(e) {
          var t = e.ellipsis,
            a = s(e, ['ellipsis']);
          return (
            (0, i.default)(
              'object' !== (0, c.default)(t),
              'Typography.Text',
              '`ellipsis` only supports boolean value.'
            ),
            l.createElement(u.default, (0, o.default)({}, a, { ellipsis: !!t, component: 'span' }))
          );
        };
      t.default = d;
    },
    '47MB': function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a('o0o1'),
        r = a.n(n),
        o = a('HaE+'),
        c = (a('mN36'), a('N9UN')),
        l = a.n(c),
        i = a('1OyB'),
        u = a('vuIU'),
        s = a('JX7q'),
        d = a('Ji7U'),
        f = a('md7G'),
        p = a('foSv'),
        v = a('rePB'),
        m = (a('NcKm'), a('lbd2'), a('q1tI')),
        b = a.n(m),
        y = a('2m8j'),
        h = a('wd/R'),
        g = a.n(h),
        E = a('XZXw'),
        O = (a('y/q7'), b.a.createElement);
      function x(e) {
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
            n = Object(p.a)(e);
          if (t) {
            var r = Object(p.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(f.a)(this, a);
        };
      }
      var j = (function(e) {
        Object(d.a)(a, e);
        var t = x(a);
        function a() {
          var e;
          Object(i.a)(this, a);
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r))),
            Object(v.a)(Object(s.a)(e), 'state', { currentTime: g()().format('HH:mm:ss') }),
            Object(v.a)(Object(s.a)(e), 'getHeaderContent', function() {
              var t = e.props.global.user.role_names,
                a = [];
              return (
                t &&
                  t.length > 0 &&
                  a.push(
                    O(
                      'span',
                      { key: 'role', style: { marginRight: 20 } },
                      '\u6240\u5c5e\u89d2\u8272\uff1a'.concat(t.join('/'))
                    )
                  ),
                a.length > 0 ? a : null
              );
            }),
            e
          );
        }
        return (
          Object(u.a)(
            a,
            [
              {
                key: 'componentDidMount',
                value: function() {
                  var e = this;
                  this.interval = setInterval(function() {
                    e.setState({ currentTime: g()().format('HH:mm:ss') });
                  }, 1e3);
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  clearInterval(this.interval);
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props.global.user,
                    t = this.state.currentTime;
                  return O(
                    E.a,
                    {
                      title: 'Hello\uff0c'.concat(
                        e.real_name,
                        '\uff0cI wish you happy everyday\uff01'
                      ),
                      breadcrumbList: [{ title: 'Homepage' }],
                      content: this.getHeaderContent(),
                      action: O('span', null, 'Current Time\uff1a', t),
                    },
                    O(l.a, null)
                  );
                },
              },
            ],
            [
              {
                key: 'getInitialProps',
                value: (function() {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var a, n, o, c;
                      return r.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = t.pathname),
                                (n = t.query),
                                (o = t.isServer),
                                (c = t.store),
                                (e.next = 3),
                                t.store.dispatch({ type: 'global/init' })
                              );
                            case 3:
                              return e.abrupt('return', {
                                pathname: a,
                                query: n,
                                isServer: o,
                                dvaStore: c,
                              });
                            case 4:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function(t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]
          ),
          a
        );
      })(m.PureComponent);
      t.default = Object(y.a)(function(e) {
        return { global: e.global };
      })(j);
    },
    '5u0s': function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = (0, a('q1tI').createContext)({});
      t.default = n;
    },
    '6cGi': function(e, t, a) {
      'use strict';
      a.d(t, 'a', function() {
        return o;
      });
      var n = a('ODXe'),
        r = a('q1tI');
      function o(e, t) {
        var a = t || {},
          o = a.defaultValue,
          c = a.value,
          l = a.onChange,
          i = a.postState,
          u = r.useState(function() {
            return void 0 !== c
              ? c
              : void 0 !== o
              ? 'function' === typeof o
                ? o()
                : o
              : 'function' === typeof e
              ? e()
              : e;
          }),
          s = Object(n.a)(u, 2),
          d = s[0],
          f = s[1],
          p = void 0 !== c ? c : d;
        i && (p = i(p));
        var v = r.useRef(!0);
        return (
          r.useEffect(
            function() {
              v.current ? (v.current = !1) : void 0 === c && f(c);
            },
            [c]
          ),
          [
            p,
            function(e) {
              f(e), p !== e && l && l(e, p);
            },
          ]
        );
      }
    },
    '9xET': function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = a('vhhj').Row;
      t.default = n;
    },
    B1zD: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('lSNA')),
        c = r(a('J4zp')),
        l = n(a('q1tI')),
        i = r(a('TSYQ')),
        u = r(a('Fcj4')),
        s = r(a('uEAt')),
        d = r(a('27j4')),
        f = function(e) {
          var t = e.prefixCls,
            a = e['aria-label'],
            n = e.className,
            r = e.style,
            f = e.direction,
            p = e.maxLength,
            v = e.autoSize,
            m = void 0 === v || v,
            b = e.value,
            y = e.onSave,
            h = e.onCancel,
            g = l.useRef(),
            E = l.useRef(!1),
            O = l.useRef(),
            x = l.useState(b),
            j = (0, c.default)(x, 2),
            C = j[0],
            N = j[1];
          l.useEffect(
            function() {
              N(b);
            },
            [b]
          ),
            l.useEffect(function() {
              if (g.current && g.current.resizableTextArea) {
                var e = g.current.resizableTextArea.textArea;
                e.focus();
                var t = e.value.length;
                e.setSelectionRange(t, t);
              }
            }, []);
          var w = function() {
              y(C.trim());
            },
            T = (0, i.default)(
              t,
              ''.concat(t, '-edit-content'),
              (0, o.default)({}, ''.concat(t, '-rtl'), 'rtl' === f),
              n
            );
          return l.createElement(
            'div',
            { className: T, style: r },
            l.createElement(d.default, {
              ref: g,
              maxLength: p,
              value: C,
              onChange: function(e) {
                var t = e.target;
                N(t.value.replace(/[\n\r]/g, ''));
              },
              onKeyDown: function(e) {
                var t = e.keyCode;
                E.current || (O.current = t);
              },
              onKeyUp: function(e) {
                var t = e.keyCode,
                  a = e.ctrlKey,
                  n = e.altKey,
                  r = e.metaKey,
                  o = e.shiftKey;
                O.current !== t ||
                  E.current ||
                  a ||
                  n ||
                  r ||
                  o ||
                  (t === u.default.ENTER ? w() : t === u.default.ESC && h());
              },
              onCompositionStart: function() {
                E.current = !0;
              },
              onCompositionEnd: function() {
                E.current = !1;
              },
              onBlur: function() {
                w();
              },
              'aria-label': a,
              autoSize: m,
            }),
            l.createElement(s.default, { className: ''.concat(t, '-edit-content-confirm') })
          );
        };
      t.default = f;
    },
    CRcw: function(e, t, a) {
      'use strict';
      var n;
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = (n = a('h7i7')) && n.__esModule ? n : { default: n };
      (t.default = r), (e.exports = r);
    },
    E9nw: function(e, t) {
      e.exports = function() {
        var e = document.getSelection();
        if (!e.rangeCount) return function() {};
        for (var t = document.activeElement, a = [], n = 0; n < e.rangeCount; n++)
          a.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case 'INPUT':
          case 'TEXTAREA':
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function() {
            'Caret' === e.type && e.removeAllRanges(),
              e.rangeCount ||
                a.forEach(function(t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    EXKy: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = n(a('q1tI')),
        l = r(a('m4nH')),
        i = r(a('g5iu')),
        u = a('KEtS'),
        s = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        d = (0, u.tupleNum)(1, 2, 3, 4, 5),
        f = function(e) {
          var t,
            a = e.level,
            n = void 0 === a ? 1 : a,
            r = s(e, ['level']);
          return (
            -1 !== d.indexOf(n)
              ? (t = 'h'.concat(n))
              : ((0, l.default)(
                  !1,
                  'Typography.Title',
                  'Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.'
                ),
                (t = 'h1')),
            c.createElement(i.default, (0, o.default)({}, r, { component: t }))
          );
        };
      t.default = f;
    },
    Eh2f: function(e, t, a) {
      'use strict';
      var n;
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = (n = a('0PSX')) && n.__esModule ? n : { default: n };
      (t.default = r), (e.exports = r);
    },
    Fcj4: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = {
          MAC_ENTER: 3,
          BACKSPACE: 8,
          TAB: 9,
          NUM_CENTER: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESC: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          PRINT_SCREEN: 44,
          INSERT: 45,
          DELETE: 46,
          ZERO: 48,
          ONE: 49,
          TWO: 50,
          THREE: 51,
          FOUR: 52,
          FIVE: 53,
          SIX: 54,
          SEVEN: 55,
          EIGHT: 56,
          NINE: 57,
          QUESTION_MARK: 63,
          A: 65,
          B: 66,
          C: 67,
          D: 68,
          E: 69,
          F: 70,
          G: 71,
          H: 72,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          M: 77,
          N: 78,
          O: 79,
          P: 80,
          Q: 81,
          R: 82,
          S: 83,
          T: 84,
          U: 85,
          V: 86,
          W: 87,
          X: 88,
          Y: 89,
          Z: 90,
          META: 91,
          WIN_KEY_RIGHT: 92,
          CONTEXT_MENU: 93,
          NUM_ZERO: 96,
          NUM_ONE: 97,
          NUM_TWO: 98,
          NUM_THREE: 99,
          NUM_FOUR: 100,
          NUM_FIVE: 101,
          NUM_SIX: 102,
          NUM_SEVEN: 103,
          NUM_EIGHT: 104,
          NUM_NINE: 105,
          NUM_MULTIPLY: 106,
          NUM_PLUS: 107,
          NUM_MINUS: 109,
          NUM_PERIOD: 110,
          NUM_DIVISION: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          NUMLOCK: 144,
          SEMICOLON: 186,
          DASH: 189,
          EQUALS: 187,
          COMMA: 188,
          PERIOD: 190,
          SLASH: 191,
          APOSTROPHE: 192,
          SINGLE_QUOTE: 222,
          OPEN_SQUARE_BRACKET: 219,
          BACKSLASH: 220,
          CLOSE_SQUARE_BRACKET: 221,
          WIN_KEY: 224,
          MAC_FF_META: 224,
          WIN_IME: 229,
          isTextModifyingKeyEvent: function(e) {
            var t = e.keyCode;
            if ((e.altKey && !e.ctrlKey) || e.metaKey || (t >= n.F1 && t <= n.F12)) return !1;
            switch (t) {
              case n.ALT:
              case n.CAPS_LOCK:
              case n.CONTEXT_MENU:
              case n.CTRL:
              case n.DOWN:
              case n.END:
              case n.ESC:
              case n.HOME:
              case n.INSERT:
              case n.LEFT:
              case n.MAC_FF_META:
              case n.META:
              case n.NUMLOCK:
              case n.NUM_CENTER:
              case n.PAGE_DOWN:
              case n.PAGE_UP:
              case n.PAUSE:
              case n.PRINT_SCREEN:
              case n.RIGHT:
              case n.SHIFT:
              case n.UP:
              case n.WIN_KEY:
              case n.WIN_KEY_RIGHT:
                return !1;
              default:
                return !0;
            }
          },
          isCharacterKey: function(e) {
            if (e >= n.ZERO && e <= n.NINE) return !0;
            if (e >= n.NUM_ZERO && e <= n.NUM_MULTIPLY) return !0;
            if (e >= n.A && e <= n.Z) return !0;
            if (-1 !== window.navigator.userAgent.indexOf('WebKit') && 0 === e) return !0;
            switch (e) {
              case n.SPACE:
              case n.QUESTION_MARK:
              case n.NUM_PLUS:
              case n.NUM_MINUS:
              case n.NUM_PERIOD:
              case n.NUM_DIVISION:
              case n.SEMICOLON:
              case n.DASH:
              case n.EQUALS:
              case n.COMMA:
              case n.PERIOD:
              case n.SLASH:
              case n.APOSTROPHE:
              case n.SINGLE_QUOTE:
              case n.OPEN_SQUARE_BRACKET:
              case n.BACKSLASH:
              case n.CLOSE_SQUARE_BRACKET:
                return !0;
              default:
                return !1;
            }
          },
        },
        r = n;
      t.default = r;
    },
    Fvdg: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('RIqP')),
        c = n(a('q1tI')),
        l = r(a('TSYQ')),
        i = function(e) {
          var t = function(t) {
              var a = e.width,
                n = e.rows,
                r = void 0 === n ? 2 : n;
              return Array.isArray(a) ? a[t] : r - 1 === t ? a : void 0;
            },
            a = e.prefixCls,
            n = e.className,
            r = e.style,
            i = e.rows,
            u = (0, o.default)(Array(i)).map(function(e, a) {
              return c.createElement('li', { key: a, style: { width: t(a) } });
            });
          return c.createElement('ul', { className: (0, l.default)(a, n), style: r }, u);
        };
      t.default = i;
    },
    H1tq: function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('q1tI')),
        c = n(a('TSYQ')),
        l = a('vgIT'),
        i = function(e) {
          var t = function(t) {
            var a = t.getPrefixCls,
              n = e.prefixCls,
              r = e.className,
              l = e.style,
              i = a('skeleton', n),
              u = (0, c.default)(i, ''.concat(i, '-element'), r);
            return o.createElement(
              'div',
              { className: u },
              o.createElement(
                'div',
                { className: (0, c.default)(''.concat(i, '-image'), r), style: l },
                o.createElement(
                  'svg',
                  {
                    viewBox: '0 0 1098 1024',
                    xmlns: 'http://www.w3.org/2000/svg',
                    className: ''.concat(i, '-image-svg'),
                  },
                  o.createElement('path', {
                    d:
                      'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
                    className: ''.concat(i, '-image-path'),
                  })
                )
              )
            );
          };
          return o.createElement(l.ConfigConsumer, null, t);
        };
      t.default = i;
    },
    H3WJ: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = r(a('RIqP')),
        i = n(a('q1tI')),
        u = r(a('TSYQ')),
        s = r(a('0r0h')),
        d = r(a('wzuP')),
        f = r(a('thPT')),
        p = r(a('Jv8k')),
        v = a('vgIT'),
        m = r(a('m4nH')),
        b = a('vCXI'),
        y = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        };
      function h(e, t, a, n) {
        var r = a.indexOf(e) === a.length - 1,
          o = (function(e, t) {
            if (!e.breadcrumbName) return null;
            var a = Object.keys(t).join('|');
            return e.breadcrumbName.replace(new RegExp(':('.concat(a, ')'), 'g'), function(e, a) {
              return t[a] || e;
            });
          })(e, t);
        return r
          ? i.createElement('span', null, o)
          : i.createElement('a', { href: '#/'.concat(n.join('/')) }, o);
      }
      var g = function(e, t) {
          return (
            (e = (e || '').replace(/^\//, '')),
            Object.keys(t).forEach(function(a) {
              e = e.replace(':'.concat(a), t[a]);
            }),
            e
          );
        },
        E = function(e) {
          var t,
            a = e.prefixCls,
            n = e.separator,
            r = void 0 === n ? '/' : n,
            f = e.style,
            E = e.className,
            O = e.routes,
            x = e.children,
            j = e.itemRender,
            C = void 0 === j ? h : j,
            N = e.params,
            w = void 0 === N ? {} : N,
            T = y(e, [
              'prefixCls',
              'separator',
              'style',
              'className',
              'routes',
              'children',
              'itemRender',
              'params',
            ]),
            P = i.useContext(v.ConfigContext),
            S = P.getPrefixCls,
            R = P.direction,
            _ = S('breadcrumb', a);
          if (O && O.length > 0) {
            var I = [];
            t = O.map(function(e) {
              var t,
                a = g(e.path, w);
              return (
                a && I.push(a),
                e.children &&
                  e.children.length &&
                  (t = i.createElement(
                    p.default,
                    null,
                    e.children.map(function(e) {
                      return i.createElement(
                        p.default.Item,
                        { key: e.path || e.breadcrumbName },
                        C(
                          e,
                          w,
                          O,
                          (function(e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
                              a = arguments.length > 2 ? arguments[2] : void 0,
                              n = (0, l.default)(e),
                              r = g(t, a);
                            return r && n.push(r), n;
                          })(I, e.path, w)
                        )
                      );
                    })
                  )),
                i.createElement(
                  d.default,
                  { overlay: t, separator: r, key: a || e.breadcrumbName },
                  C(e, w, O, I)
                )
              );
            });
          } else
            x &&
              (t = (0, s.default)(x).map(function(e, t) {
                return e
                  ? ((0, m.default)(
                      e.type &&
                        (!0 === e.type.__ANT_BREADCRUMB_ITEM ||
                          !0 === e.type.__ANT_BREADCRUMB_SEPARATOR),
                      'Breadcrumb',
                      "Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"
                    ),
                    (0, b.cloneElement)(e, { separator: r, key: t }))
                  : e;
              }));
          var M = (0, u.default)(_, (0, c.default)({}, ''.concat(_, '-rtl'), 'rtl' === R), E);
          return i.createElement('div', (0, o.default)({ className: M, style: f }, T), t);
        };
      (E.Item = d.default), (E.Separator = f.default);
      var O = E;
      t.default = O;
    },
    I9IY: function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('q1tI')),
        c = n(a('ZxNd')),
        l = n(a('O/y6')),
        i = function(e, t) {
          return o.createElement(l.default, Object.assign({}, e, { ref: t, icon: c.default }));
        };
      i.displayName = 'EditOutlined';
      var u = o.forwardRef(i);
      t.default = u;
    },
    In08: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = n(a('q1tI')),
        i = r(a('6UMo')),
        u = r(a('TSYQ')),
        s = a('vgIT'),
        d = r(a('b6Tb')),
        f = function(e) {
          var t = function(t) {
            var a = t.getPrefixCls,
              n = e.prefixCls,
              r = e.className,
              s = e.active,
              f = a('skeleton', n),
              p = (0, i.default)(e, ['prefixCls']),
              v = (0, u.default)(
                f,
                ''.concat(f, '-element'),
                (0, c.default)({}, ''.concat(f, '-active'), s),
                r
              );
            return l.createElement(
              'div',
              { className: v },
              l.createElement(d.default, (0, o.default)({ prefixCls: ''.concat(f, '-avatar') }, p))
            );
          };
          return l.createElement(s.ConfigConsumer, null, t);
        };
      f.defaultProps = { size: 'default', shape: 'circle' };
      var p = f;
      t.default = p;
    },
    'J+05': function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = n(a('q1tI')),
        l = r(a('g5iu')),
        i = function(e) {
          return c.createElement(l.default, (0, o.default)({}, e, { component: 'div' }));
        };
      t.default = i;
    },
    'JT+3': function(e, t, a) {
      'use strict';
      a('VEUW'), a('64Tc'), a('PFYH'), a('G851');
    },
    N8Ln: function(e, t, a) {
      'use strict';
      a('VEUW'), a('Wfs9');
    },
    N9UN: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('lSNA')),
        c = r(a('pVnL')),
        l = n(a('q1tI')),
        i = r(a('TSYQ')),
        u = r(a('6UMo')),
        s = r(a('ZF+8')),
        d = r(a('Svjr')),
        f = r(a('j7zX')),
        p = r(a('9xET')),
        v = r(a('ZPTe')),
        m = a('vgIT'),
        b = r(a('fVhf')),
        y = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        };
      var h = function(e) {
        var t,
          a,
          n,
          r = l.useContext(m.ConfigContext),
          d = r.getPrefixCls,
          h = r.direction,
          g = l.useContext(b.default),
          E = e.prefixCls,
          O = e.className,
          x = e.extra,
          j = e.headStyle,
          C = void 0 === j ? {} : j,
          N = e.bodyStyle,
          w = void 0 === N ? {} : N,
          T = e.title,
          P = e.loading,
          S = e.bordered,
          R = void 0 === S || S,
          _ = e.size,
          I = e.type,
          M = e.cover,
          k = e.actions,
          A = e.tabList,
          q = e.children,
          L = e.activeTabKey,
          U = e.defaultActiveTabKey,
          B = e.tabBarExtraContent,
          D = e.hoverable,
          H = e.tabProps,
          K = void 0 === H ? {} : H,
          F = y(e, [
            'prefixCls',
            'className',
            'extra',
            'headStyle',
            'bodyStyle',
            'title',
            'loading',
            'bordered',
            'size',
            'type',
            'cover',
            'actions',
            'tabList',
            'children',
            'activeTabKey',
            'defaultActiveTabKey',
            'tabBarExtraContent',
            'hoverable',
            'tabProps',
          ]),
          z = d('card', E),
          V = 0 === w.padding || '0px' === w.padding ? { padding: 24 } : void 0,
          W = l.createElement('div', { className: ''.concat(z, '-loading-block') }),
          Y = l.createElement(
            'div',
            { className: ''.concat(z, '-loading-content'), style: V },
            l.createElement(p.default, { gutter: 8 }, l.createElement(v.default, { span: 22 }, W)),
            l.createElement(
              p.default,
              { gutter: 8 },
              l.createElement(v.default, { span: 8 }, W),
              l.createElement(v.default, { span: 15 }, W)
            ),
            l.createElement(
              p.default,
              { gutter: 8 },
              l.createElement(v.default, { span: 6 }, W),
              l.createElement(v.default, { span: 18 }, W)
            ),
            l.createElement(
              p.default,
              { gutter: 8 },
              l.createElement(v.default, { span: 13 }, W),
              l.createElement(v.default, { span: 9 }, W)
            ),
            l.createElement(
              p.default,
              { gutter: 8 },
              l.createElement(v.default, { span: 4 }, W),
              l.createElement(v.default, { span: 3 }, W),
              l.createElement(v.default, { span: 16 }, W)
            )
          ),
          Q = void 0 !== L,
          G = (0, c.default)(
            (0, c.default)({}, K),
            ((t = {}),
            (0, o.default)(t, Q ? 'activeKey' : 'defaultActiveKey', Q ? L : U),
            (0, o.default)(t, 'tabBarExtraContent', B),
            t)
          ),
          X =
            A && A.length
              ? l.createElement(
                  f.default,
                  (0, c.default)({ size: 'large' }, G, {
                    className: ''.concat(z, '-head-tabs'),
                    onChange: function(t) {
                      e.onTabChange && e.onTabChange(t);
                    },
                  }),
                  A.map(function(e) {
                    return l.createElement(f.default.TabPane, {
                      tab: e.tab,
                      disabled: e.disabled,
                      key: e.key,
                    });
                  })
                )
              : null;
        (T || x || X) &&
          (n = l.createElement(
            'div',
            { className: ''.concat(z, '-head'), style: C },
            l.createElement(
              'div',
              { className: ''.concat(z, '-head-wrapper') },
              T && l.createElement('div', { className: ''.concat(z, '-head-title') }, T),
              x && l.createElement('div', { className: ''.concat(z, '-extra') }, x)
            ),
            X
          ));
        var J = M ? l.createElement('div', { className: ''.concat(z, '-cover') }, M) : null,
          Z = l.createElement('div', { className: ''.concat(z, '-body'), style: w }, P ? Y : q),
          $ =
            k && k.length
              ? l.createElement(
                  'ul',
                  { className: ''.concat(z, '-actions') },
                  (function(e) {
                    return e.map(function(t, a) {
                      return l.createElement(
                        'li',
                        {
                          style: { width: ''.concat(100 / e.length, '%') },
                          key: 'action-'.concat(a),
                        },
                        l.createElement('span', null, t)
                      );
                    });
                  })(k)
                )
              : null,
          ee = (0, u.default)(F, ['onTabChange']),
          te = _ || g,
          ae = (0, i.default)(
            z,
            ((a = {}),
            (0, o.default)(a, ''.concat(z, '-loading'), P),
            (0, o.default)(a, ''.concat(z, '-bordered'), R),
            (0, o.default)(a, ''.concat(z, '-hoverable'), D),
            (0, o.default)(
              a,
              ''.concat(z, '-contain-grid'),
              (function() {
                var t;
                return (
                  l.Children.forEach(e.children, function(e) {
                    e && e.type && e.type === s.default && (t = !0);
                  }),
                  t
                );
              })()
            ),
            (0, o.default)(a, ''.concat(z, '-contain-tabs'), A && A.length),
            (0, o.default)(a, ''.concat(z, '-').concat(te), te),
            (0, o.default)(a, ''.concat(z, '-type-').concat(I), !!I),
            (0, o.default)(a, ''.concat(z, '-rtl'), 'rtl' === h),
            a),
            O
          );
        return l.createElement('div', (0, c.default)({}, ee, { className: ae }), n, J, Z, $);
      };
      (h.Grid = s.default), (h.Meta = d.default);
      var g = h;
      t.default = g;
    },
    NcKm: function(e, t, a) {
      'use strict';
      a('VEUW'), a('8nl2'), a('93XW'), a('cUip');
    },
    'Oox/': function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o,
        c = a('i8i4'),
        l = r(a('q1tI')),
        i = n(a('0r0h')),
        u = { padding: 0, margin: 0, display: 'inline', lineHeight: 'inherit' };
      function s(e) {
        if (!e) return 0;
        var t = e.match(/^\d*(\.\d*)?/);
        return t ? Number(t[0]) : 0;
      }
      t.default = function(e, t, a, n, r) {
        o ||
          ((o = document.createElement('div')).setAttribute('aria-hidden', 'true'),
          document.body.appendChild(o));
        var d,
          f = t.rows,
          p = t.suffix,
          v = void 0 === p ? '' : p,
          m = window.getComputedStyle(e),
          b =
            ((d = m),
            Array.prototype.slice
              .apply(d)
              .map(function(e) {
                return ''.concat(e, ': ').concat(d.getPropertyValue(e), ';');
              })
              .join('')),
          y = s(m.lineHeight),
          h = Math.round(y * (f + 1) + s(m.paddingTop) + s(m.paddingBottom));
        o.setAttribute('style', b),
          (o.style.position = 'fixed'),
          (o.style.left = '0'),
          (o.style.height = 'auto'),
          (o.style.minHeight = 'auto'),
          (o.style.maxHeight = 'auto'),
          (o.style.top = '-999999px'),
          (o.style.zIndex = '-1000'),
          (o.style.textOverflow = 'clip'),
          (o.style.whiteSpace = 'normal'),
          (o.style.webkitLineClamp = 'none');
        var g = (function(e) {
          var t = [];
          return (
            e.forEach(function(e) {
              var a = t[t.length - 1];
              'string' === typeof e && 'string' === typeof a ? (t[t.length - 1] += e) : t.push(e);
            }),
            t
          );
        })((0, i.default)(a));
        function E() {
          return o.offsetHeight < h;
        }
        if (
          ((0, c.render)(
            l.createElement(
              'div',
              { style: u },
              l.createElement('span', { style: u }, g, v),
              l.createElement('span', { style: u }, n)
            ),
            o
          ),
          E())
        )
          return (0, c.unmountComponentAtNode)(o), { content: a, text: o.innerHTML, ellipsis: !1 };
        var O = Array.prototype.slice
            .apply(o.childNodes[0].childNodes[0].cloneNode(!0).childNodes)
            .filter(function(e) {
              return 8 !== e.nodeType;
            }),
          x = Array.prototype.slice.apply(o.childNodes[0].childNodes[1].cloneNode(!0).childNodes);
        (0, c.unmountComponentAtNode)(o);
        var j = [];
        o.innerHTML = '';
        var C = document.createElement('span');
        o.appendChild(C);
        var N = document.createTextNode(r + v);
        function w(e) {
          C.insertBefore(e, N);
        }
        function T(e, t) {
          var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t.length,
            r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
            o = Math.floor((a + n) / 2),
            c = t.slice(0, o);
          if (((e.textContent = c), a >= n - 1))
            for (var l = n; l >= a; l -= 1) {
              var i = t.slice(0, l);
              if (((e.textContent = i), E() || !i))
                return l === t.length
                  ? { finished: !1, reactNode: t }
                  : { finished: !0, reactNode: i };
            }
          return E() ? T(e, t, o, n, o) : T(e, t, a, o, r);
        }
        function P(e, t) {
          var a = e.nodeType;
          if (1 === a)
            return (
              w(e),
              E()
                ? { finished: !1, reactNode: g[t] }
                : (C.removeChild(e), { finished: !0, reactNode: null })
            );
          if (3 === a) {
            var n = e.textContent || '',
              r = document.createTextNode(n);
            return w(r), T(r, n);
          }
          return { finished: !1, reactNode: null };
        }
        return (
          C.appendChild(N),
          x.forEach(function(e) {
            o.appendChild(e);
          }),
          O.some(function(e, t) {
            var a = P(e, t),
              n = a.finished,
              r = a.reactNode;
            return r && j.push(r), n;
          }),
          { content: j, text: o.innerHTML, ellipsis: !0 }
        );
      };
    },
    PFYH: function(e, t, a) {
      'use strict';
      a('VEUW'), a('Svq7'), a('93XW');
    },
    QxHS: function(e, t, a) {
      'use strict';
      var n;
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = (n = a('I9IY')) && n.__esModule ? n : { default: n };
      (t.default = r), (e.exports = r);
    },
    SRve: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
            {
              tag: 'path',
              attrs: { d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' },
            },
            {
              tag: 'path',
              attrs: { d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z' },
            },
          ],
        },
        name: 'plus',
        theme: 'outlined',
      };
    },
    Svjr: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = n(a('q1tI')),
        l = r(a('TSYQ')),
        i = a('vgIT'),
        u = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        s = function(e) {
          return c.createElement(i.ConfigConsumer, null, function(t) {
            var a = t.getPrefixCls,
              n = e.prefixCls,
              r = e.className,
              i = e.avatar,
              s = e.title,
              d = e.description,
              f = u(e, ['prefixCls', 'className', 'avatar', 'title', 'description']),
              p = a('card', n),
              v = (0, l.default)(''.concat(p, '-meta'), r),
              m = i ? c.createElement('div', { className: ''.concat(p, '-meta-avatar') }, i) : null,
              b = s ? c.createElement('div', { className: ''.concat(p, '-meta-title') }, s) : null,
              y = d
                ? c.createElement('div', { className: ''.concat(p, '-meta-description') }, d)
                : null,
              h =
                b || y
                  ? c.createElement('div', { className: ''.concat(p, '-meta-detail') }, b, y)
                  : null;
            return c.createElement('div', (0, o.default)({}, f, { className: v }), m, h);
          });
        };
      t.default = s;
    },
    TUfB: function(e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/dashboard',
        function() {
          return a('47MB');
        },
      ]);
    },
    Tsn0: function(e, t, a) {
      'use strict';
      var n;
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = (n = a('gGsP')) && n.__esModule ? n : { default: n };
      (t.default = r), (e.exports = r);
    },
    UclK: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('lSNA')),
        c = r(a('pVnL')),
        l = r(a('cDf5')),
        i = n(a('q1tI')),
        u = r(a('TSYQ')),
        s = r(a('w/wx')),
        d = r(a('Fvdg')),
        f = a('vgIT'),
        p = r(a('b6Tb')),
        v = r(a('In08')),
        m = r(a('+hxy')),
        b = r(a('ulqC')),
        y = r(a('H1tq'));
      function h(e) {
        return e && 'object' === (0, l.default)(e) ? e : {};
      }
      var g = function(e) {
        var t = function(t) {
          var a = t.getPrefixCls,
            n = t.direction,
            r = e.prefixCls,
            l = e.loading,
            f = e.className,
            v = e.children,
            m = e.avatar,
            b = e.title,
            y = e.paragraph,
            g = e.active,
            E = e.round,
            O = a('skeleton', r);
          if (l || !('loading' in e)) {
            var x,
              j,
              C,
              N = !!m,
              w = !!b,
              T = !!y;
            if (N) {
              var P = (0, c.default)(
                (0, c.default)(
                  { prefixCls: ''.concat(O, '-avatar') },
                  (function(e, t) {
                    return e && !t
                      ? { size: 'large', shape: 'square' }
                      : { size: 'large', shape: 'circle' };
                  })(w, T)
                ),
                h(m)
              );
              j = i.createElement(
                'div',
                { className: ''.concat(O, '-header') },
                i.createElement(p.default, P)
              );
            }
            if (w || T) {
              var S, R;
              if (w) {
                var _ = (0, c.default)(
                  (0, c.default)(
                    { prefixCls: ''.concat(O, '-title') },
                    (function(e, t) {
                      return !e && t ? { width: '38%' } : e && t ? { width: '50%' } : {};
                    })(N, T)
                  ),
                  h(b)
                );
                S = i.createElement(s.default, _);
              }
              if (T) {
                var I = (0, c.default)(
                  (0, c.default)(
                    { prefixCls: ''.concat(O, '-paragraph') },
                    (function(e, t) {
                      var a = {};
                      return (e && t) || (a.width = '61%'), (a.rows = !e && t ? 3 : 2), a;
                    })(N, w)
                  ),
                  h(y)
                );
                R = i.createElement(d.default, I);
              }
              C = i.createElement('div', { className: ''.concat(O, '-content') }, S, R);
            }
            var M = (0, u.default)(
              O,
              ((x = {}),
              (0, o.default)(x, ''.concat(O, '-with-avatar'), N),
              (0, o.default)(x, ''.concat(O, '-active'), g),
              (0, o.default)(x, ''.concat(O, '-rtl'), 'rtl' === n),
              (0, o.default)(x, ''.concat(O, '-round'), E),
              x),
              f
            );
            return i.createElement('div', { className: M }, j, C);
          }
          return v;
        };
        return i.createElement(f.ConfigConsumer, null, t);
      };
      (g.defaultProps = { avatar: !1, title: !0, paragraph: !0 }),
        (g.Button = m.default),
        (g.Avatar = v.default),
        (g.Input = b.default),
        (g.Image = y.default);
      var E = g;
      t.default = E;
    },
    Ved0: function(e, t, a) {
      'use strict';
      var n;
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = (n = a('1PJx')) && n.__esModule ? n : { default: n };
      (t.default = r), (e.exports = r);
    },
    XZXw: function(e, t, a) {
      'use strict';
      var n = a('wx14'),
        r = a('Ff2n'),
        o = a('q1tI'),
        c = a.n(o),
        l = a('YFqc'),
        i = (a('N8Ln'), a('wM0b')),
        u = a.n(i),
        s = a('1OyB'),
        d = a('vuIU'),
        f = a('JX7q'),
        p = a('Ji7U'),
        v = a('md7G'),
        m = a('foSv'),
        b = a('rePB'),
        y = (a('Z8Mf'), a('j7zX')),
        h = a.n(y),
        g = a('TSYQ'),
        E = a.n(g),
        O = a('tbSg'),
        x = a.n(O),
        j = (a('JT+3'), a('Y/VR')),
        C = a.n(j),
        N = a('vRGJ'),
        w = a.n(N);
      function T(e) {
        var t = e.split('/').filter(function(e) {
          return e;
        });
        return t.map(function(e, a) {
          return '/'.concat(t.slice(0, a + 1).join('/'));
        });
      }
      var P = c.a.createElement;
      function S(e) {
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
            n = Object(m.a)(e);
          if (t) {
            var r = Object(m.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(v.a)(this, a);
        };
      }
      var R = function(e, t) {
          var a = e[t];
          return (
            a ||
              Object.keys(e).forEach(function(n) {
                w()(n).test(t) && (a = e[n]);
              }),
            a || {}
          );
        },
        _ = (function(e) {
          Object(p.a)(a, e);
          var t = S(a);
          function a() {
            var e;
            Object(s.a)(this, a);
            for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(b.a)(Object(f.a)(e), 'state', { breadcrumb: null }),
              Object(b.a)(Object(f.a)(e), 'getBreadcrumbDom', function() {
                var t = e.conversionBreadcrumbList();
                e.setState({ breadcrumb: t });
              }),
              Object(b.a)(Object(f.a)(e), 'getBreadcrumbProps', function() {
                var t = e.props;
                return {
                  routes: t.routes,
                  params: t.params,
                  routerLocation: t.location,
                  breadcrumbNameMap: t.breadcrumbNameMap,
                };
              }),
              Object(b.a)(Object(f.a)(e), 'conversionFromProps', function() {
                var t = e.props,
                  a = t.breadcrumbList,
                  n = t.breadcrumbSeparator,
                  r = t.itemRender,
                  c = t.linkElement,
                  l = void 0 === c ? 'a' : c;
                return P(
                  C.a,
                  { className: x.a.breadcrumb, separator: n },
                  a.map(function(e) {
                    var t = r ? r(e) : e.title;
                    return P(
                      C.a.Item,
                      { key: e.title },
                      e.href
                        ? Object(o.createElement)(
                            l,
                            Object(b.a)({}, 'a' === l ? 'href' : 'to', e.href),
                            t
                          )
                        : t
                    );
                  })
                );
              }),
              Object(b.a)(Object(f.a)(e), 'conversionFromLocation', function(t, a) {
                var n = e.props,
                  r = n.breadcrumbSeparator,
                  c = n.home,
                  l = n.itemRender,
                  i = n.linkElement,
                  u = void 0 === i ? 'a' : i,
                  s = T(t.pathname),
                  d = s.map(function(e, t) {
                    var n = R(a, e);
                    if (n.inherited) return null;
                    var r = t !== s.length - 1 && n.component,
                      c = l ? l(n) : n.name;
                    return n.name && !n.hideInBreadcrumb
                      ? P(
                          C.a.Item,
                          { key: e },
                          Object(o.createElement)(
                            r ? u : 'span',
                            Object(b.a)({}, 'a' === u ? 'href' : 'to', e),
                            c
                          )
                        )
                      : null;
                  });
                return (
                  d.unshift(
                    P(
                      C.a.Item,
                      { key: 'home' },
                      Object(o.createElement)(
                        u,
                        Object(b.a)({}, 'a' === u ? 'href' : 'to', '/'),
                        c || 'Home'
                      )
                    )
                  ),
                  P(C.a, { className: x.a.breadcrumb, separator: r }, d)
                );
              }),
              Object(b.a)(Object(f.a)(e), 'conversionBreadcrumbList', function() {
                var t = e.props,
                  a = t.breadcrumbList,
                  n = t.breadcrumbSeparator,
                  r = e.getBreadcrumbProps(),
                  o = r.routes,
                  c = r.params,
                  l = r.routerLocation,
                  i = r.breadcrumbNameMap;
                return a && a.length
                  ? e.conversionFromProps()
                  : o && c
                  ? P(C.a, {
                      className: x.a.breadcrumb,
                      routes: o.filter(function(e) {
                        return e.breadcrumbName;
                      }),
                      params: c,
                      itemRender: e.itemRender,
                      separator: n,
                    })
                  : l && l.pathname
                  ? e.conversionFromLocation(l, i)
                  : null;
              }),
              Object(b.a)(Object(f.a)(e), 'itemRender', function(t, a, n, r) {
                var c = e.props.linkElement,
                  l = void 0 === c ? 'a' : c;
                return n.indexOf(t) === n.length - 1 || !t.component
                  ? P('span', null, t.breadcrumbName)
                  : Object(o.createElement)(
                      l,
                      { href: r.join('/') || '/', to: r.join('/') || '/' },
                      t.breadcrumbName
                    );
              }),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.getBreadcrumbDom();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this.props.location;
                  t &&
                    e.location &&
                    (e.location.pathname !== t.pathname && this.getBreadcrumbDom());
                },
              },
              {
                key: 'render',
                value: function() {
                  return this.state.breadcrumb;
                },
              },
            ]),
            a
          );
        })(o.PureComponent),
        I = c.a.createElement;
      function M(e) {
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
            n = Object(m.a)(e);
          if (t) {
            var r = Object(m.a)(this).constructor;
            a = Reflect.construct(n, arguments, r);
          } else a = n.apply(this, arguments);
          return Object(v.a)(this, a);
        };
      }
      var k = h.a.TabPane,
        A = (function(e) {
          Object(p.a)(a, e);
          var t = M(a);
          function a() {
            var e;
            Object(s.a)(this, a);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            return (
              (e = t.call.apply(t, [this].concat(r))),
              Object(b.a)(Object(f.a)(e), 'onChange', function(t) {
                var a = e.props.onTabChange;
                a && a(t);
              }),
              e
            );
          }
          return (
            Object(d.a)(a, [
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.title,
                    a = e.logo,
                    r = e.action,
                    o = e.content,
                    c = e.extraContent,
                    l = e.tabList,
                    i = e.className,
                    s = e.tabActiveKey,
                    d = e.tabDefaultActiveKey,
                    f = e.tabBarExtraContent,
                    p = e.loading,
                    v = void 0 !== p && p,
                    m = e.wide,
                    b = void 0 !== m && m,
                    y = e.hiddenBreadcrumb,
                    g = void 0 !== y && y,
                    O = E()(x.a.pageHeader, i),
                    j = {};
                  return (
                    void 0 !== d && (j.defaultActiveKey = d),
                    void 0 !== s && (j.activeKey = s),
                    I(
                      'div',
                      { className: O },
                      I(
                        'div',
                        { className: b ? x.a.wide : '' },
                        I(
                          u.a,
                          {
                            loading: v,
                            title: !1,
                            active: !0,
                            paragraph: { rows: 3 },
                            avatar: { size: 'large', shape: 'circle' },
                          },
                          g ? null : I(_, this.props),
                          I(
                            'div',
                            { className: x.a.detail },
                            a && I('div', { className: x.a.logo }, a),
                            I(
                              'div',
                              { className: x.a.main },
                              I(
                                'div',
                                { className: x.a.row },
                                t && I('h1', { className: x.a.title }, t),
                                r && I('div', { className: x.a.action }, r)
                              ),
                              I(
                                'div',
                                { className: x.a.row },
                                o && I('div', { className: x.a.content }, o),
                                c && I('div', { className: x.a.extraContent }, c)
                              )
                            )
                          ),
                          l && l.length
                            ? I(
                                h.a,
                                Object(n.a)({ className: x.a.tabs }, j, {
                                  onChange: this.onChange,
                                  tabBarExtraContent: f,
                                }),
                                l.map(function(e) {
                                  return I(k, { tab: e.tab, key: e.key });
                                })
                              )
                            : null
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(o.PureComponent),
        q = a('fxZG'),
        L = a.n(q),
        U = c.a.createElement;
      c.a.useLayoutEffect = c.a.useEffect;
      t.a = function(e) {
        var t = e.children,
          a = e.wrapperClassName,
          o = e.top,
          c = Object(r.a)(e, ['children', 'wrapperClassName', 'top']);
        return U(
          'div',
          { style: { margin: '-24px -24px 0' }, className: a },
          o,
          U(A, Object(n.a)({}, c, { linkElement: l.Link })),
          t ? U('div', { className: L.a.content }, t) : null
        );
      };
    },
    XuBP: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d:
                  'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
              },
            },
          ],
        },
        name: 'down',
        theme: 'outlined',
      };
    },
    'Y/VR': function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = n(a('H3WJ')).default;
      t.default = r;
    },
    Y7j8: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('lSNA')),
        c = r(a('pVnL')),
        l = r(a('cDf5')),
        i = n(a('q1tI')),
        u = r(a('TSYQ')),
        s = r(a('5u0s')),
        d = a('vgIT'),
        f = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        };
      var p = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        v = i.forwardRef(function(e, t) {
          var a,
            n = i.useContext(d.ConfigContext),
            r = n.getPrefixCls,
            v = n.direction,
            m = i.useContext(s.default),
            b = m.gutter,
            y = m.wrap,
            h = e.prefixCls,
            g = e.span,
            E = e.order,
            O = e.offset,
            x = e.push,
            j = e.pull,
            C = e.className,
            N = e.children,
            w = e.flex,
            T = e.style,
            P = f(e, [
              'prefixCls',
              'span',
              'order',
              'offset',
              'push',
              'pull',
              'className',
              'children',
              'flex',
              'style',
            ]),
            S = r('col', h),
            R = {};
          p.forEach(function(t) {
            var a,
              n = {},
              r = e[t];
            'number' === typeof r ? (n.span = r) : 'object' === (0, l.default)(r) && (n = r || {}),
              delete P[t],
              (R = (0, c.default)(
                (0, c.default)({}, R),
                ((a = {}),
                (0, o.default)(
                  a,
                  ''
                    .concat(S, '-')
                    .concat(t, '-')
                    .concat(n.span),
                  void 0 !== n.span
                ),
                (0, o.default)(
                  a,
                  ''
                    .concat(S, '-')
                    .concat(t, '-order-')
                    .concat(n.order),
                  n.order || 0 === n.order
                ),
                (0, o.default)(
                  a,
                  ''
                    .concat(S, '-')
                    .concat(t, '-offset-')
                    .concat(n.offset),
                  n.offset || 0 === n.offset
                ),
                (0, o.default)(
                  a,
                  ''
                    .concat(S, '-')
                    .concat(t, '-push-')
                    .concat(n.push),
                  n.push || 0 === n.push
                ),
                (0, o.default)(
                  a,
                  ''
                    .concat(S, '-')
                    .concat(t, '-pull-')
                    .concat(n.pull),
                  n.pull || 0 === n.pull
                ),
                (0, o.default)(a, ''.concat(S, '-rtl'), 'rtl' === v),
                a)
              ));
          });
          var _ = (0, u.default)(
              S,
              ((a = {}),
              (0, o.default)(a, ''.concat(S, '-').concat(g), void 0 !== g),
              (0, o.default)(a, ''.concat(S, '-order-').concat(E), E),
              (0, o.default)(a, ''.concat(S, '-offset-').concat(O), O),
              (0, o.default)(a, ''.concat(S, '-push-').concat(x), x),
              (0, o.default)(a, ''.concat(S, '-pull-').concat(j), j),
              a),
              C,
              R
            ),
            I = (0, c.default)({}, T);
          return (
            b &&
              (I = (0, c.default)(
                (0, c.default)(
                  (0, c.default)(
                    {},
                    b[0] > 0 ? { paddingLeft: b[0] / 2, paddingRight: b[0] / 2 } : {}
                  ),
                  b[1] > 0 ? { paddingTop: b[1] / 2, paddingBottom: b[1] / 2 } : {}
                ),
                I
              )),
            w &&
              ((I.flex = (function(e) {
                return 'number' === typeof e
                  ? ''.concat(e, ' ').concat(e, ' auto')
                  : /^\d+(\.\d+)?(px|em|rem|%)$/.test(e)
                  ? '0 0 '.concat(e)
                  : e;
              })(w)),
              'auto' !== w || !1 !== y || I.minWidth || (I.minWidth = 0)),
            i.createElement('div', (0, c.default)({}, P, { style: I, className: _, ref: t }), N)
          );
        });
      v.displayName = 'Col';
      var m = v;
      t.default = m;
    },
    YCuv: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d:
                  'M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z',
              },
            },
          ],
        },
        name: 'enter',
        theme: 'outlined',
      };
    },
    Z8Mf: function(e, t, a) {
      'use strict';
      a('VEUW'), a('a6CB');
    },
    'ZF+8': function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = n(a('q1tI')),
        i = r(a('TSYQ')),
        u = a('vgIT'),
        s = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        d = function(e) {
          var t = e.prefixCls,
            a = e.className,
            n = e.hoverable,
            r = void 0 === n || n,
            d = s(e, ['prefixCls', 'className', 'hoverable']);
          return l.createElement(u.ConfigConsumer, null, function(e) {
            var n = (0, e.getPrefixCls)('card', t),
              u = (0, i.default)(
                ''.concat(n, '-grid'),
                a,
                (0, c.default)({}, ''.concat(n, '-grid-hoverable'), r)
              );
            return l.createElement('div', (0, o.default)({}, d, { className: u }));
          });
        };
      t.default = d;
    },
    ZPTe: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = a('vhhj').Col;
      t.default = n;
    },
    ZxNd: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d:
                  'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
              },
            },
          ],
        },
        name: 'edit',
        theme: 'outlined',
      };
    },
    b6Tb: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = n(a('q1tI')),
        i = r(a('TSYQ')),
        u = function(e) {
          var t,
            a,
            n = e.prefixCls,
            r = e.className,
            u = e.style,
            s = e.size,
            d = e.shape,
            f = (0, i.default)(
              ((t = {}),
              (0, c.default)(t, ''.concat(n, '-lg'), 'large' === s),
              (0, c.default)(t, ''.concat(n, '-sm'), 'small' === s),
              t)
            ),
            p = (0, i.default)(
              ((a = {}),
              (0, c.default)(a, ''.concat(n, '-circle'), 'circle' === d),
              (0, c.default)(a, ''.concat(n, '-square'), 'square' === d),
              (0, c.default)(a, ''.concat(n, '-round'), 'round' === d),
              a)
            ),
            v =
              'number' === typeof s ? { width: s, height: s, lineHeight: ''.concat(s, 'px') } : {};
          return l.createElement('span', {
            className: (0, i.default)(n, f, p, r),
            style: (0, o.default)((0, o.default)({}, v), u),
          });
        };
      t.default = u;
    },
    cBho: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.isFlexSupported = t.isStyleSupport = void 0);
      var n = function(e) {
        if ('undefined' !== typeof window && window.document && window.document.documentElement) {
          var t = Array.isArray(e) ? e : [e],
            a = window.document.documentElement;
          return t.some(function(e) {
            return e in a.style;
          });
        }
        return !1;
      };
      t.isStyleSupport = n;
      var r = n(['flex', 'webkitFlex', 'Flex', 'msFlex']);
      t.isFlexSupported = r;
    },
    dnqb: function(e, t, a) {},
    fv9D: function(e, t, a) {
      'use strict';
      a('VEUW'), a('1yXF');
    },
    g5iu: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('lSNA')),
        c = r(a('RIqP')),
        l = r(a('cDf5')),
        i = r(a('pVnL')),
        u = r(a('lwsE')),
        s = r(a('W8MJ')),
        d = r(a('7W2i')),
        f = r(a('LQ03')),
        p = n(a('q1tI')),
        v = r(a('TSYQ')),
        m = r(a('0r0h')),
        b = r(a('+QRC')),
        y = r(a('6UMo')),
        h = r(a('QxHS')),
        g = r(a('Eh2f')),
        E = r(a('Tsn0')),
        O = r(a('t23M')),
        x = a('vgIT'),
        j = r(a('GG9M')),
        C = r(a('m4nH')),
        N = r(a('gr4H')),
        w = r(a('i6dq')),
        T = a('cBho'),
        P = r(a('d1El')),
        S = r(a('zcfU')),
        R = r(a('B1zD')),
        _ = r(a('Oox/')),
        I = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        M = (0, T.isStyleSupport)('webkitLineClamp'),
        k = (0, T.isStyleSupport)('textOverflow');
      var A = (function(e) {
        (0, d.default)(a, e);
        var t = (0, f.default)(a);
        function a() {
          var e;
          return (
            (0, u.default)(this, a),
            ((e = t.apply(this, arguments)).contentRef = p.createRef()),
            (e.state = {
              edit: !1,
              copied: !1,
              ellipsisText: '',
              ellipsisContent: null,
              isEllipsis: !1,
              expanded: !1,
              clientRendered: !1,
            }),
            (e.getPrefixCls = function() {
              var t = e.props.prefixCls;
              return (0, e.context.getPrefixCls)('typography', t);
            }),
            (e.onExpandClick = function(t) {
              var a = e.getEllipsis().onExpand;
              e.setState({ expanded: !0 }), a && a(t);
            }),
            (e.onEditClick = function() {
              e.triggerEdit(!0);
            }),
            (e.onEditChange = function(t) {
              var a = e.getEditable().onChange;
              a && a(t), e.triggerEdit(!1);
            }),
            (e.onEditCancel = function() {
              e.triggerEdit(!1);
            }),
            (e.onCopyClick = function(t) {
              t.preventDefault();
              var a = e.props,
                n = a.children,
                r = a.copyable,
                o = (0, i.default)({}, 'object' === (0, l.default)(r) ? r : null);
              void 0 === o.text && (o.text = String(n)),
                (0, b.default)(o.text || ''),
                e.setState({ copied: !0 }, function() {
                  o.onCopy && o.onCopy(),
                    (e.copyId = window.setTimeout(function() {
                      e.setState({ copied: !1 });
                    }, 3e3));
                });
            }),
            (e.setEditRef = function(t) {
              e.editIcon = t;
            }),
            (e.triggerEdit = function(t) {
              var a = e.getEditable().onStart;
              t && a && a(),
                e.setState({ edit: t }, function() {
                  !t && e.editIcon && e.editIcon.focus();
                });
            }),
            (e.resizeOnNextFrame = function() {
              w.default.cancel(e.rafId),
                (e.rafId = (0, w.default)(function() {
                  e.syncEllipsis();
                }));
            }),
            e
          );
        }
        return (
          (0, s.default)(
            a,
            [
              {
                key: 'componentDidMount',
                value: function() {
                  this.setState({ clientRendered: !0 }), this.resizeOnNextFrame();
                },
              },
              {
                key: 'componentDidUpdate',
                value: function(e) {
                  var t = this.props.children,
                    a = this.getEllipsis(),
                    n = this.getEllipsis(e);
                  (t === e.children && a.rows === n.rows) || this.resizeOnNextFrame();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  window.clearTimeout(this.copyId), w.default.cancel(this.rafId);
                },
              },
              {
                key: 'getEditable',
                value: function(e) {
                  var t = this.state.edit,
                    a = (e || this.props).editable;
                  return a
                    ? (0, i.default)({ editing: t }, 'object' === (0, l.default)(a) ? a : null)
                    : { editing: t };
                },
              },
              {
                key: 'getEllipsis',
                value: function(e) {
                  var t = (e || this.props).ellipsis;
                  return t
                    ? (0, i.default)(
                        { rows: 1, expandable: !1 },
                        'object' === (0, l.default)(t) ? t : null
                      )
                    : {};
                },
              },
              {
                key: 'canUseCSSEllipsis',
                value: function() {
                  var e = this.state.clientRendered,
                    t = this.props,
                    a = t.editable,
                    n = t.copyable,
                    r = this.getEllipsis(),
                    o = r.rows,
                    c = r.expandable,
                    l = r.suffix,
                    i = r.onEllipsis;
                  return !l && (!(a || n || c || !e || i) && (1 === o ? k : M));
                },
              },
              {
                key: 'syncEllipsis',
                value: function() {
                  var e = this.state,
                    t = e.ellipsisText,
                    a = e.isEllipsis,
                    n = e.expanded,
                    r = this.getEllipsis(),
                    o = r.rows,
                    c = r.suffix,
                    l = r.onEllipsis,
                    i = this.props.children;
                  if (o && !(o < 0) && this.contentRef.current && !n && !this.canUseCSSEllipsis()) {
                    (0, C.default)(
                      (0, m.default)(i).every(function(e) {
                        return 'string' === typeof e;
                      }),
                      'Typography',
                      '`ellipsis` should use string as children only.'
                    );
                    var u = (0, _.default)(
                        this.contentRef.current,
                        { rows: o, suffix: c },
                        i,
                        this.renderOperations(!0),
                        '...'
                      ),
                      s = u.content,
                      d = u.text,
                      f = u.ellipsis;
                    (t === d && a === f) ||
                      (this.setState({ ellipsisText: d, ellipsisContent: s, isEllipsis: f }),
                      a !== f && l && l(f));
                  }
                },
              },
              {
                key: 'renderExpand',
                value: function(e) {
                  var t,
                    a = this.getEllipsis(),
                    n = a.expandable,
                    r = a.symbol,
                    o = this.state,
                    c = o.expanded,
                    l = o.isEllipsis;
                  return n && (e || (!c && l))
                    ? ((t = r || this.expandStr),
                      p.createElement(
                        'a',
                        {
                          key: 'expand',
                          className: ''.concat(this.getPrefixCls(), '-expand'),
                          onClick: this.onExpandClick,
                          'aria-label': this.expandStr,
                        },
                        t
                      ))
                    : null;
                },
              },
              {
                key: 'renderEdit',
                value: function() {
                  var e = this.props.editable;
                  if (e) {
                    var t = e.icon,
                      a = e.tooltip,
                      n = (0, m.default)(a)[0] || this.editStr,
                      r = 'string' === typeof n ? n : '';
                    return p.createElement(
                      P.default,
                      { key: 'edit', title: !1 === a ? '' : n },
                      p.createElement(
                        N.default,
                        {
                          ref: this.setEditRef,
                          className: ''.concat(this.getPrefixCls(), '-edit'),
                          onClick: this.onEditClick,
                          'aria-label': r,
                        },
                        t || p.createElement(h.default, { role: 'button' })
                      )
                    );
                  }
                },
              },
              {
                key: 'renderCopy',
                value: function() {
                  var e = this.state.copied,
                    t = this.props.copyable;
                  if (t) {
                    var a = this.getPrefixCls(),
                      n = t.tooltips,
                      r = (0, m.default)(n);
                    0 === r.length && (r = [this.copyStr, this.copiedStr]);
                    var o = e ? r[1] : r[0],
                      c = 'string' === typeof o ? o : '',
                      l = (0, m.default)(t.icon);
                    return p.createElement(
                      P.default,
                      { key: 'copy', title: !1 === n ? '' : o },
                      p.createElement(
                        N.default,
                        {
                          className: (0, v.default)(
                            ''.concat(a, '-copy'),
                            e && ''.concat(a, '-copy-success')
                          ),
                          onClick: this.onCopyClick,
                          'aria-label': c,
                        },
                        e
                          ? l[1] || p.createElement(g.default, null)
                          : l[0] || p.createElement(E.default, null)
                      )
                    );
                  }
                },
              },
              {
                key: 'renderEditInput',
                value: function() {
                  var e = this.props,
                    t = e.children,
                    a = e.className,
                    n = e.style,
                    r = this.context.direction,
                    o = this.getEditable(),
                    c = o.maxLength,
                    l = o.autoSize;
                  return p.createElement(R.default, {
                    value: 'string' === typeof t ? t : '',
                    onSave: this.onEditChange,
                    onCancel: this.onEditCancel,
                    prefixCls: this.getPrefixCls(),
                    className: a,
                    style: n,
                    direction: r,
                    maxLength: c,
                    autoSize: l,
                  });
                },
              },
              {
                key: 'renderOperations',
                value: function(e) {
                  return [this.renderExpand(e), this.renderEdit(), this.renderCopy()].filter(
                    function(e) {
                      return e;
                    }
                  );
                },
              },
              {
                key: 'renderContent',
                value: function() {
                  var e = this,
                    t = this.state,
                    a = t.ellipsisContent,
                    n = t.isEllipsis,
                    r = t.expanded,
                    l = this.props,
                    u = l.component,
                    s = l.children,
                    d = l.className,
                    f = l.type,
                    m = l.disabled,
                    b = l.style,
                    h = I(l, ['component', 'children', 'className', 'type', 'disabled', 'style']),
                    g = this.context.direction,
                    E = this.getEllipsis(),
                    C = E.rows,
                    N = E.suffix,
                    w = this.getPrefixCls(),
                    T = (0, y.default)(
                      h,
                      [
                        'prefixCls',
                        'editable',
                        'copyable',
                        'ellipsis',
                        'mark',
                        'code',
                        'delete',
                        'underline',
                        'strong',
                        'keyboard',
                      ].concat((0, c.default)(x.configConsumerProps))
                    ),
                    P = this.canUseCSSEllipsis(),
                    R = 1 === C && P,
                    _ = C && C > 1 && P,
                    M = s;
                  if (C && n && !r && !P) {
                    var k = h.title,
                      A = k || '';
                    k || ('string' !== typeof s && 'number' !== typeof s) || (A = String(s)),
                      (A = null === A || void 0 === A ? void 0 : A.slice(String(a || '').length)),
                      (M = p.createElement(
                        p.Fragment,
                        null,
                        a,
                        p.createElement('span', { title: A, 'aria-hidden': 'true' }, '...'),
                        N
                      ));
                  } else M = p.createElement(p.Fragment, null, s, N);
                  return (
                    (M = (function(e, t) {
                      var a = e.mark,
                        n = e.code,
                        r = e.underline,
                        o = e.delete,
                        c = e.strong,
                        l = e.keyboard,
                        i = t;
                      function u(e, t) {
                        e && (i = p.createElement(t, {}, i));
                      }
                      return (
                        u(c, 'strong'),
                        u(r, 'u'),
                        u(o, 'del'),
                        u(n, 'code'),
                        u(a, 'mark'),
                        u(l, 'kbd'),
                        i
                      );
                    })(this.props, M)),
                    p.createElement(j.default, { componentName: 'Text' }, function(t) {
                      var a,
                        n = t.edit,
                        r = t.copy,
                        c = t.copied,
                        l = t.expand;
                      return (
                        (e.editStr = n),
                        (e.copyStr = r),
                        (e.copiedStr = c),
                        (e.expandStr = l),
                        p.createElement(
                          O.default,
                          { onResize: e.resizeOnNextFrame, disabled: !C },
                          p.createElement(
                            S.default,
                            (0, i.default)(
                              {
                                className: (0, v.default)(
                                  ((a = {}),
                                  (0, o.default)(a, ''.concat(w, '-').concat(f), f),
                                  (0, o.default)(a, ''.concat(w, '-disabled'), m),
                                  (0, o.default)(a, ''.concat(w, '-ellipsis'), C),
                                  (0, o.default)(a, ''.concat(w, '-ellipsis-single-line'), R),
                                  (0, o.default)(a, ''.concat(w, '-ellipsis-multiple-line'), _),
                                  a),
                                  d
                                ),
                                style: (0, i.default)((0, i.default)({}, b), {
                                  WebkitLineClamp: _ ? C : null,
                                }),
                                component: u,
                                ref: e.contentRef,
                                direction: g,
                              },
                              T
                            ),
                            M,
                            e.renderOperations()
                          )
                        )
                      );
                    })
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  return this.getEditable().editing ? this.renderEditInput() : this.renderContent();
                },
              },
            ],
            [
              {
                key: 'getDerivedStateFromProps',
                value: function(e) {
                  var t = e.children,
                    a = e.editable;
                  return (
                    (0, C.default)(
                      !a || 'string' === typeof t,
                      'Typography',
                      'When `editable` is enabled, the `children` should use string.'
                    ),
                    {}
                  );
                },
              },
            ]
          ),
          a
        );
      })(p.Component);
      (A.contextType = x.ConfigContext), (A.defaultProps = { children: '' });
      var q = A;
      t.default = q;
    },
    gGsP: function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('q1tI')),
        c = n(a('m546')),
        l = n(a('O/y6')),
        i = function(e, t) {
          return o.createElement(l.default, Object.assign({}, e, { ref: t, icon: c.default }));
        };
      i.displayName = 'CopyOutlined';
      var u = o.forwardRef(i);
      t.default = u;
    },
    gr4H: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = n(a('q1tI')),
        l = r(a('Fcj4')),
        i = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        u = {
          border: 0,
          background: 'transparent',
          padding: 0,
          lineHeight: 'inherit',
          display: 'inline-block',
        },
        s = c.forwardRef(function(e, t) {
          var a = e.style,
            n = e.noStyle,
            r = e.disabled,
            s = i(e, ['style', 'noStyle', 'disabled']),
            d = {};
          return (
            n || (d = (0, o.default)({}, u)),
            r && (d.pointerEvents = 'none'),
            (d = (0, o.default)((0, o.default)({}, d), a)),
            c.createElement(
              'div',
              (0, o.default)({ role: 'button', tabIndex: 0, ref: t }, s, {
                onKeyDown: function(e) {
                  e.keyCode === l.default.ENTER && e.preventDefault();
                },
                onKeyUp: function(t) {
                  var a = t.keyCode,
                    n = e.onClick;
                  a === l.default.ENTER && n && n();
                },
                style: d,
              })
            )
          );
        });
      t.default = s;
    },
    h7i7: function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('q1tI')),
        c = n(a('SRve')),
        l = n(a('O/y6')),
        i = function(e, t) {
          return o.createElement(l.default, Object.assign({}, e, { ref: t, icon: c.default }));
        };
      i.displayName = 'PlusOutlined';
      var u = o.forwardRef(i);
      t.default = u;
    },
    hr7U: function(e, t, a) {
      'use strict';
      a('VEUW'), a('1yXF');
    },
    j7zX: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = n(a('q1tI')),
        i = n(a('k3GJ')),
        u = r(a('TSYQ')),
        s = r(a('dw78')),
        d = r(a('CRcw')),
        f = r(a('1S0Z')),
        p = r(a('m4nH')),
        v = a('vgIT'),
        m = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        };
      function b(e) {
        var t,
          a,
          n = e.type,
          r = e.className,
          b = e.size,
          y = e.onEdit,
          h = e.hideAdd,
          g = e.centered,
          E = e.addIcon,
          O = m(e, ['type', 'className', 'size', 'onEdit', 'hideAdd', 'centered', 'addIcon']),
          x = O.prefixCls,
          j = l.useContext(v.ConfigContext),
          C = j.getPrefixCls,
          N = j.direction,
          w = C('tabs', x);
        return (
          'editable-card' === n &&
            (a = {
              onEdit: function(e, t) {
                var a = t.key,
                  n = t.event;
                null === y || void 0 === y || y('add' === e ? n : a, e);
              },
              removeIcon: l.createElement(f.default, null),
              addIcon: E || l.createElement(d.default, null),
              showAdd: !0 !== h,
            }),
          (0, p.default)(
            !('onPrevClick' in O) && !('onNextClick' in O),
            'Tabs',
            '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.'
          ),
          l.createElement(
            i.default,
            (0, o.default)({ direction: N }, O, {
              moreTransitionName: 'slide-up',
              className: (0, u.default)(
                ((t = {}),
                (0, c.default)(t, ''.concat(w, '-').concat(b), b),
                (0, c.default)(t, ''.concat(w, '-card'), ['card', 'editable-card'].includes(n)),
                (0, c.default)(t, ''.concat(w, '-editable-card'), 'editable-card' === n),
                (0, c.default)(t, ''.concat(w, '-centered'), g),
                t),
                r
              ),
              editable: a,
              moreIcon: l.createElement(s.default, null),
              prefixCls: w,
            })
          )
        );
      }
      b.TabPane = i.TabPane;
      var y = b;
      t.default = y;
    },
    k3GJ: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'TabPane', function() {
          return L;
        });
      var n = a('wx14'),
        r = a('rePB'),
        o = a('ODXe'),
        c = a('U8pU'),
        l = a('Ff2n'),
        i = a('VTBJ'),
        u = a('q1tI'),
        s = a('TSYQ'),
        d = a.n(s),
        f = a('Zm9Q'),
        p = a('5Z9U'),
        v = a('6cGi'),
        m = a('KQm4'),
        b = a('wgJM'),
        y = a('t23M');
      function h(e) {
        var t = Object(u.useRef)(),
          a = Object(u.useRef)(!1);
        return (
          Object(u.useEffect)(function() {
            return function() {
              (a.current = !0), b.a.cancel(t.current);
            };
          }, []),
          function() {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
            a.current ||
              (b.a.cancel(t.current),
              (t.current = Object(b.a)(function() {
                e.apply(void 0, r);
              })));
          }
        );
      }
      var g = a('4IlW');
      function E(e, t) {
        var a,
          n = e.prefixCls,
          o = e.id,
          c = e.active,
          l = e.rtl,
          i = e.tab,
          s = i.key,
          f = i.tab,
          p = i.disabled,
          v = i.closeIcon,
          m = e.tabBarGutter,
          b = e.tabPosition,
          y = e.closable,
          h = e.renderWrapper,
          E = e.removeAriaLabel,
          O = e.editable,
          x = e.onClick,
          j = e.onRemove,
          C = e.onFocus,
          N = ''.concat(n, '-tab');
        u.useEffect(function() {
          return j;
        }, []);
        var w = {};
        'top' === b || 'bottom' === b
          ? (w[l ? 'marginLeft' : 'marginRight'] = m)
          : (w.marginBottom = m);
        var T = O && !1 !== y && !p;
        function P(e) {
          p || x(e);
        }
        var S = u.createElement(
          'div',
          {
            key: s,
            ref: t,
            className: d()(
              N,
              ((a = {}),
              Object(r.a)(a, ''.concat(N, '-with-remove'), T),
              Object(r.a)(a, ''.concat(N, '-active'), c),
              Object(r.a)(a, ''.concat(N, '-disabled'), p),
              a)
            ),
            style: w,
            onClick: P,
          },
          u.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': c,
              id: o && ''.concat(o, '-tab-').concat(s),
              className: ''.concat(N, '-btn'),
              'aria-controls': o && ''.concat(o, '-panel-').concat(s),
              'aria-disabled': p,
              tabIndex: p ? null : 0,
              onClick: function(e) {
                e.stopPropagation(), P(e);
              },
              onKeyDown: function(e) {
                [g.a.SPACE, g.a.ENTER].includes(e.which) && (e.preventDefault(), P(e));
              },
              onFocus: C,
            },
            f
          ),
          T &&
            u.createElement(
              'button',
              {
                type: 'button',
                'aria-label': E || 'remove',
                tabIndex: 0,
                className: ''.concat(N, '-remove'),
                onClick: function(e) {
                  var t;
                  e.stopPropagation(),
                    (t = e).preventDefault(),
                    t.stopPropagation(),
                    O.onEdit('remove', { key: s, event: t });
                },
              },
              v || O.removeIcon || '\xd7'
            )
        );
        return h && (S = h(S)), S;
      }
      var O = u.forwardRef(E),
        x = { width: 0, height: 0, left: 0, top: 0 };
      var j = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      var C = a('1j5w'),
        N = a('eDIo');
      function w(e, t) {
        var a = e.prefixCls,
          n = e.editable,
          r = e.locale,
          o = e.style;
        return n && !1 !== n.showAdd
          ? u.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(a, '-nav-add'),
                style: o,
                'aria-label': (null === r || void 0 === r ? void 0 : r.addAriaLabel) || 'Add tab',
                onClick: function(e) {
                  n.onEdit('add', { event: e });
                },
              },
              n.addIcon || '+'
            )
          : null;
      }
      var T = u.forwardRef(w);
      function P(e, t) {
        var a = e.prefixCls,
          n = e.id,
          c = e.tabs,
          l = e.locale,
          i = e.mobile,
          s = e.moreIcon,
          f = void 0 === s ? 'More' : s,
          p = e.moreTransitionName,
          v = e.style,
          m = e.className,
          b = e.editable,
          y = e.tabBarGutter,
          h = e.rtl,
          E = e.onTabClick,
          O = Object(u.useState)(!1),
          x = Object(o.a)(O, 2),
          j = x[0],
          w = x[1],
          P = Object(u.useState)(null),
          S = Object(o.a)(P, 2),
          R = S[0],
          _ = S[1],
          I = ''.concat(n, '-more-popup'),
          M = ''.concat(a, '-dropdown'),
          k = null !== R ? ''.concat(I, '-').concat(R) : null,
          A = null === l || void 0 === l ? void 0 : l.dropdownAriaLabel,
          q = u.createElement(
            C.default,
            {
              onClick: function(e) {
                var t = e.key,
                  a = e.domEvent;
                E(t, a), w(!1);
              },
              id: I,
              tabIndex: -1,
              role: 'listbox',
              'aria-activedescendant': k,
              selectedKeys: [R],
              'aria-label': void 0 !== A ? A : 'expanded dropdown',
            },
            c.map(function(e) {
              return u.createElement(
                C.MenuItem,
                {
                  key: e.key,
                  id: ''.concat(I, '-').concat(e.key),
                  role: 'option',
                  'aria-controls': n && ''.concat(n, '-panel-').concat(e.key),
                  disabled: e.disabled,
                },
                e.tab
              );
            })
          );
        function L(e) {
          for (
            var t = c.filter(function(e) {
                return !e.disabled;
              }),
              a =
                t.findIndex(function(e) {
                  return e.key === R;
                }) || 0,
              n = t.length,
              r = 0;
            r < n;
            r += 1
          ) {
            var o = t[(a = (a + e + n) % n)];
            if (!o.disabled) return void _(o.key);
          }
        }
        Object(u.useEffect)(
          function() {
            var e = document.getElementById(k);
            e && e.scrollIntoView && e.scrollIntoView(!1);
          },
          [R]
        ),
          Object(u.useEffect)(
            function() {
              j || _(null);
            },
            [j]
          );
        var U = Object(r.a)({}, h ? 'marginLeft' : 'marginRight', y);
        c.length || ((U.visibility = 'hidden'), (U.order = 1));
        var B = d()(Object(r.a)({}, ''.concat(M, '-rtl'), h)),
          D = i
            ? null
            : u.createElement(
                N.default,
                {
                  prefixCls: M,
                  overlay: q,
                  trigger: ['hover'],
                  visible: j,
                  transitionName: p,
                  onVisibleChange: w,
                  overlayClassName: B,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                u.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(a, '-nav-more'),
                    style: U,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': I,
                    id: ''.concat(n, '-more'),
                    'aria-expanded': j,
                    onKeyDown: function(e) {
                      var t = e.which;
                      if (j)
                        switch (t) {
                          case g.a.UP:
                            L(-1), e.preventDefault();
                            break;
                          case g.a.DOWN:
                            L(1), e.preventDefault();
                            break;
                          case g.a.ESC:
                            w(!1);
                            break;
                          case g.a.SPACE:
                          case g.a.ENTER:
                            null !== R && E(R, e);
                        }
                      else
                        [g.a.DOWN, g.a.SPACE, g.a.ENTER].includes(t) && (w(!0), e.preventDefault());
                    },
                  },
                  f
                )
              );
        return u.createElement(
          'div',
          { className: d()(''.concat(a, '-nav-operations'), m), style: v, ref: t },
          D,
          u.createElement(T, { prefixCls: a, locale: l, editable: b })
        );
      }
      var S = u.forwardRef(P),
        R = Object(u.createContext)(null),
        _ = Math.pow(0.995, 20);
      function I(e, t) {
        var a = u.useRef(e),
          n = u.useState({}),
          r = Object(o.a)(n, 2)[1];
        return [
          a.current,
          function(e) {
            var n = 'function' === typeof e ? e(a.current) : e;
            n !== a.current && t(n, a.current), (a.current = n), r({});
          },
        ];
      }
      var M = function(e) {
        var t,
          a = e.position,
          n = e.prefixCls,
          r = e.extra;
        if (!r) return null;
        var o = r;
        return (
          'right' === a && (t = o.right || (!o.left && o) || null),
          'left' === a && (t = o.left || null),
          t ? u.createElement('div', { className: ''.concat(n, '-extra-content') }, t) : null
        );
      };
      function k(e, t) {
        var a,
          c = u.useContext(R),
          l = c.prefixCls,
          s = c.tabs,
          f = e.className,
          p = e.style,
          v = e.id,
          g = e.animated,
          E = e.activeKey,
          C = e.rtl,
          N = e.extra,
          w = e.editable,
          P = e.locale,
          k = e.tabPosition,
          A = e.tabBarGutter,
          q = e.children,
          L = e.onTabClick,
          U = e.onTabScroll,
          B = Object(u.useRef)(),
          D = Object(u.useRef)(),
          H = Object(u.useRef)(),
          K = Object(u.useRef)(),
          F = (function() {
            var e = Object(u.useRef)(new Map());
            return [
              function(t) {
                return e.current.has(t) || e.current.set(t, u.createRef()), e.current.get(t);
              },
              function(t) {
                e.current.delete(t);
              },
            ];
          })(),
          z = Object(o.a)(F, 2),
          V = z[0],
          W = z[1],
          Y = 'top' === k || 'bottom' === k,
          Q = I(0, function(e, t) {
            Y && U && U({ direction: e > t ? 'left' : 'right' });
          }),
          G = Object(o.a)(Q, 2),
          X = G[0],
          J = G[1],
          Z = I(0, function(e, t) {
            !Y && U && U({ direction: e > t ? 'top' : 'bottom' });
          }),
          $ = Object(o.a)(Z, 2),
          ee = $[0],
          te = $[1],
          ae = Object(u.useState)(0),
          ne = Object(o.a)(ae, 2),
          re = ne[0],
          oe = ne[1],
          ce = Object(u.useState)(0),
          le = Object(o.a)(ce, 2),
          ie = le[0],
          ue = le[1],
          se = Object(u.useState)(0),
          de = Object(o.a)(se, 2),
          fe = de[0],
          pe = de[1],
          ve = Object(u.useState)(0),
          me = Object(o.a)(ve, 2),
          be = me[0],
          ye = me[1],
          he = Object(u.useState)(null),
          ge = Object(o.a)(he, 2),
          Ee = ge[0],
          Oe = ge[1],
          xe = Object(u.useState)(null),
          je = Object(o.a)(xe, 2),
          Ce = je[0],
          Ne = je[1],
          we = Object(u.useState)(0),
          Te = Object(o.a)(we, 2),
          Pe = Te[0],
          Se = Te[1],
          Re = Object(u.useState)(0),
          _e = Object(o.a)(Re, 2),
          Ie = _e[0],
          Me = _e[1],
          ke = (function(e) {
            var t = Object(u.useRef)([]),
              a = Object(u.useState)({}),
              n = Object(o.a)(a, 2)[1],
              r = Object(u.useRef)('function' === typeof e ? e() : e),
              c = h(function() {
                var e = r.current;
                t.current.forEach(function(t) {
                  e = t(e);
                }),
                  (t.current = []),
                  (r.current = e),
                  n({});
              });
            return [
              r.current,
              function(e) {
                t.current.push(e), c();
              },
            ];
          })(new Map()),
          Ae = Object(o.a)(ke, 2),
          qe = Ae[0],
          Le = Ae[1],
          Ue = (function(e, t, a) {
            return Object(u.useMemo)(
              function() {
                for (
                  var a,
                    n = new Map(),
                    r = t.get(null === (a = e[0]) || void 0 === a ? void 0 : a.key) || x,
                    o = r.left + r.width,
                    c = 0;
                  c < e.length;
                  c += 1
                ) {
                  var l,
                    u = e[c].key,
                    s = t.get(u);
                  s || (s = t.get(null === (l = e[c - 1]) || void 0 === l ? void 0 : l.key) || x);
                  var d = n.get(u) || Object(i.a)({}, s);
                  (d.right = o - d.left - d.width), n.set(u, d);
                }
                return n;
              },
              [
                e
                  .map(function(e) {
                    return e.key;
                  })
                  .join('_'),
                t,
                a,
              ]
            );
          })(s, qe, re),
          Be = ''.concat(l, '-nav-operations-hidden'),
          De = 0,
          He = 0;
        function Ke(e) {
          return e < De ? De : e > He ? He : e;
        }
        Y
          ? C
            ? ((De = 0), (He = Math.max(0, re - Ee)))
            : ((De = Math.min(0, Ee - re)), (He = 0))
          : ((De = Math.min(0, Ce - ie)), (He = 0));
        var Fe = Object(u.useRef)(),
          ze = Object(u.useState)(),
          Ve = Object(o.a)(ze, 2),
          We = Ve[0],
          Ye = Ve[1];
        function Qe() {
          Ye(Date.now());
        }
        function Ge() {
          window.clearTimeout(Fe.current);
        }
        function Xe() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            t = Ue.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (Y) {
            var a = X;
            C
              ? t.right < X
                ? (a = t.right)
                : t.right + t.width > X + Ee && (a = t.right + t.width - Ee)
              : t.left < -X
              ? (a = -t.left)
              : t.left + t.width > -X + Ee && (a = -(t.left + t.width - Ee)),
              te(0),
              J(Ke(a));
          } else {
            var n = ee;
            t.top < -ee
              ? (n = -t.top)
              : t.top + t.height > -ee + Ce && (n = -(t.top + t.height - Ce)),
              J(0),
              te(Ke(n));
          }
        }
        !(function(e, t) {
          var a = Object(u.useState)(),
            n = Object(o.a)(a, 2),
            r = n[0],
            c = n[1],
            l = Object(u.useState)(0),
            i = Object(o.a)(l, 2),
            s = i[0],
            d = i[1],
            f = Object(u.useState)(0),
            p = Object(o.a)(f, 2),
            v = p[0],
            m = p[1],
            b = Object(u.useState)(),
            y = Object(o.a)(b, 2),
            h = y[0],
            g = y[1],
            E = Object(u.useRef)(),
            O = Object(u.useRef)(),
            x = Object(u.useRef)(null);
          (x.current = {
            onTouchStart: function(e) {
              var t = e.touches[0],
                a = t.screenX,
                n = t.screenY;
              c({ x: a, y: n }), window.clearInterval(E.current);
            },
            onTouchMove: function(e) {
              if (r) {
                e.preventDefault();
                var a = e.touches[0],
                  n = a.screenX,
                  o = a.screenY;
                c({ x: n, y: o });
                var l = n - r.x,
                  i = o - r.y;
                t(l, i);
                var u = Date.now();
                d(u), m(u - s), g({ x: l, y: i });
              }
            },
            onTouchEnd: function() {
              if (r && (c(null), g(null), h)) {
                var e = h.x / v,
                  a = h.y / v,
                  n = Math.abs(e),
                  o = Math.abs(a);
                if (Math.max(n, o) < 0.1) return;
                var l = e,
                  i = a;
                E.current = window.setInterval(function() {
                  Math.abs(l) < 0.01 && Math.abs(i) < 0.01
                    ? window.clearInterval(E.current)
                    : t(20 * (l *= _), 20 * (i *= _));
                }, 20);
              }
            },
            onWheel: function(e) {
              var a = e.deltaX,
                n = e.deltaY,
                r = 0,
                o = Math.abs(a),
                c = Math.abs(n);
              o === c
                ? (r = 'x' === O.current ? a : n)
                : o > c
                ? ((r = a), (O.current = 'x'))
                : ((r = n), (O.current = 'y')),
                t(-r, -r) && e.preventDefault();
            },
          }),
            u.useEffect(function() {
              function t(e) {
                x.current.onTouchMove(e);
              }
              function a(e) {
                x.current.onTouchEnd(e);
              }
              return (
                document.addEventListener('touchmove', t, { passive: !1 }),
                document.addEventListener('touchend', a, { passive: !1 }),
                e.current.addEventListener(
                  'touchstart',
                  function(e) {
                    x.current.onTouchStart(e);
                  },
                  { passive: !1 }
                ),
                e.current.addEventListener('wheel', function(e) {
                  x.current.onWheel(e);
                }),
                function() {
                  document.removeEventListener('touchmove', t),
                    document.removeEventListener('touchend', a);
                }
              );
            }, []);
        })(B, function(e, t) {
          function a(e, t) {
            e(function(e) {
              return Ke(e + t);
            });
          }
          if (Y) {
            if (Ee >= re) return !1;
            a(J, e);
          } else {
            if (Ce >= ie) return !1;
            a(te, t);
          }
          return Ge(), Qe(), !0;
        }),
          Object(u.useEffect)(
            function() {
              return (
                Ge(),
                We &&
                  (Fe.current = window.setTimeout(function() {
                    Ye(0);
                  }, 100)),
                Ge
              );
            },
            [We]
          );
        var Je = (function(e, t, a, n, r) {
            var o,
              c,
              l,
              i = r.tabs,
              s = r.tabPosition,
              d = r.rtl;
            ['top', 'bottom'].includes(s)
              ? ((o = 'width'), (c = d ? 'right' : 'left'), (l = Math.abs(t.left)))
              : ((o = 'height'), (c = 'top'), (l = -t.top));
            var f = t[o],
              p = a[o],
              v = n[o],
              m = f;
            return (
              p + v > f && (m = f - v),
              Object(u.useMemo)(
                function() {
                  if (!i.length) return [0, 0];
                  for (var t = i.length, a = t, n = 0; n < t; n += 1) {
                    var r = e.get(i[n].key) || j;
                    if (r[c] + r[o] > l + m) {
                      a = n - 1;
                      break;
                    }
                  }
                  for (var u = 0, s = t - 1; s >= 0; s -= 1)
                    if ((e.get(i[s].key) || j)[c] < l) {
                      u = s + 1;
                      break;
                    }
                  return [u, a];
                },
                [
                  e,
                  l,
                  m,
                  s,
                  i
                    .map(function(e) {
                      return e.key;
                    })
                    .join('_'),
                  d,
                ]
              )
            );
          })(
            Ue,
            { width: Ee, height: Ce, left: X, top: ee },
            { width: fe, height: be },
            { width: Pe, height: Ie },
            Object(i.a)(Object(i.a)({}, e), {}, { tabs: s })
          ),
          Ze = Object(o.a)(Je, 2),
          $e = Ze[0],
          et = Ze[1],
          tt = s.map(function(e) {
            var t = e.key;
            return u.createElement(O, {
              id: v,
              prefixCls: l,
              key: t,
              rtl: C,
              tab: e,
              closable: e.closable,
              editable: w,
              active: t === E,
              tabPosition: k,
              tabBarGutter: A,
              renderWrapper: q,
              removeAriaLabel: null === P || void 0 === P ? void 0 : P.removeAriaLabel,
              ref: V(t),
              onClick: function(e) {
                L(t, e);
              },
              onRemove: function() {
                W(t);
              },
              onFocus: function() {
                Xe(t), Qe(), C || (B.current.scrollLeft = 0), (B.current.scrollTop = 0);
              },
            });
          }),
          at = h(function() {
            var e,
              t,
              a,
              n,
              r,
              o,
              c,
              l,
              i,
              u = (null === (e = B.current) || void 0 === e ? void 0 : e.offsetWidth) || 0,
              d = (null === (t = B.current) || void 0 === t ? void 0 : t.offsetHeight) || 0,
              f = (null === (a = K.current) || void 0 === a ? void 0 : a.offsetWidth) || 0,
              p = (null === (n = K.current) || void 0 === n ? void 0 : n.offsetHeight) || 0,
              v = (null === (r = H.current) || void 0 === r ? void 0 : r.offsetWidth) || 0,
              m = (null === (o = H.current) || void 0 === o ? void 0 : o.offsetHeight) || 0;
            Oe(u), Ne(d), Se(f), Me(p);
            var b = ((null === (c = D.current) || void 0 === c ? void 0 : c.offsetWidth) || 0) - f,
              y = ((null === (l = D.current) || void 0 === l ? void 0 : l.offsetHeight) || 0) - p;
            oe(b), ue(y);
            var h = null === (i = H.current) || void 0 === i ? void 0 : i.className.includes(Be);
            pe(b - (h ? 0 : v)),
              ye(y - (h ? 0 : m)),
              Le(function() {
                var e = new Map();
                return (
                  s.forEach(function(t) {
                    var a = t.key,
                      n = V(a).current;
                    n &&
                      e.set(a, {
                        width: n.offsetWidth,
                        height: n.offsetHeight,
                        left: n.offsetLeft,
                        top: n.offsetTop,
                      });
                  }),
                  e
                );
              });
          }),
          nt = s.slice(0, $e),
          rt = s.slice(et + 1),
          ot = [].concat(Object(m.a)(nt), Object(m.a)(rt)),
          ct = Object(u.useState)(),
          lt = Object(o.a)(ct, 2),
          it = lt[0],
          ut = lt[1],
          st = Ue.get(E),
          dt = Object(u.useRef)();
        function ft() {
          b.a.cancel(dt.current);
        }
        Object(u.useEffect)(
          function() {
            var e = {};
            return (
              st &&
                (Y
                  ? (C ? (e.right = st.right) : (e.left = st.left), (e.width = st.width))
                  : ((e.top = st.top), (e.height = st.height))),
              ft(),
              (dt.current = Object(b.a)(function() {
                ut(e);
              })),
              ft
            );
          },
          [st, Y, C]
        ),
          Object(u.useEffect)(
            function() {
              Xe();
            },
            [E, st, Ue, Y]
          ),
          Object(u.useEffect)(
            function() {
              at();
            },
            [
              C,
              A,
              E,
              s
                .map(function(e) {
                  return e.key;
                })
                .join('_'),
            ]
          );
        var pt,
          vt,
          mt,
          bt,
          yt = !!ot.length,
          ht = ''.concat(l, '-nav-wrap');
        return (
          Y
            ? C
              ? ((vt = X > 0), (pt = X + Ee < re))
              : ((pt = X < 0), (vt = -X + Ee < re))
            : ((mt = ee < 0), (bt = -ee + Ce < ie)),
          u.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: d()(''.concat(l, '-nav'), f),
              style: p,
              onKeyDown: function() {
                Qe();
              },
            },
            u.createElement(M, { position: 'left', extra: N, prefixCls: l }),
            u.createElement(
              y.default,
              { onResize: at },
              u.createElement(
                'div',
                {
                  className: d()(
                    ht,
                    ((a = {}),
                    Object(r.a)(a, ''.concat(ht, '-ping-left'), pt),
                    Object(r.a)(a, ''.concat(ht, '-ping-right'), vt),
                    Object(r.a)(a, ''.concat(ht, '-ping-top'), mt),
                    Object(r.a)(a, ''.concat(ht, '-ping-bottom'), bt),
                    a)
                  ),
                  ref: B,
                },
                u.createElement(
                  y.default,
                  { onResize: at },
                  u.createElement(
                    'div',
                    {
                      ref: D,
                      className: ''.concat(l, '-nav-list'),
                      style: {
                        transform: 'translate('.concat(X, 'px, ').concat(ee, 'px)'),
                        transition: We ? 'none' : void 0,
                      },
                    },
                    tt,
                    u.createElement(T, {
                      ref: K,
                      prefixCls: l,
                      locale: P,
                      editable: w,
                      style: { visibility: yt ? 'hidden' : null },
                    }),
                    u.createElement('div', {
                      className: d()(
                        ''.concat(l, '-ink-bar'),
                        Object(r.a)({}, ''.concat(l, '-ink-bar-animated'), g.inkBar)
                      ),
                      style: it,
                    })
                  )
                )
              )
            ),
            u.createElement(
              S,
              Object(n.a)({}, e, { ref: H, prefixCls: l, tabs: ot, className: !yt && Be })
            ),
            u.createElement(M, { position: 'right', extra: N, prefixCls: l })
          )
        );
      }
      var A = u.forwardRef(k);
      function q(e) {
        var t = e.id,
          a = e.activeKey,
          n = e.animated,
          o = e.tabPosition,
          c = e.rtl,
          l = e.destroyInactiveTabPane,
          i = u.useContext(R),
          s = i.prefixCls,
          f = i.tabs,
          p = n.tabPane,
          v = f.findIndex(function(e) {
            return e.key === a;
          });
        return u.createElement(
          'div',
          { className: d()(''.concat(s, '-content-holder')) },
          u.createElement(
            'div',
            {
              className: d()(
                ''.concat(s, '-content'),
                ''.concat(s, '-content-').concat(o),
                Object(r.a)({}, ''.concat(s, '-content-animated'), p)
              ),
              style:
                v && p
                  ? Object(r.a)({}, c ? 'marginRight' : 'marginLeft', '-'.concat(v, '00%'))
                  : null,
            },
            f.map(function(e) {
              return u.cloneElement(e.node, {
                key: e.key,
                prefixCls: s,
                tabKey: e.key,
                id: t,
                animated: p,
                active: e.key === a,
                destroyInactiveTabPane: l,
              });
            })
          )
        );
      }
      function L(e) {
        var t = e.prefixCls,
          a = e.forceRender,
          n = e.className,
          r = e.style,
          c = e.id,
          l = e.active,
          s = e.animated,
          f = e.destroyInactiveTabPane,
          p = e.tabKey,
          v = e.children,
          m = u.useState(a),
          b = Object(o.a)(m, 2),
          y = b[0],
          h = b[1];
        u.useEffect(
          function() {
            l ? h(!0) : f && h(!1);
          },
          [l, f]
        );
        var g = {};
        return (
          l ||
            (s
              ? ((g.visibility = 'hidden'), (g.height = 0), (g.overflowY = 'hidden'))
              : (g.display = 'none')),
          u.createElement(
            'div',
            {
              id: c && ''.concat(c, '-panel-').concat(p),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': c && ''.concat(c, '-tab-').concat(p),
              'aria-hidden': !l,
              style: Object(i.a)(Object(i.a)({}, g), r),
              className: d()(''.concat(t, '-tabpane'), l && ''.concat(t, '-tabpane-active'), n),
            },
            (l || y || a) && v
          )
        );
      }
      var U = 0;
      function B(e, t) {
        var a,
          s,
          m = e.id,
          b = e.prefixCls,
          y = void 0 === b ? 'rc-tabs' : b,
          h = e.className,
          g = e.children,
          E = e.direction,
          O = e.activeKey,
          x = e.defaultActiveKey,
          j = e.editable,
          C = e.animated,
          N = void 0 === C ? { inkBar: !0, tabPane: !1 } : C,
          w = e.tabPosition,
          T = void 0 === w ? 'top' : w,
          P = e.tabBarGutter,
          S = e.tabBarStyle,
          _ = e.tabBarExtraContent,
          I = e.locale,
          M = e.moreIcon,
          k = e.moreTransitionName,
          L = e.destroyInactiveTabPane,
          B = e.renderTabBar,
          D = e.onChange,
          H = e.onTabClick,
          K = e.onTabScroll,
          F = Object(l.a)(e, [
            'id',
            'prefixCls',
            'className',
            'children',
            'direction',
            'activeKey',
            'defaultActiveKey',
            'editable',
            'animated',
            'tabPosition',
            'tabBarGutter',
            'tabBarStyle',
            'tabBarExtraContent',
            'locale',
            'moreIcon',
            'moreTransitionName',
            'destroyInactiveTabPane',
            'renderTabBar',
            'onChange',
            'onTabClick',
            'onTabScroll',
          ]),
          z = (function(e) {
            return Object(f.a)(e)
              .map(function(e) {
                if (u.isValidElement(e)) {
                  var t = void 0 !== e.key ? String(e.key) : void 0;
                  return Object(i.a)(Object(i.a)({ key: t }, e.props), {}, { node: e });
                }
                return null;
              })
              .filter(function(e) {
                return e;
              });
          })(g),
          V = 'rtl' === E;
        s =
          !1 === N
            ? { inkBar: !1, tabPane: !1 }
            : !0 === N
            ? { inkBar: !0, tabPane: !0 }
            : Object(i.a)({ inkBar: !0, tabPane: !1 }, 'object' === Object(c.a)(N) ? N : {});
        var W = Object(u.useState)(!1),
          Y = Object(o.a)(W, 2),
          Q = Y[0],
          G = Y[1];
        Object(u.useEffect)(function() {
          G(Object(p.a)());
        }, []);
        var X = Object(v.a)(
            function() {
              var e;
              return null === (e = z[0]) || void 0 === e ? void 0 : e.key;
            },
            { value: O, defaultValue: x }
          ),
          J = Object(o.a)(X, 2),
          Z = J[0],
          $ = J[1],
          ee = Object(u.useState)(function() {
            return z.findIndex(function(e) {
              return e.key === Z;
            });
          }),
          te = Object(o.a)(ee, 2),
          ae = te[0],
          ne = te[1];
        Object(u.useEffect)(
          function() {
            var e,
              t = z.findIndex(function(e) {
                return e.key === Z;
              });
            -1 === t &&
              ((t = Math.max(0, Math.min(ae, z.length - 1))),
              $(null === (e = z[t]) || void 0 === e ? void 0 : e.key));
            ne(t);
          },
          [
            z
              .map(function(e) {
                return e.key;
              })
              .join('_'),
            Z,
            ae,
          ]
        );
        var re = Object(v.a)(null, { value: m }),
          oe = Object(o.a)(re, 2),
          ce = oe[0],
          le = oe[1],
          ie = T;
        Q && !['left', 'right'].includes(T) && (ie = 'top'),
          Object(u.useEffect)(function() {
            m || (le('rc-tabs-'.concat(U)), (U += 1));
          }, []);
        var ue,
          se = { id: ce, activeKey: Z, animated: s, tabPosition: ie, rtl: V, mobile: Q },
          de = Object(i.a)(
            Object(i.a)({}, se),
            {},
            {
              editable: j,
              locale: I,
              moreIcon: M,
              moreTransitionName: k,
              tabBarGutter: P,
              onTabClick: function(e, t) {
                null === H || void 0 === H || H(e, t), $(e), null === D || void 0 === D || D(e);
              },
              onTabScroll: K,
              extra: _,
              style: S,
              panes: g,
            }
          );
        return (
          (ue = B ? B(de, A) : u.createElement(A, de)),
          u.createElement(
            R.Provider,
            { value: { tabs: z, prefixCls: y } },
            u.createElement(
              'div',
              Object(n.a)(
                {
                  ref: t,
                  id: m,
                  className: d()(
                    y,
                    ''.concat(y, '-').concat(ie),
                    ((a = {}),
                    Object(r.a)(a, ''.concat(y, '-mobile'), Q),
                    Object(r.a)(a, ''.concat(y, '-editable'), j),
                    Object(r.a)(a, ''.concat(y, '-rtl'), V),
                    a),
                    h
                  ),
                },
                F
              ),
              ue,
              u.createElement(q, Object(n.a)({ destroyInactiveTabPane: L }, se, { animated: s }))
            )
          )
        );
      }
      var D = u.forwardRef(B);
      D.TabPane = L;
      var H = D;
      t.default = H;
    },
    lbd2: function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = n(a('zcfU')),
        o = n(a('3PeW')),
        c = n(a('zqv2')),
        l = n(a('EXKy')),
        i = n(a('J+05')),
        u = r.default;
      (u.Text = o.default), (u.Link = c.default), (u.Title = l.default), (u.Paragraph = i.default);
      var s = u;
      t.default = s;
    },
    m546: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d:
                  'M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z',
              },
            },
          ],
        },
        name: 'copy',
        theme: 'outlined',
      };
    },
    mN36: function(e, t, a) {
      'use strict';
      a('VEUW'), a('gnA7'), a('Z8Mf'), a('hr7U'), a('fv9D');
    },
    'p+BA': function(e, t, a) {
      'use strict';
      var n = a('TqRt'),
        r = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('q1tI')),
        c = n(a('YCuv')),
        l = n(a('O/y6')),
        i = function(e, t) {
          return o.createElement(l.default, Object.assign({}, e, { ref: t, icon: c.default }));
        };
      i.displayName = 'EnterOutlined';
      var u = o.forwardRef(i);
      t.default = u;
    },
    thPT: function(e, t, a) {
      'use strict';
      var n = a('284h');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = n(a('q1tI')),
        o = a('vgIT'),
        c = function(e) {
          var t = e.children,
            a = (0, r.useContext(o.ConfigContext).getPrefixCls)('breadcrumb');
          return r.createElement('span', { className: ''.concat(a, '-separator') }, t || '/');
        };
      c.__ANT_BREADCRUMB_SEPARATOR = !0;
      var l = c;
      t.default = l;
    },
    uEAt: function(e, t, a) {
      'use strict';
      var n;
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = (n = a('p+BA')) && n.__esModule ? n : { default: n };
      (t.default = r), (e.exports = r);
    },
    ulqC: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = n(a('q1tI')),
        i = r(a('6UMo')),
        u = r(a('TSYQ')),
        s = r(a('b6Tb')),
        d = a('vgIT'),
        f = function(e) {
          var t = function(t) {
            var a = t.getPrefixCls,
              n = e.prefixCls,
              r = e.className,
              d = e.active,
              f = a('skeleton', n),
              p = (0, i.default)(e, ['prefixCls']),
              v = (0, u.default)(
                f,
                ''.concat(f, '-element'),
                (0, c.default)({}, ''.concat(f, '-active'), d),
                r
              );
            return l.createElement(
              'div',
              { className: v },
              l.createElement(s.default, (0, o.default)({ prefixCls: ''.concat(f, '-input') }, p))
            );
          };
          return l.createElement(d.ConfigConsumer, null, t);
        };
      f.defaultProps = { size: 'default' };
      var p = f;
      t.default = p;
    },
    vRGJ: function(e, t) {
      (e.exports = u),
        (e.exports.parse = n),
        (e.exports.compile = function(e, t) {
          return r(n(e, t));
        }),
        (e.exports.tokensToFunction = r),
        (e.exports.tokensToRegExp = i);
      var a = new RegExp(
        [
          '(\\\\.)',
          '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?',
        ].join('|'),
        'g'
      );
      function n(e, t) {
        for (
          var n,
            r = [],
            l = 0,
            i = 0,
            u = '',
            s = (t && t.delimiter) || '/',
            d = (t && t.delimiters) || './',
            f = !1;
          null !== (n = a.exec(e));

        ) {
          var p = n[0],
            v = n[1],
            m = n.index;
          if (((u += e.slice(i, m)), (i = m + p.length), v)) (u += v[1]), (f = !0);
          else {
            var b = '',
              y = e[i],
              h = n[2],
              g = n[3],
              E = n[4],
              O = n[5];
            if (!f && u.length) {
              var x = u.length - 1;
              d.indexOf(u[x]) > -1 && ((b = u[x]), (u = u.slice(0, x)));
            }
            u && (r.push(u), (u = ''), (f = !1));
            var j = '' !== b && void 0 !== y && y !== b,
              C = '+' === O || '*' === O,
              N = '?' === O || '*' === O,
              w = b || s,
              T = g || E;
            r.push({
              name: h || l++,
              prefix: b,
              delimiter: w,
              optional: N,
              repeat: C,
              partial: j,
              pattern: T ? c(T) : '[^' + o(w) + ']+?',
            });
          }
        }
        return (u || i < e.length) && r.push(u + e.substr(i)), r;
      }
      function r(e) {
        for (var t = new Array(e.length), a = 0; a < e.length; a++)
          'object' === typeof e[a] && (t[a] = new RegExp('^(?:' + e[a].pattern + ')$'));
        return function(a, n) {
          for (var r = '', o = (n && n.encode) || encodeURIComponent, c = 0; c < e.length; c++) {
            var l = e[c];
            if ('string' !== typeof l) {
              var i,
                u = a ? a[l.name] : void 0;
              if (Array.isArray(u)) {
                if (!l.repeat)
                  throw new TypeError('Expected "' + l.name + '" to not repeat, but got array');
                if (0 === u.length) {
                  if (l.optional) continue;
                  throw new TypeError('Expected "' + l.name + '" to not be empty');
                }
                for (var s = 0; s < u.length; s++) {
                  if (((i = o(u[s], l)), !t[c].test(i)))
                    throw new TypeError(
                      'Expected all "' + l.name + '" to match "' + l.pattern + '"'
                    );
                  r += (0 === s ? l.prefix : l.delimiter) + i;
                }
              } else if ('string' !== typeof u && 'number' !== typeof u && 'boolean' !== typeof u) {
                if (!l.optional)
                  throw new TypeError(
                    'Expected "' + l.name + '" to be ' + (l.repeat ? 'an array' : 'a string')
                  );
                l.partial && (r += l.prefix);
              } else {
                if (((i = o(String(u), l)), !t[c].test(i)))
                  throw new TypeError(
                    'Expected "' + l.name + '" to match "' + l.pattern + '", but got "' + i + '"'
                  );
                r += l.prefix + i;
              }
            } else r += l;
          }
          return r;
        };
      }
      function o(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
      }
      function c(e) {
        return e.replace(/([=!:$/()])/g, '\\$1');
      }
      function l(e) {
        return e && e.sensitive ? '' : 'i';
      }
      function i(e, t, a) {
        for (
          var n = (a = a || {}).strict,
            r = !1 !== a.start,
            c = !1 !== a.end,
            i = o(a.delimiter || '/'),
            u = a.delimiters || './',
            s = []
              .concat(a.endsWith || [])
              .map(o)
              .concat('$')
              .join('|'),
            d = r ? '^' : '',
            f = 0 === e.length,
            p = 0;
          p < e.length;
          p++
        ) {
          var v = e[p];
          if ('string' === typeof v)
            (d += o(v)), (f = p === e.length - 1 && u.indexOf(v[v.length - 1]) > -1);
          else {
            var m = v.repeat
              ? '(?:' + v.pattern + ')(?:' + o(v.delimiter) + '(?:' + v.pattern + '))*'
              : v.pattern;
            t && t.push(v),
              v.optional
                ? v.partial
                  ? (d += o(v.prefix) + '(' + m + ')?')
                  : (d += '(?:' + o(v.prefix) + '(' + m + '))?')
                : (d += o(v.prefix) + '(' + m + ')');
          }
        }
        return (
          c
            ? (n || (d += '(?:' + i + ')?'), (d += '$' === s ? '$' : '(?=' + s + ')'))
            : (n || (d += '(?:' + i + '(?=' + s + '))?'), f || (d += '(?=' + i + '|' + s + ')')),
          new RegExp(d, l(a))
        );
      }
      function u(e, t, a) {
        return e instanceof RegExp
          ? (function(e, t) {
              if (!t) return e;
              var a = e.source.match(/\((?!\?)/g);
              if (a)
                for (var n = 0; n < a.length; n++)
                  t.push({
                    name: n,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    pattern: null,
                  });
              return e;
            })(e, t)
          : Array.isArray(e)
          ? (function(e, t, a) {
              for (var n = [], r = 0; r < e.length; r++) n.push(u(e[r], t, a).source);
              return new RegExp('(?:' + n.join('|') + ')', l(a));
            })(e, t, a)
          : (function(e, t, a) {
              return i(n(e, a), t, a);
            })(e, t, a);
      }
    },
    vhhj: function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Row', {
          enumerable: !0,
          get: function() {
            return r.default;
          },
        }),
        Object.defineProperty(t, 'Col', {
          enumerable: !0,
          get: function() {
            return o.default;
          },
        }),
        (t.default = void 0);
      var r = n(a('1Ot+')),
        o = n(a('Y7j8')),
        c = { useBreakpoint: n(a('EWAn')).default };
      t.default = c;
    },
    'w/wx': function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = n(a('q1tI')),
        l = r(a('TSYQ')),
        i = function(e) {
          var t = e.prefixCls,
            a = e.className,
            n = e.width,
            r = e.style;
          return c.createElement('h3', {
            className: (0, l.default)(t, a),
            style: (0, o.default)({ width: n }, r),
          });
        };
      t.default = i;
    },
    wM0b: function(e, t, a) {
      'use strict';
      var n = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = n(a('UclK')).default;
      t.default = r;
    },
    wzuP: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = n(a('q1tI')),
        l = r(a('Ved0')),
        i = r(a('/Rfv')),
        u = a('vgIT'),
        s = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        d = function(e) {
          var t,
            a,
            n = e.prefixCls,
            r = e.separator,
            d = void 0 === r ? '/' : r,
            f = e.children,
            p = e.overlay,
            v = e.dropdownProps,
            m = s(e, ['prefixCls', 'separator', 'children', 'overlay', 'dropdownProps']),
            b = (0, c.useContext(u.ConfigContext).getPrefixCls)('breadcrumb', n);
          return (
            (t =
              'href' in m
                ? c.createElement('a', (0, o.default)({ className: ''.concat(b, '-link') }, m), f)
                : c.createElement(
                    'span',
                    (0, o.default)({ className: ''.concat(b, '-link') }, m),
                    f
                  )),
            (a = t),
            (t = p
              ? c.createElement(
                  i.default,
                  (0, o.default)({ overlay: p, placement: 'bottomCenter' }, v),
                  c.createElement(
                    'span',
                    { className: ''.concat(b, '-overlay-link') },
                    a,
                    c.createElement(l.default, null)
                  )
                )
              : a),
            f
              ? c.createElement(
                  'span',
                  null,
                  t,
                  d &&
                    '' !== d &&
                    c.createElement('span', { className: ''.concat(b, '-separator') }, d)
                )
              : null
          );
        };
      d.__ANT_BREADCRUMB_ITEM = !0;
      var f = d;
      t.default = f;
    },
    ygfH: function(e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      t.default = {
        icon: {
          tag: 'svg',
          attrs: { viewBox: '64 64 896 896', focusable: 'false' },
          children: [
            {
              tag: 'path',
              attrs: {
                d:
                  'M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z',
              },
            },
          ],
        },
        name: 'check',
        theme: 'outlined',
      };
    },
    zcfU: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('lSNA')),
        l = n(a('q1tI')),
        i = r(a('TSYQ')),
        u = a('saJ+'),
        s = a('vgIT'),
        d = r(a('m4nH')),
        f = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        p = function(e, t) {
          var a = e.prefixCls,
            n = e.component,
            r = void 0 === n ? 'article' : n,
            p = e.className,
            v = e['aria-label'],
            m = e.setContentRef,
            b = e.children,
            y = f(e, [
              'prefixCls',
              'component',
              'className',
              'aria-label',
              'setContentRef',
              'children',
            ]),
            h = t;
          return (
            m &&
              ((0, d.default)(
                !1,
                'Typography',
                '`setContentRef` is deprecated. Please use `ref` instead.'
              ),
              (h = (0, u.composeRef)(t, m))),
            l.createElement(s.ConfigConsumer, null, function(e) {
              var t = e.getPrefixCls,
                n = e.direction,
                u = r,
                s = t('typography', a),
                d = (0, i.default)(s, (0, c.default)({}, ''.concat(s, '-rtl'), 'rtl' === n), p);
              return l.createElement(
                u,
                (0, o.default)({ className: d, 'aria-label': v, ref: h }, y),
                b
              );
            })
          );
        },
        v = l.forwardRef(p);
      v.displayName = 'Typography';
      var m = v;
      t.default = m;
    },
    zqv2: function(e, t, a) {
      'use strict';
      var n = a('284h'),
        r = a('TqRt');
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = r(a('pVnL')),
        c = r(a('cDf5')),
        l = n(a('q1tI')),
        i = r(a('m4nH')),
        u = r(a('g5iu')),
        s = function(e, t) {
          var a = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
              t.indexOf(n[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
                (a[n[r]] = e[n[r]]);
          }
          return a;
        },
        d = function(e, t) {
          var a = e.ellipsis,
            n = e.rel,
            r = s(e, ['ellipsis', 'rel']);
          (0, i.default)(
            'object' !== (0, c.default)(a),
            'Typography.Link',
            '`ellipsis` only supports boolean value.'
          );
          var d = l.useRef(null);
          l.useImperativeHandle(t, function() {
            var e;
            return null === (e = d.current) || void 0 === e ? void 0 : e.contentRef.current;
          });
          var f = (0, o.default)((0, o.default)({}, r), {
            rel: void 0 === n && '_blank' === r.target ? 'noopener noreferrer' : n,
          });
          return (
            delete f.navigate,
            l.createElement(
              u.default,
              (0, o.default)({}, f, { ref: d, ellipsis: !!a, component: 'a' })
            )
          );
        },
        f = l.forwardRef(d);
      t.default = f;
    },
  },
  [['TUfB', 0, 2, 7, 1, 3, 4, 5, 6, 8, 12, 10, 11, 13, 14, 15, 16, 18, 22, 29, 9]],
]);
