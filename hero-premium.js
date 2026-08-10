(() => {
  const scriptUrl = document.currentScript?.src || window.location.href;
  const logoUrl = new URL("C109D335-EFBE-4BED-9522-CA814AA267DD.png", scriptUrl).href;

  const init = () => {
    const mount = document.getElementById("logo3d");
    if (!mount || mount.dataset.ready === "true") return;

    mount.dataset.ready = "true";
    const style = document.createElement("style");
    style.textContent = `
      #logo3d { display: grid; min-height: clamp(250px, 39vw, 420px); place-items: center; perspective: 1000px; }
      #logo3d .next-round-hero-logo { width: min(52vw, 290px); max-width: 78%; height: auto; filter: drop-shadow(0 28px 22px rgba(0,0,0,.2)); transform-style: preserve-3d; animation: nextRoundFloat 5.5s ease-in-out infinite; }
      @keyframes nextRoundFloat { 0%, 100% { transform: rotateX(7deg) rotateY(-18deg) translateY(0); } 50% { transform: rotateX(-8deg) rotateY(18deg) translateY(-14px); } }
      @media (prefers-reduced-motion: reduce) { #logo3d .next-round-hero-logo { animation: none; } }

      .site-footer { position: relative; }
      .site-footer .language-switch { position: absolute; top: 0; right: 0; display: inline-flex; align-items: center; gap: 5px; margin: 0; padding: 0; border: 0; border-radius: 0; background: transparent; font: 500 11px 'DM Mono', monospace; letter-spacing: .04em; }
      .site-footer .language-switch a, .site-footer .language-switch span { display: inline; min-width: 0; width: auto; height: auto; padding: 0; border-radius: 0; background: transparent; box-shadow: none; color: rgba(5,5,5,.5); text-decoration: none; }
      .site-footer .language-switch a::after { content: ' /'; }
      .site-footer .language-switch .active { background: transparent; box-shadow: none; color: #050505; font-weight: 700; }
    `;
    document.head.appendChild(style);

    const logo = document.createElement("img");
    logo.className = "next-round-hero-logo";
    logo.src = logoUrl;
    logo.alt = "NextRound";
    mount.replaceChildren(logo);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
