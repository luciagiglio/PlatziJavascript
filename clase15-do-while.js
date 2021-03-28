//simular cuantas veces fuimos a la esquina a ver si estaba lloviendo
var contador = 0 

const llueve = () => Math.random() < 0.25

do{
contador ++
}while(!llueve())//si se cumple la condicion de abajo, se repite el ciclo

if (contador === 1)
{
    console.log(`Fui a ver si llovia ${contador} vez`)
}
else{
console.log(`Fui a ver si llovia ${contador} veces`)
}
