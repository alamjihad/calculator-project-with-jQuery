let resultField=$("#result")
function insertNumber(number){
    let exist= resultField.val();
    resultField.val(exist + number);
}

function clearResult(){
    resultField.val('');
}

function calculate(){
   let result = eval( resultField.val());
   resultField.val(result);
}

function deleteNumbers(){
    let presentValue=resultField.val();
    if(presentValue!='')
    {
        resultField.val(presentValue.slice(0,-1));
    }
}

function plusMinus(){
    let present=resultField.val();
    if(present!='')
    {
        resultField.val(present*(-1));
    }
    else
    {
        resultField.val('-');
    }
}