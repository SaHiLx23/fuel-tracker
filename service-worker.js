const CACHE="fuel-app";

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE).then(cache=>{
return cache.addAll(["/"]);
})
);
});
