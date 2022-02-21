
const form = document.querySelector('.login-form');

const submitForm = (event) => {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert('Заповніть всі поля');
    }

     const user = {
        email: email,
        password: password,
    }
    console.log(user);

    event.currentTarget.reset();
}

form.addEventListener('submit', submitForm);
