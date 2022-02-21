const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', changeName);

function changeName() {
    console.log(input.value);
    if (input.value !== '') {
        output.textContent = input.value;
        return;
    }
    output.textContent = 'Anonymous';
}



// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');


// const textChange = () => {
//     if (inputName.value == '') {
//         outputName.textContent = "Anonymous";
//     } else {
//         outputName.textContent = inputName.value;
//     }
// }


// const textChange = (event) => {
//     if (event.currentTarget.value == '') {
//         outputName.textContent = "Anonymous";
//     } else {
//         outputName.textContent = event.currentTarget.value;
//     }
// }


//inputName.addEventListener('input', textChange);

