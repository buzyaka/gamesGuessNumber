'use strict';

// console.log(document.querySelector(`.guess-message`).textContent); // если class - то ".", а если id, то "#"; в манипуляциях, код выполняется один за одним подряд

// document.querySelector(`.guess-message`).textContent = `Правильно!`;

// console.log(document.querySelector(`.guess-message`).textContent); // показывает сразу после измениния

// document.querySelector(`.question`).textContent = 7;

// document.querySelector(`.score`).textContent = 11;

// console.log(document.querySelector(`.number-input`).value); // в Input менять только через VALUE = !!!

// document.querySelector(`.number-input`).value = 13;

// console.log(document.querySelector(`.number-input`).value);

// Event - действие на странице (клик, свайп и тд.)

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const eventHandler = function () {
    const guessingNumber = Number(document.querySelector(`.number-input`).value);
    console.log(guessingNumber, typeof guessingNumber);
    // No input
    if (!guessingNumber) {
        document.querySelector(`.guess-message`).textContent = `Введите число!`;

    // Player won
    } else if(guessingNumber === secretNumber) {
        document.querySelector(`.guess-message`).textContent = `Правильно!`;
        document.querySelector(`.question`).textContent = secretNumber;
        document.querySelector(`body`).style.backgroundColor = `rgb(9, 250, 21)`;
        document.querySelector(`.question`).style.width = `50rem`;
        
    if (score > highscore) {
        highscore = score;
        document.querySelector(`.highscore`).textContent = highscore;
    }

    // To high
    } else if(guessingNumber > secretNumber) {
        if (score > 1) {
        document.querySelector(`.guess-message`).textContent = `Слишком много!`;
        score--;
        document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.guess-message`).textContent = `Game over!`;
            document.querySelector(`.score`).textContent = 0;
        }

    // To low
    } else if(guessingNumber < secretNumber) {
        if (score > 1) {
            document.querySelector(`.guess-message`).textContent = `Слишком мало!`;
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            document.querySelector(`.guess-message`).textContent = `Game over!`;
            document.querySelector(`.score`).textContent = 0;
        }
    }
}

const buttonAgain = function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector(`.question`).textContent = `???`;
    document.querySelector(`.question`).style.width = `25rem`;
    document.querySelector(`.guess-message`).textContent = `Начни угадывать!`;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number-input`).value = ``;

    document.querySelector(`body`).style.backgroundColor = `rgb(0, 0, 0)`;
};

document.querySelector(`.check`).addEventListener(`click`, eventHandler);
document.querySelector(`.again`).addEventListener(`click`, buttonAgain);
/*********************************************************************************************************
     [ addEventListener ] - Добавления Метода слушателя событий, ожидает действие (которое записывается тут, в дужках)
*********************************************************************************************************/