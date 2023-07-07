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
    "revision": "e618638f68e6d936b82a2b94ae89f8a3"
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
    "url": "assets/js/13.79203fd8.js",
    "revision": "feda7f1d02066e9e7c046450d68f6185"
  },
  {
    "url": "assets/js/14.6bbc9b32.js",
    "revision": "1353846ad3a0e08d0a1fd66eeb1e6208"
  },
  {
    "url": "assets/js/15.731d3114.js",
    "revision": "61c9796df8126c3c8bbd77a9fd4854af"
  },
  {
    "url": "assets/js/16.54743988.js",
    "revision": "9fce64007be8172aa301b541ddfa9f50"
  },
  {
    "url": "assets/js/17.c92722c0.js",
    "revision": "52160e3f27bd0b1c460586c249362aa7"
  },
  {
    "url": "assets/js/18.3deba305.js",
    "revision": "2bb5b15339250e3673e45ebd8cd9bf2e"
  },
  {
    "url": "assets/js/19.653c2920.js",
    "revision": "fed444a25eac71a4fb28bdd37213f9a8"
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
    "url": "assets/js/app.27dc3b38.js",
    "revision": "f7986ed227265d3653b0307ec49628f8"
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
    "revision": "a172d861878509a51d43b8949c3be264"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bd2b5ad9152c49038e5c36e23a7ecf1b"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "69486a3039da3e7b7bbe2bd27c747775"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "43056f918f4bf7ec6ce03e5f2e33f332"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "dd4837b5df7c1da5069c32ddbb52d282"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "dd8df164bf747e4243355b07517c452e"
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
    "revision": "6e2f18017432fc21ea6496f2b27ee739"
  },
  {
    "url": "js/custom.js",
    "revision": "7897c608c5131c75a427cac82498bc9d"
  },
  {
    "url": "tag/index.html",
    "revision": "5cf78fb6bedfdbbbf5ddde33258b4d99"
  },
  {
    "url": "tags/API/index.html",
    "revision": "63d82e3f8d1ed56238443fb683639908"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "1efd52a875100d1bb638be20652dc86b"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a60c07a6c730045256afdef4d05df534"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e55645fbf8110c29bb6a115697c748c7"
  },
  {
    "url": "tags/Maven/index.html",
    "revision": "9a90d70a033dcc531b83053d2b392aee"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "feff00725a4f0b008367395c91cdffd3"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "afe60bef9990731b59158e288d3c9eb4"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "122937329149b2f2d2384f586ee5fd48"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "8cc7c6e5432e58591dec02b0c41b72f5"
  },
  {
    "url": "tags/前后端分离/index.html",
    "revision": "c14495f4758c898b4fd2c500af9e5f57"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f0c90f8da042f3a52653f84346051bcf"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "644dc4abe28667fba3f2c308d8645b0f"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "b0a80d5b9a96be68d693ce032f52b892"
  },
  {
    "url": "timeline/index.html",
    "revision": "b15c4321d6b32ff1e1895a0039ca869b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "7f2420a8f927c6dce8844d0ad79c628c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "228a194e62949671ed2276fd3e937e4a"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "d486e9f30932461f7116df81063310cb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "69e06424886f8d1f1f0af9caf63fb209"
  },
  {
    "url": "技术文章/前后端分离/Front-end-engineering.html",
    "revision": "824621edeab2823d0571d3ce3e9dc5a1"
  },
  {
    "url": "生活分享/life.html",
    "revision": "989e8c7625efe07593d7d85e5b0edee5"
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
