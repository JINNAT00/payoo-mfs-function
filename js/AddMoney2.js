document.getElementById('btn-add-money')
.addEventListener('click', function(event){
    event.preventDefault();

    const addMoney = getInputFieldValuedById('input-add-money');
    const pinNumber = getInputFieldValuedById('input-pin-number');

    // wrong way to verify.
    if(pinNumber ===1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add the money.')
    }
})