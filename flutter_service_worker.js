'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-192.png": "3166adcee810e88b5aa7c32e7b80e5c3",
"icons/Icon-512.png": "475ccbea5915d412a2e5d52ba5980c31",
"favicon.ico": "a1cc3f5f225b574716ad5e0ddbc296e2",
"assets/icons/github.svg": "43d9a6e41e1142a82e5485c76555b76a",
"assets/icons/programming_icon.svg": "8f6c0f8c929e44f4ea09a8d91cdc5a5e",
"assets/icons/soft_skills_icon.svg": "f7285bf6192b39d8cc706b065dbf939e",
"assets/icons/email.svg": "8c6cc218c5e141d56ab5b3f77b7cf199",
"assets/icons/phone.svg": "99af957c952bad4a318b37f8964362be",
"assets/icons/electronics_icon.svg": "c07bf487bc167f87393e475007b5c3a8",
"assets/icons/sysadmin_icon.svg": "78c696de3cf34d679323c44292930caf",
"assets/AssetManifest.json": "5d18c388d3f6dea9526d3bfd628f5afd",
"assets/assets/icons/github.svg": "43d9a6e41e1142a82e5485c76555b76a",
"assets/assets/icons/programming_icon.svg": "8f6c0f8c929e44f4ea09a8d91cdc5a5e",
"assets/assets/icons/soft_skills_icon.svg": "f7285bf6192b39d8cc706b065dbf939e",
"assets/assets/icons/email.svg": "8c6cc218c5e141d56ab5b3f77b7cf199",
"assets/assets/icons/phone.svg": "99af957c952bad4a318b37f8964362be",
"assets/assets/icons/electronics_icon.svg": "c07bf487bc167f87393e475007b5c3a8",
"assets/assets/icons/sysadmin_icon.svg": "78c696de3cf34d679323c44292930caf",
"assets/assets/clave.key": "cdef7ecc4bdb4d3e6468934e1d254e25",
"assets/assets/fonts/NeueMetanaMono-SemiBold.otf": "4c701f4c8c3e8dcf1057cf3e1a9a783f",
"assets/assets/fonts/UbuntuMono-Regular.ttf": "2c17f95d682cd6e0f78fab72666910a5",
"assets/assets/fonts/UbuntuMono-Bold.ttf": "2925f45fcf9d6fba168f3621b211cc05",
"assets/assets/images/cncad.webp": "461e3919ef685f015506be12ca471759",
"assets/assets/images/foxy.webp": "e219e9c0a533027969855578248cf10c",
"assets/assets/images/about_me_background.webp": "65628e1583fca2c52d70d0937074d0ca",
"assets/assets/images/3.webp": "5d66ed1e907c4e86bd77e31bedc43fa6",
"assets/assets/images/1.webp": "420c60b15fd5b2e9e80a7c97f780f14b",
"assets/assets/images/quick_camera.webp": "6b9b4f6f9508bd8ee221ff922aa968b0",
"assets/assets/images/about_me.svg": "5e264f32695ecedca052ccdfe71bb3c2",
"assets/assets/images/projects.svg": "f06f9dacd6221c25c34df032afc913df",
"assets/assets/images/entity_api_white.webp": "ce763e41957d6a8f1894651c8374c048",
"assets/assets/images/electronics.svg": "c07bf487bc167f87393e475007b5c3a8",
"assets/assets/images/knowledge.svg": "da306b5a9f0519e5fad32ea720053a17",
"assets/assets/images/my_resume.webp": "89510db42169071cd07846ef6d5d9195",
"assets/assets/images/experience.svg": "47a81b62b2affd86160f2049af2f019c",
"assets/assets/images/sysadmin.svg": "78c696de3cf34d679323c44292930caf",
"assets/assets/images/4.webp": "799e0d06e21172d8ef0f18e3bf047952",
"assets/assets/images/background_space_cupola_soyus.webp": "e187fcb3f4f67a9a776ad94d7a867752",
"assets/assets/images/background_apollo_control.webp": "d1dc26c8b1f0c8a0dcaa56882975725b",
"assets/assets/images/background_space_cupola.webp": "2f02bd0b14a759d6bc6a4802cedd8be1",
"assets/assets/images/denis_profile.webp": "53a67ec64b1badd3eec4c2a0aa6b7279",
"assets/assets/images/2.webp": "3681e667627359d4b8d760cab6a22bc7",
"assets/assets/images/guazuapp.webp": "b1df52b4353243b7b2f4e2f7d1df07fa",
"assets/assets/images/background_nasa_control.webp": "0e096dfe7da65177466f2f16d7df0d01",
"assets/assets/images/soft_skills.svg": "f7285bf6192b39d8cc706b065dbf939e",
"assets/assets/images/contact.svg": "5c2337d9210c42e8e3b19334e5460671",
"assets/assets/images/background_welcome.webp": "ea5b7e352379092f44aa3f511eadeb57",
"assets/clave.key": "cdef7ecc4bdb4d3e6468934e1d254e25",
"assets/AssetManifest.bin.json": "8735d24fd9ecb32a2f11159f5d4d47fe",
"assets/fonts/NeueMetanaMono-SemiBold.otf": "4c701f4c8c3e8dcf1057cf3e1a9a783f",
"assets/fonts/MaterialIcons-Regular.otf": "8b6f5d3f7a6454d23b516e44953b53d2",
"assets/fonts/UbuntuMono-Regular.ttf": "2c17f95d682cd6e0f78fab72666910a5",
"assets/fonts/UbuntuMono-Bold.ttf": "2925f45fcf9d6fba168f3621b211cc05",
"assets/FontManifest.json": "92c72650db4126d6504b88c32df77c0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/images/cncad.webp": "461e3919ef685f015506be12ca471759",
"assets/images/foxy.webp": "e219e9c0a533027969855578248cf10c",
"assets/images/about_me_background.webp": "65628e1583fca2c52d70d0937074d0ca",
"assets/images/3.webp": "5d66ed1e907c4e86bd77e31bedc43fa6",
"assets/images/background_space_cupula_soyus.jpg": "4cc2bdc2c754cbaa2da43995a4ea04f6",
"assets/images/1.webp": "420c60b15fd5b2e9e80a7c97f780f14b",
"assets/images/quick_camera.webp": "6b9b4f6f9508bd8ee221ff922aa968b0",
"assets/images/about_me.svg": "5e264f32695ecedca052ccdfe71bb3c2",
"assets/images/projects.svg": "f06f9dacd6221c25c34df032afc913df",
"assets/images/entity_api_white.webp": "ce763e41957d6a8f1894651c8374c048",
"assets/images/electronics.svg": "c07bf487bc167f87393e475007b5c3a8",
"assets/images/knowledge.svg": "da306b5a9f0519e5fad32ea720053a17",
"assets/images/my_resume.webp": "89510db42169071cd07846ef6d5d9195",
"assets/images/experience.svg": "47a81b62b2affd86160f2049af2f019c",
"assets/images/sysadmin.svg": "78c696de3cf34d679323c44292930caf",
"assets/images/4.webp": "799e0d06e21172d8ef0f18e3bf047952",
"assets/images/background_space_cupola_soyus.webp": "e187fcb3f4f67a9a776ad94d7a867752",
"assets/images/background_apollo_control.webp": "d1dc26c8b1f0c8a0dcaa56882975725b",
"assets/images/background_space_cupola.webp": "2f02bd0b14a759d6bc6a4802cedd8be1",
"assets/images/denis_profile.webp": "53a67ec64b1badd3eec4c2a0aa6b7279",
"assets/images/2.webp": "3681e667627359d4b8d760cab6a22bc7",
"assets/images/guazuapp.webp": "b1df52b4353243b7b2f4e2f7d1df07fa",
"assets/images/background_nasa_control.webp": "0e096dfe7da65177466f2f16d7df0d01",
"assets/images/soft_skills.svg": "f7285bf6192b39d8cc706b065dbf939e",
"assets/images/contact.svg": "5c2337d9210c42e8e3b19334e5460671",
"assets/images/background_welcome.webp": "ea5b7e352379092f44aa3f511eadeb57",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3a5f19f13d00ec98fe2de91b600f7bcc",
"assets/NOTICES": "e42ce5fde8b5d588107d8a91c4994dc2",
"flutter_bootstrap.js": "484f4613782b451efd5310724a6df240",
"manifest.json": "96aa9ba528f23762d57c7d83ab9549ba",
"version.json": "7f2fba709cb63030814d221026d8af70",
"index.html": "a73f29ff8de40afab9f160b02633b259",
"/": "a73f29ff8de40afab9f160b02633b259",
"main.dart.js": "fbffadfca4727d9efc13260bf50cf1d2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
