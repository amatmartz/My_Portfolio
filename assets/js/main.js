/*=============== NAVIGATION MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav__link');

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
          navMenu.classList.add('show-menu');
    });
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
    });
}

/* Remove menu on link click */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
          navMenu.classList.remove('show-menu');
    });
});

/*=============== HEADER SHADOW ON SCROLL ===============*/
const header = document.getElementById('header');

const scrollHeader = () => {
    if (window.scrollY >= 50) {
          header.classList.add('scroll-header');
    } else {
          header.classList.remove('scroll-header');
    }
};

window.addEventListener('scroll', scrollHeader);

/*=============== ACTIVE LINK ON SCROLL ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
          const sectionHeight = current.offsetHeight;
          const sectionTop = current.offsetTop - 100;
          const sectionId = current.getAttribute('id');
          const link = document.querySelector('.nav__link[href*="' + sectionId + '"]');

                         if (link) {
                                 if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                                           link.classList.add('active-link');
                                 } else {
                                           link.classList.remove('active-link');
                                 }
                         }
    });
};

window.addEventListener('scroll', scrollActive);

/*=============== SCROLL UP BUTTON ===============*/
const scrollUp = document.getElementById('scroll-up');

const showScrollUp = () => {
    if (scrollUp) {
          if (window.scrollY >= 350) {
                  scrollUp.classList.add('show-scroll');
          } else {
                  scrollUp.classList.remove('show-scroll');
          }
    }
};

window.addEventListener('scroll', showScrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const revealElements = document.querySelectorAll('.section, .project__card, .skill__card, .experience__item, .contact__info-item, .contact__social-link');

const revealOnScroll = () => {
    revealElements.forEach(el => {
          const elementTop = el.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

                               if (elementTop < windowHeight - 80) {
                                       el.classList.add('active');
                               }
    });
};

/* Add reveal class to elements */
revealElements.forEach(el => {
    el.classList.add('reveal');
});

/* Initial check */
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
