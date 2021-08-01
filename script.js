let listEle = document.querySelector('#list');
let button = document.querySelector('.btn');
let income = 0;
let expense = 0;
function display(){
    for(let i = 0; i < localStorage.length; i++) {
        let transactionList = document.createElement('li');
        let amount = localStorage.getItem(localStorage.key(i));
        let input = localStorage.key(i);
        if(amount > 0) {
            income += amount;
            transactionList.setAttribute('class', 'plus');
            transactionList.appendChild(document.createTextNode(input + '     ' + amount));
        } else {
            expense -= amount;
            transactionList.setAttribute('class', 'minus');
            transactionList.textContent = input + '     ' + amount;
        }
        listEle.appendChild(transactionList);
    }
    document.querySelector('#money-plus').textContent = '$' + income;
    document.querySelector('#money-minus').textContent = '$' + expense;
    document.querySelector('#balance').textContent = '$' + (income - expense);
}

//add transaction to the localStorage on click of "Add transaction" button
button.addEventListener('click', addItems);

function addItems(){
    var input = document.querySelector('#text').value;
    let amount = document.querySelector('#amount').value;
    window.localStorage.setItem(input, amount);
}

window.onload = () => {
    display();
}
