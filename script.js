function loginValidate() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("loginError");

    let correctUsername = "rishil";
    let correctPassword = "12345";

    if(username === correctUsername && password === correctPassword){

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("portfolio").style.display = "block";

        return false;

    } else {
        error.innerHTML = "Invalid Username or Password";
        return false;
    }
}

function logout(){
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}