const stone= 'kamień';
const scissors = 'nożyce';
const paper = 'papier';
const win = 'Wygrywasz!';
const loss = 'Przegrywasz :(';
const tie = 'Remis!';

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  let argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber;

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return stone;
    } else if (argMoveId == 2) {
      return paper;
    } else if (argMoveId == 3) {
      return scissors;
    }
  }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == paper && argComputerMove == stone) {
      printMessage(win);
    } else if (argPlayerMove == stone && argComputerMove == scissors) {
      printMessage(win);
    } else if (argPlayerMove == scissors && argComputerMove == paper) {
      printMessage(win);
    } else if (argPlayerMove == argComputerMove) {
      printMessage(tie);
    } else {
      printMessage(loss);
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

}

var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function() {
  buttonClicked(stone);
});

buttonPaper.addEventListener('click', function() {
  buttonClicked(paper);
});

buttonScissors.addEventListener('click', function() {
  buttonClicked(scissors);
});
