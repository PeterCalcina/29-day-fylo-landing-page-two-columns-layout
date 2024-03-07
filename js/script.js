const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast_text');
const iconToast = document.getElementById('toast_icon');

const messages = {
  warning: 'Please the email field cannot be empty',
  success: 'You have been successfully subscribed',
  error: 'Please provide a valid email address'
};

const icons = {
  warning: 'fa-solid fa-triangle-exclamation',
  success: 'fa-solid fa-check-circle',
  error: 'fa-solid fa-circle-xmark'
};

function sendEmail(inputId) {
  const email = document.getElementById(inputId).value;
  let status = '';

  let isEmailValid = validateEmail(email);

  if (email === '') status = 'warning';
  else if (isEmailValid) status = 'success';
  else status = 'error';

  document.getElementById(inputId).value = '';
  showToast(status, messages[status], icons[status]);
}

function showToast(status, message, iconName) {
  toast.className = '';
  iconToast.className = iconName;
  toast.classList.add('show', status);
  toastMessage.innerHTML = message;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
}
