
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

const toggle = document.querySelector('.mobile-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    const visible = navLinks.style.display === 'flex';
    navLinks.style.display = visible ? 'none' : 'flex';
    if (!visible) {
      Object.assign(navLinks.style, {
        position:'absolute', top:'76px', left:'4%', right:'4%',
        flexDirection:'column', padding:'18px', background:'#07111d',
        border:'1px solid rgba(115,190,255,.18)', borderRadius:'14px'
      });
    }
  });
}
