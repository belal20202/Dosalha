const $=i=>document.getElementById(i),cv=$('c'),X=cv.getContext('2d'),N=100;
let W,H,dpr,sc=1,tm=0;
function rs(){dpr=Math.min(devicePixelRatio||1,2.5);W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;sc=Math.max(.55,H/620)}
addEventListener('resize',rs);rs();
let S={coins:0,own:[0],car:0,lv:1,snd:1,mus:1,vib:1,up:{},day:''};
try{Object.assign(S,JSON.parse(localStorage.getItem('dsl')||'{}'))}catch(e){}
const PF=()=>window.Capacitor&&window.Capacitor.Plugins&&window.Capacitor.Plugins.Preferences;
const save=()=>{const j=JSON.stringify(S);try{localStorage.setItem('dsl',j)}catch(e){}try{const q=PF();q&&q.set({key:'dsl',value:j})}catch(e){}};
try{if(!localStorage.getItem('dsl')&&PF())PF().get({key:'dsl'}).then(r=>{if(r&&r.value){Object.assign(S,JSON.parse(r.value));if(st=='menu')home()}}).catch(()=>{})}catch(e){}
const hs=n=>{const v=Math.sin(n*127.1+311.7)*43758.5453;return v-Math.floor(v)};
const rng=s=>()=>{s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
const shade=(h,a)=>{const n=parseInt(h.slice(1),16),f=a<0?0:255,t=Math.abs(a),m=v=>Math.round(v+(f-v)*t);return'rgb('+m(n>>16)+','+m(n>>8&255)+','+m(n&255)+')'};
const gr=(c,col,y0,y1)=>{const g=c.createLinearGradient(0,y0,0,y1);g.addColorStop(0,shade(col,.4));g.addColorStop(.45,col);g.addColorStop(1,shade(col,-.4));return g};
