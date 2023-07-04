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
    "revision": "967f3d3b242ba227938f1d1055394663"
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
    "url": "assets/img/32065b9d5e3354a90cba5724e9b992d1.c0662892.jpg",
    "revision": "c0662892d0ba8a52b6cf7ce4ac7768e3"
  },
  {
    "url": "assets/img/aaa8f6608f730c44493875a570d8e5c7.84a1b262.jpg",
    "revision": "84a1b26299f029c0c7990157798a16ed"
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
    "url": "assets/js/10.0d407879.js",
    "revision": "cc3c08b806b6052128ec89975fa2c5fa"
  },
  {
    "url": "assets/js/11.4fe005a5.js",
    "revision": "c40f12a5445bd44895ea0f68c361ee35"
  },
  {
    "url": "assets/js/12.b17955df.js",
    "revision": "d90b78d3b868e849540ae5a143dcc0fb"
  },
  {
    "url": "assets/js/13.c33c1387.js",
    "revision": "19420b3b6066354ab96b863b558ab1e8"
  },
  {
    "url": "assets/js/14.baeaf38e.js",
    "revision": "bafc4aefb5518274e6bb07101925d61e"
  },
  {
    "url": "assets/js/15.f5b81ea6.js",
    "revision": "1e96f48e3da2b61ba698ebb656ecb310"
  },
  {
    "url": "assets/js/16.cc9e4651.js",
    "revision": "7cf8644ac2140c9680467d0aa6eaf806"
  },
  {
    "url": "assets/js/17.b5dc79a5.js",
    "revision": "4e81dd8ce21906311693517ba841d37d"
  },
  {
    "url": "assets/js/18.de52fcf8.js",
    "revision": "d6b9c87e80537a1f27b5290509959f4f"
  },
  {
    "url": "assets/js/4.021c3dbd.js",
    "revision": "d163964649ab028c987089af3527d046"
  },
  {
    "url": "assets/js/5.94aaed42.js",
    "revision": "f40fd1774e47f556c9737d1441baee66"
  },
  {
    "url": "assets/js/6.d199cd8a.js",
    "revision": "6663f4417c923daea0fe08aad64d7c09"
  },
  {
    "url": "assets/js/7.f08bdbf0.js",
    "revision": "9ce3c19043197359af119577de0e495c"
  },
  {
    "url": "assets/js/8.4a5226e2.js",
    "revision": "55cd7a0bad9c123d73f437a603c7a10b"
  },
  {
    "url": "assets/js/9.7bf75b5e.js",
    "revision": "bc8afdca6cae022d1d6984025f71c701"
  },
  {
    "url": "assets/js/app.53d49750.js",
    "revision": "7268a240e1c006581adf7ed6f8d535e0"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f3688d28.js",
    "revision": "560a2f9a41edea0c1d9e93b21dd38820"
  },
  {
    "url": "avatar.png",
    "revision": "7918e19a24b11486199814117169071c"
  },
  {
    "url": "categories/index.html",
    "revision": "c7b212b9dc3a24ed15ee97d1d266348e"
  },
  {
    "url": "categories/java/index.html",
    "revision": "09d34a4c88a980f416340ff121fbf096"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "679d8af083ed56aab8966ab65c4ee2d0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "1456516d5e32c5c4114a2ba4b414ada8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "910cb903df764a3683416799d600542e"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "e5e40e35e4ac4c945a57591cc199e43c"
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
    "revision": "78eb0c98a987f48633ba6a2423779487"
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
    "revision": "cc79358b7886eabd2d1b8ecabdb04122"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "f36e3d691b1ad10b0fae15fd77629507"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "08a9cd11beedcb13d97c168d0f5fdcb2"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c36acb462f0950d7094afd5aaa9d87b7"
  },
  {
    "url": "tags/js/index.html",
    "revision": "f51c4820c8d0fc584b5c1a4b36d1d4f0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "7607d8e0a4ac3c1fc74f58433a2c44d4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4d7d9fbbcdcb2d4972257184ec7472c7"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "93b7706cb4ad937583618858c82a8ec0"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "0645c8d39fb9cc7427bcbf944a4765ed"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "8c8ca50e39c7765476be94660c878688"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "0f7ee5603f003db96b9cfdebe90dfe4e"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "f7b2254b6afd95b061233a2ad0a3f901"
  },
  {
    "url": "timeline/index.html",
    "revision": "3a60c84223a719842cc260889b822978"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "544b997aea8e9904b03252a505553cf2"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b0f91910263a2653e92ad1eb4760d6ee"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "08dfb135080097541a648f986fa74ef5"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "e6e5b2d2581c09098f44cedc78067b63"
  },
  {
    "url": "生活分享/life.html",
    "revision": "27b25fc33fe7d998f2d37ec75e4aea8d"
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
