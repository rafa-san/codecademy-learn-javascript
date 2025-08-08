const goat = {
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

goat.diet();