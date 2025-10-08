/*
****************************/
const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // blue 
}

// console.log(typeof logSkyColor); // function
// logSkyColor(); // blue



/*
****************************/
const color = 'blue';

const returnSkyColor = () => {
  return color; // blue 
};

// console.log(returnSkyColor()); // blue



/*
****************************/
const logSkyColor2 = () => {
  let color = 'blue';
  console.log(color); // Prints "blue"
};

// logSkyColor2(); // Prints "blue"
// console.log(color); // throws a ReferenceError



/*
****************************/
let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  // se declarar essa variável usando let, o número lá embaixo no console será 50
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100



/*
****************************/
// block scope
const logSkyColor3 = () => {
  const dusk = true;
  let color = 'blue';
  if (dusk) {
    let color = 'pink';
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError