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
    alert("The next three screens will ask you what types of characters you would like to be included in your password. \nIf you choose 'No' for all, your password will only contain lowercase letters. ")
  }
  return passwordLength;
}

//Uppercase characters in password
function determineUppercase(){
  uppercaseCheck = prompt("do you want to include uppercase latters in your password \n(Yes or No)");
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === ""){
    alert("Answer Yes or No");
    determineUppercase();

  }else if (uppercaseCheck === "yes" || uppercaseCheck === "y"){
    uppercaseCheck = true;
    return uppercaseCheck;

  }else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
    uppercaseCheck = false;
    return uppercaseCheck;

}else {
  alert("answer yes or no");
  determineUppercase;
}
return uppercaseCheck;
}

//Numbers in password 
function determineNumbers(){
  numberCheck = prompt("do you want to include numbers in your password \n(Yes or No)");
  numberCheck =numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === ""){
    alert ("answer Yes or No");
    determineNumbers();
  }else if (numberCheck === "yes" || numberCheck === "y"){
    numberCheck = true;
    return numberCheck;

}else if (numberCheck === "no" || numberCheck === "n"){
    numberCheck = false;
    return numberCheck;

}else {
  alert("answer Yes or No");
  determineNumbers();
}
return numberCheck;
}

//Special characters in password
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Yes or No)");
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === ""){
    alert ("answer Yes or No");
    determineSpecial();
  }else if (specialCheck === "yes" || specialCheck === "y"){
    specialCheck = true;
    return specialCheck;

}else if (specialCheck === "no" || specialCheck === "n"){
  specialCheck = false;
  return specialCheck;

}else {
  alert("answer Yes or No");
  determineNumbers();
}
return specialCheck;
}

//Function used to take all the input from the previous functions and generate a password using a random number generator
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

var characters = lowercaseChar;
var password = "";
if (uppercaseCheck && numberCheck && specialCheck){
  characters += uppercaseChar + numberChar + specialChar;

}else if (uppercaseCheck && numberCheck){
  characters += uppercaseChar + numberChar;

}else if (numberCheck && specialCheck){
  characters += numberChar + specialChar;

}else if (uppercaseCheck && specialCheck){
  characters += uppercaseChar + specialChar;

}else if (uppercaseCheck){
  characters += uppercaseChar;

}else if(numberCheck){
  characters += numberChar;

}else if (specialCheck){
  characters += specialChar;

}else{
  characters === lowercaseChar;
}

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);