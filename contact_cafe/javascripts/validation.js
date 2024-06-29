function emailValidation() {
  const form = document.getElementById('form');
  const emailField = document.getElementById('email');
  const emailConfirmField = document.getElementById('email_confirm');
  
  emailConfirmField.addEventListener('input', () => {
    if (emailField.value !== emailConfirmField.value) {
      showError();
    } else {
      hideError();
    }
  });

  function showError() {
    let errorElement = document.getElementById('alert');
  
    if (!errorElement) {
      errorElement = document.createElement('p');
      errorElement.textContent = "Emails do not match.";
      errorElement.setAttribute('id', 'alert');
      errorElement.classList.add("alert_color");
      errorElement.style.color = '#d14539';
      emailConfirmField.parentNode.insertBefore(errorElement, emailConfirmField.nextSibling);
      emailConfirmField.classList.add("alert_bg");
    }
  }

  function hideError() {
    const errorElement = document.getElementById('alert');
    if (errorElement) {
      errorElement.remove();
      emailConfirmField.classList.remove("alert_bg");
    }
  }
}

window.onload = function() {
  emailValidation();
};



  
