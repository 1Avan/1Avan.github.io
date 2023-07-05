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
    "revision": "aed3bddb761f5f2f385e108325261dd8"
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
    "url": "assets/js/13.4fbd319a.js",
    "revision": "62407eb2dadaf4ab33f01210b4551955"
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
    "url": "assets/js/17.30470cba.js",
    "revision": "6f57b1871d88d563746d2d7623ea600c"
  },
  {
    "url": "assets/js/18.9ecad3ec.js",
    "revision": "c980d9420aaf4fd772c161629d498164"
  },
  {
    "url": "assets/js/19.57d480e7.js",
    "revision": "298888ae94f48cb77ce0442a1fd8cd86"
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
    "url": "assets/js/app.20c15f5d.js",
    "revision": "284cb6c367e77c18ecc4616d7db7e15e"
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
    "revision": "c06af08774f8357e7f894c36b4d5bcbf"
  },
  {
    "url": "categories/java/index.html",
    "revision": "ae6eafd387daee3c45f2cf3eb75e2c46"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "e14c4e774075bb7c5ed2161cd5457bbb"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "c57965c2b7c305ff958ee27c720fbc63"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "43d237fcb088745cad91436ad9f064e3"
  },
  {
    "url": "css/style.css",
    "revision": "d3bc02450a06489e215a44ea3c727d54"
  },
  {
    "url": "guide/index.html",
    "revision": "5e943697b2c87d7a7231914100cbab2c"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "009f1afb1ac65c9c5bc3b74aa67b35bd"
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
    "revision": "0f420dc52bdde839658766971b4c3511"
  },
  {
    "url": "js/custom.js",
    "revision": "7897c608c5131c75a427cac82498bc9d"
  },
  {
    "url": "tag/index.html",
    "revision": "8efe0efb2a79a99fc2f81345d128dd78"
  },
  {
    "url": "tags/API/index.html",
    "revision": "42036d7275d24a37edb3207de0fbe6e9"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "c317f8109b5581c6fa023e75567adf70"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "a13971c1fd5c3e69d6d1f47eb39605e1"
  },
  {
    "url": "tags/js/index.html",
    "revision": "9d8373d783e109965ad2c736960fa2da"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "a6214085c12a5ad3a841ddd6f2b3f4b0"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "da1b77c7da7d0b14d846db33b9ac6052"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "71eeb3b473f0385d6fa7da946700067e"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f0019c5291507a78c27eb418755160c9"
  },
  {
    "url": "tags/前后端分离/index.html",
    "revision": "d289ee26b66a975b23a1845a76afff1b"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "5277c22793063541e21c5d44855652fc"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "6033e6f96925969b6327f684348b4455"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "71021189709353a48551028639a78be8"
  },
  {
    "url": "timeline/index.html",
    "revision": "b94be038fde8fc9a8b014332e999b09f"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "b51c24c2e4bba950ea0a189539c3c974"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "6c8c9c3b1258ca0ea7cd6a1080720e0f"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "fd64843ca48936bd5a4759ba98d6bfcd"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "d19b95a1ed9be15255ec8bf590c6a57f"
  },
  {
    "url": "技术文章/前后端分离/Front-end-engineering.html",
    "revision": "d2acf9487e49fe664aa89a7e45ce6766"
  },
  {
    "url": "生活分享/life.html",
    "revision": "730f77b987ed5cda6b05d5a414fdab40"
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
