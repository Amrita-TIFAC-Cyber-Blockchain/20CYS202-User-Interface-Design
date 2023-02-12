function validateName() {

    let co_name = document.getElementById('name');
    if(!(co_name.length > 10)){
        alert('Please enter a valid cooperate name')
    }
}

function validateCIN() {

    let cin = document.getElementById('cin');
    if(!(cin.length == 21)){
        alert('Please enter a valid CIN')
    }
}

function validateEmail() {

    let email = document.getElementById('email');
    var pattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.match(pattern)) {
        alert('Please enter a valid email');
    }
}

function validatePassword() {

    let pass = document.getElementById('pwd');
    if(!(pass.length > 8)){
        alert('Please enter a valid password');
    }
}

function validateConfirmPwd() {

    let pass = document.getElementById('pwd');
    let pass1 = document.getElementById('pwd1');
}
