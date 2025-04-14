/*
Instructions

1. Using the let keyword, declare a variable named sale. Assign the value true to it.


2. Now create an if statement. Provide the if statement a condition of sale.

Inside the code block of the if statement, console.log() the string 'Time to buy!'.


3. Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console.

Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.
*/

let sale = true;
sale = false;

if (sale) {
  console.log('Time to buy!');
}