const host = document.getElementById('logo3d');

if (host) {
  const style = document.createElement('style');
  style.textContent = `
    #logo3d { position: relative; perspective: 1600px; isolation: isolate; }
    #logo3d .nr-hero-stage { width: 100%; height: 100%; position: relative; transform-style: preserve-3d; }
    #logo3d .nr-hero-logo { display: block; width: 100%; height: 100%; object-fit: contain; transform-style: preserve-3d; will-change: transform, filter; animation: nrProductTurn 6s cubic-bezier(.65,0,.35,1) infinite; filter: drop-shadow(0 20px 20px rgba(0,0,0,.20)); }
    #logo3d .nr-sheen { position: absolute; inset: 0; pointer-events: none; mix-blend-mode: screen; opacity: 0; background: linear-gradient(105deg, transparent 38%, rgba(62,235,255,.06) 45%, rgba(173,249,255,.68) 50%, rgba(62,235,255,.08) 55%, transparent 62%); background-size: 250% 100%; animation: nrSheen 6s cubic-bezier(.65,0,.35,1) infinite; }
    @keyframes nrSheen { 0%,12% { opacity:0; background-position:160% 0 } 16% { opacity:.92 } 30%,100% { opacity:0; background-position:-60% 0 } }
    @keyframes nrProductTurn {
      0%,14% { transform: translate3d(0,0,0) rotateX(0) rotateY(0) rotateZ(0); filter: drop-shadow(0 20px 20px rgba(0,0,0,.20)); }
      25% { transform: translate3d(0,-5px,32px) rotateX(-1deg) rotateY(-8deg) rotateZ(0); }
      48% { transform: translate3d(0,-10px,42px) rotateX(-1deg) rotateY(-178deg) rotateZ(0); filter: drop-shadow(0 28px 26px rgba(0,0,0,.24)); }
      72% { transform: translate3d(0,-4px,30px) rotateX(1deg) rotateY(-360deg) rotateZ(0); }
      84% { transform: translate3d(0,1px,0) rotateX(0) rotateY(-360deg) rotateZ(.35deg); }
      91%,100% { transform: translate3d(0,0,0) rotateX(0) rotateY(-360deg) rotateZ(0); filter: drop-shadow(0 20px 20px rgba(0,0,0,.20)); }
    }
    @media (prefers-reduced-motion: reduce) { #logo3d .nr-hero-logo, #logo3d .nr-sheen { animation: none; } }
  `;
  document.head.appendChild(style);

  const stage = document.createElement('div');
  stage.className = 'nr-hero-stage';
  const logo = document.createElement('img');
  logo.className = 'nr-hero-logo';
  logo.src = 'C109D335-EFBE-4BED-9522-CA814AA267DD.png';
  logo.alt = 'Next Round Logo';
  logo.decoding = 'async';
  const sheen = document.createElement('span');
  sheen.className = 'nr-sheen';
  stage.append(logo, sheen);
  host.replaceChildren(stage);
}
