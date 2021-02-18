/* let zakupy = 'biedronka';

zakupy = 'lidl';

let number = 8;

let boolean = true;

let array = [1, 2, 3, 108];

let objectP = document.querySelector('p')

objectP.innerHTML = 'kurs <br> javascript'

if (number === 108) { console.log("spelniony warunek === 108");}

function multiply(num1, num2){
    let result = num1 * num2;

    return result;
}

console.log( multiply(2, 3) )

let wynikMnożenia = multiply(number, 2); */

let myHeading = document.querySelector('p');

myHeading.textContent = 'Jagoda - Łukasz - click'

myHeading.onclick = function() {
  alert('wlasnie kliknales napis')  
}

console.log(myHeading);