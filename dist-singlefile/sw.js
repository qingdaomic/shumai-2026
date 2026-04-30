// 数脉 Service Worker — 离线缓存
const CACHE_NAME = 'shumai-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/icon-192.svg',
  '/icon-512.svg',
];

// 安装：预缓存关键资源
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

// 激活：清理旧缓存
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// 请求拦截：网络优先，失败走缓存
self.addEventListener('fetch', (e) => {
  // 只缓存同源 GET 请求
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // 成功：克隆一份存缓存
        const clone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
