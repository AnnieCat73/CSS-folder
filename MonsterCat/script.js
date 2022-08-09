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



/*Audio

<audio controls autoplay muted>
  <source src="audio/Pray - Anno Domini Beats.mp3" type ="audio/mpeg">
</audio> or better:

const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
can use pause()
*/

//const audio = new Audio("/audio/Escapism - Yung Logos.mp3");
const buttons = document.querySelectorAll(".play");

//console.log(buttons)

/*buttons.forEach(button => {
  button.addEventListener("click", () => {
    let buttonInnerHTML = this.innerHTML;
    //console.log(buttonInnerHTML)
    makeSound(buttonInnerHTML);
    /*audio.play();
    pause();*
  });
});*/

/*document.addEventListener("keydown", function (e) {
  makeSound(e.key)
})*/

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    console.log(buttonInnerHTML)
    makeSound(buttonInnerHTML);


  })
}


function makeSound(key) {
  switch (key) {
    case "a":
      const track1 = new Audio(`/audio/Escapism - Yung Logos.mp3`);
      track1.play();
      break;
    case "b":
      const track2 = new Audio(`/audio/Fingerprint - Mini Vandals.mp3`);
      track2.play();
      break;
    case "c":
      const track3 = new Audio(`/audio/Glass - Anno Domini Beats.mp3`);
      track3.play();
      break;
    case "d":
      const track4 = new Audio(`/audio/Kiss The Heavens - Asher Fulero.mp3`);
      track4.play();
      break;
    case "e":
      const track5 = new Audio(`/audio/Metro - Yung Logos.mp3`);
      track5.play();
      break;
    case "f":
      const track6 = new Audio(`/audio/No Doubt - Yung Logos.mp3`);
      track6.play();
      break;
    case "g":
      const track7 = new Audio(`/audio/Pray - Anno Domini Beats.mp3`);
      track7.play();
      break;
    case "h":
      const track8 = new Audio(`/audio/Retribution - NEFFEX.mp3`);
      track8.play();
      break;
    case "i":
      const track9 = new Audio(`/audio/Sailing - Telecasted.mp3`);
      track9.play();
      break;
    case "j":
      const track10 = new Audio(`/audio/Skylines - Anno Domini Beats.mp3`);
      track10.play();
      break;
    case "k":
      const track11 = new Audio(`/audio/Till I Let Go (Instrumental) - NEFFEX.mp3`);
      track11.play();
      break;
    default: console.log(buttonInnerHTML);


  }
}

