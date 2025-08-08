const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    // console.log(dietType); // Output will be "ReferenceError: dietType is not defined"

    console.log(this.dietType);
  }
};

goat.makeSound();
goat.diet();