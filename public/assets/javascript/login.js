var inputField = document.getElementsByTagName("input")[0];
var submit = document.getElementsByClassName("direction")[1];
var account = {email: null, password: null};
submit.addEventListener("click", setCred);

//clears the input field
function clearInputField(){
    inputField.value = "";
}

//checks if user is entering email, or password
function checkCredType(){
    if (submit.innerHTML == "Next"){
        return true;
    }
    return false;
}

//checks to see if potential value is in field
function checkField(){
    if (inputField.value != ""){ 
        return true;
    }
    return false;
}

//sets email and password to values
function setCred(){
    if (checkField()){
        if (checkCredType()){
            account.email = inputField.value;
            showPasswordAndSubmit();
            console.log("email: " + account.email);
        }
        else{
            account.password = inputField.value;
            console.log("password: " + account.password);
        }
    }
    else{
        inputField.style.border = "solid";
        inputField.style.borderWidth = "8px";
        inputField.style.borderColor = "yellow";
        setTimeout(function(){inputField.style.border = "none"}, 550);
    }
}

//sets interface to ask for password
function showPasswordAndSubmit(){
    document.getElementsByClassName("direction")[0].innerHTML = "Password";
    inputField.type = "password";
    inputField.value = "";
    submit.innerHTML = "Log In";
}
