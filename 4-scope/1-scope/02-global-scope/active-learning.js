/*
Instructions

1. At the top of main.js, write three global variables:

- Name the first variable satellite and set it equal to 'The Moon'.
- Name the second variable galaxy and set it equal to 'The Milky Way'.
- Name the third variable stars and set it equal to 'North Star'.


2. Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this:

| return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;


3. Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console.

You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.
*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());