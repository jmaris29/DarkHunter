//game screen
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const background = new Image();
background.src = "background.png";

canvas.width = 600;
canvas.height = 600;
//game stuff

function Game(){
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}