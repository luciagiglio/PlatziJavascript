
var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    altura:1.73
}
var mateo = {
    nombre:'mateo',
    apellido:'lopez',
    altura:1.62

}

var persona = [lucia, mateo]//podemos de hacer array de cualquier cosa

//para filtrar necesitamos el array y una funcion

var personasAltas = persona.filter(esAlta)//dentro va la condicion

const esAlta = persona => persona.altura > 1.8
const esBaja = persona => persona.altura < 1.8

console.log(personasAltas)

const esBaja = (persona) => {
    return persona.altura < 1.6
    }