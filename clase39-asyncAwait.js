/* Les recomiendo mostrarlas en la consola con

console.table(personajes)

Como estamos trabajando con arreglos, se ve mucho más ordenado. */

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

async function obtenerPersonajes(){ //la palabra async determina que la funcion trabaja con await
    var ids = [1,2,3,4,5,6,7]
    var promesas = ids.map(id=> obtenerPersonaje(id)) //funcion principal donde guarda la promesa
    try{
        var personajes = await Promise.all(promises) //hasta que todas las promesas sean resueltas ese valor no se guarda en esa variable
    }catch(id){
        onError(id)
    }
    
    Promise
        .all(promesas)
        .then(personajes => console.log(personajes))
        .catch(onError)

}

