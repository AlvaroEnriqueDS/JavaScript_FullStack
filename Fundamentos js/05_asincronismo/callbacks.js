/*
En principio, cualquier tarea que se haya delegado al navegador a través
de un callback, deberá esperar hasta que todas las instrucciones del
programa principal se hayan ejecutado. Por esta razón el tiempo de espera
definido en funciones como setTimeout, no garantizan que el callback se
ejcute en ese tiempo exactamente, sino en cualquier momento a partir de
allí, sólo cuando la cola de tareas se haya vaciado.
*/

/*
En esta clase aprenderemos que son los callbacks y usaremos una librería
externa que se llama jQuery.
Un callback es una función que se pasa a otra función como un argumento.
Esta función se invoca, después, dentro de la función externa para 
completar alguna acción.
*/
    
const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

const LUK_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`

/*
$.get(LUK_URL, opts, function(luke){
    console.log(`Hola yo soy ${luke.name}`)
})
*/

/////////////////// PARA RESPONDER SEGUN ID ///////////////////
const onPeopleResponse  = function (persona) {
    console.log(`Hola yo soy ${persona.name}, MAZ NADHA!`)
}

//ESTA FUNCION ES LA NORMAL
/*
function obtenerPersonaje(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, onPeopleResponse)
}
*/

//EL ORDEN EN EL QUE LO PEDIMOS
//obtenerPersonaje(1)
//obtenerPersonaje(2)
//obtenerPersonaje(3)

/*
En esta clase accederemos a múltiples datos al mismo tiempo. Continuaremos
trabajando con los jQuery y swapi.
*/

/////////////////MANEJANDO EL ORDEN Y EL ASINCRONO DE JS//////////////////
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function(persona){
        console.log(`Hola yo soy ${persona.name}, MAZ NADHA!`)
    
        if(callback){
            callback()
        }
    })
}


obtenerPersonaje(1, function () {
    obtenerPersonaje(2, function () {
        obtenerPersonaje(3)
    })
})


/*
Una manera de asegurar que se respete la secuencia en que hemos realizado 
múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, 
en cada llamada. Lo importante es que el llamado al callback se haga a 
través de una función anónima. Sin embargo, al hacerlo de esta manera 
generamos una situación poco deseada llamada CallbackHell.
*/
