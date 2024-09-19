document.getElementById('login-btn').addEventListener('click',function(e){
    e.preventDefault()
    let amount=Number(document.getElementById('amount').value)
    let PIN=document.getElementById('pin').value
    if(PIN==1234){
        const totalMoney=Number(document.getElementById('total-amount').innerText)
        const updatedMoney=totalMoney+amount;
        document.getElementById('total-amount').innerText=updatedMoney;
        document.getElementById('amount').value=""
        document.getElementById('pin').value=""
    }
    else{
        alert('please give the correct pin')
    }
})

// cashout
document.getElementById('cashout').addEventListener('click',function(event){
    event.preventDefault();
    const amount=document.getElementById('cashout-amount').value
    const PIN=document.getElementById('cashout-pin').value;
    if(PIN=='1234'){
        const totalAmount=document.getElementById('total-amount').innerText
        const updateAmount=Number(totalAmount)-Number(amount);
        document.getElementById('total-amount').innerText=updateAmount
    }
    else{
        alert('failed to cashout')
    }
})
// if cashout btn clicked
document.getElementById('cashout-btn').addEventListener('click',function(){
     document.getElementById('cashout-form').classList.remove('hidden')
     document.getElementById('cashin-form').classList.add('hidden')

})
// if cashin btn clicked
document.getElementById('cashin-btn').addEventListener('click',function(){
     document.getElementById('cashin-form').classList.remove('hidden')
     document.getElementById('cashout-form').classList.add('hidden')

})