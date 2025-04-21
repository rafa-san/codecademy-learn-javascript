/*
Instructions

1. The sayThanks() function works well, but let’s add the customer’s name in the message.

Add a parameter called name to the function declaration for sayThanks().


2. With name as a parameter, it can be used as a variable in the function body of sayThanks().

Using name and string concatenation, change the thank you message into the following:

'Thank you for your purchase '+ name + '! We appreciate your business.'


Copy and paste the above message into your code.


3. A customer named Cole just purchased something from your online store. Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.


***


function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}
*/

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');