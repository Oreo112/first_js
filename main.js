const form = document.querySelector('#my-form');
const names = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('#msg');
const user = document.querySelector('#users');

form.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();  

    if(names.value === '' || email.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter Fields'

        setTimeout(() => msg.remove(),1000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${names.value} : ${email.value}`));

        user.appendChild(li);

        //clear all fields

        names.vale = '';
        email.vale = '';
    }

}