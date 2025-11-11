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
    {id: 10, date: "2025-10-26", type: "Recharge", amount: -35, amountType: false}
];

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

function separateTransactions(){
    const updatedtransactions = [];
    let temp = [];
    let counter = 0;
    let index = 1;
    transactions.forEach(transaction => {
        temp[index-1] = transaction;
        if(index%4 === 0){
            updatedtransactions[counter] = temp;
            temp = [];
            counter++;
        }
        index++
    });

    let rest = transactions.length % 4;
    if(rest){
        for(let i=0; i<rest; i++){
            updatedtransactions[counter] = temp.filter(obj => Object.keys(obj).length > 0);
        }
    }
    return updatedtransactions
}

console.log(separateTransactions());
// .filter(obj => Object.keys(obj).length > 0)
//showTransaction(transaction.id, transaction.date, transaction.type, transaction.amount, transaction.amountType);