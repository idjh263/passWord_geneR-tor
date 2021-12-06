// Assignment code here
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");


var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z' ]; 
var lowerCase = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',  's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "?", "/", "-", "+"];


generateBtn.addEventListener("click", writePassword);
  

  function writePassword() {
   
  var passwordLength = parseInt(prompt("How many password characters do you need, from 5 to 128?"));
  if (!passwordLength || passwordLength <= 4 || passwordLength > 128) {
    return prompt = parseInt("Please enter value between 5 to 128");
  }else {
    withUpper = confirm("Do you need an uppercase?");
    withLower = confirm("Do you need a lowercase?");
    withNumbers = confirm("Do you need a number?");
    withSymbols = confirm("Do you need a symbol?");
  };
  if(!withLower && !withUpper && !withNumbers && !withSymbols) {
  genPassword = alert("please enter at least one character"); 

  }
  else if (withLower && withUpper && withNumbers && withSymbols) {
  genPassword = symbols.concat(upperCase, numbers,symbols);
  }else if (withSymbols && withNumbers && withUpper) {
  genPassword = symbols.concat(numbers, upperCase);
  }
else if (withSymbols && withNumbers && withLower) {
  genPassword = symbols.concat(numbers, lowerCase);
  }
else if (withSymbols && withLower && withUpper) {
  genPassword = symbols.concat(lowerCase, upperCase);
  }
else if (withNumbers && withLower && withUpper) {
  genPassword = numbers.concat(lowerCase, upperCase);
}
else if (withSymbols && withNumbers) {
  genPassword = symbols.concat(numbers);

} else if (withSymbols && withLower) {
  genPassword = symbols.concat(lowerCase);

} else if (withSymbols && withUpper) {
  genPassword = symbols.concat(upperCase);
}
else if (withLower && withNumbers) {
  genPassword = lowerCase.concat(numbers);

} else if (withLower && withUpper) {
  genPassword = lowerCase.concat(upperCase);

} else if (withNumbers && withUpper) {
  genPassword = numbers.concat(upperCase);
}
else if (withSymbols) {
    genPassword = symbols;
}
else if (withNumbers) {
    genPassword = numbers;
}
else if (withLower) {
    genPassword = lowerCase;
}
else if (withUpper) {
    genPassword = upperCase;

};

var password = [];
for (var i = 0; i < passwordLength; i ++) {
  var genPass = genPassword[Math.floor(Math.random() * genPassword.length)];
  password.push(genPass);
}
 

}
  

    


