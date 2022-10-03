//https://reqres.in/api/users

console.log("Hola Mundo!");

var request = new XMLHttpRequest();
request.open('GET','https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function(state){
    if(request.readyState === 4){
        // la respuesta obtiene un string.
        var resp = request.response;

        // ahora transformamos la cadena en formato
        var respObj = JSON.parse(resp);

        // mandamos el resultado a la consola.
        console.log(respObj);

        // obtenemos solo la página actual.
        console.log(respObj.page);

        // obtenemos solo la data de los usuarios.
        console.log(respObj.data);
    }
    
}


