/*Side navigation

const openNav = document.querySelector(".open-nav");
const sideMenu = document.querySelector(".side-menu");
const closeNav = sideMenu.querySelector(".close-btn");



openNav.addEventListener('click', () => {
  sideMenu.classList.remove('navigation-open')
})

closeNav.addEventListener('click', () => {
  sideMenu.classList.add('navigation-open');
})*/

/*Audio test 1*/


const playBtns = document.querySelectorAll(".play");
const tracks = document.querySelectorAll(".track");

playBtns.forEach((playBtn) => {
  playBtn.addEventListener("click", () => {
    const audios = document.querySelectorAll("#myAudio");
    audios.forEach((audio) => {
      if (audio.paused) {
        audio.play();
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

      } else {
        audio.pause();
        playBtn.innerHTML = '<i class="fa fa-play"></i>';


      }
    }
    )
  })
})

/*Audio test 2*
const track1 = document.querySelector(".track1");
const track2 = document.querySelector(".track2");
const playBtn = track1.querySelector(".fa");
//const pauseBtn = track1.querySelector(".fa-fw");
//console.log(pauseBtn)


const myAudio1 = document.getElementById("myAudio1");
const myAudio2 = document.getElementById("myAudio2");
const myAudio3 = document.getElementById("myAudio3");
const myAudio4 = document.getElementById("myAudio4");
const myAudio5 = document.getElementById("myAudio5");
const myAudio6 = document.getElementById("myAudio6");
const myAudio7 = document.getElementById("myAudio7");
const myAudio8 = document.getElementById("myAudio8");
const myAudio9 = document.getElementById("myAudio9");
const myAudio10 = document.getElementById("myAudio10");
const myAudio11 = document.getElementById("myAudio11");


function togglePlay1() {
  if (myAudio1.paused) {
    myAudio1.play();
    document.querySelector(".track1").innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    myAudio1.pause();
    document.querySelector(".track1").innerHTML = '<i class="fa fa-play"></i>';
  }
};
function togglePlay2() {
  if (myAudio2.paused) {
    myAudio2.play();
    track2.innerText = 'T';
  } else {
    myAudio2.pause();
    track2.innerText = 'B';
  }

};
*/


