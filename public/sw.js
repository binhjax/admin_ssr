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
  self.define = (s, r, a) => {
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
          const s = a(...e);
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
          url:
            '/_next/static/chunks/3a8c9b6f7b190637c70cf40253f6149bce3a32dc.9a245a42acfffacf4d51.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/3a8c9b6f7b190637c70cf40253f6149bce3a32dc_CSS.6164c81b6ed04bb13dbd.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/3c575b86969f237fce4af1b17da91a6fea3d5c40.b6846e567397424a98a1.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/58b4a09da5bde0fcfb0ec0e5b18a65a46658705c.3f2b1635ac35568e9fd5.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/5da1bddc36ecd603ddb570bf44cda5e05adb1da8.4e72496f0d4accb8e84a.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/5da1bddc36ecd603ddb570bf44cda5e05adb1da8_CSS.dd32408e2471bd10af40.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/6a755883f26496c72d4e8d29bb0bd605e557e455.8d1703d0124754762734.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/6a755883f26496c72d4e8d29bb0bd605e557e455_CSS.ab0233476a26df96d326.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/75fc9c18.d332859c3b984f80e31e.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/822272e77801f991b0e78accde5ec33c288fd84e.1bcee8933bd5d97eae28.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/8d574466258041e453fc0a3b36f0b56434dba126.4d0986b6352eda2c2591.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/8d574466258041e453fc0a3b36f0b56434dba126_CSS.0a0b70788b6411282e55.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/94083a19c2162d9af4dc1b555dd0be5e90b7e63d.f8dd007262c8861c37be.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/965570950787eeafc5da53a918bf14a5eb2b3fc1.39b33d95251735aae781.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/cb71f3c487ca63f18f4cd1a3a1bce75ad7195404.342b9486513bed14b7e0.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/cb71f3c487ca63f18f4cd1a3a1bce75ad7195404_CSS.e3956219374033b05b28.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/commons.46e9d15d09acc4f083c7.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/f0e291f9b4ea2406ddbf87a33245a3f0f8bf155c_CSS.6bd51dc256e30336ee2e.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/f211fe277430bb8ef3eb6584125719be9e338f50.083aad85780d1d94248b.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url:
            '/_next/static/chunks/f211fe277430bb8ef3eb6584125719be9e338f50_CSS.c45b15f1d5cff9ccea93.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/framework.5747955624d4e97d86c1.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/main-4a7a028ed419960ebbdc.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/404-06dc301a2c39a94d95ca.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/_app-3495e93914828fdc16eb.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/_error-c32b6026e31b2117cde8.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/dashboard-00eade2e313ece96339e.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/example/demo-bda8691c2238da1b9cba.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/login-22be90cb2b4319278002.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/restaurant-934598a1b4426c369774.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/survey/creator-f1d9b1801521763cd2ad.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/system/menu-8fa0f23b58525b9207ac.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/system/role-158028bad7d863d56f71.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/pages/system/user-7a91343d562538b8d054.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/polyfills-58bb3e3ec304cdb775a4.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/styles.f1a4d4c8610b0d0637f3.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/chunks/webpack-147ea3ada7109f6dc0bb.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/3a8c9b6f7b190637c70cf40253f6149bce3a32dc_CSS.7ef7d440.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/5da1bddc36ecd603ddb570bf44cda5e05adb1da8_CSS.b7cabbb8.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/6a755883f26496c72d4e8d29bb0bd605e557e455_CSS.e9bf9e1c.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/8d574466258041e453fc0a3b36f0b56434dba126_CSS.e65c40b2.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/cb71f3c487ca63f18f4cd1a3a1bce75ad7195404_CSS.1335be29.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/f0e291f9b4ea2406ddbf87a33245a3f0f8bf155c_CSS.cf3c3c7b.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/f211fe277430bb8ef3eb6584125719be9e338f50_CSS.a4d576e8.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/pages/_app.3b185217.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/pages/restaurant.0a8910f4.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/css/pages/survey/creator.0a8910f4.chunk.css',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        { url: '/_next/static/css/styles.50ee4b13.chunk.css', revision: 'ghpJT_KU3XRYArSkw5cdC' },
        {
          url: '/_next/static/ghpJT_KU3XRYArSkw5cdC/_buildManifest.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        {
          url: '/_next/static/ghpJT_KU3XRYArSkw5cdC/_ssgManifest.js',
          revision: 'ghpJT_KU3XRYArSkw5cdC',
        },
        { url: '/background/403.svg', revision: '41acc6f2b4bc389403c6d230fc10bfe9' },
        { url: '/background/404.svg', revision: '77e1571b2a0ebaf2f2e10878153fa2df' },
        { url: '/background/500.svg', revision: '5e6bf3ad902b185fdbd8100e24882cf7' },
        { url: '/background/home.jpg', revision: 'dc1e877946dd4568404a432623fca8fc' },
        { url: '/background/login.svg', revision: 'a568162c2e16b799f5d56634d9e23e46' },
        { url: '/favicon.png', revision: '9163d48679880aaab64f9853faae38de' },
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
