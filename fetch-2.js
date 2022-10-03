//https://reqres.in/api/users

// Opción 1: Función Fetch
/* fetch('https://reqres.in/api/users')
.then(resp =>{
    //console.log(resp);
    // Para mandar todo en formato JSON.
    resp.json().then(console.log);
}) */

// Función Fetch - Declaración Ideal
fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(respObj => {
    console.log(respObj);
    console.log(respObj.page);
    console.log(respObj.per_page);
    console.log(respObj.data);
});