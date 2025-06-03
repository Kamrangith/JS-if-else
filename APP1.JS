// 1. addTwoNumbers
function addTwoNumbers(a, b) {
  return a + b;
}
console.log(addTwoNumbers(5, 3)); // 8

// 2. subtractNumbers
function subtractNumbers(a, b) {
  return a - b;
}
console.log(subtractNumbers(10, 4)); // 6

// 3. multiplyNumbers
function multiplyNumbers(a, b) {
  return a * b;
}
console.log(multiplyNumbers(6, 7)); // 42

// 4. divideNumbers
function divideNumbers(a, b) {
  return a / b;
}
console.log(divideNumbers(20, 5)); // 4

// 5. getRemainder
function getRemainder(a, b) {
  return a % b;
}
console.log(getRemainder(17, 5)); // 2

// 6. isPositive
function isPositive(num) {
  if (num > 0) {
    return "Positive";
  } else {
    return "Not Positive";
  }
}
console.log(isPositive(10)); // "Positive"
console.log(isPositive(-3)); // "Not Positive"

// 7. isNegative
function isNegative(num) {
  if (num < 0) {
    return "Negative";
  } else {
    return "Not Negative";
  }
}
console.log(isNegative(-5)); // "Negative"
console.log(isNegative(7));  // "Not Negative"

// 8. checkEven
function checkEven(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEven(10)); // "Even"
console.log(checkEven(3));  // "Odd"

// 9. isEqual
function isEqual(a, b) {
  if (a === b) {
    return "Equal";
  } else {
    return "Not Equal";
  }
}
console.log(isEqual(5, 5)); // "Equal"
console.log(isEqual(5, 8)); // "Not Equal"

// 10. compareNumbers
function compareNumbers(a, b) {
  if (a > b) {
    return "Greater";
  } else {
    return "Smaller";
  }
}
console.log(compareNumbers(9, 3));  // "Greater"
console.log(compareNumbers(2, 5));  // "Smaller"

// 11. getFullName
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName("John", "Doe")); // "John Doe"

// 12. getGrade
function getGrade(score) {
  if (score >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(getGrade(75)); // "Pass"
console.log(getGrade(30)); // "Fail"

// 13. isTeenager
function isTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "Teenager";
  } else {
    return "Not a Teenager";
  }
}
console.log(isTeenager(16)); // "Teenager"
console.log(isTeenager(22)); // "Not a Teenager"

// 14. greetUser
function greetUser(name) {
  return "Hello, " + name + "!";
}
console.log(greetUser("Ahmed")); // "Hello, Ahmed!"

// 15. isEligibleToVote
function isEligibleToVote(age) {
  if (age >= 18) {
    return "Eligible";
  } else {
    return "Not Eligible";
  }
}
console.log(isEligibleToVote(20)); // "Eligible"
console.log(isEligibleToVote(16)); // "Not Eligible"

// 16. findAbsoluteValue
function findAbsoluteValue(num) {
  if (num < 0) {
    return -num;
  } else {
    return num;
  }
}
console.log(findAbsoluteValue(-7)); // 7
console.log(findAbsoluteValue(5));  // 5

// 17. checkTemperature
function checkTemperature(temp) {
  if (temp > 30) {
    return "Hot";
  } else if (temp < 10) {
    return "Cold";
  } else {
    return "Normal";
  }
}
console.log(checkTemperature(35)); // "Hot"
console.log(checkTemperature(5));  // "Cold"
console.log(checkTemperature(20)); // "Normal"

// 18. getTriangleType
function getTriangleType(a, b, c) {
  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || b === c || a === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}
console.log(getTriangleType(3, 3, 3)); // "Equilateral"
console.log(getTriangleType(3, 3, 5)); // "Isosceles"
console.log(getTriangleType(3, 4, 5)); // "Scalene"

// 19. calculateDiscountedPrice
function calculateDiscountedPrice(price, discountPercent) {
  return price - (price * discountPercent / 100);
}
console.log(calculateDiscountedPrice(100, 20)); // 80

// 20. isPasswordValid
function isPasswordValid(password) {
  if (password.length >= 8) {
    return "Valid Password";
  } else {
    return "Too Short";
  }
}
console.log(isPasswordValid("abc12345")); // "Valid Password"
console.log(isPasswordValid("short"));    // "Too Short"



