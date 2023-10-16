// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function name changed to be more accurate
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var input = [];
// Asks user to input length of password
var passwordLength = prompt("How long would you like your password to be");

// If password length is outside acceptance criteria it will ask for another number
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Please pick a number between 8 and 128")
}
console.log (passwordLength);

// Asks user if they want password to contain lower case characters
var lowerCase = confirm("Would you like lower case characters?")

// If the confirm lowerCase variable saved as true, otherwise it is saved as false
if (lowerCase) {
  lowerCase = true;
} else {
  lowerCase = false;
}
console.log (lowerCase);

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
