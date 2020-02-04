{
//********* Cała funkcja playGame **********//

function playGame(playerInput) {
	
	clearMessages();
	console.log ('clearMessages: ' + clearMessages());
	
	//********* Losowanie liczby przez skrypt. **********//
	
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba przez skrypt: ' + randomNumber);
	const computerMove = getMoveName(randomNumber);
	
	//********* Odczytanie ruchu gracza. **********//
	
	//const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	console.log('Gracz wybrał: ' + playerInput);
	const playerMove = getMoveName(playerInput);
	
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
	};
	
	//********* Wyświetlanie wyniku. **********//
	
	const displayResult = function(argComputerMove, argPlayerMove) {
		
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
			return 'błąd - nic tu nie gra!';
		}
	}
	printMessage(displayResult(computerMove, playerMove));
};

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});
}; 