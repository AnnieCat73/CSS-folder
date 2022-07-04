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


//Toggle

let toggleBtn = document.querySelector(".toggle-ball");
const price1 = document.querySelector("#price-1");
const price2 = document.querySelector("#price-2");
const price3 = document.querySelector("#price-3");



toggleBtn.addEventListener("click", e => {
  toggleBtn.classList.toggle("toggle-active");
  if (toggleBtn.classList.contains("toggle-active")) {
    price1.innerText = '17';
    price2.innerText = '32';
    price3.innerText = '52';
  }
  else {
    price1.innerText = '24';
    price2.innerText = '39';
    price3.innerText = '79';

  }

})


