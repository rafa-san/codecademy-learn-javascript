/*
****************************/
const stopLight = 'green';
const pedestrians = 1;

if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}



/*
****************************/
const day = 'Sunday';

if (day === 'Saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend!');
} else {
  console.log('Do some work.');
}



/*
****************************/
let excited = true;
console.log(!excited); // false

let sleepy = false;
console.log(!sleepy); // true