const signup_form = document.getElementById("signup_form")
const login_form = document.getElementById("login_form")
const signup_page = document.getElementById("signup_page")
const login_page = document.getElementById("login_page")
const success_notification = document.getElementById("success_notification")
const error_notification = document.getElementById("error_notification")

const go_to_transactions = document.getElementById("go_to_transactions")
const transactions_view = document.getElementById("transactions-view")

const register_now_button = document.getElementById("register_now_button")
const go_to_login_button = document.getElementById("go_to_login_button")

const success_modal_overlay = document.getElementById("success_modal_overlay")
const display_rib_overlay = document.getElementById("display_rib_overlay")
const modal_user_id = document.getElementById("modal_user_id")
const modal_user_rib = document.getElementById("modal_user_rib")
const modal_user_id_1 = document.getElementById("modal_user_id_1")
const modal_user_rib_1 = document.getElementById("modal_user_rib_1")
const copy_id_button = document.getElementById("copy_id_button")
const copy_rib_button = document.getElementById("copy_rib_button")
const modal_close_button = document.getElementById("modal_close_button")
const display_rib_close_button = document.getElementById("display_rib_close_button")
const left_side_menu = document.getElementById("left_side_menu")

const beneficiaries_view = document.getElementById("beneficiaries-view")
const go_to_beneficiaries_button = document.getElementById("go_to_beneficiaries")

const currency_converter_view = document.getElementById("currencyConverter-view")
const go_to_currency_converter_button = document.getElementById("go_to_currencyConverter-view")

go_to_currency_converter_button.addEventListener("click", () => {
    all_pages.forEach(page => page.classList.add("hidden"))
    currency_converter_view.classList.remove("hidden")
    left_side_menu.classList.remove("hidden")
    let users = JSON.parse(localStorage.getItem("users")) || []
})

go_to_beneficiaries_button.addEventListener("click", () => {
    all_pages.forEach(page => page.classList.add("hidden"))
    beneficiaries_view.classList.remove("hidden")
    left_side_menu.classList.remove("hidden")
    let users = JSON.parse(localStorage.getItem("users")) || []
    recent_beneficiaries()
})

go_to_transactions.addEventListener("click", () => {
    all_pages.forEach(page => page.classList.add("hidden"))
    transactions_view.classList.remove("hidden")
    left_side_menu.classList.remove("hidden")
    let users = JSON.parse(localStorage.getItem("users")) || []
})

const logout_button = document.getElementById("logout_button");
logout_button.addEventListener("click", () => {
    //vider le seesion storage
    sessionStorage.removeItem("connected_user")
    go_to_login_page();
})

const dashboard_view = document.getElementById("dashboard-view")
const dashboard_username = document.getElementById("dashboard_username")
const go_to_dashboard_button = document.getElementById("go_to_dashboard")

const go_to_transfers_button = document.getElementById("go_to_transfers_button")

go_to_transfers_button.addEventListener("click", () => {
    go_to_transfers()
})

function go_to_transfers() {
    all_pages.forEach(page => page.classList.add("hidden"))
    transfers_view.classList.remove("hidden")
    left_side_menu.classList.remove("hidden")
    populate_beneficiary_dropdown("main")

}

go_to_dashboard_button.addEventListener("click", () => {
    go_to_dashboard()
})

const dashboard_rib = document.getElementById("dashboard_rib")
const display_rib_button = document.getElementById("display_rib_button")
const dashboard_savings_rib = document.getElementById("dashboard_savings_rib")

const display_rib_button_1 = document.getElementById("display_rib_button_1")

const export_rib_button = document.getElementById("export_rib_button")
const export_rib_button_1 = document.getElementById("export_rib_button_1")
display_rib_button.addEventListener("click", () => {
    // 1. Récupérer l'utilisateur connecté depuis la session
    const connected_user_json = sessionStorage.getItem("connected_user")
    const currentUser = JSON.parse(connected_user_json)
    modal_user_id_1.value = currentUser.id
    modal_user_rib_1.value = currentUser.rib
    display_rib_overlay.classList.remove("hidden")
})

display_rib_button_1.addEventListener("click", () => {
    // 1. Récupérer l'utilisateur connecté depuis la session
    const connected_user_json = sessionStorage.getItem("connected_user");
    const currentUser = JSON.parse(connected_user_json)
    modal_user_id_1.value = currentUser.id
    modal_user_rib_1.value = currentUser.rib
    display_rib_overlay.classList.remove("hidden")
})
display_rib_close_button.addEventListener("click", () => {
    display_rib_overlay.classList.add("hidden")
})

export_rib_button.addEventListener("click", () => {
    window.print()
})
export_rib_button_1.addEventListener("click", () => {
    window.print()
})
const recent_transactions_list = document.getElementById("recent_transactions_list")
const recent_transactions_table = document.getElementById("recent_transactions_table")
const no_transactions_message = document.getElementById("no_transactions_message")
const show_all_button_container = document.getElementById("show_all_button_container")
const show_all_transactions_button = document.getElementById("show_all_transactions_button")
const show_less_transactions_button = document.getElementById("show_less_transactions_button")

const recent_beneficiaries_list = document.getElementById("recent_beneficiaries_list")
const recent_beneficiaries_table = document.getElementById("recent_beneficiaries_table")
const no_beneficiaries_message = document.getElementById("no_beneficiaries_message")
const show_all_beneficiaries_button = document.getElementById("show_all_beneficiaries_button")
const show_less_beneficiaries_button = document.getElementById("show_less_beneficiaries_button")

const go_to_myaccount = document.getElementById("go_to_myaccounts")
const my_accounts_view = document.getElementById("myaccounts-view")
const transfers_view = document.getElementById("transfers-view")

go_to_myaccount.addEventListener("click", () => {
    go_to_myaccounts()
})

let is_balance_visible_1 = true
let is_balance_visible_2 = true
let is_balance_visible_3 = true
let is_balance_visible_4 = true

// Show / hide balance for main account in dashboard page
const balance_amount_1 = document.getElementById("balance_amount_1")
const toggle_balance_button_1 = document.getElementById("toggle_balance_1")
const balance_icon_1 = document.getElementById("balance_icon_1")
toggle_balance_button_1.addEventListener("click", () => {
    if (is_balance_visible_1 === true) {
        balance_amount_1.textContent = "****"
        balance_icon_1.src = "images/icons/show.png"
    }
    else {
        const real_balance = balance_amount_1.dataset.balance
        balance_amount_1.textContent = real_balance
        balance_icon_1.src = "images/icons/hideshoweye.png"
    }
    is_balance_visible_1 = !is_balance_visible_1
})

// Show / hide balance for savings account in dashboard page
const balance_amount_2 = document.getElementById("balance_amount_2")
const toggle_balance_button_2 = document.getElementById("toggle_balance_2")
const balance_icon_2 = document.getElementById("balance_icon_2")
toggle_balance_button_2.addEventListener("click", () => {
    if (is_balance_visible_2 === true) {
        balance_amount_2.textContent = "****"
        balance_icon_2.src = "images/icons/show.png"
    }
    else {
        const real_balance = balance_amount_2.dataset.balance
        balance_amount_2.textContent = real_balance
        balance_icon_2.src = "images/icons/hideshoweye.png"
    }
    is_balance_visible_2 = !is_balance_visible_2
})

// Show / hide balance for main account in my account page
const balance_amount_3 = document.getElementById("balance_amount_3")
const toggle_balance_button_3 = document.getElementById("toggle_balance_3")
const balance_icon_3 = document.getElementById("balance_icon_3")
toggle_balance_button_3.addEventListener("click", () => {
    if (is_balance_visible_3 === true) {
        balance_amount_3.textContent = "****"
        balance_icon_3.src = "images/icons/show.png"
    }
    else {
        const real_balance = balance_amount_3.dataset.balance
        balance_amount_3.textContent = real_balance
        balance_icon_3.src = "images/icons/hideshoweye.png"
    }
    is_balance_visible_3 = !is_balance_visible_3
})

// Show / hide balance for savings account in my account page
const balance_amount_4 = document.getElementById("balance_amount_4")
const toggle_balance_button_4 = document.getElementById("toggle_balance_4")
const balance_icon_4 = document.getElementById("balance_icon_4")
toggle_balance_button_4.addEventListener("click", () => {
    if (is_balance_visible_4 === true) {
        balance_amount_4.textContent = "****"
        balance_icon_4.src = "images/icons/show.png"
    }
    else {
        const real_balance = balance_amount_4.dataset.balance
        balance_amount_4.textContent = real_balance
        balance_icon_4.src = "images/icons/hideshoweye.png"
    }
    is_balance_visible_4 = !is_balance_visible_4
})

const all_pages = [login_page, signup_page, dashboard_view, my_accounts_view, transfers_view, beneficiaries_view, transactions_view, currency_converter_view]


const add_beneficiary_form = document.getElementById("add_beneficiary_form");

add_beneficiary_form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche la page de se recharger

    // 1. Récupérer les infos du formulaire
    const name_input = document.getElementById("beneficiary_name_input");
    const rib_input = document.getElementById("beneficiary_rib_input");

    const newBeneficiary = {
        name: name_input.value,
        rib: rib_input.value,
        status: true // Nouveau bénéficiaire est 'Active' par défaut
    }


    // 2. MISE À JOUR DE sessionStorage (pour voir le changement tout de suite)
    const currentUser = JSON.parse(sessionStorage.getItem("connected_user"));
    currentUser.beneficiaries.push(newBeneficiary);
    sessionStorage.setItem("connected_user", JSON.stringify(currentUser));

    // 3. MISE À JOUR DE localStorage (pour que ça RESTE SAUVEGARDÉ)
    let allUsers = JSON.parse(localStorage.getItem("users")) || []
    // Trouve notre utilisateur dans la liste de TOUS les utilisateurs
    const userIndex = allUsers.findIndex(user => user.id === currentUser.id);

    if (userIndex !== -1) { // Si on l'a trouvé
        // On met à jour ses bénéficiaires
        allUsers[userIndex] = currentUser; // Remplace l'ancien objet par le nouveau (mis à jour)

        // On sauvegarde la liste COMPLÈTE de tous les utilisateurs
        localStorage.setItem("users", JSON.stringify(allUsers));
    }

    // 4. Rafraîchir la liste et vider le formulaire
    recent_beneficiaries(); // Met à jour l'affichage
    add_beneficiary_form.reset(); // Vide les champs
    display_green_notification("Beneficiary added successfully!");
})

// Fonction qui affiche les 4 dernieres transactions dans le dashboard
function recent_transactions(show_all = false) {
    // 1. Récupérer l'utilisateur connecté
    const currentUser = JSON.parse(sessionStorage.getItem("connected_user"))

    // 2. Vider la liste actuelle pour éviter les doublons
    recent_transactions_list.innerHTML = "";

    // 3. Vérifier s'il y a des transactions
    if (!currentUser.transactions || currentUser.transactions.length === 0) {
        // S'il n'y en a pas :
        no_transactions_message.classList.remove("hidden")
        recent_transactions_table.classList.add("hidden")
        show_all_button_container.classList.add("hidden")
        show_less_transactions_button.classList.add("hidden") // Cache aussi le nouveau bouton
        return; // On arrête la fonction
    }

    // S'il y en a :
    no_transactions_message.classList.add("hidden")
    recent_transactions_table.classList.remove("hidden")
    // On affiche le conteneur des boutons (les boutons eux-mêmes seront gérés plus bas)
    show_all_button_container.classList.remove("hidden")

    // 4. ✅ LOGIQUE MISE À JOUR : On prend 4 ou TOUS
    let transactions_to_show;
    const all_transactions = currentUser.transactions.slice().reverse();

    if (show_all) {
        transactions_to_show = all_transactions; // On prend tout
        show_all_transactions_button.classList.add("hidden");
        show_less_transactions_button.classList.remove("hidden");
    } else {
        transactions_to_show = all_transactions.slice(0, 4); // On prend 4
        // On affiche "Show All" SEULEMENT s'il y en a plus de 4
        if (all_transactions.length > 4) {
            show_all_transactions_button.classList.remove("hidden");
        } else {
            show_all_transactions_button.classList.add("hidden");
        }
        show_less_transactions_button.classList.add("hidden");
    }


    // 5. Créer le HTML pour chaque transaction
    transactions_to_show.forEach(tx => {
        // Détermine la couleur (rouge/vert)
        const amountClass = tx.amount < 0 ? 'text-red-500' : 'text-green-500';

        // --- Formatage du $ ---
        const amount_formatted = tx.amount.toFixed(2);
        let amount_display;
        if (tx.amount < 0) {
            amount_display = `${amount_formatted}$`;
        } else {
            amount_display = `+${amount_formatted}$`;
        }

        const transactionRow = `
                <div class="p-4 grid grid-cols-3 items-center">
                <div class="text-gray-400">${tx.date}</div>
                <div class="text-gray-400">${tx.type}</div>
                <div class="text-center font-medium ${amountClass}">
                ${amount_display}
                    </div>
                </div>
            `
        // Ajoute la nouvelle ligne au tableau
        recent_transactions_list.innerHTML += transactionRow;
    })
}

show_all_transactions_button.addEventListener("click", () => {
    recent_transactions(true); // Appelle la fonction en mode "tout afficher"
});

show_less_transactions_button.addEventListener("click", () => {
    recent_transactions(false); // Appelle la fonction en mode "par défaut" (4)
})


// Fonction qui affiche les 4 derniers beneficiaires 
function recent_beneficiaries() {
    // 1. Récupérer l'utilisateur connecté
    const currentUser = JSON.parse(sessionStorage.getItem("connected_user"))

    // 2. Vider la liste actuelle pour éviter les doublons
    recent_beneficiaries_list.innerHTML = "";

    // 3. Vérifier s'il y a des beneficiaires
    if (!currentUser.beneficiaries || currentUser.beneficiaries.length === 0) {
        // S'il n'y en a pas :
        no_beneficiaries_message.classList.remove("hidden")
        recent_beneficiaries_table.classList.add("hidden")
        show_all_beneficiaries_button.classList.add("hidden")
    } else {
        // S'il y en a :
        no_beneficiaries_message.classList.add("hidden")
        recent_beneficiaries_table.classList.remove("hidden")
        show_all_beneficiaries_button.classList.remove("hidden")

        // 4. Prendre les 4 dernières transactions (les plus récentes)
        const recent = currentUser.beneficiaries.slice().reverse().slice(0, 4);

        recent.forEach(bn => {
            const beneficiary_status_color = bn.status === true ? 'bg-green-600' : 'bg-red-600'
            const beneficiary_status = bn.status === true ? 'Active' : 'Blocked'
            const beneficiaryRow = `<div class="p-4 grid grid-cols-1 gap-3 md:grid-cols-4 md:items-center" >
                                <div class="text-gray-400">
                                <span class="font-medium text-white md:hidden">Name: </span>
                                ${bn.name}
                                </div>
                                <div class="text-gray-400">
                                <span class="font-medium text-white md:hidden">Account: </span>
                                    ${bn.rib}
                                    </div>

                                    <button 
                                    class="beneficiary_status_button ${beneficiary_status_color} h-10 rounded-lg w-full md:w-3/4 md:justify-self-center" 
                                    data-rib="${bn.rib}">
                                    ${beneficiary_status}
                                     </button>

                                 <button class="beneficiary_delete_button justify-self-center md:justify-self-center" data-rib="${bn.rib}">
                                    <img src="images/icons/trash.svg" class="pointer-events-none">
                                </button>
                                </div >`
            // Ajoute la nouvelle ligne au tableau
            recent_beneficiaries_list.innerHTML += beneficiaryRow
        })
    }
}

recent_beneficiaries_list.addEventListener("click", (event) => {

    // --- 1. GESTION DU CLIC SUR "SUPPRIMER" ---
    const deleteButton = event.target.closest(".beneficiary_delete_button");
    if (deleteButton) {
        if (confirm("Do you really want to delete this beneficiary?")) {
            const ribToDelete = deleteButton.dataset.rib;
            let currentUser = JSON.parse(sessionStorage.getItem("connected_user"));
            currentUser.beneficiaries = currentUser.beneficiaries.filter(b => b.rib !== ribToDelete);
            sessionStorage.setItem("connected_user", JSON.stringify(currentUser));

            let allUsers = JSON.parse(localStorage.getItem("users")) || [];
            const userIndex = allUsers.findIndex(user => user.id === currentUser.id);
            if (userIndex !== -1) {
                allUsers[userIndex] = currentUser;
                localStorage.setItem("users", JSON.stringify(allUsers));
            }
            recent_beneficiaries();
            display_green_notification("Beneficiary deleted!");
        }
        return; // On a fini
    }

    // --- 2. GESTION DU CLIC SUR "STATUS" (Active/Blocked) ---
    const statusButton = event.target.closest(".beneficiary_status_button");
    if (statusButton) {
        const ribToToggle = statusButton.dataset.rib;
        let currentUser = JSON.parse(sessionStorage.getItem("connected_user"));

        // Trouve le bénéficiaire
        const beneficiary = currentUser.beneficiaries.find(b => b.rib === ribToToggle);

        if (!beneficiary) return; // Sécurité

        // Affiche le bon message de confirmation
        const newStatus = !beneficiary.status; // Calcule le NOUVEAU statut
        const actionText = newStatus === true ? "unblock" : "block"; // "unblock" ou "block"

        if (confirm(`Do you really want to ${actionText} this beneficiary?`)) {

            // 1. MISE À JOUR de l'objet 'currentUser' (en session)
            beneficiary.status = newStatus; // Applique le nouveau statut
            sessionStorage.setItem("connected_user", JSON.stringify(currentUser));

            // 2. MISE À JOUR de 'localStorage' (permanent)
            let allUsers = JSON.parse(localStorage.getItem("users")) || [];
            const userIndex = allUsers.findIndex(user => user.id === currentUser.id);
            if (userIndex !== -1) {
                allUsers[userIndex] = currentUser; // Remplace l'ancien objet
                localStorage.setItem("users", JSON.stringify(allUsers));
            }

            // 3. Rafraîchir la liste
            recent_beneficiaries();
            display_green_notification(`Beneficiary ${actionText}ed!`);
        }
    }
})

function go_to_login_page() {
    // 1. Cache toutes les pages
    all_pages.forEach(page => page.classList.add("hidden"));
    left_side_menu.classList.add("hidden")
    login_page.classList.remove("hidden");
}

// Affiche la page d'Inscription
function go_to_signup_page() {
    all_pages.forEach(page => page.classList.add("hidden"))
    left_side_menu.classList.add("hidden")
    signup_page.classList.remove("hidden")
}

// Affiche le Dashboard (et le remplit avec les infos de l'utilisateur)
function go_to_dashboard() {
    all_pages.forEach(page => page.classList.add("hidden"))
    // 1. On récupère l'utilisateur depuis la session
    const connected_user_json = sessionStorage.getItem("connected_user");
    const currentUser = JSON.parse(connected_user_json);

    // 2. On remplit le dashboard avec ses infos
    if (currentUser) {
        dashboard_username.textContent = "Welcome back, " + currentUser.prenom
        dashboard_rib.textContent = `Checking ${currentUser.rib}`
        dashboard_savings_rib.textContent = `Savings ${currentUser.rib_savings}`
        // On met à jour les soldes sur la page
        balance_amount_1.textContent = `$${currentUser.main_balance.toFixed(2)}`;
        balance_amount_2.textContent = `$${currentUser.savings_balance.toFixed(2)}`;

        // On met aussi les soldes en "data-balance" pour la fonction "cacher/montrer"
        balance_amount_1.dataset.balance = `$${currentUser.main_balance.toFixed(2)}`;
        balance_amount_2.dataset.balance = `$${currentUser.savings_balance.toFixed(2)}`;
    }

    // 3. On affiche le dashboard
    dashboard_view.classList.remove("hidden")
    left_side_menu.classList.remove("hidden")
    recent_transactions()
}

function go_to_myaccounts() {
    all_pages.forEach(page => page.classList.add("hidden"))
    my_accounts_view.classList.remove("hidden")
    left_side_menu.classList.remove("hidden")
}

// Affiche le dashboard ou la login page si l'utilisateur n'est pas connecté
window.addEventListener("DOMContentLoaded", () => {
    // On regarde si un utilisateur est gardé en mémoire de session
    if (sessionStorage.getItem("connected_user")) {
        // Si oui, on va direct au dashboard
        go_to_dashboard()
    } else {
        // Sinon, on va à la page de login
        go_to_login_page()
    }
})

// Fonction qui genere un RIB pour l'utilisateur
function generate_rib(length) {
    const characters = "0123456789"
    let result_rib = ""
    for (let i = 0; i < length; i++) {
        result_rib += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result_rib
}

// Fonction qui affiche une notification en vert
function display_green_notification(msg) {
    error_notification.style.display = "none";
    success_notification.textContent = msg
    success_notification.style.display = "block"
    setTimeout(() => {
        success_notification.style.display = "none";
    }, 3000)
}

// Fonction qui affiche une notification en rouge
function display_red_notification(msg) {
    success_notification.style.display = "none"
    error_notification.textContent = msg
    error_notification.style.display = "block"
    setTimeout(() => {
        error_notification.style.display = "none"
    }, 3000)
}

// Fonction qui affiche les beneficiaires (par défaut, 4)
function recent_beneficiaries(show_all = false) {
    // 1. Récupérer l'utilisateur connecté
    const currentUser = JSON.parse(sessionStorage.getItem("connected_user"))

    // 2. Vider la liste actuelle pour éviter les doublons
    recent_beneficiaries_list.innerHTML = "";

    // 3. Vérifier s'il y a des beneficiaires
    if (!currentUser.beneficiaries || currentUser.beneficiaries.length === 0) {
        // S'il n'y en a pas :
        no_beneficiaries_message.classList.remove("hidden")
        recent_beneficiaries_table.classList.add("hidden")
        show_all_beneficiaries_button.classList.add("hidden")
        show_less_beneficiaries_button.classList.add("hidden")
        return; // On arrête la fonction ici
    }

    // S'il y en a :
    no_beneficiaries_message.classList.add("hidden")
    recent_beneficiaries_table.classList.remove("hidden")

    // 4. ✅ LOGIQUE MISE À JOUR : On prend 4 ou TOUS
    let beneficiaries_to_show;
    const all_beneficiaries = currentUser.beneficiaries.slice().reverse();

    if (show_all) {
        beneficiaries_to_show = all_beneficiaries; // On prend tout
        show_all_beneficiaries_button.classList.add("hidden");
        show_less_beneficiaries_button.classList.remove("hidden");
    } else {
        beneficiaries_to_show = all_beneficiaries.slice(0, 4); // On prend 4
        // On affiche "Show All" SEULEMENT s'il y en a plus de 4
        if (all_beneficiaries.length > 4) {
            show_all_beneficiaries_button.classList.remove("hidden");
        } else {
            show_all_beneficiaries_button.classList.add("hidden");
        }
        show_less_beneficiaries_button.classList.add("hidden");
    }

    // 5. On affiche la liste (que ce soit 4 ou tous)
    beneficiaries_to_show.forEach(bn => {
        const beneficiary_status_color = bn.status === true ? 'bg-green-600' : 'bg-red-600'
        const beneficiary_status = bn.status === true ? 'Active' : 'Blocked'
        const beneficiaryRow = `<div class="p-4 grid grid-cols-1 gap-3 md:grid-cols-4 md:items-center" >
                                <div class="text-gray-400">
                                    <span class="font-medium text-white md:hidden">Name: </span>
                                ${bn.name}
                                </div>
                                <div class="text-gray-400">
                                <span class="font-medium text-white md:hidden">Account: </span>
                                ${bn.rib}
                                </div>
                                <button 
                                class="beneficiary_status_button ${beneficiary_status_color} h-10 rounded-lg w-full md:w-3/4 md:justify-self-center" 
                                data-rib="${bn.rib}">
                                ${beneficiary_status}
                                </button>
                                <button class="beneficiary_delete_button justify-self-center md:justify-self-center" data-rib="${bn.rib}">
                                <img src="images/icons/trash.svg" class="pointer-events-none">
                                </button>
                                </div >`
        // Ajoute la nouvelle ligne au tableau
        recent_beneficiaries_list.innerHTML += beneficiaryRow
    })
}


// --- ÉCOUTEURS POUR LES BOUTONS "SHOW ALL" / "SHOW LESS" ---

show_all_beneficiaries_button.addEventListener("click", () => {
    recent_beneficiaries(true); // Appelle la fonction en mode "tout afficher"
})

show_less_beneficiaries_button.addEventListener("click", () => {
    recent_beneficiaries(false); // Appelle la fonction en mode "par défaut" (4)
})



// Clic sur "Register Now"
register_now_button.addEventListener("click", () => {
    go_to_signup_page()
})

// Clic sur "Login"
go_to_login_button.addEventListener("click", () => {
    go_to_login_page()
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
    const rib_savings = generate_rib(25)
    const id = rib.substring(0, 8)
    let users = JSON.parse(localStorage.getItem("users")) || []
    const new_user = {
        prenom: first_name,
        nom: last_name,
        mot_de_passe: password,
        rib: rib,
        rib_savings: rib_savings,
        id: id,
        main_balance: 10000,
        savings_balance: 15000,
        transactions: [],
        beneficiaries: []
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

// Clic sur le bouton "go to login" du modal
modal_close_button.addEventListener("click", () => {
    // 1. Cacher le modal
    success_modal_overlay.classList.add("hidden")
    // 2. Rediriger vers la page de login
    go_to_login_page()
})

// Clic sur le bouton "Copier ID"
copy_id_button.addEventListener("click", () => {
    // Utilise l'API du presse-papiers pour copier le texte
    navigator.clipboard.writeText(modal_user_id.value)
        .then(() => {
            // Donne un retour visuel à l'utilisateur
            copy_id_button.textContent = "Copied !"
            // Remet le texte original après 2 secondes
            setTimeout(() => {
                copy_id_button.textContent = "Copy"
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
            copy_rib_button.textContent = "Copied !"
            setTimeout(() => {
                copy_rib_button.textContent = "Copy"
            }, 2000)
        })
        .catch(err => {
            console.error("Erreur lors de la copie du RIB: ", err)
        })
})

function populate_beneficiary_dropdown(from_account) {
    // 1. On récupère le menu déroulant
    const select_menu = document.getElementById("select_beneficiary");

    // 2. On récupère l'utilisateur et ses bénéficiaires
    const current_user = JSON.parse(sessionStorage.getItem("connected_user"));

    // 3. On vide les anciennes options (sauf la première "Choose...")
    select_menu.innerHTML = '<option style="color:#9EABBA;" disabled selected>Choose a Beneficiary</option>';

    // 4. LOGIQUE : Virements internes
    if (from_account === 'main') {
        const internal_option = document.createElement("option");
        internal_option.textContent = "My Savings Account";
        internal_option.value = "_self_savings_";
        select_menu.appendChild(internal_option);

        // B. On ajoute TOUS les autres bénéficiaires externes...
        if (current_user.beneficiaries && current_user.beneficiaries.length > 0) {

            // ✅ CORRECTION ICI : On filtre pour ne garder que les actifs
            const active_beneficiaries = current_user.beneficiaries.filter(b => b.status === true);

            active_beneficiaries.forEach(beneficiary => {
                const new_option = document.createElement("option");
                new_option.textContent = beneficiary.name;
                new_option.value = beneficiary.rib;
                select_menu.appendChild(new_option);
            });
        }

    } else {
        // --- Si on envoie depuis le compte ÉPARGNE ---
        const internal_option = document.createElement("option");
        internal_option.textContent = "My Main Account";
        internal_option.value = "_self_main_";
        select_menu.appendChild(internal_option);
    }
}

const transfer_form = document.getElementById("transfer_form");
const select_from_account = document.getElementById("select_from_account");
const select_beneficiary = document.getElementById("select_beneficiary");
const transfer_amount_input = document.getElementById("transfer_amount_input");

select_from_account.addEventListener("change", () => {
    // On met à jour la liste des bénéficiaires à chaque changement
    populate_beneficiary_dropdown(select_from_account.value);
})

// On écoute la soumission du formulaire
transfer_form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche la page de recharger

    // 1. Récupérer les infos
    const from_account = select_from_account.value; // "main" ou "savings"
    const receiver_key = select_beneficiary.value; // Soit un RIB, soit "_self_savings_"
    const amount_string = transfer_amount_input.value;
    const amount_regex = /^\d+(\.\d{1,2})?$/;

    let current_user = JSON.parse(sessionStorage.getItem("connected_user"));
    let all_users = JSON.parse(localStorage.getItem("users"));

    // 2. Vérifications
    if (receiver_key === "Choose a Beneficiary") {
        display_red_notification("Please select a beneficiary");
        return;
    }
    if (!amount_regex.test(amount_string)) {
        display_red_notification("Invalid amount format. (e.g., 1200 or 1200.50)");
        return;
    }
    const amount = parseFloat(amount_string);
    if (amount <= 0) {
        display_red_notification("Amount must be greater than 0");
        return;
    }

    let has_enough_funds = false;
    if (from_account === 'main') {
        has_enough_funds = current_user.main_balance >= amount;
    } else if (from_account === 'savings') {
        has_enough_funds = current_user.savings_balance >= amount;
    }
    if (!has_enough_funds) {
        display_red_notification("You do not have enough funds in that account");
        return;
    }

    // 3. Trouver l'expéditeur
    const sender_index = all_users.findIndex(user => user.id === current_user.id);

    // 4. ✅ NOUVELLE LOGIQUE : Virement INTERNE ou EXTERNE ?
    if (receiver_key === "_self_savings_" || receiver_key === "_self_main_") {
        // --- C'EST UN VIREMENT INTERNE ---

        // Retirer l'argent et l'ajouter à l'autre compte
        if (from_account === 'main') {
            all_users[sender_index].main_balance -= amount;
            all_users[sender_index].savings_balance += amount;
            all_users[sender_index].transactions.push({
                id: Date.now(), date: new Date().toLocaleDateString(),
                type: "Transfer to Savings", amount: -amount
            });
        } else { // (from_account === 'savings')
            all_users[sender_index].savings_balance -= amount;
            all_users[sender_index].main_balance += amount;
            all_users[sender_index].transactions.push({
                id: Date.now(), date: new Date().toLocaleDateString(),
                type: "Transfer to Main", amount: -amount
            });
        }

    } else {
        // --- C'EST UN VIREMENT EXTERNE (vers un bénéficiaire) ---
        const receiver_index = all_users.findIndex(user => user.rib === receiver_key);

        if (receiver_index === -1) {
            display_red_notification("Error: Beneficiary account not found");
            return;
        }
        if (sender_index === receiver_index) {
            display_red_notification("You cannot send money to yourself");
            return;
        }

        const sender_transaction = {
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            type: `Transfer to ${all_users[receiver_index].prenom}`,
            amount: -amount
        };

        // Retirer l'argent de l'expéditeur
        if (from_account === 'main') {
            all_users[sender_index].main_balance -= amount;
        } else {
            all_users[sender_index].savings_balance -= amount;
        }
        all_users[sender_index].transactions.push(sender_transaction);
    }

    // 5. Sauvegarder les changements
    localStorage.setItem("users", JSON.stringify(all_users));
    sessionStorage.setItem("connected_user", JSON.stringify(all_users[sender_index]));

    // 6. Donner un retour à l'utilisateur
    display_green_notification("Transfer successful!");
    transfer_form.reset();
    populate_beneficiary_dropdown(from_account); // Garde le bon menu à jour

    // 7. Mettre à jour le texte du Dashboard (qui est caché)
    const updated_user = all_users[sender_index];
    balance_amount_1.textContent = `$${updated_user.main_balance.toFixed(2)}`;
    balance_amount_2.textContent = `$${updated_user.savings_balance.toFixed(2)}`;
    balance_amount_1.dataset.balance = `$${updated_user.main_balance.toFixed(2)}`;
    balance_amount_2.dataset.balance = `$${updated_user.savings_balance.toFixed(2)}`;
})

login_form.addEventListener("submit", (event) => {
    event.preventDefault()
    const login_password = document.getElementById("login_password")
    const login_identifier = document.getElementById("login_identifier")

    const password = login_password.value
    const identifier = login_identifier.value

    if (password === "" || identifier === "") {
        display_red_notification("All fiels must be filled")
        return
    }
    // 2. Récupérer les utilisateurs
    const users = JSON.parse(localStorage.getItem("users")) || []

    // 3. Chercher l'utilisateur
    const found_user = users.find(user => user.id === identifier)

    // 4. Vérifier si l'utilisateur existe ET si le mot de passe est bon
    if (found_user && found_user.mot_de_passe === password) {
        // SUCCÈS !
        display_green_notification("Login Successfull !")

        // 5. ON GARDE L'UTILISATEUR EN MÉMOIRE
        sessionStorage.setItem("connected_user", JSON.stringify(found_user))

        // 6. ON VA AU DASHBOARD
        go_to_dashboard()

        login_form.reset()
    } else {
        display_red_notification("Identifier or password incorrect");
    }
})
const transactions = [
    { id: 1, date: "2025-10-26", type: "Payment", amount: 100, amountType: true },
    { id: 2, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false },
    { id: 3, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true },
    { id: 4, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false },

    { id: 5, date: "2025-10-26", type: "Payment", amount: 200, amountType: true },
    { id: 6, date: "2025-10-26", type: "Transfer", amount: -20, amountType: false },
    { id: 7, date: "2025-10-26", type: "Transfer", amount: 10, amountType: true },
    { id: 8, date: "2025-10-26", type: "Recharge", amount: -5, amountType: false },

    { id: 9, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true },
    { id: 10, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false },
    { id: 11, date: "2025-10-26", type: "Payment", amount: 100, amountType: true },
    { id: 12, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false },

    { id: 13, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true },
    { id: 14, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false },
    { id: 15, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true },
    { id: 16, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false },

    { id: 17, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true },
    { id: 18, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false },
    { id: 19, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true },
    { id: 20, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false },

    { id: 21, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true },
    { id: 22, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false },
    { id: 23, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false }
];
function showTransactionTable(id, date, type, amount, amountType) {
    const original = document.querySelector('.transaction-table');
    const container = document.getElementById('transactions-container');
    const newTable = original.cloneNode(true);

    newTable.classList.remove('hidden');
    newTable.classList.add("id" + id);
    const spans = newTable.querySelectorAll('span');
    spans[1].textContent = date;
    spans[3].textContent = type;
    spans[4].textContent = amount + '$';
    spans[4].style.color = amountType ? "#5CFF98" : "#EB5757";

    container.appendChild(newTable);
}
function separateTransactions(arr) {
    const updatedtransactions = [];
    let temp = [];
    let counter = 0;
    let index = 1;
    arr.forEach(transaction => {
        temp[index - 1] = transaction;
        if (index % 4 === 0) {
            updatedtransactions[counter] = temp;
            temp = [];
            counter++;
        }
        index++
    });

    let rest = arr.length % 4;
    if (rest) {
        for (let i = 0; i < rest; i++) {
            updatedtransactions[counter] = temp.filter(obj => Object.keys(obj).length > 0);
        }
    }

    for (let i = 0; i < updatedtransactions.length; i++) {
        updatedtransactions[i] = updatedtransactions[i].filter(obj => Object.keys(obj).length > 0);
    }

    return updatedtransactions
}
function showTransactionOfEachTable() {
    for (let i = 0; i < paginationBtns.length; i++) {
        if (paginationBtns[i].classList.contains('bg-[#283039]')) {
            allTransactions[parseInt(paginationBtns[i].textContent) - 1].forEach(t => {
                showTransactionTable(t.id, t.date, t.type, t.amount, t.amountType);
            });
        }
    }
}
function switchPagination(num) {
    for (let i = 0; i < 4; i++) {
        try { paginationBtns[i].classList.remove('bg-[#283039]'); } catch { }
        paginationBtns[num % 4].classList.add('bg-[#283039]');
    }
}
function showPaginationButtons() {
    for (let i = paginationIndex; i <= paginationIndex + 3; i++) {
        if (i <= allTransactions.length) {
            let btn = document.createElement("button");
            btn.classList = "text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full pagination";
            btn.textContent = i;
            document.getElementById('pagination-container').insertBefore(btn, document.getElementById('next-arrow'));
        } else { break }
    }

    try {
        if (parseInt(paginationBtns[actualIndex - 1].textContent) === actualIndex) { paginationBtns[actualIndex - 1].classList.add("bg-[#283039]"); }
    } catch { }
}

document.getElementById("pagination-container").addEventListener("click", (e) => {
    if (e.target.textContent != "") {
        try {
            if (!Number.isNaN(parseInt(e.target.textContent))) { actualIndex = parseInt(e.target.textContent); }
            switchPagination(parseInt(e.target.textContent) - 1);
            document.getElementById('transactions-container').innerHTML = "";
            showTransactionOfEachTable();
        } catch { }
    }
    else {
        try {
            if (e.target.alt == "arrow right icon") {
                if (allTransactions.length > paginationIndex + 4) { paginationIndex += 4; }
            } else {
                if (paginationIndex > 1) { paginationIndex -= 4; }
            }
            document.querySelectorAll(".pagination").forEach(btn => btn.remove());
            showPaginationButtons();
        } catch { }
    }
});


var allTransactions = separateTransactions(transactions);
var actualIndex = 1;
var paginationIndex = 1;
showPaginationButtons();
var paginationBtns = document.getElementsByClassName("pagination");
paginationBtns[actualIndex - 1].classList.add("bg-[#283039]");

showTransactionOfEachTable();
async function convertCurrency(amount, from, to) {
    document.querySelector('#converted-currency').textContent = "Loading...";
    try {
        const response = await fetch(`${API_URL}${from}`);
        const data = await response.json();
        const rate = data.conversion_rates[to];
        const convertedAmount = amount * rate;

        document.querySelector('#converted-currency').textContent = convertedAmount.toFixed(2);
    }catch{document.querySelector('#converted-currency').textContent = "An error caused by the server, please try again";}
}

let inputAmount = document.getElementsByClassName('convert-input')[0];
let inputFrom = document.getElementsByClassName('convert-input')[1];
let inputTo = document.getElementsByClassName('convert-input')[2];

const API_URL = "https://v6.exchangerate-api.com/v6/a52906b05cf0547eb05bfe81/latest/";

document.getElementById('convert-currency-btn').addEventListener('click', () => convertCurrency(inputAmount.value, inputFrom.value, inputTo.value))