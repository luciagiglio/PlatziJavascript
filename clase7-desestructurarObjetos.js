//

var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    edad:23
}
var mateo = {
    nombre:'mateo',
    apellido:'lopez',
    edad:32

}

function imprimirNombreEnMayusculas(persona)
{
    //var nombre = persona.nombre igual a la de abajo
    var {nombre} = persona

    console.log(nombre.toUpperCase())
}

function imprimirNomberYEdad(persona)
{
console.log(`hola me llamo ${persona.nombre} y tengo ${persona.edad} a;os`)
}

imprimirNomberYEdad(lucia)