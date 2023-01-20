//キャッシュの名前
const CACHE_NAME = 'teamsIDexplorer-asset0121';
//キャッシュするアセット類を指定
var assetsToCache = [
    './',
    './index.html',
    './css/index.min.css',
    './scripts/index.min.js',
    './scripts/aadAuth.min.js',
    './scripts/graph.min.js',
    './scripts/home-cooking.min.js',
    './scripts/localize.min.js',
];

//インストール イベント (キャッシュを行う)
self.addEventListener('install', (e)=> {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            try{
                return cache.addAll(assetsToCache);
            }catch(err){
                console.log(err.message);
            }
        })
    );
});

//アクティベイト イベント (古いキャッシュを削除する)
self.addEventListener('activate', (e)=> {
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                //今回指定されたキャッシュの名前と違う場合は
                if (key !== CACHE_NAME) {
                //キャッシュを削除する
                return caches.delete(key);
                }
            }));
        })
    );
});

//取り出し時のイベント (キャッシュから取り出す)
self.addEventListener('fetch', (e)=> {
    e.respondWith(
    caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
    })
    );
});
