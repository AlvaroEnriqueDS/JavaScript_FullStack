
//para definir un prototipo (clase) debemos definir una funcion
//constructor
function Persona(nombre, apellido, estatura) {
    //con this. estamos creando atributos para el prototipo y asignando
    this.nombre = nombre
    this.apellido = apellido
    this.estatura = estatura
    console.log('Me he ejecutado')
}

//para crear una funcion al prototipo
Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}


//new hace que se cree un nuvo objeto al cual se le va asignar el prototipo que le asignemos
//implicitamente se retorna el objeto que se acaba de construir
//var alvaro = new Persona('alvaro', 'diaz', 180)
//var aracely = new Persona('aracely', 'corman', 150)



//RETO
Persona.prototype.soyalto = function () {
    if (this.estatura >= 180) {
        console.log('sí soy alto')
    } else {
        console.log('no soy alto')
    }
}

//LAS FUNCIONES CUANDO TIENEN REFERENCIA A "THIS." Y ESTA EN UNA
//ARROY FUNCTION, ESTE THIS APUNTA A WINDOW(EL QUE THIS QUE SE ENCUENTRA GLOBAL)
/*
Persona.prototype.soyalto = () => {
    if (this.estatura >= 180) {
        console.log('sí soy alto')
    }else {
        console.log('no soy alto')
    }
}
*/

///////////////////////////HERENCIA/////////////////////////
//NO HAY HERENCIA PORQUE NO HAY CLASES (HAY PROTOTIPOS, QUE SON OBJETOS Y SE LE AGREGAN FUNCIONES)
//pero si existe la HERENCIA PROTOTIPAL

function Desarrollador(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}
//activamos la herencia del prototipo
herdaDe(Desarrollador, Persona)

//para crear una funcion al prototipo Desarollador
//si "heredamos" con esta funcion vamos a pisar la funcion del padre (si se llama igual)
Desarrollador.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy DESARROLLADOR`)
}

//////////////////////////////////////////////////////
//funcion para herencia
//**LOS PROTOTIPOS SIEMPRE SON OBJETOS*/
//le decimos al hijo quien va a ser su padre
function herdaDe(prototipoHijo, prototipoPadre) {
    //definimos una funcion anonima(vacia)
    var fn = function () { }
    //para no pisar el prototype del padre lo pasamos a otro objeto
    fn.prototype = prototipoPadre.prototype
    //le decimos al hijo que su prototype es de la instancia del objeto llenado con padre
    prototipoHijo.prototype = new fn
    //asignamos una funcion constructora, sin esto se llamaria al constructor del padre
    prototipoHijo.prototype.constructor = prototipoHijo
}
//////////////////////////////////////////////////////////

/*
Los objetos en JavaScript son “contenedores” dinámicos de propiedades.Estos objetos
poseen un enlace a un objeto prototipo.Cuando intentamos acceder a la propiedad de
un objeto, la propiedad no sólo se busca en el propio objeto sino también en el
prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta 
que se encuentre una propiedad que coincida con el nombre o se alcance el final 
de la cadena de prototipos.
*/