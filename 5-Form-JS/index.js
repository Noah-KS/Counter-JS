function validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    
    var checks = 0;
    checks = checkUsername(username, checks);
    checks = checkEmail(email, checks);
    checks = checkPassword(password, checks);
    checks = checkConfirmPassword(password, confirmPassword, checks);

    if (checks == 4) {
        alert("Account Created");
    }
}

function checkUsername(username, checks) {
    var usr = document.getElementById('username');
    var usrMsg = document.getElementById('username-error');

    if(username.length > 3) {
        usr.classList.add('success');
        usr.classList.replace('error','success');
        usrMsg.innerText="";
        checks++;
    } else {
        usr.classList.add('error');
        usrMsg.innerText="Username must be greater than 3 characters long";
        checks--;
    }
    return checks;
}

function checkEmail(email, checks) {
    var mail = document.getElementById('email')
    var mailMsg = document.getElementById('email-error')

    if(email.length > 8 && email.includes('@')) {
        mail.classList.add('success');
        mail.classList.replace('error','success');
        mailMsg.innerText="";
        checks++;
    } else {
        mail.classList.add('error');
        mailMsg.innerText="Must be a valid email";
        checks--;
    }
    return checks;
}

function checkPassword(password, checks) {
    var pass = document.getElementById('password')
    var passMsg = document.getElementById('password-error')

    if(password.length > 5) {
        pass.classList.add('success');
        pass.classList.replace('error','success');
        passMsg.innerText="";
        checks++;
    } else {
        pass.classList.add('error');
        passMsg.innerText="Password must be greater than 5 characters long";
        checks--;
    }
    return checks;
}

function checkConfirmPassword(password, confirmPassword, checks) {
    var confirmPass = document.getElementById('confirm-password')
    var confirmPassMsg = document.getElementById('confirm-password-error')
    if(password == confirmPassword && password.length > 5) {
        confirmPass.classList.add('success');
        confirmPass.classList.replace('error','success');
        confirmPassMsg.innerText="";
        checks++;
    } else {
        confirmPass.classList.add('error');
        confirmPassMsg.innerText="Passwords do not match";
        checks--;
    }
    return checks;
}