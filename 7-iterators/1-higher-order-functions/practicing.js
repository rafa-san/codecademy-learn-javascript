/*
****************************/
const announceThatIAmDoingImportantWork = () => {
  console.log("I’m doing very important work!");
};

//announceThatIAmDoingImportantWork();

const busy = announceThatIAmDoingImportantWork;
//console.log(busy()); // I’m doing very important work!



/*
****************************/
const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

// console.log(higherOrderFunc(anotherFunc));

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});



/*
****************************/
const myFunction = () => {
  return 'Futebol';
}

const HighOrder = (param) => {
  param();
  return param();
}

//myFunction();
//console.log('Palavra: ' + HighOrder(myFunction));