/*
Instructions

1. Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:

- Create a variable named plantNeedsWater using the const variable keyword.
- Assign an anonymous function that takes in a parameter of day to plantNeedsWater.


2. Now we need to add some code to the function body of plantNeedsWater():

- In the function body add an if conditional that checks day === 'Wednesday'.
- If the conditional is truthy, inside the if code block, use the return keyword to return true.


3. On days that aren’t 'Wednesday', plantNeedsWater() should return false:

- Add an else statement after the if statement.
- Inside the else statement use the return keyword to return false.


4. Call the plantNeedsWater() and pass in 'Tuesday' as an argument.


5. Let’s check that plantNeedsWater() returned the expected value.

Log plantNeedsWater('Tuesday') to the console. If it worked correctly, you should see false logged to the console.
*/

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));