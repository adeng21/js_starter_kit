var yourName = prompt("Welcome to the Guess the Number game. What is your name?");

var randomNumber = Math.floor(Math.random()*501);

while (guess != randomNumber){

var guess = prompt("Hello " + yourName + ', please guess a number between 0 and 500');

  if( guess > randomNumber){
    alert(yourName + ', your guess is too high, please try again');

  }else if(guess < randomNumber){
    alert(yourName + ', your guess is too low, please try again');
  }
  else{
    alert("Congratulations! You've guessed the right number!");
  }
}


