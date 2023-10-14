function setLine(arr) {
    console.log(arr)
    let line = document.querySelector('.line');
    line.classList.add('animate-line')

    // let animatedLine = document.querySelector('.animate-line');
    switch(arr) {
        case arr[0] === 0 && arr[2] === 2:
            line.style.top = '56px';
            break;
        case arr[0] == 3 && arr[2] == 5:
            animatedLine.style.top = '199px';
            break;
        case arr[0] == 6 && arr[2] == 8:
            animatedLine.style.bottom = '199px';
            break;
    }

    setTimeout(() => {
        line.classList.remove('animate-line');
    }, 1600)

}

export { setLine };