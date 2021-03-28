//

var nombre = 'lucia'
var nombre2 = 'mateo'
//objeto clave:valor
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


//en lugar de estar accediendo nombre a nombre y ejecutando la funcion todas las veces segun las variables que tengamos
//no es prolijo de hacer por eso es mejor usar objetos

//en vez de pasar el objeto solo podemos poner el atributo entonces
function imprimirObjetoEnMayusculas({nombre})
{

console.log(nombre.ToUpperCase())
//var nombre = persona.nombre.toUpperCase()
//otra forma console.log(persona.nombre.ToUpperCase())
//console.log(nombre)

}

imprimirNombreEnMayusculas(lucia)
imprimirNombreEnMayusculas(mateo)
imprimirNombreEnMayusculas({nombre: 'pablo'})