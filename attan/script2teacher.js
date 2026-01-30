// script1.js

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form elements
    const signInLink = document.querySelector('.signin');
    const nameInput = document.querySelector('input[placeholder="Full Name"]');
    const emailInput = document.getElementById('email.com');
    const passwordInput = document.querySelector('input[type="password"]');

    // Add event listener to the SignIn link
    signInLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Validate form fields
        if (!nameInput.value.trim()) {
            alert('Please enter your full name.');
            nameInput.focus();
            return;
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
            emailInput.focus();
            return;
        }

        if (!passwordInput.value.trim()) {
            alert('Please enter your password.');
            passwordInput.focus();
            return;
        }

        // If all validations pass, redirect to Teacher-Home.html
        window.location.href = 'Teacher-Home.html';
    });

    // Function to validate email format
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Optional: Handle forgot password link (currently empty, so just prevent default or add logic if needed)
    const forgotLink = document.querySelector('.forgot');
    forgotLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Forgot password functionality not implemented yet. Please contact support.');
    });

    // Optional: Handle register link (currently empty, so just prevent default or add logic if needed)
    const registerLink = document.querySelector('.register-link');
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Registration functionality not implemented yet. Please contact support.');
    });

    // Handle social login buttons (placeholders for OAuth or other integrations)
    const googleBtn = document.querySelector('.google');
    const githubBtn = document.querySelector('.github');
    const facebookBtn = document.querySelector('.facebook');

    googleBtn.addEventListener('click', function() {
        alert('Google login not implemented yet. Please use the form to sign in.');
        // Add actual OAuth logic here if needed, e.g., redirect to Google OAuth URL
    });

    githubBtn.addEventListener('click', function() {
        alert('GitHub login not implemented yet. Please use the form to sign in.');
        // Add actual OAuth logic here if needed
    });

    facebookBtn.addEventListener('click', function() {
        alert('Facebook login not implemented yet. Please use the form to sign in.');
        // Add actual OAuth logic here if needed
    });
});