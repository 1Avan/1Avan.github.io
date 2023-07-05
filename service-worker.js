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
    "revision": "4f433f2197831d33f1d10c3162841dfd"
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
    "url": "assets/js/10.640a5abe.js",
    "revision": "2c0e099cf9c33f93bda5dbdfb3815125"
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
    "url": "assets/js/13.8774fd93.js",
    "revision": "ef38734bf660d3e52e4260e200904d30"
  },
  {
    "url": "assets/js/14.d8dc585f.js",
    "revision": "25d61d0e2d7418e90ff43b236c07a25d"
  },
  {
    "url": "assets/js/15.4296834b.js",
    "revision": "ee42242e8eb60505c5b0df4848fb881e"
  },
  {
    "url": "assets/js/16.ea279290.js",
    "revision": "b78a96e77cd5b561bcae58207f2e6c50"
  },
  {
    "url": "assets/js/17.7de324cd.js",
    "revision": "706cd6abc3c3d95a9bb0203d9cddd049"
  },
  {
    "url": "assets/js/18.296a15b0.js",
    "revision": "d336ea511b5533a3c8adc343993fd94a"
  },
  {
    "url": "assets/js/19.ea92bbb0.js",
    "revision": "7150e7ebe93ae40b2ba87c6dbf4ba9a8"
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
    "url": "assets/js/app.2b01d5bc.js",
    "revision": "1202aa6d5cc0f3673af06b68dd5b1f87"
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
    "revision": "cef0e04ce0275dde4c39a900ba4d4809"
  },
  {
    "url": "categories/java/index.html",
    "revision": "d811e325112ad557bef604e714c4beef"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "6320e7e7c268490b01cc136f192eb9fe"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7c30fb9a013e9c4ba2bab9c07ad7b5f7"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "519f7677c5fae2536397855a5ebc75ed"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "69b493549f10465ca5a2b9328b0c68b7"
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
    "revision": "a7811ef454b56c08bd266836972cb15b"
  },
  {
    "url": "js/custom.js",
    "revision": "7897c608c5131c75a427cac82498bc9d"
  },
  {
    "url": "tag/index.html",
    "revision": "51503281714dc2e022056f5557c574dc"
  },
  {
    "url": "tags/API/index.html",
    "revision": "b2df5f0b26a0fb7c30e64183e14877c1"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "4f98da0faa764ff74039e501fd393bdf"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "fb9680602fef9c38ebc7cee965046edc"
  },
  {
    "url": "tags/js/index.html",
    "revision": "c000f2e39940d4cfd1e8191cf46786f7"
  },
  {
    "url": "tags/Maven/index.html",
    "revision": "2825ee5f63f913e2b43eb0143ab1d3eb"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "5d519ae46d90cd591c29ca558a139e5e"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "6ed8c975d55b8e4ef2d920b1cdcb2dfe"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "60aa09dca548b932677853613324075a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "59ff0e1719e8356dffb098351b52452d"
  },
  {
    "url": "tags/前后端分离/index.html",
    "revision": "89e67000312ee12b443222f3ab0bd2d5"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "d05b91ae9d91988f08a72a55a8c380fd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "aeab91405bd91e865c46c2fd2ea0b8b1"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "ed2a0e196bb5642c988060146c71d11e"
  },
  {
    "url": "timeline/index.html",
    "revision": "5d9041f9757c761d2fdd1f9db87f4a94"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "409cf34d5424b1c08e6a7cba98a041cd"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "b71f4468df9346ffa9d0d6a782033000"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "22ff33b16ae49709329fdabecdc7787d"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "6e4fdfa9b63440ded5a981533cbe24de"
  },
  {
    "url": "技术文章/前后端分离/Front-end-engineering.html",
    "revision": "8077c039f4efb2274d91ad97e6ecd9cc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "74ade35c257f4b20a73d3f69ac3455cb"
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
