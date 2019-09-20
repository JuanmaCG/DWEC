rows();
let arrDni = ['77332344K', '23445677J', '12345678H'];

function anadir() {

    let numEmpleado = document.getElementById("numEmpleado").value;
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let tabla = document.getElementById("tabla");
    

    
    if(!arrDni.includes(dni)){
        let newTr = document.createElement('tr');
        let newTdNum = document.createElement('td');
        let newTdDni = document.createElement('td');
        let newTdNombre = document.createElement('td');
        let newTdApellidos = document.createElement('td');
        
    
        tabla.appendChild(newTr);
        newTr.appendChild(newTdNum);
        newTr.appendChild(newTdDni);
        newTr.appendChild(newTdNombre);
        newTr.appendChild(newTdApellidos);
    
        newTdNum.innerHTML = numEmpleado;
        newTdApellidos.innerHTML = apellidos;
        newTdNombre.innerHTML = nombre;
        newTdDni.innerHTML = dni; 
        arrDni.push(dni);
        rows();
        console.log(arrDni);
    }else{
        alert('El dni introducido ya existe');
    }


}

function rows() {
    let rows = document.getElementsByTagName('tr');
    let cantidadEmpleados = rows.length;
    
    let empleados = document.getElementById('empleados');
    empleados.innerHTML = cantidadEmpleados -1;
 
}

function borrar (){
    let dni = prompt('Escribe un dni para borrar');
    
    if(arrDni.includes(dni)){
        let posBorrar = arrDni.indexOf(dni);
        tabla.deleteRow( posBorrar +1);
        
        arrDni.splice(posBorrar, 1);
        
        rows();
    }else{
        alert('El dni no existe');
    }
}

function modificar() {


    let tabla = document.getElementById("tabla");
    let numEmpleado = document.getElementById("numEmpleado").value;
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let posBorrar = arrDni.indexOf(dni);
    tabla.deleteRow( posBorrar +1);

    let newTr = document.createElement('tr');
    let newTdNum = document.createElement('td');
    let newTdDni = document.createElement('td');
    let newTdNombre = document.createElement('td');
    let newTdApellidos = document.createElement('td');
    

    tabla.appendChild(newTr);
    newTr.appendChild(newTdNum);
    newTr.appendChild(newTdDni);
    newTr.appendChild(newTdNombre);
    newTr.appendChild(newTdApellidos);

    newTdNum.innerHTML = numEmpleado;
    newTdApellidos.innerHTML = apellidos;
    newTdNombre.innerHTML = nombre;
    newTdDni.innerHTML = dni; 
    arrDni.push(dni);
    rows();



}
