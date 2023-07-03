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
    "revision": "765efa6f66540577827e811aa75becaa"
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
    "url": "assets/js/12.c79c778a.js",
    "revision": "62f94b801b18ce943914245e08d33f5e"
  },
  {
    "url": "assets/js/13.ca79d5d9.js",
    "revision": "4546964e157c74eca7b099e89c1175cc"
  },
  {
    "url": "assets/js/14.179eaf8f.js",
    "revision": "7fdc669ad85130ad137a228209249b3d"
  },
  {
    "url": "assets/js/15.54c65796.js",
    "revision": "31f6354b53226bdfec8eac4ce8fa2e15"
  },
  {
    "url": "assets/js/16.fc67d057.js",
    "revision": "7bed02765cf9056e995bf32ff82bb3e1"
  },
  {
    "url": "assets/js/17.66972c9b.js",
    "revision": "206181d85b857baea779be315406a7b6"
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
    "url": "assets/js/app.c7085d75.js",
    "revision": "5f0d8dae58254f0d906ac3ac50a39081"
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
    "revision": "b9153bbf71a3a6c2156d7c622467e475"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e65cb42f7bdb1d025029f56db89bb729"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5bf9095f22f668d3bcba1e1853fbc0f2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "3c9b74eee494fc589d5bd25ae2ae21ac"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "63f489db4e7db35282f96ecc7fe2a7ca"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "a01fddb3cdda88a903997550c3899e5e"
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
    "revision": "6f0b201d0b7290e2981dc850dc644dc6"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "14a2d7b1a1f1815afb2f2dca0029671f"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "5ab5861912b0af2ee0d74f18549271a1"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e43715bf328ac440efac01d1aec6fa67"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8b94381c72c5cc3b055287be5187f615"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "51d0ef5eedd79dbea6a175a2403accfe"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "70cc20721966331a309c775bec576955"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "47507db6bf2abeab5745b784a8041808"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "27d89f188fd063060cbfc1cf620b39c4"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "63b078373e17e0d3a3189cf35c65c71b"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "89d833e961ae5631e4c1f66747d41da5"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "8bd5d07a03cc87fe36d9a6da90a39653"
  },
  {
    "url": "timeline/index.html",
    "revision": "75bd55068a84bb72d9ac7d5045cd4f15"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "a0a096f82a04b69764602ae477c1a21b"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "974202bea11134030f230edf43146d0c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "644d7a9040abbf6e672e6cfa4c0b558e"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5e6b593f90316402b4e68ef08aa6418c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "00f3113316b943a1bfb6e429ee5a849e"
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
