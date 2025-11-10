const transactions = [
    {id: 1, date: "2025-10-26", type: "Payment", amount: 100, amountType: true},
    {id: 2, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false},
    {id: 3, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 4, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false},

    {id: 5, date: "2025-10-26", type: "Payment", amount: 100, amountType: true},
    {id: 6, date: "2025-10-26", type: "Transfer", amount: -90, amountType: false},
    {id: 7, date: "2025-10-26", type: "Transfer", amount: 800, amountType: true},
    {id: 8, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false}
];
const updatedtransactions = [];

function showTransaction(id, date, type, amount, amountType){
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

let temp = [{id: 1, date: "2025-10-26", type: "Payment", amount: 100, amountType: true}];
let counter = 0;
for(let i=1; i<transactions.length; i++){
    temp[i] = transactions[i];
    if(i%4 === 0){
        console.log("yes");
    }
}

console.log(temp);



//showTransaction(transaction.id, transaction.date, transaction.type, transaction.amount, transaction.amountType);