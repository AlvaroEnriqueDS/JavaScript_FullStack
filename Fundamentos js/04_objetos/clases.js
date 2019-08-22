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

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
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

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy Develop`)
    }
}

/*
Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la
sintaxis sobre la herencia basada en prototipos de JavaScript.
La palabra clave extends se usa en declaraciones de clase o expresiones de clase para
crear una clase que es hija de otra clase.
El método constructor es un método especial para crear e inicializar un objeto creado
a partir de una clase.
*/
