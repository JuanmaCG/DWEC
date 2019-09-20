function inicializar() {
    let nombres = [];
    let cantidad = nombres.length;


    while(cantidad < 5) {
        let repetido = false;
        let introducido = prompt('Introduce un nombre');
        for(let j = 0; j < nombres.length ; j++){
            if(introducido == nombres[j]){
                repetido = true;
            }
        }
        
        if(!repetido){
            nombres[cantidad] = introducido;
            cantidad++;
        }else{
            alert('Nombre Repetido');
        }
       
    }

    let letras = [];

    for (let i = 0; i < nombres.length; i++) {
        letras[i] = nombres[i].charAt(0).toUpperCase();
    }

    
    console.log(letras.sort());

}