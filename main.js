const form = document.getElementById('form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');

// const successMessage = document.getElementById('successMessage');
// function display() {
//     successMessage.innerHTML = ('successMessage')
// }


form.addEventListener('submit', function(event) {
    event.preventDefault();

if (!emailInput.validity.vaild) {
    emailError.textContent = 'Please enter a vaild email address';
    emailError.style.display = 'block';
    successMessage.style.display = 'none'
} else {
    emailError.style.display = 'none';
    successMessage.textContent = `Success! You've submitted the form with the email: ${emailInput.value}`;
    successMessage.style.display = 'block'
   form.reset(); 
}   
});

emailInput.addEventListener('input', function() {
    emailError.style.display = 'none';
    successMessage.style.display = 'none' 
});

console.log('successMessage')
