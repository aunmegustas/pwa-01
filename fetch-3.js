// Declaramos el objeto.
let usuario = {
    nombre: 'Aitana',
    edad: 25
}

// API POST de usuario.
/* fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(usuario), // data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log); */

// API POST de usuario con error provocado.
/* fetch('https://reqres.in/', {
    method: 'POST',
    body: JSON.stringify(usuario), // data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log); */

// API POST de usuario con try-catch en una promesa.
fetch('https://reqres.in/', {
    method: 'POST',
    body: JSON.stringify(usuario), // data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log)
.catch(error => {
    console.log('Error en la petición API POST.');
    console.log(error);
});