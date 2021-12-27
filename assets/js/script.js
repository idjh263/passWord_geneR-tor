// Assignment code here
var generateBtn = document.querySelector("#generate");


  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split(""); 
  var lowerCase = "abcdefghiklmnopqrsttuvwxtz" .split("");
  var numbers = "0123456789" .split ("");
  var symbols =  "*&^/\%$#@!?[]><{}" .split("");


  function generatePassword() {
  var characterGen = []; //a
  var randomPassword = ""; //pw



  // var refreshPage = function() {
  //   location.reload();
  // };

  var passwordLength = window.prompt("How many password characters do you need from 8 to 128?");
  passwordLength = Number(passwordLength); 
  if (passwordLength < 8 || passwordLength > 128 || NaN) {
     window.prompt = ("Please enter value between 8 to 128");
     randomPassword = "please try again, enter value between 8 to 128 and refresh page";
  
  }else { 
    var withLowerCase = confirm("do you need lower case?");
    if(withLowerCase) {
      characterGen = characterGen.concat(lowerCase);
    }
    var withUpperCase = confirm("do you need upper case?");
    if(withUpperCase) {
      characterGen = characterGen.concat(upperCase);
    }
    var withNumbers = confirm("do you need numbers?");
    if(withNumbers) {
      characterGen = characterGen.concat(numbers);
    }
    var withSymbols = confirm("do you need special characters?");
    if(withSymbols) {
      characterGen = characterGen.concat(symbols);
    }
    for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * characterGen.length);
    randomPassword += characterGen[randomCharacter];
    }
    if (characterGen.length == 0) {
      alert("please enter at least one character type"); 
      randomPassword = "please try again, needs at least 1 character"
  }
  }
  return randomPassword; 
};

 function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password; 
}

generateBtn.addEventListener("click", writePassword);


    


