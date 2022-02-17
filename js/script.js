// total expense and balance
document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const incomeInputField = parseInt(document.getElementById('income-input').value);
    const foodInputField = parseInt(document.getElementById('food-input').value);
    const rentInputField = parseInt(document.getElementById('rent-input').value);
    const clothesInputField = parseInt(document.getElementById('clothes-input').value);

    const allExpenses = foodInputField + rentInputField + clothesInputField;
    
    const newBalance = incomeInputField - allExpenses;

    const totalExpenseText = document.getElementById('totalExpense');
    totalExpenseText.innerText = allExpenses;
    
    let balance = document.getElementById('balance');
    balance.innerText = newBalance;
});

// saving and remaining balance
document.getElementById('saving-btn').addEventListener('click', function() {

    const percentSaveInput = parseFloat(parseInt(document.getElementById('saving-input').value) / 100);
    const savings = parseInt(document.getElementById('income-input').value) * percentSaveInput;
    
    const savingText = document.getElementById('savingAmount');
    

    const getremainingText = document.getElementById('remainingAmount');
    const remainingText = parseInt(document.getElementById('balance').innerText) - savings;

    if(remainingText <= 0){

        const msg = "You cannot save that much!!"
        alert(msg);
        getremainingText.innerText = 00;
        savingText.innerText = 00;
        document.getElementById('saving-input').value = ' ';
    }
    else{
        getremainingText.innerText = remainingText;
        savingText.innerText = savings;
    }
});

// reset button
document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('income-input').value = ' ';
    document.getElementById('food-input').value = ' ';
    document.getElementById('rent-input').value = ' ';
    document.getElementById('clothes-input').value = ' ';
    document.getElementById('saving-input').value = ' ';
    document.getElementById('totalExpense').innerText = ' ';
    document.getElementById('balance').innerText = ' ';
    document.getElementById('savingAmount').innerText = ' ';
    document.getElementById('remainingAmount').innerText = ' ';

});

