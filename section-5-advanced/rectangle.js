/* 
Create a function makeRectangle that will print an m by n rectangle of * to the screen

For example, makeRectangle(3,5) should print a 3 by 5 rectangle of *, as shown below:

 * * *
 * * *
 * * *
 * * *
 * * *

Try to complete this task without using for loops!
*/

function makeRectangle(m, n) {
  const newArray = [...Array(n).keys()]
  newArray.forEach((element) => {
    console.log("* ".repeat(m));
  });
}

// invoke the function below to test it
// Array(10) creates an array of 10 items
// .keys is an Array Iterator, the ... operator spreads the keys (arrays are secret objects so the keys are 1 - 10) into a new array

makeRectangle(5, 7);
console.log(Array(10).keys())
