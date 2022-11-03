const form = document.querySelector('#form');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
const parrafResultado = document.querySelector('#resultado');

// este es un eveto escuchado con eventListener
btn.addEventListener('click', sumarInputs)

function sumarInputs(event){
    const result = parseInt(input1.value) + parseInt(input2.value);
    parrafResultado.innerText = "El resultado de la suma es  " + result;
}

/* solucion uno a submit por medio de form, tenemos que pasar por parametro en la funcion el metodo event */

/* form.addEventListener('submit', sumarInputs);

function sumarInputs(event){
    //event.preventDefault();
    const result = parseInt(input1.value) + parseInt(input2.value);
    parrafResultado.innerText = "El resultado de la suma es  " + result;
} */

// esta funcion utiliza event.preventDefault para poder ejecutar btn en etiqueta form
/* function sumarInputs(event){
    event.preventDefault();
    const result = parseInt(input1.value) + parseInt(input2.value);
    parrafResultado.innerText = "El resultado de la suma es  " + result;
} */

// Esta funcion es la sintaxis para utilizar botones
/* function btnDaClick('click', btnDaClick){
    const result = parseInt(input1.value) + parseInt(input2.value);
    parrafResultado.innerText = "El resultado de la suma es  " + result;
} */