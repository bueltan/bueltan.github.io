'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js": "45bec3a754fba62b2d8f23c38895f029",
"canvaskit/skwasm.js": "831c0eebc8462d12790b0fadf3ab6a8a",
"canvaskit/skwasm.wasm": "6118609bab1fb8a6095ece94742e4053",
"canvaskit/skwasm.worker.js": "7ec8c65402d6cd2a341a5d66aa3d021f",
"canvaskit/chromium/canvaskit.js": "6bdd0526762a124b0745c05281c8a53e",
"canvaskit/chromium/canvaskit.wasm": "86624da3c23c9a4133c5bce5dd545f2a",
"canvaskit/canvaskit.wasm": "3effaeb644f5f4daaf7850adc9aabe41",
"icons/Icon-192.png": "3166adcee810e88b5aa7c32e7b80e5c3",
"icons/Icon-512.png": "475ccbea5915d412a2e5d52ba5980c31",
"index.html": "56b43291b6be6cfa3d5bd9025c5362f6",
"/": "56b43291b6be6cfa3d5bd9025c5362f6",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "7f2fba709cb63030814d221026d8af70",
"manifest.json": "c342a5a505e58cb460a1a2139c9563ce",
"favicon.ico": "a1cc3f5f225b574716ad5e0ddbc296e2",
"main.dart.js": "53eec03ffc72772c16c291b611264d97",
"assets/FontManifest.json": "92c72650db4126d6504b88c32df77c0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/AssetManifest.bin": "16bac32e2fa177ade9b32d82a079bc10",
"assets/assets/images/background_nasa_control.jpg": "f5048d9604ece4d448a5b89b62f87aac",
"assets/assets/images/1.jpg": "51b1733c752a2dd0762ffec413f5467a",
"assets/assets/images/4.jpg": "9e601925da2a39763280b2f7d1347cfc",
"assets/assets/images/soft_skills.svg": "f7285bf6192b39d8cc706b065dbf939e",
"assets/assets/images/background_apollo_control.jpg": "a198dac9622ea0755aa44bc3eeaff253",
"assets/assets/images/about_me_background.jpg": "1fddff21b89bf37f99e5207b1d0eff20",
"assets/assets/images/electronics.svg": "c07bf487bc167f87393e475007b5c3a8",
"assets/assets/images/3.jpg": "89b522d885c57d274624e0bc92fdb0f2",
"assets/assets/images/2.jpg": "716a3ba7ed4a209b3789c20d94000a90",
"assets/assets/images/background_space_cupola.jpg": "c4fd8eb25f591ce5ee3158479586f28d",
"assets/assets/images/experience.svg": "47a81b62b2affd86160f2049af2f019c",
"assets/assets/images/denis_profile.jpg": "caefa2d93445f45d92d54a09997ef280",
"assets/assets/images/background_welcome.jpg": "1aff6a27df9fde7abbd6b34befb12be6",
"assets/assets/images/background_space_cupula_soyus.jpg": "4cc2bdc2c754cbaa2da43995a4ea04f6",
"assets/assets/images/knowledge.svg": "da306b5a9f0519e5fad32ea720053a17",
"assets/assets/images/sysadmin.svg": "78c696de3cf34d679323c44292930caf",
"assets/assets/images/projects.svg": "f06f9dacd6221c25c34df032afc913df",
"assets/assets/images/about_me.svg": "5e264f32695ecedca052ccdfe71bb3c2",
"assets/assets/images/contact.svg": "5c2337d9210c42e8e3b19334e5460671",
"assets/assets/icons/electronics_icon.svg": "c07bf487bc167f87393e475007b5c3a8",
"assets/assets/icons/programming_icon.svg": "8f6c0f8c929e44f4ea09a8d91cdc5a5e",
"assets/assets/icons/soft_skills_icon.svg": "f7285bf6192b39d8cc706b065dbf939e",
"assets/assets/icons/email.svg": "8c6cc218c5e141d56ab5b3f77b7cf199",
"assets/assets/icons/sysadmin_icon.svg": "78c696de3cf34d679323c44292930caf",
"assets/assets/icons/github.svg": "43d9a6e41e1142a82e5485c76555b76a",
"assets/assets/icons/phone.svg": "99af957c952bad4a318b37f8964362be",
"assets/assets/fonts/UbuntuMono-Bold.ttf": "2925f45fcf9d6fba168f3621b211cc05",
"assets/assets/fonts/NeueMetanaMono-SemiBold.otf": "4c701f4c8c3e8dcf1057cf3e1a9a783f",
"assets/assets/fonts/UbuntuMono-Regular.ttf": "2c17f95d682cd6e0f78fab72666910a5",
"assets/assets/clave.key": "cdef7ecc4bdb4d3e6468934e1d254e25",
"assets/NOTICES": "f336a12381822b13579b937bfce41c92",
"assets/fonts/MaterialIcons-Regular.otf": "35da6d64a00c855d4aa235078c99d563",
"assets/AssetManifest.json": "65a7c4096b77c1294bd5a474c9752511",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
