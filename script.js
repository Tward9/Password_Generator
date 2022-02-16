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

//create generatePassword function
function generatePassword() {
  //prompts set up password criteria
  var proceed = confirm("Do you want to generate a Password");
  console.log(proceed);
  if (proceed == false) {
    return;
  }
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
  console.log(lengthChoice);
  //choice two, lowercase
  var lowerCase = prompt("Do you want Lowercase Letters? (Y)es, (N)o");
  lowerCase = lowerCase.toLowerCase();
  //validate choice and convert anything to boolean
  while (lowerCase != "yes" || lowerCase != "no") {
    if (lowerCase == "yes" || lowerCase == "no") {
      break;
    } else if (lowerCase == "y" || lowerCase == "n") {
      break;
    }
    alert("Must choose (Y)es or (N)o");
    lowerCase = prompt("Do you want Lowercase Letters? (Y)es, (N)o");
    lowerCase = lowerCase.toLowerCase();
  }
  //convert to boolean
  if (lowerCase == "y" || lowerCase == "yes") {
    lowerCase = true;
  } else {
    lowerCase = false;
  }
  console.log(lowerCase);

  //choice three, uppercase
  var upperCase = prompt("Do you want Uppercase Letters? (Y)es, (N)o");
  upperCase = upperCase.toLowerCase();
  //validate choice and convert anything to boolean
  while (upperCase != "yes" || upperCase != "no") {
    if (upperCase == "yes" || upperCase == "no") {
      break;
    } else if (upperCase == "y" || upperCase == "n") {
      break;
    }
    alert("Must choose (Y)es or (N)o");
    upperCase = prompt("Do you want Uppercase Letters? (Y)es, (N)o");
    upperCase = upperCase.toLowerCase();
  }
  //convert to boolean
  if (upperCase == "y" || upperCase == "yes") {
    upperCase = true;
  } else {
    upperCase = false;
  }
  console.log(upperCase);

  //choice four, numbers
  var numb = prompt("Do you want Numbers? (Y)es, (N)o");
  numb = numb.toLowerCase();
  //validate choice and convert anything to boolean
  while (numb != "yes" || numb != "no") {
    if (numb == "yes" || numb == "no") {
      break;
    } else if (numb == "y" || numb == "n") {
      break;
    }
    alert("Must choose (Y)es or (N)o");
    numb = prompt("Do you want Numbers? (Y)es, (N)o");
    numb = numb.toLowerCase();
  }
  //convert to boolean
  if (numb == "y" || numb == "yes") {
    numb = true;
  } else {
    numb = false;
  }
  console.log(numb);

  //choice five, special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~

  //validate choice five selection
  //reask questions if all answers are no
  //arays for choices to pull from for final password
  //numbers, letters upper, letters lower, spectial characters
  //select random part of each selection array with math.random
  //add to Password array based off true values upto specified length
  //set each index to random pick of array options
  //generate random password based off of selected criteria

  //display password in box or alert
}


