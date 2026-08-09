document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#year').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const replaceText = (node) => {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        child.nodeValue = child.nodeValue.replace(/Schillingstraße/g, 'Schellingstraße');
      } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'SCRIPT' && child.tagName !== 'STYLE') {
        replaceText(child);
      }
    });
  };
  replaceText(document.body);

  document.querySelectorAll('a[href*="linktr.ee"]').forEach((link) => link.remove());

  document.querySelectorAll('.brand-logo').forEach((logo) => {
    logo.textContent = '';
    const image = document.createElement('img');
    image.src = 'bdfc461b-6b9a-47f0-959f-d017115b48a2.jpeg';
    image.alt = 'Next Round Logo';
    logo.appendChild(image);
  });

  document.querySelectorAll('.header-link[href="index.html"]').forEach((link) => {
    link.textContent = '← Zur Startseite';
  });
});
