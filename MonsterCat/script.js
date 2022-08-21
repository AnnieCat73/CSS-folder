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




*

const playPauseBtn = track1.querySelector(".fa");
const track1 = document.querySelector(".track1");

playPauseBtn.addEventListener("click", function () {
  if (myAudio1.paused == true) {
    // Play the video
    myAudio1.play();

    // Update the button text to 'Pause'
    playPauseBtn.classList.toggle('pause');
  } else {
    // Pause the video
    myAudio1.pause();

    // Update the button text to 'Play'
    playPauseBtn.classList.toggle('pause');
  }
});*/


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

/*function togglePlay1() {
  return myAudio1.paused ? myAudio1.play() : myAudio1.pause();
}*
function togglePlay2() {
  return myAudio2.paused ? myAudio2.play() : myAudio2.pause();
};*
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


