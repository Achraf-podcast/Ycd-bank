const transactions = [
    {id: 1, date: "2025-10-26", type: "Payment", amount: 100, amountType: true},
    {id: 2, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false},
    {id: 3, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 4, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},

    {id: 5, date: "2025-10-26", type: "Payment", amount: 100, amountType: true},
    {id: 6, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false},
    {id: 7, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 8, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},

    {id: 9, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 10, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},
    {id: 11, date: "2025-10-26", type: "Payment", amount: 100, amountType: true},
    {id: 12, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false},

    {id: 13, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 14, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},
    {id: 15, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false}
];
var allTransactions = separateTransactions(transactions);
var paginationBtns = document.getElementsByClassName("pagination");

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




showTransactionOfEachTable();