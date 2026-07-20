
const body = document.querySelector("body");
const container = document.querySelector("#container");

const gameboard = {};
let turn = 1
// We create the two players with a factory function
function player(name, letter, turn, combo, score){
    return {
        name : name,
        letter: letter,
        turn: turn,
        combo: [],
        score: score
    };
}
const playerOne = player("playerOne","X",1,[],0);
const playerTwo = player("playerTwo","O",2,[],0);

console.log(playerOne)
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
    console.table(gameboard);
    return gameboard;
})()






////////////////// *******************************************************

function writeSquare(square){
    if (square.textContent != ""){
        return;
    }
    if (turn === 1){
        square.textContent = playerOne.letter;
        turn = 2;
    } else {
        square.textContent = playerTwo.letter;
        turn = 1;
        return lastPlayerTurn = playerTwo.name;
    }
}

// This below compares the combo score of the players object with the arrays inside the victory conditions object
function checkVictory(player) {
    for (let key of Object.keys(victoryConditions)) {
        if (player.combo.includes(`square${victoryConditions[key][0]}`) &&
            player.combo.includes(`square${victoryConditions[key][1]}`) &&
            player.combo.includes(`square${victoryConditions[key][2]}`)) {
            victory = true;
            winner = player;
            console.log(winner.name);
            return;
        }
    } 
}


function endGame(winner) {
    if (victory === true) {
        const children = document.querySelectorAll(".square")
        for (let i=0; i<children.length; i++) {
            children[i].style = "display: none";
            container.textContent = `${winner.name} has Won!`;
            container.style = "background-color: rgb(5, 248, 17); font-size: 100px; text-align: center";
        }
    }
}

//This checks for what is the last letter that has been wrote,
// and pushes to an array in the respective player combo array the squareNumber that has been wrote by
// that player; 
// and then look for the victoryConditions 
function checkState(letter) {
    Object.keys(gameboard).forEach(key => {
        if (gameboard[key] === letter){   
            console.log(`${key} is ${letter}`)
            if (letter === playerOne.letter) {
                if (playerOne.combo.includes(key)) {
                    return lastPlayerTurn = playerOne.name;
                } playerOne.combo.push(key);
            } else {
                if (playerTwo.combo.includes(key)) {
                    return lastPlayerTurn = playerTwo.name;
                } playerTwo.combo.push(key);                
            }
            console.log(playerOne)
            console.log(playerTwo)
        }
    })
     
} 


//Game
let lastPlayerTurn = ""
let winner = "" 
let victory = false;
function game (){
    const squaresArray = document.querySelectorAll(".square");
    for (let square of squaresArray){
        square.addEventListener("click", () =>{
            writeSquare(square)
            // This below compiles the gameboard array correctly
            gameboard[square.id] = square.textContent;
            checkState(square.textContent);
            checkVictory(playerOne);
            checkVictory(playerTwo);
            endGame(winner);
        })
    }
}



game();



