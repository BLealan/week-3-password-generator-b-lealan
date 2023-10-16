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
console.log ("Password is " + passwordLength + " character long.");

// Asks user if they want password to contain lower case characters
var lowerCase = confirm("Would you like lower case characters?")

// If confirm lowerCase variable saved as true, otherwise saved as false - added to array
if (lowerCase) {
  lowerCase = true;
} else {
  lowerCase = false;
}
input.push(lowerCase);

// Asks user if they want password to contain upper case characters
var upperCase = confirm("Would you like upper case characters?")

// If confirm upperCase variable saved as true, otherwise saved as false - added to end of array
if (upperCase) {
  upperCase = true;
} else {
  upperCase = false;
}
input.push(upperCase);

// Asks user if they want password to contain integers
var number = confirm("Would you like the password to contain numbers?")

// If confirm number variable saved as true, otherwise saved as false - added to end of array
if (number) {
  number = true;
} else {
  number = false;
}
input.push(number);

// Asks user if they want password to contain specialCharacter
var specialCharacter = confirm("Would you like special characters?")

// If confirm specialCharacter variable saved as true, otherwise saved as false - added to end of array
if (specialCharacter) {
  specialCharacter = true;
} else {
  specialCharacter = false;
}
input.push(specialCharacter);

console.log(input);

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
