//Mobile navigation

const openBtn = document.querySelector('.open-nav');

const mobileMenu = document.querySelector('.mobile-menu');
const closeNav = document.querySelector('.close-btn');


closeNav.addEventListener('click', () => {
  mobileMenu.classList.remove('navigation-open');
})
openBtn.addEventListener('click', () => {
  mobileMenu.classList.add('navigation-open');
})


