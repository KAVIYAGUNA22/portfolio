document.addEventListener('DOMContentLoaded', function () {
  // =======================
  // Smooth scroll for internal links
  // =======================
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =======================
  // Mobile sidebar toggle
  // =======================
  const burger = document.querySelector('.burger');
  const navlinks = document.querySelector('.navlinks');
  if (burger) {
    burger.addEventListener('click', () => {
      if (navlinks.style.display === 'flex') {
        navlinks.style.display = 'none';
      } else {
        navlinks.style.display = 'flex';
        navlinks.style.flexDirection = 'column';
        navlinks.style.position = 'absolute';
        navlinks.style.right = '20px';
        navlinks.style.top = '64px';
        navlinks.style.background = 'rgba(7,16,37,0.95)';
        navlinks.style.padding = '12px';
        navlinks.style.borderRadius = '8px';
      }
    });
  }

  // =======================
  // IntersectionObserver for reveal-on-scroll
  // =======================
  const reveals = document.querySelectorAll('.section, .card, .proj, .photo-wrap');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(ent => {
      if (ent.isIntersecting) {
        ent.target.classList.add('visible');
        ent.target.classList.remove('reveal');
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });

  // =======================
  // Set dynamic year in footer
  // =======================
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // =======================
  // Project click-to-toggle details
  // =======================
  document.querySelectorAll('.proj').forEach(proj => {
    const title = proj.querySelector('.proj-title');
    if (title) {
      title.addEventListener('click', () => {
        proj.classList.toggle('active');
      });
    }
  });
});
