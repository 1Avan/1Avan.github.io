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
    "revision": "598c835eb371f2ee1c3998cdd596df24"
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
    "url": "assets/js/12.e1bab619.js",
    "revision": "0c777fe88fdd1926f6457e03ff5126c9"
  },
  {
    "url": "assets/js/13.4a3c5608.js",
    "revision": "8cb4d7fab0a33a6c8253dae1cc7522ae"
  },
  {
    "url": "assets/js/14.5f924852.js",
    "revision": "edddc78d86dcaef751018ef08cda00c4"
  },
  {
    "url": "assets/js/15.65fccb01.js",
    "revision": "a70ab1d3b6f8b1f3098fdd9a6b4a9937"
  },
  {
    "url": "assets/js/16.ed258a1e.js",
    "revision": "3715c071cd9357e79000b7b5a054ef35"
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
    "url": "assets/js/app.d9ba3563.js",
    "revision": "7d7d0b6c1823665d8ce22b1a9bc7e634"
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
    "revision": "292a5557eb25f1a5655daaaaf98ad8a3"
  },
  {
    "url": "categories/java/index.html",
    "revision": "7cb7edc9ebd336da5227a68889ddf722"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "5086bd4579235bdde3ddd931ed6b499a"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "481d66f2eccdd5614ee6f414739558d5"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "244ad3fb4830c759b87fa680df1b24c7"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "8dc05e38d1123b84c9e865e5c5ae223b"
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
    "revision": "3fef30ab8b5ed9fad2b93c23019e5854"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "d35834bddfe8f684b3df7a67d6a2bbe6"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "d3da1bc918d280aa1240d499cd33e589"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "1f68f0ba7e1926aa84986a0efccde440"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f13555893febc99249fa7d6a3d8b8891"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "2c49b6d04c3f8fac70a62e639a0b36d9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "2e245f0dee69b9b7730875673292125a"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "8ddb70b1ea3803880ec519b7709e7a22"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f461289a6939afaa1017d34e233daa30"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "bdff3786b89a6b37a6804af65f302a32"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "389a5712ed50e1d80aad6d6ae2a54364"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "74674eef005adcaa1e5b225322e4bd98"
  },
  {
    "url": "timeline/index.html",
    "revision": "0955f7db3d84a663818ecabc6f354987"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ce949feddceb64d913a8ef2f413593fe"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "3f1b45b4fbaf4278b1b7f1bcf9887c0c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6b327a4113cb0aeb66cffa2c8bdc0fc0"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ea56ae3e2a8760b7b0de889748549e72"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8f06dfc5e886ea12ea75e31366c65478"
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
