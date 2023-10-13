import { checkWinner } from "./modules/gameLogic.js";

const playerOne = [];
const playerTwo = [];

const box = document.getElementsByClassName('box');
let boxClicked = false;
let turn = false;

// console.log(box)

for(let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', () => {
        boxClicked = !boxClicked;
        turn = !turn;
        
        if(turn && boxClicked) {
            box[i].style.backgroundImage = "url('../images/Vector 5.png'";
            playerOne.push(i)
        } else {
            box[i].style.backgroundImage = "url('../images/Ellipse 5.png'";
            playerTwo.push(i)
        }
        checkWinner(playerOne, playerTwo)
    })
}