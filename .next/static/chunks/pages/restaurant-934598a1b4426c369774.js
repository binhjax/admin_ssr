_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [30],
  {
    'T5j+': function(t, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/restaurant',
        function() {
          return r('jgmA');
        },
      ]);
    },
    jgmA: function(t, n, r) {
      'use strict';
      r.r(n);
      var e = r('o0o1'),
        a = r.n(e),
        u = r('HaE+'),
        o = r('q1tI'),
        c = r.n(o),
        s = r('vDqi'),
        i = r.n(s),
        l = r('2m8j'),
        p = c.a.createElement,
        f = function(t) {
          Object(o.useEffect)(function() {
            var n;
            return (
              console.log('Restaurant: useEffect ', t),
              console.log('Dispatch action: restaurant/fetch '),
              (n = { type: 'restaurant/fetch', search: {}, pagination: {} }),
              (0, t.dispatch)(n),
              function() {}
            );
          }, []);
          var n = t.error;
          if (n) return p('div', null, 'An error occured: ', n.message);
          var r = t.restaurant.data,
            e = r.list;
          r.pagination;
          console.log('LIST = ', e, typeof e);
          var a = Object.values(e);
          return p(
            'ul',
            null,
            a.map(function(t) {
              return p('li', { key: t.id }, t.name);
            })
          );
        };
      (f.getInitialProps = (function() {
        var t = Object(u.a)(
          a.a.mark(function t(n) {
            var r, e;
            return a.a.wrap(
              function(t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        console.log('Server init => Pass to client '),
                        (t.prev = 1),
                        (t.next = 4),
                        i.a.get('http://localhost:1337/restaurants')
                      );
                    case 4:
                      return (r = t.sent), (e = r.data), t.abrupt('return', { restaurants: e });
                    case 9:
                      return (t.prev = 9), (t.t0 = t.catch(1)), t.abrupt('return', { error: t.t0 });
                    case 12:
                    case 'end':
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 9]]
            );
          })
        );
        return function(n) {
          return t.apply(this, arguments);
        };
      })()),
        (n.default = Object(l.a)(function(t) {
          return { restaurant: t.restaurant };
        })(f));
    },
  },
  [['T5j+', 0, 2, 6, 1, 3, 4, 5]],
]);
