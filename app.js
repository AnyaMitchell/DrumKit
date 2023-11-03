const welcome = document.querySelector(".welcome");

window.addEventListener("click", (e) => {
    welcome.classList.add("hide");
  
})

function removeTransition(e){
    if(e.propertyName !== "transform") return;
}

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition))
window.addEventListener("keydown", playSound);

function sound1(){
    let snd = new Audio('./sounds/tink.wav')
    snd.play()
}
function sound2(){
    let snd = new Audio('./sounds/clap.wav')
    snd.play()
}
function sound3(){
    let snd = new Audio('./sounds/openhat.wav')
    snd.play()
}
function sound4(){
    let snd = new Audio('./sounds/boom.wav')
    snd.play()
}
function sound5(){
    let snd = new Audio('./sounds/ride.wav')
    snd.play()
}
function sound6(){
    let snd = new Audio('./sounds/hihat.wav')
    snd.play()
}
function sound7(){
    let snd = new Audio('./sounds/snare.wav')
    snd.play()
}
function sound8(){
    let snd = new Audio('./sounds/kick.wav')
    snd.play()
}
function sound9(){
    let snd = new Audio('./sounds/tom.wav')
    snd.play()
}