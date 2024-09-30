// Grabbing form elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Grabbing error messages
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Name validation
nameInput.addEventListener('input', () => {
  const nameValue = nameInput.value.trim();
  if (nameValue.length < 3) {
    nameError.textContent = 'Namn måste vara minst 3 tecken.';
    nameError.style.display = 'block';
  } else {
    nameError.style.display = 'none';
  }
});

// Phone validation
phoneInput.addEventListener('input', () => {
  const phoneValue = phoneInput.value.trim();
  const phonePattern = /^07\d{8}$/; // Matches numbers starting with 07 and followed by exactly 8 digits
  if (!phonePattern.test(phoneValue)) {
    phoneError.textContent = 'Telefonnumret måste börja med "07" och vara 10 siffror långt.';
    phoneError.style.display = 'block';
  } else {
    phoneError.style.display = 'none';
  }
});

// Email validation
emailInput.addEventListener('input', () => {
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    emailError.textContent = 'Ogiltig e-postadress.';
    emailError.style.display = 'block';
  } else {
    emailError.style.display = 'none';
  }
});

// Message validation
messageInput.addEventListener('input', () => {
  const messageValue = messageInput.value.trim();
  if (messageValue.length < 10) {
    messageError.textContent = 'Meddelandet måste vara minst 10 tecken.';
    messageError.style.display = 'block';
  } else {
    messageError.style.display = 'none';
  }
});

// Prevent form submission if invalid
form.addEventListener('submit', (event) => {
  // Re-check all fields before submission
  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();
  const phonePattern = /^07\d{8}$/; // Matches numbers starting with 07 and followed by exactly 8 digits
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if all fields are valid
  let isFormValid = true;

  if (nameValue.length < 3) {
    nameError.textContent = 'Namn måste vara minst 3 tecken.';
    nameError.style.display = 'block';
    isFormValid = false;
  }

  if (!phonePattern.test(phoneValue)) {
    phoneError.textContent = 'Telefonnumret måste börja med "07" och vara 10 siffror långt.';
    phoneError.style.display = 'block';
    isFormValid = false;
  }

  if (!emailPattern.test(emailValue)) {
    emailError.textContent = 'Ogiltig e-postadress.';
    emailError.style.display = 'block';
    isFormValid = false;
  }

  if (messageValue.length < 10) {
    messageError.textContent = 'Meddelandet måste vara minst 10 tecken.';
    messageError.style.display = 'block';
    isFormValid = false;
  }

  // Prevent form submission if there are errors
  if (!isFormValid) {
    event.preventDefault();
  }
});