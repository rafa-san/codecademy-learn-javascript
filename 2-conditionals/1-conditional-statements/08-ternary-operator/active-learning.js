/*
Instructions

1. Refactor, or edit, the first if...else block to use a ternary operator.


2. Refactor the second if...else block to use a ternary operator.


3. Refactor the third if...else block to use a ternary operator.

***

let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
*/

let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

/*
****************************/
let isCorrect = true;

isCorrect 
  ? console.log("Correct!")
  : console.log("Incorrect!");

/*
****************************/
let favoritePhrase = "Love That!";

favoritePhrase === "Love That!"
  ? console.log("I love that!")
  : console.log("I don't love that!");