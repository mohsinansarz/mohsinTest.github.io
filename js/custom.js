$(document).ready(function () {

    window.onscroll = function () { scrollFunction() };
    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("navbar").style.padding = "10px 15px";
        } else {
            document.getElementById("navbar").style.padding = "20px 15px";
        }
    }
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        margin: 20,
        dots: true,
        loop: true,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
});

//validation
const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
});

const sendData = (sRate, count)=>{
    if (sRate === count){
        //alert('success');
        swal("Good job!", "message successfully sent", "success");
    }
}

const successMsg = () => {
    let formCon = document.getElementsByClassName('form-group');
    var count = formCon.length - 1;
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === 'form-group success') {
            var sRate = 0 + i;
            sendData(sRate, count);
        }
        else {
            return false
        }
    }
}
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf('@');
    if (atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}




const validate = () => {
    const fullNameVal = fullName.value.trim();
    const emailVal = email.value.trim();
    const messageVal = message.value.trim();


    //full name
    if (fullNameVal === '') {
        setErrorMsg(fullName, 'Full name can not be blank');
    } else if (fullNameVal.length <= 2) {
        setErrorMsg(fullName, 'Full name min 3 char');
    } else {
        setSuccessMsg(fullName);
    }

    //email
    if (emailVal === '') {
        setErrorMsg(email, 'Email can not be blank');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Please fill the correct email');
    } else {
        setSuccessMsg(email);
    }

    //message
    if (messageVal === '') {
        setErrorMsg(message, 'Message can not be blank');
    } else if (messageVal.length <= 19) {
        setErrorMsg(message, 'Message min 20 char');
    } else {
        setSuccessMsg(message);
    }
    successMsg();
}
function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-group error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-group success";
}




//back to top

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});