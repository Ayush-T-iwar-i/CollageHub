document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const sendOtpBtn = document.getElementById('sendOtpBtn');
    const verifyOtpBtn = document.getElementById('verifyOtpBtn');
    const registerBtn = document.getElementById('registerBtn');
    const emailInput = document.getElementById('email');
    const otpInput = document.getElementById('otp');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    let generatedOtp = null;
    let isOtpVerified = false;

    /* ========= VALIDATIONS ========= */
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        return /^\+?[1-9]\d{9,14}$/.test(phone);
    }

    function isValidPassword(password) {
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    }

    /* ========= SEND OTP ========= */
    sendOtpBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();

        if (!email || !isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        alert(`OTP sent to ${email}: ${generatedOtp}`); // demo only

        otpInput.disabled = false;
        verifyOtpBtn.disabled = false;
    });

    /* ========= VERIFY OTP ========= */
    verifyOtpBtn.addEventListener('click', function() {
        if (otpInput.value.trim() === generatedOtp) {
            alert('OTP verified successfully!');
            isOtpVerified = true;
            registerBtn.disabled = false;
        } else {
            alert('Invalid OTP.');
        }
    });

    /* ========= FORM SUBMIT ========= */
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const studentId = document.getElementById('studentId').value.trim();
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const college = document.getElementById('college').value.trim();
        const department = document.getElementById('department').value.trim();
        const dob = document.getElementById('dob').value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        /* ========= CHECKS ========= */
        if (!studentId) return alert('Enter Student ID');
        if (!name) return alert('Enter Full Name');
        if (!isOtpVerified) return alert('Verify email OTP');
        if (!isValidPhone(phone)) return alert('Invalid phone number');
        if (!college) return alert('Enter College Name');
        if (!department) return alert('Enter Department');
        if (!dob) return alert('Select DOB');
        if (!isValidPassword(password)) return alert('Weak password');
        if (password !== confirmPassword) return alert('Passwords do not match');

        /* ========= SAVE DATA FOR PROFILE ========= */
        const studentData = {
            studentId,
            name,
            email: emailInput.value,
            phone,
            college,
            department,
            dob,
            admissionYear: document.getElementById("year")?.value || "",
            semester: document.getElementById("semester")?.value || "",
            enrollment: document.getElementById("enroll")?.value || "",
            course: document.getElementById("course")?.value || "",
            address: document.getElementById("address")?.value || ""
        };

        localStorage.setItem("studentProfile", JSON.stringify(studentData));

        alert("Registration successful!");

        /* ========= REDIRECT TO PROFILE PAGE ========= */
        window.location.href = "Studentprofile.html";
    });
});
