var aracely = {
    nombre : 'Aracely',
    apellido: 'GGG',
    edad: 20,
    peso: 70
}

console.log(`Al inicio del año ${aracely.nombre} pesa ${aracely.peso}kg`)

const DIAS_DEL_AÑO =365
const GRAMOS = 0.2
const aumentar = persona => persona.peso += GRAMOS
const bajar = persona => persona.peso -= GRAMOS

for (var i = 0; i < DIAS_DEL_AÑO; i++){
    var random = Math.random()

    if (random < 0.25){
        //aumenta de peso
        aumentar(aracely)
    }else if (random < 0.5) {
        //adelgazar
        bajar(aracely)
    }

}

console.log(`Al final del año ${aracely.nombre} pesa ${aracely.peso.toFixed(2)}kg`)