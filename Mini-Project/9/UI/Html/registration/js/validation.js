// JavaScript Document

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
}
String.prototype.ltrim = function() {
    return this.replace(/^\s+/, "");
}

String.prototype.rtrim = function() {
    return this.replace(/\s+$/, "");
}

function stopRKey(evt) {
    var evt = (evt) ? evt : ((event) ? event : null);
    var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
    if ((evt.keyCode == 13) && (node.type == "text")) {
        getClientData();
        return false;
    }
}

document.onkeypress = stopRKey;

var ajax = new sack();

function getState(country, state, other_state, city, other_city) {
    document.getElementById("citydiv").innerHTML = "<select class='custom-select d-block w-100' name='other_city' id='other_city'><option value=''>-- Select --</option></select>";
    ajax.requestFile = 'getState.php?countryId=' + country + '&stateId=' + state + '&other_state=' + other_state + '&cityId=' + city + '&other_city=' + other_city;
    ajax.onCompletion = showState;
    ajax.runAJAX();
    getCity(country, state, other_state, city, other_city);
}

function showState() {
    document.getElementById("statediv").innerHTML = ajax.response;
}

var ajax1 = new sack();

function getCity(country, state, other_state, city, other_city) {
    ajax1.requestFile = 'getCity.php?countryId=' + country + '&stateId=' + state + '&other_state=' + other_state + '&cityId=' + city + '&other_city=' + other_city;
    ajax1.onCompletion = showCity;
    ajax1.runAJAX();
}

function showCity() {
    document.getElementById("citydiv").innerHTML = ajax1.response
}

var ajax3 = new sack();

function p_getState(country, state, other_state, city, other_city) {
    document.getElementById("p_citydiv").innerHTML = "<select class='custom-select d-block w-100' name='p_city' id='p_city'><option value=''>-- Select --</option></select>";
    ajax3.requestFile = 'p_getState.php?countryId=' + country + '&stateId=' + state + '&other_state=' + other_state + '&cityId=' + city + '&other_city=' + other_city;
    ajax3.onCompletion = p_showState;
    ajax3.runAJAX();
    p_getCity(country, state, other_state, city, other_city);
}

function p_showState() {
    document.getElementById("p_statediv").innerHTML = ajax3.response;
}

var ajax4 = new sack();

function p_getCity(country, state, other_state, city, other_city) {
    ajax4.requestFile = 'p_getCity.php?countryId=' + country + '&stateId=' + state + '&other_state=' + other_state + '&cityId=' + city + '&other_city=' + other_city;
    ajax4.onCompletion = p_showCity;
    ajax4.runAJAX();
}

function p_showCity() {
    document.getElementById("p_citydiv").innerHTML = ajax4.response
}

function setDOB() {
    var age = document.getElementById("age").value;
    var e = document.getElementById("ageUnit");
    var ageUnit = e.options[e.selectedIndex].value;
    if (ageUnit == 0) {
        ageUnit = "years";
    } else if (ageUnit == 1) {
        ageUnit = "months";
    } else if (ageUnit == 2) {
        ageUnit = "days";
    } else if (ageUnit == 3) {
        ageUnit = "weeks";
    }
    age = parseInt(age);

    if (age <= 0 || isNaN(age)) {
        $.alert("Patient age should be greater than zero.");
        document.getElementById("age").value = '';
        return false;
    }
    if (age >= 100 && ageUnit == "years") {
        var confirmStatus = confirm("Patient's age is more than 100 Years. Do you want to proceed?");
        if (confirmStatus == false) {
            document.getElementById("age").value = '';
            return false;
        }
    }

    var ajaxDOB = new sack();
    ajaxDOB.requestFile = 'getDOB.php?age=' + age + '&ageUnit=' + ageUnit;
    ajaxDOB.onCompletion = showDOB;
    ajaxDOB.runAJAX();

    function showDOB() {
        document.getElementById("dob").value = ajaxDOB.response;
        document.getElementById("approx_dob").value = 1;
    }
}

function validateForm(e, docum) {
    if (docum.title.value.trim() == '') {
        //alert("Please Select Title"); 
        $.alert('Please Select Title');
        docum.title.focus();
        return false;
    }
    if (docum.lname.value.trim() == '') {
        $.alert("Please Enter Last Name");
        docum.lname.select();
        docum.lname.focus();
        return false;
    }
    if (docum.fname.value.trim() == '') {
        $.alert("Please Enter First Name");
        docum.fname.select();
        docum.fname.focus();
        return false;
    }
    if (docum.pan_no.value.trim() != '') {
        var panVal = docum.pan_no.value.trim();
        var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
        if (regpan.test(panVal)) {
            //return true;
        } else {
            $.alert("Enter Valid Pan Card Number");
            return false;
        }
    }

    if (docum.aadhar_no.value.trim() != '') {
        if (isNaN(docum.aadhar_no.value.trim())) {
            $.alert("Please Enter Numbers In Aadhar Number");
            docum.aadhar_no.select();
            docum.aadhar_no.focus();
            return false;
        } else {
            var adhr = docum.aadhar_no.value.trim();
            if (adhr.length < 12) {
                $.alert("Please Enter 12 Digit Aadhar Number");
                docum.aadhar_no.select();
                docum.aadhar_no.focus();
                return false;
            }
        }
    }

    if (docum.dob.value.trim() == '' || docum.age.value.trim() == '') {
        $.alert("Please Enter Date Of Birth Or Age.");
        return false;
    }

    if (docum.gender.value.trim() == 2) {
        if (docum.marital_status.value.trim() == '') {
            $.alert("Please Choose Marital Status.");
            return false;
        }

        if (docum.marital_status.value.trim() != 'Single') {
            if (docum.dom.value.trim() == '') {
                $.alert("Please Enter Date Of Marriage.");
                return false;
            }
            if (docum.bmname.value.trim() == '') {
                $.alert("Please Enter Before Marriage Name.");
                return false;
            }
        }
    }

    if (docum.patient_income.value.trim() != '') {
        if (isNaN(docum.patient_income.value.trim())) {
            $.alert("Please Enter Numbers In Monthly Income");
            docum.patient_income.select();
            docum.patient_income.focus();
            return false;
        }
    }

    if (docum.address1.value.trim() == '') {
        $.alert("Please Enter House Name/Appt.No Details");
        docum.address1.select();
        docum.address1.focus();
        return false;
    }

    if (docum.country.value.trim() == '') {
        $.alert("Please Select Country");
        docum.country.focus();
        return false;
    }

    if (docum.state.value.trim() == '') {
        $.alert("Please Select State");
        docum.state.focus();
        return false;
    }

    if (docum.city.value.trim() == '') {
        $.alert("Please Select City");
        docum.city.focus();
        return false;
    }

    if (docum.pincode.value.trim() != '') {
        if (isNaN(docum.pincode.value.trim())) {
            $.alert("Please Enter Numbers In Pin Number");
            docum.pincode.select();
            docum.pincode.focus();
            return false;
        }
    }

    if (docum.cell_phone.value.trim() != '') {
        if (isNaN(docum.cell_phone.value.trim())) {
            $.alert("Please Enter Numbers In Cell Number");
            docum.cell_phone.select();
            docum.cell_phone.focus();
            return false;
        } else {
            var adhr1 = docum.cell_phone.value.trim();
            if (adhr1.length != 10) {
                $.alert("Please Enter 10 Digit Cell Number");
                docum.cell_phone.select();
                docum.cell_phone.focus();
                return false;
            }
        }
    }

    if (docum.email.value.trim() != '') {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(docum.email.value.trim())) {

        } else {
            $.alert("You have entered an invalid email address!")
            return false;
        }
    }

    if (docum.emg_person.value.trim() == '' || docum.emg_person1.value.trim() == '') {
        $.alert("Please Enter Emergency Contact Person");
        docum.emg_person.select();
        docum.emg_person.focus();
        return false;
    }

    if (docum.relation.value.trim() == '') {
        $.alert("Please Select Relation With Patient");
        docum.relation.focus();
        return false;
    }

    if (docum.emg_no.value.trim() == '') {
        $.alert("Please Enter Emergency Contact Number");
        docum.emg_no.select();
        docum.emg_no.focus();
        return false;
    }

    // ---

    if (docum.re_persone.value.trim() == '') {
        $.alert("Please Enter Name Of Representative");
        docum.re_persone.select();
        docum.re_persone.focus();
        return false;
    }

    if (docum.re_relation.value.trim() == '') {
        $.alert("Please Select Representative Relation To Patient");
        docum.re_relation.focus();
        return false;
    }

    if (docum.id_file.value.trim() == '') {
        $.alert("Please Upload Identity Proof");
        docum.id_file.focus();
        return false;
    } else {
        var fileInput = document.getElementById('id_file');
        var filePath = fileInput.value;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type');
            fileInput.value = '';
            return false;
        }
    }

    $.confirm('Do you want to save the details..?', function(a) {
        if (a == true) {
            //document.getElementById("SaveDB").value = 'Save'; 
            document.getElementById("vm").focus();
            document.getElementById("vm").select();
            document.getElementById("loader").style.display = "block";
            document.getElementById("SaveData").style.display = "none";
            document.getElementById("form").submit();
        }
    });
    /*if( !confirm('Do you want to save the details..?') )
    {
    	return false;
    }*/
    document.getElementById("vm").focus();
    document.getElementById("vm").select();
    return false;
}

function selGender(val) {
    if (val == 1 || val == 10 || val == 14)
        document.getElementById("gender").selectedIndex = 1;
    else if (val == 16)
        document.getElementById("gender").selectedIndex = 4;
    else if (val == 15)
        document.getElementById("gender").selectedIndex = 5;
    else if (val == 2 || val == 3 || val == 4 || val == 11 || val == 12 || val == 13)
        document.getElementById("gender").selectedIndex = 2;
    else
        document.getElementById("gender").selectedIndex = 0;

    if (val == 2 || val == 3 || val == 4 || val == 11 || val == 12 || val == 13)
        $("#divMarried1,#divMarried2").show();
    else
        $("#divMarried1,#divMarried2").hide();
}

//alert(getAge('15/05/2019'));
function getAge(dateString) {
    document.getElementById("approx_dob").value = 0;
    var now = new Date();
    var today = new Date(now.getYear(), now.getMonth(), now.getDate());

    var yearNow = now.getYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    var tempDate = dateString.split("/");
    var y = tempDate[2]; //dateString.substring(6,10);
    var m = tempDate[1] - 1; //dateString.substring(0,2)-1;
    var d = tempDate[0]; //dateString.substring(3,5);

    var dob = new Date(y, m, d);

    var yearDob = dob.getYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();
    var age = {};
    var ageString = "";
    var yearString = "";
    var monthString = "";
    var dayString = "";


    yearAge = yearNow - yearDob;

    if (monthNow >= monthDob)
        var monthAge = monthNow - monthDob;
    else {
        yearAge--;
        var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob)
        var dateAge = dateNow - dateDob;
    else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
            monthAge = 11;
            yearAge--;
        }
    }

    age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
    };

    if (age.years > 1) yearString = " years";
    else yearString = " year";
    if (age.months > 1) monthString = " months";
    else monthString = " month";
    if (age.days > 1) dayString = " days";
    else dayString = " day";

    if ((age.years > 0) && (age.months > 0) && (age.days > 0)) {
        document.getElementById('age').value = age.years;
        document.getElementById("ageUnit").selectedIndex = 0;
    } else if ((age.years == 0) && (age.months == 0) && (age.days > 0)) {
        document.getElementById('age').value = age.days;
        document.getElementById("ageUnit").selectedIndex = 2;
    } else if ((age.years > 0) && (age.months == 0) && (age.days == 0)) {
        document.getElementById('age').value = age.years;
        document.getElementById("ageUnit").selectedIndex = 0;
    } else if ((age.years > 0) && (age.months > 0) && (age.days == 0)) {
        document.getElementById('age').value = age.years;
        document.getElementById("ageUnit").selectedIndex = 0;
    } else if ((age.years == 0) && (age.months > 0) && (age.days > 0)) {
        document.getElementById('age').value = age.months;
        document.getElementById("ageUnit").selectedIndex = 1;
    } else if ((age.years > 0) && (age.months == 0) && (age.days > 0)) {
        document.getElementById('age').value = age.years;
        document.getElementById("ageUnit").selectedIndex = 0;
    } else if ((age.years == 0) && (age.months > 0) && (age.days == 0)) {
        document.getElementById('age').value = age.months;
        document.getElementById("ageUnit").selectedIndex = 1;
    } else ageString = "Oops! Could not calculate age!";

    return ageString;
}

function FillBilling(f) {
    if (f.copy.checked == true) {
        f.p_address1.value = f.address1.value;
        f.p_address2.value = f.address2.value;
        f.p_post_office.value = f.post_office.value;
        f.p_pincode.value = f.pincode.value;
        f.p_phone.value = f.phone.value;

        $('#p_country').append($('#country').html());
        f.p_country.value = f.country.value;
        if (document.getElementById("country").value == 38) {
            document.getElementById("p_statediv").innerHTML = "<select class='custom-select d-block w-100' name='p_state' id='p_state' onchange=p_getCity('',this.value,'','','');></select>";
            document.getElementById("p_citydiv").innerHTML = "<select class='custom-select d-block w-100' name='p_city' id='p_city'></select>";
            $('#p_state').append($('#state').html());
            $('#p_city').append($('#city').html());
            f.p_state.value = f.state.value;
            f.p_city.value = f.city.value;
        } else {
            p_getState(f.country.value, '', f.other_state.value, '', f.other_city.value);
            /*document.getElementById("p_statediv").innerHTML = "<input type='text' value='' name='other_p_state' id='other_p_state' class='input'>";
            document.getElementById("p_citydiv").innerHTML = "<input type='text' value='' name='other_p_city' id='other_p_city' class='input'>";
            f.other_p_state.value = f.other_state.value;
            f.other_p_city.value = f.other_city.value;*/
        }
    } else {
        f.p_address1.value = '';
        f.p_address2.value = '';
        f.p_post_office.value = '';
        f.p_pincode.value = '';
        f.p_phone.value = '';
        document.getElementById("p_statediv").innerHTML = "<input type='text' value='' name='other_p_state' id='other_p_state' class='form-control'>";
        document.getElementById("p_citydiv").innerHTML = "<input type='text' value='' name='other_p_city' id='other_p_city' class='form-control'>";
    }
}