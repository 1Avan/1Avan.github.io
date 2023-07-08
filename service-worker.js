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
    "revision": "22d1b975c9dc349a5bda1c69eafcbfb5"
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
    "url": "assets/js/13.e79f1ad2.js",
    "revision": "6f9efa473cf0d1d0a93b92269439767a"
  },
  {
    "url": "assets/js/14.030caf3d.js",
    "revision": "1ea273d3a218c88343909d188f91d5ef"
  },
  {
    "url": "assets/js/15.028202a8.js",
    "revision": "18b77f8da467699bc426f7f970ab190a"
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
    "url": "assets/js/app.7a8192ea.js",
    "revision": "01323351a197ca02efb89e77a161abba"
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
    "revision": "131db47878606eb2dd6bb9a0cc32d20c"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d5a03cde89a897643f2cb05801d7d171"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "f42695986d399b6e160f0a27bfd8d28b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "857a736b3a36723129be5db48ae346c9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "14643fea72d4c9b2e0043ef5ec7ffbf4"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7d87401ab7f818b255a9df816f65864a"
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
    "revision": "429f2232e60dae193c64b2e64f382325"
  },
  {
    "url": "js/custom.js",
    "revision": "833a3bea42cb5cc58875af5333addd34"
  },
  {
    "url": "tag/index.html",
    "revision": "b5f5989f7822402667ab14a430899a6c"
  },
  {
    "url": "tags/API/index.html",
    "revision": "d7206ffe26fb0fc28d931859ccb53eb5"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "9c51a89cebfd1d7b555c80529f262924"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "e0ddae0a537c6951076d3e4e442440b8"
  },
  {
    "url": "tags/js/index.html",
    "revision": "4a111c65f76d303cf8b482a389c0c3f6"
  },
  {
    "url": "tags/Maven/index.html",
    "revision": "e02c8884e8a62850498d4d5174e2c0b0"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5fe0790c96c0cec841dcbc164dc7f633"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6ce0d2759fcdb87f84aff51e53bc3c03"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "057b6c7735cd814c82032308e848dc10"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "59e1a336a2343bb8942fbf9f02dc4afd"
  },
  {
    "url": "tags/前后端分离/index.html",
    "revision": "74903124efc3c592590732bf910b55e1"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "96f81cf3a27098f282cae6dbf2074948"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d826e3d22b0f6503b2e6232d9247d2c7"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "82df5a000f91df0e6c0ce2e707373f1e"
  },
  {
    "url": "timeline/index.html",
    "revision": "88e8d02959aa24d49aff98cc070ed232"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "da9fce9a76408f14e315861f69ead134"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "e99ce1b03a5e245391a0fe6b965231c9"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "2f8135d39f49f497add5f05c2976b061"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "071a54eb8e5accb061f86988727d8b59"
  },
  {
    "url": "技术文章/前后端分离/Front-end-engineering.html",
    "revision": "e7817717192f8b04a9d94f7118fdebbd"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b751890b340045b1759b82552d06865d"
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
