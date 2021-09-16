/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {

}

var pointer = new Dog();
var mastiff = new Dog();

console.log(pointer);
console.log(mastiff);

// Prompt 2: Snack
class Snack {

}

var chip = new Snack();
var stringCheese = new Snack();

console.log(chip);
console.log(stringCheese);

// Prompt 3: Shirt
class Shirt {

}

var longSleeve = new Shirt();
var shortSleeve = new Shirt();

console.log(longSleeve);
console.log(shortSleeve);

//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Puppy
class Puppy {
  constructor()  {
    this.name = 'River';
    this. weight = 66;
    this.neutered = true;
  }
}
var gsp = new Puppy();

// Prompt 2: Fruit
class Fruit {
  constructor()  {
    this.sweet = false;
    this.tart = true;
    this.color = 'green';
  }
}
var apple = new Fruit ();
console.log(apple);

// Prompt 3: Beverage
class Beverage {
  constructor()  {
    this.brand = 'Snapple';
    this.carbonated = true;
    this.can = false
  }
}
var lacroix = new Beverage();
console.log(lacroix);

//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog2 {
  constructor(type, weight, color) {
    this.breed = type;
    this.wght = weight;
    this.clr = color;
  }
}
var myDog = new Dog2('GSP', 66, 'Liver');
var otherDog = new Dog2('Mastiff', 110, 'Grey');

console.log(myDog);
console.log(otherDog);

// Prompt 2: Snack
class Snack2 {
  constructor(sour, chocolate, nuts) {
    this.isSour = sour;
    this.hasChocolate = chocolate;
    this.hasNuts = nuts;
  }
}
var snickers = new Snack2(false, true, true);
var kitkat = new Snack2(false, true, false);

console.log(snickers);
console.log(kitkat);

// Prompt 3: Shirt
class Shirt2 {
  constructor(material, longSleeve, collar) {
    this.madeOf = material;
    this.hasLongSleeves = longSleeve;
    this.hasCollar = collar;
  }
}
var polo = new Shirt2('Polyester', false, true);
var tshirt = new Shirt2('Cotton', false, false);

console.log(polo);
console.log(tshirt);
