const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.');
  }
};

// console.log(alienShip.invade());



/*
OU
****************************/
const alienShip2 = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.');
    return 'Bye'
  }
};

console.log(alienShip2.invade());