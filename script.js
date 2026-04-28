const player = document.getElementById("player");

const songs = [
  { name: "Halima Girl", file: "Omah-Lay-I-AM-(CeeNaija.com).mp3" },
  { name: "Confidence", file: "Omah-Lay-I-AM-(CeeNaija.com).mp3" },
  { name: "Poverty", file: "Omah-Lay-I-AM-(CeeNaija.com).mp3" },
  { name: "Igbo", file: "Omah-Lay-I-AM-(CeeNaija.com).mp3" }
];

function playSong(index) {
  player.src = songs[index].file;
  player.play();
}