const stone= 'kamień';
const scissors = 'nożyce';
const paper = 'papier';

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

  /**
   * Describe this function...
   */
  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return stone;
    } else if (argMoveId == 2) {
      return paper;
    } else if (argMoveId == 3) {
      return scissors;
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return stone;
    }
  }

  /**
   * Describe this function...
   */
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == paper && argComputerMove == stone) {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == stone && argComputerMove == scissors) {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == scissors && argComputerMove == paper) {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  console.log('wybór ruchu gracza to: ' + playerInput);
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
