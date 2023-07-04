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
    "revision": "3aa0720b0ebb4c9aad3eaf288b9bf74a"
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
    "url": "assets/js/12.d5a12f0a.js",
    "revision": "7b4b907e345dc71bde5f89b6c8abc8a9"
  },
  {
    "url": "assets/js/13.4a3c5608.js",
    "revision": "8cb4d7fab0a33a6c8253dae1cc7522ae"
  },
  {
    "url": "assets/js/14.88be41ae.js",
    "revision": "498b1e8d46010741ce9511f2ad330205"
  },
  {
    "url": "assets/js/15.881f1c71.js",
    "revision": "139fb947484616d1abc8e1b44abbcbda"
  },
  {
    "url": "assets/js/16.153b0256.js",
    "revision": "a38a957fae1cba7a30e2807f5ffc4aa2"
  },
  {
    "url": "assets/js/17.81826f14.js",
    "revision": "3ccb10a92edd069925666d9133873238"
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
    "url": "assets/js/app.60e10c1c.js",
    "revision": "cf2646b044735639b055eaefe75c76e3"
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
    "revision": "de7690d4dd6eb5444eb1a7aafa62ae24"
  },
  {
    "url": "categories/java/index.html",
    "revision": "c89cdad8287da10171a59dd4d93ff58c"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "c018c0f6423cb6b9eddb4c38709fc116"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "de380ebf5b2613b8ed79244f1f6ff997"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "3477944999a95815e3a7ffa8776f63e2"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3265a52f15ed029ca6401dbaf847c62f"
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
    "revision": "f25947d0a74d67749caae0d65baf84f3"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "c7e8c66f7e6ed83289d60b89f0c8edec"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "062b733c1accfa4398f78cf78b8dea32"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "3b7c9b2cd07a60362f5436e162d9193f"
  },
  {
    "url": "tags/js/index.html",
    "revision": "790ea6365e0c1ce0271a575e126b648f"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a8fed7aa5b5542650e7f60f7c61c75b9"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "b3c46dc20eef84c1ba5a435d2a98fdf0"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "e5095f43cf4063f9608fa85038dba9a4"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "dbcafbbbf03291e6532b3d9bbb33d472"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "929a4e500f4648b42aaea5b55e539068"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "e6f1c85ddeb038f672333c23b5ef8a05"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "d9bf9325013e21a6d86dd369216607a3"
  },
  {
    "url": "timeline/index.html",
    "revision": "a2b61052bef9d0700254bde84c870934"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "04bd0808b4d028b620e2378f65dd3a4c"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "1a51c530687a5cab1761808dbbc5a07c"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f6400548899989336f9edc3fc3dcef71"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2b0f4577d0fabc463ed217d53d8017f6"
  },
  {
    "url": "生活分享/life.html",
    "revision": "90c742bda1db59ace11505dfb570fd9c"
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
