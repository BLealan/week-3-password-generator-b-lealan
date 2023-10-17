// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function name changed to be more accurate
function generatePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Stores boolean desicions of user
var input = [];

// Asks user to input length of password
var passwordLength = prompt("How long would you like your password to be");

// If password length is outside acceptance criteria it will ask for another number
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Please pick a number between 8 and 128")
}
//Prompt returns a string so is changed to number in order to use
passwordLength = Number(passwordLength);
console.log ("Password is " + passwordLength + " character long.");

// Series of windows asking user if they want password to contain lower/uppercase, numbers and special characters
// If confirmed variables saved as true, otherwise saved as false - added to input array

var lowerCase = confirm("Would you like lower case characters?")
input.push(lowerCase);

var upperCase = confirm("Would you like upper case characters?")
input.push(upperCase);

var number = confirm("Would you like the password to contain numbers?")
input.push(number);

var specialCharacter = confirm("Would you like special characters?")
input.push(specialCharacter);

//Check boolean inputs in console
console.log(input);

passwordCriteria = {
  length: passwordLength,
  isLowerCase: lowerCase,
  isUpperCase: upperCase,
  isNumber: number,
  isSpecialCharacter: specialCharacter
}
console.log(passwordCriteria);
console.log(typeof passwordLength);
function createPassword (isLowerCase, isUpperCase, isNumber, isSpecialCharacter){
}

  for (var i = 0; i < passwordLength; i++){

  }

// // Runs through length of password entered by user and generates random character based on user input
// function generate (lowerCase, upperCase, number, specialCharacter) {
//   return for (var i = 0; i < passwordLength; i++){
//   }
// }
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
