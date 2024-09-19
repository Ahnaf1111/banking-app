document.getElementById('login-btn').addEventListener('click',function(event){

    event.preventDefault()

    const mobileNumber=document.getElementById("mobile-num").value
    const pinNumber=document.getElementById('pin-num').value

    if(mobileNumber==='5' && pinNumber==='1234'){
        console.log('hjkhdkjhjkd')
        window.location.href="/banking-app/home.html";
    }
    else{
        alert('Enter correct Number or Password')
    }
})

const nameOfOrganization = document.getElementById("name").value;
console.log(nameOfOrganization);