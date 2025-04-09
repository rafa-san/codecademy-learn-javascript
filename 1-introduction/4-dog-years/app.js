/*
Tasks

1. Create a variable named myAge, and set it equal to your age as a number.

Write a comment that explains this line of code.


2. Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change.

Write a comment that explains this line of code.


3. Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears.


4. Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.

Set the result equal to a variable called laterYears. We’ll be changing this value later.

Write a comment that explains this line of code.


5. Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years. Use the multiplication assignment operator to multiply and assign in one step.

Write a comment that explains this line of code.


6. If you’d like to check your work at this point, print earlyYears and laterYears to the console. Are the values what you expected?

Check off this task when you’re ready to move on.


7. Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.

Write a comment that explains this line of code.


8. Let’s use a string method next.

Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.

The toLowerCase method returns a string with all lowercase letters.

Write a comment that explains this line of code.


9. Write a console.log statement that displays your name and age in dog years. Use string interpolation to display the value in the following sentence:

| My name is NAME. I am HUMAN AGE years old in human years which is DOG AGE years old in dog years.

Replace NAME with myName, HUMAN AGE with myAge, and DOG AGE with myAgeInDogYears in the sentence above.

Write a comment that explains this line of code.


10. Great work! You can convert any human age to dog years. Try changing myAge and see what happens.

If you’d like extra practice, try writing this project without the *= operator.
*/



// Declarando uma variável para guardar minha idade
const myAge = 42;

// Referência aos dois primeiros anos de vida de um cachorro
let earlyYears = 2;

earlyYears *= 10.5;

// Variável que será usada para calcular além dos dois primeiros anos
let laterYears = myAge - 2;

// Fórmula para calcular o número de anos caninos contabilizados pelos seus últimos anos
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// Variável que irá somar earlyYears e laterYears
const myAgeInDogYears = earlyYears + laterYears;

// Converter meu nome para letras minúsculas
let myName = "Rafael".toLowerCase();

// Exibir o resultado no console.log()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.
`);


/*
Code Review

1. 
Consider adding error handling for negative ages or non-numeric input to make the code more robust.

Our Suggestion:

| const myAge = 22;
| if (myAge < 0 || isNaN(myAge)) {
|   console.log('Please enter a valid age.');
| }


2.
You could improve the code by encapsulating the logic in a function to make it reusable for different ages.

Our Suggestion:

| function calculateDogYears(humanAge) {
|   let earlyYears = 2 * 10.5;
|   let laterYears = (humanAge - 2) * 4;
|   return earlyYears + laterYears;
| }
| const myAgeInDogYears = calculateDogYears(myAge);
*/