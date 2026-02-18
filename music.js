let music;

function startMusicAndGo(page) {
  localStorage.setItem("musicPlaying", "true");
  music = new Audio("assets/music.mp3");
  music.loop = true;
  music.play();

  music.addEventListener("timeupdate", () => {
    localStorage.setItem("musicTime", music.currentTime);
  });

  window.location.href = page;
}

window.onload = function () {
  if (localStorage.getItem("musicPlaying") === "true") {
    music = new Audio("assets/music.mp3");
    music.loop = true;
    const time = localStorage.getItem("musicTime");
    if (time) music.currentTime = time;
    music.play();
  }
};
