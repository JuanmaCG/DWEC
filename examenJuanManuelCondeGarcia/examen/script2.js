let botonConsulta = document.getElementById('botonConsulta');
let select = document.getElementById('select');
let tabla_users = document.getElementById('tabla_users');

//En caso de que no haya options crearemos las opciones y si no crearemos directamente el usuario seleccionado
botonConsulta.addEventListener('click', () => {
    if(select.length < 1){
        crearOptions();
    }else{
        crearUser(select.value);
    }
    
 
});



//Cracion de user donde lo inyectamos dentro de la tabla
const crearUser = (id) => {
    fetch('https://jsonplaceholder.typicode.com/users?id='+id)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            let direccion = res[0].address.street + ' ' + res[0].address.suite + ' ' + res[0].address.city + ' ' + res[0].address.zipcode + ' ' + res[0].address.geo.lat + ' ' + res[0].address.geo.lng;
            
            let tr = document.createElement('tr');
            tabla_users.appendChild(tr);
            let tdId = document.createElement('td');
            let tdName = document.createElement('td');
            let tdUsername = document.createElement('td');
            let tdEmail = document.createElement('td');
            let tdDireccion = document.createElement('td');
            let tdTelefono = document.createElement('td');
            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdUsername);
            tr.appendChild(tdEmail);
            tr.appendChild(tdDireccion);
            tr.appendChild(tdTelefono);


            tdId.innerHTML = res[0].id;
            tdName.innerHTML = res[0].name;
            tdUsername.innerHTML = res[0].username;
            tdEmail.innerHTML = res[0].email;
            tdDireccion.innerHTML = direccion
            tdTelefono.innerHTML = res[0].phone;
        
            
        });
}

// Cracion de las opciones del select.
// Incluimos como value del option el id para identificarlos
const crearOptions = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for(user in res){
                let option_user = document.createElement('option');
                option_user.innerHTML = res[user].name;
                option_user.setAttribute('value', res[user].id);
                select.appendChild(option_user);
            
            }
        });
}