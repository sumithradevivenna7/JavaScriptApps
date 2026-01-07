//validation logic 
function validate(){
    //request data gathering logic
    let userName = document.getElementById("username").value();
    let password = document.getElementById("pass").value();
    let regex = /[a-z][A-Z]/;
    //validation logic
    if (user_name == ""){
        alert("please enter username");
        return  false;
    }
    if (password == ""){
        alert("please enter password");
        return  false;
    }
    if(password.length<8 || password.length>12){
        alert("password should be min 8 characters and max 12 characters");
        return false;
    }
    if (!regex.test(password)){
        alert("password should be combination of small letters,capital letters and numbers");
        return false;
    }
    
    return true;
}