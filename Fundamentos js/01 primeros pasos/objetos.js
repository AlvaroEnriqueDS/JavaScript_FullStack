//////////////////////OBJETOS////////////////////////

//se crean los objetos
var alvaro = {
    nombre : 'Alvaro',
    apellido : 'Diaz',
    edad: 21,
}

var aracely = {
    nombre : 'Aracely',
    apellido : 'Gonzales',
    edad: 20,
}

//para llamar atributos es -> alvaro.nombre

//a esta funcion solo se le pasa el objeto
/*
function imprimirNombreDelObjeto(persona){ 
    console.log(persona.nombre.toUpperCase())
}
*/
/*
function imprimirNombreDelObjeto(persona){ 
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
*/
/*
function imprimirNombreDelObjeto(persona){ 
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}
*/

function imprimirNombreDelObjeto({nombre}){ 
    console.log(nombre.toUpperCase())
}


imprimirNombreDelObjeto(alvaro)
imprimirNombreDelObjeto(aracely)
imprimirNombreDelObjeto({nombre : 'pepito'})
imprimirNombreDelObjeto()

//RETOOOOOOOOOOOOOOOOOOOOO clase 9

function imprimirNombreYEdad(persona){
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}


////////////////OBJETOS Y REFRENCIAS ////////////////7///
/*
//esta funcion hace que el objeto aumente en 1 la edad
//el objeto se ve afectado, pues se modifica su refrencia
function cumpleanos(alvaro){
    alvaro.edad += 1
}
*/
/*
//esta funcion no afecta al parmetro del objeto
function cumpleanos(edad){
    edad += 1
}
*/

//esta funcion me retorna otro objeto con la modificacion correspondiente
function cumpleanos(alvaro){
    return{
        ...alvaro,
        edad: alvaro.edad + 1 
    }
}




