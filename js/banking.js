// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){   
    // get amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    // show the value in Deposit section
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field
    depositInput.value = '';
});