const form = document.getElementById('form');
const emailInput = document.getElementById('email'); 
const value = document.getElementById('value')
const emailError = document.getElementById('emailError');
const successMessage = document.getElementById('successMessage');
const btn = document.getElementById('submit'); 
const closeBtn = document.getElementById('dismissMessage');
const email ='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

const displayError = () => { 
  console.log('I want to display error')
    emailError.innerHTML = 'Please enter a vaild email address';
    // emailError.classList.toggle('hidden')
    emailError.style.display = 'block'
}

const closeError = () => { 
  console.log('I want to hide error')
    emailError.innerHTML = '';
    // emailError.classList.toggle('hidden')
    emailError.style.display = 'hidden'
}

const submit = () => {
    event.preventDefault();
    console.log('i am here')
    console.log(emailInput.value)
    // console.log(value)
    
    if (!emailInput.value.match(email)) {
        displayError()
    } else {
        closeError()
    }
    value.innerText = emailInput.value

    successMessage.style.display = "block";    
    
}

closeBtn.onclick = () => {
    successMessage.style.display = "none";
  }
btn.addEventListener('click', submit)