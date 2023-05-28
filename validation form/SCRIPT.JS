function validate() {
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var cpassword = document.getElementById("cpassword").value

    checkusername(username)
    checkemail(email)
    checkpassword(password)
    checkpasswordmatch(password, cpassword)

}

function checkusername(username) {
    if (username.length > 7) {
        document.getElementById('username_error').innerText = "";
    }
    else {
        document.getElementById('username_error').innerText = "Username must be atleast 8 characters long";
    }
}
function checkemail(email){
    if(email.includes('@gmail')&& email.length>8){
        document.getElementById('email_error').innerText="";
    } else {
        document.getElementById('email_error').innerText="email must contain @gamil  and atleast 8 characters long";
    }
    
}
function checkpassword(password){
    if(password.length>7 && password.includes('.') )
    {
        document.getElementById('password_error').innerText="";
    } else {
        document.getElementById('password_error').innerText="password must contain atleast 8 characters long";
     
    }
}
function checkpasswordmatch( password , cpassword){
    if(cpassword == password && password!='')
    {
        document.getElementById('cpassword_error').innerText="";
    } else {
        document.getElementById('cpassword_error').innerText="does not matches the password";
     
    }
}