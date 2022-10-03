// function normal que regresa una promesa
// pero el resultado se obtiene más lento.
/* function fcnSumarLento(numero){
    var promesa = new Promise(function(resolve, reject){
    });
    return promesa; 
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(numero+1);
        }, 800);
    });
} */

// esta es la manera más optimizada de definir
// una función pero de tipo arrow (flecha) que
// también regresa una promesa pero el resultado
// se obtiene más rápido.
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            resolve(numero+1);
        }, 300);
    });
}

// llamado normal de la función sumar lento y su promesa.
/* fcnSumarLento(5)
.then(respuesta=>{
    console.log('Respuesta Lenta: ', respuesta);
}); */

// llamado normal de la función sumar rápido y su promesa.
fcnSumarRapido(10)
.then(respuesta=>{
    console.log('Respuesta Rápida: ', respuesta);
});

// llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
/* Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
.then(respuestas=>{
    console.log('Respuestas: ', respuestas);
}); */

// función normal que regresa una promesa
// pero el resultado se obtiene más lento
function fcnSumarLento(numero){
    /* var promesa = new Promise(function(resolve, reject){
    });
    return promesa; */
    return new Promise(function(resolve, reject){
        /* if(numero>=5){
            reject('Sumar Lento Fallo');
        } */
        setTimeout(function(){
            resolve(numero+1);
        }, 800);
    });
}

// llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
/* Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
.then(respuestas=>{
    console.log('Respuestas: ',respuestas);
})
.catch(error=>{
    console.log("Error en todas las promesas", error);
}); */

// llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
let arregloVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, 'Hola Mundo!'];
Promise.all(arregloVarios)
.then(respuestas=>{
    console.log('Respuestas: ',respuestas);
})
.catch(error=>{
    console.log("Error en todas las promesas", error);
});