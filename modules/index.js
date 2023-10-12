const playerOne = [];
const playerTwo = [];

const box = document.getElementsByClassName('box');
let boxClicked = false;

// console.log(box)

for(let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', () => {
        boxClicked = !boxClicked;
        box[i].innerHTML = boxClicked ? "X" : "0";
        playerOne.push(i)
        console.log(playerOne)
    })
}

const winningCombinations = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9],
    [1, 4, 7],[2, 5, 8],[3, 6, 9],
    [1, 5, 9],[3, 5, 7]
];

function checkWin() {
    for(let i of winningCombinations) {
        console.log(i)
    }
}