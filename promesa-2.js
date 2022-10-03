// enviar a la consola "Hola Mundo".
console.log('Hola Mundo!');
// function que recibe un número y le suma uno.
/* function fcnSumarUno(numero, fcnResultadoCallBack){
    setTimeout(function(){
        //return numero + 1;
        fcnResultadoCallBack(numero + 1);
    }, 800);
} */

/* function fcnSumarUno(numero){
    var promesa = new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(numero+1);
        }, 800);
    });
    return promesa;
} */

// llamado de la función y promesa
/* fcnSumarUno(5).then(function(nuevoNumero){
    console.log(nuevoNumero);
}); */

// llamado de la función y promesa
/* fcnSumarUno(5).then( nuevoNumero=>{
    console.log(nuevoNumero);
}); */

// llamado de la funcion y promesa
// de forma recursiva de manera encadenada.
/* fcnSumarUno(5).then(nuevoNumero=>{
    console.log("Resultado: ", nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then(nuevoNumero=>{
    console.log("Resultado: ", nuevoNumero);
    return fcnSumarUno(nuevoNumero);
}).then(nuevoNumero=>{
    console.log("Resultado: ", nuevoNumero);
}); */

/* fcnSumarUno(5)
    .then(fcnSumarUno)
    .then(fcnSumarUno)
    .then(nuevoNumero=>{
        console.log("Resultado: ", nuevoNumero);
    }); */

// función que recibe un numero y le suma uno.
function fcnSumarUno(numero){
    var promesa = new Promise((resolve, reject) => { 
        if(numero>=7){
            reject('El número ya es muy alto.');
        }
        setTimeout(() => {
            resolve(numero+1);
        }, 800);
    });
    return promesa;
}

// llamado de la función y promesa
// de forma recursiva y optimizada y con
// validación de error.

fcnSumarUno(5)
    .then(fcnSumarUno)
    .then(fcnSumarUno)
    .then(nuevoNumero=>{
        console.log("Resultado: ", nuevoNumero);
    })
    .catch(error =>{
        console.log('Error en la promesa', error);
    });