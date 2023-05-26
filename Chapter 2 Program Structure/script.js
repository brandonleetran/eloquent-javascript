// expressions and statements
1;
false;

// bindings
let caught = 5 * 5;

let mood = "lights";
console.log(mood);
// --> light
mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;

let one = 1, two = 2;
console.log(one + two);
// --> 3

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// Hello Ayda

// binding names
// binding names may include dollar signs  or underscores, but no other punctuation mark

// the environment
// a collection of bindings and their values that exist at a given time is called the enivronment

// functions
// prompt("Enter password");

// executing a function is called invoking, calling, or applying

// the console.log function
console.log("hello world");

// return values
console.log(Math.max(2,4));
// --> 4

// control flow

/*
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}
*/

if (1 + 1 ==2) console.log("its true");
// --> it's true

/*
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber);

if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}
else {
  console.log("Why didn't you give me a number?");
}
*/

/*
let num = 125;
if (num < 10) {
  console.log("Less than 10");
}
else if (num <= 50) {
  console.log("Less than 50");
}
else {
  console.log("51 and up");
}
*/

let number = 0;
while(number <= 12) {
  number = number + 2;
  console.log(number); 
}

let result = 1;
let counter =0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
  console.log(result);
}

/*
let yourName;
do {
  yourName = prompt("Enter your name");
} while (!yourName);
console.log(yourName);
*/

// indenting code
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise here");
  }
}

// for loops
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}

// --> 0
// --> 2
// ...etc.

// breaking out of a loop
// break out of loop with the first number divisible by 7 starting at 20
for (let current = 20; current = current + 1;) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}

// a better way?
let countStart = 20;
while (countStart % 7 != 0) {
  countStart = countStart + 1;
}

console.log(countStart);

// updating bindings succinctly
// counter = counter + 1 can be counter += 1 or count++ for shorter
// similarly, counter = counter - 1 is counter -=1 but also counter--
// you can also do counter *= 1 but not counter**.. which doesn't make any sense lol

// using a switch instead of nested if's
// if (x == "value") action1();
// else if (x == "value2") action2();
// else if (x == "value3") action3();
// else defaultAction();

// switch(prompt("What is the weather like")) {
//  case "rainy":
//    console.log("Remember to bring an umbrella");
//    break;
//  case "sunny":
//    console.log("Dress lightly");
//  case "cloudy":
//    console.log("Go outside");
//    break;
//  default:
//    console.log("Unknown weather type!");
//  }

// capitalization
// when naming, we want to use camel case ie: fuzzyLittleTurtle

// comments
//
/* */

// EXERCISES

// full solutions are at https://eloquentjavascript.net/

// looping a triangle -- write a loop that makes seven calls to console.log to output the following triagle:
// *
// **
// ***
// ****
// *****
// ******
// *******

// it may be useful to know that you can find the length of a string by writing .length after it

// in a while loop
let stringBuilder = "";
while(stringBuilder.length < 7) {
  stringBuilder += "*";
  console.log(stringBuilder + "\n");
}

// in a for loop
let stringBuilder2 = "";
for (let i = 0; i < 7; i++) {
  stringBuilder2 += "*";
  console.log(stringBuilder2 + "\n");
}

// even better way
for (let line = "#"; line.length < 7; line += "#") console.log(line);

// fizzbuzz
// write a program that uses console.log to print all the numbers from 1 to 100.
// two exceptions:
// numbers divisible by 3, print "fizz"
// numbers divisible by 5, print "buzz"
// divisible by 3 and 5, print "fizzbuzz"

/*
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) console.log("fizzbuzz");
  else if (i % 3 == 0) console.log("fizz");
  else if (i % 5 == 0) console.log("buzz");
  else console.log(i);
}
*/

// one liner -- use ++i always instead of i++
for (let i = 1; i <= 15; ++i) console.log((i % 3 == 0 ? "fizz" : "") + (i % 5 == 0 ? "buzz" : "") || i);

// in this example, this is saying "fizzbuzz" || i.
// because fizzbuzz isn't a null, or empty, then it works.
console.log("fizzbuzz" || "default value");  // Output: fizzbuzz
console.log(10 || 20);  // Output: 10
console.log(undefined || "fallback");  // Output: fallbac,
console.log("" || 42);  // Output: 42

// chessboard
// write a program that creates a string that represents an 8x8 grid, using new line characters to sepeate lines.

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

// when you have a program that generates this pattern, define a binding size = 8 and change the program that it works for any size.
// ie: if size = 10, then it should be a 10x10 grid

let size = 11;
let board = "";

// i will be the line count
for (let i = 0; i < size; i++) {
  // j will be the # count inside of the line
  for (let j = 0; j < size; j++) {
    // if the line position + the index position is even (ie: 2,2 is the second line of the third index)
    if ((i + j) % 2 == 0) {
      board += " ";
    }
    // else it is an even line
    else {
      board += " #";
    }
  }
  board += "\n";
}

console.log(board);
