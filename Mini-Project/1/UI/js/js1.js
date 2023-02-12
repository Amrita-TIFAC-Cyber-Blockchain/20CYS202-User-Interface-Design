/*
Team 1
UID LAB EVALUATION 3
Amrita Alumni Website

RAJENDRAPRASAD S 
CB.EN.U4CYS21064 

NO TEMPLATE USED
*/

function validateEmail() {
    var mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var x = document.getElementById("i1").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address!");
    }
}

function validateText2() {
    var mailformat = (/^[a-zA-Z\s]+$/);
    var x = document.getElementById("i2").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid name!");
    }
}

function validateText3() {
    var mailformat = (/^[a-zA-Z\s]+$/);
    var x = document.getElementById("i3").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid state!");
    }
}

function validateNumber() {
    var mailformat = (/^[0-9]+$/);
    var x = document.getElementById("i4").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid number!");
    }
}

function validateText5() {
    var mailformat = (/^[a-zA-Z]+$/);
    var x = document.getElementById("i5").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid first name!");
    }
}

function validateText6() {
    var mailformat = (/^[a-zA-Z]+$/);
    var x = document.getElementById("i6").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid last name!");
    }
}

/*
Signup JS 
Ashwin Anand
CB.EN.U4CYS21012
*/

function validatePass() {
    var x = document.getElementById("pass").value;
    var y = document.getElementById("re_pass").value;
    if (x != y){
        alert("Passwords are not matching! Please enter again.");
    }
}

function validateRollNo() {
    var rollFormat = "(cb|CB).(en|EN).(u4|U4)[a-zA-Z]{3}[0-9]{5}";
    var x = document.getElementById("roll").value;
    if (!x.match(rollFormat)) {
        alert("This roll number is not valid!");
    }
}

function validateFile() {
    var fileInput =
        document.getElementById('img');
     
    var filePath = fileInput.value;
    var allowedExtensions =
            /(\.jpg|\.jpeg|\.png)$/i;
     
    if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
    }
    return false;
}

function redirect() {
    var a1 = (document.getElementById("roll").value).length;
    var a2 = (document.getElementById("i2").value).length;
    var a3 = (document.getElementById("i1").value).length;
    var a4 = (document.getElementById("pass").value).length;
    var a5 = (document.getElementById("re_pass").value).length;
    if (a1 === 0 || a2 === 0 || a3 === 0 || a4 === 0 || a5 === 0 ){
        alert("Please fill in all the required details marked with '*'.");
    }
    else{
        alert("Successfully registered! You will be redirected to the login page.");
        location.href = "login.html";
    }
}

/*
Profile JS
Dyanesh S
CB.EN.U4CYS21015
*/

function validateFname() {
    var mailformat = (/^[a-zA-Z]+$/);
    var x = document.getElementById("i5").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid first name!");
        return false;
    }
    return true;
}

function validateLname() {
    var mailformat = (/^[a-zA-Z]+$/);
    var x = document.getElementById("i6").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid last name!");
        return false;
    }
    return true;
}

function validateContactEmail() {
    var mailformat = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    var x = document.getElementById("i1").value;
    if (!x.match(mailformat)) {
        alert("You have entered an invalid email address!");
        return false;
    }
    return true;
}

function submitToAPI(e) {
            
    // e.preventDefault();

    var firstname = document.getElementById("i5").value;
    var lastname = document.getElementById("i6").value;
    var emailaddress = document.getElementById("i1").value;
    var message = document.getElementById("description-input").value;
    if (firstname=="" || lastname=="" || emailaddress=="" || message=="")
        {
            alert("Please Fill All Required Field");
            return false;
        }

    else
    {
        if(validateFname() && validateLname() && validateContactEmail())
    {
        alert("We will contact soon!");

    }
    }
}