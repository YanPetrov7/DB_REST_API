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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "102b0698bfe7ece01028781250488a37"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1b53039e.css",
    "revision": "3e09dc3c1b75236ce7dbbb0f257d5c16"
  },
  {
    "url": "assets/img/already_exist.99aeafff.png",
    "revision": "99aeafff9d9a092837e0fd7e415a8ced"
  },
  {
    "url": "assets/img/console_res.4d1ccf5e.png",
    "revision": "4d1ccf5ea247601aece56b1f2e5168db"
  },
  {
    "url": "assets/img/create_data_file_send.42fd0b4b.png",
    "revision": "42fd0b4b639f21432d4c3cc166df2f4f"
  },
  {
    "url": "assets/img/create_data_files_succsess.ea2f9b8a.png",
    "revision": "ea2f9b8adeab9bda86965797df8ecac8"
  },
  {
    "url": "assets/img/delete_data_file_by_id_result.e96da84b.png",
    "revision": "e96da84b72ff1f894f1fd414363f9a81"
  },
  {
    "url": "assets/img/delete_data_file_by_id_send.13f35f07.png",
    "revision": "13f35f076a89e1a7ba938d9941bf2ea5"
  },
  {
    "url": "assets/img/delete_data_file_by_id_succsess.49309dd0.png",
    "revision": "49309dd0700cb0e2b6b00dbf97d703f2"
  },
  {
    "url": "assets/img/get_data_file_by_id_send.91adf2f7.png",
    "revision": "91adf2f70318c6dba59709702a00dc9b"
  },
  {
    "url": "assets/img/get_data_file_by_id_succsess.e570c5ec.png",
    "revision": "e570c5ec3b7434b449c33bb650e39ee3"
  },
  {
    "url": "assets/img/get_data_file_send.ae49334e.png",
    "revision": "ae49334ef683329144d88c049319446b"
  },
  {
    "url": "assets/img/get_data_files_succsess.b345df68.png",
    "revision": "b345df68a18670c1b2544bbc5a390207"
  },
  {
    "url": "assets/img/nesesery_fields.4520a4e7.png",
    "revision": "4520a4e75dc43cc833debdea7b225803"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/unknown_file.5da08c68.png",
    "revision": "5da08c68882e3d9be8be95aedb817aed"
  },
  {
    "url": "assets/img/update_data_file_by_id_before.73a72591.png",
    "revision": "73a72591f949592350af1417316ae7c3"
  },
  {
    "url": "assets/img/update_data_file_by_id_result.7210ec10.png",
    "revision": "7210ec10934030e8ca826470b9d37718"
  },
  {
    "url": "assets/img/update_data_file_by_id_send.750f0c64.png",
    "revision": "750f0c640183007f194c1ff8bdd54b58"
  },
  {
    "url": "assets/img/update_data_file_by_id_succsess.f71f63ae.png",
    "revision": "f71f63ae7fb4edd7cb64257de2745abf"
  },
  {
    "url": "assets/js/10.581e1220.js",
    "revision": "ae867cb3632c1d11496bd0c3c64dc144"
  },
  {
    "url": "assets/js/11.70839b02.js",
    "revision": "eba251e531fef8f58256bbffa2027186"
  },
  {
    "url": "assets/js/12.13c287cf.js",
    "revision": "a9991b3a1eb725cea4333ca4d4efa410"
  },
  {
    "url": "assets/js/13.19c85a35.js",
    "revision": "612c052d7d80da7b2adb7d29157694ee"
  },
  {
    "url": "assets/js/14.22f23496.js",
    "revision": "00410f986c079107e0d10af213e24105"
  },
  {
    "url": "assets/js/15.b8c1599c.js",
    "revision": "f04220953b1f8aa7e3570154e739191f"
  },
  {
    "url": "assets/js/16.26300858.js",
    "revision": "35d34f770bc112e8ee672b6637a462de"
  },
  {
    "url": "assets/js/17.c0e8f4cf.js",
    "revision": "28d51521db657c7f553548921e5efcde"
  },
  {
    "url": "assets/js/18.9e21ffa4.js",
    "revision": "d95cc6e93b0ff4456f9a5fc2eb3c83cb"
  },
  {
    "url": "assets/js/19.fb087673.js",
    "revision": "e8cbb70b72bfab2db4b8b77822bf667b"
  },
  {
    "url": "assets/js/2.a70db7be.js",
    "revision": "d7f88c6b7fbaec0cfe705ed23032dab8"
  },
  {
    "url": "assets/js/20.f8cf7836.js",
    "revision": "cb132aa90b047529bda7ed239a07a719"
  },
  {
    "url": "assets/js/21.b0416f6d.js",
    "revision": "2f98d7394768e1abb005987e3d088c3c"
  },
  {
    "url": "assets/js/22.5991b55f.js",
    "revision": "f4ffddbbd5a920276120812c2f33a447"
  },
  {
    "url": "assets/js/23.dc6cf073.js",
    "revision": "3edee018ce4778356cb4e66f9c04c12a"
  },
  {
    "url": "assets/js/24.9282478e.js",
    "revision": "558146fc6f48f86cdfa48a33e85bd5fe"
  },
  {
    "url": "assets/js/26.d0e518fb.js",
    "revision": "10d20167cb7c63ab7d66ac28c21d0426"
  },
  {
    "url": "assets/js/3.54d5b903.js",
    "revision": "12e564337082579b620bdc7ea9d6a1a6"
  },
  {
    "url": "assets/js/4.56a0e777.js",
    "revision": "63663ea365a8b7e2e1dae4ed531c4757"
  },
  {
    "url": "assets/js/5.ac170b7f.js",
    "revision": "ffa44e858f4dc02ae238ea3bc2c46795"
  },
  {
    "url": "assets/js/6.d6e17e0d.js",
    "revision": "8321bcef441e163d4708681848da73a6"
  },
  {
    "url": "assets/js/7.e991ce59.js",
    "revision": "27e1ce8898cfc9beecdf260549350d46"
  },
  {
    "url": "assets/js/8.d1e6c660.js",
    "revision": "005f7d9484c6357627917bfa5bbee091"
  },
  {
    "url": "assets/js/9.200342e4.js",
    "revision": "e2430a882c06ace09fbdaae44df4a0e4"
  },
  {
    "url": "assets/js/app.a559ff3a.js",
    "revision": "5960606da186d549231ba4a469227d4d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9f7c6989638226af39df56cc7e79ca14"
  },
  {
    "url": "design/index.html",
    "revision": "1e7830522ffdb5bb37907b048a54941b"
  },
  {
    "url": "index.html",
    "revision": "5ab35e771f640594953ebd36a5c934ac"
  },
  {
    "url": "intro/index.html",
    "revision": "378a072aff50d8d4f39a4fbd13483f10"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "0aa2b232b0a2f186bb5ea9d134b19cb8"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "877fe3ab54943c65555f0ab3a3b95678"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "4b12581144036a0d1bb6ab38a76247b8"
  },
  {
    "url": "software/index.html",
    "revision": "f933c191539169efae6ea00743c3a997"
  },
  {
    "url": "test/index.html",
    "revision": "a42fecbac16a3e0508121eec91538ae9"
  },
  {
    "url": "use cases/index.html",
    "revision": "ef92323294a985ad0014e4059c350971"
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
