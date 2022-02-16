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
  var numb = false;
  var specialchar = false;
  var upperCase = false;
  var lowerCase = false;
  var selections = 0;
  var lowerLet = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `i`, `j`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`];
  var upperLet = [`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`, `M`, `N`, `O`, `P`, `Q`, `R`, `S`, `T`, `U`, `V`, `W`, `X`, `Y`, `Z`];
  var numbs = [`0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`];
  var characters = [`!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, '\\', `]`, `^`, `_`, '`', `{`, `|`, `}`, `~`];
  console.log(characters[23]);
  while (numb == false && specialchar == false && upperCase == false && lowerCase == false) {
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
    var specialchar = prompt("Do you want Special Characters? (Y)es, (N)o");
    specialchar = specialchar.toLowerCase();
    //validate choice and convert anything to boolean
    while (specialchar != "yes" || specialchar != "no") {
      if (specialchar == "yes" || specialchar == "no") {
        break;
      } else if (specialchar == "y" || specialchar == "n") {
        break;
      }
      alert("Must choose (Y)es or (N)o");
      specialchar = prompt("Do you want Special Characters? (Y)es, (N)o");
      specialchar = specialchar.toLowerCase();
    }
    //convert to boolean
    if (specialchar == "y" || specialchar == "yes") {
      specialchar = true;
    } else {
      specialchar = false;
    }
    console.log(specialchar);

    if (numb == false && specialchar == false && upperCase == false && lowerCase == false) {
      alert("You must have at least one selection");
      //reask questions if all answers are no      
    }
  }
  //arays for choices to pull from for final password
  //creating empty array to fill with criteria
  var passwordLength = Number(lengthChoice);
  console.log(passwordLength);
  var passwordEL = new Array(passwordLength);
  console.log(passwordEL);
  //creating length and empty array for selections
  if (lowerCase == true) {
    selections++;
  }
  console.log(selections);
  if (upperCase == true) {
    selections++;
  }
  console.log(selections);
  if (numb == true) {
    selections++;
  }
  console.log(selections);
  if (specialchar == true) {
    selections++;
  }
  console.log(selections);
  var selectionLength = Number(selections);
  console.log(selectionLength);

  var selectionAr = new Array(selectionLength);

  if (lowerCase == true) {
    selectionAr = selectionAr.concat(lowerLet);
  }
  selectionAr = selectionAr.filter((a) => a);
  console.log(selectionAr);
  if (upperCase == true) {
    selectionAr = selectionAr.concat(upperLet);
  }
  selectionAr = selectionAr.filter((a) => a);
  console.log(selectionAr);
  if (numb == true) {
    selectionAr = selectionAr.concat(numbs);
  }
  selectionAr = selectionAr.filter((a) => a);
  console.log(selectionAr);
  if (specialchar == true) {
    selectionAr = selectionAr.concat(characters);
  }
  selectionAr = selectionAr.filter((a) => a);
  console.log(selectionAr);

  //select random part of each selection array with math.random
  //add to Password array based off true values upto specified length
  //set each index to random pick of array options
  //generate random password based off of selected criteria
  for(i = 0; i<passwordLength; i++){
    passwordEL[i] = selectionAr[Math.floor(Math.random() * selectionAr.length)];
    console.log(passwordEL);
  }
  var password = passwordEL.join('');
  console.log(password);
  //display password in box or alert
}


