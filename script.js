const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields';
        message.style.color = 'crimson';
        messageContainer.style.borderColor = 'crimson';
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'chartreuse';
        password2El.style.borderColor = 'chartreuse';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match';
        message.style.color = 'crimson';
        messageContainer.style.borderColor = 'crimson';
        password1El.style.borderColor = 'crimson';
        password2El.style.borderColor = 'crimson';
        return;
    }

    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}

const storeFormData = () => {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    // Do something with user data
    console.log(user);
}

const processFormData = (e) => {
    e.preventDefault();
    // Validate Form
    validateForm();
    // Submit Data if Valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);