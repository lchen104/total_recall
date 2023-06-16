// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Ariel";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//BOOLEANS

// const a = 4; 
// const b = 53; 
// const c = 57; 
// const d = 16; 
// const e = 'Kevin';

// console.log(a < b); 
// console.log(c > d); 
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false); 
// console.log(false && false && false && false && false || true); 
// console.log(false === false) 
// console.log(e === 'Kevin'); 
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
} 

console.log(moo(animal));
//Driver's Ed

//LOOPS

//The Basics

//Get Even

//Give Me 5

//Savings Account

//ARRAYS & CONTROL FLOW

//OBJECTS


// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)

//////////////////////////// Original app.js file above this line
//////////////////////////// LEO START
// ## Q + A
// 1. How do we assign a value to a variable?
let name = "Leo";

// 2. How do we change the value of a variable?
name = "Mike";

// 3. How do we assign an existing variable to a new variable?
let newVar = oldVar;

// 4. Remind me, what are declare, assign, and define?

// Declare is to let js know that there is a variable `let a;`
// To assign a value to the variable. I need to use `=`.
// For example: `let a = 0`

// ### Research 

// 5. What is pseudocoding and why should you do it?

// Pseudocoding is writing code in plain spoken language that humans can understand.

// It's important because it allows you to write the logic and steps of the you want to accomplish in code without worrying about the rigid syntax.

// Psuedocode allows us to break down problems into solvable peices that can be transfered to code. 

// Psudocode is the bridge between our minds and the code. 

// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// ## Strings

// **For all other questions that involve writing code, you can solve them via the app.js folder under it's respectice section** 

// - Create a variable called firstVariable
// - Assign it the value of the string "Hello World"
// - Change the value of this variable to some number
// - Store the value of firstVariablein a new variable called secondVariable
// - Change the value of secondVariableto any string.

// What is the value of firstVariable?
1

// - Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string `"Hello, my name is "` and the variable yourName. 
// ex output: Hello, my name is Jean Valjean
let yourName = "Leo Chen";
console.log(`Hello, my name is ${yourName}`);

// ## Booleans

// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';
 
console.log(a !== b);
console.log(c !== d);
console.log('Name' === 'Name');
  
//   ### // FOR THE NEXT TWO, USE ONLY && OR ||

console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a + b = c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)`
console.log(a * a = d); // note: the answer is a simple arithmetic equation, not something "weird"`
console.log(48 == '48');

// ### The Farm 

// 1. Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

// 2. Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow) {
    console.log("mooooo");
}

// 3. Change your code so that if the variable animal is anything other than a cow, it will print `"Hey! You're not a cow."`
if (animal !== "cow") {
   console.log("Hey! You're not a cow.");
}

// 4. Commit

// ### Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let age = 52;
if (age >= 16) {
   console.log("Here are the keys!");
} else {
   console.log("Sorry, you're too young.");
}

// ## Loops

// Remember: USE let when you initialize your for loops!

// This is GOOD: `for(let i = 0; i < 100; i++)`

// This is NO GOOD: `for(i = 0; i < 100; i++)`




// ### The basics

// - Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i < 10; i++) {
   console.log(i);
}


// - Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 0; i < 401; i++) {
   console.log(i);
}

// - Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i < 4001; i+=3) {
    console.log(i);
 }


// ### B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(`${i} <-- is an even number`);
    }
 }


// ### C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five:
// **Example Output:**
// I found a 5. High five!
// I found a 10. High five!
for (let i = 0; i < 101; i++) {
    if (i !== 0) {
        if (i % 5 === 0) {
            console.log(`${i} I found a number. High five!`);
        }
    }
 }



// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// **Example Output:**
// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
// For numbers divisible by both three and five, be sure your code prints both messages
for (let i = 0; i < 101; i++) {
    if (i !== 0) {
        if (i % 3 === 0) {
            console.log(`${i} I found a number. There is a crowd!`);
        }
        if (i % 5 === 0) {
            console.log(`${i} I found a number. High five!`);
        }
    }
 }


// ### D. Savings account

// - Write code that will save the sum of all the numbers between 1 - 10 to a variable called `bank_account`.
// - Check your work! Your `bank_account` should have $55 in it.
let bank_account = 0; 
for (let i = 0; i < 11; i++) {
    bank_account += i;
 }
 console.log(`$${bank_account} in the account`);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your `bank_account` should have $10,100 in it.
let bank_account = 0; 
for (let i = 0; i < 101; i++) {
    bank_account += i;
 }
 bank_account *= 2;
 console.log(`$${bank_account} in the account`);



// ## III. Arrays & Control flow



// ### A. Talk about it:
// What are the things in an array called?
// Do Arrays guarantee those things will be in order?
// What real-life thing could you model with an array?



// ### B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
const quotes = ["q1", "q2", "q3"];


// ### C. Accessing elements
// Given the following array `const randomThings = [1, 10, "Hello", true]`
// - How do you access the 1st element in the array?
randomThings[0];

// - Change the value of `"Hello"` to `"World"`
randomThings[2] = "World";

// - Check the value of the array to make sure it updated the array using `console.log()`
console.log(randomThings[2]);

// ### D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
ourClass[2];

// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");




// ### E. Mix It Up

// Note: You don't really need `.splice()` for these. You could use it, but there are simpler array methods that are more appropriate.

// Given the following array: `const myArray = [5, 10, 500, 20]`
const myArray = [5, 10, 500, 20];

// - Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
console.log(myArray);

// - Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

// - Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

// - Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

// - Reverse this array using `Array.prototype.reverse()`. 
myArray.reverse();
console.log(myArray);

// - Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// YES, reverse() function reversed the order of the items in the array.


// ### F. Biggie Smalls

// Create a variable that contains an integer.

// Write an `if ... else` statement that:
// - `console.log()s` "little number" if the number is entered is less than 100
// - `console.log()s` "big number" if the number is greater than or equal to 100.
let num = 0;
if (num >= 100) {
   console.log("Big number");
} else {
   console.log("Little number");
}

// ### G. Monkey in the Middle

// Write an `if ... else if ... else` statement:

// 1. console.log()little numberif the number entered is less than 5.
// 2. If the number entered is more than 10, log big number.
// 3. Otherwise, log "monkey".
if (num < 5) {
   console.log("Little number");
} else if (num > 10) {
   console.log("Big number");
} else {
   console.log("monkey");
}


// ### H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// ```
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// ```
// ```
// {
//   "firstName": "John",
//   "lastName": "Smith",
//   "age": 25
// }
// ```

// `// Thom's closet is more complicated. Check out this nested data structure!!`
// ```
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// ```

// **What's Kristyn wearing today?**

// 1. Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

// 2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
console.log(kristynsCloset);

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);

// 3. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset[0][0];
console.log(thomsCloset[0][0]);

// **In the same way, access one item from Thom's pants array.**
thomsCloset[1][0];
console.log(thomsCloset[1][0]);

// - Access one item from Thom's accessories array.
// - Log a sentence about what Thom's wearing. 
// *Example:* "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][1]}!`);

// - Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][3] = "Footie Pajamas";
console.log(thomsCloset);

// ## IV. Functions


// ### A. printGreeting

// Do you think you could write a function called `printGreetingwith` a parameter name that returns a greeting with the argument interpolated into the greeting?

// Like so?

// ``console.log(printGreeting("Slimer")); `
// `=> Hello there, Slimer!``

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


function printGreeting(name) {
    return `Hello, ${name}`;
}

console.log(printGreeting("Leo"));

// ### B. printCool

// Write a function `printCoolthat` accepts one parameter, `name`, as an argument. The function should print the name and a message saying that that person is cool.

// `console.log(printCool("Captain Reynolds"));`
// `=> "Captain Reynolds is cool";`

function printCool(name) {
   return `${name} is super cool!`;
}

console.log(printCool("Leo"));


// ### C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

// `console.log(calculateCube(5));`
// `=> 125`

function calculateCube(num) {
   return num = num * num * num;
}

console.log(calculateCube(5));


// ## D. isVowel

// 1. Write a function `isVoweltha`t takes a character (i.e. a string of length 1) and returns `true` if it is a vowel, `false` otherwise. 

// 2. The vowel could be upper or lower case. 

// Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// `console.log(isVowel("a"));`
// `=> true`

function isVowel(letter) {
   if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" || letter === "y") {
      return true;
   } else {
      return false;
   }
}

console.log(isVowel("b"));




// ### E. getTwoLengths

// Write a function `getTwoLengthsthat` accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// `console.log(getTwoLengths("Hank", "Hippopopalous"));`
// `=> [4, 13]`

function getTwoLengths(a, b) {
   let arr = [a.length, b.length];
   return arr;
}

getTwoLengths("Hank", "Hippopopalous");


// ### F. getMultipleLengths

// Write a function `getMultipleLengthsthat` accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// `console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));`
// `=> [5, 4, 2, 2, 4]`

function getMultipleLengths(arr) {
   let newArr = [];
   for (let i = 0; i < arr.length; i++) {
      newArr[i] = arr[i].length;
   }
   return newArr;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// ### G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().

function maxOfThree(a, b, c) {
   if (a >= b && a >= c) {
      return a;
   } else if (b >= c) {
      return b;
   } else {
      return c;
   }
}

console.log(maxOfThree(6, 9, 1));



// ### H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"

function printLongestWord(word) {
   let maxLength = 0;
   let maxWord = word[0]; 
   for (let i = 0; i < word.length; i++) {
      if (word[i].length >= maxLength) {
         maxWord = word[i];
         maxLength = word[i].length;
         // console.log(`Maxword:${maxWord} - ${word[i]}:${word[i].length}`);
      }
   }
   return maxWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// ## Objects

// Let's set up an object data structure. 

// Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.


// ### A. Make a user object

// - Create an object called user.

// Write in to the object the **key-value** pairs for name, email, age, and purchased. Set the value of purchased to an empty array `[]`. Set the other values to whatever you would like.

const user = {
   email: "mike@gmail.com",
   age: 50,
   purchased: []
}
console.log(user);

// ### B. Update the user

// - Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = "michael@yahoo.com"
console.log(user);

// - Our user has had a birthday! Without changing the original user object, increment the agevalue using the postfix operator. Hint: age++
user.age++;
console.log(user);



// ### C. Adding keys and values

// You have decided to add your user's location to the data that you want to collect.
user.location = "New Jersey";
onsole.log(user);

// - Without changing the original user object, add a new key locationto the object, and give it a value or some-or-other location (a string).



// ### D. Shopaholic!

// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using `.push()`, add the string "carbohydrates" to the `purchasedarray`.
user.purchased.push("carbohydrates");
console.log(user.purchased);

// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the `purchasedarray`.
user.purchased.push("peace of mind");
console.log(user.purchased);

// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using `.push()`, add the string "Merino jodhpurs" to the `purchasedarray`.
// Console.log just the "Merino jodhpurs" from the `purchasedarray`.
user.purchased.push("Merino jodhpurs");
console.log(user.purchased);


// ### E. Object-within-object

// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.

// If we want to give our user a friendwith a nameand age, we could write:

// ```
// user.friend = {
//     name: "Grace Hopper",
//     age: 85
// }
// ```

// When we console.log user, we would see the friend object added to our user object.

// 1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
   name: "John Smith",
   age: 21,
   location: "New York",
   purchased: []
}
console.log(user);

// 2. Console.log just the friend's name
console.log(user.friend.name);

// 3. Console.log just the friend's location
console.log(user.friend.location);

// 4. CHANGE the friend's age to 55
user.friend.age = 55;
console.log(user.friend.age);

// The friend has purchased "The One Ring". Use `.push()` to add "The One Ring" to the friend's `purchasedarray`.
// 5. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's `purchasedarray`.
// 6. Console.log just "A latte" from the friend's `purchasedarray`.

user.friend.purchased.push("The One Ring");
console.log(user.friend.purchased);


// ### F. Loops

// - Write a for loop that iterates over the User's `purchasedarray` (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++) {
   console.log(user.purchased[i]);
}

// - Write a for loop that iterates over the Friend's `purchasedarray`, and prints each element to the console.
for (let i = 0; i < user.friend.purchased.length; i++) {
   console.log(user.friend.purchased[i]);
}


// ### G. Functions can operate on objects

// Write a single function updateUserthat takes no parameters. When the function is run, it should:
user.friend = {
   name: "John Smith",
   age: 21,
   location: "New York",
   purchased: [],
   
   // start of single function added to the user object below
   updateUser: function() {
      user.friend.age++;
   }
   // end of single function added to the object
}

// 1. it should increment the user's age by 1
user.friend.updateUser();
console.log(user.friend);

// 2. make the user's name uppercase
user.friend.name = user.friend.name.toUpperCase();
console.log(user.friend.name);

// 3. The function does not need a return statement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.

/// ??????????




// # Requirements Complete! Hungry for More?



// ## Cat Combinator



// 1. ### Mama cat

// Define an object called `cat1that` contains the following properties:

// name
// breed
// age (a number)
const cat1 = {
   name: "Kitty",
   breed: "siamese",
   age: 3,
}

// console.log the cat's age
console.log(cat1.age);

// console.log the cat's breed
console.log(cat1.breed);




// 2. ### Papa cat

// Define an object called cat2that also contains the properties:

// name
// breed
// age (a number)

const cat2 = {
   name: "Smitty",
   breed: "ragdoll",
   age: 4
}



// 3. ### Combine Cats!

// The cats are multiplying!

// Write a function `combineCats` that has two parameters `mama`, and `papa`. The function will take two arguments -- each a cat object.
function combineCats(mama, papa) {
   console.log(mama, papa);
}

combineCats(cat1, cat2);

// Pass cat1and cat2as arguments to the combineCatsfunction. The function should console.log them.

// **Example**:

// ```
// combineCats(cat1, cat2)
// { name: "Joe", age: 19, breed: "Mog" }

// { name: "Jam", age: 45, breed: "Siamese" }
// ```




// This is to demonstrate that functions can take objects as arguments.

// You could also invoke the combineCats function by writing the objects straight into the parentheses:

// ```
// combineCats({ 
//   name: "Craig", 
//   age: 20, 
//   breed: "unknown" }, 
// { 
//   name: "Linda", 
//   age: 20, breed: 
//   "undefined" 
//   }
// );
// ```
combineCats({ name: "Craig", age: 20, breed: "unknown" }, { name: "Linda", age: 20, breed: "undefined" });

// **Make it so the combineCats function will return a combination of the two incoming cats!**

// - The result should be an object wherein the name is a concatenation of the parents' names, 
// - the age is 1
// - the breed is each of the parents' breeds with a hyphen in between


// Example:

// `console.log(combineCats(cat1, cat2));`

// Result:

// This is to demonstrate that a function can return an object
console.log(combineCats(cat1, cat2));


// 4. ### Cat brain bender

// If combineCats returns an object, and if combineCats takes objects as arguments, then it stands to reason that:

// - catCombinatorcan use itself as its own argument.

// Take a second to stew on that . . .

// What is the result of:

// `console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));`
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

// Whoa . . .

// The above console.log is two levels deep of combineCats.

// - Write a console.log that is **three** levels deep of combineCats. combineCats should have two arguments, each which are combineCats, each which have two arguments, each which are combineCats.

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));