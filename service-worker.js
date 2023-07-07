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
    "revision": "21936eb2eccb1d3d9ce2864da9890a06"
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
    "url": "assets/js/17.c31626d7.js",
    "revision": "eff535b325107d408abfbf2ee005327c"
  },
  {
    "url": "assets/js/18.d75a03c6.js",
    "revision": "55fd41ad65ef120472a51509ff3b6349"
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
    "url": "assets/js/app.011473f7.js",
    "revision": "6757d1b9d960899e31a461508c6f7a58"
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
    "revision": "463f8d5066bd8b575bfa06b76680b35f"
  },
  {
    "url": "categories/java/index.html",
    "revision": "bd37553e7dc0610611664468924073a7"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "7d1554ba05ff4f6c1d69b907fa7ae1fb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "70429b22e032364f73ba6aeffef25ab9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "15c997f58d31f3ef797a283823d2cd2a"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "7312e68f6c3865bfb6828edce4fd089a"
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
    "revision": "de2d04a502e682cd9d80b7c6e523c888"
  },
  {
    "url": "js/custom.js",
    "revision": "7897c608c5131c75a427cac82498bc9d"
  },
  {
    "url": "tag/index.html",
    "revision": "86eeb029f694d28aec7eda825d0e7104"
  },
  {
    "url": "tags/API/index.html",
    "revision": "70a465d2c0b4b06fe642f9287e071df2"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "0bb4a639d777cb8be3ee128b77327054"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a2afec9b91439f63848b659950cfd140"
  },
  {
    "url": "tags/js/index.html",
    "revision": "7421761c5d6f80792722ed17fd02d1fa"
  },
  {
    "url": "tags/Maven/index.html",
    "revision": "d07716a4e793d4412bc8e91e6fa83138"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "e2f2c2c86d8f3c3dc2e3226e057dfa19"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "c0e8da2c54df0445f507601944b1220f"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c3df7ab4039b189e2841a3c23dea344a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "3d273bef8f26309e1487bcd7ec2f9d58"
  },
  {
    "url": "tags/前后端分离/index.html",
    "revision": "5b0e8f94b70376daaf72c15b20174b33"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e0f3957566ecfd7a0e406d9bbe0ec0c5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "bb2f84ac8e62594953665031fffab6ab"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "1813932db80e6f42c7c4041ca16308d5"
  },
  {
    "url": "timeline/index.html",
    "revision": "bed0d03cd771502dcbf901f05e7a2f20"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "ff568be04b53df1e796268055e944980"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "0c7f883fcf550bd48f4f076bbc9cdbd2"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "c61f816009fcc12329c012e504f35cde"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "b99ad4e4c12670d222d0de2dd6b18ff8"
  },
  {
    "url": "技术文章/前后端分离/Front-end-engineering.html",
    "revision": "04840ac3439f717c89ec297ddf7315c7"
  },
  {
    "url": "生活分享/life.html",
    "revision": "8656e35910d0be8b64619c25bb5f148f"
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
