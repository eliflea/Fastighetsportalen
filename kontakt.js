const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Validera namn
nameInput.addEventListener('input', () => {
    const nameValue = nameInput.value.trim();
    nameError.style.display = nameValue.length < 3 ? 'block' : 'none';
    nameError.textContent = nameValue.length < 3 ? 'Namn måste vara minst 3 tecken.' : '';
});

// Validera telefonnummer
phoneInput.addEventListener('input', () => {
    const sanitizedValue = phoneInput.value.replace(/[^0-9]/g, ''); // Ta bort icke siffror
    phoneInput.value = sanitizedValue;

    const phoneValue = phoneInput.value.trim();
    const phonePattern = /^07\d{8}$/; // Måste börja med 07 sedan 8 siffror

    if (!phonePattern.test(phoneValue)) { // FelmeddelFnden
        phoneError.style.display = 'block';
        phoneError.textContent = phoneValue.length < 10
            ? 'Telefonnumret måste vara 10 siffror långt.'
            : 'Telefonnumret måste börja med "07".';
    } else {
        phoneError.style.display = 'none';
    }
});

// Validera e-postadress
emailInput.addEventListener('input', () => {
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Måste ha @
    emailError.style.display = emailPattern.test(emailValue) ? 'none' : 'block';
    emailError.textContent = emailPattern.test(emailValue) ? '' : 'Ogiltig e-postadress.';
});

// Validera meddelande
messageInput.addEventListener('input', () => {
    const messageValue = messageInput.value.trim();
    messageError.style.display = messageValue.length < 10 ? 'block' : 'none';
    messageError.textContent = messageValue.length < 10 ? 'Meddelandet måste vara minst 10 tecken.' : '';
});

// Skickas ej om fält ogiltiga
form.addEventListener('submit', (event) => {
    const nameValue = nameInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    const phonePattern = /^07\d{8}$/; // Måste börja med 07 sedan 8 siffror
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Måste ha @

    let isFormValid = true;

    if (nameValue.length < 3) {
        nameError.style.display = 'block';
        nameError.textContent = 'Namn måste vara minst 3 tecken.';
        isFormValid = false;
    }

    const sanitizedPhoneValue = phoneValue.replace(/[^0-9]/g, ''); // Ta bort icke siffror
    if (!phonePattern.test(sanitizedPhoneValue)) {
        phoneError.style.display = 'block';
        phoneError.textContent = 'Telefonnumret måste börja med "07" och vara 10 siffror långt.';
        isFormValid = false;
    }

    if (!emailPattern.test(emailValue)) {
        emailError.style.display = 'block';
        emailError.textContent = 'Ogiltig e-postadress.';
        isFormValid = false;
    }

    if (messageValue.length < 10) {
        messageError.style.display = 'block';
        messageError.textContent = 'Meddelandet måste vara minst 10 tecken.';
        isFormValid = false;
    }

    // Skickas ej om fel finns
    if (!isFormValid) {
        event.preventDefault();
    }
});