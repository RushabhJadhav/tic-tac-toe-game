const winningCombinations = [
    [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
    [1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
];


function checkWinner(playerOne, playerTwo) {
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

export { checkWinner }