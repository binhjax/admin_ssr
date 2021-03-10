if (!self.define) {
  const e = e => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        c[e] ||
          (s = new Promise(async s => {
            if ('document' in self) {
              const c = document.createElement('script');
              (c.src = e), document.head.appendChild(c), (c.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!c[e]) throw new Error(`Module ${e} didn’t register its module`);
          return c[e];
        })
      );
    },
    s = (s, c) => {
      Promise.all(s.map(e)).then(e => c(1 === e.length ? e[0] : e));
    },
    c = { require: Promise.resolve(s) };
  self.define = (s, r, t) => {
    c[s] ||
      (c[s] = Promise.resolve().then(() => {
        let c = {};
        const n = { uri: location.origin + s.slice(1) };
        return Promise.all(
          r.map(s => {
            switch (s) {
              case 'exports':
                return c;
              case 'module':
                return n;
              default:
                return e(s);
            }
          })
        ).then(e => {
          const s = t(...e);
          return c.default || (c.default = s), c;
        });
      }));
  };
}
define('./sw.js', ['./workbox-8778d57b'], function(e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/O0AilGMOrhtOO0QrLG77n/_buildManifest.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/O0AilGMOrhtOO0QrLG77n/_ssgManifest.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/0db5807861415f2b99c1a568be23f6f93e42eb0f_CSS.34e373399cdc573d23ed.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/33eaa1514742696692b57e5e5fdcfb5cf40f6e77.097d01738d7c049918c8.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/33eaa1514742696692b57e5e5fdcfb5cf40f6e77_CSS.0a0b70788b6411282e55.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/46a52d7874ab3def4ac535aa5100eb7562807595.cad320aa83c3057a0e75.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/46a52d7874ab3def4ac535aa5100eb7562807595_CSS.6164c81b6ed04bb13dbd.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/58b4a09da5bde0fcfb0ec0e5b18a65a46658705c.f74b632ee035e14e85cb.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/6ce14619abb9de17fc2e5f3943b2c8cf547a7e5a.73cfde9c50c0b86e7853.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/71605cd4fae9cc768990109e357c839f70939cbd.edd91c448ebab9e20761.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/71605cd4fae9cc768990109e357c839f70939cbd_CSS.ab0233476a26df96d326.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/75fc9c18.72ffbdf36987a48d9602.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/822272e77801f991b0e78accde5ec33c288fd84e.4650a3a31e722ff123d4.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/841b9ffe0bf4da07bfa96b6ee2cf6842a17afc3d.7ec18d8c3cb64f20b20a.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/841b9ffe0bf4da07bfa96b6ee2cf6842a17afc3d_CSS.c45b15f1d5cff9ccea93.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/91a1c841ab00af4022724c00ca0d3aa3a6d7d09e.cc2c40d5b69344b26d90.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/91a1c841ab00af4022724c00ca0d3aa3a6d7d09e_CSS.dd32408e2471bd10af40.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/94083a19c2162d9af4dc1b555dd0be5e90b7e63d.b61e962b010229bf53c5.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/9496b50c9105bfc93091b9f5d7b3001c462d5331.598260cad2a72357ffb7.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/965570950787eeafc5da53a918bf14a5eb2b3fc1.38273e4d6c4a39056a91.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/cb71f3c487ca63f18f4cd1a3a1bce75ad7195404.63fceeb1c23c4ef685f5.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/cb71f3c487ca63f18f4cd1a3a1bce75ad7195404_CSS.7caabd82a17efe31f03e.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/commons.1d0c0b11d1306c3ee12b.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url:
            '/_next/static/chunks/f0e291f9b4ea2406ddbf87a33245a3f0f8bf155c_CSS.eaf58be72fcea85e662f.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/fcba66b9.cdfd26668d511e5abe70.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/framework.5747955624d4e97d86c1.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/main-5a07388047d3a1c88b63.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/404-59660a35db013e531485.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/_app-e64685bf34ac66bfd924.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/_error-4a29e4f562cc577923a7.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/dashboard-631f39d71c9840845ef4.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/example/demo-d40c83357cd7d652e9b9.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/index-3c187e6971d386f9aa2a.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/login-d65a83e5e0509455d9a5.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/restaurant-cf5fe8499ad718d37dbd.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/survey/creator-55c99a31fdd4d4cbd70c.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/system/menu-7d02e9a222ae24d10c2b.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/system/role-25279215b62ef3eca518.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/pages/system/user-ce5c352f254f2548ce01.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/polyfills-688d1cd6da54eced3b66.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/styles.a233a12b9760ea12c165.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/chunks/webpack-147ea3ada7109f6dc0bb.js',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/0db5807861415f2b99c1a568be23f6f93e42eb0f_CSS.1e21aad9.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/33eaa1514742696692b57e5e5fdcfb5cf40f6e77_CSS.f6b33bfe.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/46a52d7874ab3def4ac535aa5100eb7562807595_CSS.a42790fe.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/71605cd4fae9cc768990109e357c839f70939cbd_CSS.480a72d7.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/841b9ffe0bf4da07bfa96b6ee2cf6842a17afc3d_CSS.89e74a0c.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/91a1c841ab00af4022724c00ca0d3aa3a6d7d09e_CSS.0a5e1332.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/cb71f3c487ca63f18f4cd1a3a1bce75ad7195404_CSS.1d2526ca.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/f0e291f9b4ea2406ddbf87a33245a3f0f8bf155c_CSS.f2486fe5.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        { url: '/_next/static/css/fcba66b9.c7b779af.chunk.css', revision: 'O0AilGMOrhtOO0QrLG77n' },
        {
          url: '/_next/static/css/pages/_app.3b185217.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/pages/restaurant.0a8910f4.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        {
          url: '/_next/static/css/pages/survey/creator.0a8910f4.chunk.css',
          revision: 'O0AilGMOrhtOO0QrLG77n',
        },
        { url: '/_next/static/css/styles.37c9ee72.chunk.css', revision: 'O0AilGMOrhtOO0QrLG77n' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET'
    );
});
