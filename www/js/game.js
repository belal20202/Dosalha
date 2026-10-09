let L=mk(1),car=CARS[0],P,items=[],parts=[],fuel=1,run=0,st='menu',camX=0,camY=0,stall=0,dead=0,msg='',inp={g:0,b:0},keys={};
let pops=[],lean=0,smk=[],fsd=0,cur='menu';
function fs(){try{const e=document.documentElement,f=e.requestFullscreen||e.webkitRequestFullscreen,p=f&&f.call(e);p&&p.catch&&p.catch(()=>{});screen.orientation&&screen.orientation.lock&&screen.orientation.lock('landscape').catch(()=>{})}catch(_){}}
function puff(px,py,a,C,vx,gas,dark,k){k=k||1;const ex=(-C[4]-18)*k,ey=10*k,ca=Math.cos(a),sa=Math.sin(a);smk.push({x:px+ex*ca-ey*sa,y:py+ex*sa+ey*ca,vx:vx*.3-30*ca+(Math.random()-.5)*20,vy:-25-Math.random()*35,l:.9+(gas?.3:0),m:gas?1:.55,d:dark})}
function drawSmoke(){smk.forEach(p=>{const k=Math.max(0,p.l);X.globalAlpha=Math.min(.5,k*.5*p.m);X.fillStyle=p.d?'#222':'#cfd3d8';X.beginPath();X.arc(p.x,p.y,4+(1.2-k)*16,0,7);X.fill()});X.globalAlpha=1}
const MS=1.5;
function mcar(){const C=CARS[S.car],w=C[4]*MS,x=camX+W/sc*.27,y0=T(x-w),y1=T(x+w),a=Math.atan2(y1-y0,2*w);return{x,a,y:(y0+y1)/2-(14+C[3])*MS/Math.cos(a)}}
function show(id){['menu','lv','gar','over','set','pp'].forEach(s=>$(s).classList.toggle('on',s==id));$('pb').style.display=st=='play'?'block':'none';cur=id;$('mc').textContent='🪙 '+S.coins;$('ps').textContent='المرحلة '+S.lv}
function home(){st='menu';mood=0;L=mk(Math.min(S.lv,N));camX=700;camY=-250;show('menu')}
function play(i){
 fs();
 L=mk(i);car=CARS[S.car].slice();car.g=CARS[S.car].g;mood=0;{const u=U(S.car);car[2]*=1+.12*u[0];car[8]*=1+.06*u[1];car[7]*=1+.2*u[2]}snd();pops=[{t:'المرحلة '+i,l:2.2}];smk=[];fuel=1;run=0;stall=0;parts=[];items=[];const r=L.r;
 for(let q=700;q<L.len-300;q+=220+r()*260){const n=3+(r()*3|0);for(let j=0;j<n;j++){const cx=q+j*55;items.push({x:cx,y:T(cx)-55-Math.sin(j/(n-1)*Math.PI)*45,t:0})}}
 for(let q=4000;q<L.len;q+=6000+r()*3000)items.push({x:q,y:T(q)-60,t:1});
 P={x:250,y:T(250)-45,vx:0,vy:0,a:0,av:0,wr:0};camX=P.x-W/sc*.3;camY=P.y-H/sc*.58;st='play';show(null)}
function end(k){
 if(k=='p'){st='pause'}else st='over';
 $('ot').textContent={w:'🏁 أكملت المرحلة!',l:'💥 '+msg,p:'⏸ متوقف'}[k];
 $('ov').innerHTML='المسافة: '+(P.x/30|0)+' م • 🪙 +'+run+(k=='w'?'<br>جائزة الإنجاز: +'+(50+L.d*8):'');
 const b=$('b2');b.style.display=k=='p'||(k=='w'&&L.l<N)?'block':'none';b.textContent=k=='p'?'▶ استمرار':'المرحلة التالية ◀';b.dataset.k=k;show('over')}
function nx(){if($('b2').dataset.k=='p'){st='play';show(null)}else play(L.l+1)}
function crash(m){if(st!='play')return;mood=3;msg=m;st='dead';dead=.9;save();beep(80,.4,'triangle',.07);S.vib&&navigator.vibrate&&navigator.vibrate(120)}
function phys(dt){
 const C=car,gas=(inp.g||keys.g)&&fuel>0,br=inp.b||keys.b,ca=Math.cos(P.a),sa=Math.sin(P.a),I=2*C[4]*C[4];let gd=0;
 P.vy+=L.g*dt;
 for(const s of[-1,1]){
  const lx=s*C[4],rx=lx*ca-14*sa,ry=lx*sa+14*ca,wx=P.x+rx,pen=P.y+ry+C[3]-T(wx);
  if(pen>0){gd++;
   const sl=(T(wx+1)-T(wx-1))/2,n=Math.hypot(sl,1),nx=sl/n,ny=-1/n,tx=1/n,ty=sl/n,
   vx=P.vx-P.av*ry,vy=P.vy+P.av*rx,vn=vx*nx+vy*ny,vt=vx*tx+vy*ty;
   const f=Math.max(0,700*Math.min(pen,30)-55*vn);let ft;
   if(gas)ft=C[2]*.5*L.gr*C[8]*Math.min(1.5,Math.max(0,1-vt/1500));
   else if(br)ft=vt>60?-1100:-C[2]*.25*Math.max(0,1+vt/500);
   else ft=-vt*.3;
   const tl=f*1.2*Math.max(1,C[8]*.6);ft=Math.max(-tl,Math.min(tl,ft));
   const fx=nx*f+tx*ft,fy=ny*f+ty*ft;
   P.vx+=fx*dt;P.vy+=fy*dt;P.av+=(rx*fy-ry*fx)*dt/I;
   if(gas&&s<0&&Math.random()<.04)parts.push({x:wx,y:wx>0?T(wx):0,vx:-P.vx*.2+Math.random()*40,vy:-Math.random()*90,l:.6})}
 }
 if(!gd)P.av+=(br?1:gas?-1:0)*6*dt;
 P.av*=1-.5*dt;P.x+=P.vx*dt;P.y+=P.vy*dt;P.a+=P.av*dt;P.wr+=(P.vx*ca+P.vy*sa)/C[3]*dt;P.gd=gd;
 if(!gd){P.air=(P.air||0)+dt;P.rot=(P.rot||0)+P.av*dt}else if(P.air){const fl=Math.floor(Math.abs(P.rot)/5.9),b=(P.air>.8?Math.round(P.air*5):0)+fl*20;if(b>0&&st=='play'){S.coins+=b;run+=b;pops.push({t:'+'+b+(fl?' 🔄':' ✈'),l:1.5});beep(660,.18,'sine',.03)}P.air=0;P.rot=0}
 const gg=C.g,rl=gg.rx,ry=gg.roof-3-gg.lift,qx=P.x+rl*ca-ry*sa,qy=P.y+rl*sa+ry*ca;
 if(qy>T(qx)-2)crash('انقلبت السيارة!');
}
function post(dt){mood=P.air>.45?2:(inp.g||keys.g)?1:0;lean+=(((inp.g||keys.g)?-3:(inp.b||keys.b)?4:0)-lean)*Math.min(1,dt*8);
 const gas=(inp.g||keys.g)&&fuel>0;fuel=Math.max(0,fuel-dt*(gas?.035:.01)/car[7]);if(Math.random()<(gas?.8:.3))puff(P.x,P.y,P.a,car,P.vx,gas,fuel<.2);
 for(const it of items)if(!it.g&&Math.abs(it.x-P.x)<60&&Math.hypot(it.x-P.x,it.y-P.y)<55){it.g=1;if(it.t){fuel=Math.min(1,fuel+.6);beep(392,.3,'sine',.04)}else{run+=1;S.coins+=1;beep(988,.14,'sine',.02)}}
 if(fuel<=0&&P.gd&&Math.hypot(P.vx,P.vy)<25){stall+=dt;if(stall>1.5)crash('نفد الوقود!')}else stall=0;
 if(P.x>=L.len&&st=='play'){const b=50+L.d*8;S.coins+=b;S.lv=Math.min(N,Math.max(S.lv,L.l+1));save();[523,659,784].forEach((f,i)=>setTimeout(()=>beep(f,.3,'sine',.05),i*150));end('w')}
 pops.forEach(p=>p.l-=dt);pops=pops.filter(p=>p.l>0);parts.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.l-=dt});parts=parts.filter(p=>p.l>0);
}
const sa=document.createElement('div');sa.style.cssText='position:fixed;left:0;top:0;visibility:hidden;pointer-events:none;padding:env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)';document.body.appendChild(sa);
function ins(){const c=getComputedStyle(sa);return{t:parseFloat(c.paddingTop)||0,r:parseFloat(c.paddingRight)||0,b:parseFloat(c.paddingBottom)||0,l:parseFloat(c.paddingLeft)||0}}
function hud(){const k=Math.min(1.35,Math.max(.85,H/430)),w=W/k,h=H/k,n=ins(),l=n.l/k+12,r=n.r/k+12,tp=n.t/k+10,bt=n.b/k+14;
 X.setTransform(dpr*k,0,0,dpr*k,0,0);pill(l,tp,124,'🪙 '+S.coins);
 X.fillStyle='rgba(0,0,0,.45)';rr(X,l,tp+42,124,18,9);X.fill();X.fillStyle=fuel>.25?'#22c55e':'#ef4444';rr(X,l+2,tp+44,Math.max(4,120*fuel),14,7);X.fill();
 X.font='14px system-ui';X.textAlign='left';X.fillStyle='#fff';X.fillText('⛽',l+132,tp+57);
 const bw=Math.min(380,w*.4),bx=(w-bw)/2;X.fillStyle='rgba(0,0,0,.45)';rr(X,bx,tp+4,bw,16,8);X.fill();X.fillStyle='#ffd23f';rr(X,bx+2,tp+6,Math.max(6,(bw-4)*Math.min(1,P.x/L.len)),12,6);X.fill();
 X.textAlign='center';X.fillStyle='#fff';X.font='700 14px system-ui';X.fillText((P.x/30|0)+' / '+(L.len/30)+' م',w/2,tp+40);
 for(const[kk,t,x]of[['b','فرامل',l+4],['g','بنزين',w-r-124]]){const on=inp[kk]||keys[kk];X.fillStyle=on?'rgba(255,255,255,.5)':'rgba(255,255,255,.18)';rr(X,x,h-bt-76,120,76,18);X.fill();X.fillStyle='#fff';X.font='700 20px system-ui';X.textAlign='center';X.fillText(t,x+60,h-bt-32)}
 pops.forEach(p=>{X.globalAlpha=Math.min(1,p.l);X.fillStyle='#ffd23f';X.font='700 30px system-ui';X.textAlign='center';X.fillText(p.t,w/2,h*.3-(1.5-p.l)*50)});X.globalAlpha=1}
function render(){
 X.setTransform(dpr,0,0,dpr,0,0);bg();
 X.setTransform(dpr*sc,0,0,dpr*sc,-camX*sc*dpr,-camY*sc*dpr);scenery();terrain();
 if(st=='menu'){const m=mcar(),C=CARS[S.car];drawSmoke();X.fillStyle='rgba(0,0,0,.32)';X.beginPath();X.ellipse(m.x+6,T(m.x)+8,C[4]*MS*1.5,11,m.a,0,7);X.fill();X.save();X.translate(m.x,m.y+Math.sin(tm*17)*.7);X.rotate(m.a);X.scale(MS,MS);drawCar(X,S.car,camX/(C[3]*MS));X.restore();fx();return}
 const x0=camX-50,x1=camX+W/sc+50;
 for(const it of items){if(it.g||it.x<x0||it.x>x1)continue;
  if(it.t){X.fillStyle='#dc2626';rr(X,it.x-12,it.y-15,24,30,5);X.fill();X.font='18px sans-serif';X.textAlign='center';X.fillText('⛽',it.x,it.y+7)}
  else{const s=Math.abs(Math.cos(tm*4+it.x));X.fillStyle='#f59e0b';X.beginPath();X.ellipse(it.x,it.y,13*(.25+.75*s),13,0,0,7);X.fill();X.fillStyle='#fde047';X.beginPath();X.ellipse(it.x,it.y,8*(.25+.75*s),8,0,0,7);X.fill()}}
 const fy=T(L.len);X.fillStyle='#fff';X.fillRect(L.len-3,fy-180,6,180);
 for(let i=0;i<6;i++)for(let j=0;j<4;j++){X.fillStyle=(i+j)%2?'#fff':'#111';X.fillRect(L.len+3+i*10,fy-180+j*10,10,10)}
 X.fillStyle='rgba(255,255,255,.7)';parts.forEach(p=>{X.globalAlpha=Math.max(0,p.l);X.beginPath();X.arc(p.x,p.y,5+(.6-p.l)*14,0,7);X.fill()});X.globalAlpha=1;
 drawSmoke();X.fillStyle='rgba(0,0,0,.25)';X.beginPath();X.ellipse(P.x,T(P.x)+6,70,8,Math.atan((T(P.x+5)-T(P.x-5))/10),0,0+7);X.fill();
 X.save();X.translate(P.x,P.y);X.rotate(P.a);drawCar(X,S.car,P.wr);X.restore();
 fx();if(st=='play'||st=='dead')hud()}
let last=0;
function loop(t){const dt=Math.min((t-last)/1000||.016,1/30);last=t;tm=t/1000;
 if(st=='play'){const n=Math.ceil(dt*480);for(let i=0;i<n&&st=='play';i++)phys(dt/n);post(dt);
  camX+=(P.x-W/sc*.3+P.vx*.12-camX)*Math.min(1,dt*5);camY+=(P.y-H/sc*.58-camY)*Math.min(1,dt*3)}
 else if(st=='dead'){dead-=dt;if(dead<0)end('l')}
 else if(st=='menu'){camX+=70*dt;const m=mcar();camY+=(m.y-H/sc*.62-camY)*Math.min(1,dt*2);if(Math.random()<.35)puff(m.x,m.y,m.a,CARS[S.car],70,Math.random()<.4,0,MS)}
 if(st!='pause'){smk.forEach(p=>{p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy-=15*dt;p.l-=dt});smk=smk.filter(p=>p.l>0)}music();if(mg)mg.gain.value=st=='play'||st=='dead'?.25:.5;engine(st=='play',P?Math.abs(P.vx):0,inp.g||keys.g);render();requestAnimationFrame(loop)}
function garage(){
 const g=$('gl');g.innerHTML='';$('gc').textContent='🪙 '+S.coins;
 CARS.forEach((C,i)=>{
  const d=document.createElement('div'),own=S.own.includes(i);d.className='card'+(S.car==i?' sel':'');
  const c=document.createElement('canvas');c.width=300;c.height=160;d.appendChild(c);
  d.insertAdjacentHTML('beforeend','<b>'+C[0]+'</b><br>⚡'+(C[2]/50|0)+' ⛽'+(C[7]*10|0)+' 🛞'+(C[8]*10|0)+'<br>');
  const b=document.createElement('button');b.className='btn s';b.style.cssText='min-width:0;padding:6px 14px;font-size:15px;margin-top:4px';
  b.textContent=S.car==i?'مختارة ✓':own?'اختيار':'🪙 '+C[1];
  b.onclick=()=>{if(own)S.car=i;else if(S.coins>=C[1]){S.coins-=C[1];S.own.push(i);S.car=i}else{b.textContent='🪙 غير كافية';return}save();garage()};
  d.appendChild(b);g.appendChild(d);
  const k=c.getContext('2d'),s=Math.min(1.4,140/(C[4]+C[3]+18));k.translate(150,100);k.scale(s,s);drawCar(k,i,0)});upg()}
function levels(){const g=$('ll');g.innerHTML='';
 for(let i=1;i<=N;i++){const rg=(i-1)/10|0;
  if((i-1)%10==0){const h=document.createElement('div');h.style.cssText='grid-column:1/-1;text-align:right;font-weight:700;font-size:18px;color:#ffd23f;padding:6px 4px 0';h.textContent='المراحل '+(rg*10+1)+' – '+(rg*10+10);g.appendChild(h)}
  const d=document.createElement('div'),lk=i>S.lv;d.className='card';d.style.opacity=lk?.45:1;
  d.innerHTML='<b style="font-size:18px">'+(lk?'🔒 ':'')+i+'</b><br>'+((500+40*(i-1))/1000)+' كم';
  d.onclick=()=>{if(!lk)play(i)};g.appendChild(d)}}
const kd={ArrowRight:'g',KeyD:'g',ArrowUp:'g',ArrowLeft:'b',KeyA:'b',ArrowDown:'b'};
addEventListener('keydown',e=>{if(kd[e.code]){keys[kd[e.code]]=1;e.preventDefault()}if((e.code=='Escape'||e.code=='KeyP')&&st=='play')end('p')});
addEventListener('keyup',e=>{if(kd[e.code])keys[kd[e.code]]=0});
const pt=new Map(),upd=()=>{inp.g=inp.b=0;pt.forEach(x=>{x<W/2?inp.b=1:inp.g=1})};
cv.addEventListener('pointerdown',e=>{snd();pt.set(e.pointerId,e.clientX);upd()});
cv.addEventListener('pointermove',e=>{if(pt.has(e.pointerId)){pt.set(e.pointerId,e.clientX);upd()}});
['pointerup','pointercancel'].forEach(n=>addEventListener(n,e=>{pt.delete(e.pointerId);upd()}));
addEventListener('contextmenu',e=>e.preventDefault());
document.addEventListener('visibilitychange',()=>{if(document.hidden&&st=='play')end('p')});
if('serviceWorker'in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('sw.js').catch(()=>{});
const GAME='دوسلها';document.querySelectorAll('.gname').forEach(e=>e.textContent=GAME);
const U=i=>S.up[i]||[0,0,0],UN=['⚡ المحرك','🛞 الإطارات','⛽ الوقود'];
function upg(){const u=U(S.car),g=$('gu');g.innerHTML='';UN.forEach((n,k)=>{const b=document.createElement('button'),pr=60*(u[k]+1)*(1+S.car*.12)|0;b.className='btn s';b.style.cssText='min-width:0;padding:6px 12px;font-size:14px';b.textContent=u[k]>=5?n+' ★ MAX':n+' '+u[k]+'/5 • 🪙'+pr;b.onclick=()=>{if(u[k]<5&&S.coins>=pr){S.coins-=pr;u[k]++;S.up[S.car]=u;save();garage()}};g.appendChild(b)})}
function setg(){[['s1','mus'],['s2','snd'],['s3','vib']].forEach(a=>$(a[0]).classList.toggle('on',!!S[a[1]]))}
function tg(k){S[k]=!S[k];if(S.snd||S.mus)snd();save();setg()}
document.addEventListener('pointerdown',e=>{snd();if(!fsd){fsd=1;fs()}if(e.target.closest&&e.target.closest('button,.card,.lnk'))beep(620,.07,'sine',.035)},true);
let pg=0;const iv=setInterval(()=>{pg+=8+Math.random()*12;$('lb').style.width=Math.min(100,pg)+'%';if(pg>=100){clearInterval(iv);setTimeout(()=>$('load').classList.add('h'),200)}},120);
function ask(){if(st=='play')end('p');$('qt').textContent='هل تريد مغادرة اللعبة؟';$('qs').textContent='سيتم حفظ تقدمك تلقائياً.';$('qx').classList.add('on')}
function stay(){$('qx').classList.remove('on')}
function quit(){save();try{const a=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.App;if(a&&a.exitApp){a.exitApp();return}}catch(e){}try{window.close()}catch(e){}$('qt').textContent='يمكنك الآن إغلاق هذه النافذة';$('qs').textContent=''}
function bk(){if($('qx').classList.contains('on'))stay();else if(st=='play')end('p');else if(cur=='lv'||cur=='gar'||cur=='set')home();else if(cur=='pp'){setg();show('set')}else ask()}
try{const a=window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.App;a&&a.addListener&&a.addListener('backButton',bk)}catch(e){}
addEventListener('keydown',e=>{if(e.code=='Escape'&&st!='play')bk()});
setInterval(save,3000);addEventListener('pagehide',save);document.addEventListener('visibilitychange',()=>{if(document.hidden)save()});
home();requestAnimationFrame(loop);
function pill(x,y,w,t){X.fillStyle='rgba(0,0,0,.45)';rr(X,x,y,w,34,17);X.fill();X.fillStyle='#fff';X.font='700 18px system-ui';X.textAlign='left';X.fillText(t,x+12,y+24)}
