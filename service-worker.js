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
    "revision": "b5983a523487fb9fc09f4d5709c6b771"
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
    "url": "assets/img/image-20230704131527793.f557e420.png",
    "revision": "f557e4201d2c1ee58958edbf20bfbfdd"
  },
  {
    "url": "assets/img/image-20230704131618937.f557e420.png",
    "revision": "f557e4201d2c1ee58958edbf20bfbfdd"
  },
  {
    "url": "assets/js/1.79af81df.js",
    "revision": "7b5064701eb4f2946d1d7a54d9bf1a6e"
  },
  {
    "url": "assets/js/10.3ba0c045.js",
    "revision": "6efe7384187b05175df5c09588163f42"
  },
  {
    "url": "assets/js/11.b1b0af3b.js",
    "revision": "4550edc142a84ddd609562f3ce48983b"
  },
  {
    "url": "assets/js/12.d79ad8fd.js",
    "revision": "23deab5e038d04c677c8e3919dd7127f"
  },
  {
    "url": "assets/js/13.3a7cb52d.js",
    "revision": "eec3447ba59d7a9debc93e1e5b914615"
  },
  {
    "url": "assets/js/14.8569119d.js",
    "revision": "cde84a6d68bb6edc5ec3d189c5742db6"
  },
  {
    "url": "assets/js/15.67c26a2f.js",
    "revision": "8ccfca974272352195d8af6ef1c3605a"
  },
  {
    "url": "assets/js/16.f8d8bed1.js",
    "revision": "795f1f3dcbc41d3a03d7ce10015c84ae"
  },
  {
    "url": "assets/js/17.d7e9873f.js",
    "revision": "75fa5a81e50cf521caee25b2b575a91c"
  },
  {
    "url": "assets/js/18.a3250a48.js",
    "revision": "3697b329a6aef20d524e04ce35c97ae5"
  },
  {
    "url": "assets/js/19.22ed8637.js",
    "revision": "41145964997920f8df812b8ace10aac9"
  },
  {
    "url": "assets/js/4.031e7121.js",
    "revision": "74cbd1e8796f176d9946c6f62a13ea05"
  },
  {
    "url": "assets/js/5.73f83c45.js",
    "revision": "5411f251ccdb61dd7c54b986713f83c3"
  },
  {
    "url": "assets/js/6.f91f847b.js",
    "revision": "b40fac4083b6242ac20a37da1dcbeda7"
  },
  {
    "url": "assets/js/7.ae041ddd.js",
    "revision": "58ff903c8a8d1378214a31824b727934"
  },
  {
    "url": "assets/js/8.9dca120a.js",
    "revision": "eb90fb564fe93d4460ab89e173b6debe"
  },
  {
    "url": "assets/js/9.cd63d4f2.js",
    "revision": "ccbd7a2836789e4b045b1b01fb7c332b"
  },
  {
    "url": "assets/js/app.de6a4214.js",
    "revision": "65917a46fba5b5fb4ce5fcb935f302c2"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.f2eb6a7e.js",
    "revision": "e5cfa6e10ffc3bef8246fe056235ecc3"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/html/index.html",
    "revision": "966b00703e7570de4f525e9ef732b273"
  },
  {
    "url": "categories/index.html",
    "revision": "26b8471f72e4d054e52f547e7a951962"
  },
  {
    "url": "categories/java/index.html",
    "revision": "0d187f6893a7a855c5b5a0898296d5c1"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "163c99f6db0c326375324514d4fe7d0b"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7306353ec162127f2faac9e0b4ac1c74"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "aa5666ebcb97bf0d2178fa6efa8c2a29"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "6365e8bb474265c529added9c835aac1"
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
    "revision": "02abbbe10e7d8d2ec509934b068086eb"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "fc44271c7145ae577fa083c7987a6133"
  },
  {
    "url": "tags/div/index.html",
    "revision": "c98fb34cf9572337ffad4e07641ea4ea"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "06fb8ae21be6807e36d2d176b2261887"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "4aa820c3c0ce08376625e6bd93be0081"
  },
  {
    "url": "tags/js/index.html",
    "revision": "5096a402240111dddd8dadb5fec36a81"
  },
  {
    "url": "tags/span/index.html",
    "revision": "07cee7eedf11e29bda95849277560473"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d151e6ba4c46b316fb56c27c9a8f0eb8"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "9578a02186c704705c41fc66074699ce"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "3807455837525a1c39fd626b58f0ef4c"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "902668c36303c4dee61bdf76d048eb19"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "0f92c6a92823a027aa496a63a44d20a5"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "04f424d2ca7ea93b35fc7d1de0558379"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d41ed0121dcd348174b5a68b03bb0fb2"
  },
  {
    "url": "timeline/index.html",
    "revision": "6c9def6d14e4650b4517df70eaae1297"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "04d6c058abdab6278ec10ddbbb6851bb"
  },
  {
    "url": "技术文章/java/html.html",
    "revision": "33ede62f84c17fbbda7ee36d130ce614"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "63483fe950fff95c7836a6e1dd8b37ee"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "fdd2082cb3668949bb2cd49672367f9a"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2126e2afff320c4290322c7e7e74b69a"
  },
  {
    "url": "生活分享/life.html",
    "revision": "2b6d9698e1fc1629a9064271e3684d3e"
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
