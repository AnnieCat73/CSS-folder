//Side navigation

const openNav = document.querySelector(".open-nav");
const sideMenu = document.querySelector(".side-menu");
const closeNav = sideMenu.querySelector(".close-btn");


openNav.addEventListener('click', () => {
  sideMenu.classList.remove('navigation-open')
})

closeNav.addEventListener('click', () => {
  sideMenu.classList.add('navigation-open');
})
