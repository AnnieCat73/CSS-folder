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

/* Another option:

class TrackList {
  constructor() {
    this.playBtns = document.querySelectorAll('.play');//button
    this.track1 = document.querySelector('.track-1');
    this.track2 = document.querySelector('.track-2');//etc
    this.index = 0;

    this.btm = 150

    this.isPlaying = null;
  }
  activeBtn() {
    this.classList.toggle("active");//f.ex makes it stand out/.active add to CSS so <button class="active" - in CSS .track-1.active {}
  }

  repeat() {
    playBtns.forEach(playBtn => {
      playBtn.addEventListener('click', activeBtn);
      if (playBtn.classList.contains('active')) {
        //check each sound
        if (playBtn.classList.contains('track-1')) {
          this.track1Audio.currentTime = 0;
          this.track1Audio.play();
        }
        if (playBtn.classList.contains('track-2')) {
          this.track2.currentTime = 0;
          this.track2Audio.play();
        }
        if (playBtn.classList.contains('track-3')) {
          this.track3Audio.currentTime = 0;
          this.track3Audio.play();
        }//etc

      }
    })
    //this.index++;??
  }

  start() {
    const interval = (60 / this.bpm) * 1000;
    //Check if it's playing

    if (this.isPlaying) {
      //Clear the interval
      clearInterval(this.isPlaying);
      console.log(this.isPlaying);
      this.isPlaying = null;
    } else {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }

  updateBtn() {
    //NULL

    if (!this.isPlaying) {
      this.playBtn.innerText = "Stop";
      this.playBtn.classList.add("active");
    } else {
      this.playBtn.innerText = "Play";
      this.playBtn.classList.remove("active");
    }
  }
}

const trackList = new TrackList();

trackList.playBtns.forEach(playBtn => {
  playBtn.addEventListener('click', function () {
    trackList.updateBtn();
    trackList.start();
  });


});


/*In html file:

<table class="table">
          <tr id="track-1">
            <td class="track-no p-table" width="30px">1</td>
            <td class="track p-table">
              <button class="play a">a</button>
              <!--<button class="play a">&#9611</button>
              <a href="#" class="play a">
                <i class="fal fa-play"></i>
               
              </a>-->
              <div class="track-info">
                The Small Things
                <span>Conro</span>
              </div>
            </td>
            <td class="track-time">
              <span class="track-length p-table">3.35</span>
              <a href="#" >
                <i class="fal fa-share-alt"></i>
              </a>
            </td>
          </tr>
          <tr id="track-2">


<audio src="/audio/Escapism - Yung Logos.mp3" class="play-track track-1"></audio>
etc
*/
