var audio = document.getElementById('Carry-Me-Home');
var audio1 = document.getElementById('Andar-Conmigo');
var audio2 = document.getElementById('Limon-Sal');
var video = document.getElementById('video');
var contador = document.getElementById('conteo');

document.body.onclick = function() {
    document.body.onclick = null;
    video.playbackRate = 0.2;
    audio1.volume = 0.5;
    audio.volume = 0.2;
    audio.currentTime = 215.7;
    audio.play();
}