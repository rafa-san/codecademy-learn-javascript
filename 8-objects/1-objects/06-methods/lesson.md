# Objects

## Methods
**When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.**

Do object methods seem familiar? That’s because you’ve been using them all along! For example console is a global JavaScript object and .log() is a method on that object. Math is also a global JavaScript object and .floor() is a method on it.

We can include methods in our object literals by creating ordinary, colon-separated key-value pairs. The key serves as our method’s name, while the value is an anonymous function expression.

| const alienShip = {
|   invade: function () { 
|     console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.');
|   }
| };

With the new method syntax introduced in ES6 we can omit the colon and the function keyword.
| 
| const alienShip = {
|   invade () { 
|     console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
|   }
| };

Object methods are invoked by appending the object’s name with the dot operator followed by the method name and parentheses:

| alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'