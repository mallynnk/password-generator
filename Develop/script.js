
var lengthReq = function() {
    length = window.prompt("Please enter a password length between 8 and 128 characters");
    console.log(length)
      if (length === null) {
        return null
      }
      else if (length >= 8 && length <=128) { 
        return length;
      }
      else {
        window.alert("please enter a valid option");
      lengthReq();     
      }
    };


var getUppercase = function() {
  var uppercase = window.prompt("Would you like uppercase letters in your password, yes or no?") 
  if (uppercase === null) {
    return null
  }
  uppercase = uppercase.toLowerCase(); 
  if (uppercase === "yes") {
    var uppercaseChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  } 
  else if (uppercase === "no") {
    var uppercaseChoice = ""
  }
  else {
    window.alert("please enter a valid option!");
   return this.getUppercase()
  }
  return uppercaseChoice
};

var getLowercase = function() {
  var lowercase = window.prompt("Would you like lowercase letters in your password, yes or no?") 
  if (lowercase === null) {
    return null
  }
  lowercase = lowercase.toLowerCase(); 
  if (lowercase === "yes") {
    var lowercaseChoice = "abcdefghijklmnopqrstuvwxyz" 
  } 
  else if (lowercase === "no") {
    var lowercaseChoice = ""
  }
  else {
    window.alert("please enter a valid option!");
   return this.getLowercase()
  }
  return lowercaseChoice;
};

var getNumbers = function() {
  var numbers = window.prompt("Would you like numbers in your password, yes or no?") 
  if (numbers === null) {
    return null
  }
  numbers = numbers.toLowerCase(); 
  if (numbers === "yes") {
    var numbersChoice = "0123456789" 
  } 
  else if (numbers === "no") {
    var numbersChoice = ""
  }
  else {
    window.alert("please enter a valid option!");
   return this.getNumbers()
  }
  return numbersChoice;
};

var getSpecialChar = function() {
  var specialChar = window.prompt("Would you like special characters in your password, yes or no?") 
  if (specialChar === null) {
    return null
  }
  specialChar = specialChar.toLowerCase(); 
  if (specialChar === "yes") {
    var specialCharChoice = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  else if (specialChar === "no") {
    var specialCharChoice = ""
  }
  else {
    window.alert("please enter a valid option!");
   return this.getSpecialChar()
  }
  return specialCharChoice;
};


function generatePassword() {
  var length = lengthReq();
  if (length === null) {
    return "";
  }
  var uppercase = getUppercase(); 
  if (uppercase === null) {
    return "";
  }
  var lowercase = getLowercase();
  if (lowercase === null) {
    return "";
  } 
  var numbers = getNumbers();
  if (numbers === null) {
    return "";
  }
  var special = getSpecialChar();
  if (special === null) {
    return "";
  }
  var allChoices = uppercase + lowercase + numbers + special;
  if (!allChoices) {
    window.alert("must select 'yes' for at least one option.");
    return ""
  }
  else {
  console.log(allChoices)  
  var password = "";
  for (var i = 0; i < length; i++) {
    var character = Math.floor(Math.random() * allChoices.length);
    password += allChoices.substring(character, character + 1);
}
//return the value of all values from the for loop
return password;
}
};

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