// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //create generatePassword function
  var generatePassword = function () {
    //prompts set up password criteria
    alert("Please input Password Criteria.");
    //user responds to prompts, responses stored to select password criteria
    //first choice, password length 8 characters up to and including 128 characters
    var lengthChoice = prompt("Select Password Length, minimum 8 characters, maximum 128 characters");
    //convert any strings to numbers 
    //validate choice one selection
    while (lengthChoice < 8 || lengthChoice > 128) {
      if (lengthChoice >= 8 && lengthChoice <= 128) {
        break;
      }
      alert("Password length selection must be between 8 and 128 characters");
      lengthChoice = prompt("Select Password Length, between 8 and 128 characters");
      //convert any string to numbers
    }
  }

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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//clicking button presents several propmpts to user


