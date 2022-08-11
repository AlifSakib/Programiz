// !1. JavaScript Program To Print Hello World

console.log("Hello World");
//document.write();
//alert();

// !2. JavaScript Program to Add Two Numbers

const num1 = 5;
const num2 = 3;

// add two numbers
const sum = num1 + num2;

// display the sum
console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

// !3. JavaScript Program to Find the Square Root

// ?To find the square root of a number in JavaScript, you can use the built-in Math.sqrt() method.

// ?If 0 or a positive number is passed in the Math.sqrt() method, then the square root of that number is returned.
// ?If a negative number is passed, NaN is returned.
// ?If a string is passed, NaN is returned.

// !4. JavaScript Program to Calculate the Area of a Triangle

// let area = (base * height) / 2;

// Herons' formula. s = (a+b+c)/2
//area = √(s(s-a)*(s-b)*(s-c))

// !5. JavaScript Program to Swap Two Variables

//create a temporary variable
// let temp;

//swap variables
/* temp = a;
a = b;
b = temp; */

//using destructuring assignment for swaping variables

// [a, b] = [b, a];

// XOR operator using Bitwise Operator
// Link : https://www.programiz.com/javascript/bitwise-operators
/* a = a ^ b;
b = a ^ b;
a = a ^ b; */

// !6. Javascript Program to Solve Quadratic Equation

//* ax2 + bx + c = 0, where a, b and c are real numbers and a != 0

/* To find the roots of such equation, we use the formula,
(root1,root2) = (-b ± √b2-4ac)/2 . √b2-4ac this part is called discriminant .
 */

/* let root1, root2;

let a = 1;
let b = -6;
let c = 9;

let discriminant = b ** 2 - 4 * a * c;

// let discriminant2 = b * b - 4 * a * c;
console.log(discriminant);
if (discriminant > 0) {
  root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
  root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
} else if (discriminant == 0) {
  root1 = root2 = -b / (2 * a);
} else if (discriminant < 0) {
  root1 = -b / (2 * a) + (i * Math.sqrt(discriminant)) / (2 * a);
  root2 = -b / (2 * a) - (i * Math.sqrt(discriminant)) / (2 * a);
}

console.log(root1, root2); */

// !7. JavaScript Program to Convert Kilometers to Miles

// ?We know that 1 kilometer is equal to 0.621371 miles.

/* function KiloToMiles(kilometer) {
  const factor = 0.621371;

  return kilometer * factor;
}

console.log(KiloToMiles(3.35));

function milesToKilo(mile) {
  const factor = 0.621371;

  return mile / factor;
}

console.log(milesToKilo(2.1)); */

// !8. Javascript Program to Convert Celsius to Fahrenheit

// !13. JavaScript Program to Check Prime Number

function checkPrime(number) {
  for (i = 2; i < number; i++) {
    if (number % i != 0) {
      return `${number} is a prime number`;
    } else {
      return "Not a Prime number";
    }
  }
}

console.log(checkPrime(23));

lowerNumber = 5;
higherNumber = 15;

for (let i = lowerNumber; i <= higherNumber; i++) {
  let flag = 0;

  // looping through 2 to user input number
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = 1;
      break;
    }
  }

  // if number greater than 1 and not divisible by other numbers
  if (i > 1 && flag == 0) {
    console.log(i);
  }
}
