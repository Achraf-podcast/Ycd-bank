const signup_form = document.getElementById("signup_form")

signup_form.addEventListener("submit", () => {
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