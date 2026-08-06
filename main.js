// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Jahr im Footer setzen
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Reveal-on-scroll Animation
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback: alles sichtbar
    reveals.forEach(el => el.classList.add('reveal-visible'));
  }
});
