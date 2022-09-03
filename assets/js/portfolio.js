
// $(document).ready(function(){
//     $("#submit-form").validate({
//         rules:{
//             name:{
//                 minlength:2,
//             },
//             email:{
//                 required:true,
//                 email:true
//             },
//             place:{
//                 required:true
//             },
//             telephone:{
//                 required:true,
//                  minlength:10
//             },
//         },
//         messages:{name:{
//             required:"Pls enter your name",
//             minlength:"Enter atleast 2 Characters"
//             }}
//         })
       
//     })

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var telError = document.getElementById('tel-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName() {
    var name=document.getElementById('name').value.trim();  

    if (name.length==0) {
        nameError.innerHTML='Name is Required';
        nameError.style.color='red'
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
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
function validateMessage() {
    var message =document.getElementById('message').value.trim();
    var Required=15;
    var left=Required - message.length;
    
    if(left>0){
        messageError.innerHTML =left+ 'more character Required';
        messageError.style.color='red'
        return false;
    
    }
    messageError.innerHTML='Message is valid';
    messageError.style.color='green'
    return true;   
}

