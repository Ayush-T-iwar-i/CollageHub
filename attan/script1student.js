// script1.js

document.addEventListener('DOMContentLoaded', function() {
    // Get references to the form elements
    const signInLink = document.querySelector('.signin');
    const nameInput = document.querySelector('input[placeholder="Full Name"]');
    const enrollInput = document.querySelector('input[placeholder="Enroll no"]');
    const courseInput = document.querySelector('input[placeholder="Department Name"]');
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

        if (!enrollInput.value.trim()) {
            alert('Please enter your enroll number.');
            enrollInput.focus();
            return;
        }

        if (!courseInput.value.trim()) {
            alert('Please enter your course/department name.');
            courseInput.focus();
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

        // If all validations pass, redirect to student-home.html
        window.location.href = 'student-home.html';
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
    const registerLink = document.querySelector('.registerstudent.html');
    registerLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Registration functionality not implemented yet. Please contact support.');
    });

    // Social login links are currently empty, so no additional logic needed unless specified
});