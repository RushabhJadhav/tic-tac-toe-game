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
        box[i].style.fontSize = '7rem';
        
        if(turn && boxClicked) {
            box[i].style.backgroundImage = "url('../images/Vector 5.png'";
            box[i].style.backgroundPosition = "center";
            box[i].style.backgroundRepeat = "no-repeat";
            box[i].style.color = '#fff';
            playerOne.push(i)
        } else {
            box[i].style.backgroundImage = "url('../images/Ellipse 5.png'";
            box[i].style.backgroundPosition = "center";
            box[i].style.backgroundRepeat = "no-repeat";
            playerTwo.push(i)
            box[i].style.color = '#54545';
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
            setTimeout(() => {
                alert('player one won')
            }, 200)
        } else if (plTwo) {
            setTimeout(() => {
                alert('player two won')
            }, 200)
        } else if(!plOne && !plTwo && !playerOne.length != 0 && !playerTwo.length != 0) {
            console.log('draw')
        }
    }
    console.log(playerOne)
    console.log(playerTwo)
}