function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

// greeting('Nick') // Output: Hello, Nick!
// greeting() // Output: Hello, stranger!



/*
****************************/
function rectangleArea(width, height) {
  let area = width * height;
}

// console.log(rectangleArea(5, 7)) // Prints: undefined



/*
****************************/
function multiplyByNineFifths(number) {
  return number * (9/5);
  console.log(number);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};

//getFahrenheit(15); // Returns 59

// console.log(multiplyByNineFifths(2));



/*
****************************/
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};