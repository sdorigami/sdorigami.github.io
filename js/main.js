// Nav scroll effect
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40
      ? '0 2px 20px rgba(0,0,0,0.3)'
      : 'none';
  });
}

// Mobile nav toggle
function toggleNav() {
  const links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

// Scroll reveal — lightweight, no library needed
const revealEls = document.querySelectorAll('.feature-card, .strip-item, .timeline-item, .tribute-card, .resource-card');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Lightbox for gallery (simple)
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const caption = item.querySelector('.gallery-item-caption');
    if (!img) return;
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.92);
      z-index:999;display:flex;flex-direction:column;
      align-items:center;justify-content:center;cursor:pointer;
      padding:2rem;
    `;
    const bigImg = document.createElement('img');
    bigImg.src = img.src;
    bigImg.style.cssText = 'max-width:90vw;max-height:80vh;object-fit:contain;border-radius:2px;';
    overlay.appendChild(bigImg);
    if (caption) {
      const cap = document.createElement('p');
      cap.textContent = caption.textContent;
      cap.style.cssText = 'color:rgba(255,255,255,0.7);margin-top:1rem;font-size:0.9rem;letter-spacing:0.05em;';
      overlay.appendChild(cap);
    }
    const closeHint = document.createElement('p');
    closeHint.textContent = 'Click anywhere to close';
    closeHint.style.cssText = 'color:rgba(255,255,255,0.3);margin-top:0.5rem;font-size:0.75rem;';
    overlay.appendChild(closeHint);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});
