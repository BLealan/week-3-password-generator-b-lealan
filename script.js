var generateBtn = document.querySelector("#generate");

function writePassword(){
//User generates length of password
  var passwordLength = prompt("How long would you like your password to be? (Decimals will be rounded down!)");
  var passwordText = document.querySelector("#password");

// If password length is outside acceptance criteria it will ask for another number
  while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Please pick a number between 8 and 128")
  }
//Prompt returns a string so is changed to integer in order to use in generatePassword() loop
  passwordLength = Math.floor(Number(passwordLength));
  console.log ("Password is " + passwordLength + " character long.");

 //User determines type of characters included - if confirm is true possible characters added to variable with empty string 
  var totalPasswordCharcters = "";
  var input = [];

  var lowerCase = confirm("Would you like lower case characters?")
  input.push(lowerCase);
  var upperCase = confirm("Would you like upper case characters?")
  input.push(upperCase);
  var number = confirm("Would you like the password to contain numbers?")
  input.push(number);
  var specialCharacter = confirm("Would you like special characters?")
  input.push(specialCharacter);
  //If all inputs were false a window will remind user to input
  if (!input[0] && !input[1] && !input[2] &&!input[3]) {
    alert("Please select at lease one value you wish to have!");
  };

  if (input[0]) {
    totalPasswordCharcters = totalPasswordCharcters.concat("abcdefghijklmnopqrstuvwxyz");
  };
  if (input[1]) {
    totalPasswordCharcters = totalPasswordCharcters.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  };
  if (input[2]) {
    totalPasswordCharcters = totalPasswordCharcters.concat("0123456789");
  };
  if (input[3]) {
    totalPasswordCharcters = totalPasswordCharcters.concat("'!()?[]`~;:!#$%^&*+=';");
  };

  /*Function to iterate over user-generated length of password, chosing a random character from variable of 
  possibilities and concatenating to empty password string*/
  function generatePassword() {
    var newPassword = ""
    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * totalPasswordCharcters.length);
        newPassword += totalPasswordCharcters.charAt(randomNumber); 
      }
        passwordText.value = newPassword;
        return newPassword;
    }
  console.log(generatePassword());
}