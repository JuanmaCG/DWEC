let nickname = document.getElementById('nickname');
let nombre = document.getElementById('nombre');
let contrasena = document.getElementById('password');
let dni = document.getElementById('dni');
let edad = document.getElementById('edad');
let formulario = document.getElementById('formulario');
let borrarDatos = document.getElementById('borrar');
let consultar = document.getElementById('consultar');
let ultimoLogin = document.getElementById('ultimoLogin');
let tabla_user = document.getElementById('tabla_user');

let submit = document.getElementById('enviar')
const validatePasswordModerate = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/;
    let validated;
    if(passwordRegex.test(password)) validated = true;
    else validated = false;
    return validated;
}

//Dar de alta al usuario.
submit.addEventListener('click', (e)=> {
    e.preventDefault();
    if(validatePasswordModerate(contrasena.value) == true) {
        const newUser = new Usuario(nickname.value, nombre.value, contrasena.value, dni.value, edad.value);
        localStorage.setItem(newUser.nickname, JSON.stringify(newUser));
        formulario.submit();
    }
});


borrarDatos.addEventListener('click', () =>{
    localStorage.clear();
})

//El boton consultar nos hara un JSON.parse del item para poder mostrar sus atributos y lo mandamos a la funcion 
//crearTablaUserEncontrado que nos creara la tabla
consultar.addEventListener('click', (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem(nickname.value));  
    crearTablaUserEncontrado(user);
    
});


//Input para localizar el ultimo login

ultimoLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let horasAlta = [];

    //incluimos todas las horas dentro de un array 
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));
        horasAlta.push(user.fechaAlta);
    }

    //comparamos cada propiedad fechaAlta de user con la primera posicion del array ordenado que nos dara
    //la hora mas alta asi que si es mayor lo incluimos en la tabla
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));
        if(user.fechaAlta >= horasAlta.sort()[0]) {
            crearTablaUserEncontrado(user);
        }
    }


})

//Metodo de creacion del contenido de la tabla cuando se encuentre un usuario 

const crearTablaUserEncontrado = (user) => {

    //creamos el tr y los td correspondientes
    let tr = document.createElement('tr');
    tabla_user.appendChild(tr);
    let tdNickname = document.createElement('td');
    let tdNombre = document.createElement('td');
    let tdPassword = document.createElement('td');
    let tdDni = document.createElement('td');
    let tdEdad = document.createElement('td');
    let tdFechaAlta = document.createElement('td');

    //los asignamos a su respetivo tr padre
    tr.appendChild(tdNickname);
    tr.appendChild(tdNombre);
    tr.appendChild(tdPassword);
    tr.appendChild(tdDni);
    tr.appendChild(tdEdad);
    tr.appendChild(tdFechaAlta);

    // le añadimos el contenido donde 'user' es el usuario encontrado
    tdNickname.innerHTML = user.nickname;
    tdNombre.innerHTML = user.nombre
    tdPassword.innerHTML = user.contrasena
    tdDni.innerHTML = user.dni;
    tdEdad.innerHTML = user.edad;
    tdFechaAlta.innerHTML = user.fechaAlta;
} 


// Constructor de clase Usuario para la creacion de multiples usuarios
class Usuario {
    constructor(nickname, nombre,contrasena, dni, edad){
        this.nickname = nickname;
        this.nombre = nombre;
        this.contrasena = contrasena;
        this.dni = dni;
        this.edad = edad;
        this.fechaAlta = new Date().getHours();
    }
}

