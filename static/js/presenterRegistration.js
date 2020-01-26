/**
 * Created by rebeccaruch on 11/22/16.
 *
 */

function onBodyLoad(){
    // Recaptcha loading
    grecaptcha.reset();
}

function validateForm(){
    //If the submit button is disabled by validate.js, don't fully disable it.
    var btn_disabled = document.getElementById('presenterSubmit').classList.contains('disabled');
    if (btn_disabled){
        return false;
    }

    // Button is not disabled by validate.js, the post request will be submitted and the
    // button must be disabled.
    document.getElementById('presenterSubmit').disabled = true;

    document.getElementById('presenterSubmit').disabled = true;

    var captchaResponse = grecaptcha.getResponse();

    if(captchaResponse == "") {
        alert("Please complete the CAPTCHA to submit your registration.");
        document.getElementById('studentSubmit').disabled = false;
        return false;
    } else {
        console.log(captchaResponse);
        document.getElementById('captcha').value = captchaResponse;
        return true;
    }
}

function presenterAttending(){
    attending = document.getElementById('attending-check').checked;
    if(attending){
        document.getElementById('primary-selection').required = true;
        document.getElementById('primary-selection').style.display = 'block';
        document.getElementById('no-primary-select').checked = false;
        document.getElementById('timeslot-div').style.display = 'block';
        document.getElementById('timeslot-ph').style.display='block';
        document.getElementById('not-attending-select').checked = false;
        primary_selected = document.getElementById('no-primary-select').checked;
    } else{
        document.getElementById('primary-selection').style.display = 'none';
        document.getElementById('not-attending-select').checked = true;
        document.getElementById('no-primary-select').checked = true;
        showWorkshopEntry("False");
        document.getElementById('workshop-select').style.display = 'none';
        document.getElementById('workshop-select').removeAttribute('required');
        document.getElementById('timeslot-div').style.display = 'none';
        document.getElementById('timeslot-ph').style.display='none';
    }
}

function showWorkshopEntry(val){
    if(val==="yes-primary-select"){
        // document.getElementById('workshop-title').style.display='block';
        document.getElementById('workshop-input').required = true;
        document.getElementById('new-workshop').style.display = 'block';
        document.getElementById('adult-student-selection').style.display='block';
        document.getElementById('topic-div').style.display='block';
        document.getElementById('topic-select').required = true;
        document.getElementById('workshop-div').style.display='block';
        document.getElementById('workshop-desc').required = true;
        document.getElementById('lab-selection').style.display='block';
        document.getElementById('yes-lab-select').required = true;
        document.getElementById('no-lab-select').required = true;
        document.getElementById('computer-div').style.display='block';
        document.getElementById('yes-computer-select').required = true;
        document.getElementById('no-computer-select').required = true;
        document.getElementById('equip-needs').style.display='block';
        document.getElementById('workshop-select').style.display='none';
        document.getElementById('workshop-select').removeAttribute('required');
    }else{
        // document.getElementById('workshop-title').style.display='none';
        document.getElementById('workshop-input').removeAttribute('required');
        document.getElementById('new-workshop').style.display='none';
        document.getElementById('adult-student-selection').style.display='none';
        document.getElementById('topic-div').style.display='none';
        document.getElementById('topic-select').removeAttribute('required');
        document.getElementById('workshop-div').style.display='none';
        document.getElementById('workshop-desc').removeAttribute('required');
        document.getElementById('lab-selection').style.display='none';
        document.getElementById('yes-lab-select').removeAttribute('required');
        document.getElementById('no-lab-select').removeAttribute('required');
        document.getElementById('computer-div').style.display='none';
        document.getElementById('yes-computer-select').removeAttribute('required');
        document.getElementById('no-computer-select').removeAttribute('required');
        document.getElementById('equip-needs').style.display='none';
        document.getElementById('workshop-select').style.display='block';
        document.getElementById('workshop-select').required = true;
    }
}
