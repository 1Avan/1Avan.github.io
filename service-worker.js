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
    "revision": "7fbd58e312747dfe4302b721244bb8aa"
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
    "url": "assets/js/1.b996f87b.js",
    "revision": "5d2283a0886619f9675752bf3d5766d9"
  },
  {
    "url": "assets/js/10.7d597cd9.js",
    "revision": "735c97728e56d07954bbb8e8744cdf63"
  },
  {
    "url": "assets/js/11.4618c4ff.js",
    "revision": "394498dcf42860101ca064897738499f"
  },
  {
    "url": "assets/js/12.9b83643f.js",
    "revision": "f856017c03e6b8e913a199673a6ad563"
  },
  {
    "url": "assets/js/13.f410b2c5.js",
    "revision": "5b6e7c508f2c3c26e7452762a8d97a0c"
  },
  {
    "url": "assets/js/14.64125097.js",
    "revision": "f32f21918b428c5653abfc245e1b0e15"
  },
  {
    "url": "assets/js/15.8e7d37b7.js",
    "revision": "a7bd70ed9867eee5edcd7d4526a16faa"
  },
  {
    "url": "assets/js/16.eca4420e.js",
    "revision": "cdc23ea78da091e8f307f3a7d4c841ec"
  },
  {
    "url": "assets/js/17.4dc0763c.js",
    "revision": "50a86e3f95c732e4ecc1e453892f1cf7"
  },
  {
    "url": "assets/js/18.a71b4195.js",
    "revision": "75b7a3a1976d287bd809f47687b69fba"
  },
  {
    "url": "assets/js/19.ea92bbb0.js",
    "revision": "7150e7ebe93ae40b2ba87c6dbf4ba9a8"
  },
  {
    "url": "assets/js/4.c5e2e1ba.js",
    "revision": "3015092cbaa77e2735bd06d024fe0c7b"
  },
  {
    "url": "assets/js/5.b74f7ed6.js",
    "revision": "0199a0a327a98750353936f46f1cdf53"
  },
  {
    "url": "assets/js/6.83077b5a.js",
    "revision": "d4873ab0f19eeaca40cb6627dd62262f"
  },
  {
    "url": "assets/js/7.cca9da52.js",
    "revision": "8ec2f72dd72cc405eab53ffa42bd3ff9"
  },
  {
    "url": "assets/js/8.37bbafeb.js",
    "revision": "a4c1e5775203ed29b517ffff3c50fba6"
  },
  {
    "url": "assets/js/9.3ddf64cc.js",
    "revision": "7722a14f1228ddcd04c85032b0f93c7d"
  },
  {
    "url": "assets/js/app.f273964c.js",
    "revision": "2e2c8f7d2122e8db6a4ef9537ced811e"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.52b0f080.js",
    "revision": "024647632a15104f0bd67db1d12371d9"
  },
  {
    "url": "avatar.png",
    "revision": "7918e19a24b11486199814117169071c"
  },
  {
    "url": "categories/index.html",
    "revision": "97e4048cdde9d96006350e4e5e566272"
  },
  {
    "url": "categories/java/index.html",
    "revision": "e08f8e868b9fcf7cf8bb09cb30f25bae"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "9464f6e46544a56dac95ae81e005c174"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "61c95d1bedd0d8c230ca1001ee642bef"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "cd2fa32c56411b6e405a7bf93178bf13"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "3e0aba040ddfe359f02e488a098d97c4"
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
    "revision": "5225c936abbdcb291bb45c86d04c35e8"
  },
  {
    "url": "js/custom.js",
    "revision": "7897c608c5131c75a427cac82498bc9d"
  },
  {
    "url": "tag/index.html",
    "revision": "14f420fabe43e139471226247aa90576"
  },
  {
    "url": "tags/API/index.html",
    "revision": "41f5509f25514da60f8fc5d0e6a97cfc"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "97dd6837a58d6717f14a1b88feb032b2"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "7bf6a9c335b652b08718171f82e161bb"
  },
  {
    "url": "tags/js/index.html",
    "revision": "8bf0e995fb4aacca8739a55dd7cb1366"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "c04eb27dd596ec042208f16aa36623e4"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "50b39b13dada4609e4daa1faceee37ed"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "c42290c73aa5d8b8bd6e55881f98061a"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "cd29f36b43825fda34dd80deb6d3df17"
  },
  {
    "url": "tags/前后端分离/index.html",
    "revision": "5603e2411a0181d3563740a7feaa329a"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "21a51762b9597fa09040cf1457b6736f"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "d7df26a249a7104a5c0a216ba07d9a68"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "fe6ff21d180e41ac11b89dc4897c9525"
  },
  {
    "url": "timeline/index.html",
    "revision": "19c1c510514a48e49577131e83e0302c"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "39c979f2d345611d2613b592d2a825c1"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "d1771b84b391ca918b09522b7245bafd"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "f9cb05a7160439d643e1f79f1e054abb"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "722b596d7c7c16297fd5d7738659b334"
  },
  {
    "url": "技术文章/前后端分离/Front-end-engineering.html",
    "revision": "69fd6b16d232bf8f0b39ea73d65d4f54"
  },
  {
    "url": "生活分享/life.html",
    "revision": "b627cd569f8c4d1da0496b19c3b4cd27"
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
