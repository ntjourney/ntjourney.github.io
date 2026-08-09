const host=document.getElementById('logo3d');
if(host){
  const style=document.createElement('style');
  style.textContent='@keyframes nextRoundSpin{from{transform:perspective(1100px) rotateY(0deg)}to{transform:perspective(1100px) rotateY(360deg)}}#logo3d img{display:block;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 18px 18px rgba(0,0,0,.16));transform-style:preserve-3d;animation:nextRoundSpin 10s linear infinite}@media(prefers-reduced-motion:reduce){#logo3d img{animation:none}}';
  document.head.appendChild(style);
  const logo=document.createElement('img');
  logo.src='IMG_1746.png';
  logo.alt='Next Round Logo';
  logo.decoding='async';
  host.replaceChildren(logo);
}