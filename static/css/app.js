

const email = document.getElementById('email')

email.addEventListener("click", event  => {
 email.classList.add('email');
 phone.classList.remove('phone');
})


const phone = document.getElementById('phone')

phone.addEventListener("click", event  => {
 phone.classList.add('phone')
  email.classList.remove('email');
})
