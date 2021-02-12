document.getElementsByTagName('button')[0].addEventListener('click', refresh);

let p1Score = randomInt(1, 6);
let p2Score = randomInt(1, 6);

let p1 = document.querySelector('.img1');
p1.setAttribute('src', './assets/images/dice' + p1Score + '.png');

let p2 = document.querySelector('.img2');
p2.setAttribute('src', './assets/images/dice' + p2Score + '.png');

validateWinner(p1Score, p2Score);

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function validateWinner(p1Score, p2Score) {

    if (p1Score === p2Score) 
        document.getElementsByTagName('h1')[0].textContent = 'Draw! ☠';

    if (p1Score > p2Score) 
        document.getElementsByTagName('h1')[0].textContent = 'Player 1 Wins! 🎉';

    if (p2Score > p1Score) 
        document.getElementsByTagName('h1')[0].textContent = 'Player 2 Wins! 🎉';
}

function refresh() {
    location.reload();
}