// ===== السيارات: بيانات + رسم واقعي =====
const MN=['sedan','suv','pickup','muscle','gt','super','roadster','van','rally','cyber','shark','loco','plane','ufo','rocket','bee','ladybug','burger'];
// [اسم, طراز, نصف قاعدة العجلات, لون, خيارات]
const RAW=[['نسيم',8,38,'#f4f6fa',{lv:1}],['لؤلؤة',0,44,'#e9eef4'],['زعفران',7,44,'#f08a24',{rf:'#f4efe6'}],['واحة',1,46,'#2f7d4f'],['رمال',2,46,'#c9a66b'],['ياسمين',0,44,'#2aa198'],
['عسل',15,36,'#ffcc1a'],['فيروز',8,38,'#19b5c9',{st:'#fff'}],['مرجان',6,42,'#e4553d'],['شفق',1,46,'#6b3fa0',{rf:'#1c1c22'}],['عقيق',16,36,'#d62828'],['عاصفة',2,46,'#2b2f36',{st:'#ff7a00'}],
['صقر',3,46,'#1f4fbf',{st:'#f5f5f5'}],['زمرد',4,46,'#0e7c4a'],['ظل',4,46,'#15161a',{gold:1}],['رحلة',11,50,'#2c2f36'],['برق',6,42,'#f7c600'],['مدار',7,44,'#cfd6de',{rf:'#2b2f36'}],
['سديم',9,48,'#a9b2bd'],['أوركيد',0,44,'#8e44ad'],['شهية',17,38,'#e8a33d'],['نمر',1,46,'#14161a',{gold:1}],['شهاب',3,46,'#c1121f',{st:'#111'}],['ياقوت',4,46,'#a4133c'],
['نجمة',5,46,'#ffd60a'],['أمواج',10,44,'#5c7a99'],['غيمة',6,42,'#f1f3f6'],['كوكب',13,40,'#b8c0cc'],['وميض',5,46,'#1d8bff'],['هلال',8,38,'#e8b923',{lv:1}],
['ذهب',9,48,'#d4a21f'],['عنقاء',14,46,'#e63946'],['لهب',5,46,'#d00000',{fl:1}],['سحاب',0,44,'#d9c7a3'],['جناح',12,44,'#2e86de'],['رعد',2,46,'#101114',{st:'#00e5ff'}],
['مجرّة',4,46,'#1b2a6b'],['فجر',5,46,'#f5efe6'],['أثير',9,48,'#16181d'],['ماسة',5,46,'#7ae7ff',{cr:1}],['سراب',3,46,'#d2a56a',{st:'#7a4a1f'}],['أسطورة',5,48,'#0b0b0f',{gold:1}]];
const P2=a=>{const o=[];for(let i=0;i<a.length;i+=2)o.push([a[i],a[i+1]]);return o};
function sp(c,p,sh){const n=p.length;c.beginPath();if(sh){c.moveTo(p[0][0],p[0][1]);for(let i=1;i<n;i++)c.lineTo(p[i][0],p[i][1]);c.closePath();return}
 c.moveTo((p[0][0]+p[n-1][0])/2,(p[0][1]+p[n-1][1])/2);for(let i=0;i<n;i++){const a=p[i],b=p[(i+1)%n];c.quadraticCurveTo(a[0],a[1],(a[0]+b[0])/2,(a[1]+b[1])/2)}c.closePath()}
// وحدات الرسم: العجلة الخلفية (-100,0) والأمامية (100,0)، الأرض y=+r
const CMD=[
{b:P2([-170,8,-178,-8,-178,-34,-172,-48,-140,-52,-100,-54,-92,-56,-62,-80,-30,-91,20,-93,56,-86,90,-62,104,-52,104,-52,150,-46,174,-34,180,-16,176,4,160,8,-150,8]),g:[P2([-94,-56,-62,-78,-30,-88,20,-90,54,-84,88,-62])],bt:-56,r:29,rf:-93,rx:-5,bp:[-8],d:[-64,14],hl:[154,-44,24,8],tl:[-180,-44,10,12],mr:[92,-64],gr:[160,-26,18,16],dr:[34,-76,.85]},
{b:P2([-170,8,-178,-8,-180,-44,-178,-80,-172,-104,-150,-110,-20,-111,28,-110,60,-100,96,-66,106,-54,152,-48,176,-38,182,-18,176,4,160,8,-150,8]),g:[P2([-168,-70,-160,-104,-22,-106,26,-105,54,-96,90,-70])],bt:-66,r:34,rf:-111,rx:-60,bp:[-64,-8],d:[-90,10,50],hl:[156,-50,24,9],tl:[-182,-62,9,16],mr:[92,-72],gr:[160,-28,20,20],dr:[42,-88,.9],rack:1,wt:1},
{b:P2([-170,8,-178,-8,-180,-56,-176,-60,-66,-60,-62,-66,-58,-92,-38,-104,28,-104,56,-96,92,-66,104,-54,152,-48,176,-38,182,-18,176,4,160,8,-150,8]),g:[P2([-60,-68,-56,-90,-38,-100,26,-100,52,-93,86,-70])],bt:-68,r:34,rf:-104,rx:-20,bp:[-6],d:[-64,22],hl:[156,-50,24,9],tl:[-184,-52,9,10],mr:[90,-72],gr:[160,-28,20,20],dr:[20,-84,.85],bed:1,wt:1},
{b:P2([-170,8,-178,-8,-178,-40,-170,-52,-120,-56,-96,-62,-64,-84,-24,-90,24,-90,56,-84,90,-62,106,-56,150,-54,176,-44,182,-24,178,-4,170,8,-150,8]),g:[P2([-96,-62,-64,-82,-24,-88,24,-88,54,-82,88,-62])],bt:-62,r:30,rf:-90,rx:0,bp:[-12],d:[-64,24],hl:[158,-46,22,9],tl:[-180,-48,10,10],mr:[90,-66],gr:[164,-32,16,14],dr:[34,-76,.8],scoop:1},
{b:P2([-170,8,-178,-10,-178,-38,-168,-50,-130,-56,-100,-66,-60,-82,-20,-88,26,-86,62,-76,100,-56,120,-50,156,-44,178,-32,183,-14,178,4,160,8,-150,8]),g:[P2([-100,-66,-60,-80,-20,-86,24,-84,58,-74,94,-56])],bt:-62,r:29,rf:-88,rx:0,bp:[-12],d:[-62,26],hl:[156,-40,24,8],tl:[-180,-46,10,10],mr:[92,-62],gr:[162,-24,18,14],dr:[30,-74,.8],duck:1},
{b:P2([-170,8,-178,-10,-178,-40,-168,-52,-130,-58,-100,-62,-72,-64,-34,-76,10,-77,52,-70,96,-48,120,-40,156,-34,180,-26,185,-12,180,4,160,8,-150,8]),g:[P2([-68,-64,-34,-74,8,-75,48,-68,90,-48])],bt:-56,r:29,rf:-77,rx:0,bp:[],d:[-30,30],hl:[150,-38,32,7],tl:[-182,-48,10,12],mr:[80,-56],gr:[166,-22,16,12],dr:[16,-66,.7],wing:1,intake:1},
{b:P2([-170,8,-178,-10,-176,-48,-160,-56,-120,-60,-96,-58,-80,-52,-60,-48,40,-50,76,-54,104,-54,150,-48,176,-38,182,-18,176,4,160,8,-150,8]),g:[],ws:P2([44,-52,56,-80,66,-80,84,-54]),bt:-52,r:28,rf:-80,rx:30,bp:[],d:[-50,30],hl:[156,-44,24,8],tl:[-180,-44,10,10],mr:[86,-60],gr:[162,-26,18,14],dr:[10,-70,.95],open:1},
{b:P2([-170,8,-178,-8,-180,-50,-178,-108,-170,-120,-130,-124,30,-124,64,-114,108,-70,118,-56,156,-48,178,-34,182,-14,176,4,160,8,-150,8]),g:[P2([-164,-112,-104,-112,-104,-76,-164,-76]),P2([-96,-112,-40,-112,-40,-76,-96,-76]),P2([-32,-112,26,-112,26,-76,-32,-76]),P2([36,-112,58,-108,100,-76,36,-76])],gd:3,bt:-76,r:30,rf:-124,rx:-60,bp:[],d:[-100,-36],hl:[160,-52,20,9],tl:[-184,-60,8,18],mr:[100,-78],gr:[164,-30,16,14],dr:[64,-96,.9],rack:1,wt:2},
{b:P2([-150,8,-158,-10,-160,-50,-152,-84,-120,-96,-60,-100,6,-100,46,-92,86,-62,98,-52,138,-46,162,-34,168,-14,162,4,148,8]),g:[P2([-146,-72,-120,-94,-60,-98,6,-98,44,-90,82,-62])],bt:-66,r:28,rf:-100,rx:-30,bp:[-26],d:[-56,18],hl:[142,-40,22,8],tl:[-162,-52,8,12],mr:[84,-68],gr:[148,-24,16,14],dr:[26,-84,.8],bigwing:1,wt:1},
{sharp:1,b:P2([-176,8,-178,-40,-170,-62,-10,-108,60,-96,176,-44,184,-18,180,8]),g:[P2([-150,-62,-12,-100,54,-90,120,-60,-148,-60])],bt:-60,r:33,rf:-108,rx:-10,bp:[],d:[-60,30],hl:[130,-48,56,5],tl:[-182,-46,8,20],mr:[104,-58],gr:[166,-26,14,12],dr:[30,-80,.8],wt:1}];
const MK=['sedan','suv','pickup','muscle','gt','super','roadster','van','rally','cyber'];
// طرازات غريبة: [rf,rx,r]
CMD[10]={r:29,rf:-98,rx:10,W:1};CMD[11]={r:32,rf:-134,rx:-100,W:1};CMD[12]={r:29,rf:-100,rx:-20,W:1};CMD[13]={r:27,rf:-112,rx:0,W:1};CMD[14]={r:29,rf:-92,rx:10,W:1};CMD[15]={r:28,rf:-110,rx:30,W:1};CMD[16]={r:28,rf:-118,rx:20,W:1};CMD[17]={r:28,rf:-104,rx:10,W:1};
const CARS=RAW.map((r,i)=>{const M=CMD[r[1]],w=r[2],s=w/100,R=Math.round(M.r*s);const c=['',0,1000+i*115,R,w,r[3],r[1],+(1+i*.06).toFixed(2),+(1+i*.055).toFixed(2),r[4]||{}];c[0]=r[0];c[1]=i?Math.round(30*Math.pow(i,1.55)/10)*10:0;
 let mn=0,mx=0;if(M.b)M.b.forEach(p=>{mn=Math.min(mn,p[0]);mx=Math.max(mx,p[0])});else{mn=-190;mx=190}
 c.g={Lr:-mn*s,Lf:mx*s,roof:14+M.rf*s,rx:M.rx*s,lift:0};return c});
if(S.car>=CARS.length)S.car=0;S.own=S.own.filter(i=>i<CARS.length);if(!S.own.length)S.own=[0];
let mood=0;
function wheel(c,x,y,R,r,ty,rim){c.save();c.translate(x,y);
 let g=c.createRadialGradient(0,0,R*.55,0,0,R);g.addColorStop(0,'#2c2c31');g.addColorStop(.75,'#17171a');g.addColorStop(1,'#09090a');c.fillStyle=g;c.beginPath();c.arc(0,0,R,0,7);c.fill();
 c.rotate(r);
 if(ty==1){c.fillStyle='#232326';for(let i=0;i<14;i++){c.save();c.rotate(i*.4488);c.fillRect(R-4.6,-2.3,4.6,4.6);c.restore()}}
 else{c.strokeStyle='rgba(255,255,255,.07)';c.lineWidth=1;c.beginPath();c.arc(0,0,R*.86,0,7);c.stroke()}
 const q=R*.64;c.fillStyle='#3b3f46';c.beginPath();c.arc(0,0,q,0,7);c.fill();
 c.fillStyle='#8a9099';c.beginPath();c.arc(0,0,q*.82,0,7);c.fill();c.strokeStyle='#454a52';c.lineWidth=.7;c.beginPath();c.arc(0,0,q*.62,0,7);c.stroke();
 const al=c.createLinearGradient(-q,-q,q,q);al.addColorStop(0,'#f3f6fa');al.addColorStop(.5,'#b9c0c9');al.addColorStop(1,'#7d8591');
 if(ty==2){c.fillStyle='#c9cfd6';c.beginPath();c.arc(0,0,q,0,7);c.fill();c.fillStyle=al;c.beginPath();c.arc(0,0,q*.7,0,7);c.fill()}
 else{c.fillStyle=ty==1?'#1b1c20':al;c.strokeStyle='rgba(0,0,0,.45)';c.lineWidth=.6;for(let i=0;i<5;i++){const a=i*1.2566;c.beginPath();c.moveTo(Math.cos(a-.2)*q*.2,Math.sin(a-.2)*q*.2);c.lineTo(Math.cos(a-.24)*q*.98,Math.sin(a-.24)*q*.98);c.lineTo(Math.cos(a+.24)*q*.98,Math.sin(a+.24)*q*.98);c.lineTo(Math.cos(a+.2)*q*.2,Math.sin(a+.2)*q*.2);c.closePath();c.fill();c.stroke()}
  c.strokeStyle=ty==1?'#c9cfd6':'#e8ecf0';c.lineWidth=Math.max(1,R*.07);c.beginPath();c.arc(0,0,q,0,7);c.stroke();if(ty==1){c.fillStyle='#d5dae0';for(let i=0;i<10;i++){c.beginPath();c.arc(Math.cos(i*.628)*q*.88,Math.sin(i*.628)*q*.88,R*.04,0,7);c.fill()}}}
 c.fillStyle='#2a2d33';c.beginPath();c.arc(0,0,R*.17,0,7);c.fill();c.fillStyle='#c9cfd6';c.beginPath();c.arc(0,0,R*.09,0,7);c.fill();
 c.rotate(-r);if(ty!=2){c.strokeStyle='#d62828';c.lineWidth=Math.max(1.6,R*.13);c.beginPath();c.arc(0,0,q*.8,-1.1,-.3);c.stroke()}
 c.restore()}
function driver(c,x,y,s){s=s||1;const fl=Math.min(1,Math.abs((typeof P!='undefined'&&P)?P.vx:0)/900),w1=Math.sin(tm*13)*1.7*(.35+fl),md=mood,ol='#3a2a1c',sk='#f0c29b';
 c.save();c.translate(x,y);c.scale(s,s);c.lineJoin='round';c.lineCap='round';
 c.fillStyle='#f4f1ea';c.strokeStyle=ol;c.lineWidth=.9;c.beginPath();c.moveTo(-7,18);c.quadraticCurveTo(-8.5,7,-3,5.2);c.lineTo(3.5,5.2);c.quadraticCurveTo(8,7,7.5,18);c.closePath();c.fill();c.stroke();
 c.fillStyle='#cfc8b6';c.beginPath();c.moveTo(-2.2,5.2);c.lineTo(.2,9.5);c.lineTo(2.8,5.2);c.fill();
 c.save();c.translate(13.5,9.5);c.rotate(.32);c.strokeStyle='#2b2118';c.lineWidth=1.9;c.beginPath();c.ellipse(0,0,2.1,6.4,0,0,7);c.stroke();c.restore();
 c.strokeStyle=ol;c.lineWidth=4.8;c.beginPath();c.moveTo(1.5,8.5);c.lineTo(6,13);c.lineTo(11.8,10.6);c.stroke();c.strokeStyle='#f4f1ea';c.lineWidth=3.6;c.stroke();
 c.fillStyle=sk;c.strokeStyle=ol;c.lineWidth=.7;c.beginPath();c.arc(12.6,10.4,2.1,0,7);c.fill();c.stroke();
 c.fillStyle=sk;c.fillRect(-2,3.2,4.2,3.4);c.fillStyle='#e0a67d';c.beginPath();c.arc(-1.6,1.6,1.8,0,7);c.fill();c.stroke();
 c.fillStyle=sk;c.lineWidth=.8;c.beginPath();c.arc(0,0,6,0,7);c.fill();c.stroke();c.fillStyle='#e9a98e';c.beginPath();c.arc(3.6,2.6,1.7,0,7);c.fill();
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
const rrect=(c,x,y,w,h,r)=>{c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()};
const paint=(c,col,y0,y1)=>{const g=c.createLinearGradient(0,y0,0,y1);g.addColorStop(0,shade(col,.3));g.addColorStop(.3,shade(col,.07));g.addColorStop(.62,col);g.addColorStop(1,shade(col,-.5));return g};
function model(c,C,M,o,s){
 const col=C[5],OL='rgba(10,10,14,.9)',bt=M.bt,F=(x,y)=>c.lineTo(x,y);
 if(M.rack){c.fillStyle='#1b1b1f';c.fillRect(-120,M.rf-7,150,4);c.fillRect(-110,M.rf-6,4,6);c.fillRect(20,M.rf-6,4,6)}
 if(M.wing){c.fillStyle=shade(col,-.55);c.fillRect(-158,-82,4,24);c.fillRect(-176,-86,46,6)}
 if(M.bigwing){c.fillStyle='#16161a';c.fillRect(-150,-110,4,28);c.fillRect(-172,-116,56,7)}
 if(M.duck){c.fillStyle=shade(col,-.4);c.beginPath();c.moveTo(-178,-52);c.lineTo(-186,-60);c.lineTo(-150,-60);c.lineTo(-150,-54);c.fill()}
 sp(c,M.b,M.sharp);c.fillStyle=paint(c,col,M.rf,8);c.fill();
 c.save();c.clip();
 if(o.rf){c.fillStyle=o.rf;c.fillRect(-200,-150,400,150+bt)}
 const lg=c.createLinearGradient(0,bt,0,8);lg.addColorStop(0,'rgba(255,255,255,.16)');lg.addColorStop(.45,'rgba(255,255,255,0)');lg.addColorStop(1,'rgba(0,0,0,.38)');c.fillStyle=lg;c.fillRect(-200,bt-6,400,8-bt+6);
 if(o.st){c.fillStyle=o.st;c.fillRect(-190,-24,380,5);c.fillRect(-190,-16,380,2.5);c.fillRect(100,bt-28,90,3);c.fillRect(-60,M.rf+3,130,3)}
 if(o.lv){c.fillStyle='#1e5bd8';c.beginPath();c.moveTo(-170,-12);c.lineTo(-50,-12);c.lineTo(-10,bt-2);c.lineTo(-170,bt-2);c.fill();c.fillStyle='#e63946';c.beginPath();c.moveTo(-50,-12);c.lineTo(-30,-12);c.lineTo(10,bt-2);c.lineTo(-10,bt-2);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(20,-34,17,0,7);c.fill();c.fillStyle='#111';c.font='700 24px system-ui';c.textAlign='center';c.fillText('7',20,-26)}
 if(o.fl){const fc=['#ff3d00','#ff9100','#ffe14d'];for(let k=0;k<3;k++){c.fillStyle=fc[k];c.beginPath();c.moveTo(70,-4-k*3);for(let i=0;i<5;i++){c.lineTo(86+i*20,-4-k*3-(26-k*7)*(i%2?.6:1));c.lineTo(96+i*20,-4-k*3)}c.lineTo(180,-4-k*3);c.fill()}}
 if(o.cr){c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=1.4;for(let i=-3;i<8;i++){c.beginPath();c.moveTo(-180+i*48,10);c.lineTo(-130+i*48,-90);c.moveTo(-180+i*48,-40);c.lineTo(-100+i*48,-20);c.stroke()}}
 c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=2.6;c.beginPath();c.moveTo(-172,bt+10);c.quadraticCurveTo(0,bt+3,176,bt+13);c.stroke();c.strokeStyle='rgba(0,0,0,.28)';c.lineWidth=1.4;c.beginPath();c.moveTo(-172,bt+16);c.quadraticCurveTo(0,bt+9,176,bt+19);c.stroke();
 c.strokeStyle='rgba(0,0,0,.42)';c.lineWidth=1.3;for(const x of M.d){c.beginPath();c.moveTo(x,bt+3);c.quadraticCurveTo(x+6,-24,x+2,-1);c.stroke();c.fillStyle='rgba(255,255,255,.7)';c.fillRect(x+12,bt+12,16,3.6)}
 c.fillStyle='rgba(0,0,0,.55)';c.fillRect(-190,-2,380,12);c.fillStyle='rgba(255,255,255,.25)';c.fillRect(-190,-3,380,1.3);
 if(o.gold){c.strokeStyle='#e8c35a';c.lineWidth=2.2;c.beginPath();c.moveTo(-172,bt+4);c.quadraticCurveTo(0,bt-3,176,bt+6);c.stroke()}
 if(M.intake){c.fillStyle='#0d0d10';c.beginPath();c.moveTo(-60,-26);c.lineTo(-10,-30);c.lineTo(-6,-14);c.lineTo(-56,-10);c.fill();c.strokeStyle='rgba(255,255,255,.2)';c.lineWidth=1;for(let i=0;i<4;i++){c.beginPath();c.moveTo(-56+i*13,-12-i);c.lineTo(-52+i*13,-27);c.stroke()}}
 if(M.scoop){c.fillStyle=shade(col,-.3);c.beginPath();c.moveTo(116,-56);c.quadraticCurveTo(130,-68,150,-56);c.fill()}
 for(const k of[-1,1]){c.fillStyle='#07070a';c.beginPath();c.arc(k*100,0,M.r+8,0,7);c.fill();c.strokeStyle='rgba(255,255,255,.18)';c.lineWidth=1.6;c.beginPath();c.arc(k*100,0,M.r+8,Math.PI*1.05,Math.PI*1.95);c.stroke()}
 c.restore();
 sp(c,M.b,M.sharp);c.lineWidth=3.4;c.strokeStyle=OL;c.stroke();
 const dp=(x,y,k)=>driver(c,x+lean*.4/s,y,k/s);
 if(M.open){const dx=M.dr[0];c.fillStyle='#7a2a1f';rrect(c,dx-40,-72,24,30,6);c.fill();c.strokeStyle=OL;c.lineWidth=2;c.stroke();dp(dx,M.dr[1],M.dr[2]);
  sp(c,M.ws,1);c.fillStyle='rgba(170,215,240,.45)';c.fill();c.lineWidth=4;c.strokeStyle='#dfe5ea';c.stroke();c.lineWidth=1.4;c.strokeStyle=OL;c.stroke();c.fillStyle='#111';c.fillRect(-90,-76,8,18);c.strokeStyle='#999';c.lineWidth=3;c.beginPath();c.moveTo(-86,-76);c.lineTo(-100,-60);c.stroke()}
 else{const gi=M.gd||0;M.g.forEach((gp,i)=>{sp(c,gp,M.sharp);const g2=c.createLinearGradient(0,M.rf,0,bt);g2.addColorStop(0,'#1b2a3e');g2.addColorStop(.55,'#35557a');g2.addColorStop(1,'#86aecb');c.fillStyle=g2;c.fill();
   c.save();c.clip();if(i==gi)dp(M.dr[0],M.dr[1],M.dr[2]);c.fillStyle='rgba(255,255,255,.22)';c.beginPath();const a=gp[0][0];c.moveTo(a+30,M.rf-4);c.lineTo(a+52,M.rf-4);c.lineTo(a+22,bt+4);c.lineTo(a,bt+4);c.fill();c.restore();
   sp(c,gp,M.sharp);c.lineWidth=2.6;c.strokeStyle='#e4e9ee';c.stroke();c.lineWidth=1.2;c.strokeStyle=OL;c.stroke()});
  if(M.bp&&M.bp.length){c.strokeStyle=shade(col,-.35);c.lineWidth=7;M.bp.forEach(x=>{c.beginPath();c.moveTo(x,M.rf+10);c.lineTo(x,bt);c.stroke()})}}
 c.fillStyle=o.cr?'#d9fbff':'#fffbe6';c.strokeStyle=OL;c.lineWidth=1.6;rrect(c,M.hl[0],M.hl[1],M.hl[2],M.hl[3],M.hl[3]/2);const hg=c.createLinearGradient(M.hl[0],0,M.hl[0]+M.hl[2],0);hg.addColorStop(0,'#cfd8e0');hg.addColorStop(1,'#fffef0');c.fillStyle=hg;c.fill();c.stroke();c.fillStyle='rgba(255,255,255,.9)';c.fillRect(M.hl[0]+M.hl[2]*.45,M.hl[1]+1.6,M.hl[2]*.45,2.2);
 const tg=c.createLinearGradient(0,M.tl[1],0,M.tl[1]+M.tl[3]);tg.addColorStop(0,'#ff5a5a');tg.addColorStop(1,'#a00');c.fillStyle=tg;rrect(c,M.tl[0],M.tl[1],M.tl[2],M.tl[3],3);c.fill();c.stroke();
 c.fillStyle='#0f1013';rrect(c,M.gr[0],M.gr[1],M.gr[2],M.gr[3],4);c.fill();c.strokeStyle='#4b525c';c.lineWidth=1;for(let i=1;i<4;i++){c.beginPath();c.moveTo(M.gr[0]+2,M.gr[1]+i*M.gr[3]/4);c.lineTo(M.gr[0]+M.gr[2]-2,M.gr[1]+i*M.gr[3]/4);c.stroke()}
 c.fillStyle=col;c.strokeStyle=OL;c.lineWidth=1.8;rrect(c,M.mr[0],M.mr[1],14,8,4);c.fill();c.stroke();
 c.fillStyle='#b9c0c9';c.strokeStyle=OL;c.lineWidth=1.2;c.beginPath();c.arc(-182,-4,5,0,7);c.fill();c.stroke()}
// ---- الطرازات الغريبة
const WD={
10:(c,C,M,o,s)=>{const col=C[5];c.fillStyle=shade(col,-.25);c.strokeStyle='rgba(10,10,14,.9)';c.lineWidth=3;c.beginPath();c.moveTo(-140,-30);c.lineTo(-198,-96);c.quadraticCurveTo(-176,-48,-194,-4);c.lineTo(-140,-6);c.closePath();c.fill();c.stroke();
  c.beginPath();c.moveTo(-170,-24);c.quadraticCurveTo(-120,-86,-20,-84);c.quadraticCurveTo(80,-84,150,-54);c.quadraticCurveTo(200,-34,202,-14);c.quadraticCurveTo(176,8,120,8);c.lineTo(-120,8);c.quadraticCurveTo(-160,2,-170,-24);c.closePath();c.fillStyle=paint(c,col,-90,8);c.fill();c.save();c.clip();c.fillStyle='#eef3f8';c.beginPath();c.moveTo(-200,-12);c.quadraticCurveTo(0,-22,210,-16);c.lineTo(210,20);c.lineTo(-200,20);c.fill();c.restore();c.lineWidth=3.4;c.stroke();
  c.fillStyle=shade(col,-.3);c.beginPath();c.moveTo(-40,-82);c.lineTo(-10,-124);c.quadraticCurveTo(10,-96,28,-82);c.closePath();c.fill();c.stroke();
  c.fillStyle='#14080c';c.beginPath();c.moveTo(202,-18);c.quadraticCurveTo(170,-10,134,-6);c.lineTo(150,2);c.quadraticCurveTo(184,0,198,-8);c.fill();c.fillStyle='#fff';for(let i=0;i<6;i++){c.beginPath();c.moveTo(140+i*10,-6+(i%2));c.lineTo(145+i*10,2);c.lineTo(150+i*10,-6);c.fill()}
  c.fillStyle='#fff';c.beginPath();c.arc(168,-46,8,0,7);c.fill();c.fillStyle='#111';c.beginPath();c.arc(171,-45,4,0,7);c.fill();c.strokeStyle='rgba(0,0,0,.35)';c.lineWidth=2;for(let i=0;i<3;i++){c.beginPath();c.moveTo(110+i*8,-44);c.quadraticCurveTo(106+i*8,-32,110+i*8,-20);c.stroke()}
  c.fillStyle='rgba(170,215,240,.6)';c.beginPath();c.ellipse(-10,-84,36,26,0,Math.PI,0);c.fill();c.save();c.beginPath();c.ellipse(-10,-84,36,26,0,Math.PI,0);c.clip();driver(c,-10+lean*.4/s,-94,.8/s);c.restore();c.lineWidth=2.6;c.strokeStyle='#dfe5ea';c.beginPath();c.ellipse(-10,-84,36,26,0,Math.PI,0);c.stroke()},
11:(c,C,M,o,s)=>{const OL='rgba(10,10,14,.9)';c.lineWidth=3;c.strokeStyle=OL;
  c.fillStyle='#b8860b';c.fillRect(-190,-6,380,10);
  c.fillStyle=paint(c,'#23262c',-90,-20);rrect(c,-50,-92,210,70,22);c.fill();c.stroke();c.fillStyle='#3a3f48';rrect(c,-50,-50,210,10,2);c.fill();
  c.fillStyle='#16181c';rrect(c,134,-108,26,30,4);c.fill();c.stroke();c.fillStyle='#16181c';c.beginPath();c.moveTo(130,-108);c.lineTo(166,-108);c.lineTo(156,-128);c.lineTo(140,-128);c.closePath();c.fill();c.stroke();
  for(let i=0;i<4;i++){c.fillStyle='rgba(210,215,220,'+(.5-i*.1)+')';c.beginPath();c.arc(148+Math.sin(tm*3+i)*4+i*8,-138-i*20,10+i*5,0,7);c.fill()}
  c.fillStyle='#b8860b';c.beginPath();c.arc(48,-98,12,Math.PI,0);c.fill();c.stroke();
  c.fillStyle='#fffbe0';c.beginPath();c.arc(164,-60,12,0,7);c.fill();c.stroke();c.fillStyle='#d62828';c.beginPath();c.moveTo(160,-6);c.lineTo(212,6);c.lineTo(160,6);c.fill();c.stroke();
  c.fillStyle=paint(c,C[5],-136,-6);rrect(c,-178,-130,134,124,6);c.fill();c.stroke();c.fillStyle=C[5];rrect(c,-186,-142,150,14,4);c.fill();c.stroke();
  c.fillStyle='#35557a';rrect(c,-160,-110,70,56,6);c.fill();c.save();rrect(c,-160,-110,70,56,6);c.clip();driver(c,-120+lean*.4/s,-96,1/s);c.restore();c.stroke();c.fillStyle='#e8c35a';c.fillRect(-178,-18,134,6)},
12:(c,C,M,o,s)=>{const col=C[5],OL='rgba(10,10,14,.9)';c.lineWidth=3;c.strokeStyle=OL;
  c.fillStyle=shade(col,-.25);c.beginPath();c.moveTo(-150,-40);c.lineTo(-186,-86);c.lineTo(-168,-86);c.lineTo(-130,-34);c.fill();c.stroke();
  c.fillStyle=paint(c,col,-90,8);c.beginPath();c.moveTo(-176,-34);c.quadraticCurveTo(-100,-66,-10,-76);c.quadraticCurveTo(100,-84,170,-52);c.quadraticCurveTo(188,-30,170,-6);c.quadraticCurveTo(100,8,-30,8);c.quadraticCurveTo(-130,6,-176,-24);c.closePath();c.fill();c.stroke();
  c.fillStyle='#d62828';c.fillRect(-170,-26,340,8);
  c.fillStyle=shade(col,-.2);rrect(c,-96,-132,220,12,5);c.fill();c.stroke();rrect(c,-80,-62,190,10,5);c.fill();c.stroke();c.strokeStyle='#444';c.lineWidth=3;for(const x of[-70,-20,60,100]){c.beginPath();c.moveTo(x,-122);c.lineTo(x+(x>0?-6:6),-62);c.stroke()}
  c.fillStyle='#2d3038';c.fillRect(-60,-92,70,30);c.save();c.beginPath();c.rect(-60,-110,70,52);c.clip();driver(c,-20+lean*.4/s,-96,.85/s);c.restore();c.fillStyle='rgba(170,215,240,.5)';c.beginPath();c.moveTo(14,-90);c.lineTo(24,-110);c.lineTo(30,-110);c.lineTo(24,-86);c.fill();
  c.fillStyle='#16181c';c.beginPath();c.arc(176,-34,8,0,7);c.fill();c.save();c.translate(176,-34);c.rotate(tm*40);c.fillStyle='rgba(30,30,30,.55)';c.beginPath();c.ellipse(0,0,6,50,0,0,7);c.fill();c.fillStyle='#222';c.fillRect(-5,-48,10,96);c.restore()},
13:(c,C,M,o,s)=>{const col=C[5],OL='rgba(10,10,14,.9)';c.lineWidth=3;c.strokeStyle=OL;
  const gl=c.createRadialGradient(0,-60,10,0,-60,60);gl.addColorStop(0,'rgba(190,250,255,.6)');gl.addColorStop(1,'rgba(190,250,255,0)');
  c.fillStyle='rgba(120,255,230,.25)';c.beginPath();c.moveTo(-60,10);c.lineTo(60,10);c.lineTo(110,40);c.lineTo(-110,40);c.fill();
  c.fillStyle='rgba(150,225,255,.55)';c.beginPath();c.ellipse(0,-54,64,56,0,Math.PI,0);c.fill();c.stroke();
  c.save();c.beginPath();c.ellipse(0,-54,64,56,0,Math.PI,0);c.clip();driver(c,6+lean*.4/s,-88,1.1/s);c.restore();c.fillStyle='rgba(255,255,255,.3)';c.beginPath();c.ellipse(-20,-86,16,26,-.5,0,7);c.fill();
  c.fillStyle=paint(c,col,-60,12);c.beginPath();c.ellipse(0,-30,188,40,0,0,7);c.fill();c.stroke();c.fillStyle=shade(col,.25);c.beginPath();c.ellipse(0,-40,150,18,0,Math.PI,0);c.fill();
  for(let i=-5;i<=5;i++){c.fillStyle=Math.sin(tm*6+i)>0?'#fff27a':'#ff9a3c';c.beginPath();c.arc(i*30,-26+Math.abs(i)*-1.2,5.5,0,7);c.fill();c.strokeStyle='rgba(0,0,0,.5)';c.lineWidth=1.4;c.stroke()}},
14:(c,C,M,o,s)=>{const col=C[5],OL='rgba(10,10,14,.9)';c.lineWidth=3;c.strokeStyle=OL;const fl=(inp.g||keys.g)?50:16;
  c.fillStyle='#ff9a1f';c.beginPath();c.moveTo(-178,-34);c.lineTo(-178-fl-Math.random()*12,-18);c.lineTo(-178,-4);c.fill();c.fillStyle='#fff3a0';c.beginPath();c.moveTo(-178,-28);c.lineTo(-178-fl*.55,-18);c.lineTo(-178,-10);c.fill();
  c.fillStyle='#16181c';c.beginPath();c.moveTo(-130,-60);c.lineTo(-170,-110);c.lineTo(-110,-64);c.fill();c.stroke();c.beginPath();c.moveTo(-130,0);c.lineTo(-166,22);c.lineTo(-100,0);c.fill();c.stroke();
  c.fillStyle=paint(c,col,-96,10);c.beginPath();c.moveTo(-180,-30);c.quadraticCurveTo(-170,-64,-130,-70);c.lineTo(80,-72);c.quadraticCurveTo(160,-66,214,-22);c.quadraticCurveTo(150,8,60,8);c.lineTo(-140,8);c.quadraticCurveTo(-178,4,-180,-30);c.closePath();c.fill();c.stroke();
  c.fillStyle='#f4f4f4';c.beginPath();c.moveTo(130,-68);c.quadraticCurveTo(190,-56,214,-22);c.lineTo(150,-4);c.quadraticCurveTo(160,-40,120,-66);c.fill();c.fillStyle='#fff';c.fillRect(-170,-14,300,5);
  c.fillStyle='rgba(160,215,240,.7)';c.beginPath();c.ellipse(20,-70,46,32,0,Math.PI,0);c.fill();c.save();c.beginPath();c.ellipse(20,-70,46,32,0,Math.PI,0);c.clip();driver(c,22+lean*.4/s,-84,.95/s);c.restore();c.lineWidth=2.6;c.strokeStyle='#dfe5ea';c.beginPath();c.ellipse(20,-70,46,32,0,Math.PI,0);c.stroke()},
15:(c,C,M,o,s)=>{const OL='rgba(10,10,14,.9)';c.lineWidth=3;c.strokeStyle=OL;const fl=Math.sin(tm*45)*.5+.5;
  c.fillStyle='rgba(220,240,255,'+(.35+.2*fl)+')';for(const k of[0,1]){c.save();c.translate(-10+k*40,-86);c.rotate(-.5+fl*.7*(k?1:.8));c.beginPath();c.ellipse(0,-34,22,58,0,0,7);c.fill();c.stroke();c.restore()}
  c.fillStyle='#1b1b1f';c.beginPath();c.moveTo(-136,-44);c.lineTo(-196,-34);c.lineTo(-136,-26);c.fill();c.stroke();
  c.fillStyle=paint(c,C[5],-110,8);c.beginPath();c.ellipse(-4,-50,140,62,0,0,7);c.fill();c.save();c.clip();c.fillStyle='#17171a';for(let i=0;i<3;i++)c.fillRect(-90+i*56,-120,24,160);c.restore();c.stroke();
  c.fillStyle=paint(c,C[5],-110,8);c.beginPath();c.ellipse(142,-44,52,46,0,0,7);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(158,-58,14,16,0,0,7);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(162,-57,6,0,7);c.fill();c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(150,-86);c.quadraticCurveTo(142,-120,164,-130);c.moveTo(170,-84);c.quadraticCurveTo(180,-118,198,-118);c.stroke();
  driver(c,-4+lean*.4/s,-104,.95/s)},
16:(c,C,M,o,s)=>{const OL='rgba(10,10,14,.9)';c.lineWidth=3;c.strokeStyle=OL;
  c.fillStyle='#111';c.beginPath();c.ellipse(156,-38,46,40,0,0,7);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.ellipse(166,-52,12,15,0,0,7);c.ellipse(176,-30,10,12,0,0,7);c.fill();c.fillStyle='#111';c.beginPath();c.arc(170,-52,5,0,7);c.arc(179,-30,4,0,7);c.fill();c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.moveTo(150,-74);c.quadraticCurveTo(140,-112,164,-124);c.moveTo(170,-72);c.quadraticCurveTo(184,-108,204,-106);c.stroke();
  c.fillStyle=paint(c,C[5],-110,8);c.beginPath();c.moveTo(-182,8);c.quadraticCurveTo(-190,-124,-8,-124);c.quadraticCurveTo(130,-124,134,8);c.closePath();c.fill();c.lineWidth=3.4;c.stroke();
  c.save();c.clip();c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(-4,-130);c.lineTo(-4,14);c.stroke();c.fillStyle='#111';for(const[x,y,r] of[[-100,-60,16],[-50,-96,13],[60,-92,14],[96,-50,15],[20,-50,12],[-140,-34,11]]){c.beginPath();c.arc(x,y,r,0,7);c.fill()}c.restore();
  c.lineWidth=3.4;c.beginPath();c.moveTo(-182,8);c.quadraticCurveTo(-190,-124,-8,-124);c.quadraticCurveTo(130,-124,134,8);c.stroke();
  driver(c,20+lean*.4/s,-130,.95/s)},
17:(c,C,M,o,s)=>{const OL='rgba(10,10,14,.9)';c.lineWidth=3;c.strokeStyle=OL;
  c.fillStyle='#d89a3c';rrect(c,-176,-18,352,26,12);c.fill();c.stroke();c.fillStyle='#e8c05a';c.fillRect(-170,-10,340,4);
  c.fillStyle='#4a2410';rrect(c,-182,-44,364,28,12);c.fill();c.stroke();
  c.fillStyle='#f3c623';c.beginPath();c.moveTo(-178,-44);for(let i=0;i<9;i++)c.lineTo(-178+i*44+22,-44-(i%2?0:-6)),c.lineTo(-178+i*44+44,-44);c.lineTo(178,-52);c.lineTo(-178,-52);c.fill();c.stroke();
  c.fillStyle='#4aa83c';c.beginPath();c.moveTo(-186,-52);for(let i=0;i<14;i++)c.quadraticCurveTo(-186+i*28+7,-66+(i%2)*4,-186+i*28+14,-52);c.lineTo(190,-46);c.lineTo(-186,-46);c.fill();c.stroke();
  c.fillStyle='#d62828';rrect(c,-120,-66,90,12,6);c.fill();rrect(c,20,-66,90,12,6);c.fill();
  c.fillStyle=paint(c,'#e0a03a',-116,-60);c.beginPath();c.moveTo(-186,-62);c.quadraticCurveTo(-190,-122,0,-124);c.quadraticCurveTo(190,-122,186,-62);c.closePath();c.fill();c.lineWidth=3.4;c.stroke();
  c.fillStyle='#fff3d0';for(const[x,y] of[[-120,-96],[-60,-110],[0,-100],[70,-108],[120,-94],[-90,-80],[40,-82]]){c.save();c.translate(x,y);c.rotate(x*.03);c.beginPath();c.ellipse(0,0,7,3.4,0,0,7);c.fill();c.restore()}
  driver(c,10+lean*.4/s,-118,.95/s)}};
function drawCar(c,k,wr){const C=CARS[k],M=CMD[C[6]],w=C[4],s=w/100,R=C[3],o=C[9];
 if(st=='play'&&L.night){const q=c.createLinearGradient(w*1.8,0,w*1.8+190,0);q.addColorStop(0,'rgba(255,245,170,.4)');q.addColorStop(1,'rgba(255,245,170,0)');c.fillStyle=q;c.beginPath();c.moveTo(w*1.7,4);c.lineTo(w*1.7+190,-30);c.lineTo(w*1.7+190,56);c.fill()}
 c.save();c.translate(0,14);c.scale(s,s);if(M.W)WD[C[6]](c,C,M,o,s);else model(c,C,M,o,s);c.restore();
 const ty=M.wt||0;wheel(c,-w,14,R,wr,ty,0);wheel(c,w,14,R,wr,ty,0)}
