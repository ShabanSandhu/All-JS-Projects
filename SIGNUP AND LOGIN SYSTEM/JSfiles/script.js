// for toastify funtion
let notification = function (text, duration, gravity, position, colour) {
    Toastify({
        text: text,
        duration: duration,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: gravity, // `top` or `bottom`
        position: position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: colour,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
// end toastify
 
// for variables decleartions
let OptionPage = document.getElementById("OptionPage")
let LoginOptionBtn = document.getElementById("LoginOptionBtn")
let SignupOptionBtn = document.getElementById("SignupOptionBtn")
let LoginForm = document.getElementById("LoginForm")
let SignupForm = document.getElementById("SignupForm")
let HomePage = document.getElementById("HomePage")
let LoginBtn = document.getElementById("LoginBtn")
let SignupBtn = document.getElementById("SignupBtn")
let LogoutBtn = document.getElementById("LogoutBtn")
let EmailInputForLogin = document.getElementById("EmailInputForLogin")
let PasswordInputForLogin = document.getElementById("PasswordInputForLogin")
let FirstNameInputForSignup = document.getElementById("FirstNameInputForSignup")
let LastNameInputForSignup = document.getElementById("LastNameInputForSignup")
let EmailInputForSignup = document.getElementById("EmailInputForSignup")
let PasswordInputForSignup = document.getElementById("PasswordInputForSignup")
let OptionForgetPassword = document.getElementById("OptionForgetPassword")
let NewPasswordForm = document.getElementById("NewPasswordForm")
let NewPasswordFormSubmitBtn = document.getElementById("NewPasswordFormSubmitBtn")
let EmailInputForNewPasswordForm = document.getElementById("EmailInputForNewPasswordForm")
let PasswordInputForNewPasswordForm = document.getElementById("PasswordInputForNewPasswordForm")
// end for variables declearations



// for email validation
let emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// end email validation



// empty input value for signp form
let SignUpFormValueIsEmpty = function () {
    FirstNameInputForSignup.value = "", LastNameInputForSignup.value = "", EmailInputForSignup.value = "", PasswordInputForSignup.value = "";
}
//end empty input value for signp form



// empty input value for login form
let LoginFormValueIsEmpty = function () {
    EmailInputForLogin.value = "", PasswordInputForLogin.value = "";
}
//end empty input value for login form



// login option btn
LoginOptionBtn.onclick = function () {
    debugger
    event.preventDefault();
    OptionPage.style.display = "none";
    LoginForm.style.display = "block";
    EmailInputForLogin.focus();
}
// end login option btn


// signup option btn
SignupOptionBtn.onclick = function () {
    event.preventDefault()
    OptionPage.style.display = "none"
    SignupForm.style.display = "block"
    FirstNameInputForSignup.focus();
}
// end signup option btn


// for sign up btn
SignupBtn.onclick = function () {
    debugger

    let user =
    {
        "first name": FirstNameInputForSignup.value,
        "last name": LastNameInputForSignup.value,
        "email": EmailInputForSignup.value,
        "password": PasswordInputForSignup.value,
    }

    event.preventDefault();

    if (!localStorage.getItem("UsersList")) {
        if (!FirstNameInputForSignup.value || FirstNameInputForSignup.value.length < 3) {
            notification("Please Enter Your First Name Correctely", "3000", "top", "right", "#dc143c");
            FirstNameInputForSignup.value = "";
            FirstNameInputForSignup.focus();
        }
        else if (!LastNameInputForSignup.value || LastNameInputForSignup.value.length < 3) {
            notification("Please Enter Your Second Name Correctely", "3000", "top", "right", "#dc143c");
            LastNameInputForSignup.value = "";
            LastNameInputForSignup.focus();
        }
        else if (!EmailInputForSignup.value || !EmailInputForSignup.value.match(emailValid)) {
            notification("Please Enter Your Email Correctely", "3000", "top", "right", "#dc143c");
            EmailInputForSignup.value = "";
            EmailInputForSignup.focus();
        }
        else if (!PasswordInputForSignup.value || PasswordInputForSignup.value.length < 8) {
            notification("Please Enter Your Email Password Correctely", "3000", "top", "right", "#dc143c");
            PasswordInputForSignup.value = "";
            PasswordInputForSignup.focus();
        }


        else {

            let NewArrayForUsers = [];
            NewArrayForUsers.push(user)
            var ConverArrayToString = JSON.stringify(NewArrayForUsers)
            localStorage.setItem("UsersList", ConverArrayToString)
            SignUpFormValueIsEmpty()
            SignupForm.style.display = "none";
            HomePage.style.display = "block"
            notification("User has been Successfully Registered and Directely Login for this Application", "4000", "top", "center", "#22b569");
        }


    }

    else {

        if (!FirstNameInputForSignup.value || FirstNameInputForSignup.value.length < 3) {
            notification("Please Enter Your First Name Correctely", "3000", "top", "right", "#dc143c");
            FirstNameInputForSignup.value = "";
            FirstNameInputForSignup.focus();
        }
        else if (!LastNameInputForSignup.value || LastNameInputForSignup.value.length < 3) {
            notification("Please Enter Your Second Name Correctely", "3000", "top", "right", "#dc143c");
            LastNameInputForSignup.value = "";
            LastNameInputForSignup.focus();
        }
        else if (!EmailInputForSignup.value || !EmailInputForSignup.value.match(emailValid)) {
            notification("Please Enter Your Email Correctely", "3000", "top", "right", "#dc143c");
            EmailInputForSignup.value = "";
            EmailInputForSignup.focus();
        }
        else if (!PasswordInputForSignup.value || PasswordInputForSignup.value.length < 8) {
            notification("Please Enter Your Email Password Correctely", "3000", "top", "right", "#dc143c");
            PasswordInputForSignup.value = "";
            PasswordInputForSignup.focus();
        }

        else {
            var GLSIA = localStorage.getItem("UsersList");
            var CSTAOGLSIA = JSON.parse(GLSIA)
            let CurrentEmail = EmailInputForSignup.value
            let UserFind = CSTAOGLSIA.find((item) => item.email.toLowerCase() == CurrentEmail.toLowerCase())

            if (UserFind) {
                notification("User are already Registered is this Email Address,Please change your Email", "6000", "top", "center", "#dc143c");
                EmailInputForSignup.value = "";
                EmailInputForSignup.focus();
            }

            else {

                var GetLocalStorageIsAvailable = localStorage.getItem("UsersList");
                let ConvertStringToArrayOfGetLocalStorageIsAvailable = JSON.parse(GetLocalStorageIsAvailable)
                ConvertStringToArrayOfGetLocalStorageIsAvailable.push(user)
                
                localStorage.setItem("UsersList", JSON.stringify(ConvertStringToArrayOfGetLocalStorageIsAvailable))
                SignUpFormValueIsEmpty()
                SignupForm.style.display = "none";
                HomePage.style.display = "block"
                notification("User has been Successfully Registered and Directely Login for this application", "3000", "top", "center", "#22b569");
            }
        }
    }
}
// end for sign up btn


// start for login btn
LoginBtn.onclick = function () {
    debugger
    event.preventDefault();

    var GetLocalStorageIsAvailable = localStorage.getItem("UsersList");
    let ConvertStringToArrayOfGetLocalStorageIsAvailable = JSON.parse(GetLocalStorageIsAvailable)

    let CurrentEmail = EmailInputForLogin.value
    let CurrentPassword = PasswordInputForLogin.value
    // let userFind = ConvertStringToArrayOfGetLocalStorageIsAvailable.find((item) => item.email == CurrentEmail && item.password == CurrentPassword)


    if (!localStorage.getItem("UsersList") || localStorage.getItem("UsersList")) {
        if (!EmailInputForLogin.value || !EmailInputForLogin.value.match(emailValid)) {
            notification("Please Enter Your Email Correctely", "3000", "top", "right", "#dc143c");
            EmailInputForLogin.value = "";
            EmailInputForLogin.focus();
        }
        else if (!PasswordInputForLogin.value || PasswordInputForLogin.value.length < 8) {
            notification("Please Enter Your Email Password Correctely", "3000", "top", "right", "#dc143c");
            PasswordInputForLogin.value = "";
            PasswordInputForLogin.focus();
        }

        else {
            if (!localStorage.getItem("UsersList")) {
                alert("user are not registered for this application and if you are registered this applications so fill the signup form")
                LoginFormValueIsEmpty();
                LoginForm.style.display = "none";
                SignupForm.style.display = "block";
                notification("please fill the signup form for registeration this application", "3000", "top", "right", "#dc143c");
                FirstNameInputForSignup.focus();
            }

            else {
                let userFind = ConvertStringToArrayOfGetLocalStorageIsAvailable.find((item) => item.email == CurrentEmail && item.password == CurrentPassword)
                if (userFind) {
                    LoginFormValueIsEmpty();
                    LoginForm.style.display = "none"
                    HomePage.style.display = "block"
                    notification("user has been successfully login for this application", "1000", "top", "center", "#22b569");
                    localStorage.setItem("LoginedUser", JSON.stringify(userFind))

                }

                else {
                    alert("user are not registered for this application and if you are registered this applications so fill the signup form")
                    LoginFormValueIsEmpty();
                    LoginForm.style.display = "none";
                    SignupForm.style.display = "block";
                    notification("please fill the signup form for registeration this application", "3000", "top", "right", "#dc143c");
                    FirstNameInputForSignup.focus();
                }

            }
        }
    }
}
// end for login btn


// logout btn
LogoutBtn.onclick = function () {
    event.preventDefault();
    HomePage.style.display = "none";
    OptionPage.style.display = "block";
    notification("user has been successfully logout", "3000", "top", "center", "#22b569");
    let GLSOFU = localStorage.getItem("LoginedUser")
    localStorage.removeItem("LoginedUser")
}
//end logout btn


// option password 
OptionForgetPassword.onclick = function () {
    debugger
    event.preventDefault();

    var GetLocalStorageIsAvailable = localStorage.getItem("UsersList");
    let ConvertStringToArrayOfGetLocalStorageIsAvailable = JSON.parse(GetLocalStorageIsAvailable)

    let CurrentEmail = EmailInputForLogin.value
    // let CurrentPassword = PasswordInputForLogin.value
    let userFind = ConvertStringToArrayOfGetLocalStorageIsAvailable.find((item) => item.email == CurrentEmail)

    if (!EmailInputForLogin.value) {
        notification("Please Enter Your Email for Forget The Email Password", "3000", "top", "right", "#dc143c");
        EmailInputForLogin.value = "";
        EmailInputForLogin.focus()
    }
    else if (!EmailInputForLogin.value.match(emailValid) || !userFind) {
        notification("Please Enter Your Coorect Email for Forget The Email Password", "3000", "top", "right", "#dc143c");
        EmailInputForLogin.focus()
    }

    else {
        EmailInputForLogin.value = "";
        LoginForm.style.display = "none"
        NewPasswordForm.style.display = "block"
        notification("Please Enter Your New Password of current Email", "5000", "top", "center", "black");
        EmailInputForNewPasswordForm.value = CurrentEmail;
        PasswordInputForNewPasswordForm.focus();
    }
}
// end option password


// new password
NewPasswordFormSubmitBtn.onclick = function () {
    debugger
    event.preventDefault();

    var GetLocalStorageIsAvailable = localStorage.getItem("UsersList");
    let ConvertStringToArrayOfGetLocalStorageIsAvailable = JSON.parse(GetLocalStorageIsAvailable)
    let CurrentEmail = EmailInputForNewPasswordForm.value
    let MatchedEmail = ConvertStringToArrayOfGetLocalStorageIsAvailable.find((item) => item.email == CurrentEmail)
    let FindIndexOfMatchedEmail = ConvertStringToArrayOfGetLocalStorageIsAvailable.findIndex((item) => item.email == CurrentEmail)


    if (!EmailInputForNewPasswordForm.value) {
        notification("Please Enter Your Email for Create The New Email Password", "3000", "top", "right", "#dc143c");
        EmailInputForNewPasswordForm.value = "";
        EmailInputForNewPasswordForm.focus()
    }
    else if (!EmailInputForNewPasswordForm.value.match(emailValid)) {
        notification("Please Enter Your correct Email for Create The New Email Password", "3000", "top", "right", "#dc143c");
        EmailInputForNewPasswordForm.value = "";
        EmailInputForNewPasswordForm.focus()
    }
    else if (!MatchedEmail) {
        notification("User are Not Registered in this Email, Please Enter Your Correct Email", "4000", "top", "right", "#dc143c");
        EmailInputForNewPasswordForm.value = "";
        EmailInputForNewPasswordForm.focus()
    }
    else if (!PasswordInputForNewPasswordForm.value) {
        notification("Please Enter Your New Password", "4000", "top", "right", "#dc143c");
        PasswordInputForNewPasswordForm.value = "";
        PasswordInputForNewPasswordForm.focus();
    }

    else if (PasswordInputForNewPasswordForm.value.length < 8) {
        notification("The new password length is less then eight digit", "4000", "top", "right", "#dc143c");
        PasswordInputForNewPasswordForm.value = "";
        PasswordInputForNewPasswordForm.focus();
    }

    else {
        let CurrentPassword = PasswordInputForNewPasswordForm.value
        MatchedEmail.password = CurrentPassword

        ConvertStringToArrayOfGetLocalStorageIsAvailable[FindIndexOfMatchedEmail] = MatchedEmail
        localStorage.setItem("UsersList", JSON.stringify(ConvertStringToArrayOfGetLocalStorageIsAvailable))

        EmailInputForNewPasswordForm.value = "";
        PasswordInputForNewPasswordForm.value = "";

        notification("User Email Password is Successfully changed and try to Login with new Email Password", "6000", "top", "right", "#22b569");

        NewPasswordForm.style.display = "none"
        LoginForm.style.display = "block"
        EmailInputForLogin.value = MatchedEmail.email
        PasswordInputForLogin.focus();
    }

}
// end new password
