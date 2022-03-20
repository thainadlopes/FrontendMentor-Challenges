
const customTip = document.getElementById('custom');
const bill = document.getElementById('valueC');
const numberP = document.getElementById('number'); 

function reset(){
    document.getElementById('valueC').value = '';
    document.getElementById('number').value = '';
    document.getElementById('tipAmont').innerHTML = '$' + '0.00';
    document.getElementById('total').innerHTML = '$' + '0.00';
}

function calcTip(valor){
    var billC = bill.value;
    var number = numberP.value; 

    var resultTip = ((billC / 100) * valor) / number;
    resultTipA = resultTip.toFixed(2);
    document.getElementById('tipAmont').innerHTML = '$' + resultTipA;
    console.log(resultTip);
    
    var resultTotal = (billC / number) + resultTip;
    resultTotalA = resultTotal.toFixed(2);
    document.getElementById('total').innerHTML = '$' + resultTotalA;
    console.log(resultTotal);
}

customTip.addEventListener('keyup', () => {
    var billC = bill.value;
    var number = numberP.value; 
    var custom = customTip.value;

    var resultTipC = ((billC / 100) * custom) / number;
    resultTipA = resultTipC.toFixed(2);
    document.getElementById('tipAmont').innerHTML = '$' + resultTipA;

    var resultTotalC = (billC / number) + resultTipC;
    resultTotalA = resultTotalC.toFixed(2);
    document.getElementById('total').innerHTML = '$' + resultTotalA;  
});

numberP.addEventListener('keyup', () => {
    var number = numberP.value; 
    if(number === '')
    {
        console.log(number);
        document.getElementById('alert-message').innerHTML = "Can't be zero";
    }
    else
    {
        document.getElementById('alert-message').innerHTML = '';
    }
})




