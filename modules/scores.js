let playerOneScore = 0;
let playerTwoScore = 0;
let draw = 0;

function score(arg1, arg2, arg3) {
    // console.log(arg1, arg2, arg3)
    if(arg1) {
        playerOneScore++;
    } else if(arg2) {
        playerTwoScore++;
    } else {
        draw++;
    }
    localStorage.setItem('player one', playerOneScore)
    localStorage.setItem('player two', playerOneScore)
    localStorage.setItem('draw', draw)
    // console.log(playerOneScore, playerTwoScore, draw)
}

export { score }