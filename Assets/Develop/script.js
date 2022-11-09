    // Assignment Code //NOTE: WRITE A LITTLE BIT OF CODE AT A TIME THEN TEST IT ON THE BROWSER! 

    var generateBtn = document.querySelector("#generate");                          // RED BUTTON FROM HTML

    //ADDED GENERATE PASSWORD FUNCTION
    function generatePassword () {

      var usersChoice = prompt('Please choose the password length')
                                  
      var pwdLength = parseInt(usersChoice)                                         //Integer. parseInt(String) CONVERTS A STRING INTO A NUMBER AS LONG AS THE STRING CAN BE CONVERTED INTO THE NUMBER.

      if(isNaN(pwdLength)) {                                  
        alert('Please choose numbers only')
        return;
      }

      if(pwdLength < 8 || pwdLength > 128 ) {                                       //LOGICAL OPERATOR "OR" || BOTH HAVE TO BE TRUE IN ORDER TO CONTINUE.
        alert('Please choose a password length between 8 and 128 characters')
        return;
      }
      
      //below are the 4 criteria prompts window.confirm whether or not to include lowercase, uppercase, numeric, and/or special characters CONFIRM WINDOW

      var usersChoseLowercase = window.confirm('Would you like to include lowercase letters in your password?')
      var usersChoseUppercase = window.confirm('Would you like to include uppercase letters in your password?')
      var usersChoseSymbols = window.confirm('Would you like to include symbols in your password?')
      var usersChoseNumber = window.confirm('Would you like to include numbers in your password?')                   


      var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
      var specialSymbols = ['!', '"', '#', '$', '%', '&', '()', '*', '+', ',', '-', '.', "/", ':', ';', '<', '=', '>', '?', '@', '[']                               //" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
      var numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

      var pickedList = []                         //EMPTY ARRAY WHERE WHATEVER THE USER PICKS WILL BE STORED. 

      if (usersChoseLowercase === true) {         //IF USER PICKS LOWERCASE THEY WILL BE "PUSH"/ADDED TO THE PICKEDLIST EMPTY FUNCTION
        pickedList = pickedList.concat(lowerCaseLetters)
      }
      if (usersChoseUppercase === true) {
        pickedList = pickedList.concat(upperCaseLetters)
      }
      if (usersChoseSymbols === true) {
        pickedList = pickedList.concat(specialSymbols)
      }
      if(usersChoseNumber === true) {
        pickedList = pickedList.concat(numbersList)
      }
      if (pickedList.length === 0) {
        alert ('You must pick at least one charactor type')
        return;
      }
      // console.log(pickedList);
      // console.log(pickedList.length);

      let passwordPicked = '';

      for (let i = 0; i < pwdLength; i++) {
        passwordPicked += pickedList[Math.floor(Math.random() * pickedList.length) ]; 
        
      }

      return passwordPicked;
                                                                       
    }

    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
