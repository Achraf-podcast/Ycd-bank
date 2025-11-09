const signup_form = document.getElementById("signup_form")
const login_form = document.getElementById("login_form")
const signup_page = document.getElementById("signup_page")
const login_page = document.getElementById("login_page")

const register_now_button = document.getElementById("register_now_button");
const go_to_login_button = document.getElementById("go_to_login_button");

// Clic sur "Register Now"
register_now_button.addEventListener("click", () => {
    login_page.classList.add("hidden");
    signup_page.classList.remove("hidden");
})

// Clic sur "Login"
go_to_login_button.addEventListener("click", () => {
    signup_page.classList.add("hidden");
    login_page.classList.remove("hidden");
})

signup_form.addEventListener("submit", (event) => {
    event.preventDefault()
    const signup_password = document.getElementById("signup_password")
    const signup_confirm_password = document.getElementById("signup_confirm_password")
    const signup_first_name = document.getElementById("first_name_signup")
    const signup_last_name = document.getElementById("last_name_signup")
    const message_erreur = document.getElementById("message_erreur")

    message_erreur.textContent = '';
    const password = signup_password.value
    const password_confirm = signup_confirm_password.value
    const first_name = signup_first_name.value
    const last_name = signup_last_name.value

    if (password === "" || password_confirm === "" || first_name === "" || last_name === ""){
        message_erreur.textContent = "Veuillez remplir tous les champs pour vous inscrire"
        return
    }
})