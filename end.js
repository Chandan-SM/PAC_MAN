const startagain=document.getElementById("startagain");
const home=document.getElementById("home");
startagain.onclick=()=>{
    location.href="./game.html";
    storename();
}

let printscore= localStorage.getItem("pscore")
let printname=localStorage.getItem("user")

// let printhighscore;
// if(printscore>printhighscore){
// printhighscore=highscore;
// localStorage.setItem("highscore",highscore);
// document.getElementById("highscore").innerHTML = "High Score : "+printhighscore;
// }

home.onclick=()=>{
    location.href="./index.html";
}

if(printscore>474)
document.getElementById("quote").innerHTML ="GREAT GAME";
else if(printscore>0&&printscore<=100)
document.getElementById("quote").innerHTML ="NOT FIT FOR PLAYING GAMES";
else if(printscore>100&&printscore<=274)
document.getElementById("quote").innerHTML ="COULD PLAY BETTER";
else if(printscore>274&&printscore<=374)
document.getElementById("quote").innerHTML ="BETTER THAN MANY PEOPLE";
else 
document.getElementById("quote").innerHTML ="FIT FOR NOTHING";

document.getElementById("namescore").innerHTML = printname+" Scored : "+printscore;