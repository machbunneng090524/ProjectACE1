// JavaScript for the Login/Register Page

// 1. Hamburger menu for mobile responsiveness
// const hamburger = document.querySelector('.hamburger-menu');
// const navLinks = document.querySelector('.nav-links');

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

// 2. Form switching logic
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const formTitle = document.getElementById('formTitle');
const toggleLink = document.getElementById('toggleLink');
const passwordMatchError = document.getElementById('passwordMatchError');

toggleLink.addEventListener('click', () => {
    if (loginForm.style.display === 'none') {
        // Currently on Register form, switch to Login
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        formTitle.textContent = 'LOGIN';
        toggleLink.textContent = 'Don\'t have an account? Register here.';
    } else {
        // Currently on Login form, switch to Register
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'REGISTER';
        toggleLink.textContent = 'Already have an account? Login here.';
    }
});

// 3. Simple form validation (for the Register form)
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        passwordMatchError.style.display = 'block';
    } else {
        passwordMatchError.style.display = 'none';
        // In a real app, you would submit the form data to a server here.
        console.log('Registration form submitted successfully (in a real app).');
        // For this example, we'll show a message box.
        showMessage('Registration successful!');
    }
});

// 4. Simple login handling
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    // In a real app, you would send the login data to a server for authentication.
    console.log('Login form submitted successfully (in a real app).');
    // For this example, we'll show a message box.
    showMessage('Logged in successfully!');
});

// 5. Function to show a temporary message box
function showMessage(message) {
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--primary-color);
        color: white;
        padding: 15px 30px;
        border-radius: 50px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        opacity: 0;
        transition: opacity 0.5s ease;
    `;
    messageBox.textContent = message;
    document.body.appendChild(messageBox);

    // Animate the message box in
    setTimeout(() => {
        messageBox.style.opacity = '1';
    }, 10);

    // Animate the message box out and remove it
    setTimeout(() => {
        messageBox.style.opacity = '0';
        setTimeout(() => messageBox.remove(), 500);
    }, 2000);
}