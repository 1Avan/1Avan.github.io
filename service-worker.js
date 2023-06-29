/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5591af508be677c211256e1195659922"
  },
  {
    "url": "assets/css/0.styles.d606c483.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.1b1654b9.js",
    "revision": "63ee03f03d39c47d65ac67485a27a829"
  },
  {
    "url": "assets/js/10.0f1a6214.js",
    "revision": "aed2ce279cb8069139b9ce0b4c0d8761"
  },
  {
    "url": "assets/js/11.c11aa82a.js",
    "revision": "dc37edcddd78723e5e8852afd8badb13"
  },
  {
    "url": "assets/js/12.d5a12f0a.js",
    "revision": "7b4b907e345dc71bde5f89b6c8abc8a9"
  },
  {
    "url": "assets/js/13.4a3c5608.js",
    "revision": "8cb4d7fab0a33a6c8253dae1cc7522ae"
  },
  {
    "url": "assets/js/14.88be41ae.js",
    "revision": "498b1e8d46010741ce9511f2ad330205"
  },
  {
    "url": "assets/js/15.881f1c71.js",
    "revision": "139fb947484616d1abc8e1b44abbcbda"
  },
  {
    "url": "assets/js/16.dc7c3db8.js",
    "revision": "7bb0e61bd61fb18e74d0c8023b8349b4"
  },
  {
    "url": "assets/js/17.8550f9f9.js",
    "revision": "373f14b9be1aa9a48128046bff34fae1"
  },
  {
    "url": "assets/js/18.5afc78c2.js",
    "revision": "88ff354f0941ee76427a488c0f288c90"
  },
  {
    "url": "assets/js/4.c310e045.js",
    "revision": "e10459d3809dba98c1bba49ef9ec64c3"
  },
  {
    "url": "assets/js/5.7a85ab9d.js",
    "revision": "d2a0842fd33bb86abef9e31bb8e29134"
  },
  {
    "url": "assets/js/6.9e0af006.js",
    "revision": "2a040f25d65412cf0e0ff391108c9896"
  },
  {
    "url": "assets/js/7.552da921.js",
    "revision": "17139daae679134f101d42a312ca4ee8"
  },
  {
    "url": "assets/js/8.c2467590.js",
    "revision": "423dc987dc2dfe89a5df9dcbef05cfaf"
  },
  {
    "url": "assets/js/9.4baef992.js",
    "revision": "4f1788b56f47c6b80450b59d1aaf74d3"
  },
  {
    "url": "assets/js/app.3370d2c2.js",
    "revision": "0db4c6467c576933fa9b4ba26ad0ceba"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "554d0cfcc09c737d6c6874ac6791410b"
  },
  {
    "url": "categories/java/index.html",
    "revision": "353b9533bfe5a93230b32bbba5965ace"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "05fb952eb7e3a3b3f67c5fda2fb9eac7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8ec979ef18edf62c7762097d868287d8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "b21f7f798297eb32eaa07142e2fb5b4a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b84c0f688dafa3ef350c3099bdf94020"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "218c047109da5740a30e65f6fd68e809"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "3e70730ad8bfc9f7b95deb6754f585e3"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "3a55a78c075f599b0286d8debccf7263"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b939f3468d558ce1587e3617c8c33869"
  },
  {
    "url": "tags/js/index.html",
    "revision": "a116c715005ca80c63b959036edb1267"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d8dab0e62f5d9c391ec405e7ebb49d8c"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "045fda20a917e050119a43fc28cc3dbd"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "d36c300481ca779fc569381405a01319"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "c92eb7123ce2f90c85efb87f87163ff6"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "94d64970f3fb9224fcaf7abc918b9cd9"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "343efd2019413c76ee835f7611003b92"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1a32c5ed052b54277ec005d798f97ea0"
  },
  {
    "url": "timeline/index.html",
    "revision": "1b91f16f3fc172910ff8daac8d8b0390"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "d7518e52cabe8da82129f0adb274390f"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "941c20545b04d879b44744f36ab099c0"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "975cb70411da1e787742b0b2245bc9fd"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b82b8a9b3b68ebf2f103b03cdd6cda92"
  },
  {
    "url": "生活分享/life.html",
    "revision": "6760af1537c44fec58d83e244c075d23"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
