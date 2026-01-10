'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "5e82f5047e4525ccd30411113b3ec46e",
"assets/AssetManifest.bin.json": "f357586eed4f982eda6e9df5b34f5a24",
"assets/assets/clave.key": "035220c6b0aa5084761d53ceb98caa4d",
"assets/assets/fonts/NeueMetanaMono-SemiBold.otf": "4c701f4c8c3e8dcf1057cf3e1a9a783f",
"assets/assets/fonts/UbuntuMono-Bold.ttf": "2925f45fcf9d6fba168f3621b211cc05",
"assets/assets/fonts/UbuntuMono-Regular.ttf": "2c17f95d682cd6e0f78fab72666910a5",
"assets/assets/icons/electronics_icon.svg": "c07bf487bc167f87393e475007b5c3a8",
"assets/assets/icons/email.svg": "8c6cc218c5e141d56ab5b3f77b7cf199",
"assets/assets/icons/github.svg": "43d9a6e41e1142a82e5485c76555b76a",
"assets/assets/icons/phone.svg": "99af957c952bad4a318b37f8964362be",
"assets/assets/icons/programming_icon.svg": "8f6c0f8c929e44f4ea09a8d91cdc5a5e",
"assets/assets/icons/soft_skills_icon.svg": "f7285bf6192b39d8cc706b065dbf939e",
"assets/assets/icons/sysadmin_icon.svg": "78c696de3cf34d679323c44292930caf",
"assets/assets/images/1.webp": "420c60b15fd5b2e9e80a7c97f780f14b",
"assets/assets/images/2.webp": "3681e667627359d4b8d760cab6a22bc7",
"assets/assets/images/3.webp": "5d66ed1e907c4e86bd77e31bedc43fa6",
"assets/assets/images/4.webp": "799e0d06e21172d8ef0f18e3bf047952",
"assets/assets/images/about_me.svg": "5e264f32695ecedca052ccdfe71bb3c2",
"assets/assets/images/cncad.webp": "461e3919ef685f015506be12ca471759",
"assets/assets/images/contact.svg": "5c2337d9210c42e8e3b19334e5460671",
"assets/assets/images/denis_profile.webp": "838956de4f62710391d1c81b8e470548",
"assets/assets/images/electronics.svg": "c07bf487bc167f87393e475007b5c3a8",
"assets/assets/images/entity_api_white.webp": "ce763e41957d6a8f1894651c8374c048",
"assets/assets/images/experience.svg": "47a81b62b2affd86160f2049af2f019c",
"assets/assets/images/foxy.webp": "e219e9c0a533027969855578248cf10c",
"assets/assets/images/guazuapp.webp": "b1df52b4353243b7b2f4e2f7d1df07fa",
"assets/assets/images/knowledge.svg": "da306b5a9f0519e5fad32ea720053a17",
"assets/assets/images/my_resume.webp": "89510db42169071cd07846ef6d5d9195",
"assets/assets/images/projects.svg": "f06f9dacd6221c25c34df032afc913df",
"assets/assets/images/quick_camera.webp": "6b9b4f6f9508bd8ee221ff922aa968b0",
"assets/assets/images/soft_skills.svg": "f7285bf6192b39d8cc706b065dbf939e",
"assets/assets/images/sysadmin.svg": "78c696de3cf34d679323c44292930caf",
"assets/FontManifest.json": "92c72650db4126d6504b88c32df77c0a",
"assets/fonts/MaterialIcons-Regular.otf": "8ace04c24086d3321bb4073ec07c3f98",
"assets/NOTICES": "38eefcd03f33df6af1a5f707f55904d6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.ico": "a1cc3f5f225b574716ad5e0ddbc296e2",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "8acbe394e9d82ddf7b8ab00d842965cb",
"icons/Icon-192.png": "3166adcee810e88b5aa7c32e7b80e5c3",
"icons/Icon-512.png": "475ccbea5915d412a2e5d52ba5980c31",
"index.html": "eb62c92c0287aea069e50ca81d4a634e",
"/": "eb62c92c0287aea069e50ca81d4a634e",
"main.dart.js": "a266bdb429351c9803caaf2368e68484",
"main.dart.mjs": "91796b9b36ff7d82f9b6533c71a3d456",
"main.dart.wasm": "45ec2f270b068cf4ab70c0cf904bcae2",
"manifest.json": "25e9f9dd6d14c6b07fbbf42eb8fb6562",
"version.json": "7f2fba709cb63030814d221026d8af70"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
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
