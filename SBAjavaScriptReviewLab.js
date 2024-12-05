// I. Variables & Datatypes
// How do we assign a value to a variable? A. With the assignment operator.
//Here = is the assignment operator.
let x=20;
console.log(x);
//2.How do we change the value of a...
//Reassigned by passing another value to the same variable.
x=30;
console.log(x);

//How do we assign an existing variable to a new variable?
let y=x;
console.log(y);

// Declare a variable (without assigning a value)
let dx;  

// Assign a value to the variable
dx = 20;  

// Define a variable by declaring and assigning a value in one step
let dy = 30;  

console.log(dx);  // 20
console.log(dy);  // 30
//What is pseudocoding and why should you do it?
//psedocode helps in organizing the code and what we have to code in a brief or high level.
//it helps in understanding flow and logic of program.
//it is like blueprint of program
/*
START
   Initialize sum to 0
   For each number in the array:
       Add the number to sum
   Print sum
END*/
let sum=0;
let result;
for(i=0;i<3;i++){
sum = sum+1;
result=sum;
console.log(result);
}

console.log("Final sum is "+sum);
//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//50% of time has to be spend on thinking, designing and approach. 
//Once we have a proper plan and psudeo code ready it will be quicker to implement

//B. Strings
//Create a variable called firstVariable
let firstVariable;
//Assign it the value of the string "Hello World"
firstVariable = "Hello World";
console.log(firstVariable);
//Change the value of this variable to some number
//reassigned the firstvariable to number.
firstVariable=100;
//Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable;
//Change the value of secondVariableto any string.
// Here reassigned the secondvariable.
secondVariable="Swetha Houston";
//What is the value of firstVariable?
console.log("First Variable is "+firstVariable);
console.log("Second variable is"+secondVariable);

//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string 
//"Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName ="Swetha";
let fullname = "Hello, my name is ";
console.log(fullname+yourName);


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a<b);
console.log(c>d);
console.log('Name'=='Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true||false);
console.log(false &&false|| false&& false&& false||true);
console.log(false||false);
console.log(e=='Kevin');
console.log(a <b < c); 
// note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a**a%d==0); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 =='48');

let animal = "cow";  // You can change this to any other value to test

// Check if 'animal' is equal to "cow"
if (animal === "cow") {
    console.log("mooooo");  // Prints "mooooo" if animal is "cow"
} else {
    console.log("Hey! You're not a cow.");  // Prints if animal is anything other than "cow"
}
//using function
function findanimal(animal1) {
    if (animal1 === "cow") {
        console.log("mooooo");  // Prints "mooooo" if animal is "cow"
    } else {
        console.log("Hey! You're not a cow.");  // Prints if animal is anything other than "cow"
    }
    return animal1;  // Returns the animal passed to the function
}

let animal1 = "dog";  // You can set this to any other animal like "cow" or "cat"
let theanimal = findanimal(animal1);  // Pass 'animal1' to the function
console.log(theanimal);

//E. Driver's Ed
//Make a variable that holds a person's age; be semantic
//Write code that will print out "Here are the keys!", 
//if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
let age=35;
if(age>=16){
    console.log("Here are the keys!");
}
else if(age<16){
    console.log("Sorry, you're too young.");
}
//using function
function giveKeys(age1)
{
    if(age1>=16){
        console.log("Here are the keys!");
    }
    else if(age1<16){
        console.log("Sorry, you're too young.");
    }
}
let age1=13;
let keysage=giveKeys(age1);

//Loops
//Write a loop that will print out all the numbers from 0 to 10, inclusive

for(i=0;i<=10;i++){
    console.log(i);
}
//Write a loop that will print out all the numbers from 10 up to and including 400
console.log("numbers from 11 to 400");
for(i>10;i<=400;i++){
    console.log(i);
}
console.log("numbers third number")
//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(i=12;i<=4000;i+=3){
  console.log(i);
}

//B. Get even
//Print out the numbers that are within the range of 1 - 100
//Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

for(i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
        console.log(i+"<-- is an even number");
    }
}
//Give me Five
//For the numbers 0 - 100, print out "I founds a number. High fives!" if the number is a multiple of fives
//Example Output:
for(i=0;i<100;i++){
    console.log("I founds a number"+i);
    if(i%5==0)
        {
        console.log(i+"High five! if the number is a multiple of five");
    }
}

//D. Savings account
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
//Check your work! Your bank_account should have $55 in it.

let sumof =0;
let bank_account;
for(i=1;i<=10;i++){
sumof=sumof+i;
console.log(sumof);
bank_account=sumof;
}
console.log(bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

let bank_account1 = 0;

// Add the sum of numbers between 1 and 100, each multiplied by 2
for (let i = 1; i <= 100; i++) {
  bank_account1 += i * 2;
}
console.log(bank_account1); // Check your work, should log 10,100

//III. Arrays & Control flow
//A. Talk about it:
//What are the things in an array called? The things in an array are called elements.
// Each element can be any type of data, such as a number, string, boolean, object, etc. 
//Elements in an array are accessed by their index (position), starting from 0 for the first element.

//Do Arrays guarantee those things will be in order? Yes, arrays guarantee that elements will be in order. The order in which elements are added to the array is preserved. For example, if you add the elements [10, 20, 30], they will always be in that order unless you explicitly modify the array (e.g., by sorting or reordering).

//What real-life thing could you model with an array? A real-life example of something you could model with an array is a shopping list. Imagine you have a list of items you need to buy, like:

//["silver", "diamonds", "gold"]

//B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
let quotes=["apples","oranges","kiwi"];

//C. Accessing elements
//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true];
//How do you access the 1st element in the array?
randomThings[0];
//Change the value of "Hello"to "World"
randomThings[2]="World";
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
//we have reassigned 2 index position value to world.
console.log(randomThings[2]);


//D. Change values
//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
///What would you write to access the 3rd element of the array?
ourClass[2];
console.log(ourClass[2]);
//Change the value of "Github" to "Octocat"
ourClass[4]="Github";
//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

//E. Mix It Up
//Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

//Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
console.log(myArray); 
myArray.push("swetha");
console.log(myArray);
//Remove the from the beginning of the array.
myArray.shift();
console.log(myArray);
//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
//Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
///Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
console.log(myArray);

//F. Biggie Smalls
//Create a variable that contains an integer.

//Write an if ... elsestatement that:

//console.log()s "little number" if the number is entered is less than 100
//console.log()s big numberif the number is greater than or equal to 100.

let numvariable ="10";
if(numvariable<100){
    console.log("little number");
}

else if(numvariable>=100){
    console.log("Big number");
}

//G. Monkey in the Middle
//Write an if ... else if ... elsestatement:

//console.log()little numberif the number entered is less than 5.
//If the number entered is more than 10, log big number.
//Otherwise, log "monkey".

let numvariable1=20;
if(numvariable1<5){
    console.log("little number");
}
else if (numvariable1>10){
    console.log("big number");
}
else{
    console.log("monkey");
}

//H. What's in Your Closet?
//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

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

  //What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence 
  //"Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
 
  // Log the sentence about what Kristyn is wearing today
  console.log("Kristyn is rocking that " + kristynsCloset[3] + " today!");
//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");  // Add "raybans" at index 6
console.log(kristynsCloset);
//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let shirt = thomsCloset[0][0]; 
//In the same way, access one item from Thom's pants array.
let pants = thomsCloset[1][1];
//Access one item from Thom's accessories array.
let accessory = thomsCloset[2][1];
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${shirt}, ${pants} and ${accessory}!`);
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]); 

//IV. Functions


//A. printGreeting
//Do you think you could write a function called printGreetingwith a parameter namethat 
//returns a greeting with the argument interpolated into the greeting?

//Like so?

//console.log(printGreeting("Slimer"));
//=> Hello there, Slimer!

//You think you could? I think so too. Feel free to skip this problem, 
//because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
function printGreeting(name)
{
    console.log("Hello" +name);
}

printGreeting("swetha");
//console.log(name1);

//B. printCool
//Write a function printCoolthat accepts one parameter, nameas an argument. 
//The function should print the name and a message saying that that person is cool.

//console.log(printCool("Captain Reynolds"));
//=> "Captain Reynolds is cool";

function printCool(nameas){
    console.log(nameas+" "+ "person is cool");
}
printCool("silpa");

//C. calculateCube
//Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

//console.log(calculateCube(5));
//=> 125
function calculateCube(cubenumber){
    console.log("Volume of a cube is "+cubenumber*cubenumber*cubenumber);
}
calculateCube(5);

//D. isVowel
//Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

//console.log(isVowel("a"));
//=> true
function isVowel(char) {
    // Check if the character is a vowel (case-insensitive)
    return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
  }
console.log(isVowel("h"));
//E. getTwoLengths
//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

//console.log(getTwoLengths("Hank", "Hippopopalous"));
//=> [4, 13]

function getTwoLengths(str1, str2) {
    // Return an array containing the lengths of both strings
    return [str1.length, str2.length];
  }
  
  // Test the function with the given example
  console.log(getTwoLengths("Rani", "swapna"));

 // F. getMultipleLengths
//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

//console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
//=> [5, 4, 2, 2, 4]

function getMultipleLengths(stringparameter){
    return [stringparameter[0].length,stringparameter[1].length,stringparameter[2].length];
}
console.log(getMultipleLengths(["veena","vani","roja"]));

function maxOfThree(a, b, c) {
    // Compare the three numbers and return the largest
    if (a >= b && a >= c) {
      return a;
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
  
  // Test the function with the given example
  console.log(maxOfThree(3,4,5));

  function printLongestWord(words) {
    // Initialize the longest word as the first word in the array
    let longestWord = words[0];
  
    // Loop through the array starting from the second word
    for (let i = 1; i < words.length; i++) {
      // Compare the length of the current word with the longest word
      if (words[i].length > longestWord.length) {
        longestWord = words[i]; // Update the longest word
      }
    }
  
    return longestWord; // Return the longest word
  }
  
  // Test the function with the given example
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

  //A. Make a user object
//Create an object called user.
//Write in to the object the key-value pairs for name, email, age, and purchased.
// Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
    name: "swetha malasani",         // Name of the user
    email: "malasaniswetha@gmail.com",  // User's email
    age: 34,                  // User's age
    purchased: []             // An empty array for purchased items
  };
  
  console.log(user);

  const updatedUser = {
    ...user,                  // Spread the original user object into the new object
    email: "veenavani@yahoo.com",  // Update email address
    age: user.age + 1         // Increment age by 1 (age++)
  };
  
  console.log(updatedUser);

  //C. Adding keys and values
//You have decided to add your user's location to the data that you want to collect.

//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

const updatedUserWithLocation = {
    ...user,                   // Spread the original user object into the new object
    location: "New York City"  // Add the location key with a value
  };
  
  console.log(updatedUserWithLocation);

  user.purchased.push("carbohydrates");       // First purchase
user.purchased.push("peace of mind");      // Second purchase
user.purchased.push("Merino jodhpurs");    // Third purchase

// Log the "Merino jodhpurs" item from the purchased array
console.log(user.purchased[2]);


    
    // Adding a friend object to the user
    user.friend={
      name: "Grace Hopper",      // Friend's name
      age: 85,                   // Friend's age
      location: "San Francisco", // Friend's location
      purchased: []              // Friend's empty purchased array
    }

    console.log(user);

    // Log just the friend's name and location
console.log(user.friend.name);      // Output: Grace Hopper
console.log(user.friend.location);  // Output: San Francisco

// Change the friend's age to 55
user.friend.age = 55;

// Friend has purchased "The One Ring" and "A latte"
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");

// Log just "A latte" from the friend's purchased array
console.log(user.friend.purchased[1]);  

//F. Loops
//Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
  }
  
// For loop to iterate over the Friend's purchased array and print each element
console.log("\nFriend's Purchases:");
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

///G. Functions can operate on objects
function updateUser() {
    // Increment the user's age by 1
    user.age++;
  
    // Make the user's name uppercase
    user.name = user.name.toUpperCase();
  }

  // Function to update the passed object
function oldAndLoud(person) {
    // Increment the person's age by 1
    person.age++;
  
    // Make the person's name uppercase
    person.name = person.name.toUpperCase();
  }
  
  // Call the function with the user object as the argument
  oldAndLoud(user);
  
  // Log the updated user object to verify the changes
  console.log(user);


  // Define the cat1 object with properties name, breed, and age
const cat1 = {
    name: "minus",
    breed: "venus",
    age: 3
  };
  
  // Log the cat's age and breed to the console
  console.log(cat1.age);   
  console.log(cat1.breed); 

  const cat2 = {
    name: "Mittens",
    breed: "Persian",
    age: 5
  };
  
  // Log the cat2 object to check its properties
  console.log(cat2);

  function combineCats(mama, papa) {
    // Log both mama and papa cat objects
    console.log(mama);
    console.log(papa);
  }
  
  // Call the function with cat1 and cat2 as arguments
  combineCats(cat1, cat2);


  function combineCats(mama, papa) {
    // Create a new cat object with the combined values
    return {
      name: mama.name + papa.name, // Concatenate the names
      age: 1, // Set age to 1
      breed: mama.breed + "-" + papa.breed // Combine the breeds with a hyphen
    };
  }
  
  // Call the function with cat1 and cat2 as arguments
  console.log(combineCats(cat1, cat2));

  



