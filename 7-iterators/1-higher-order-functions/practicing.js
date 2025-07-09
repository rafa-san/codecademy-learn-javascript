/*
****************************/
// const announceThatIAmDoingImportantWork = () => {
//   console.log("I’m doing very important work!");
// };

// announceThatIAmDoingImportantWork();



/*
****************************/
const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);
console.log(higherOrderFunc(anotherFunc));

// higherOrderFunc(() => {
//   for (let i = 0; i <= 10; i++){
//     console.log(i);
//   }
// });



/*
****************************/
/*
*/

// const myFunction = () => {
//   return 'Bola';
// }

// const HighOrder = (param) => {
//   param();
//   return param();
// }

// //myFunction();
// console.log('Palavra: ' + HighOrder(myFunction));