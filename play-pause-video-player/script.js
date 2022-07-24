
const videoPlayer = document.getElementsByClassName('video-player')[0];
const playPauseButton = document.getElementById('play-pause-btn');

function playPause() {
  playPauseButton.classList.toggle('pause');
  if(videoPlayer.paused) 
    videoPlayer.play();
  else
    videoPlayer.pause();
}

playPauseButton.addEventListener("click", playPause);