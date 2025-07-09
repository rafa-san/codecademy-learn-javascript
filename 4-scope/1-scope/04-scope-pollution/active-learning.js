/*
Instructions

1. Let’s see what happens if we create a variable that overwrites a global variable.

Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such:

| stars = 'Sirius';


2. Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console.

You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.


***


const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); // Night Sky: The Moon, Sirius, The Milky Way
console.log(stars); // Sirius