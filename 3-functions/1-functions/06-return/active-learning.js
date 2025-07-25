/*
Instructions

1. Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!

Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.


2. Let’s compute the number of monitors by multiplying rows and columns and then returning the value.

In the function body of the function you just wrote, use the return keyword to return rows * columns.


3. Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns.

Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.


4. To check that the function worked properly, log numOfMonitors to the console.
*/

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);