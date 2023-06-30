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
    "revision": "ae661b0535d148dd88a1d9d40b6b867e"
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
    "url": "assets/js/12.221cd6c4.js",
    "revision": "57f4e66b245d6d20ff699d7bb95674f4"
  },
  {
    "url": "assets/js/13.ca79d5d9.js",
    "revision": "4546964e157c74eca7b099e89c1175cc"
  },
  {
    "url": "assets/js/14.96939e98.js",
    "revision": "087388776d721e414f81616e1d18a6ac"
  },
  {
    "url": "assets/js/15.54c65796.js",
    "revision": "31f6354b53226bdfec8eac4ce8fa2e15"
  },
  {
    "url": "assets/js/16.f32893de.js",
    "revision": "b8ebb98daeae1962499eebf35f7f0137"
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
    "url": "assets/js/app.201a4a92.js",
    "revision": "30dc5218c40730edb96c1124b28367ac"
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
    "revision": "6220f18dceb918715dd0b62325f787e1"
  },
  {
    "url": "categories/java/index.html",
    "revision": "31610e5cca74ead4af60a73d877d90a2"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1e785b4ab6017340ed1a6ee7a3df42bd"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6c1745b4e86b24ac7616a07c33f334f9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "200d7f87729d478975397b2182e68460"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "ca6c7eb888197ab0f03711746e0911f2"
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
    "revision": "2520ac95f3ba24d55e55666a78013c30"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "7e9623b20207a71d7580c532f0f45c13"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "74b56b474a175b2b21276afa087448e3"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "41e9688cdd9df169ae3f6207233f9ed2"
  },
  {
    "url": "tags/js/index.html",
    "revision": "af984a7b9d945a3f786e70ec126c65ff"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "4ab57b60f1002abff4e449137a5c42c9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "5195db109061b27d59166c56da5bfaa6"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "fe8fe35fe14760c7ee44c5254782a816"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "866ec9f684a84ecc311dd158900511db"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "b89d6f369abce24983c652e35757b69c"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "27f32832f5d09c379c4a36b4860a92e6"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "83f33dbd9c530b2edda89ca80ac06908"
  },
  {
    "url": "timeline/index.html",
    "revision": "edc6fafe92a9d220ccd10532cebd7e1b"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "689f0655da22eae8db240fb1a6cc6997"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6740152f0b150f8c8307d88490b28e40"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "ed07b7d1312e7e091b693aaa82fc08ae"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "cf8bc2a9a5c9b1993f2fb36722318d7e"
  },
  {
    "url": "生活分享/life.html",
    "revision": "08efe12c26df1b3dd35d3926a668e9db"
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
