

//DOM gameboard
const body = document.querySelector("body");
const container = document.querySelector("#container");


const gameboard = {};
const players = {
    playerTurn : 2,
};

//IIFE function for gameboard that makes the grid and assign to the gameboard object his squares keys
(function Gameboard(){
    for (let i=0; i<9; i++){
        let squareElement = "square"+i;
        gameboard[squareElement] = "";
        const gameboardDiv = document.createElement("div");
        gameboardDiv.id = squareElement;
        gameboardDiv.className = "square";
        container.append(gameboardDiv);
    }
    //console.log(gameboard);
    return gameboard;
})()


//Functionality of squares, gameboard squares are going to function like buttons
const squaresArray = document.querySelectorAll(".square");
for (let square of squaresArray){
    if (players.playerTurn === 1){
        square.addEventListener("click", () =>{
            square.textContent = "X";    
        })
    }
    else {
        square.addEventListener("click", () =>{
            square.textContent = "O";    
        })
    }
    
}