// función normal que regresa una promesa
// pero el resultado se obtiene más lento.

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

// esta es la manera más optimizada de definir una función
// pero de tipo arrow (flecha) que también regresa una promesa
// pero el resultado se obtiene más rápido.

let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            //resolve(numero+1);
            reject('Error en la promesa de la función Sumar Rapido');
        }, 1000);
    });
}

// Promise.race
Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then(respuesta =>{
        console.log('Respuesta: ', respuesta);
    })
    .catch(error =>{
        console.log("Error en la respuesta de la promesa: " + error);
    });