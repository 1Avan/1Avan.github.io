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
    "revision": "ad45c6d4c0e1fd035dcf1a0035c7f32b"
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
    "url": "assets/js/13.17785509.js",
    "revision": "019d0a7ca5cbdc2b065dd9c11635634c"
  },
  {
    "url": "assets/js/14.fc9c8931.js",
    "revision": "20cda2dd9d1c40117508e839901af179"
  },
  {
    "url": "assets/js/15.edd0e1b8.js",
    "revision": "ac91fbb3e862e1abee6e30bd4ecce766"
  },
  {
    "url": "assets/js/16.e63c1646.js",
    "revision": "e5cefa891ed1dbd86e85fb8dde5c20a6"
  },
  {
    "url": "assets/js/17.703acb43.js",
    "revision": "1ac845eb3ea0db472779268f116d2580"
  },
  {
    "url": "assets/js/18.cdf55b24.js",
    "revision": "8fc69820ccbfcd2e1c404f669141f2d5"
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
    "url": "assets/js/app.10d517b5.js",
    "revision": "266440c03e804298ec8ecfd5847f468d"
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
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "c72dca3576b2d94e1e47f741c8559731"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d3aa9388862e06dbb30e44a9bd155fa6"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7d423d6bc2cba2d7972b4a45645c2f40"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "752475a420f581e638721234786122e8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "8997e4fe0a33e6e04e8d3be6d32b68e8"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "b9fad03c80d02bad34f8acba9e4080b8"
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
    "revision": "c2f4d07695cc83bdd65efddd9e0b1630"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "be1e53d536783aa3b4d4f93f5f0f14a5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "a79db6728da26b942acd4f004438357e"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "87f9effdd12895d23163c27ed723984e"
  },
  {
    "url": "tags/js/index.html",
    "revision": "bfd9b044b9491e3ed733152beb9ee13c"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "9d1f1f56839963d5fe2a58127f41fa88"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "a54c685685626580be6e7929690bc40e"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "bb9d6faa80ccba8ef17dc41ebd4b183c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "818e2bc06def42ba4a2883f5acf02057"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "ba40d8b38f81dfd7f97de23e4e60342f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "fb7ba9704dfca7eab03c05d7d00d1b52"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "a3fd276af948e6d72cddd67531cde43e"
  },
  {
    "url": "timeline/index.html",
    "revision": "28387ece8174850fc1e31544622fbcc4"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e191742be75e54f7a61ae2b4db11c357"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "2f7eb08a12997636ae7ec3a3d1ef5637"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "6aed47c2e6b6dac0a42307fe69f317c1"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "c530aba7145b90b741d3164e7622c906"
  },
  {
    "url": "生活分享/life.html",
    "revision": "309119a9b098c85373085ad79dc28505"
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
