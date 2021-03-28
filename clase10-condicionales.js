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

imprimirProfesiones(lucia)