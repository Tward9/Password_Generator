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

//clicking button presents several propmpts to user

//prompts set up password criteria

//user responds to prompts, responses stored to select password criteria

//first choice, password length 8 characters up to and including 128 characters
//validate choice one selection

//choice two, lowercase
//validate choice two selection

//choice three, uppercase
//validate choice three selection

//choice four, numbers
//validate choice four selection

//choice five, special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
//validate choice five selection

//generate random password based off of selected criteria

//display password in box or alert
