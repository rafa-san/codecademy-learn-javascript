/*
Instructions

1. Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.

- The first array element should hold the elements 1 and 2 in that order.
- The second array element should hold the elements 3 and 4 in that order.
- The third array element should hold the elements 5 and 6 in that order.


2. Awesome, you made a nested array! Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.
*/

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

console.log(target);