// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write Password Function
function generatePassword() {
  var passwordLength= prompt("Enter the password length (Enter a number between 8-128)");
  var passwordLengthBad = true;

  while(passwordLengthBad) {
      if (passwordLength>=8 && passwordLength<=128) {
          passwordLengthBad = false;
      }
      else {
          alert("Remember your password length must be between the numbers 8 and 128 ONLY.");
          passwordLength= prompt("Enter the password length (Enter a number between 8-128)");
      }
  }
  

  var lowercaseWanted= confirm("Would you like your password to have lowercase letters?");
  var uppercaseWanted= confirm("Would you like your password to have uppercase letters?");
  var numbersWanted=confirm("Would you like your password to have numbers?");
  var specialsWanted=confirm("Would you like to have special characters in your password?");

  var charactersBad = true;

  while(charactersBad) {
      if (lowercaseWanted || uppercaseWanted || numbersWanted || specialsWanted) {
          charactersBad = false;
      }
      else {
          alert("Select at least one of the character options.");
          lowercaseWanted= confirm("Would you like your password to have lowercase letters?");
          uppercaseWanted= confirm("Would you like your password to have uppercase letters?");
          numbersWanted=confirm("Would you like your password to have numbers?");
          specialsWanted=confirm("Would you like to have special characters in your password?");
      }
  }

  var lowercaseLetters='abcdefghijklmnopqrstuvwxyz';
  var uppercaseLetters='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbers='1234567890';
  var specials='!@#$%^&*()_+}{:>?<';

  var possibleCharacters='';

  var randomPassword='';

  if (lowercaseWanted) {
    possibleCharacters += lowercaseLetters;
  }
  if (uppercaseWanted) {
    possibleCharacters += uppercaseLetters;
  }
  if (numbersWanted) {
    possibleCharacters += numbers;
  }
  if (specialsWanted) {
    possibleCharacters += specials;
  }

  //Loop to build password 1 letter at a time
  for (var i = 1, n = passwordLength; i <= passwordLength; i++) {
    var char = Math.floor(Math.random() * possibleCharacters.length + 1);
    randomPassword += possibleCharacters.charAt(char);
  }

  return randomPassword;
}