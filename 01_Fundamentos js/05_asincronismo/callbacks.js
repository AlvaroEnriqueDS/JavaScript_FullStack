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
function obtenerPersonaje_ANTIGUO(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function(persona){
        console.log(`Hola yo soy ${persona.name}, MAZ NHADA!`)
    
        if(callback){
            callback()
        }
    })
}


obtenerPersonaje_ANTIGUO(1, function () {
    obtenerPersonaje_ANTIGUO(2, function () {
        obtenerPersonaje_ANTIGUO(3)
    })
})


/*
Una manera de asegurar que se respete la secuencia en que hemos realizado 
múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, 
en cada llamada. Lo importante es que el llamado al callback se haga a 
través de una función anónima. Sin embargo, al hacerlo de esta manera 
generamos una situación poco deseada llamada CallbackHell.
*/

////////////////// MANEJANDO ERRORES CON CALLBACKS //////////////////
/*
Para solucionar el problema de quedarnos sin conexión, u otro error similar,
en medio de una sucesión de callbacks utilizamos el método fail()
*/
function obtenerPersonaje(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, callback).fail(function () {
        console.log(`Sucedio un error al pedir la data del personaje ${id}`)
    })
}

obtenerPersonaje(1, function (persona) {
    console.log(`Hola yo soy ${persona.name}, MAZ NHADA2!`)

    obtenerPersonaje(2, function (persona) {
        console.log(`Hola yo soy ${persona.name}, MAZ NHADA2!`)
        
        obtenerPersonaje(3, function (persona){
            console.log(`Hola yo soy ${persona.name}, MAZ NHADA2!`)
        })
    })
})


////////////////////////// PROMESAAS /////////////////////////////////
// SON VALORES QUE AUN NO CONOCEMOS
// Las promesas tienen tres estados:
//  pending
//      si se resuelve exitosamente pasa al siguiente estado
//      fullfilled
//          .then(val => ...)
//          esta funcion se le pasa como parametro otra funcion
//          donde su parametro sea el valor que esperabamos
//      rejected
//          .cath(err => ...)
//          esta funcion recibe una funcion donde tiene como
//          parametro el error que sucedio
//
// Las promesas se invocan de la siguiente forma:
//
// new Promise( ( resolve, reject ) => {
//   // --- llamado asíncrono
//   if( todoOK ) {
//      // -- se ejecutó el llamado exitosamente
//      resolve()
//   } else {
//      // -- hubo un error en el llamado
//      reject()
//   }
// } )

new Promise( ( resolve, reject ) => {
    // --- llamado asíncrono
    if( todoOK ) {
        // -- se ejecutó el llamado exitosamente
        resolve()
    } else {
        // -- hubo un error en el llamado
        reject()
    }
}).then(valor => {
    //
}).catch(err => {
    //
})

//ejemplo
function obtenerPersonaje_new(id) {
    return new Promise((resolve, reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        
        $.get(url, opts, function (data) {
            resolve(data)
        }).fail(() => reject(id))
    }) 
}

obtenerPersonaje_new(1)
    .then((personaje) => {
        console.log(`Hola yo soy ${personaje.name}, 333!`)

    })
    .catch(function (id) {
        console.log(`MI PROMESA FALLÓ`)
    })
//PROMESAS ENCADENADAS
/*
A diferencia de los callbacks en el CallbackHell, que terminan estando
anidados unos dentro de otros, cuando se usan Promesas la ejecución de
las llamadas no se hacen de manera anidada sino de manera encadenada,
al mismo nivel una debajo de la otra, lo que hace que el código sea
mucho más legible y mantenible.
*/


obtenerPersonaje_new(1)
    .then((personaje) => {
        console.log(`Hola 1 ${personaje.name}`)
        return obtenerPersonaje_new(2)
    })
    .then((personaje) => {
        console.log(`Hola 2 ${personaje.name}`)
        return obtenerPersonaje_new(3)
    })
    .then((personaje) => {
        console.log(`Hola 3 ${personaje.name}`)
    })
    .catch(function (id) {
        console.log(`MI PROMESA FALLÓ`)
    })


//PRIMESAS EN PARALELO
/*
Para hacer el llamado a múltiples promesas, nos apoyamos en un array de
ids con el que luego construimos otro arreglo de Promesas, que pasaremos
como parámetro a Promise.all( arregloDePromesas ), con las promesas
podemos encadenar llamadas en paralelo, algo que no es posible usando
callbacks.


var ids = [1, 2, 3 ,4, 5]
var promesas = ids.map(function (id) {
    return obtenerPersonaje_new(id)
})
*/
//ES TO ES LO MISMO QUE LA FUNCION DE ARRIBA
var ids = [1, 2, 3 ,4, 5, 6 , 7]
var promesas = ids.map((id) => obtenerPersonaje_new(id))
Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch((id) => {
        console.log(`MI PROMESA FALLÓ con el id ${id}`)
    })


///////////////// Async-await: lo último en asincronismo ////////////////////////
/*
Async-await es la manera más simple y clara de realizar tareas asíncronas.
Await detiene la ejecución del programa hasta que todas las promesas sean resueltas.
Para poder utilizar esta forma, hay que colocar async antes de la definición de
la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.
*/

async function obtenerPersonajes() {
    var ids = [1, 2, 3 ,4, 5, 6 , 7]
    var promesas = ids.map((id) => obtenerPersonaje_new(id))
    try{
        var personajes =  await Promise.all(promesas)
        console.log(personajes)
    }catch(id){
        console.log(`MI PROMESA ASYNC FALLÓ con el id ${id}`)
    }
}

obtenerPersonajes()

