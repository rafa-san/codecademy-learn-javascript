/*
Instructions

1. Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.


2. Let’s see if we can find the index of the first animal that starts with the letter 's'.

Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
*/

const animals = [
  "hippo",
  "tiger",
  "lion",
  "seal",
  "cheetah",
  "monkey",
  "salamander",
  "elephant",
];

const foundAnimal = animals.findIndex((animal) => {
  return animal === "elephant";
});

//console.log(foundAnimal); // 7
//console.log(animals[7]); // elephant



// const startsWithS = animals.findIndex((letterS) => {
//   return letterS.charAt(0) === "s";
// });


// outra forma:

const startsWithS = animals.findIndex(letterS => {
  return letterS[0] === 's';
});


console.log(startsWithS);
console.log(animals[3]);


const checar = animals[3] === 'seal' ? 'sim' : 'não';
console.log(checar);