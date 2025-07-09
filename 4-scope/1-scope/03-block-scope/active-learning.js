/*
Instructions

1. In main.js, define a function logVisibleLightWaves().


2. Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.


3. Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.


4. Call the logVisibleLightWaves() function from outside the function.


5. Beneath the function call, log the value of lightWaves to the console from outside the function.

You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!
*/

function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);