if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + '.js', a).href),
    s[n] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (s[t]) return;
    let c = {};
    const o = (e) => n(e, t),
      r = { module: { uri: t }, exports: c, require: o };
    s[t] = Promise.all(a.map((e) => r[e] || o(e))).then((e) => (i(...e), c));
  };
}
define(['./workbox-4754cb34'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/app-build-manifest.json',
          revision: 'd1f12e108b0283f19684c7132a0a9586',
        },
        {
          url: '/_next/static/WklQC0_pGm4o_nhI_SA9L/_buildManifest.js',
          revision: '6767f2f49a121a4a2588a183af1acd41',
        },
        {
          url: '/_next/static/WklQC0_pGm4o_nhI_SA9L/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/1342-571abe81b6e6282e.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/1664-44e1362b62d35b47.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/1684-cbde6d5296faac25.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/1882-b949892111a81b97.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/2299-ce5e226ffddd20b9.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/2953-c23a1d808b042899.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/3274-4bdd40dde4aa6159.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/3464-7ebd59e17d65212c.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/3784-ce9a4d2a62b9c756.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/4277-c07a353588e53789.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/4485-b702c2d9c0faef47.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/4656-2749d613427ea4f2.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/4bd1b696-c7a6d41e2c535e59.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/5371-ae2d97d52752ce87.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/5838-3803c6217faf517f.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/602-2b084fccf53fdd46.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/6766-6eb5c8895b4f1e80.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/6874-604507c382129c37.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/6920-f3e12493f76fbff6.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/6967-a8f872260203abf9.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/7333.907e1da10d432e46.js',
          revision: '907e1da10d432e46',
        },
        {
          url: '/_next/static/chunks/9199.2b16ed21a5a7714c.js',
          revision: '2b16ed21a5a7714c',
        },
        {
          url: '/_next/static/chunks/9458-08636971151a1ef5.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/9835-6d529abdb1246edd.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/9946-80041d799d3df6c6.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/challenges/%5Bid%5D/page-552f7ada8c7d66c8.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/challenges/layout-010a2140865947b2.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/challenges/page-331f754070267592.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/friends/layout-ace05fe8da7cb8fc.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/friends/page-f3bf14b7952988c0.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/layout-7b86c332bfc5ef12.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/profile/layout-eef64e473a0178ab.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/profile/page-bec165b628350f6c.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/stats/api/stats/route-2e064d6875d6646d.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/stats/page-fbe45c7ec67302a8.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/transactions/create/layout-df4a7522ee9d095a.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/transactions/create/page-f7c7eb5ce6ba18bf.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/transactions/tabs/layout-147d961d0c3693a5.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/transactions/tabs/page-c943194005a4b53f.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/transactions/update/income/page-a68da12ae64efe98.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/transactions/update/layout-29319a0362ebd744.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/(detail)/transactions/update/spend/page-81cdbc8fd386b05c.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-19521ea950572019.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/auth/layout-ef4a5d20bfeb7b6b.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/auth/signin/page-9de8f1c8b9224a22.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/auth/signup/page-0f0442245a2bbf10.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/layout-7bd78ef2ec71622c.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/main/layout-0a554f1d8f84fbd8.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/main/page-a1850665eaf3427f.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/page-96288e490eb251f2.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/app/updatechallenge/%5Bid%5D/page-6abda27910366785.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/dc112a36-2836286c81abc9d7.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/framework-47112191c39a1cff.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/main-92440980d7e3314e.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/main-app-efbac5c34e172bb8.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/pages/_app-5d1abe03d322390c.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/pages/_error-3b2a1d523de49635.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        {
          url: '/_next/static/chunks/webpack-47970cff69605436.js',
          revision: 'WklQC0_pGm4o_nhI_SA9L',
        },
        {
          url: '/_next/static/css/55c1a1b8bd69768f.css',
          revision: '55c1a1b8bd69768f',
        },
        {
          url: '/_next/static/media/ff840cfebfb63b0c-s.p.woff2',
          revision: '302ec55f5b4320354ec6b35a53dead87',
        },
        { url: '/file.svg', revision: 'd09f95206c3fa0bb9bd9fefabfd0ea71' },
        {
          url: '/firebase-messaging-sw.js',
          revision: '897492f59593c3ef0021c2bfd8bd2e3a',
        },
        {
          url: '/fonts/PretendardVariable.woff2',
          revision: '302ec55f5b4320354ec6b35a53dead87',
        },
        { url: '/globe.svg', revision: '2aaafa6a49b6563925fe440891e32717' },
        {
          url: '/icons/friends.svg',
          revision: '640537ad2d24734fa5c7f58ae67f4976',
        },
        {
          url: '/icons/home.svg',
          revision: '4f14c7e60bea784cf0e723509d19beac',
        },
        {
          url: '/icons/icon-192x192.png',
          revision: 'd71f2f39944b366c3ea29c020de13255',
        },
        {
          url: '/icons/icon-512x512.png',
          revision: 'eb834344b903b7520efa2d6c8fa9b8f7',
        },
        {
          url: '/icons/kakao.svg',
          revision: '39bdf471bb2c734a8c8124f68ca4a61f',
        },
        {
          url: '/icons/profile.svg',
          revision: '82ddcb50039c6355dcf45c8a078c4427',
        },
        {
          url: '/icons/stats.svg',
          revision: 'f92dd7dd23a630075b9e6ef3221c86f1',
        },
        {
          url: '/icons/target.svg',
          revision: 'ffbbf403cdba43c80886421a34c53863',
        },
        {
          url: '/icons/test.jpg',
          revision: '399e50325d7c376b9653c738aca3eb37',
        },
        {
          url: '/lottie/piggy_loading.json',
          revision: 'c6328ca50494dc646b7d425109820bca',
        },
        {
          url: '/lottie/query_error.json',
          revision: '863034ec7c7435cfd7e4a2ea00254815',
        },
        { url: '/manifest.json', revision: 'af49b6a2c70db03535a4f2f40211065d' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: 'c0af2f507b369b085b35ef4bbe3bcf1e' },
        { url: '/window.svg', revision: 'a2760511c65806022ad20adf74370ff3' },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET'
    );
});
