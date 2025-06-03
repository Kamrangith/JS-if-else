// 1. Age Check: Adult or Minor
let Age = prompt("Enter your age:");
if (Age >= 18) {
    alert("You are an adult.");
} else {
    alert("You are a minor.");
}


//  2. Positive Number Check
let positiveNum = prompt("Enter a number:");
if (positiveNum > 0) {
    alert("Positive number");
} else {
    alert("Not positive");
}


// 3. Even or Odd Check
let num = prompt("Enter a number:");
if (num % 2 === 0) {
  alert("Even number");
} else {
  alert("Odd number");
}

// 4. Username Access Control
let username = prompt("Enter your username:");
if (username === "admin") {
  alert("Welcome, admin!");
} else {
  alert("Access denied.");
}

// 5. Compare Two Numbers for Equality
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
if (num1 == num2) {
  console.log("Both numbers are the same");
} else {
  console.log("The numbers are different");
}

// 6. Which Number is Larger?
let first = prompt("Enter the first number:");
let second = prompt("Enter the second number:");

if (Number(first) > Number(second)) {
  alert("First is larger");
} else {
  alert("Second is larger");
}

// 7. Too Big or Not?
let value = prompt("Enter a number:");
if (value > 100) {
  alert("Too big!");
} else {
  alert("Within range");
}

// 8. Pass or Fail
let score = prompt("Enter your score:");
if (score >= 50) {
  console.log("You passed!");
} else {
  console.log("You failed.");
}

// 9. Temperature Check
let temp = prompt("Enter the temperature:");
if (temp > 30) {
  alert("It's hot!");
} else {
  alert("It's not hot.");
}

// 10. Zero or Not Zero
let Number = prompt("Enter a number:");
if (Number(number) === 0) {
  alert("Zero");
} else {
  alert("Not zero");
}

// 11. Senior Citizen Check
let age = prompt("Enter your age:");
if (age >= 60) {
  console.log("You are a senior citizen.");
} else {
  console.log("You are not a senior.");
}

// 12. Name Greeting
let name = prompt("Enter your name:");
if (name === "Alice") {
  alert("Hi, Alice!");
} else {
  alert("You're not Alice!");
}

//  13. Password Check
let password = prompt("Enter the password:");
if (password === "12345") {
  console.log("Correct password");
} else {
  console.log("Wrong password");
}

// 14. Greeting Based on Time
let hour = prompt("Enter the current hour (0-23):");
if (hour >= 5 && hour < 12) {
    alert("Good morning!");
} else if (hour >= 12 && hour < 18) {
    alert("Good afternoon!");
} else if (hour >= 18 && hour < 22) {
    alert("Good evening!");
} else {
    alert("Good night!");
}
// 15. Divisible by 5
let number = prompt("Enter a number:");
if (number % 5 === 0) {
  console.log("Divisible by 5");
} else {
  console.log("Not divisible by 5");
}

// 16. Play a Game?
let play = prompt("Do you want to play a game? (yes/no):");
if (play.toLowerCase() === "yes") {
    alert("Let's play!");
} else {
    alert("Maybe next time!");
}

// 17. Favorite Color
let color = prompt("What's your favorite color?");
if (color === "blue") {
  console.log("Cool choice!");
} else {
  console.log("Interesting color!");
}

// 18. Weekend or Weekday?
let day = prompt("Enter the day of the week:");
if (day === "Sunday") {
  alert("Weekend!");
} else {
  alert("Weekday");
}

// 19. Fruit in Stock
let fruit = prompt("Enter a fruit:");
if (fruit === "banana" || fruit === "apple") {
  alert("We have that!");
} else {
  alert("Sorry, out of stock.");
}

// 20. Start Game Prompt
let command = prompt('Type "start" to begin:');
if (command === "start") {
  alert("Game started!");
} else {
  alert("Waiting for input...");
}


