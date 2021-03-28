//la unica manera de poder mostrar el orden de las respuestas

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}

const onPeopleResponse = function (persona){
    consola.log(`Hola, yo soy ${persona.name}`)
}
//vamos a cambiar la funcion para ordenar la secuencia de ejecucion que vamos a querer
function obtenerPersonaje(id){
const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
$get(url, opts, onPeopleResponse)
}

//asincronismo de javascript
//no conocemos el orden de las respuestas, el orden en que los pedimos no es el orden en el que llegan
// obtenerPersonaje(1)
// obtenerPersonaje(2)
// obtenerPersonaje(3)
