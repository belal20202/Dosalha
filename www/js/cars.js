// ===== السيارات: البيانات والرسم =====
// [الاسم, السعر, القوة, نصف قطر العجلة, قاعدة العجلات, اللون, الشكل, الوقود, التماسك]
const CARS=[
['سراب',0,1000,17,38,'#efe3c2',25,1,1],['فراشة',0,900,14,30,'#16a34a',5,.9,1],['لؤلؤة',0,1100,16,42,'#e5e7eb',0,1,1],['عزم',0,1200,19,42,'#1fa3a0',2,1.1,1.05],
['شمس',0,1250,16,42,'#f5b800',0,1.1,1.05],['قافلة',0,1300,20,56,'#dc2626',4,1.3,1.1],['شهاب',0,1500,15,42,'#d62828',3,1,1.1],['أوريون',0,1500,21,42,'#4a6b34',1,1.2,1.15],
['عملاق',0,1600,22,52,'#0891b2',2,1.4,1.2],['زمرد',0,1700,22,44,'#4b6b2f',23,1.3,1.2],['تيتان',0,1800,28,46,'#ea580c',27,1.4,1.3],['ترس',0,1900,20,44,'#eab308',25,1.6,1.35],
['ظل',0,2000,18,44,'#c1121f',21,1.3,1.3],['برق',0,2300,16,46,'#1d4fb5',26,1.2,1.35],['عاصفة',0,2200,24,48,'#14b8a6',23,1.6,1.45],['تاج',0,2500,20,46,'#17181c',20,1.6,1.5],
['سديم',0,2700,17,48,'#22c55e',21,1.8,1.55],['عنقاء',0,3000,22,50,'#38bdf8',24,2,1.7],['سنبلة',0,2300,30,40,'#16a34a',6,1.8,1.8],['نبض',0,2400,19,50,'#f8fafc',7,1.7,1.5],
['حارس',0,2600,17,44,'#1e3a8a',8,1.6,1.6],['لهب',0,2500,21,56,'#dc2626',9,1.9,1.6],['ينبوع',0,2500,22,58,'#475569',10,2.4,1.6],['فخامة',0,2800,16,60,'#111827',11,1.8,1.6],
['نسيم',0,2400,13,32,'#a3e635',12,1.8,1.7],['فقاعة',0,2600,12,34,'#e0f2fe',13,1.6,1.7],['خفّة',0,2500,11,28,'#9ca3af',14,1.6,1.9],['كريمة',0,2600,15,40,'#f9a8d4',15,1.8,1.7],
['أندروميدا',0,3500,14,38,'#a78bfa',16,3,2],['مذنّب',0,4000,15,50,'#ef4444',17,3,2],['حُلم',0,3300,16,38,'#f97316',18,2.4,2],['سكّرة',0,3800,18,44,'#f472b6',19,3,2.2],
['زفير',0,3200,15,44,'#38bdf8',21,2.2,2.1],['ياقوت',0,3300,16,44,'#be123c',26,2.2,2.1],['أرغوان',0,3400,18,48,'#a21caf',22,2.3,2.2],['سيروكو',0,3500,20,44,'#b45309',2,2.4,2.2],
['غيمة',0,3300,14,32,'#e5e7eb',20,2.3,2.3],['قمرة',0,3600,16,62,'#f1f5f9',11,2.4,2.3],['عاصي',0,3800,32,48,'#15803d',27,2.6,2.5],['ضباب',0,3700,16,44,'#64748b',24,2.4,2.4],
['مدار',0,3900,20,58,'#db2777',4,2.8,2.4],['رعد',0,4000,24,54,'#1d4ed8',2,2.8,2.5],['ندى',0,3600,13,34,'#fef3c7',12,2.6,2.6],['كوكب',0,4200,14,40,'#4ade80',16,3.2,2.6],
['شعلة',0,4400,15,50,'#f97316',17,3.2,2.6],['سحاب',0,4000,17,46,'#cbd5e1',0,2.8,2.6],['طيف',0,3900,14,36,'#7c3aed',25,2.8,2.7],['مجرّة',0,4600,15,40,'#2563eb',16,3.4,2.8],
['قوس قزح',0,4500,18,46,'#fb7185',19,3.4,2.8],['ذهب',0,4800,17,62,'#eab308',11,3.4,2.9],['أنيس',0,4700,16,42,'#7dd3fc',15,3.4,2.9],['خلود',0,5200,16,52,'#fbbf24',17,3.6,3],
['هلال',0,5300,15,40,'#facc15',28,3.6,3],['ديوان',0,5400,14,38,'#b45309',29,3.6,3.1],['موج',0,5500,16,48,'#0ea5e9',30,3.7,3.1],['شهية',0,5600,15,44,'#d97706',31,3.7,3.2],
['نيزك',0,5700,22,50,'#f97316',24,3.8,3.2],['وميض',0,5900,16,46,'#fde047',21,3.8,3.3],['كثيب',0,6000,24,48,'#d4a35a',23,3.9,3.3],['أثير',0,6200,17,46,'#0f172a',26,4,3.4]];
CARS.forEach((c,i)=>{c[1]=i?Math.round(30*Math.pow(i,1.55)/10)*10:0});
// ملامح الهيكل: [مؤخرة, زجاج خلفي, سقف, زجاج أمامي, غطاء المحرك (نسب من الطول), ارتفاع الغطاء, ارتفاع الصندوق, ارتفاع المقصورة, انحناء السقف, بروز خلفي, بروز أمامي]
const STY={
0:[.22,.14,.26,.15,.23,-4,-6,21,3,16,18],1:[.10,.03,.50,.07,.30,-6,-9,27,0,14,13],2:[.34,.03,.20,.12,.31,-4,-3,24,2,15,17],
3:[.15,.18,.16,.20,.31,-3,-4,14,0,15,19],4:[.03,.02,.90,.03,.02,-6,-6,36,1,12,12],7:[.02,.03,.64,.10,.21,-3,-6,30,1,14,14],
9:[.58,.02,.14,.08,.18,-4,-26,26,1,12,12],10:[.60,.02,.12,.06,.20,-4,-8,26,1,12,12],11:[.30,.12,.26,.12,.20,-5,-7,18,2,16,16],
15:[.02,.03,.60,.12,.23,-3,-6,32,1,14,14],20:[.17,.06,.33,.07,.37,-6,-9,30,2,18,20],21:[.20,.05,.20,.07,.48,-2,-5,22,1,14,22],
22:[.04,.08,.52,.17,.19,-3,-6,28,1,14,14],23:[.14,.02,.50,.04,.30,-6,-8,24,0,14,13],24:[.06,.40,.04,.28,.22,-6,-8,19,0,14,14],
25:[.14,.22,.14,.20,.30,-3,-6,24,6,16,16],26:[.20,.22,.14,.18,.26,-4,-7,17,1,16,17]};
STY[8]=STY[0];STY[19]=STY[25];STY[27]=STY[2];
const FT={0:{f:1,ww:1},1:{soft:1,off:1,spare:1},2:{f:1,ww:1,col:1},3:{f:1,ww:1,open:1},20:{f:1,ww:1,rb:1,rad:1},21:{f:1,ww:1,col:1,eng:1,rad:1},23:{open:1,off:1,spare:2,flat:1},
25:{f:1,ww:1,col:1},26:{stripe:1},11:{f:1,ww:1},22:{f:1,ww:1},4:{ww:1},7:{ww:1},8:{f:1,ww:1},9:{ww:1},10:{ww:1},15:{ww:1},19:{f:1,ww:1,col:1},27:{off:1,f:1,ww:0},6:{off:1}};
const HH={5:30,6:30,12:26,13:16,14:16,16:22,17:16,18:18,28:18,29:26,30:18,31:20};
function geo(sp,w,R){const s=STY[sp],g={};
 if(s){const L=2*w+s[9]+s[10];const up=R*.5;g.Lr=w+s[9];g.Lf=w+s[10];g.GB=-g.Lr+L*s[0];g.RB=g.GB+L*s[1];g.RF=g.RB+L*s[2];g.GF=g.RF+L*s[3];g.hy=s[5]-up;g.dy=s[6]-up;g.hh=s[7];g.ar=s[8];g.rx=(g.RB+g.RF)/2}
 else{g.Lr=g.Lf=w+16;g.hh=HH[sp]||20;g.rx=0}
 g.roof=-8-g.hh-(s?R*.5:0);g.sill=14+R*.34;g.lift=Math.max(0,(R-17)*.7);return g}
CARS.forEach(c=>{c.g=geo(c[6],c[4],c[3])});
let mood=0;
function wheel(c,x,y,R,r,wt,rc){c.save();c.translate(x,y);c.rotate(r);c.fillStyle='#121212';c.beginPath();c.arc(0,0,R,0,7);c.fill();
 if(wt==2){c.fillStyle='#2a2a2a';for(let i=0;i<16;i++){c.save();c.rotate(i*.3927);c.fillRect(R-4.4,-2,4.4,4);c.restore()}}
 if(wt==1){c.fillStyle='#f6f1e1';c.beginPath();c.arc(0,0,R*.9,0,7);c.moveTo(R*.6,0);c.arc(0,0,R*.6,0,7,true);c.fill();c.strokeStyle='#cfc6aa';c.lineWidth=.8;c.beginPath();c.arc(0,0,R*.75,0,7);c.stroke()}
 else{c.strokeStyle='#2c2c2c';c.lineWidth=1.4;c.beginPath();c.arc(0,0,R-2.5,0,7);c.stroke()}
 const q=wt==1?R*.6:R*.66;
 if(rc){c.fillStyle=rc;c.beginPath();c.arc(0,0,q,0,7);c.fill();c.strokeStyle='#dfe5ea';c.lineWidth=1.5;c.stroke()}
 else{const g=c.createRadialGradient(-R*.12,-R*.12,1,0,0,q);g.addColorStop(0,'#fff');g.addColorStop(.6,'#c3cad2');g.addColorStop(1,'#7e8893');c.fillStyle=g;c.beginPath();c.arc(0,0,q,0,7);c.fill();c.strokeStyle='#4b535c';c.lineWidth=.8;c.stroke();
  if(wt!=1){c.strokeStyle='#5b6470';c.lineWidth=Math.max(1.4,R*.08);c.beginPath();for(let i=0;i<5;i++){const a=i*1.2566;c.moveTo(0,0);c.lineTo(Math.cos(a)*q*.92,Math.sin(a)*q*.92)}c.stroke()}}
 c.fillStyle='#d8dee5';c.strokeStyle='#4b535c';c.lineWidth=.7;c.beginPath();c.arc(0,0,R*.22,0,7);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(-R*.06,-R*.06,R*.07,0,7);c.fill();c.restore()}
// ---- السائق: شخصية كرتونية بشماغ عراقي وعقال، تتغير ملامحها حسب الحالة
function driver(c,x,y,s){s=s||1;const fl=Math.min(1,Math.abs((typeof P!='undefined'&&P)?P.vx:0)/900),w1=Math.sin(tm*13)*1.7*(.35+fl),md=mood,ol='#3a2a1c',sk='#f0c29b';
 c.save();c.translate(x,y);c.scale(s,s);c.lineJoin='round';c.lineCap='round';
 c.fillStyle='#f4f1ea';c.strokeStyle=ol;c.lineWidth=.9;c.beginPath();c.moveTo(-7,18);c.quadraticCurveTo(-8.5,7,-3,5.2);c.lineTo(3.5,5.2);c.quadraticCurveTo(8,7,7.5,18);c.closePath();c.fill();c.stroke();
 c.fillStyle='#cfc8b6';c.beginPath();c.moveTo(-2.2,5.2);c.lineTo(.2,9.5);c.lineTo(2.8,5.2);c.fill();
 c.save();c.translate(13.5,9.5);c.rotate(.32);c.strokeStyle='#2b2118';c.lineWidth=1.9;c.beginPath();c.ellipse(0,0,2.1,6.4,0,0,7);c.stroke();c.restore();
 c.strokeStyle=ol;c.lineWidth=4.8;c.beginPath();c.moveTo(1.5,8.5);c.lineTo(6,13);c.lineTo(11.8,10.6);c.stroke();c.strokeStyle='#f4f1ea';c.lineWidth=3.6;c.stroke();
 c.fillStyle=sk;c.strokeStyle=ol;c.lineWidth=.7;c.beginPath();c.arc(12.6,10.4,2.1,0,7);c.fill();c.stroke();
 c.fillStyle=sk;c.fillRect(-2,3.2,4.2,3.4);
 c.fillStyle='#e0a67d';c.beginPath();c.arc(-1.6,1.6,1.8,0,7);c.fill();c.stroke();
 c.fillStyle=sk;c.strokeStyle=ol;c.lineWidth=.8;c.beginPath();c.arc(0,0,6,0,7);c.fill();c.stroke();
 c.fillStyle='#e9a98e';c.beginPath();c.arc(3.6,2.6,1.7,0,7);c.fill();
 c.fillStyle=sk;c.beginPath();c.moveTo(5.5,-.4);c.lineTo(7.7,2);c.lineTo(5.4,2.8);c.closePath();c.fill();c.stroke();
 const sc=md==2?1.25:1;c.fillStyle='#fff';c.beginPath();c.ellipse(2.9,-.2,1.8*sc,2.1*sc,0,0,7);c.fill();c.stroke();
 if(md==3){c.strokeStyle='#222';c.lineWidth=.9;c.beginPath();c.moveTo(1.8,-1.4);c.lineTo(4,.9);c.moveTo(4,-1.4);c.lineTo(1.8,.9);c.stroke()}
 else{c.fillStyle='#1b1208';c.beginPath();c.arc(3.6,-.1,1.1*sc,0,7);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(3.9,-.5,.4,0,7);c.fill()}
 c.strokeStyle='#2a1a0d';c.lineWidth=1.1;c.beginPath();c.moveTo(1.2,md==2?-3.6:-2.2);c.lineTo(4.9,md==2?-4:-2.9);c.stroke();
 c.fillStyle='#1d1409';c.beginPath();c.moveTo(3.2,2.4);c.quadraticCurveTo(5.6,1.6,7.2,2.6);c.quadraticCurveTo(5.4,3.4,3.2,3.1);c.fill();
 if(md==0){c.strokeStyle='#7a2a1a';c.lineWidth=.9;c.beginPath();c.arc(4,3.6,1.7,.15*Math.PI,.8*Math.PI);c.stroke()}
 else if(md==1){c.fillStyle='#7a1f1a';c.beginPath();c.arc(4.2,3.7,2,0,Math.PI);c.fill();c.fillStyle='#fff';c.fillRect(3,3.7,2.4,.8)}
 else if(md==2){c.fillStyle='#7a1f1a';c.beginPath();c.ellipse(4.4,4.5,1.2,1.6,0,0,7);c.fill()}
 else{c.strokeStyle='#7a2a1a';c.lineWidth=.9;c.beginPath();c.moveTo(2.6,4.4);c.quadraticCurveTo(3.8,3.4,5,4.4);c.stroke()}
 c.fillStyle='#fff';c.strokeStyle=ol;c.lineWidth=.8;c.beginPath();c.moveTo(-6.4,-1.4);c.quadraticCurveTo(-6.6,-7.6,0,-7.8);c.quadraticCurveTo(6.6,-7.6,6.6,-1.6);c.lineTo(-6.4,-1.4);c.fill();c.stroke();
 c.save();c.clip();c.fillStyle='rgba(200,40,40,.85)';for(let i=-8;i<8;i+=3)for(let j=-9;j<0;j+=3)if(((i+j)/3|0)%2==0)c.fillRect(i,j,1.6,1.6);c.restore();
 c.fillStyle='#fff';c.beginPath();c.moveTo(-5.8,-4);c.quadraticCurveTo(-10-w1,-3,-15-w1*1.6,3+w1*.4);c.quadraticCurveTo(-11,8,-5.6,7);c.lineTo(-5,-1);c.closePath();c.fill();c.stroke();
 c.save();c.clip();c.fillStyle='rgba(200,40,40,.85)';for(let i=-18;i<-4;i+=3)for(let j=-5;j<9;j+=3)if(((i+j)/3|0)%2==0)c.fillRect(i,j,1.6,1.6);c.restore();
 c.strokeStyle='#15110d';c.lineWidth=1.5;c.beginPath();c.ellipse(0,-3.4,6.6,1.5,0,0,7);c.stroke();c.beginPath();c.ellipse(0,-5.1,6.1,1.2,0,Math.PI*1.05,Math.PI*1.95);c.stroke();
 c.restore()}
const person=driver;
const siren=()=>Math.sin(tm*12)>0?'#ff3b30':'#3a7bff';
const DEC={
3:(c,g,w,C)=>{c.strokeStyle='#15110d';c.lineWidth=5.5;c.lineCap='round';c.beginPath();c.moveTo(g.GF-14,g.hy+11);c.quadraticCurveTo((g.RB+g.GF)/2,g.hy+9,g.RB-6,g.dy+12);c.stroke();c.strokeStyle='#f3efe6';c.lineWidth=3.6;c.stroke()},
21:(c,g,w,C)=>{c.fillStyle='#4e545c';c.strokeStyle='#15110d';c.lineWidth=1.3;rr(c,g.GF+6,g.hy-12,g.Lf-g.GF-24,12,2);c.fill();c.stroke();c.fillStyle='#d8dee5';rr(c,g.GF+9,g.hy-16,9,5,2);c.fill();c.stroke();rr(c,g.GF+22,g.hy-16,9,5,2);c.fill();c.stroke();c.fillStyle='#8c939c';c.fillRect(g.GF+16,g.hy-18,6,3);
  c.strokeStyle='#d8dee5';c.lineWidth=2.4;c.beginPath();c.moveTo(g.GF+8,g.hy-1);c.lineTo(g.GF-2,g.hy+9);c.lineTo(g.GB+22,g.hy+9);c.stroke()},
26:(c,g,w,C)=>{c.fillStyle='#f5f5f5';c.fillRect(-g.Lr+5,g.sill-10,g.Lr+g.Lf-10,2.2);c.fillRect(-g.Lr+5,g.sill-6.5,g.Lr+g.Lf-10,1.2);c.fillRect(g.GF+2,g.hy-.8,g.Lf-g.GF-12,2.2);c.fillRect(g.RB+4,g.roof+.5,g.RF-g.RB-8,1.6)},
1:(c,g,w,C)=>{c.fillStyle='#1a1a1a';c.fillRect(g.GB+6,g.dy-3,g.GF-g.GB-20,2);c.strokeStyle='rgba(0,0,0,.35)';c.lineWidth=1;c.beginPath();for(let x=g.GB+8;x<g.GF-12;x+=9){c.moveTo(x,g.dy-3);c.lineTo(x,g.dy)}c.stroke()},

2:(c,g,w,C)=>{c.fillStyle='#9a6a35';c.strokeStyle='#15110d';c.lineWidth=1.2;c.fillRect(-g.Lr+2,g.dy-2.5,g.GB+g.Lr-4,5);c.strokeRect(-g.Lr+2,g.dy-2.5,g.GB+g.Lr-4,5);c.strokeStyle='rgba(0,0,0,.4)';c.lineWidth=.8;c.beginPath();for(let x=-g.Lr+9;x<g.GB-2;x+=8){c.moveTo(x,g.dy-2.5);c.lineTo(x,g.dy+2.5)}c.stroke();c.fillStyle='#e8e0cc';c.fillRect(g.GB-2,g.dy,2,g.sill-g.dy-6)},
0:(c,g,w,C)=>{if(C[5]=='#f5b800'){for(let x=-g.Lr+6;x<g.GF-4;x+=4){c.fillStyle=((x+g.Lr)/4|0)%2?'#111':'#fff';c.fillRect(x,g.dy+8,4,3.2)}c.fillStyle='#f5b800';c.strokeStyle='#15110d';c.lineWidth=1.2;rr(c,g.rx-9,g.roof-8,18,8,2);c.fill();c.stroke();c.fillStyle='#111';c.font='700 6.5px system-ui';c.textAlign='center';c.fillText('TAXI',g.rx,g.roof-1.6)}},
7:(c,g,w,C)=>{c.fillStyle='#ef4444';c.fillRect(-g.Lr,g.dy+8,g.Lr+g.Lf,3);c.fillRect(-g.Lr+14,g.dy+13,11,4);c.fillRect(-g.Lr+17.5,g.dy+9.5,4,11);c.fillStyle=siren();c.fillRect(g.rx-8,g.roof-5,16,5)},
8:(c,g,w,C)=>{c.fillStyle='#f8fafc';c.fillRect(g.GB-4,g.dy+7,g.GF-g.GB+8,g.sill-g.dy-14);c.fillStyle='#1e3a8a';c.fillRect(g.GB+4,g.dy+10,16,2);c.fillStyle=Math.sin(tm*12)>0?'#ff3b30':'#6b1a16';c.fillRect(g.rx-9,g.roof-5,9,5);c.fillStyle=Math.sin(tm*12)>0?'#1d3a7a':'#3a7bff';c.fillRect(g.rx,g.roof-5,9,5)},
9:(c,g,w,C)=>{c.fillStyle='#f1f5f9';c.fillRect(-g.Lr,g.sill-12,g.Lr+g.Lf,3);c.fillStyle='#d1d5db';c.fillRect(-g.Lr+4,g.dy-5,g.GB+g.Lr-8,3);c.strokeStyle='#9ca3af';c.lineWidth=1;for(let x=-g.Lr+8;x<g.GB-4;x+=7){c.beginPath();c.moveTo(x,g.dy-5);c.lineTo(x,g.dy-2);c.stroke()}c.fillStyle=siren();c.fillRect(g.rx-7,g.roof-5,14,5);c.fillStyle='#fbbf24';c.fillRect(-g.Lr+10,g.dy+3,6,6)},
10:(c,g,w,C)=>{const t=c.createLinearGradient(0,g.dy-30,0,g.dy);t.addColorStop(0,'#f1f5f9');t.addColorStop(.5,'#94a3b8');t.addColorStop(1,'#475569');c.fillStyle=t;rr(c,-g.Lr+2,g.dy-30,g.GB+g.Lr-6,30,14);c.fill();c.strokeStyle='rgba(0,0,0,.55)';c.lineWidth=1.4;c.stroke();c.strokeStyle='rgba(0,0,0,.25)';for(let x=-g.Lr+16;x<g.GB-8;x+=12){c.beginPath();c.moveTo(x,g.dy-29);c.lineTo(x,g.dy-1);c.stroke()}c.fillStyle='#dc2626';c.fillRect(-g.Lr+10,g.dy-18,g.GB+g.Lr-26,4)},
11:(c,g,w,C)=>{c.fillStyle='#fbbf24';c.fillRect(-g.Lr,g.dy+10,g.Lr+g.Lf,2)},
15:(c,g,w,C)=>{const m=g.rx;c.fillStyle='#e8b86d';c.beginPath();c.moveTo(m-8,g.roof-12);c.lineTo(m+8,g.roof-12);c.lineTo(m,g.roof);c.fill();c.fillStyle='#fda4af';c.beginPath();c.arc(m,g.roof-17,10,0,7);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(m-3,g.roof-20,3,0,7);c.fill();c.fillStyle='#e11d48';c.beginPath();c.arc(m,g.roof-28,3,0,7);c.fill();
  c.fillStyle='#bfe3ff';rr(c,g.RB+8,g.hy+1,24,14,2);c.fill();for(let i=0;i<6;i++){c.fillStyle=i%2?'#fff':'#ef4444';c.fillRect(g.RB+6+i*5,g.hy-3,5,5)}},
19:(c,g,w,C)=>{const m=g.rx;c.fillStyle='#a16207';c.fillRect(m-1.5,g.roof-14,3,14);c.fillStyle='#fff';c.beginPath();c.arc(m,g.roof-18,12,0,7);c.fill();c.strokeStyle='#ef4444';c.lineWidth=3;c.beginPath();c.arc(m,g.roof-18,7,0,5);c.stroke();c.beginPath();c.arc(m,g.roof-18,2,0,7);c.stroke()}};
const chromeG=(c,y,h)=>{const q=c.createLinearGradient(0,y,0,y+h);q.addColorStop(0,'#fff');q.addColorStop(.5,'#cfd6dd');q.addColorStop(1,'#78828d');return q};
// ---- الهيكل الكلاسيكي العادي
function std(c,C,g,w,R,sp){
 const f=FT[sp]||{},col=C[5],Lr=g.Lr,Lf=g.Lf,GB=g.GB,RB=g.RB,RF=g.RF,GF=g.GF,roof=g.roof,hy=g.hy,dy=g.dy,sill=g.sill,gy=Math.max(hy,dy)+1,ang=sp==24,rnd=sp==25,op=f.open,OL='#15110d';
 if(f.rb){c.fillStyle='#14110d';c.fillRect(-w+R*.5,sill-2,2*w-R,5)}
 c.beginPath();c.moveTo(-Lr,sill);c.lineTo(-Lr,dy+7);c.quadraticCurveTo(-Lr,dy,-Lr+8,dy);c.lineTo(GB,dy);
 if(op){c.lineTo(RB,gy+5);c.lineTo(GF-5,gy+5);c.lineTo(GF,hy)}
 else if(ang){c.lineTo(RB,roof);c.lineTo(RF,roof);c.lineTo(GF,hy)}
 else{c.quadraticCurveTo(GB+(RB-GB)*.3,dy-(dy-roof)*(rnd?1.15:.8),RB,roof);c.quadraticCurveTo((RB+RF)/2,roof-g.ar,RF,roof);c.quadraticCurveTo(RF+(GF-RF)*.55,roof+(hy-roof)*.2,GF,hy)}
 c.lineTo(Lf-10,hy+1);c.quadraticCurveTo(Lf,hy+2,Lf,hy+10);c.lineTo(Lf,sill);c.closePath();
 c.fillStyle=gr(c,col,roof,sill);c.fill();c.strokeStyle=OL;c.lineWidth=2;c.stroke();
 c.save();c.clip();
 if(f.soft){const q=c.createLinearGradient(0,roof,0,gy);q.addColorStop(0,'#dcc690');q.addColorStop(1,'#b89a5c');c.fillStyle=q;c.fillRect(RB-22,roof-6,GF-RB+30,gy-roof+6)}
 const lg=c.createLinearGradient(0,hy,0,sill);lg.addColorStop(0,'rgba(255,255,255,.22)');lg.addColorStop(.4,'rgba(255,255,255,0)');lg.addColorStop(1,'rgba(0,0,0,.3)');c.fillStyle=lg;c.fillRect(-Lr-2,roof-6,Lr+Lf+4,sill-roof+8);
 c.strokeStyle='rgba(255,255,255,.4)';c.lineWidth=1.2;c.beginPath();c.moveTo(-Lr+2,gy+7);c.lineTo(Lf-3,gy+5);c.stroke();
 if(!op){c.strokeStyle='rgba(0,0,0,.4)';c.lineWidth=1;const nd=Math.max(1,Math.round((RF-RB)/42)),xs=[RF+(GF-RF)*.3];for(let i=0;i<nd;i++)xs.push(RB+(RF-RB)*i/nd-(i?0:4));c.beginPath();xs.forEach(x=>{c.moveTo(x,gy+1);c.lineTo(x,sill-3)});c.stroke();c.fillStyle='rgba(255,255,255,.7)';xs.forEach(x=>c.fillRect(x+3,gy+5,6,1.6))}
 for(const s of[-1,1]){c.fillStyle='#0c0c0f';c.beginPath();c.arc(s*w,14+g.lift,R+4,0,7);c.fill()}
 c.restore();
 if(op){const px=(RB+GF)/2-4,hY=gy-11;c.fillStyle=sp==3?'#a3341f':'#a07a45';c.strokeStyle=OL;c.lineWidth=1;rr(c,px-14,hY+2,9,gy+5-hY,3);c.fill();c.stroke();driver(c,px+lean*.5,hY,1);
  c.beginPath();c.moveTo(GF-1,hy-1);c.lineTo(RF+1,roof);c.lineTo(RF-7,roof);c.lineTo(GF-9,hy-1);c.closePath();c.fillStyle='rgba(170,215,240,.55)';c.fill();c.lineWidth=1.8;c.strokeStyle='#dfe5ea';c.stroke();c.lineWidth=.8;c.strokeStyle=OL;c.stroke()}
 else{const gp=()=>{c.beginPath();c.moveTo(GB+3,gy);c.lineTo(RB+2.5,roof+3);c.lineTo(RF-2.5,roof+3);c.lineTo(GF-3.5,gy);c.closePath()};
  gp();const gg=c.createLinearGradient(0,roof,0,gy);gg.addColorStop(0,'#27425f');gg.addColorStop(1,'#86b8dc');c.fillStyle=gg;c.fill();
  c.save();c.clip();const gh=gy-roof-3;driver(c,RF-9+lean*.5,roof+3+gh*.36,Math.min(1,gh/26));
  c.fillStyle='rgba(255,255,255,.22)';c.beginPath();c.moveTo(RB+8,roof);c.lineTo(RB+20,roof);c.lineTo(RB+6,gy);c.lineTo(RB-6,gy);c.fill();c.restore();
  gp();c.lineWidth=2.2;c.strokeStyle='#dfe5ea';c.stroke();c.lineWidth=.9;c.strokeStyle=OL;c.stroke();
  const n=Math.max(1,Math.round((RF-RB)/34));c.strokeStyle=shade(col,-.3);c.lineWidth=2.6;for(let i=1;i<n;i++){const x=RB+(RF-RB)*i/n;c.beginPath();c.moveTo(x,roof+3);c.lineTo(x,gy);c.stroke()}}
 DEC[sp]&&DEC[sp](c,g,w,C)}
// ---- العناصر فوق العجلات: الرفارف والمصدات والمصابيح والشبك
function over(c,C,g,w,R,sp){
 const f=FT[sp]||{},col=C[5],Lf=g.Lf,Lr=g.Lr,hy=g.hy,dy=g.dy,sill=g.sill,wy=14+g.lift,OL='#15110d';
 if(f.f)for(const s of[-1,1]){const wx=s*w,a=s>0?4:7,b=s>0?7:4,yl=Math.min(wy+R*.62,sill+1);c.beginPath();c.moveTo(wx-R-a,yl);c.quadraticCurveTo(wx-R-a,wy-R-5,wx-4,wy-R-7);c.quadraticCurveTo(wx+R+7,wy-R-5,wx+R+b,yl);c.lineTo(wx+R+3,yl);c.arc(wx,wy,R+2.5,0,Math.PI,true);c.closePath();
  c.fillStyle=gr(c,col,wy-R-8,wy+R*.6);c.fill();c.strokeStyle=OL;c.lineWidth=1.8;c.stroke();c.strokeStyle='rgba(255,255,255,.45)';c.lineWidth=1;c.beginPath();c.arc(wx,wy,R+5,Math.PI*1.12,Math.PI*1.7);c.stroke()}
 const ch=(x,y,w2,h2,r2)=>{c.fillStyle=chromeG(c,y,h2);rr(c,x,y,w2,h2,r2);c.fill();c.strokeStyle=OL;c.lineWidth=1.2;c.stroke()};
 ch(Lf-6,sill-9,13,6,3);ch(-Lr-7,sill-9,13,6,3);
 c.fillStyle='#17171a';c.fillRect(Lf-5,hy+8,4,Math.max(3,sill-hy-18));c.strokeStyle='#dfe5ea';c.lineWidth=1;c.beginPath();for(let i=0;i<3;i++){c.moveTo(Lf-4.5+i*1.4,hy+8);c.lineTo(Lf-4.5+i*1.4,sill-10)}c.stroke();
 if(f.rad){ch(Lf-11,hy-11,10,sill-hy+7,3);c.strokeStyle='#222';c.lineWidth=.9;c.beginPath();for(let i=1;i<4;i++){c.moveTo(Lf-9.5+i*2,hy-9);c.lineTo(Lf-9.5+i*2,sill-8)}c.stroke()}
 const hx=Lf-(f.rad?16:6),hyy=hy+(f.rad?1:5.5),hr=f.rad?6:5.2;c.fillStyle='#e6ebf0';c.strokeStyle=OL;c.lineWidth=1.2;c.beginPath();c.arc(hx,hyy,hr,0,7);c.fill();c.stroke();
 const hg=c.createRadialGradient(hx+.5,hyy-1,.5,hx,hyy,hr-1.2);hg.addColorStop(0,'#fffef0');hg.addColorStop(1,'#f4d97a');c.fillStyle=hg;c.beginPath();c.arc(hx+.4,hyy,hr-1.4,0,7);c.fill();c.fillStyle='rgba(255,255,255,.9)';c.beginPath();c.arc(hx-1,hyy-1.4,1.2,0,7);c.fill();
 c.fillStyle='#d11';rr(c,-Lr+.5,dy+2,4.5,Math.min(8,sill-dy-9),2);c.fill();
 if(f.spare==1){const sx=g.GF+14,sy=hy-8;c.fillStyle='#141414';c.strokeStyle=OL;c.lineWidth=1.2;c.beginPath();c.arc(sx,sy,9,0,7);c.fill();c.stroke();c.fillStyle='#cfd6dd';c.beginPath();c.arc(sx,sy,4.2,0,7);c.fill()}
 if(f.spare==2){const sx=-Lr-4,sy=dy+10;c.fillStyle='#141414';c.strokeStyle=OL;c.lineWidth=1.2;c.beginPath();c.arc(sx,sy,9.5,0,7);c.fill();c.stroke();c.fillStyle='#8a8f98';c.beginPath();c.arc(sx,sy,4.2,0,7);c.fill()}
 if(f.eng){c.strokeStyle='#cfd6dd';c.lineWidth=2.4;c.beginPath();c.moveTo(-w+R,sill-2);c.lineTo(-Lr-4,sill-2);c.stroke()}
 if(!f.open||f.spare){c.fillStyle='#e6ebf0';c.strokeStyle=OL;c.lineWidth=1;c.beginPath();c.arc(g.GF-4,Math.max(hy,dy)-4,2.6,0,7);c.fill();c.stroke()}}
const body=(c,col,x,y,w,h,r)=>{c.fillStyle=gr(c,col,y,y+h);rr(c,x,y,w,h,r);c.fill();c.strokeStyle='rgba(0,0,0,.6)';c.lineWidth=1.6;c.stroke()};
const glassF=(c,x,y,w,h,r)=>{const t=c.createLinearGradient(0,y,0,y+h);t.addColorStop(0,'#27425f');t.addColorStop(1,'#86b8dc');c.fillStyle=t;rr(c,x,y,w,h,r);c.fill()};
const FULL={
5:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;body(c,C[5],-Lr,-6,Lr+Lf-4,s+6,8);person(c,4+lean*.5,-20);c.fillStyle='#1f2937';rr(c,-Lr+2,-40,Lr+Lf-12,5,3);c.fill();c.fillStyle='#fbbf24';c.fillRect(-Lr+2,-35,Lr+Lf-12,2);c.fillStyle='#374151';c.fillRect(-Lr+6,-35,2.5,29);c.fillRect(Lf-16,-35,2.5,29);
  c.fillStyle='rgba(180,220,245,.55)';c.beginPath();c.moveTo(Lf-16,-35);c.lineTo(Lf-5,-6);c.lineTo(Lf-16,-6);c.fill();c.fillStyle='#fffbe0';c.beginPath();c.arc(Lf-3,2,3.6,0,7);c.fill()},
6:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;body(c,C[5],-8,-8,Lf+8,s+8,6);body(c,C[5],-Lr,-4,Lr,s+4,5);c.fillStyle=C[5];rr(c,-Lr+6,-38,38,32,4);c.fill();c.stroke();glassF(c,-Lr+10,-34,30,20,3);
  person(c,-Lr+24+lean*.5,-24,.8);c.fillStyle='#333';c.fillRect(Lf-18,-28,4,22);c.fillStyle='#222';rr(c,Lf-6,-2,5,s-8,2);c.fill();c.fillStyle='#fffbe0';c.fillRect(Lf-8,-6,6,3)},
12:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;body(c,C[5],-Lr,-8,Lr+Lf,s+8,9);c.fillStyle='#e5e7eb';rr(c,-Lr+4,-16,26,10,4);c.fill();person(c,2+lean*.5,-22,.9);
  c.fillStyle='#f8fafc';rr(c,-Lr+2,-36,Lr+Lf-8,5,3);c.fill();c.stroke();c.fillStyle='#374151';c.fillRect(-Lr+6,-31,2,23);c.fillRect(Lf-12,-31,2,23);
  c.fillStyle='rgba(180,220,245,.5)';c.beginPath();c.moveTo(Lf-12,-31);c.lineTo(Lf-4,-8);c.lineTo(Lf-12,-8);c.fill();c.fillStyle='#fffbe0';c.fillRect(Lf-3,-4,4,4)},
13:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;person(c,2+lean*.5,-14);c.fillStyle='#f1f5f9';c.strokeStyle='#64748b';c.lineWidth=1.8;c.beginPath();c.moveTo(-Lr,-6);c.lineTo(Lf,-6);c.quadraticCurveTo(Lf,s+2,Lf-14,s+2);c.lineTo(-Lr+14,s+2);c.quadraticCurveTo(-Lr,s+2,-Lr,-6);c.closePath();c.fill();c.stroke();
  c.fillStyle='#e2e8f0';c.fillRect(-Lr-2,-9,Lr+Lf+4,5);c.fillStyle='#9ca3af';c.fillRect(-Lr+2,-26,3,18);c.fillRect(-Lr+2,-26,12,3);c.fillStyle='rgba(255,255,255,.85)';for(let i=0;i<5;i++){c.beginPath();c.arc(-6+i*9,-11-(i%2)*4,3+i%3,0,7);c.fill()}},
14:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;person(c,lean*.5,-18);c.strokeStyle='#cbd5e1';c.lineWidth=2;const a=-Lr+2,b=Lr+Lf-4;c.beginPath();c.moveTo(a,-8);c.lineTo(a+b,-8);c.lineTo(a+b-8,s);c.lineTo(a+8,s);c.closePath();for(let i=1;i<7;i++){c.moveTo(a+8+(b-16)*i/7,-8);c.lineTo(a+8+(b-16)*i/7,s)}c.moveTo(a+4,3);c.lineTo(a+b-4,3);c.moveTo(a,-8);c.lineTo(a-14,-26);c.lineTo(a-4,-26);c.stroke()},
16:(c,C,g,w)=>{c.fillStyle=gr(c,C[5],-4,16);c.strokeStyle='rgba(0,0,0,.6)';c.lineWidth=1.8;c.beginPath();c.ellipse(0,5,w+22,12,0,0,7);c.fill();c.stroke();person(c,lean*.5,-12);
  for(let i=-2;i<3;i++){c.fillStyle=Math.sin(tm*6+i)>0?'#fde047':'#fb923c';c.beginPath();c.arc(i*w*.42,7,2.8,0,7);c.fill()}c.fillStyle='rgba(180,240,255,.45)';c.beginPath();c.arc(0,-2,w*.55,Math.PI,0);c.fill();c.stroke()},
17:(c,C,g)=>{const col=C[5],Lr=g.Lr,Lf=g.Lf,s=g.sill,fl=(inp.g||keys.g)?24:8;
  c.fillStyle='#fb923c';c.beginPath();c.moveTo(-Lr+2,2);c.lineTo(-Lr-fl-Math.random()*8,7);c.lineTo(-Lr+2,12);c.fill();c.fillStyle='#fde047';c.beginPath();c.moveTo(-Lr+2,5);c.lineTo(-Lr-fl*.55,7);c.lineTo(-Lr+2,9);c.fill();
  c.fillStyle=shade(col,-.3);c.beginPath();c.moveTo(-Lr+4,-6);c.lineTo(-Lr-8,-28);c.lineTo(-Lr+20,-6);c.fill();c.beginPath();c.moveTo(-Lr+4,s-4);c.lineTo(-Lr-6,s+5);c.lineTo(-Lr+16,s-4);c.fill();
  c.fillStyle=gr(c,col,-12,s);c.beginPath();c.moveTo(-Lr,-4);c.quadraticCurveTo(-Lr,-12,-Lr+14,-12);c.lineTo(Lf-4,-12);c.quadraticCurveTo(Lf+22,-10,Lf+34,4);c.quadraticCurveTo(Lf+22,s-2,Lf-4,s);c.lineTo(-Lr+14,s);c.quadraticCurveTo(-Lr,s,-Lr,s-8);c.closePath();c.fill();c.strokeStyle='rgba(0,0,0,.6)';c.lineWidth=1.6;c.stroke();
  c.fillStyle='#fff';c.fillRect(-Lr+10,s-8,Lf+Lr-6,3);c.save();c.beginPath();c.ellipse(4,-10,18,12,0,Math.PI,0);c.closePath();c.fillStyle='rgba(160,215,240,.8)';c.fill();c.clip();person(c,4+lean*.5,-12);c.restore();c.beginPath();c.ellipse(4,-10,18,12,0,Math.PI,0);c.stroke()},
18:(c,C,g,w)=>{person(c,lean*.5,-14);c.fillStyle=gr(c,C[5],-12,18);c.strokeStyle='#9a3412';c.lineWidth=1.8;c.beginPath();c.ellipse(0,3,w+14,16,0,0,7);c.fill();c.stroke();for(let i=-2;i<3;i++){c.beginPath();c.ellipse(i*w*.38,3,w*.17,16,0,0,7);c.stroke()}c.fillStyle='#166534';c.fillRect(-4,-17,8,7);c.fillStyle='#22c55e';c.beginPath();c.ellipse(9,-14,8,3.5,-.4,0,7);c.fill()},
28:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;c.lineCap='round';const p=()=>{c.beginPath();c.moveTo(-Lr+4,-8);c.quadraticCurveTo(0,s+16,Lf-2,-8)};
  p();c.strokeStyle='rgba(0,0,0,.6)';c.lineWidth=23;c.stroke();p();c.strokeStyle=C[5];c.lineWidth=20;c.stroke();p();c.strokeStyle='rgba(255,255,255,.4)';c.lineWidth=5;c.translate(0,-5);c.stroke();c.translate(0,5);
  c.fillStyle='#5b3a1e';c.beginPath();c.arc(-Lr+4,-8,6,0,7);c.fill();c.beginPath();c.arc(Lf-2,-8,6,0,7);c.fill();person(c,lean*.5,-8)},
29:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;body(c,C[5],-Lr,-30,16,s+28,6);person(c,2+lean*.5,-12);body(c,C[5],-Lr+10,-6,Lr+Lf-10,s+6,6);body(c,shade(C[5],.2),-Lr+16,-14,Lr+Lf-34,9,4);body(c,C[5],Lf-16,-16,16,s+16,6)},
30:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;c.fillStyle='#111';c.fillRect(-Lr-5,-14,6,26);
  c.fillStyle=gr(c,C[5],-8,s+2);c.beginPath();c.moveTo(-Lr,-8);c.lineTo(Lf-6,-8);c.quadraticCurveTo(Lf+18,-8,Lf+32,-12);c.quadraticCurveTo(Lf+10,s+2,Lf-14,s+2);c.lineTo(-Lr+10,s+2);c.quadraticCurveTo(-Lr,s,-Lr,-8);c.closePath();c.fill();c.strokeStyle='rgba(0,0,0,.6)';c.lineWidth=1.6;c.stroke();
  c.fillStyle='#fff';c.fillRect(-Lr+4,0,Lr+Lf+10,3);person(c,lean*.5,-16);c.fillStyle='rgba(170,220,245,.6)';c.beginPath();c.moveTo(Lf-18,-8);c.lineTo(Lf-4,-8);c.lineTo(Lf-14,-24);c.fill();c.stroke()},
31:(c,C,g)=>{const Lr=g.Lr,Lf=g.Lf,s=g.sill;body(c,'#e0a458',-Lr,-4,Lr+Lf,s+4,12);c.fillStyle=gr(c,'#b3412a',-14,-2);rr(c,-Lr-6,-14,Lr+Lf+12,12,6);c.fill();c.strokeStyle='rgba(0,0,0,.5)';c.stroke();
  person(c,lean*.5,-18);c.strokeStyle='#facc15';c.lineWidth=2.4;c.beginPath();for(let x=-Lr;x<Lf;x+=8)c.lineTo(x,x%16?-10:-4);c.stroke()}};
function drawCar(c,k,wr){const C=CARS[k],g=C.g,w=C[4],R=C[3],sp=C[6],f=FT[sp]||{},wt=f.off?2:f.ww?1:0,rc=f.col?C[5]:null;
 if(st=='play'&&L.night){const q=c.createLinearGradient(g.Lf,0,g.Lf+190,0);q.addColorStop(0,'rgba(255,245,170,.35)');q.addColorStop(1,'rgba(255,245,170,0)');c.fillStyle=q;c.beginPath();c.moveTo(g.Lf,-g.lift);c.lineTo(g.Lf+190,-g.lift-34);c.lineTo(g.Lf+190,-g.lift+46);c.fill()}
 c.save();c.translate(0,-g.lift);if(FULL[sp])FULL[sp](c,C,g,w,R,sp);else std(c,C,g,w,R,sp);c.restore();
 wheel(c,-w,14,R,wr,wt,rc);wheel(c,w,14,R,wr,wt,rc);
 if(!FULL[sp]){c.save();c.translate(0,-g.lift);over(c,C,g,w,R,sp);c.restore()}}
