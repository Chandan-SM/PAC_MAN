let audio = new Audio("./images/main.mp3")
setTimeout( () => {
    audio.play();
    audio.loop = true;
}, 10);
