/*
Instructions

1. Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem.

Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.


2. There are a couple of things we should do in the setter method:

. Add a check to see if num is a number using the typeof operator.
. num should also be greater than or equal to 0.
. If both conditions are met, reassign this._numOfSensors to num.


3. Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.


4. Use the numOfSensors setter method on robot to assign _numOfSensors to 100.

Using the setter method looks syntactically like reassigning a property.

robot.someSetterMethod = 9001;


5. To check that the setter method worked, console.log() robot.numOfSensors.

***

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  
};
*/

const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot.numOfSensors = 100;

console.log(robot.numOfSensors);