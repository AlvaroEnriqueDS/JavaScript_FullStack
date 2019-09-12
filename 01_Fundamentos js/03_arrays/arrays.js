var aracely1 = {
    nombre : 'Aracely',
    apellido: 'GGG',
    edad: 20,
    peso: 70
}
var aracely2 = {
    nombre : 'Aracely',
    apellido: 'GGG',
    edad: 20,
    peso: 71
}
var aracely3 = {
    nombre : 'Aracely',
    apellido: 'GGG',
    edad: 20,
    peso: 65
}
var aracely4 = {
    nombre : 'Aracely',
    apellido: 'GGG',
    edad: 20,
    peso: 74
}

var personas = [aracely1,aracely2,aracely3,aracely4]
console.log(personas)

for(var i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} pesa ${persona.peso}kg`)
}


const esflaca = (persona) => persona.peso <= 70
//FILTAR UN ARRAY
var personasAltas = personas.filter(esflaca)
//se imprime el filtrado
console.log(personasAltas)


const pasarKilosaGramos = persona => {
    return {
        ...persona,
        peso: persona.peso * 100
    }
}
//TRANSFORMAR UN ARRAY
var personasGr = personas.map(pasarKilosaGramos)
console.log(personasGr)


//REDUCIR UN ARRAY
//se reduce a un valor unico
const reducer = (acumulador, persona) => {
    return acumulador+persona.peso
}
var totaldepesos = personas.reduce(reducer, 0)
//se imprime solo la cantidad de pesos sumados
console.log(totaldepesos)
