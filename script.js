document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("login-form");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Email validation using a simple regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            errorMessage.textContent = "Invalid email address";
            return;
        }

        // Password validation
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%^&*])[A-Za-z\d@#$!%^&*]{8,}$/;

        if (!passwordPattern.test(password)) {
            errorMessage.textContent = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character (@#$!%^&*)";
            return;
        }

        // If both email and password are valid, you can proceed with login
        // Replace this with your login logic
        // For now, just clear the error message
        errorMessage.textContent = "";
    });
});
