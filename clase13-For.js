
var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    edad:23,
    peso:70
}

console.log(`Al inicio del ano ${lucia.nombre} pesa ${lucia.peso}kg`)

const incremento_peso = 0.200
const dias_del_ano = 365

const aumentarDePeso = persona => persona.peso +=incremento_peso

const adelgazar = persona => persona.peso -=incremento_peso

for(var i = 1; i<=dias_del_ano; i++){
    //math es un modulo de javascript
var random = Math.random()
if (random < 0.25){
    //aumenta de peso
    aumentarDePeso(lucia)
}else if(random < 0.5) {
    //adelgaza
    adelgazar(lucia)
}


}

//tofixed(2)toma dos lugares despues de la coma

console.log(`Al final del ano ${lucia.nombre} pesa ${lucia.peso.toFixed(1)}kg`)