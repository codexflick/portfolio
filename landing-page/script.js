/* =========================================================
   CodexFlick — Digital Agency Landing Page
   Script: script.js
========================================================= */

// ---- 1. Sticky navbar gets a shadow once the page scrolls down ----
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// ---- 2. Mobile hamburger menu toggle ----
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const overlay = document.getElementById('overlay');

function toggleMenu() {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  overlay.classList.toggle('open');
}
burger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

// close mobile menu automatically when a link inside it is clicked
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) toggleMenu();
  });
});

// ---- 3. Scroll reveal animation using IntersectionObserver ----
// Elements with class "reveal" fade + slide up the first time they enter the viewport.
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      io.unobserve(entry.target); // animate once, then stop watching
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ---- 4. Contact form ----
// The form posts to FormSubmit (https://formsubmit.co) which forwards
// submissions straight to codexflick@gmail.com — no backend server needed.
// First submission requires a one-time confirmation click from that inbox.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', () => {
    // form submits normally to FormSubmit — nothing to prevent here.
    // this listener is kept as a hook in case you want to add
    // client-side validation or a loading state later.
  });
}