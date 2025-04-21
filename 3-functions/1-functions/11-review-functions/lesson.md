# Functions

## Review Functions
In this lesson, we covered some important concepts about functions:

1. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.


2. A function declaration.

| function greetWorld() {
|   console.log('Hello, World');
| }


3. A parameter is a named variable inside a function’s block which will be assigned the value of the argument passed in when the function is invoked.

| function calculateArea(width, height) {
|   console.log(width * height);
| }


4. To call a function in your code.

| greetWorld();


5. ES6 introduces new ways of handling arbitrary parameters through default parameters which allow us to assign a default value to a parameter in case no argument is passed into the function.


6. To return a value from a function, we use a return statement.


7. To define a function using function expressions.

| const calculateArea = function(width, height) {
|   const area = width * height;
|   return area;
| }


8. To define a function using arrow function notation:

| const rectangleArea = (width, height) => {
|   let area = width * height;
|   return area;
| }


9. Function definition can be made concise using concise arrow notation:

| // SINGLE-LINE BLOCK
| const sumNumbers = number => number + number;
| 
| // MULTI-LINE BLOCK
| const sumNumbers = number => {
|   const sum = number + number;
|   return sum; // RETURN STATEMENT
| };


It’s good to be aware of the differences between function expressions, arrow functions, and function declarations. As you program more in JavaScript, you’ll see a wide variety of how these function types are used.