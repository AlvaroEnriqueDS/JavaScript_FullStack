var alvaro = {
    nombre : 'Alvaro',
    apellido : 'Diaz',
    edad: 21,
    ingeniero : true,
    guitarrista: false,
    comediante: true,
    atleta: false
}

function imprimirProfesionesIf(persona){
    console.log(`Persona ${persona.nombre} es :`)

    if(persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es ingeniero')
    }

    if(persona.guitarrista){
        console.log('guitarrista')
    }else{
        console.log('No es guitarrista')
    }

    if(persona.comediante){
        console.log('comediante')
    }else{
        console.log('No es comediante')
    }

    if(persona.atleta){
        console.log('atleta')
    }else{
        console.log('No es atleta')
    }
}

//CONSTANTES
const MAYORIA_DE_EDAD = 18

//FUNCIONES QUE RETORNAN VALORES
//se usa return
function esMayorDeEdad(edad){
    return edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayor(persona){
    if(esMayorDeEdad(persona.edad)){
        console.log('es mayor de edad')
    }else {
        console.log('no es mayor de edad')
    }
}


//ARROW FUNCTIONS
// esto permite ponerle a una variable una funcion
var arrowfunct = function(persona){
    if(esMayorDeEdad(persona.edad)){
        console.log('es mayor de edad')
    }else {
        console.log('no es mayor de edad')
    }
}
//por convencion y buena paractica se le pone constante

//tambien se puede escribir como
const arrowfunct2 = (persona) =>{
    if(esMayorDeEdad(persona.edad)){
        console.log('es mayor de edad')
    }else {
        console.log('no es mayor de edad')
    }
}



const arrow =  (edad) => {
    return edad >= MAYORIA_DE_EDAD
}
const arrow1 =  edad => {
    return edad >= MAYORIA_DE_EDAD
}

const arrow2 =  edad => edad >= MAYORIA_DE_EDAD
