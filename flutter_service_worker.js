'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b868435afe36937a7d790d87d73bb621",
"assets/assets/audio/bgmj.mp3": "6bf14358841af062578ea9a396841b4a",
"assets/assets/audio/hurt7.wav": "1d3abcc01a999fc13bbb91e75a15c72c",
"assets/assets/audio/jump14.wav": "117ba1ac434eaba4dc894b0bfe16e42e",
"assets/assets/dead.json": "a388629528ee90d51b53e2ce740e565a",
"assets/assets/hit.json": "3c806aa1b358bd8556787cd7d3a208da",
"assets/assets/images/dead.png": "9c63ee1e0949e867a739b16b79b1d62e",
"assets/assets/images/enemies/angry_pig/Run%2520(36x30).png": "a69cd13d8345e6906c400416553f6042",
"assets/assets/images/enemies/angry_pig/Walk%2520(36x30).png": "ce06f2c96e2ac0c6cd14e854a870e3e8",
"assets/assets/images/enemies/bat/Flying%2520(46x30).png": "7986dfad436b4607994d3fe1ecced6ce",
"assets/assets/images/enemies/bee/attack%2520(36x34).png": "d6bd004e2b12a43722c631643877e8bb",
"assets/assets/images/enemies/bee/bullet%2520pieces.png": "767967808e69f8d6a3a1f0dae675dce0",
"assets/assets/images/enemies/blue_bird/flying%2520(32x32).png": "96b92c11650df1cb24b18b4dce30dc37",
"assets/assets/images/enemies/bunny/run%2520(34x44).png": "c4d7e1212b3d337f0be0e6bb476fd288",
"assets/assets/images/enemies/chameleon/Attack%2520(84x38).png": "232005d4ed479f6d43a1bc23d5ceebce",
"assets/assets/images/enemies/chameleon/run%2520(84x38).png": "26c68c327500fe45d2fe6f6d48c54d2c",
"assets/assets/images/enemies/chicken/run%2520(32x34).png": "58190fdf957eaba5b783bbe2df837c2e",
"assets/assets/images/enemies/ghost/appear%2520(44x30).png": "7dbcc1b1b6fd12afdd5dc558a5b07a90",
"assets/assets/images/enemies/mushroom/run%2520(32x32).png": "f4455c243603b217cbd950a3d49e62cd",
"assets/assets/images/enemies/radish/run%2520(30x38).png": "d0d3ff59320e7c9ea44dcead669dddfd",
"assets/assets/images/enemies/rino/run%2520(52x34).png": "ec606d010f9bc60557b58c4ec855524e",
"assets/assets/images/enemies/rocks/run%2520(22x18).png": "c5cd938ee706eb7e9b8051076229d36f",
"assets/assets/images/enemies/skull/idle%25202%2520(52x54).png": "c266245d8cf3abe7a052c6f4e4d32527",
"assets/assets/images/enemies/slime/idle-run%2520(44x30).png": "18c00de4ccc9a5026237c945ff226a4c",
"assets/assets/images/enemies/snail/walk%2520(38x24).png": "793fde1396db7a63a9a5e2e8566237e6",
"assets/assets/images/enemies/trunk/attack%2520(64x32).png": "f60bc0c750357fbdace60ffe687ed9fb",
"assets/assets/images/enemies/trunk/bullet%2520pieces.png": "a74632012dcebb913c092bb492628d90",
"assets/assets/images/enemies/trunk/hit%2520(64x32).png": "30b82b960f33a1b8be30c1a2a70c68fe",
"assets/assets/images/enemies/trunk/run%2520(64x32).png": "4b6173eb09f0816c898e5a73edbd020f",
"assets/assets/images/enemies/turtle/spikes%2520out%2520(44x26).png": "38b86e6a34e67c7d90e749cf2d4a0057",
"assets/assets/images/hit.png": "d32671f4f4ed6132e5a7ccc7dd33710b",
"assets/assets/images/jump.png": "dfae079e7c5b0ce9ff1896dc1c9a0fc9",
"assets/assets/images/parallax/plx-1.png": "25c49cc12aeed4d2799dc9fb52e3c213",
"assets/assets/images/parallax/plx-2.png": "53d9e937ac94613d7d408fcc50fa67c7",
"assets/assets/images/parallax/plx-3.png": "b50ebfb91131365a479f229c0325c033",
"assets/assets/images/parallax/plx-4.png": "58662c8e1ed9bd74717dfa54df862788",
"assets/assets/images/parallax/plx-5.png": "552941c58ccaa9782ebee6496e77e003",
"assets/assets/images/parallax/plx-6.png": "7efd16ff500f8670ee6e1cb0da9234a4",
"assets/assets/images/run.png": "1fa6912135eb01184c2ae88863395a5f",
"assets/assets/jump.json": "3d27fff210438c23aff383a5bbfacda8",
"assets/assets/run.json": "37bad817b819617f47d448d5895511da",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "f9a8ce403c1305610ee512d2c944ec81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9d53a2a942d5794d83586d14f9d914c2",
"/": "9d53a2a942d5794d83586d14f9d914c2",
"main.dart.js": "bb96fa6b6f45d5ffcf972dd5b8c03332",
"manifest.json": "37f22a8268812e7784bd75e4b9c47dff",
"version.json": "a12f2cc30a3a839752c0a60666558712"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
