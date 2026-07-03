const c=document.getElementById('stars'),x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}r();addEventListener('resize',r);
const s=[...Array(180)].map(()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*2+1,a:Math.random()}));
function d(){x.clearRect(0,0,c.width,c.height);x.fillStyle='#050814';x.fillRect(0,0,c.width,c.height);
for(const i of s){i.a+=0.02;x.globalAlpha=.5+Math.sin(i.a)*.5;x.fillStyle='white';x.beginPath();x.arc(i.x,i.y,i.r,0,6.28);x.fill();}
requestAnimationFrame(d)}d();