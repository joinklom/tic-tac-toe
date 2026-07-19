

//DOM gameboard
const body = document.querySelector("body");
const container = document.querySelector("#container");

//  IIFE function for gameboard
(function Gameboard(){
    const gameboard = [];
    for (let i=0; i<9; i++){
        let squareElement = "square"+i;
        gameboard.push(squareElement);
        const gameboardDiv = document.createElement("div");
        gameboardDiv.id = squareElement;
        gameboardDiv.className = "square"
        container.append(gameboardDiv)
    }
    console.log(gameboard)
    return gameboard
})();
