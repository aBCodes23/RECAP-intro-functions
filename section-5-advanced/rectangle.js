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

makeRectangle(5, 7);
