var audio = document.getElementById('audio');
const audio2 = document.getElementById('audio2')

//let isPlaying = false;

function playSong(event){
    //var audio = document.getElementById("audio");
    
    audio.src = URL.createObjectURL("richard-wagner-the-valkyrie-the-ride-of-the-valkyries.mp3");
    audio.load('audio2');
    audio.play('audio2');
    audio.forEach((event) => {
        console.log(event)
    });
    console.log(event);
    }

playSong();

/*window.addEventListener("DOMContentLoaded", event => {

  const audio = document.getElementById("audio");
    isPlaying = true;
    audio.play(event);
}
);*/

