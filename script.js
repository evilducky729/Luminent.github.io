const reveals = document.querySelectorAll('.reveal');

const obs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) { 
        setTimeout(() => e.target.classList.add('visible'), i * 75); 
        obs.unobserve(e.target); 
    }
  });
}, { threshold: 0.08 });

reveals.forEach(el => obs.observe(el));

window.addEventListener('scroll', () => {
  document.getElementById('navbar').style.height = window.scrollY > 60 ? '58px' : '70px';
});

let navOpen = false;
function toggleNav() {
  navOpen = !navOpen;
  const links = document.getElementById('navLinks');
  if (navOpen) {
    links.style.cssText = 'display:flex;flex-direction:column;gap:0;position:fixed;top:58px;left:0;right:0;background:rgba(0,21,43,0.98);padding:0.5rem 0;border-bottom:1px solid rgba(201,168,76,0.2);z-index:99;';
    links.querySelectorAll('a').forEach(a => { a.style.cssText = 'padding:1rem 2rem;font-size:0.9rem;border-bottom:1px solid rgba(255,255,255,0.05);'; });
  } else { 
    links.style.cssText = 'display:none;'; 
  }
}

function handleSubmit(e) {
  const btn = e.target;
  btn.textContent = 'Request Received ✓ — We\'ll Be in Touch';
  btn.style.cssText = 'background:#1a5c35;color:#fff;letter-spacing:0.05em;padding:15px 36px;border:none;font-family:DM Sans,sans-serif;font-size:0.77rem;font-weight:600;cursor:pointer;';
  setTimeout(() => {
    btn.textContent = 'Request My Free Discovery Call →';
    btn.style.cssText = '';
  }, 4000);
}