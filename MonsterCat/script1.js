/*Audio test 2*
const track1 = document.querySelector(".track1");
const track2 = document.querySelector(".track2");
const playBtn = track1.querySelector(".fa");
//const pauseBtn = track1.querySelector(".fa-fw");
//console.log(pauseBtn)

const myAudio1 = document.getElementById("1");
const myAudio2 = document.getElementById("2");
const myAudio3 = document.getElementById("3");
const myAudio4 = document.getElementById("4");
const myAudio5 = document.getElementById("5");
const myAudio6 = document.getElementById("6");
const myAudio7 = document.getElementById("7");
const myAudio8 = document.getElementById("8");
const myAudio9 = document.getElementById("9");
const myAudio10 = document.getElementById("10");
const myAudio11 = document.getElementById("11");

/*function togglePlay1() {
  if (myAudio1.paused) {
    myAudio1.play();
    document.querySelector(".track1").innerHTML =
      '<i class="fa-solid fa-pause"></i>';
  } else {
    myAudio1.pause();
    document.querySelector(".track1").innerHTML = '<i class="fa fa-play"></i>';
  }
}
function togglePlay2() {
  if (myAudio2.paused) {
    myAudio2.play();
    track2.innerText = "T";
  } else {
    myAudio2.pause();
    track2.innerText = "B";
  }
}*/

const makeAllPlays = () => {
  Array.from(document.querySelectorAll(".playListPlay")).forEach((element) => {
    element.classList.add("bi-play-circle-fill");
    element.classList.remove("bi-pause-circle-fill");
  });
};

let index = 0;

Array.from(document.querySelectorAll(".playLstPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
    index = e.target.id;
    makeAllPlays();
    e.target.classList.remove("bi-play-circle-fill");
    e.target.classList.add("bi-pause-circle-fill");
    music.src = `audio/${index}.mp3`;
    music.play();
  });
});
