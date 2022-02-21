const input = document.querySelector('#validation-input');


input.addEventListener('blur', checkTrue);

const datasetLength= Number(input.dataset.length);

function checkTrue() {
    if(input.value.length === datasetLength){
        input.classList.add('valid');
        input.classList.remove('invalid');
        return;
    }
    input.classList.add('invalid');
    input.classList.remove('valid');
}




// const input = document.querySelector('#validation-input');

// const lengthSymbol = Number(input.dataset.length);


// const checkInput = (event) => {

//     if (event.currentTarget.value.length === lengthSymbol) {
//         event.currentTarget.classList.remove('invalid');
//         event.currentTarget.classList.add('valid');
//         return;
//     }
//     event.currentTarget.classList.add('invalid');
// }

// const checkInput = () => {

//     if (input.value.length === lengthSymbol) {
//        input.classList.remove('invalid');
//        input.classList.add('valid');
//         return;
//     }
//     input.classList.add('invalid');
// }

//input.addEventListener('blur', checkInput);