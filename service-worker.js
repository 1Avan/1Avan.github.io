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
    "revision": "e0c89bd0235ed524c2489b60821eb6b4"
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
    "url": "assets/js/13.5fa7ac22.js",
    "revision": "1be2800fbf6a319e2607dba424dff3eb"
  },
  {
    "url": "assets/js/14.a8adeeee.js",
    "revision": "0333eadbfb07ac5878c248f4ff707786"
  },
  {
    "url": "assets/js/15.bf69c313.js",
    "revision": "fa40e17cc48e8eb06ba430050c313f5b"
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
    "url": "assets/js/app.71e168cc.js",
    "revision": "378207d2c7d697945ed4f49d69ba9456"
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
    "revision": "bbe690f5c4c0ff0ef1679cbff5c40868"
  },
  {
    "url": "categories/java/index.html",
    "revision": "f033f495fedc646be095c3992adfb37f"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1ba950ec8abba97933b995543828230f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "a15c833af20ef83e31ea7df310c405bb"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "c00167fd40e12576d480bcf10dfc41dd"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7f22c3d04c942caa2cde116727bd3821"
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
    "revision": "39cccf856ae111ec5aa2aab70206d06f"
  },
  {
    "url": "js/custom.js",
    "revision": "833a3bea42cb5cc58875af5333addd34"
  },
  {
    "url": "tag/index.html",
    "revision": "fce97fadc497f2d204281db46a985019"
  },
  {
    "url": "tags/API/index.html",
    "revision": "631a4f3663b347226b5e7560931b2b6b"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "329400e368a7a59ed6224b0dca4386ed"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "9083ab7c0463160d8526c63f1ef782e2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "e75e3e2c1d81b5ef10489e0d0726420a"
  },
  {
    "url": "tags/Maven/index.html",
    "revision": "66f452d64e0c7a907ffdc4ab8b83242e"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "84609fdd032828a550686cb00c20db20"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "41b69448b0ea327a7879dfacb2c576e9"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ccd4f7d6a8317bc184721e499c53e17b"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "55caa163327c32201baa7d99ac4c8cce"
  },
  {
    "url": "tags/前后端分离/index.html",
    "revision": "df4ed2b3fda68b950f14557580332077"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "f060ddc24204c027a8e70b029f5a25cf"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "31ce7b94c0866c2bcd3ad0b4f45d669b"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "3fd1d4160275ff41d5bd8179e58c17c5"
  },
  {
    "url": "timeline/index.html",
    "revision": "807ebd56cc5de2cf7148d73fb9a5fde9"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "c1bcb86d93294d97a0abbb389ee5235e"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d44209df6a65d86ffda1bc6802192b7e"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "fdd8b2bcbb9bacfe113ea8d5e3f8dd18"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "5ea08d6acf3b86d7502e33a01790ac77"
  },
  {
    "url": "技术文章/前后端分离/Front-end-engineering.html",
    "revision": "12e93473768a61e8a65b2ed1b2163f1f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "def6a9e1607243d4af2b1fce9db7dc7f"
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
