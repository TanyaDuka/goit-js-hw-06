const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');


const textChange = () => {
    if (inputName.value == '') {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = inputName.value;
    }
}


// const textChange = (event) => {
//     if (event.currentTarget.value == '') {
//         outputName.textContent = "Anonymous";
//     } else {
//         outputName.textContent = event.currentTarget.value;
//     }
// }


inputName.addEventListener('input', textChange);

