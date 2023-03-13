

// Assignment code here

// Added character type variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


// Added generatePassword function
var generatePassword = function () {
  var newPassword = ""

  var passLength = prompt("Choose a password character length between 8 and 128 characters.");

  if (!passLength) {
    alert("Input value.");

  } else if (passLength < 8 || passLength > 128) {
    alert("Character length does not meet criteria.");


    //Added password length requirements
  } else if (passLength >= 8 || passLength <= 128) {
    var getLowerCase = confirm("Include lowercase?");
    var getUpperCase = confirm("Include uppercase?");
    var getNumeric = confirm("Include numbers?");
    var getSpecial = confirm("Include special characters?");


    // Created for loop statement
    for (var i = 0; i < passLength; i++) {

      if (getLowerCase === true && newPassword.length < passLength) {
        var index = Math.floor(Math.random() * lowerCase.length)
        newPassword = newPassword + lowerCase[index]
      }
      if (getUpperCase === true && newPassword.length < passLength) {
        var index = Math.floor(Math.random() * upperCase.length)
        newPassword = newPassword + upperCase[index]
      }
      if (getNumeric === true && newPassword.length < passLength) {
        var index = Math.floor(Math.random() * numeric.length)
        newPassword = newPassword + numeric[index]
      }
      if (getSpecial === true && newPassword.length < passLength) {
        var index = Math.floor(Math.random() * special.length)
        newPassword = newPassword + special[index]
      }
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);