# Objects

## Accessing Properties
There are two ways we can access an object’s property. Let’s explore the first way — dot notation, [.].

You’ve used dot notation to access the properties and methods of built-in objects and data instances:

| 'hello'.length; // Returns 5

With property dot notation, we write the object’s name, followed by the dot operator and then the property name (key):

| let spaceship = {
|   homePlanet: 'Earth',
|   color: 'silver'
| };
|
| spaceship.homePlanet; // Returns 'Earth',
| spaceship.color; // Returns 'silver',

If we try to access a property that does not exist on that object, undefined will be returned.

| spaceship.favoriteIcecream; // Returns undefined

Let’s get some more practice using dot notation on an object!