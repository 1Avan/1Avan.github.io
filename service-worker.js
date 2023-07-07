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
    "revision": "34069b5fc51c729a1aae21e9b9863ed9"
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
    "url": "assets/img/image-20230705100653502.a745d906.png",
    "revision": "a745d9067bcf9f6bf454ffd0848f62ef"
  },
  {
    "url": "assets/img/image-20230705211621864.83c76b3d.png",
    "revision": "83c76b3d21816b1e1a95da74045006d1"
  },
  {
    "url": "assets/img/image-20230705211801157.b0ceefff.png",
    "revision": "b0ceefff1b6db456dab7769cce5baeff"
  },
  {
    "url": "assets/js/1.79af81df.js",
    "revision": "7b5064701eb4f2946d1d7a54d9bf1a6e"
  },
  {
    "url": "assets/js/10.c5d253c9.js",
    "revision": "0a75e696516f6199a840c560a1390153"
  },
  {
    "url": "assets/js/11.fe1fbd86.js",
    "revision": "89bfce71c418d76e45b12fb05b7624b0"
  },
  {
    "url": "assets/js/12.e887a639.js",
    "revision": "e1cbc2f0582bc684bb7416715c2dc6e6"
  },
  {
    "url": "assets/js/13.040cb6c5.js",
    "revision": "27db6ce866bf583283765eeeec528adb"
  },
  {
    "url": "assets/js/14.18e46ebd.js",
    "revision": "3f5a8e612015281ed1092561fa6e3f0c"
  },
  {
    "url": "assets/js/15.602459a6.js",
    "revision": "dc5def54c4e2b95dd35a8c64c5e80bb0"
  },
  {
    "url": "assets/js/16.54743988.js",
    "revision": "9fce64007be8172aa301b541ddfa9f50"
  },
  {
    "url": "assets/js/17.c31626d7.js",
    "revision": "eff535b325107d408abfbf2ee005327c"
  },
  {
    "url": "assets/js/18.7a1b985f.js",
    "revision": "7f06fdc4005031f6411dab36efe358a3"
  },
  {
    "url": "assets/js/19.9afae1d2.js",
    "revision": "45a09f6b4287fec3fedab95e557bf361"
  },
  {
    "url": "assets/js/4.d4f01fde.js",
    "revision": "0c2ab8ce44a675063824b7644d46d019"
  },
  {
    "url": "assets/js/5.cbeb7fb6.js",
    "revision": "45563901c241216d99ee6d79eb76df41"
  },
  {
    "url": "assets/js/6.69a7ab32.js",
    "revision": "33268b410cc04b05d17517474b279adf"
  },
  {
    "url": "assets/js/7.edac8680.js",
    "revision": "3d2cd6c0f102a850c873b21040f7ed8d"
  },
  {
    "url": "assets/js/8.b0ba44c0.js",
    "revision": "e967cc1e676164a8c0db0a389f72bf19"
  },
  {
    "url": "assets/js/9.decd0484.js",
    "revision": "95f535768ad95460e746e721459e13e8"
  },
  {
    "url": "assets/js/app.48edf6fe.js",
    "revision": "10785804bff27db91a191f82a84d997b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.7d20672e.js",
    "revision": "f913842d2b260b00a62e42dee8729b47"
  },
  {
    "url": "avatar.png",
    "revision": "7918e19a24b11486199814117169071c"
  },
  {
    "url": "categories/index.html",
    "revision": "0e5d4d34787b6eaf483a9d3cb34cda1d"
  },
  {
    "url": "categories/java/index.html",
    "revision": "838b02577de308c11f29ae5c8fdd011c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "827619d555f9141a69cb153a79a3fe33"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8abe91ce39ed239c1445eb83fa0e1a18"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "e7816905f313d8eff3f3ed16b7190c3b"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "effe52de4225e2b203dfc921501c49b0"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "39844a3fb100743cc2edfcad219d6447"
  },
  {
    "url": "img/img1.png",
    "revision": "b2d836d70d64c7b7dd8197670532f61d"
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
    "revision": "a5533d0b746a1a472bfb3628259f2cfe"
  },
  {
    "url": "js/custom.js",
    "revision": "7897c608c5131c75a427cac82498bc9d"
  },
  {
    "url": "tag/index.html",
    "revision": "5270123609eb666a60d2e61acd2d4863"
  },
  {
    "url": "tags/API/index.html",
    "revision": "d165af3c188332ce53146530faf03b0c"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "76227fb6facdb4b9d9d40f6cf34410ba"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "b20b82ecf7524e2818c539beef967ffe"
  },
  {
    "url": "tags/js/index.html",
    "revision": "b36d293c21647684b11620e3fb54cfe0"
  },
  {
    "url": "tags/Maven/index.html",
    "revision": "08c9dd062e370cd96472d500927d259d"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "42cc309686f51d43e74084ef993c3d57"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "4c3afa310e68980c93f262b3f3fab5f2"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "32887b45515d200354b60f74a40f507a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "47b0145645268e15c0bb269239283acb"
  },
  {
    "url": "tags/前后端分离/index.html",
    "revision": "f9c12a68c39ee6c95f383423c5dda205"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a54364f315b7788e4bafbd80e7dfd676"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "7c473dc90e456e5da6d55d76fd434397"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "96a648949defc21e8ec6113e220c12e4"
  },
  {
    "url": "timeline/index.html",
    "revision": "da942932390c6a6f349eb358704c9372"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "f30d4d9c65ae1eea73e840f8d320b9e8"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "c0c0c3d1113fc9f9982df52908ea53e8"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "495b103fc2ef709498774a9a53205e86"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "ce399edbeb023973feec4b9c10a8f3ee"
  },
  {
    "url": "技术文章/前后端分离/Front-end-engineering.html",
    "revision": "063f2a0b76a89ac573a27474e7cd394a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "eefd84d58b249e386112b02725768ace"
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
