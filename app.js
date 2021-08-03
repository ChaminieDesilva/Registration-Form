var form;
var firstName;
var lastName ;
var email;
var userTypes;
var contactNumber;
var paymentType;
var address;

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');  

    form = document.getElementById('registration');
    firstName = document.getElementById('FirstName');
    lastName = document.getElementById('LastName');
    email = document.getElementById('Email');
    userTypes = document.getElementsByName('UserType');
    contactNumber = document.getElementById('ContactNumber');
    paymentType = document.getElementById('PaymentType');
    address = document.getElementById('Address');

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        if(validateForm()) window.location.reload(); 
    });
  });

function validateForm(){
    const field1 = validateName(firstName);
    const field2 = validateName(lastName);
    const field3= validateEmail(email);
    const field4 = validateContactNumber(contactNumber);
    const field5 = validateAddress(address);
    const field6 = validateUserType(userTypes);
    const field7 = validatePaymentType(paymentType);

    if(field1 && field2 && field3 && field4 && field5 && field6 && field7 ){
        alert("User Added Successfully");
        return true;
    }
}

function validateName(name){
    const value = name.value.trim();
    if(value === ''){
        setStatus(name,'error');
        return false;
    } 
    else {
        setStatus(name,'success');

        return true;
    }
}

function validateEmail(email){
    const value = email.value.trim();
    if(value === ''){
        setStatus(email,'error');
        return false;
    }else if(!isEmail(email.value)){
        setStatus(email,'error');
        return false;
    }else{
        setStatus(email,'success');
        return true;
    }
}

function validateContactNumber(number){
    const value = number.value.trim();
    if(value === ''){
        setStatus(number,'error');
        return false;
    }else if(!isPhoneNumber(value)){
        setStatus(number,'error');
        return false;
    }else{
        setStatus(number,'success');
        return true;
    }
}

function validateAddress(address){
    const value = address.value.trim();
    if(value === ''){
        setStatus(address,'error');
        return false;
    } 
    else {
        setStatus(address,'success');
        return true;
    }
}

function validateUserType(usertypes){
    const radio = document.getElementById("radio");
    const row = radio.parentElement; // row

    for (var i=0; i<usertypes.length; i++) {
        if (usertypes[i].checked) break;
    }
    if (i==usertypes.length){ 
        row.className = 'row mb-1 error';
        radio.innerHTML = 'Required';
        return false;
    }
    row.className = 'row mb-1 success';
    radio.innerHTML = 'Completed';
    return true;
}

function validatePaymentType(paymenType){
    const value = paymenType.value;
    const small = document.getElementById("small1");
    const row = small.parentElement; 
    if(value == "Default"){
        row.className = 'row mb-1 error';
        small.innerHTML = 'Required';
        return false;
    }
    row.className = 'row mb-1 success';
    small.innerHTML = 'Completed';
    return true;
}


function setStatus(input, state){
    const formGroup = input.parentElement; // form-group
    formGroup.className = 'form-group col-12 col-lg-5 mb-4 ' + state;

    if (state == 'error'){
        const small = formGroup.querySelector('small');
        small.innerText = 'Required';
    }

    if (state == 'success'){
        const small = formGroup.querySelector('small');
        small.innerText = '';
    }
    
}

function isEmail(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function isPhoneNumber(number){
  return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(number);
}
