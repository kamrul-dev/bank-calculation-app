// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function(){   
    // get amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    // show the value in Deposit section
    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    // clear the deposit input field
    depositInput.value = '';
});