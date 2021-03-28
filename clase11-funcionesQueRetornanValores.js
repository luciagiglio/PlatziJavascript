var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    edad:23,
    ingeniero:true,
    cocinero:false,
    guitarrista:false,
    drone:true

}

function imprimirProfesiones(persona)
{
    //template stree interpolar variables
console.log(`${persona.nombre} es:`)
if(persona.ingeniero)
{
    console.log('Ingeniero')
}
if(persona.guitarrista)
{
    console.log('Guitarrista')
}
if(persona.drone)
{
    console.log('Piloto de Drone')
}
}

const mayoria_de_edad = 18
function esMayorDeEdad(persona)
{
    return persona.edad >= mayoria_de_edad
}


function imprimirSiEsMayorDeEdad(persona)
{
//lucia es mayor de edad
//lucia es menor de edad
if(persona.edad >= 18)
{
    console.log(`${persona.nombre} es mayor de edad`)
}
else{
    consola.log(`${persona.nombre} es menor de edad`)
}

}

imprimirSiEsMayorDeEdad(lucia)
esMayorDeEdad(lucia)