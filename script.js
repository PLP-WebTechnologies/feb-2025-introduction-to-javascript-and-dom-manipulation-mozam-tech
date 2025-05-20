document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationform");
    const loginForm = document.getElementById("loginForm");
    const title = document.querySelector("h2");

    function validateRegistrationForm(event) {
        event.preventDefault();
        let errors = [];
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const age = document.getElementById("age").value;
        const terms = document.getElementById("terms").checked;
        const errorDiv = document.createElement("div");
        errorDiv.className = "error-container";
        document.querySelector(".container").appendChild(errorDiv);
        errorDiv.innerHTML = "";

        // Validation rules
        if (!name) errors.push("Name is required.");
        if (!validateEmail(email)) errors.push("Invalid email format.");
        if (password.length < 8) errors.push("Password must be at least 8 characters.");
        if (password !== confirmPassword) errors.push("Passwords do not match.");
        if (age < 18 || age > 100) errors.push("Age must be between 18 and 100.");
        if (!terms) errors.push("You must accept terms and conditions.");

        if (errors.length > 0) {
            errors.forEach(err => {
                let errMsg = document.createElement("p");
                errMsg.className = "error-message";
                errMsg.textContent = err;
                errorDiv.appendChild(errMsg);
            });
        } else {
            title.textContent = "Registration Successful!";
            title.style.color = "green";
            registrationForm.reset(); // Clear form fields after success
        }
    }

    function validateLoginForm(event) {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value.trim();
        if (!email || !password) {
            alert("Both fields are required.");
        } else {
            title.textContent = "Login Successful!";
            title.style.color = "blue";
        }
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    registrationForm.addEventListener("submit", validateRegistrationForm);
    loginForm.addEventListener("submit", validateLoginForm);
});
