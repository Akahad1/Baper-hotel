document.getElementById('btn').addEventListener('click',function(){
    const emailfiled = document.getElementById('email-user')
    const email =emailfiled.value;

    const passwordFiled =document.getElementById('password-user');
    const password =passwordFiled.value;
    


    if( email === "sontan@vap.com" && password == 12345 ){
        window.location.href ="bank.html"
    }else{
        alert('tore password ken volli')
    }
})