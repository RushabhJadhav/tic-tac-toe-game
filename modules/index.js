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
        if(turn) {
            box[i].innerHTML = "" && boxClicked ? "X" : "0";
            playerOne.push(i)
        } else {
            box[i].innerHTML = boxClicked ? "0" : "X";
            playerTwo.push(i)
        }
        checkWinner()
        console.log(playerOne)
    })
}

const winningCombinations = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
    [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
];


function checkWinner() {
    for(let arr of winningCombinations) {
        let plOne = arr.every(item => playerOne.includes(item))
        let plTwo = arr.every(item => playerTwo.includes(item))
        if(plOne) {
            alert('player one won')
        } else if (plTwo) {
            alert('player two won')
        } 
    }
    console.log(playerOne)
    console.log(playerTwo)
}