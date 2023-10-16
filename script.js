// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function name changed to be more accurate
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
