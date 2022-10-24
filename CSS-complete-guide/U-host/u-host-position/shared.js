const backdrop = document.querySelector(".backdrop");
const selectPlanBtns = document.querySelectorAll(".plan button");
const modal = document.querySelector('.modal');
const noBtn = modal.querySelector(".modal__actions .modal__action--negative");
const ctaButton = document.querySelector(".main-nav__item--cta");

//console.log(noBtn)
//console.dir(selectPlanBtns);
//nodelist of 3 buttons inside div with class of plan



//iterate over buttons
for (let i = 0; i < selectPlanBtns.length; i++) {
  selectPlanBtns[i].addEventListener("click", function () {
    /*modal.style.display = 'block';
    backdrop.style.display = 'block';*/
    modal.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function () {
      backdrop.classList.add('open');
    }, 10);

  });
}

/*backdrop.addEventListener("click", function () {
  modal.style.display = "none";
  backdrop.style.display = 'none';
})

noBtn.addEventListener("click", function () {
  modal.style.display = "none";
  backdrop.style.display = 'none';
})*/

//or better

backdrop.addEventListener("click", function () {
  mobileNav.style.display = 'none';
  closeModal();
});

if (noBtn) {//modalNoButton
  noBtn.addEventListener("click", closeModal);
}


function closeModal() {
  //modal.style.display = "none";
  //backdrop.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');

  }
  backdrop.classList.remove('open');
  setTimeout(function () {
    backdrop.style.display = 'none';
  }, 200);

}


const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

//

/*backdrop.addEventListener("click", function () {
  mobileNav.style.display = 'none';
})*/

toggleButton.addEventListener("click", function () {
  //mobileNav.style.display = 'block';
  //backdrop.style.display = 'block';
  modal.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(function () {
    backdrop.classList.add('open');
  }, 10);

})


//animation on cta button

ctaButton.addEventListener('animationstart', function (e) {
  console.log('Animation started', e);
})
ctaButton.addEventListener('animationend', function (e) {
  console.log('Animation ended', e);
})
ctaButton.addEventListener('animationiteration', function (e) {
  console.log('Animation iteration', e);
})