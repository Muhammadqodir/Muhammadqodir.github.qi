'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "065bc4b29f63540940f43e4b859afed4",
"index.html": "ff2d017a8864246c8bed5b5bb41985ab",
"/": "ff2d017a8864246c8bed5b5bb41985ab",
"main.dart.js": "71604bfda6fd93d68a87e0b775c920cd",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "42bf4f4efd70f818025f9b89cb439215",
"assets/AssetManifest.json": "766068a49909ac9624efa2a49df3df1b",
"assets/NOTICES": "d22203dbc75e8e5b95934919831c96cd",
"assets/FontManifest.json": "3eb75129c326464f2325ad821f82d0c0",
"assets/AssetManifest.bin.json": "2646f709efe75473faad5d0315b9aa81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8656925fd985fa0ef7aa39945da95480",
"assets/fonts/MaterialIcons-Regular.otf": "de5758833b42478c674bb981552dbda9",
"assets/assets/img/result.svg": "75fa5408297bb6957fb5f00c343d7290",
"assets/assets/img/flutter.jpg": "bf444a1fc5709dc67b525aaa311a5d15",
"assets/assets/img/banner.png": "7f0e7f36c196191392a7c2e8fdacf6ef",
"assets/assets/img/java.jpg": "1c8f984c7ac36b1aedba3b72bd35521c",
"assets/assets/img/js.jpg": "d6308b3945b5f19b78f61c1363c005fe",
"assets/assets/img/LoginImg.png": "4603e79a5f36e283db0d5f8a9db0fc6a",
"assets/assets/img/avatar.jpg": "baba2655995b0c069254481c2a91d756",
"assets/assets/img/logo.png": "b2f0a13bb1e89e15eccc35d4ae6a81bf",
"assets/assets/img/kotlin.jpg": "5726fcd0c3d558d3a9aab245e47e4ec2",
"assets/assets/icons/user.svg": "14cbcf945cfdb01806d73ab2a2c13d73",
"assets/assets/icons/community.svg": "e2413a6bd163b9fb6046d2bc43f66ed6",
"assets/assets/icons/road.svg": "dc8243ab551bf05cf9692ff3862e9fd4",
"assets/assets/icons/lock.svg": "44d8be15d1027774330de6688a6c80bc",
"assets/assets/icons/icons8-edit.svg": "0edbf3b1e58421457d96fa33e8b37949",
"assets/assets/icons/crown.svg": "f8cc7be818a7962107969f8e9a351974",
"assets/assets/icons/star.svg": "24a1302ed433d0013a93003e310e1282",
"assets/assets/icons/codding.svg": "006e0546100668b9d8e64368959b32fc",
"assets/assets/icons/result_img.svg": "cf18d9820ac0979d5b542c30bb8657de",
"assets/assets/fonts/LevelUpIcons.ttf": "cf731313b7ca722d5a502bc93155bee6",
"assets/assets/fonts/Ubuntu.ttf": "d3c3b35e6d478ed149f02fad880dd359",
"assets/assets/fonts/Monserrat.ttf": "3fe868a1a9930b59d94d2c1d79461e3c",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "f1b800f6a9fac877f65a545b9f76c703",
"canvaskit/canvaskit.js.symbols": "d0b3bf92014e698856d505a65b5f0ee9",
"canvaskit/skwasm.wasm": "5a5c6171d2eed658e3b5fff70c4af82c",
"canvaskit/chromium/canvaskit.js.symbols": "e3a8db3bea434c929936f69d84e2f2bd",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.wasm": "e86670fe2af62cbdd3b75e098f393924",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.wasm": "567c5aeda8f673d1b76256d2682fd3b9",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
