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

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (emailField.value !== emailConfirmField.value) {
      showError();
    } else {
      form.submit();
    }
  });

  function showError() {
    let errorElement = form.querySelector('.alert');
    if (!errorElement) {
      errorElement = document.createElement('p');
      errorElement.textContent = "Emails do not match.";
      errorElement.classList.add("alert");
      form.appendChild(errorElement);
    }
    emailConfirmField.style.backgroundColor = 'rgba(230, 169, 171, 0.5)';
    emailConfirmField.style.color = '#d14539';
  }

  function hideError() {
    const errorElement = form.querySelector('.alert');
    if (errorElement) {
      errorElement.remove();
    }
    emailConfirmField.style.backgroundColor = '';
    emailConfirmField.style.color = '';
  }
}

window.onload = emailValidation;


  