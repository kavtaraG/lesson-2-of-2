var audio = document.getElementById('audio');

let isPlaying = false;

function playSong(){
    isPlaying = true;
    audio.autoplay();
}
playSong();