const passwordForm = document.getElementById("passwordBox");
const minPassLength = 8;
const maxPassLength = 128;


let lwrCharsCheckbox = document.getElementsByName("lwrChars")[0];
let upprCharsCheckbox = document.getElementsByName("upprChars")[0];
let specialCharsCheckbox = document.getElementsByName("specialChars")[0];
let numbersCheckbox = document.getElementsByName("numbers")[0];

function createPassword() {

  
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseletters = lowercaseLetters.toUpperCase();
    const numbersList = "0123456789";
    const specialCharacters = "!@#$%^&*()_+{}|:?><[]";

    
    lettersLow = document.getElementsByName("lwrChars")[0].checked;
    lettersHigh =  document.getElementsByName("upprChars")[0].checked;
    numbers = document.getElementsByName("numbers")[0].checked;
    specials = document.getElementsByName("specialChars")[0].checked;

    
    let passwordLength = prompt("Length of password? (Must be from 8 to 128 characters)");

    
    if (lettersLow == false && lettersHigh == false && numbers == false && specials == false){
        alert("You must select at least one character type!")

        
    }
    
    if (passwordLength >= minPassLength && passwordLength <= maxPassLength) {

       
        password = "";

        
        console.log(specials, numbers, lettersLow, lettersHigh)

        
        for (i=0; i<passwordLength;i++) {
            
            if (lettersLow && password.length < passwordLength) {
                password = password+=lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
            }
            if (lettersHigh && password.length < passwordLength) {
                password = password+=uppercaseletters.charAt(Math.floor(Math.random() * uppercaseletters.length));

            }
            if (numbers && password.length < passwordLength) {
                password = password+=numbersList.charAt(Math.floor(Math.random() * numbersList.length));

            }
            if (specials && password.length < passwordLength) {
                password = password+=specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
            }

    }

    
    passwordForm.value = password;
}
    else{
        alert("Password MUST BE BETWEEN 8 AND 128 characters!")
    }
}


function copyToClipboard() {
    let copyPass = document.getElementById("passwordBox");
    copyPass.focus();
    copyPass.select();
    document.execCommand("copy");
    alert("Password copied!");
  }