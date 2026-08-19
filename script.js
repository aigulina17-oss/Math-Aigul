// =====================================================
// MOBILE MENU
// =====================================================

const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {

  menuToggle.addEventListener('click', () => {

    navList.classList.toggle('active');

    const isExpanded =
      navList.classList.contains('active');

    menuToggle.setAttribute(
      'aria-expanded',
      isExpanded
    );

  });


  // Закрываем меню после перехода по ссылке

  document
    .querySelectorAll('.nav-list a')
    .forEach(link => {

      link.addEventListener('click', () => {

        navList.classList.remove('active');

        menuToggle.setAttribute(
          'aria-expanded',
          'false'
        );

      });

    });

}


// =====================================================
// FADE-IN SECTIONS
// =====================================================

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add('fade-in');

        observer.unobserve(entry.target);

      }

    });

  },
  observerOptions
);


document
  .querySelectorAll('section')
  .forEach(section => {

    observer.observe(section);

  });
