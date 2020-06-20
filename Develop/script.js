

var lengthReq = function() {
  //ask user to select password length
  length = window.prompt("Please enter a password length between 8 and 128 characters");
  console.log(length)
  //if user selects 'cancel', reset generator 
  if (length === null) {
    return null
  }
  //if user enters a length within the requirements
  else if (length >= 8 && length <=128) { 
    return length;
  }
  //if user enters a length outside of the requirements,  function resets
  else {
    window.alert("please enter a valid option");
    lengthReq();     
  }
};

var getUppercase = function() {
  //ask user if they want to include uppercase letters in password
  var uppercase = window.prompt("Would you like uppercase letters in your password, yes or no?") 
  //if user selects 'cancel', reset generator 
  if (uppercase === null) {
    return null
  }
  //if user selects 'yes', 
  uppercase = uppercase.toLowerCase(); 
  if (uppercase === "yes") {
    var uppercaseChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  } 
  //if user selects 'no', results in empty string
  else if (uppercase === "no") {
    var uppercaseChoice = ""
  }
  //if user enters an answer outside of requirements,  function resets
  else {
    window.alert("please enter a valid option!");
    return this.getUppercase()
  }
  return uppercaseChoice
};

var getLowercase = function() {
  //ask user if they want to include lowercase letters in password
  var lowercase = window.prompt("Would you like lowercase letters in your password, yes or no?") 
  //if user selects 'cancel', reset generator 
  if (lowercase === null) {
    return null
  }
  //if user selects 'yes'
  lowercase = lowercase.toLowerCase(); 
  if (lowercase === "yes") {
    var lowercaseChoice = "abcdefghijklmnopqrstuvwxyz" 
  } 
  //if user selects 'no', results in empty string
  else if (lowercase === "no") {
    var lowercaseChoice = ""
  }
  //if user enters an answer outside of requirements, function resets
  else {
    window.alert("please enter a valid option!");
   return this.getLowercase()
  }
  return lowercaseChoice;
};

var getNumbers = function() {
  //ask user if they want to include numbers in password
  var numbers = window.prompt("Would you like numbers in your password, yes or no?") 
  //if user selects 'cancel', reset generator 
  if (numbers === null) {
    return null
  }
  //if user selects 'yes'
  numbers = numbers.toLowerCase(); 
  if (numbers === "yes") {
    var numbersChoice = "0123456789" 
  } 
  //if user selects 'no', results in empty string
  else if (numbers === "no") {
    var numbersChoice = ""
  }
  //if user enters an answer outside of requirements, function resets
  else {
    window.alert("please enter a valid option!");
   return this.getNumbers()
  }
  return numbersChoice;
};

var getSpecialChar = function() {
  //asks user if they want to include special characters
  var specialChar = window.prompt("Would you like special characters in your password, yes or no?") 
  //if user selects 'cancel', reset generator 
  if (specialChar === null) {
    return null
  }
  //if user selects yes
  specialChar = specialChar.toLowerCase(); 
  if (specialChar === "yes") {
    var specialCharChoice = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } 
  //if user selects 'no', results in empty string
  else if (specialChar === "no") {
    var specialCharChoice = ""
  }
  //if user enters an answer outside of requirements, function resets
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