// ແຈ້ງເຕືອນໂທລະສັບເທົ່ານັ້ນ — ບໍ່ເກັບໜ້າເວັບໄວ້ (ບໍ່ມີ fetch handler) ເພື່ອບໍ່ໃຫ້ເຫັນເວີຊັນເກົ່າ
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('push',e=>{ let d={}; try{ d=e.data.json(); }catch(_){ d={body:e.data?e.data.text():''}; }
  e.waitUntil(self.registration.showNotification(d.title||'Nani Logistics',{body:d.body||'',tag:d.tag,icon:'icon-192.png',badge:'icon-192.png',data:{url:d.url||'./'}})); });
self.addEventListener('notificationclick',e=>{ e.notification.close();
  e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(L=>{ const w=L.find(c=>c.url.startsWith(self.registration.scope)); return w?w.focus():clients.openWindow(e.notification.data.url); })); });
