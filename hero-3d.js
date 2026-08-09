const host=document.getElementById('logo3d');
if(host){
  const style=document.createElement('style');
  style.textContent=`
    #logo3d{perspective:1400px;isolation:isolate}
    #logo3d img{display:block;width:100%;height:100%;object-fit:contain;transform-style:preserve-3d;will-change:transform,filter;animation:nextRoundHero 9s cubic-bezier(.45,.05,.55,.95) infinite;filter:drop-shadow(0 24px 22px rgba(0,0,0,.22)) drop-shadow(0 0 16px rgba(0,210,230,.14))}
    @keyframes nextRoundHero{0%,100%{transform:translate3d(0,0,0) rotateX(2deg) rotateY(-8deg) rotateZ(-1deg);filter:drop-shadow(0 24px 22px rgba(0,0,0,.22)) drop-shadow(0 0 12px rgba(0,210,230,.10))}50%{transform:translate3d(0,-18px,28px) rotateX(-2deg) rotateY(9deg) rotateZ(1deg);filter:drop-shadow(0 34px 28px rgba(0,0,0,.24)) drop-shadow(0 0 24px rgba(0,210,230,.28))}}
    @media(prefers-reduced-motion:reduce){#logo3d img{animation:none;transform:rotateY(-4deg)}}
  `;
  document.head.appendChild(style);
  const logo=document.createElement('img');
  logo.src='C109D335-EFBE-4BED-9522-CA814AA267DD.png';
  logo.alt='Next Round Logo';
  logo.decoding='async';
  host.replaceChildren(logo);
}