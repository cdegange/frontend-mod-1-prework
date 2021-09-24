// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
//Create a function buildABear with parameters name, age, fur, clothes, specialPower
function buildABear(name, age, fur, clothes, specialPower) {
  //Create a variable, greeting, using interpolation and the name argument
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //create a demographic variable which is an array with at least 2 items within
  var demographics = [name, age];
  //create a variable powerSaying concatenating specialPower into a string
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //create a variable builtBear, as an object, with keys basicInfo, clothes, exterior, cost, sayings [], isCuddly
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

//return builtBear

  return builtBear
}
//call the buildABear function twice with proper arguments

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz

/*Create a function, fizzBuzz with parameters num1, num2, range
iterate from 0 to end of range(parameter)
*/
function fizzBuzz(num1, num2, range) {
  for (var i = 0; i <= range; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
    } else if (i % num1 === 0) {
      console.log('fizz');
    } else if (i % num2 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(3, 5, 100);
fizzbuzz(5, 8, 400);
