// 1. Change paragraph text to "Welcome!" 
document.querySelector("#message").innerHTML = "Welcome!";

// 2. Get input value from nameInput and show in result 
const name = document.querySelector("#nameInput").value;
document.querySelector("#result").innerHTML = name;

// 3. On button click, change background of #container to light blue
document.querySelector("button").addEventListener("click", function () {
  document.querySelector("#container").style.backgroundColor = "lightblue";
});

// 4. Change color of #mainTitle to red
document.querySelector("#mainTitle").style.color = "red";

// 5. Show number from input #num1 in paragraph #output
const num = document.querySelector("#num1").value;
document.querySelector("#output").innerHTML = num;

// 6. On click of button with class submit-btn, log "Button Clicked"
document.querySelector(".submit-btn").addEventListener("click", function () {
  console.log("Button Clicked");
});

// 7. Get values from inputs #first and #second, add them, show in #sum
const num1 = Number(document.querySelector("#first").value);
const num2 = Number(document.querySelector("#second").value);
document.querySelector("#sum").innerHTML = num1 + num2;

// 8. Change text of paragraph with class description to "Updated successfully"
document.querySelector(".description").innerHTML = "Updated successfully";

// 9. Select #box, set width to 200px and background color to green
const box = document.querySelector("#box");
box.style.width = "200px";
box.style.backgroundColor = "green";

//  10. Get value from input #email and print it in console
const email = document.querySelector("#email").value;
console.log(email);

// 11. Select a paragraph and update its font size to 24px
document.querySelector("p").style.fontSize = "24px";

//  12. On button click, get value from #fullName and set greeting in #greeting
document.querySelector("button").addEventListener("click", function () {
  const name = document.querySelector("#fullName").value;
  document.querySelector("#greeting").innerHTML = "Hello, " + name;
});

// 13. Change image with #profilePic to a new URL
document.querySelector("#profilePic").src = "https://example.com/new-image.jpg";

// 14. Change text color of all .highlight elements to orange

const elements = document.querySelectorAll(".highlight");
elements.forEach(function(el) {
  el.style.color = "orange";
});

// 15. Check if checkbox #agree is checked, display "Agreed" or "Not Agreed" in a paragraph
const checkbox = document.querySelector("#agree");
const message = checkbox.checked ? "Agreed" : "Not Agreed";
document.querySelector("p").innerHTML = message;

// 16. Get selected value from dropdown #options and display it in #selectedValue
const selected = document.querySelector("#options").value;
document.querySelector("#selectedValue").innerHTML = selected;

//  17. On button click, show current date and time in #dateTime
document.querySelector("button").addEventListener("click", function () {
  const now = new Date();
  document.querySelector("#dateTime").innerHTML = now.toString();
});

// 18. Hide paragraph with id togglePara (set display: none)
document.querySelector("#togglePara").style.display = "none";

// 19. Get age from input #age, display "Eligible" if age ≥ 18, else "Not Eligible" in a span
const age = Number(document.querySelector("#age").value);
const result = age >= 18 ? "Eligible" : "Not Eligible";
document.querySelector("span").innerHTML = result;

// 20. On button click, clear the value of input #searchBox
document.querySelector("button").addEventListener("click", function () {
  document.querySelector("#searchBox").value = "";
});
