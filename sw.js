// HoloCote service worker : l'app s'ouvre même hors connexion,
// les images de cartes sont gardées en cache, les prix viennent toujours du réseau.
const VERSION = "holocote-v2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest", "./icons/apple-touch-icon.png", "./icons/icon-192.png", "./icons/icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== "holocote-images").map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;

  // Prix et identification : toujours en direct
  if (url.hostname === "api.tcgdex.net" || url.hostname === "api.anthropic.com") return;

  // Images de cartes : cache d'abord
  if (url.hostname === "assets.tcgdex.net") {
    e.respondWith(caches.open("holocote-images").then(async c => {
      const hit = await c.match(e.request);
      if (hit) return hit;
      const res = await fetch(e.request);
      if (res.ok || res.type === "opaque") c.put(e.request, res.clone());
      return res;
    }));
    return;
  }

  // Coquille de l'app : réseau d'abord, cache si hors ligne
  if (url.origin === location.origin) {
    e.respondWith(fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
  }
});
