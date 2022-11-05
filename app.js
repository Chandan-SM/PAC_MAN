const username = document.getElementById("username-field")
const nickname = document.getElementById("text-field")

const start=document.getElementById("start_btn")
start.onclick = () => {
    location.href="./game.html"
    storename()
}
function storename() {
    localStorage.setItem('userid',username.value)
    localStorage.setItem('user',nickname.value)
}
