function onBodyLoad(){
    // Recaptcha loading
    grecaptcha.reset();
}

function validateForm() {

    // To prevent the eternally disabled Submit button
    var btn_disabled = document.getElementById('submit').classList.contains('disabled');

    if (btn_disabled){
        return false;
    }

    // Button is not currently disabled by validator.js, so OK to proceed with custom logic.

    document.getElementById('submit').disabled = true;

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