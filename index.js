// Javascript Assignment 10

// 1. Are Higher Order functions and Call back functions the same ? If not,
// briefly explain about both functions.

// Answer
// =>

/*
 
    # Higher Order functions : 
    A higher order function is a function that takes a function as an argument, or returns a function

    # Callback functions : 
    A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

    Hence, Higher-Order Functions(HoF) and Callback Functions(CB) are different.

 */

// 2. Is filter a Higher Order function in Javascript ? If yes, why ?

// Answer
// =>

/*

    Yes, as HOF, as is a method that helps to filter the array. The filter function takes in a call back that returns either true or false value. Those items in the array that return the true value on the test condition will be the element of the new filtered array.
*/

// 3. Give an example of a Higher Order function and a call back function
// used in the same program.

// Answer
// =>

const sum = (a, b) => a + b;
const multiply = (a, b, c, d) => sum(a, b) * sum(c, d);

// 4. Carefully check the example below:
// a) What will be the output of this program ?
// b) Which function is a Higher Order function here ?

// Answer
// =>

const names = ["John", "Tina", "Kale", "Max"];
function useFunction(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[I]);
  }
}
function argFn(name) {
  console.log("Hello " + name);
}
useFunction(names, argFn);

// Answer
// =>

/*
a)
Hello John
Hello Tina
Hello Kale
Hello Max

b) useFunction
*/
