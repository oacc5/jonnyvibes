const player = document.getElementById("player");

const songs = [
  "song1.mp3",
  "song2.mp3",
  "song3.mp3"
];

function playSong(index) {
  player.src = songs[index];
  player.play();
}