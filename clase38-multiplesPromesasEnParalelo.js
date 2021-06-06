/* Multiples Requests en Paralelo

Con promises podemos hacer los requests en paralelo sin alterar el orden de los objetos, lo que mejoraría mucho nuestro código y performance.

Generamos un array con los ids de los personajes que queremos obtener. Y a partir de este vamos a generar otro array con múltiples promesas, donde cada elemento sea una promesa, la promesa de obtener un personaje con su id.
Con el método map() vamos a recorrer el array ids y por cada elemento de este vamos a generar uno nuevo que va a ser una promesa.
Estas promesas las guardamos en una variable ‘promesas’. A partir de cada objeto del array ids (de cada id) obtenemos una nueva promesa con la función _obtenerPersonaje(id).
_

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map(function(id){
    return obtenerPersonaje(id)
})

Expresado en arrow function

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map( id => obtenerPersonaje(id) )

// (7) [Promise, Promise, Promise, Promise, Promise, Promise, Promise]

Cómo obtenemos los valores de estas promesas cuando se resuelvan?

Para esto podemos llamar a un método que tiene la clase de promesas llamado 'Promise.all()'
A este le pasamos el array ‘promesas’, le encadenamos el .then() que nos entrega los objetos y depués encadenamos el .catch() que se va a ejecutar si cualquiera de las promesas que tenemos en el array falla.

Promise
    .all(promesas)
    .then( personajes => console.log(personajes))
    .catch(onError)

// (7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
//Si lo desglosamos tenemos en orden las respuestas de cauda una de las promesas.


Las promesas tienen un gran potencial por sobre los callBakc.
El código queda mucho más prolijo y a demás podemos realizar promesas en paralelo.

codigo completo:
*/

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true}

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
}

var ids = []
for (let i = 1; i <= 10; i++) {
    ids.push(i)
}
console.log(ids.length)
var promesas = ids.map( id => obtenerPersonaje(id) )

Promise
    .all(promesas)
    .then(personajes => console.log(personajes))
    .catch(onError)

