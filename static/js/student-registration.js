function onStudentRegistrationPageLoad() {
  console.log('Loaded TWU EYH student registration page. Welcome!\nInitializing page...');

  console.log('Setting signature date fields...');

  console.log('Registering form for validation checking...');
  $('#student-registration-form').validator();

  grecaptcha.reset();

  console.log('Page initialization complete.');

}

function showOther(val) {
  if (val === 'Other') {
    document.getElementById('other-label').style.display = 'block';
    document.getElementById('other-input-div').style.display = 'inline-block';
  } else {
    document.getElementById('other-label').style.display = 'none';
    document.getElementById('other-input-div').style.display = 'none';
  }
}

var url = 'queries.php';

$('#student-registration-form').on('submit', function(e) {
    e.preventDefault();

    $.ajax({
      success: function(response) {
        console.log('success');
      },
    });

    var details = $('#student-registration-form').serialize();

    console.log(details);

    //Insert the new student into database table
    $.post(url, {
        command: 'insert_student',
        student_data: details,
      },
      function(data, status) {
        console.log('Data: ' + data + '\nStatus: ' + status);

        //$status.html(status + ": " + data);
      });
  });

// ---------------------- Form Validation ----------------------

function validateForm() {

  // To prevent the eternally disabled Submit button
  var btn_disabled = document.getElementById('studentSubmit').classList.contains('disabled');

  if (btn_disabled) {
    return false;
  }
  // Button is not currently disabled by validator.js, so OK to proceed with custom logic.

  var firstChoice = document.forms['student-registration-form']['first-choice-selection'].value;
  var secondChoice = document.forms['student-registration-form']['second-choice-selection'].value;

  if ((firstChoice === secondChoice) && (firstChoice !== 'No Preference')) {
    alert('Watch out! Your first choice for your class cannot be the same as your second choice.');
    return false;
  } else {
    //   document.getElementById('studentSubmit').disabled = true;
    //   var captchaResponse = grecaptcha.getResponse();
    //
    //   if (captchaResponse == '') {
    //     alert('Please complete the CAPTCHA to submit your registration.');
    //     document.getElementById('studentSubmit').disabled = false;
    //     return false;
    //   } else {
    //     console.log(captchaResponse);
    //     document.getElementById('captcha').value = captchaResponse;
    //     return true;
    //   }
    //
  }
}
