const backdrop = document.querySelector(".backdrop");
const selectPlanBtns = document.querySelectorAll(".plan button");
const modal = document.querySelector('.modal');
const noBtn = modal.querySelector(".modal__actions .modal__action--negative");

console.log(noBtn)
//console.dir(selectPlanBtns);
//nodelist of 3 buttons inside div with class of plan



//iterate over buttons
for (let i = 0; i < selectPlanBtns.length; i++) {
  selectPlanBtns[i].addEventListener("click", function () {
    /*modal.style.display = 'block';
    backdrop.style.display = 'block';*/
    modal.classList.add('open');
    backdrop.classList.add('open')
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

if (modalNoButton) {
  noBtn.addEventListener("click", closeModal);
}


function closeModal() {
  //modal.style.display = "none";
  //backdrop.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');

  }
  backdrop.classList.remove('open');
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
  backdrop.classList.add('open');
})