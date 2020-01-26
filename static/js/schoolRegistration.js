/**
 * Created by rebeccaruch on 11/22/16.
 */

function onBodyLoad(){
    // Recaptcha loading
    grecaptcha.reset();
}

function validateForm(){
    //If the submit button is disabled by validate.js, don't fully disable it.
    var btn_disabled = document.getElementById('schoolSubmit').classList.contains('disabled');
    if (btn_disabled){
        return false;
    }

    // Button is not disabled by validate.js, the post request will be submitted and the
    // button must be disabled.
    document.getElementById('schoolSubmit').disabled = true;

    // captcha validation
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
