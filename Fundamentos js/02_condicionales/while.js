const META = aracely.peso - 3
var dias = 0


console.log(`Al inicio del año ${aracely.nombre} pesa ${aracely.peso}kg`)

const comemucho = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.4

while (aracely.peso > META){
    if(comemucho()){
        aumentar(aracely)
    }

    if(deporte()){
        bajar(aracely)
    }
    dias += 1
    //debugger
}

console.log(`Al final del año ${aracely.nombre} pesa ${aracely.peso.toFixed(2)}kg`)
console.log(`Pasaron ${dias} hasta completar la meta`)


//EL DO WHILE
//se ejecuta almenos una vez

var contador = 0

const llueve = () => Math.random() < 0.25

do{
    contador ++
}while(!llueve())

console.log(`fui a ver si llovia ${contador} veces`)
