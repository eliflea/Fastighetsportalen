// // header och footer
// document.addEventListener("DOMContentLoaded", function () {
//     const nav = document.querySelector('.navigation');
//     const footer = document.querySelector('footer'); // Assuming you add a footer tag to main.html




//     fetch('/navigation.html')
//         .then(res => res.text())
//         .then(data => {
//             const tempDiv = document.createElement('div');
//             tempDiv.innerHTML = data;

//             // Extract the header and footer from the fetched data
//             const headerContent = tempDiv.querySelector('header').outerHTML;
//             const footerContent = tempDiv.querySelector('footer').outerHTML;

//             // Insert the header content into the navigation element
//             nav.innerHTML = headerContent;

//             // Insert the footer content into the footer element
//             footer.innerHTML = footerContent;
//         })
//         .catch(err => console.error("Error loading navigation and footer:", err));


//     });


// Vänta tills hela DOM-innehållet har laddats
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('.navigation');
    const footer = document.querySelector('footer');

    // Hämta navigation och footer via fetch
    fetch('/navigation.html')
        .then(res => res.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;

            // Hämta header och footer-innehåll
            const headerContent = tempDiv.querySelector('header').outerHTML;
            const footerContent = tempDiv.querySelector('footer').outerHTML;

            // Lägg till header och footer i rätt element
            nav.innerHTML = headerContent;
            footer.innerHTML = footerContent;

            // Hämta hamburgermeny och off-screen-navigation efter att innehållet har laddats in
            const hamMenu = document.querySelector('.hamburger');
            const offScreenNav = document.querySelector('.off-screen-navigation');

            // Säkerställ att både hamburgermenyn och navigationen finns innan vi lägger till eventlyssnaren
            if (hamMenu && offScreenNav) {
                hamMenu.addEventListener('click', () => {
                    hamMenu.classList.toggle('active');
                    offScreenNav.classList.toggle('active');
                });
            } else {
                console.error("Hittade inte .hamburger eller .off-screen-navigation");
            }
        })
        .catch(err => console.error("Error loading navigation and footer:", err));
});





// till inloggning och registrering

const loggaIn = document.querySelector('.loggaIn');
const loggaInlink = document.querySelector('.loggaIn-link');
const registerlink = document.querySelector('.registrera-link');

registerlink.addEventListener('click', ()=> {
    loggaIn.classList.add('active');
});

loggaInlink.addEventListener('click', ()=> {
    loggaIn.classList.remove('active');
});


// Form validation class
class FormValidator {
    constructor(form) {
        this.form = form;
        this.emailInput = form.querySelector('input[type="email"]');
        this.passwordInput = form.querySelector('input[type="password"]');
        this.usernameInput = form.querySelector('input[type="text"]'); // Username input for registration
        this.checkboxInputs = form.querySelectorAll('input[type="checkbox"]'); // Checkbox inputs
        this.submitButton = form.querySelector('button[type="submit"]');
        this.formErrorMessage = document.createElement('div');
        this.form.appendChild(this.formErrorMessage); // Add it to the form
        this.checkboxInputs = form.querySelectorAll('.required');



        this.submitButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent form submission
            this.validate();
        });
    }

    validate() {
        const email = this.emailInput ? this.emailInput.value.trim() : '';
        const password = this.passwordInput ? this.passwordInput.value.trim() : '';
        const username = this.usernameInput ? this.usernameInput.value.trim() : ''; // Only for registration
        let isValid = true;

        // Reset previous error messages
        this.resetErrors();

        // Validate username (optional for registration)
        if (this.usernameInput && !username) {
            this.showFormError("Du måste fylla i alla rutor");
            isValid = false;
        }

         // Validate email
         if (this.emailInput && !email) {
            this.showFormError("Du måste fylla i alla rutor");
            isValid = false;
        } else if (this.emailInput && !this.validateEmail(email)) {
            const atMissing = email.indexOf('@') === -1;
            this.showFormError(`Ogiltigt: ${atMissing ? "'@' saknas" : "ex: xxxx@gmail.com"}`);
            isValid = false;
        }

        // Validate password
        if (!password) {
            this.showFormError("Du måste fylla i alla rutor");
            isValid = false;
        } else if (password.length < 6) {
            this.showFormError("Lösenordet måste vara minst 6 tecken långt");
            isValid = false;
        }


    if (this.checkboxInputs.length && Array.from(this.checkboxInputs).every(checkbox => !checkbox.checked)) {
        this.showFormError("Du måste acceptera villkoren"); // Show error message if not checked
        isValid = false;
    }
        // If everything is valid, submit the form

        if (isValid) {
            // Check if the form is the login form or registration form
            if (this.form.id === 'loggaInForm') {
                // For the login form, redirect to "välkommenTillMinaSidor.html"
                this.form.submit(); // Submit the login form
                window.location.href = '/välkommenTillMinaSidor.html'; // Omdirigera till "Mina Sidor"
            } else if (this.form.id === 'registreraForm') {
                // For the registration form, switch to the login form after successful registration
                this.form.submit(); // Submit the registration form (registrering)
                loggaIn.classList.remove('active'); // Switch back to login form
            } 
        }

        }
    validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    }

showFormError(message) {
    // Show the form-specific error message
    this.formErrorMessage.textContent = message;
    this.formErrorMessage.style.display = 'block';
        }
    
    resetErrors() {
    this.formErrorMessage.style.display = 'none'; // Hide form error message initially
        }
    }

// Initialize validation for both forms
const loggaInForm = document.getElementById('loggaInForm');
const registreraForm = document.getElementById('registreraForm');

if (loggaInForm) new FormValidator(loggaInForm);
if (registreraForm) new FormValidator(registreraForm);

