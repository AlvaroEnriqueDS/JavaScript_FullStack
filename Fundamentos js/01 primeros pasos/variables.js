console.log('01 Hola mundo como estás, voy por tí con Golang y JS!')

/////////////////////Definir variables////////////////////////////////
///con "var"
var nombre
var apellido

//Darle un valor a la variable
nombre = 'Alvaro'
apellido = 'DIAZ'

//concatenar texto
console.log('02 Hola ' + nombre)


//practicas hasta este punto
var edad = 19
var color = 'negro', puntucacion = 90

console.log('03 Hola '+nombre+' tienes '+edad+' años! Y eres '+color+' con '+puntucacion+' puntos')

//se pueden cambiar el tipo de variables en cualquier momento
edad = '19 años'
console.log('04 Tengo '+edad)


///////////////////////Variables String////////////////////////////////////
//convertir string a mayusculas y minusculas con funciones
var nombreEnMayus = nombre.toUpperCase()
var apellidoEnMinus = apellido.toLowerCase()
//primera letra del nombre, requiere la posicion que queremos (0)
var primeraletranom = nombre.charAt(0)
//Cantidad de letras que tiene un string
var cantidadDeLetrasDeNom = nombre.length

//ejemplo si cambio el nombre y le añado una letra más, la variable
//'cantidadDeLetrasDeNom' seguira siendo 6 (nombre actual), por el estado que tiene,
// si queremos actualizarlo tenemos que darle un vuevo valor a la variable con nombre.length
//esto nos dara 7 (el nuevo nombre), si no no.

//concatenar 2 string
var nombreCompleto = nombre + ' ' + apellido
var nombreCompleto2 = `Hola mi nombre es ${nombre.toLocaleUpperCase()} y mi apellido es ${apellido}`

//con estaas funciones podemos traer la letra que queramos de un string
var str = nombre.charAt(0) + nombre.toLocaleUpperCase().charAt(5)
//con esta funcion traemos desde el punto 0 los 3 caracteres siguientes
var str2 = nombre.substr(0, 3)

 //desafio mostrar ultima letra del nombre
 var nombre = "ROCHY"
 var desafio = nombre.length;
 console.log(`DESAFIO -> la ultima letra de tu nombre es ${nombre.charAt(desafio-1)}`);


 ///////////////////////////Variables Numero/////////////////////////////
var edad2 = 27
//sumar edad = edad + 1
edad2 += 1


var peso = 75
//peso = peso -2
peso -= 2

 //redondeando

 var precio = 200.3

 //3 diferentes modos de hacerlo
 //1. Normal (esta forma nos da un decimal de más porque js es así)
 var total = precio * 3
 //2. esta forma multiplicamos para llevar a entero y luego la cantidad
 var total = precio * 100 *3 /100
 //1. usando math (3 es la cantidad) (100 es para llevarlo a entero)
 var total = Math.round(precio * 100 * 3) / 100

 //con esto podemos controlar los decimales pero se convierte en string "totalStr"
 var totalStr = total.toFixed(2)

 //para pasarlo a flotante de nuevo
 var total2 = parseFloat(totalStr)


 var pizza = 8
 var persona = 2
 var cantidadDePorcionesPorPersona = pizza / persona



