holderUser = {"prenom": "Achraf", "nom": "Agourram"};

function blockCard(){
    if(!isBlocked){
        document.getElementById('block-button').classList.replace("bg-[#283039]", "bg-blue-600");
        document.getElementById('block-cercle').classList.replace("left-0", "right-0");
        isBlocked = true;
    }
    else{
        document.getElementById('block-button').classList.replace("bg-blue-600", "bg-[#283039]");
        document.getElementById('block-cercle').classList.replace("right-0", "left-0");
        isBlocked = false;
    }
}

var isBlocked = false;
const holderName = holderUser.nom +" "+holderUser.prenom;
document.getElementById('holder-name').textContent = holderName;

document.getElementById('block-button').addEventListener("click", blockCard);