//enviar a la consola "Hola Mundo".
console.log('hola mundo');

//funcion que recibe un número y le suma uno.
function fcnSumarUno(numero, fcnResultadoCallBack){
    setTimeout(function(){
        fcnResultadoCallBack(numero + 1);
    }, 800);
    //return numero + 1;

}

//llamar a la función
//let resultado = fcnSumarUno(5);


//desplegar el resultado en consola
//console.log("Resultado: ",resultado);

/* fcnSumarUno(5, function(nuevoValor1){
    console.log("Resultado: ", nuevoValor1);
}); */

/* fcnSumarUno(5, function(nuevoValor1){
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        console.log("Resultado: ", nuevoValor2);
    });
}); */

fcnSumarUno(5, function(nuevoValor1){
    fcnSumarUno(nuevoValor1, function(nuevoValor2){
        fcnSumarUno(nuevoValor2, function(nuevoValor3){
            console.log("Resultado: ", nuevoValor3);
        });
    });
});