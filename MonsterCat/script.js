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

/*
var playPause = document.getElementById("play-pause");

playPause.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playPause.classList.toggle('pause');
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
   playPause.classList.toggle('pause');
  }
});
css

button{
    height:50px;
  width:50px;  
  border:none;
  outline:none;
}

button.play{
  background:url("http://omniawebfactory.com/unik/wp-content/uploads/2016/10/play-beli-1.png");
  background-size:100%;
}
button.pause{
  background:url("http://omniawebfactory.com/unik/wp-content/uploads/2016/10/pause-beli-1.png");
  background-size:100%;
}




*/


/*Audio*/
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
    track1.classList.toggle()
    //track1.innerHTML = playBtn;
  } else {
    myAudio1.pause();
    //track1.innerHTML = pauseBtn;
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

/*function togglePlay1() {
  return myAudio1.paused ? myAudio1.play() : myAudio1.pause();
}*
function togglePlay2() {
  return myAudio2.paused ? myAudio2.play() : myAudio2.pause();
};*/
function togglePlay3() {
  return myAudio3.paused ? myAudio3.play() : myAudio3.pause();
};
function togglePlay4() {
  return myAudio4.paused ? myAudio4.play() : myAudio4.pause();
};
function togglePlay5() {
  return myAudio5.paused ? myAudio5.play() : myAudio5.pause();
};
function togglePlay6() {
  return myAudio6.paused ? myAudio6.play() : myAudio6.pause();
};
function togglePlay7() {
  return myAudio7.paused ? myAudio7.play() : myAudio7.pause();
};
function togglePlay8() {
  return myAudio8.paused ? myAudio8.play() : myAudio8.pause();
};
function togglePlay9() {
  return myAudio9.paused ? myAudio9.play() : myAudio9.pause();
};
function togglePlay10() {
  return myAudio10.paused ? myAudio10.play() : myAudio10.pause();
};
function togglePlay11() {
  return myAudio11.paused ? myAudio11.play() : myAudio11.pause();
};

/*const buttons = document.querySelectorAll(".play");
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
})*

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    //console.log(buttonInnerHTML)
    //makeSound(buttonInnerHTML);
    togglePlay(buttonInnerHTML);

  })
}*/

/*function makeSound(key) {
  switch (key) {
    case "a":
      const track1 = new Audio(`/audio/Escapism - Yung Logos.mp3`);
      track1 ? track1.play() : track1.pause();
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
}*/

