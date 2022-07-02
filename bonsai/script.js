//Mobile navigation

const openNav = document.querySelector('.open-nav');
const mobileNav = document.querySelector('.nav-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const closeNav = document.querySelector('.close-btn');

openNav.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(0px)';
})

closeNav.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(-100%)';
})


/*//Get elements
const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const navMenu = document.querySelector(".menu-nav");

//attach eventlisteners and toggle navigation-open class
closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("navigation-open");
});

openBtn.addEventListener("click", () => {
  navMenu.classList.add("navigation-open");
});*/


/*
.menu-nav {
  position: fixed;
  background: var(--clr-bg-300);
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 100%;
  transform: translateX(0);
  transition: transform 250ms;
  height: 100%;
  z-index: 3;
}

.navigation-open {
  transform: translateX(-100%)
}*/