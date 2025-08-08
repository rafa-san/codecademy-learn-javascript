// METHODS: ES6 shorthand:

const goat4 = {
  name: 'Billy',
  color: 'biege',
  giveDetails() {
    console.log(`${this.name} is a ${this.color} goat.`)
  }
}

// METHODS: longhand format:

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
  // console.log('número');
} else {
  // console.log('não é um número');
}