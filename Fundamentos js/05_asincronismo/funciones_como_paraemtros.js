/*
En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas 
situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.
*/

///////////////////////////CLASES ///////////////////////////
//por debajo todo sigue siendo un prototipo

class Humano {
    constructor(nombre, apellido, estatura) {
        //con this. estamos creando atributos para el prototipo y asignando
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
        console.log('Me he ejecutado desde Humano')
    }

    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if (fn) {
            fn(this.nombre, this.apellido, false)
        }
    }

    soyalto() {
        if (this.estatura >= 180) {
            console.log('sí soy alto')
        } else {
            console.log('no soy alto')
        }
    }
}


//////////////HERENCIA//////////////////

class Develop extends Humano {
    constructor(nombre, apellido, estatura) {
        //No podemos utilizar this hasta que no hayamos llamado al constructor de la clase padre
        //para eso se usa super
        super(nombre, apellido, estatura)
        console.log('Me he ejecutado desde Develop')
    }

    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Develop`)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

var alvaro = new Humano('alvaro', 'diaz', 180)
var aracely = new Humano('aracely', 'corman', 150)
var dev = new Develop('develop', 'GG', 190)

alvaro.saludar()
aracely.saludar(responderSaludo)
dev.saludar(responderSaludo)


function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Genial, eres developer, justo lo que quiero`)

    }
}

/*
JavaScript sólo puede hacer una cosa a la vez, sin embargo; es
capaz de delegar la ejecución de ciertas funciones a otros procesos.
Este modelo de concurrencia se llama EventLoop.
JavaScript delega en el navegador ciertas tareas y les asocia
funciones que deberán ser ejecutadas al ser completadas. Estas
funciones se llaman callbacks, y una vez que el navegador ha
regresado con la respuesta, el callback asociado pasa a la cola
de tareas para ser ejecutado una vez que JavaScript haya terminado
todas las instrucciones que están en la pila de ejecución.
Si se acumulan funciones en la cola de tareas y JavaScript se
encuentra ejecutando procesos muy pesados, el EventLoop quedará
bloqueado y esas funciones pudieran tardar demasiado en
ejecutarse.
*/