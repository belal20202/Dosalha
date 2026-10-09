let AC,eng,eg,mg,NB,mst=0,mtm=0;
function snd(){if(!S.snd&&!S.mus)return;try{if(!AC){AC=new(window.AudioContext||window.webkitAudioContext)();mg=AC.createGain();mg.gain.value=.45;const lp=AC.createBiquadFilter();lp.type='lowpass';lp.frequency.value=4200;mg.connect(lp);lp.connect(AC.destination);const rv=AC.createConvolver(),n=AC.sampleRate*1.8|0,b=AC.createBuffer(2,n,AC.sampleRate);for(let c=0;c<2;c++){const d=b.getChannelData(c);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,2.6)}rv.buffer=b;const wg=AC.createGain();wg.gain.value=.35;lp.connect(rv);rv.connect(wg);wg.connect(AC.destination);NB=AC.createBuffer(1,AC.sampleRate*.1|0,AC.sampleRate);const d=NB.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1}AC.state=='suspended'&&AC.resume()}catch(e){}}
function beep(f,d,t,v){if(!S.snd||!AC)return;const n=AC.currentTime,o=AC.createOscillator(),g=AC.createGain();o.type=t||'sine';o.frequency.value=f;g.gain.setValueAtTime(.0001,n);g.gain.linearRampToValueAtTime(v||.04,n+.008);g.gain.exponentialRampToValueAtTime(.0001,n+d);o.connect(g);g.connect(AC.destination);o.start(n);o.stop(n+d+.02)}
function engine(on,sp,gas){if(!AC)return;if(!eng){eng=AC.createOscillator();eg=AC.createGain();const fl=AC.createBiquadFilter();fl.type='lowpass';fl.frequency.value=200;eng.type='sawtooth';eng.connect(fl);fl.connect(eg);eg.connect(AC.destination);eg.gain.value=0;eng.start()}eg.gain.value=on&&S.snd?.012+(gas?.012:0):0;eng.frequency.value=34+(S.car%6)*3+Math.min(sp,1500)*.03+(gas?7:0)}
function nt(f,t,d,ty,v,at,fl){const o=AC.createOscillator(),g=AC.createGain();o.type=ty;o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.linearRampToValueAtTime(v,t+at);g.gain.exponentialRampToValueAtTime(.0005,t+d);if(fl){const q=AC.createBiquadFilter();q.type='lowpass';q.frequency.setValueAtTime(fl,t);q.frequency.exponentialRampToValueAtTime(300,t+d);o.connect(q);q.connect(g)}else o.connect(g);g.connect(mg);o.start(t);o.stop(t+d+.05)}
const pad=(f,t,d,v)=>{nt(f,t,d,'sine',v,.5);nt(f*1.004,t,d,'triangle',v*.6,.6)},pluck=(f,t,v,ty)=>nt(f,t,.9,ty,v,.006,2600),bass=(f,t,d,v)=>nt(f,t,d,'triangle',v,.02,600),
kick=(t,v)=>{const o=AC.createOscillator(),g=AC.createGain();o.frequency.setValueAtTime(130,t);o.frequency.exponentialRampToValueAtTime(42,t+.12);g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.16);o.connect(g);g.connect(mg);o.start(t);o.stop(t+.2)},
hat=(t,v)=>{const b=AC.createBufferSource(),g=AC.createGain(),h=AC.createBiquadFilter();b.buffer=NB;h.type='highpass';h.frequency.value=7000;g.gain.setValueAtTime(v,t);g.gain.exponentialRampToValueAtTime(.001,t+.05);b.connect(h);h.connect(g);g.connect(mg);b.start(t);b.stop(t+.06)};
const MD=[[0,2,3,5,7,8,10],[0,2,4,5,7,9,11],[0,2,3,5,7,9,10],[0,2,3,5,7,8,11]],PR=[[0,5,2,6],[0,3,4,0],[5,3,0,4],[0,4,5,3]],LT=['triangle','sine','sawtooth'],RY=[[1,0,0,1,0,1,0,0],[1,0,1,0,0,1,0,1],[1,0,0,0,1,0,1,0],[1,1,0,1,0,0,1,0]];let mmode='',mi=7;
function music(){if(!AC||!S.mus||!mg||!NB)return;const race=st=='play'||st=='dead'||st=='pause',ci=S.car,m=race?'r':'m';
 if(mmode!=m){mmode=m;mst=0;mtm=0;mi=7}
 const bt=race?.25+(ci%4)*.02:.42,rt=146.83*Math.pow(2,(race?ci*5%12:0)/12),fq=i=>rt*Math.pow(2,i/12),sc=MD[race?ci%4:3],pr=PR[race?(ci>>2)%4:0],sn=i=>sc[i%7]+12*Math.floor(i/7);
 if(mtm<AC.currentTime)mtm=AC.currentTime+.05;
 while(mtm<AC.currentTime+.5){const s=mst++,t=mtm,bar=s>>3,pos=s&7,d=pr[bar%4];mtm+=bt;
  if(pos==0){[0,2,4].forEach(k=>pad(fq(sn(d+k)),t,bt*8,.03));bass(fq(sn(d)-12),t,bt*4,.14);mi=d+[4,2,7,4][bar%4]}
  if(race){
   if(pos%2==0)kick(t,.2);if(pos==4)bass(fq(sn(d)-12+7),t,bt*2,.1);if(pos%2==1)hat(t,.018);
   if(pos%2==0||hs(s+ci)>.65){const k=[0,2,4,2,0,2,4,7][pos];pluck(fq(sn(d+k)+12),t,.06,LT[ci%3])}
  }else{
   if(pos==4)bass(fq(sn(d)-12),t,bt*3,.1);
   if(RY[bar%4][pos]){const r=hs(s*1.7);mi=Math.max(d,Math.min(d+9,mi+(r<.35?-1:r<.7?1:r<.85?2:-2)));pluck(fq(sn(mi)+12),t,.07,'triangle')}}}}
