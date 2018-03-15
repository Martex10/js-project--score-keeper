let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let p1Display = document.querySelector("#p1Display");
let P2Display = document.getElementById("p2Display");
let restButton = document.querySelector("#reset");
let numInput = document.querySelector("input[type='number']");
let winningScoreDisplay = document.querySelector("p span");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;
p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            p1Display.classList.add("winner");
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            p2Display.classList.add("winner");
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

restButton.addEventListener("click", function(){
    reset();
});

numInput.addEventListener("change", function(){
    reset();
    winningScore = Number(this.value) ;
    winningScoreDisplay.textContent = winningScore;
});
 const reset = function(){
    p1Score = 0;
    p2Score = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    gameOver = false;
 };