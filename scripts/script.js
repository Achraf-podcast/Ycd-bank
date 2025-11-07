const login_page = document.getElementById("login_page");
const signup_page = document.getElementById("signup_page");

const register_now_button = document.getElementById("register_now_button");
const go_to_login_button = document.getElementById("go_to_login_button");

// Clic sur "Register Now"
register_now_button.addEventListener("click", () => {
    login_page.classList.add("hidden");
    signup_page.classList.remove("hidden");
});

// Clic sur "Login"
go_to_login_button.addEventListener("click", () => {
    signup_page.classList.add("hidden");
    login_page.classList.remove("hidden");
});