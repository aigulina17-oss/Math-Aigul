// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');
if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    const isExpanded = navList.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });
  // Close menu when clicking a link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
// Optional: Add fade-in on scroll for sections (lightweight)
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, observerOptions);
// Observe all section elements
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Show the floating CTA button once the visitor scrolls past the hero
const floatingCta = document.querySelector('.floating-cta');

if (floatingCta) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      floatingCta.classList.add('visible');
    } else {
      floatingCta.classList.remove('visible');
    }
  }, { passive: true });
}
