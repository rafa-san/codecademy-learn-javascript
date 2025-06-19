const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
}

//goat.makeSound();


/*
****************************/
const goat2 = {
  name: 'Billy',
  color: 'beige',
  giveDetails(){
    return `${this.name} is a ${this.color} goat.`
  }
};

//console.log(goat2.giveDetails()); // 'Billy is a beige goat.'


/*
****************************/
const goat3 = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  // diet: () => {
  //   console.log(this.dietType); // Prints undefined
  // }
  diet() {
    console.log(this.dietType); // Prints herbivore
  }
};

//goat3.diet();


/*
****************************/
// You can use the ES6 shorthand:

const goat4 = {
  name: 'Billy',
  color: 'biege',
  giveDetails() {
    console.log(`${this.name} is a ${this.color} goat.`)
  }
}

// Or the longhand format:

const goat5 = {
  name: 'Billy',
  color: 'biege',
  giveDetails: function() {
    console.log(`${this.name} is a ${this.color} goat.`)
  }
}


/*
****************************/
const numero = 55;
//console.log(typeof numero);

if (typeof numero === 'number') {
  //console.log('número');
} else {
  //console.log('não é um número');
}


/*
****************************/
const person = {
  _firstName: 'John',
  _lastName: '',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
person.fullName; // 'John Doe'

//console.log(person.fullName);


/*
****************************/
const robot = {
  _model: '1E78V2',
  _energyLevel: "100", // alternar string e número para ver o resultado
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level';
    }
  }
}

//console.log(robot.energyLevel);


/*
****************************/
const person2 = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      //console.log('You must assign a number to age');
    }
  }
};

person2.age = 40;
//console.log(person2._age); // Logs: 40
person2.age = '40'; // Logs: You must assign a number to age
//console.log(person2.age);


/*
****************************/
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
//ghost.scare(); // 'BOO!'


/*
****************************/
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

const { residence2 } = vampire; 
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'
