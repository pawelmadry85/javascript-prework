//********* Losowanie liczby przez skrypt. **********//

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba przez skrypt: ' + randomNumber);
let computerMove = getMoveName(randomNumber);

printMessage('Skrypt wylosował: ' + computerMove);

//********* Odczytanie ruchu gracza. **********//

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wybrał: ' + playerInput);
let playerMove = getMoveName(playerInput);

printMessage('Gracz wylosował: ' + playerMove);

//********* Przypisanie [ Kamień -1, Papier -2, Nożyce -3 ] **********//

function getMoveName(argMoveId) {
  if(argMoveId == 1) {
      return 'kamień';
  } else if (argMoveId == 2) {
      return 'papier';
  } else if (argMoveId == 3) {
      return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
  }
}

//********* Wyświetlanie wyniku. **********//

let argComputerMove = getMoveName(randomNumber);
let argPlayerMove = getMoveName(playerInput);
console.log('Wybrane ruchy: ', argComputerMove,' i ', argPlayerMove);

// function wyswietlPrint () {
// printMessage('Wybrane ruchy: ', argComputerMove, ' i ', argPlayerMove);
// }

function displayResult (argComputerMove, argPlayerMove) {

  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    return 'Ty wygrywasz!';
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      return 'Ty przegrywasz!';
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return 'Ty przegrywasz!';
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return 'Ty wygrywasz!';
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      return 'Ty przegrywasz!';
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return 'Ty wygrywasz!';
  } else if (argComputerMove == argPlayerMove) {
      return 'Jest Remis';
  } else if (argPlayerMove == 'nieznany ruch') {
      return 'Błędny ruch - wybierz ruch od 1 do 3!';
  } else {
    printMessage('Wynik: ' + displayResult(argComputerMove, argPlayerMove));
  }
}