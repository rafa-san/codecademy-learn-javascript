/*
Instructions

Feel free to play around with the code in the workspace.

- What happens if you change the value of 2 in checkA?
- Which variable holds the callback function?
- What happens if you invoke the function’s argument?

In the following lesson, you’ll learn how higher-order functions are used in some of the most important and widely-used JavaScript methods, iterators!
*/

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  console.log(checkA);
  const checkB = func(val);
  console.log(checkB);

  if (checkA === checkB) {
    return func(val);
  } else {
    return 'inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 5));