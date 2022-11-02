const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
const parrafResultado = document.querySelector('#resultado');

function btnDaClick(){
    const result = parseInt(input1.value) + parseInt(input2.value);
    parrafResultado.innerText = "El resultado de la suma es  " + result;
}