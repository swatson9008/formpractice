import './style.css';

const emailInput = document.getElementById('email');

emailInput.addEventListener('input', () => {
  if (emailInput.validity.typeMismatch) {
    emailInput.setCustomValidity('I am expecting an email address!');
  } else {
    emailInput.setCustomValidity('');
  }
});

const zipInput = document.getElementById('zipNo');

zipInput.addEventListener('input', () => {
  if (zipInput.validity.tooShort) {
    zipInput.setCustomValidity('I am expecting a valid zip code!');
  } else {
    zipInput.setCustomValidity('');
  }
});
