////////////////////FUNCIONES//////////////////////////

//para definir una funcion
var nombre = 'Alvaro', edad = 21

function imprimirEdad(){
    console.log(`${nombre} tiene ${edad} años`)
}
//lamar a la funcin
imprimirEdad()


//como pasar parametros a la funcion

function imprimirEdad2(n, e){
    console.log(`${n} tiene ${e} años`)
}
imprimirEdad2('otro', 99)


//ALCANCE DE LAS FUNCIONES

//el parametro nombre es como una nueva variable que solo vive dentro de la funcion
function imprimirnombreEnMayus(nombre){
    //amenos que no se llame a "window.nombre"
    //la palabra nombre se refiere a la variable de la función
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirnombreEnMayus(nombre)

//TODA VARIABLE QUE NO ESTE DEFINIDA DENTRO DE UNA FUNCION ESTARÁ AL ALCANCE GLOBAL
