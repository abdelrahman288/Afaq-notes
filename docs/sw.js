const V='afaq-v16',
SHELL=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png','vendor/pdf.min.mjs','vendor/pdf.worker.min.mjs','vendor/pdf-lib.min.js'],
CDN=['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js','https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'];
self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(V);await Promise.allSettled(SHELL.map(u=>c.add(u)));await Promise.allSettled(CDN.map(u=>c.add(u)));await self.skipWaiting()})())});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=='afaq-share').map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;const u=new URL(r.url);
 if(r.method==='POST'&&u.origin===location.origin&&u.pathname.endsWith('/share-target')){e.respondWith((async()=>{try{const fd=await r.formData(),f=fd.get('file');if(f&&f.size){const c=await caches.open('afaq-share');await c.put('shared-file',new Response(f,{headers:{'Content-Type':f.type||'application/octet-stream','x-name':encodeURIComponent(f.name||'shared')}}))}}catch(err){}return Response.redirect('./?shared=1',303)})());return}
 if(r.method!=='GET')return;
 if(u.origin===location.origin){e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>{const net=fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(h=>h.put(r,c))}return x});return m?(net.catch(()=>{}),m):net.catch(()=>caches.match('index.html'))}))}
 else if(u.hostname==='cdnjs.cloudflare.com'){e.respondWith(caches.match(r).then(m=>m||fetch(r).then(x=>{if(x.ok){const c=x.clone();caches.open(V).then(h=>h.put(r,c))}return x})))}});
