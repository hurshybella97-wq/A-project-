const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    alert("Login successful!\n\nEmail: " + email);
});
