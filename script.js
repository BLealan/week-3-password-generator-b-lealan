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
//Prompt returns a string so is changed to integer in order to use
passwordLength = Math.floor(Number(passwordLength));
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

//Generates random letter - case determined by user choice
function randomLetter(){
  var alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var passwordLetter = alphabet.charAt(Math.floor(Math.random() * 52))
  if (lowerCase && !upperCase){
    return passwordLetter.toLowerCase();
  } else if (!lowerCase && upperCase){
    return passwordLetter.toUpperCase();
  } else {
    return passwordLetter;
  };
};

//Generates random number 0-9
function randomNumber(){
  return Math.floor(Math.random()*10);
};

// Generate random special character picked from string
function randomSpecial (){
  var special = '!()?[]`~;:!#$%^&*+=';
  return special.charAt(Math.floor(Math.random() * special.length));
};

// console.log(randomLetter());
// console.log(randomNumber());
// console.log(randomSpecial());

var password = "";

if (number && specialCharacter){
  function numberAndSpecialPassword(){
    for (var i = 0; i < passwordLength; i++){
      var randomFunction = Math.floor(Math.random()*3);
      if (randomFunction === 1){
        password = password.concat(randomLetter());
      } else if (randomFunction === 2){
        password = password.concat(randomNumber());
      } else {
        password = password.concat(randomSpecial());
      }
    } return password;
  } console.log(numberAndSpecialPassword());
} else if (number && !specialCharacter){
  function numberPassword(){
    for (var i = 0; i < passwordLength; i++){
      var randomFunction = Math.floor(Math.random()*2);
      if (randomFunction === 1){
        password = password.concat(randomLetter());
      } else {
      password = password.concat(randomNumber());
      }
    } return password;
  } console.log(numberPassword());
} else if (!number && specialCharacter){
  function specialPassword(){
    for (var i = 0; i < passwordLength; i++){
  var randomFunction = Math.floor(Math.random()*2);
      if (randomFunction === 1){
        password = password.concat(randomLetter());
      } else {
      password = password.concat(randomSpecial());
      }
    } return password;
  } console.log(specialPassword());
} else {
//if there are no numbers or special characters chosen
  function justLetterPassword () {
    for (var i = 0; i < passwordLength; i++){
    password = password.concat(randomLetter());
    } return password;
  } console.log(justLetterPassword());
}

// // Add event listener to generate button
// generateBtn.addEventListener("click", generatePassword);
