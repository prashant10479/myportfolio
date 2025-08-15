// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach
(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute
    ('href')).scrollIntoView({
      behaviour: 'smooth'
    });
  });
});

// Navbar Scroll Effect

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  window.scrollY > 50 ?
     navbar.computedStyleMap.backgroundColor = 'rgba(10, 10, 10, 0.98)':
     navbar.computedStyleMap.backgroundColor = 'rgba(10, 10, 10, 0.95)'
});