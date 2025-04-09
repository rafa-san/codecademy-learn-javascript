/*
Instructions

1. Inside of a console.log(), create a random number with Math.random(), then multiply it by 100.


2. Now, use Math.floor() to make the output a whole number.

Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().


3. Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a given number.

Use this method with the number 43.8. Log the answer to the console.

HINT: Use the .ceil() method to calculate the smallest integer greater than or equal to 43.8.


4. Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer.

Put the number 2017 in the parentheses of the method and use console.log() to print the result.

HINT: Use the .isInteger() method from the Number object to check if 2017 is an integer.

See an example of how to use .isInteger() and log the result:

| console.log(Number.isInteger(34.2)); // Prints false
*/

// #1
console.log(Math.random() * 100);

// #2
console.log(Math.floor(Math.random() * 100));

// #3
console.log(Math.ceil(43.8));

// #4
console.log(Number.isInteger(2017));