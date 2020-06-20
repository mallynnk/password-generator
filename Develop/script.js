
var lengthReq = function() {
    length = window.prompt("Please enter a password length between 8 and 128 characters");
      console.log(length)
      if (length >= 8 && length <=128){
        return length;
      }
      else {
        window.alert("please enter a valid option");
      lengthReq();     
      }
    };


var getUppercase = function() {
  var uppercase = window.prompt("Would you like uppercase letters in your password, yes or no?") 
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
  var numbers = window.prompt("Would you like numbers letters in your password, yes or no?") 
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
  var specialChar = window.prompt("Would you like numbers letters in your password, yes or no?") 
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






// variables

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var password = "";

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