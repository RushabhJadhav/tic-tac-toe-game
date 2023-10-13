import { score } from "./scores.js";

const winningCombinations = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
    [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
];

let box = document.getElementsByClassName('box');

function checkWinner(playerOne, playerTwo) {
    for(let arr of winningCombinations) {
        let plOne = arr.every(item => playerOne.includes(item))
        let plTwo = arr.every(item => playerTwo.includes(item))
        
        if(plOne) {
            setTimeout(() => {
                alert('player one won')
                emptyBoxes(playerOne, playerTwo)
                score(true, false , false)
            }, 200)
        } else if (plTwo) {
            setTimeout(() => {
                alert('player two won')
                emptyBoxes(playerOne, playerTwo)
                score(false, true , false)
            }, 200)
        } else if(!plOne && !plTwo && playerOne.length == 5 || playerTwo.length == 5) {
            console.log('draw')
            emptyBoxes(playerOne, playerTwo)
            score(false, false , true)
        }
    }
    console.log(playerOne)
    console.log(playerTwo)
}

function emptyBoxes(playerOne, playerTwo) {
    setTimeout(() => {
        for(let i of box) {
            i.style.backgroundImage = "none";
        }
    }, 200)
    // playerOne = [];
    // playerTwo = [];
}

export { checkWinner }