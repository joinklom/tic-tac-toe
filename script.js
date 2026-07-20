

//DOM gameboard
const body = document.querySelector("body");
const container = document.querySelector("#container");


const gameboard = {};
const players = {
    playerOne : "X",
    playerTwo : "O",
    playerTurn : 1,
};
let turn = 1

/*
// FACTORY FUNCTION PER CREARE OGGETTI, MA NON SO A CHE DOVREBBE SERVIRMI?
function player(letter, turn, score){
    return {
        letter: letter,
        turn: turn,
        score: score
    };
}

let playerOne = player("X",1,0);
console.log(playerTwo);

*/
console.log(players.playerOne);
// An object with All valid combinations of equally written squares necessary for winning a game 
const victoryConditions = {
    vic1 : [1,5,9],
    vic2 : [3,5,7],
    vic3 : [1,4,7],
    vic4 : [2,5,8],
    vic5 : [3,6,9],
    vic6 : [1,2,3],
    vic7 : [4,5,6],
    vic8 : [7,8,9]
};
console.table(victoryConditions);  

//IIFE function for gameboard that makes the grid and assign to the gameboard object his squares keys
(function Gameboard(){
    for (let i=1; i<10; i++){
        let squareElement = "square"+i;
        gameboard[squareElement] = "";
        const gameboardDiv = document.createElement("div");
        gameboardDiv.id = squareElement;
        gameboardDiv.className = "square";
        container.append(gameboardDiv);
    }
    console.log(gameboard);
    return gameboard;
})()


//Functionality of squares
const squaresArray = document.querySelectorAll(".square");
for (let square of squaresArray){
    square.addEventListener("click", () =>{
        writeSquare(square)
        gameboard[square.id] = square.textContent;
        console.log(gameboard);
        checkWin(square.textContent);
    })
}

function writeSquare(square){
    if (square.textContent != ""){
        return;
    }
    if (players.playerTurn === 1){
        square.textContent = "X";
        return players.playerTurn = 2;
    } else {
        square.textContent = "O";
        return players.playerTurn = 1;
    }
}

//This checks for what is the last letter that has been wrote, and then look for the victoryConditions 
function checkWin(letter) {
    Object.keys(gameboard).forEach(key => {
        if (gameboard[key] === letter){   
            console.log(`is ${letter}`)
        }
    })
} 


// Dunno how to use this actually
let victory = false;
function Victory(sq1, sq2, sq3) {
    if (sq1 === sq2 && sq1 === sq3) {
        victory = true;
        return;
    } 
}




