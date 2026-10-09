// ===== المدن والمشهد: 10 مدن، كل مدينة 10 مراحل =====
const TH=[['#5ec6ff','#d6f2ff','#4cc24a','#8a5a2b','#4a2e14','#6aa6c9','#4a89b0'],
['#f6a54c','#ffe3a8','#e0b24c','#c68a43','#7a4d1f','#d88b4a','#b36a2e'],
['#9ec9e8','#eaf6ff','#f4fbff','#9fb6c9','#5c7388','#c9dcec','#a9c2d8'],
['#050b2a','#2b3a7a','#2f8f5b','#3a3350','#1b1730','#26305e','#1b2247'],
['#000','#1a1a2e','#bfbfc9','#6b6b78','#35353f','#4a4a5a','#33333f'],
['#7ec8f0','#e6f3fb','#4cb04a','#8a7a63','#463c30','#9aa7b5','#7b8794'],['#8fd3c8','#e8f7e0','#3fae5a','#6b5a2e','#3b2f17','#6fae8a','#4d8f6e']];
// cs: نمط المدينة، th: ألوان الأرض، sun: [x,y,نصف القطر,لون القرص,لون الوهج]
const REG=[
{cs:0,th:5,sky:['#7cc8f5','#e6f4fc'],sun:[.8,.2,40,'#fff4b0','255,240,190']},
{cs:1,th:1,sky:['#f4a259','#ffe8c2'],sun:[.78,.3,48,'#fff1c0','255,225,170']},
{cs:2,th:0,sky:['#6ec6ff','#d9f1ff'],sun:[.8,.2,40,'#fff4b0','255,240,190']},
{cs:3,th:1,sky:['#f2a65a','#ffe3a8'],sun:[.8,.24,52,'#fffadc','255,235,180']},
{cs:4,th:3,sky:['#050b2a','#2b3a7a'],stars:1,night:1,sun:[.8,.2,28,'#f5f0c8','200,210,255']},
{cs:5,th:5,sky:['#4b3a8a','#ffa07a'],sun:[.68,.42,60,'#ffe0a8','255,170,120']},
{cs:6,th:2,sky:['#9ec9e8','#eaf6ff'],sun:[.8,.2,34,'#ffffff','255,255,255']},
{cs:7,th:5,sky:['#5a3f8f','#ffb88c'],lit:1,sun:[.3,.46,56,'#ffd9a0','255,180,130']},
{cs:8,th:5,sky:['#8ab4d6','#e4eef5'],sun:[.8,.18,34,'#fffbe6','255,250,230']},
{cs:9,th:4,sky:['#000008','#1a1a3e'],stars:1,night:1,earth:1}];
const CS=[
{tw:['#8aa4b8','#a7bccd','#6f8aa2','#c4d2de'],bl:['#d8dde3','#c9cfd6','#bcc6d0'],aw:['#e4572e','#17bebb','#ffc914','#76b041'],rf:['#8a4b38']},
{tw:['#d9b98a','#cfa978','#e3c9a0'],bl:['#e6c79a','#d8b583','#efd6ae','#cfa070'],aw:['#c0392b','#2e86c1','#d4ac0d','#27ae60'],rf:['#a0522d'],flat:1},
{tw:['#cbd5e0'],bl:['#f1e4d3','#e8d5b7','#d9e4ec','#f5d6c6','#dfe8d2'],aw:['#d35400','#2980b9','#27ae60'],rf:['#b5472f','#8c4a2f','#5d6d7e']},
{tw:['#e0c49a','#d2b384'],bl:['#e8cfa3','#dcbf92','#f0dab4','#d6b886'],aw:['#a93226','#1f618d','#b7950b'],rf:['#c9a36b'],flat:1},
{tw:['#1a2250','#222c63','#2c1f55','#16233f'],bl:['#2a2f5e','#33295c','#1f3a5a'],aw:['#ff2d95','#00e5ff','#ffe600','#7cff00'],rf:['#222']},
{tw:['#e8f2f8','#cfe6f2','#bfe0ee','#f3f6fa'],bl:['#dbe9f2','#c8dcea'],aw:['#00c2ff','#ff6ec7','#9d4edd'],rf:['#88aabb'],flat:1},
{tw:['#aab8c4','#9aa9b6'],bl:['#e8dccb','#d8c3a5','#cdb79e','#b89f84'],aw:['#b03a2e','#1a5276','#1e8449'],rf:['#8b5a3c','#6e4a35']},
{tw:['#6b5b8f','#7d6a9e','#5a4a7d','#8a6f9b'],bl:['#8a6a8f','#7a5a7f','#9a7a9f'],aw:['#ff7f50','#ffd166','#06d6a0'],rf:['#4a3b55']},
{tw:['#7f8c8d','#95a5a6','#6c7a89'],bl:['#8e9aa6','#a0aab4','#7b8691'],aw:['#e67e22','#2980b9','#c0392b','#f1c40f'],rf:['#555'],flat:1},
{tw:['#e6ecf2','#cfd8e3'],bl:['#dfe6ee','#c4cfdb'],aw:['#00e5ff','#7cff00'],rf:['#99a'],flat:1}];
const FAR=[['tower','tower','tower','block','tower'],['block','mosque','block','dome','block'],['house','house','block','house','tree'],['block','mosque','block','dome','block'],['tower','tower','block','tower','tower'],['tower','tower','tower','tower','block'],['mount','chalet','mount','chalet','mount'],['tower','tower','block','tower','mosque'],['crane','cont','block','cont','crane','chimney'],['dome','tower','dome','antenna','tower']];
const NEAR=[['shop','block','shop','tower','shop','block'],['shop','shop','shop','mosque','shop','house'],['house','house','house','shop','house','house'],['house','house','mosque','house','shop','house'],['shop','tower','block','shop','tower','block'],['tower','block','tower','shop','block','tower'],['chalet','chalet','house','chalet','shop','chalet'],['block','tower','shop','block','shop','tower'],['cont','shop','crane','block','cont','shop'],['dome','block','dome','tower','dome','block']];
const SWD=[210,160,210,200,210,220,200,210,230,230],SHOPS=['سوق','مطعم','مقهى','صيدلية','أزياء','حلويات','مخبز','عطور','هواتف','مكتبة'];
const pick=(a,h)=>a[Math.floor(h*a.length)%a.length];
function mk(l){const d=l-1,rg=Math.min(9,d/10|0),R=REG[rg],cs=R.cs;return{l,d,rg,R,cs,th:R.th,sky:R.sky,night:!!R.night,lit:!!(R.night||R.lit),len:(500+40*d)*30,a:[Math.min(60+d,160),Math.min(24+d*.3,54),Math.min(8+d*.14,22)],p:[0,1,2].map(i=>rng(l*131+i)()*9),g:cs==9?820:1500,gr:cs==6?.75:1,r:rng(l*7919+13)}}
const T=q=>q<0?q*.9:Math.min(1,q/1800)*(L.a[0]*Math.sin(q*.0031+L.p[0])+L.a[1]*Math.sin(q*.0086+L.p[1])+L.a[2]*Math.sin(q*.021+L.p[2]));
// ---- عناصر البناء
function wall(x,y,w,h,col){const g=X.createLinearGradient(x,0,x+w,0);g.addColorStop(0,shade(col,.14));g.addColorStop(.6,col);g.addColorStop(1,shade(col,-.22));X.fillStyle=g;X.fillRect(x,y,w,h)}
function wins(x,y,w,h,s,lite){const cw=lite?5:7,gh=lite?7:9,px=cw+(lite?5:6),py=gh+(lite?5:5),cols=Math.max(1,Math.floor((w-4)/px)),rows=Math.max(1,Math.floor((h-4)/py)),ox=x+(w-cols*px+px-cw)/2,A=[],B=[];
 for(let r=0;r<rows;r++)for(let c=0;c<cols;c++)(hs(s+r*7.3+c*3.1)<(L.lit?.5:.5)?A:B).push(ox+c*px,y+4+r*py);
 X.fillStyle=L.lit?'rgba(255,214,120,.92)':'rgba(240,250,255,.62)';X.beginPath();for(let i=0;i<A.length;i+=2)X.rect(A[i],A[i+1],cw,gh);X.fill();
 X.fillStyle=L.lit?'rgba(12,18,45,.55)':'rgba(105,148,185,.5)';X.beginPath();for(let i=0;i<B.length;i+=2)X.rect(B[i],B[i+1],cw,gh);X.fill()}
function tower(x,by,w,h,col,o){const s=o.s,f=L.cs==5||L.cs==9,S3=[[0,.52,1],[.5,.3,.8],[.78,.16,.58]];let top=by;
 for(let i=0;i<3;i++){const sh=h*S3[i][1],sw=w*S3[i][2],sx=x+(w-sw)/2,sy=by-h*(S3[i][0]+S3[i][1]);wall(sx,sy,sw,sh+1,col);wins(sx+2,sy+3,sw-4,sh-5,s+i*5,o.lite);X.fillStyle='rgba(255,255,255,.18)';X.fillRect(sx,sy,sw,2);top=sy}
 if(f){X.fillStyle=shade(col,.15);X.beginPath();X.ellipse(x+w/2,top,w*.29,w*.2,0,Math.PI,0);X.fill();X.fillStyle='rgba(120,235,255,.8)';X.fillRect(x+w*.1,by-h*.5,w*.8,2);X.beginPath();X.ellipse(x+w/2,by-h*.78,w*.55,3,0,0,7);X.fill()}
 else{X.fillStyle=shade(col,-.3);X.fillRect(x+w/2-1,top-h*.12,2,h*.12);X.fillStyle='#e33';X.beginPath();X.arc(x+w/2,top-h*.12,2,0,7);X.fill()}
 if(L.cs==4){const nc=pick(CS[4].aw,hs(s*1.7));X.globalAlpha=.3;X.fillStyle=nc;X.fillRect(x+w*.12,by-h*.5-4,w*.76,9);X.globalAlpha=1;X.fillRect(x+w*.15,by-h*.5-1,w*.7,3)}}
function block(x,by,w,h,col,o){const y=by-h;wall(x,y,w,h+1,col);X.fillStyle=shade(col,-.25);X.fillRect(x-2,y-3,w+4,4);wins(x+3,y+7,w-6,h-14,o.s,o.lite);
 if(!o.lite){X.fillStyle=shade(col,-.2);for(let r=1;r<(h-14)/16;r+=2)X.fillRect(x+3,y+7+r*14,w-6,2);X.fillStyle='#8d99a6';X.fillRect(x+w*.18,y-11,12,8);X.beginPath();X.arc(x+w*.18+6,y-11,6,Math.PI,0);X.fill();X.strokeStyle='#9aa';X.lineWidth=1.5;X.beginPath();X.arc(x+w*.72,y-7,5,Math.PI*.9,Math.PI*1.9);X.stroke()}}
function house(x,by,w,h,col,o){const s=o.s,rf=pick(CS[L.cs].rf,hs(s)),y=by-h,flat=CS[L.cs].flat;
 if(flat){wall(x,y,w,h+1,col);X.fillStyle=shade(col,-.25);X.fillRect(x-2,y-3,w+4,4);X.fillStyle='#8d99a6';X.fillRect(x+w*.62,y-10,11,7);X.beginPath();X.arc(x+w*.62+5.5,y-10,5.5,Math.PI,0);X.fill()}
 else{wall(x,y+h*.34,w,h*.66+1,col);X.fillStyle=rf;X.beginPath();X.moveTo(x-7,y+h*.36);X.lineTo(x+w/2,y-3);X.lineTo(x+w+7,y+h*.36);X.fill();X.fillStyle='rgba(0,0,0,.15)';X.beginPath();X.moveTo(x+w/2,y-3);X.lineTo(x+w+7,y+h*.36);X.lineTo(x+w/2,y+h*.36);X.fill();
  if(L.cs==6){X.fillStyle='#fff';X.beginPath();X.moveTo(x-8,y+h*.36);X.lineTo(x+w/2,y-6);X.lineTo(x+w+8,y+h*.36);X.lineTo(x+w+4,y+h*.36);X.lineTo(x+w/2,y+h*.02);X.lineTo(x-4,y+h*.36);X.fill()}
  X.fillStyle='#7a4a3a';X.fillRect(x+w*.72,y+h*.04,7,h*.2)}
 const wy=by-h*.58;X.fillStyle=L.lit?'#ffd87a':'#a9cfe6';X.fillRect(x+w*.12,wy,w*.24,h*.22);X.fillRect(x+w*.64,wy,w*.24,h*.22);X.fillStyle='#7a5b3a';X.fillRect(x+w*.12-3,wy,3,h*.22);X.fillRect(x+w*.36,wy,3,h*.22);X.fillRect(x+w*.64-3,wy,3,h*.22);X.fillRect(x+w*.88,wy,3,h*.22);
 X.fillStyle='#5b3a24';X.fillRect(x+w*.42,by-h*.38,w*.16,h*.38)}
function shop(x,by,w,h,col,o){const s=o.s,a1=pick(CS[L.cs].aw,hs(s*1.3)),gh=h*.4,y=by-h;
 wall(x,y,w,h+1,col);X.fillStyle=shade(col,-.25);X.fillRect(x-2,y-3,w+4,4);wins(x+4,y+6,w-8,h-gh-34,s,0);
 if(L.cs==4){X.fillStyle='#10122e';rr(X,x+5,by-gh-26,w-10,17,3);X.fill();X.strokeStyle=a1;X.lineWidth=2;X.stroke();X.fillStyle=a1}else{X.fillStyle=a1;rr(X,x+5,by-gh-26,w-10,17,3);X.fill();X.fillStyle='#fff'}
 X.font='700 12px system-ui';X.textAlign='center';X.fillText(pick(SHOPS,hs(s*2.1)),x+w/2,by-gh-13);
 const n=Math.max(4,Math.floor(w/12)),aw=(w-8)/n;for(let i=0;i<n;i++){X.fillStyle=i%2?'#fff':a1;X.beginPath();X.moveTo(x+4+i*aw,by-gh-7);X.lineTo(x+4+(i+1)*aw,by-gh-7);X.lineTo(x+5+(i+1)*aw,by-gh+7);X.lineTo(x+3+i*aw,by-gh+7);X.fill()}
 X.fillStyle=L.lit?'#ffe6a8':'#8fb8d6';X.fillRect(x+6,by-gh+7,w*.58,gh-7);X.fillStyle='rgba(255,255,255,.35)';X.fillRect(x+6,by-gh+7,w*.58,4);X.fillStyle='#43302b';X.fillRect(x+w*.7,by-gh+7,w*.2,gh-7)}
function mosque(x,by,w,h,col){const y=by-h,lt=shade(col,.18);
 for(const mx of[x-9,x+w+1]){X.fillStyle=col;X.fillRect(mx,y-h*.85,8,h*.85+h);X.fillStyle=lt;X.fillRect(mx-2,y-h*.65,12,4);X.beginPath();X.moveTo(mx-1,y-h*.85);X.lineTo(mx+9,y-h*.85);X.lineTo(mx+4,y-h*.85-17);X.fill()}
 wall(x,y,w,h+1,col);X.fillStyle=lt;X.beginPath();X.ellipse(x+w/2,y,w*.32,w*.34,0,Math.PI,0);X.fill();X.fillRect(x+w/2-1,y-w*.34-12,2,12);
 X.fillStyle=L.lit?'#ffd87a':'#5c7a94';for(let i=0;i<3;i++){const ax=x+w*(.18+i*.28);X.beginPath();X.arc(ax+5,y+h*.45,5,Math.PI,0);X.rect(ax,y+h*.45,10,h*.3);X.fill()}}
function dome(x,by,w,h,col){const r=w/2,cx=x+r;X.fillStyle=col;X.fillRect(cx-r*.3,by-h*.55,r*.22,h*.55);X.fillRect(cx+r*.1,by-h*.7,r*.2,h*.7);X.fillStyle='rgba(190,235,255,.3)';X.beginPath();X.ellipse(cx,by,r,h,0,Math.PI,0);X.fill();
 X.strokeStyle='rgba(255,255,255,.55)';X.lineWidth=1.5;X.stroke();X.beginPath();for(let i=1;i<4;i++){X.ellipse(cx,by,r*i/4,h,0,Math.PI,0)}X.stroke();X.fillStyle=L.lit?'#ffd87a':'#fff';X.fillRect(cx-r*.28,by-h*.4,3,4)}
function mount(x,by,w,h,col){X.fillStyle='#a9bccd';X.beginPath();X.moveTo(x-w*.1,by);X.lineTo(x+w*.3,by-h);X.lineTo(x+w*.55,by-h*.55);X.lineTo(x+w*.78,by-h*.85);X.lineTo(x+w*1.1,by);X.fill();X.fillStyle='#fff';X.beginPath();X.moveTo(x+w*.3,by-h);X.lineTo(x+w*.22,by-h*.8);X.lineTo(x+w*.32,by-h*.86);X.lineTo(x+w*.4,by-h*.78);X.fill();X.beginPath();X.moveTo(x+w*.78,by-h*.85);X.lineTo(x+w*.7,by-h*.66);X.lineTo(x+w*.8,by-h*.72);X.lineTo(x+w*.87,by-h*.64);X.fill()}
function crane(x,by,w,h){X.strokeStyle='#e67e22';X.lineWidth=3;X.beginPath();X.moveTo(x,by);X.lineTo(x+w*.2,by-h);X.moveTo(x+w*.4,by);X.lineTo(x+w*.2,by-h);X.stroke();X.fillStyle='#e67e22';X.fillRect(x-w*.4,by-h,w*1.4,6);X.strokeStyle='#555';X.lineWidth=1.5;X.beginPath();X.moveTo(x+w*.9,by-h+6);X.lineTo(x+w*.9,by-h*.5);X.stroke();X.fillStyle='#c0392b';X.fillRect(x+w*.78,by-h*.5,16,9)}
function cont(x,by,w,h,col,o){const cc=['#c0392b','#2980b9','#27ae60','#f1c40f','#e67e22'],n=Math.max(2,Math.floor(w/22)),rows=Math.min(3,1+Math.floor(h/26)),cw=w/n;for(let r=0;r<rows;r++)for(let c=0;c<n;c++){X.fillStyle=cc[Math.floor(hs(o.s+r*5+c*1.7)*5)];X.fillRect(x+c*cw,by-(r+1)*17,cw-1,16);X.fillStyle='rgba(0,0,0,.18)';for(let i=3;i<cw-2;i+=4)X.fillRect(x+c*cw+i,by-(r+1)*17,1,16)}}
function chimney(x,by,w,h){X.fillStyle='#8d6e63';X.fillRect(x,by-h,w,h);X.fillStyle='#fff';for(let i=0;i<3;i++)X.fillRect(x,by-h+8+i*18,w,6);X.fillStyle='rgba(200,200,200,.45)';X.beginPath();X.arc(x+w/2,by-h-8,9,0,7);X.arc(x+w/2+10,by-h-22,12,0,7);X.fill()}
function antenna(x,by,w,h){X.strokeStyle='#aab';X.lineWidth=2;X.beginPath();X.moveTo(x,by);X.lineTo(x+w/2,by-h);X.lineTo(x+w,by);X.moveTo(x+w*.25,by-h*.5);X.lineTo(x+w*.75,by-h*.5);X.stroke();X.fillStyle='#e33';X.beginPath();X.arc(x+w/2,by-h,3,0,7);X.fill()}
function ftree(x,by,w,h){X.fillStyle='#5b3a1e';X.fillRect(x+w/2-2,by-h*.4,4,h*.4);X.fillStyle='#2f8f3a';X.beginPath();X.arc(x+w/2,by-h*.6,h*.35,0,7);X.fill()}
const KD={tower,block,house,shop,mosque,dome,mount,crane,cont,chimney,antenna,tree:ftree,chalet:house};
function skyline(k){const cs=L.cs,fa=FAR[cs],ba=CS[cs],o=camX*(.05+k*.12),cw=k?120:150,i0=Math.floor(o/cw)-1,n=Math.ceil(W/cw)+3,by=H*(.72+k*.04)-camY*.03;
 X.globalAlpha=k?1:.7;
 for(let i=i0;i<i0+n;i++){const a=hs(i*1.7+k*997),b=hs(i*3.3+k*31),kind=pick(fa,a),x=i*cw-o+(b-.5)*30,col=pick(k?ba.bl:ba.tw,hs(i*5.1+k));let w,h;
  switch(kind){case'tower':w=40+b*30;h=(k?120:180)+a*(k?100:150);break;case'block':w=60+b*36;h=(k?70:100)+a*70;break;case'house':case'chalet':w=50+b*26;h=46+a*26;break;case'mosque':w=58+b*20;h=48+a*20;break;case'dome':w=70+b*40;h=40+a*25;break;case'mount':w=cw+40;h=70+a*80;break;case'crane':w=40;h=120+a*80;break;case'cont':w=70+b*40;h=48+a*28;break;case'chimney':w=14;h=100+a*60;break;case'antenna':w=26;h=110+a*80;break;default:w=30;h=40}
  KD[kind](x,by,w,h,col,{k,s:i*13+k,lite:1})}
 X.globalAlpha=1}
// ---- عناصر الشارع الطبيعية
function tree(qx,y,s){const blob=(cx,cy,r,c)=>{X.fillStyle=c;X.beginPath();X.arc(cx,cy,r,0,7);X.fill()};X.fillStyle='rgba(0,0,0,.18)';X.beginPath();X.ellipse(qx+6,y-4,34*s,5,0,0,7);X.fill();
 const g=X.createLinearGradient(qx-5*s,0,qx+5*s,0);g.addColorStop(0,'#7a5230');g.addColorStop(1,'#4a2f18');X.fillStyle=g;X.beginPath();X.moveTo(qx-6*s,y);X.lineTo(qx-3*s,y-50*s);X.lineTo(qx+3*s,y-50*s);X.lineTo(qx+6*s,y);X.fill();
 const C=[[0,-72,27],[-21,-56,21],[21,-56,21],[-9,-90,19],[13,-86,18],[-32,-42,15],[32,-42,15]];C.forEach(a=>blob(qx+a[0]*s+3,y+a[1]*s+4,a[2]*s,'#1f6b2a'));C.forEach(a=>blob(qx+a[0]*s,y+a[1]*s,a[2]*s,'#2f8f3a'));C.forEach(a=>blob(qx+a[0]*s-4*s,y+a[1]*s-5*s,a[2]*s*.55,'#4cb24f'))}
function palm(qx,y,s){const tx=qx+10*s,ty=y-100*s;X.fillStyle='rgba(0,0,0,.18)';X.beginPath();X.ellipse(qx+6,y-4,30*s,5,0,0,7);X.fill();X.strokeStyle='#7a5a32';X.lineWidth=8*s;X.lineCap='round';X.beginPath();X.moveTo(qx,y);X.quadraticCurveTo(qx+16*s,y-55*s,tx,ty);X.stroke();
 X.strokeStyle='rgba(0,0,0,.25)';X.lineWidth=1.5;for(let i=1;i<9;i++){const t=i/9,px=(1-t)*(1-t)*qx+2*t*(1-t)*(qx+16*s)+t*t*tx,py=(1-t)*(1-t)*y+2*t*(1-t)*(y-55*s)+t*t*ty;X.beginPath();X.moveTo(px-4*s,py);X.lineTo(px+4*s,py);X.stroke()}
 for(const a of[-2.9,-2.4,-1.9,-1.2,-.7,-.2]){const ex=tx+Math.cos(a)*52*s,ey=ty+Math.sin(a)*22*s+16*s,cx=tx+Math.cos(a)*30*s,cy=ty+Math.sin(a)*34*s,sg=Math.cos(a)>0?1:-1;X.strokeStyle='#2e7d32';X.lineWidth=2.5;X.beginPath();X.moveTo(tx,ty);X.quadraticCurveTo(cx,cy,ex,ey);X.stroke();X.strokeStyle='#43a047';X.lineWidth=1.6;
  for(let j=2;j<=9;j++){const t=j/9,px=(1-t)*(1-t)*tx+2*t*(1-t)*cx+t*t*ex,py=(1-t)*(1-t)*ty+2*t*(1-t)*cy+t*t*ey,l2=11*s*(1-t*.5);X.beginPath();X.moveTo(px,py);X.lineTo(px+4*s*sg,py+l2);X.moveTo(px,py);X.lineTo(px-3*s*sg,py+l2*.9);X.stroke()}}
 X.fillStyle='#6b3f1d';X.beginPath();X.arc(tx-3*s,ty+6*s,4*s,0,7);X.arc(tx+4*s,ty+7*s,4*s,0,7);X.fill()}
function lamp(qx,y){X.fillStyle='#3a3f47';X.fillRect(qx-5,y-8,10,10);X.fillRect(qx-2,y-96,4,92);X.beginPath();X.moveTo(qx,y-96);X.quadraticCurveTo(qx+6,y-104,qx+20,y-100);X.lineWidth=3;X.strokeStyle='#3a3f47';X.stroke();X.fillStyle='#2b2f36';rr(X,qx+14,y-102,14,6,3);X.fill();
 if(L.lit){const g=X.createRadialGradient(qx+21,y-94,2,qx+21,y-94,46);g.addColorStop(0,'rgba(255,225,140,.45)');g.addColorStop(1,'rgba(255,225,140,0)');X.fillStyle=g;X.beginPath();X.arc(qx+21,y-94,46,0,7);X.fill()}
 X.fillStyle=L.lit?'#fff1b0':'#cfd6dd';X.beginPath();X.ellipse(qx+21,y-96,5,2.5,0,0,7);X.fill()}
function pine(qx,y,s){X.fillStyle='rgba(0,0,0,.18)';X.beginPath();X.ellipse(qx+6,y-4,28*s,5,0,0,7);X.fill();X.fillStyle='#5b3a1e';X.fillRect(qx-3*s,y-24*s,6*s,26*s);for(let i=0;i<4;i++){const b2=y-18*s-i*24*s,wd=(30-i*5)*s;X.fillStyle='#1b5e3f';X.beginPath();X.moveTo(qx-wd,b2);X.lineTo(qx+wd,b2);X.lineTo(qx,b2-34*s);X.fill();X.fillStyle='#237a52';X.beginPath();X.moveTo(qx,b2-34*s);X.lineTo(qx+wd,b2);X.lineTo(qx+wd*.1,b2);X.fill();X.fillStyle='#fff';X.beginPath();X.moveTo(qx-wd*.45,b2-19*s);X.lineTo(qx+wd*.45,b2-19*s);X.lineTo(qx,b2-34*s);X.fill()}}
function bush(qx,y,s){const P3=[[-10,-8,13],[10,-7,11],[0,-14,15]],b=(cx,cy,r,c)=>{X.fillStyle=c;X.beginPath();X.arc(cx,cy,r,0,7);X.fill()};P3.forEach(a=>b(qx+a[0]*s+2,y+a[1]*s+3,a[2]*s,'#1f6b2a'));P3.forEach(a=>b(qx+a[0]*s,y+a[1]*s,a[2]*s,'#2f8f3a'));b(qx-3*s,y-18*s,7*s,'#4cb24f')}
function rock(qx,y,s){X.fillStyle='rgba(0,0,0,.18)';X.beginPath();X.ellipse(qx+6,y-4,26*s,5,0,0,7);X.fill();X.fillStyle=L.cs==9?'#4a4a5c':'#7d6a50';X.beginPath();X.ellipse(qx,y-8*s,22*s,13*s,0,0,7);X.fill();X.fillStyle=L.cs==9?'#6a6a80':'#9a8567';X.beginPath();X.ellipse(qx-5*s,y-12*s,12*s,7*s,-.3,0,7);X.fill()}
function scenery(){
 const cs=L.cs,nl=NEAR[cs],SW=SWD[cs],x0=Math.floor((camX-240)/SW)*SW,x1=camX+W/sc+240,ba=CS[cs];
 for(let q=x0;q<x1;q+=SW){const i=Math.round(q/SW),h=hs(i*1.9+L.l*7),h2=hs(i*4.7+L.l*3);if(q<420||q>L.len+500)continue;
  const kind=pick(nl,h),sx=q+SW*.5,y=T(sx)+6,w=SW*(.66+h2*.26),x=q+(SW-w)/2,col=pick(kind=='tower'?ba.tw:ba.bl,hs(i*7.7)),o={k:2,s:i*11+L.l,lite:0};let bw=w,bh;
  switch(kind){case'shop':bh=96+h2*44;break;case'house':case'chalet':bw=w*.82;bh=62+h2*30;break;case'block':bh=120+h2*90;break;case'tower':bw=w*.82;bh=230+h2*120;break;case'mosque':bh=64+h2*22;bw=w*.8;break;case'dome':bh=60+h2*34;break;case'cont':bh=60;break;case'crane':bw=60;bh=170+h2*70;break;default:bh=80}
  const bx=q+(SW-bw)/2;X.fillStyle=shade(col,-.45);X.fillRect(bx,y-2,bw,90);
  KD[kind](bx,y,bw,bh,col,o);
  // عناصر أمامية
  const fx=q+SW*.92,fy=T(fx)+6;
  if(cs==0||cs==3||cs==4||cs==5||cs==7||cs==8)lamp(fx,fy);
  if(cs==0&&h2>.6)tree(q+6,T(q+6)+6,.6);
  if(cs==2){tree(q+SW*.04,T(q+SW*.04)+6,.55+h2*.3);if(h>.5)bush(q+SW*.9,fy,.8)}
  if(cs==1&&h2>.55)palm(q+SW*.02,T(q+SW*.02)+6,.7);
  if(cs==3&&h>.4)palm(q+SW*.03,T(q+SW*.03)+6,.8+h2*.3);
  if(cs==6){pine(q+SW*.03,T(q+SW*.03)+6,.7+h2*.3);if(h2>.5)pine(q+SW*.88,fy,.55)}
  if(cs==9&&h2>.4)rock(q+SW*.9,fy,.8);
  if(cs==5&&h>.5){X.fillStyle='rgba(120,235,255,.35)';X.beginPath();X.ellipse(q+SW*.5,y-6,34,5,0,0,7);X.fill()}}}
function bg(){
 const R=L.R,sk=L.sky;let g=X.createLinearGradient(0,0,0,H);g.addColorStop(0,sk[0]);g.addColorStop(1,sk[1]);X.fillStyle=g;X.fillRect(0,0,W,H);
 if(R.stars){X.fillStyle='#fff';for(let i=0;i<70;i++){X.globalAlpha=.55+.35*Math.sin(tm*.5+i);X.fillRect(i*137.5%W,i*71.3%(H*.62),2,2)}X.globalAlpha=1}
 if(R.sun){const u=R.sun,sx=W*u[0],sy=H*u[1],gl=X.createRadialGradient(sx,sy,0,sx,sy,H*.6);gl.addColorStop(0,'rgba('+u[4]+',.6)');gl.addColorStop(1,'rgba('+u[4]+',0)');X.fillStyle=gl;X.fillRect(0,0,W,H);X.fillStyle=u[3];X.beginPath();X.arc(sx,sy,u[2],0,7);X.fill()}
 if(R.earth){const ex=W*.2,ey=H*.3,er=H*.2,e=X.createRadialGradient(ex-er*.3,ey-er*.3,er*.1,ex,ey,er);e.addColorStop(0,'#7fd0ff');e.addColorStop(1,'#14407a');X.fillStyle=e;X.beginPath();X.arc(ex,ey,er,0,7);X.fill();X.fillStyle='rgba(80,200,120,.75)';X.beginPath();X.ellipse(ex-er*.2,ey-er*.1,er*.28,er*.18,.5,0,7);X.ellipse(ex+er*.3,ey+er*.25,er*.2,er*.12,-.3,0,7);X.fill();X.fillStyle='rgba(255,255,255,.35)';X.beginPath();X.ellipse(ex+er*.1,ey-er*.4,er*.4,er*.06,.2,0,7);X.fill()}
 if(!R.stars){X.fillStyle=L.cs==7||L.cs==5?'rgba(255,200,170,.5)':'rgba(255,255,255,.7)';for(let i=0;i<5;i++){const cx=((i*340-camX*.08+tm*8)%(W+300)+W+300)%(W+300)-150,cy=50+i*29%90;X.beginPath();X.ellipse(cx,cy,60,18,0,0,7);X.fill();X.beginPath();X.ellipse(cx+30,cy-10,38,16,0,0,7);X.fill()}}
 if(L.cs==5){for(let i=0;i<4;i++){const x=((tm*(26+i*11)+i*260)%(W+240))-120,y=H*(.14+i*.075);X.fillStyle='rgba(255,255,255,.18)';X.fillRect(x-46,y+2,40,2);X.fillStyle='#e8f6ff';rr(X,x,y,26,7,3.5);X.fill();X.fillStyle='#4de1ff';X.fillRect(x+16,y+1.5,6,3)}}
 skyline(0);skyline(1);
 {const hz=X.createLinearGradient(0,H*.45,0,H*.85);hz.addColorStop(0,'rgba(255,255,255,0)');hz.addColorStop(1,L.night?'rgba(120,140,200,.12)':'rgba(255,255,255,.2)');X.fillStyle=hz;X.fillRect(0,H*.45,W,H*.4)}}
function terrain(){
 const th=TH[L.th],x0=Math.floor((camX-20)/8)*8,x1=camX+W/sc+20,y1=camY+H/sc+40,road=L.cs!=9;
 const path=()=>{X.beginPath();for(let q=x0;q<=x1;q+=8)q==x0?X.moveTo(q,T(q)):X.lineTo(q,T(q))};
 path();X.lineTo(x1,y1);X.lineTo(x0,y1);X.closePath();
 const g=X.createLinearGradient(0,camY,0,y1);g.addColorStop(0,th[3]);g.addColorStop(1,th[4]);X.fillStyle=g;X.fill();
 X.translate(0,8);path();X.strokeStyle=th[2];X.lineWidth=16;X.lineJoin='round';X.stroke();X.translate(0,-8);
 if(road){X.translate(0,11);path();X.strokeStyle='#33363d';X.lineWidth=22;X.stroke();path();X.strokeStyle='#f5d142';X.lineWidth=3;X.setLineDash([28,22]);X.stroke();X.setLineDash([]);X.translate(0,-11);path();X.strokeStyle='rgba(235,238,242,.85)';X.lineWidth=2;X.stroke()}
 if(L.cs==2){X.lineWidth=2;X.lineCap='round';for(let j=0;j<2;j++){X.strokeStyle=j?'#2f9e3d':'#6fd45a';X.beginPath();for(let q=x0+j*7;q<x1;q+=14){const h=hs(q),b=5+h*9,sw=Math.sin(tm*2+q*.05)*2;X.moveTo(q,T(q)+1);X.lineTo(q+sw+(h-.5)*4,T(q)-b)}X.stroke()}
  for(let q=Math.floor(x0/70)*70;q<x1;q+=70)if(hs(q*1.3)>.5){X.fillStyle=['#fff','#fde047','#f472b6'][q/70&1?1:(q/70&2?2:0)];X.beginPath();X.arc(q,T(q)-9,2.6,0,7);X.fill()}}
 path();X.strokeStyle='rgba(0,0,0,.18)';X.lineWidth=3;X.translate(0,9);X.stroke();X.translate(0,-9)}
function fx(){if(L.cs!=6)return;X.setTransform(dpr,0,0,dpr,0,0);X.fillStyle='rgba(255,255,255,.85)';for(let i=0;i<70;i++){const sp=.5+hs(i+9),x=((i*97+tm*18*sp+Math.sin(tm+i)*12)%W+W)%W,y=(i*53+tm*45*sp)%H;X.beginPath();X.arc(x,y,1+hs(i)*1.6,0,7);X.fill()}}
