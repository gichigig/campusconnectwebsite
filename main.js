// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.navbar nav');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.navbar nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Scroll Animations using Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
