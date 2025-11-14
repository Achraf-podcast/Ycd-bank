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

if([].length != 0){
    var allTransactions = separateTransactions([]);
    var actualIndex = 1;
    var paginationIndex = 1;
    document.getElementById("pagination-container").classList.remove('hidden');
    showPaginationButtons();
    var paginationBtns = document.getElementsByClassName("pagination");
    paginationBtns[actualIndex-1].classList.add("bg-[#283039]");
    showTransactionOfEachTable();
}else{document.getElementById("no_transactions_message").classList.remove('hidden')}
