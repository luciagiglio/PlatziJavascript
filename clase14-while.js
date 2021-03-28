

var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    edad:23,
    peso:70
}

console.log(`Al inicio del ano ${lucia.nombre} pesa ${lucia.peso}kg`)

const incremento_peso = 0.3
const dias_del_ano = 365

const aumentarDePeso = persona => persona.peso +=incremento_peso
const adelgazar = persona => persona.peso -=incremento_peso
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4 //40% de los dias realiza deporte


const Meta = lucia.peso - 3
var dias = 0
//mientras la condicion sea verdadera se va seguir repitiendo
while (lucia.peso > Meta)
{
    //se detiene la ejecucion para ver lo que esta pasando
   // debugger
if (comeMucho()){
    //aumenta si come mucho
    aumentarDePeso(lucia)
}
if(realizaDeporte()){//adelgaza si hace ejercicio
adelgazar(lucia)
}
dias += 1
}

//tofixed(2)toma dos lugares despues de la coma

console.log(`Pasaron ${dias} hasta que ${lucia.nombre} adelgazo 3kg`)
