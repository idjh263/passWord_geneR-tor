// Assignment code here

var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ]; 
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!@#$%^&*(){}[]=<>?/-_+"];
var passWordLength = upperCase + lowerCase + numbers + symbols;
console.log(passWordLength);


var writePassword = function() {
  var passWordLength = window.prompt("How many password characters do you need, from 5 to 128?");
  if (passWordLength = 5-128) {
    var upperCase = window.prompt("Do you need Uppercase?");
  }else { window.alert ("Please enter value between 5 and 128?");
  }

  }







// // Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



