// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;
//Length of Password
function determineLength(){
  passwordLength = prompt("chose how many characters long would you like your password to be (between 8-128 characters): ");

  if (passwordLength<8){
    alert("password length must be more than or equal to 8 characters");
    determineLength();
  }else if (passwordLength>128){
    alert("password length must be less than or equal to 128 characters");
    determineLength();
  }else if (NaN(passwordLength)){
    alert("password length must be a number between 8-128 characters");
    determineLength();
  }else{
    alert("The next three screens will ask you what types of characters you would like to be included in your password. If you choose 'No' for all, your password will only contain lowercase letters. ")
  }
  return passwordLength;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);