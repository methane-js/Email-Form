let button = document.querySelector('button');
let errorMessage = document.querySelector('h4');
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

button.addEventListener('click', function(){
    let email = document.querySelector('input');
    emailValue = email.value;
    if(emailValue === ''){
        let container = email.parentElement;
        errorMessage.style.visibility = 'visible';
        errorMessage.innerText = 'Email Cannot Be Empty';
        container.className = 'container error';
    }
    else if(!validateEmail(emailValue)){
        let container = email.parentElement;
        errorMessage.style.visibility = 'visible';
        errorMessage.innerText = 'Please provide a valid email';
        container.className = 'container error';
    }
    else{
        let container = email.parentElement;
        container.className = 'container success';
        errorMessage.style.visibility = 'hidden';
    }
})