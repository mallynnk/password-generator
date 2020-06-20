
var lengthReq = function() {
    while (true) {
      length = window.prompt("Please enter a password length between 8 and 128 characters");
      console.log(length)
      if (length >= 8 && length <=128){
        return length;
      }
      else {
        window.alert("please enter a valid option");
      }
      lengthReq();
      break;
    }
};

var uppercaseChoice = function() {
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
   return this.uppercaseChoice()
  }
};

var lowercaseChoice = function() {
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
   return this.lowercaseChoice()
  }
};

var numbersChoice = function() {
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
   return this.numbersChoice()
  }
};

var specialCharChoice = function() {
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
   return this.specialCharChoice()
  }
};


var generate = function () {
 //add all variables together
 var allChoices = uppercaseChoice + lowercaseChoice + numbersChoice + specialCharChoice 
 //set password blank to start
 var password = "";
 //for loop to add values till length stops the loop 
         //reference: https://randompasswordgenerator.org/javascript-password-generator.html 
 for (var i = 0; i < length; i++) {
     var character = Math.floor(Math.random() * allChoices.length);
     password += allChoices.substring(character, character + 1);
 }
 //return the value of all values from the for loop
 return password;
};



// var generate = function() {
//   var length = lengthReq();
  
//   // ask what they would like in their password


// var lowercase = window.prompt("Would you like lowercase letters in your password, yes or no?")
// lowercase = lowercase.toLowerCase();
// if (lowercase === "yes") { 
//   var lowercase = "abcdefghijklmnopqrstuvwxyz";
// } 
// else {
//   lowercase = "";
// }
// console.log(lowercase);

// var numbers = window.prompt("Would you like numbers in your password, yes or no?")
// numbers = numbers.toLowerCase();
// if (numbers === "yes") {
//   var numbers = "0123456789";
// } 
// else {
//   numbers = "";
// }
// console.log(numbers);

// var specialChar = window.prompt("Would you like special characters in your password, yes or no?")
// specialChar = specialChar.toLowerCase();
// if (specialChar === "yes") {
//   var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// } 
// else {
//   specialChar = ""
// }
// console.log(specialChar);
// }

// function startGenerator() {
//   if (generateBtn) {
//     lengthReq();
//   }
// };


// generate();





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