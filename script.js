const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateEmail(email) {
    if (email.length > 3 && email.includes("@") && email.includes(".")) {
        emailError.textContent = "All good to go!";
        emailError.className = "success";
        return true;
    } else {
        emailError.textContent = "Email must be longer than 3 characters and contain '@' and '.'";
        emailError.className = "error";
        return false;
    }
}

function validatePassword(password) {
    if (password.length > 8) {
        passwordError.textContent = "All good to go!";
        passwordError.className = "success";
        return true;
    } else {
        passwordError.textContent = "Password must be longer than 8 characters.";
        passwordError.className = "error";
        return false;
    }
}

emailInput.addEventListener("input", () => {
    validateEmail(emailInput.value);
});

passwordInput.addEventListener("input", () => {
    validatePassword(passwordInput.value);
});

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = validatePassword(passwordInput.value);

    if (isEmailValid && isPasswordValid) {
        const confirmSignup = confirm("Are you sure you want to sign up?");
        if (confirmSignup) {
            alert("Successful signup!");
            // Optionally redirect to another page
            // window.location.href = "success.html";
        } else {
            // Clear inputs and reload the page
            emailInput.value = "";
            passwordInput.value = "";
            emailError.textContent = "";
            passwordError.textContent = "";
            window.location.reload();
        }
    }
});
