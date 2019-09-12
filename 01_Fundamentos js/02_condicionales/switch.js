//esta funcion le permite interactuar al usuario
var signo = prompt('¿cual es tu signo?')

switch (signo) {
    case 'cancer':
        console.log(`1`)
        break
    case 'escorpio'://///////////////////se puede hacer
    case 'escorpion':////////////////////esto
            console.log(`2`)
        break
    case 'gemenis':
            console.log(`3`)
        break
    default:
            console.log(`esto no es un signo`)
        break
}