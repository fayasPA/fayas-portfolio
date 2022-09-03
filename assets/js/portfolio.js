

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var telError = document.getElementById('tel-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name=document.getElementById('name').value.trim();  

    if (name.length==0 || name.length<3) {
        nameError.innerHTML='Enter min 3 characters';
        nameError.style.color='red'
        return false;
    }

    if (!name.match(/^[A-Za-z' ']*$/)){
        nameError.innerHTML='Write a FullName';
        nameError.style.color='red'
        return false;
    }
    
    nameError.innerHTML='Name is valid';
    nameError.style.color='green'
    return true;
}

function validateEmail(){
    var email = document.getElementById('email').value.trim();
    if (email.length==0) {
        emailError.innerHTML='Email is Required';
        emailError.style.color='red'
        return false;
    }

    if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailError.innerHTML='Email is Invalid';
        emailError.style.color='red'
        return false;
    }
    emailError.innerHTML='Email is valid';
    emailError.style.color='green'
    return true;
}

function validateMsg() {
    var message =document.getElementById('message').value.trim();
    
    if(message.length==0 || message.length<10){
        messageError.innerHTML ='more character Required';
        messageError.style.color='red'
        return false;
    }
    messageError.innerHTML='Message is valid';
    messageError.style.color='green'
    return true;   
}
function validateTel() {
    var Tel =document.getElementById('telephone').value.trim();
        if(Tel.match(/^[0-9]+$/) && Tel.length>10)
        {
            telError.innerHTML='Message is valid';
            telError.style.color='green'
            return true;
        }

        else{
            telError.innerHTML ='Mobile Number is Required';
            telError.style.color='red'
            return false;
        }
    }
    function validateSubject() {
        var subject=document.getElementById('subject').value.trim();  
    
        if (subject.length==0) {
            subjectError.innerHTML='This field is Required';
            subjectError.style.color='red'
            return false;
        }
    
        if (!subject.match(/^[A-Za-z ]*$/)){
            subjectError.innerHTML='Write a FullName';
            subjectError.style.color='red'
            return false;
        }
        
        subjectError.innerHTML='Name is valid';
        subjectError.style.color='green'
        return true;
    }

