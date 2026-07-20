/* Météo Glass — coquille en cache pour le hors-ligne.
   Seuls les fichiers de l'appli et le CDN chart.js sont mis en cache :
   aucune donnée ni URL d'API (Ecowitt, Open-Meteo, Enphase, relais…) n'y entre. */
const CACHE='meteo-glass-v3';
const ASSETS=['index.html','manifest.json','icon.svg','favicon-32.png','apple-touch-icon.png','icon-192.png','icon-512.png','https://cdn.jsdelivr.net/npm/chart.js@4.5.0/dist/chart.umd.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(!u.protocol.startsWith('http'))return;
  if(u.origin!==location.origin&&u.hostname!=='cdn.jsdelivr.net')return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{const cl=r.clone();caches.open(CACHE).then(c=>c.put('index.html',cl));return r;}).catch(()=>caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const cl=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));}return res;})));
});
