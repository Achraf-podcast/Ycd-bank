const signup_form = document.getElementById("signup_form")
const login_form = document.getElementById("login_form")
const signup_page = document.getElementById("signup_page")
const login_page = document.getElementById("login_page")
const success_notification = document.getElementById("success_notification")
const error_notification = document.getElementById("error_notification")

const register_now_button = document.getElementById("register_now_button")
const go_to_login_button = document.getElementById("go_to_login_button")

const success_modal_overlay = document.getElementById("success_modal_overlay")
const modal_user_id = document.getElementById("modal_user_id")
const modal_user_rib = document.getElementById("modal_user_rib")
const copy_id_button = document.getElementById("copy_id_button")
const copy_rib_button = document.getElementById("copy_rib_button")
const modal_close_button = document.getElementById("modal_close_button")

const dashboard_view = document.getElementById("dashboard-view")
const dashboard_username = document.getElementById("dashboard_username")
const dashboard_rib = document.getElementById("dashboard_rib")

const myaccounts_view = document.getElementById("myaccounts-view")
const transfers_view = document.getElementById("transfers-view")

function hideshow() {
    signup_page.classList.add("hidden");
    login_page.classList.remove("hidden");
}

// Fonction qui genere un RIB pour l'utilisateur
function generate_rib(length) {
    const characters = "0123456789"
    let result_rib = ""
    for (let i = 0; i < length; i++) {
        result_rib += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result_rib
}

function display_green_notification(msg) {
    error_notification.style.display = "none";
    success_notification.textContent = msg
    success_notification.style.display = "block"
    setTimeout(() => {
        success_notification.style.display = "none";
    }, 3000)
}

function display_red_notification(msg) {
    success_notification.style.display = "none";
    error_notification.textContent = msg
    error_notification.style.display = "block"
    setTimeout(() => {
        error_notification.style.display = "none";
    }, 3000);
}

// Clic sur "Register Now"
register_now_button.addEventListener("click", () => {
    login_page.classList.add("hidden")
    signup_page.classList.remove("hidden")
})

// Clic sur "Login"
go_to_login_button.addEventListener("click", () => {
    hideshow()
})

// Validation du formulaire d'inscription et ajout du nouvel utilisateur dans le local storage
signup_form.addEventListener("submit", (event) => {
    event.preventDefault()
    const signup_password = document.getElementById("signup_password")
    const signup_confirm_password = document.getElementById("signup_confirm_password")
    const signup_first_name = document.getElementById("first_name_signup")
    const signup_last_name = document.getElementById("last_name_signup")

    const password = signup_password.value
    const password_confirm = signup_confirm_password.value
    const first_name = signup_first_name.value
    const last_name = signup_last_name.value

    let pwd_regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/
    // regex verifications
    if (password === "" || password_confirm === "" || first_name === "" || last_name === "") {
        display_red_notification("All fields are required")
        return
    }

    if (password !== password_confirm) {
        display_red_notification("Passwords doesn't match")
        return
    }
    if (password.length < 8) {
        display_red_notification("Password must have at least 8 characters")
        return
    }

    if (pwd_regex.test(password) === false) {
        display_red_notification("Check info, your Password doesn't match password requirements")
        return
    }

    // Stocker ce nouvel utilisateur dans le local storage
    const rib = generate_rib(25)
    const id = rib.substring(0, 8)
    let users = JSON.parse(localStorage.getItem("users")) || []
    const new_user = {
        prenom: first_name,
        nom: last_name,
        mot_de_passe: password,
        rib: rib,
        id: id
    }
    users.push(new_user)

    localStorage.setItem("users", JSON.stringify(users))
    modal_user_id.value = id
    modal_user_rib.value = rib

    // 2. Afficher le modal (en enlevant la classe "hidden")
    success_modal_overlay.classList.remove("hidden")

    // 3. Réinitialiser
    signup_form.reset()
})

// Clic sur le bouton "Fermer" du modal
modal_close_button.addEventListener("click", () => {
    // 1. Cacher le modal
    success_modal_overlay.classList.add("hidden")
    
    // 2. Rediriger vers la page de login
    hideshow() 
})

// Clic sur le bouton "Copier ID"
copy_id_button.addEventListener("click", () => {
    // Utilise l'API du presse-papiers pour copier le texte
    navigator.clipboard.writeText(modal_user_id.value)
        .then(() => {
            // Donne un retour visuel à l'utilisateur
            copy_id_button.textContent = "Copié !"
            // Remet le texte original après 2 secondes
            setTimeout(() => { 
                copy_id_button.textContent = "Copier"
            }, 2000)
        })
        .catch(err => {
            console.error("Erreur lors de la copie de l'ID: ", err)
        })
})

// Clic sur le bouton "Copier RIB"
copy_rib_button.addEventListener("click", () => {
    navigator.clipboard.writeText(modal_user_rib.value)
        .then(() => {
            copy_rib_button.textContent = "Copié !";
            setTimeout(() => { 
                copy_rib_button.textContent = "Copier"; 
            }, 2000);
        })
        .catch(err => {
            console.error("Erreur lors de la copie du RIB: ", err)
        })
})

login_form.addEventListener("submit", (event) => {
    event.preventDefault()
    const login_password = document.getElementById("login_password")
    const login_identifier = document.getElementById("login_identifier")

    const password = login_password.value
    const identifier = login_identifier.value

    if (password === "" || identifier === ""){
        display_red_notification("All fiels must be filled")
    }

})