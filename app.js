const username = document.getElementById("username-field")
const nickname = document.getElementById("text-field")

let audio = new Audio("./images/main.mp3")
setTimeout( () => {
    audio.play();
    audio.loop = true;
}, 10);

const start=document.getElementById("start_btn")
start.onclick = () => {
    location.href="./game.html"
    storename()
}
function storename() {
    localStorage.setItem('userid',username.value)
    localStorage.setItem('user',nickname.value)
}
