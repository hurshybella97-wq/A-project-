const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    alert("Registration successful!\n\nEmail: " + email);

    window.location.href = "index.html";
});
