let caja = document.getElementById('box');
caja.addEventListener('mouseenter', () => {
    caja.style.background = 'green';
});

caja.addEventListener('mouseleave', () => {
    caja.style.background = 'red';
});

caja.addEventListener('mousedown', () =>{
    console.log('Has pulsado la caja');
});

caja.addEventListener('mouseup', () =>{
    console.log('Has soltado el boton izquierdo dentro de la caja');
});

let input = document.getElementById('input');
input.addEventListener('keydown', (event) => {    
    console.log('Presionada ' + event.key);
});

input.addEventListener('keyup', () =>{
    console.log('Has soltado una tecla');
});

let formText = document.getElementById('formText');
let boton = document.getElementById('boton');
let letras = [];


boton.addEventListener('click', () =>{
    formText.addEventListener('keyup', (e) =>{
        mostrar(e.key);
        
    })
});

const mostrar = (letra) =>{

    letras.push(letra);
    console.log(letras);
}

let divs = document.getElementById('gallery');

// divs.addEventListener('click', (e) =>{
//     e.target.style.background = 'red';
// })

divs.addEventListener('click', (e) =>{
    e.target.classList.toggle('gallery_item');
})