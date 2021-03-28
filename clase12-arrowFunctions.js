//otra manera de escribir funciones!!
//adsignarle a una variable una funcion
var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    edad:23,
    ingeniero:true,
    cocinero:false,
    guitarrista:false,
    drone:true

}

//javascript me permite asignar a una variable una funcion

const mayoria_de_edad = 18
//y la tratamos como una funcion
//es una funcion anonima
const esMayorDeEdad  = function (persona)
{
    return persona.edad >= mayoria_de_edad
}


function imprimirSiEsMayorDeEdad(persona)
{
//lucia es mayor de edad
//lucia es menor de edad
if(esMayorDeEdad(persona))
{
    console.log(`${persona.nombre} es mayor de edad`)
}
else{
    consola.log(`${persona.nombre} es menor de edad`)
}

}
imprimirSiEsMayorDeEdad(lucia)




//arrow function equivalente al ejemplo de esMayorDeEdad
//javascript permite borrar llaves y return cuando la funcion es de retorno
const esMenorDeEdad  = ({edad}) => edad < mayoria_de_edad
//{le pasamos el objeto} => nos devuelve la comparacion 
const esMenorDeEdad2 = ({edad}) => !esMayorDeEdad//tarea


function permitirAcceso(persona){
    //permitir si es mayor de edad sino no
    if ( !esMayorDeEdad(persona)){
        console.log('acceso denegado')
    }
    else{
        console.log('acceso concedido')
    }
}




