const signup_form = document.getElementById("signup_form")
const login_form = document.getElementById("login_form")
const signup_page = document.getElementById("signup_page")
const login_page = document.getElementById("login_page")
const success_notification = document.getElementById("success_notification")
const error_notification = document.getElementById("error_notification")

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

const dashboard_view = document.getElementById("dashboard-view")
const dashboard_username = document.getElementById("dashboard_username")
const go_to_dashboard_button = document.getElementById("go_to_dashboard")

const go_to_transfers_button = document.getElementById("go_to_transfers_button")

go_to_transfers_button.addEventListener("click" , () =>{
    go_to_transfers()
})

function go_to_transfers(){
    all_pages.forEach(page => page.classList.add("hidden"))
    transfers_view.classList.remove("hidden")
    left_side_menu.classList.remove("hidden")
}

go_to_dashboard_button.addEventListener("click", () => {
    go_to_dashboard()
})

const dashboard_rib = document.getElementById("dashboard_rib")
const display_rib_button = document.getElementById("display_rib_button")

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

display_rib_button_1.addEventListener("click", () =>{
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
export_rib_button_1.addEventListener("click" ,() =>{
    window.print()
})
const recent_transactions_list = document.getElementById("recent_transactions_list")
const recent_transactions_table = document.getElementById("recent_transactions_table")
const no_transactions_message = document.getElementById("no_transactions_message")
const show_all_button_container = document.getElementById("show_all_button_container")

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

const all_pages = [login_page, signup_page, dashboard_view, my_accounts_view,transfers_view]

function recent_transactions() {
    // 1. Récupérer l'utilisateur connecté
    const currentUser = JSON.parse(sessionStorage.getItem("connected_user"));

    if (!currentUser || !currentUser.transactions) {
        console.error("Utilisateur ou transactions non trouvés");
        return;
    }

    // 2. Vider la liste actuelle pour éviter les doublons
    recent_transactions_list.innerHTML = "";

    // 3. Vérifier s'il y a des transactions
    if (currentUser.transactions.length === 0) {
        // S'il n'y en a pas :
        no_transactions_message.classList.remove("hidden")
        recent_transactions_table.classList.add("hidden")
        show_all_button_container.classList.add("hidden")
    } else {
        // S'il y en a :
        no_transactions_message.classList.add("hidden")
        recent_transactions_table.classList.remove("hidden")
        show_all_button_container.classList.remove("hidden")

        // 4. Prendre les 4 dernières transactions (les plus récentes)
        const recent = currentUser.transactions.slice().reverse().slice(0, 4);

        // 5. Créer le HTML pour chaque transaction
        recent.forEach(tx => {
            // Détermine la couleur (rouge/vert) et le signe (+/-)
            const amountClass = tx.amount < 0 ? 'text-red-500' : 'text-green-500';
            const amountSign = tx.amount < 0 ? '' : '+'; // Ajoute un "+" pour les montants positifs

            const transactionRow = `
                <div class="p-4 grid grid-cols-3 items-center">
                    <div class="text-gray-400">${tx.date}</div>
                    <div class="text-gray-400">${tx.type}</div>
                    <div class="text-center font-medium ${amountClass}">
                        ${amountSign}$${tx.amount.toFixed(2)}
                    </div>
                </div>
            `;
            // Ajoute la nouvelle ligne au tableau
            recent_transactions_list.innerHTML += transactionRow;
        })
    }
}

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
        dashboard_username.textContent = "Welcome back, " + currentUser.prenom;
        dashboard_rib.textContent = `Checking ${currentUser.rib}`;
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
    const id = rib.substring(0, 8)
    let users = JSON.parse(localStorage.getItem("users")) || []
    const new_user = {
        prenom: first_name,
        nom: last_name,
        mot_de_passe: password,
        rib: rib,
        id: id,
        transactions: [{ id: 1, date: "2025-10-26", type: "Payment", amount: -100, amountType: true },]
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
            copy_rib_button.textContent = "Copied !";
            setTimeout(() => {
                copy_rib_button.textContent = "Copy";
            }, 2000)
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
    {id: 1, date: "2025-10-26", type: "Payment", amount: 100, amountType: true},
    {id: 2, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false},
    {id: 3, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 4, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},

    {id: 5, date: "2025-10-26", type: "Payment", amount: 200, amountType: true},
    {id: 6, date: "2025-10-26", type: "Transfer", amount: -20, amountType: false},
    {id: 7, date: "2025-10-26", type: "Transfer", amount: 10, amountType: true},
    {id: 8, date: "2025-10-26", type: "Recharge", amount: -5, amountType: false},

    {id: 9, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 10, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},
    {id: 11, date: "2025-10-26", type: "Payment", amount: 100, amountType: true},
    {id: 12, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false},

    {id: 13, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 14, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},
    {id: 15, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 16, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},

    {id: 17, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 18, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},
    {id: 19, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 20, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},

    {id: 21, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 22, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},
    {id: 23, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false}
];
function showTransactionTable(id, date, type, amount, amountType){
    const original = document.querySelector('.transaction-table');
    const container = document.getElementById('transactions-container');
    const newTable = original.cloneNode(true);

    newTable.classList.remove('hidden');
    newTable.classList.add("id"+id);
    const spans = newTable.querySelectorAll('span');
    spans[1].textContent = date;
    spans[3].textContent = type;
    spans[4].textContent = amount+'$';
    spans[4].style.color = amountType ? "#5CFF98" : "#EB5757";

    container.appendChild(newTable);
}
function separateTransactions(arr){
    const updatedtransactions = [];
    let temp = [];
    let counter = 0;
    let index = 1;
    arr.forEach(transaction => {
        temp[index-1] = transaction;
        if(index%4 === 0){
            updatedtransactions[counter] = temp;
            temp = [];
            counter++;
        }
        index++
    });

    let rest = arr.length % 4;
    if(rest){
        for(let i=0; i<rest; i++){
            updatedtransactions[counter] = temp.filter(obj => Object.keys(obj).length > 0);
        }
    }

    for(let i=0; i<updatedtransactions.length; i++){
        updatedtransactions[i] = updatedtransactions[i].filter(obj => Object.keys(obj).length > 0);
    }

    return updatedtransactions
}
function showTransactionOfEachTable(){
    for(let i=0; i<paginationBtns.length; i++){
        if(paginationBtns[i].classList.contains('bg-[#283039]')){
            allTransactions[parseInt(paginationBtns[i].textContent)-1].forEach(t => {
                showTransactionTable(t.id, t.date, t.type, t.amount, t.amountType);
            });
        }
    }
}
function switchPagination(num){
    for(let i=0; i<4; i++){
        try{paginationBtns[i].classList.remove('bg-[#283039]');}catch{}
        paginationBtns[num%4].classList.add('bg-[#283039]');
    }
}
function showPaginationButtons(){
    for(let i=paginationIndex; i<=paginationIndex+3; i++){
        if(i<=allTransactions.length){
            let btn = document.createElement("button");
            btn.classList = "text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full pagination";
            btn.textContent = i;
            document.getElementById('pagination-container').insertBefore(btn, document.getElementById('next-arrow'));
        }else{break}
    }
    
    try{
        if(parseInt(paginationBtns[actualIndex-1].textContent) === actualIndex){paginationBtns[actualIndex-1].classList.add("bg-[#283039]");}
    }catch{}
}

document.getElementById("pagination-container").addEventListener("click", (e) => {
    if(e.target.textContent != ""){
        try{
            if(!Number.isNaN(parseInt(e.target.textContent))){actualIndex = parseInt(e.target.textContent);}
            switchPagination(parseInt(e.target.textContent)-1);
            document.getElementById('transactions-container').innerHTML = "";
            showTransactionOfEachTable();
        }catch{}
    }
    else{
        try{
            if(e.target.alt == "arrow right icon"){
                if(allTransactions.length>paginationIndex+4){paginationIndex += 4;}
            }else{
                if(paginationIndex>1){paginationIndex -= 4;}
            }
            document.querySelectorAll(".pagination").forEach(btn => btn.remove());
            showPaginationButtons();
        }catch{}
    }
});


var allTransactions = separateTransactions(transactions);
var actualIndex = 1;
var paginationIndex = 1;
showPaginationButtons();
var paginationBtns = document.getElementsByClassName("pagination");
paginationBtns[actualIndex-1].classList.add("bg-[#283039]");

showTransactionOfEachTable();