//callbacks uno dentro de otros, no sirve. usamos promesas
//valores que aun no conocemos.
//cuando una situacion asincrona se resuelva
//inician en estado PENDING si se resuelve FULFILLED sino se resuelve REJECTED

//.then(valor que esperamos=>) resolucion de la promesa
//.rejected .catch(err=>)

//objeto como cualquier otro de js
new Promise(function(resolve,reject){
}).then(valor=>{}).catch(error=>{

})


//dentro de .then puede encadenarse en otra promesa y asi sucesivamente

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";


const opts = { crossDomain: true };

function obtenerPersonaje(id) {
    return new Promise((resolve, reject)=>{
        const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
        $
        .get(url,opts,function(data){
            resolve(data)//esa data es la que vamos a obtener desde el get
        })
        .fail(()=> reject(id))
          })
    }


function onError(id){
    console.log(`Sucedio un error al obtener el personaje ${id}`)
}

obtenerPersonaje(1)
.then(function (personaje){
    console.log(`El personaje 1 es ${personaje.name}`)
}) //valor que esperamos de la promesa es el .then
.catch(onError)

