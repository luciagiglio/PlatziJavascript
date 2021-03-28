var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    altura:1.73,
    cantidadDeLibros:150
}
var mateo = {
    nombre:'mateo',
    apellido:'lopez',
    altura:1.62,
    cantidadDeLibros:195


}
var personas = [lucia, mateo]
//reducir el array de personas, como un for q me contabilice el total de libros
var totalDeLibros = personas.reduce(reducer, 0)//funcion, valor inicial del acumulador

const reducer = (acum, persona)=>{
    return acum + persona.cantidadDeLibros
}//podemos sacar llaves y el return si la funcion solo hace una cosa

console.log(`el total de libros de las personas son ${totalDeLibros}`)