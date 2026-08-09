document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#year').forEach((el) => el.textContent = new Date().getFullYear());
  const replaceText = (node) => node.childNodes.forEach((child) => {
    if (child.nodeType === Node.TEXT_NODE) child.nodeValue = child.nodeValue.replace(/Schillingstraße/g, 'Schellingstraße');
    else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') replaceText(child);
  });
  replaceText(document.body);
  document.querySelectorAll('a[href*="linktr.ee"]').forEach((link) => link.remove());
  document.querySelectorAll('.brand-logo').forEach((logo) => {
    logo.textContent = '';
    const image = document.createElement('img');
    image.src = 'bdfc461b-6b9a-47f0-959f-d017115b48a2.jpeg';
    image.alt = 'Next Round Logo';
    logo.appendChild(image);
  });
  document.querySelectorAll('.header-link[href="index.html"]').forEach((link) => link.textContent = '← Zur Startseite');
  const style = document.createElement('style');
  style.textContent = `html,body,.site{max-width:100%;overflow-x:hidden}.section{overflow:hidden}.legal-page-header{min-width:0}.legal-title,h1.legal-title{display:block!important;width:100%!important;max-width:100%!important;overflow-wrap:anywhere!important;word-break:normal!important;hyphens:auto!important}@media(max-width:600px){.legal-title,h1.legal-title{font-size:clamp(32px,10.8vw,46px)!important;letter-spacing:-.065em!important;line-height:.95!important}}`;
  document.head.appendChild(style);
});
