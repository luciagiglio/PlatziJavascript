
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

var personas = [lucia, mateo]//podemos de hacer array de cualquier cosa
//se accede: personas[0].altura ->devuelve la altura de la persona en la posicion 0 del array

for(var i=0;i<personas.length;i++)
{
var persona = personas[i]
console.log(`${persona.nombre} mide ${persona.altura} mts`)

}