//callbacks
//libreria externa de jquery
//vamos a tener request externas a traves de la api 
//cdn servidor en el cual nos brinda la ip mas cercana que tiene el archivo 

//request para obtener datos de la url que las tiene

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

//para hacer requuest con jquery hacemos
//$.get(`${API_URL}${PEOPLE_URL.replace(':id',1), {crossDomain: true}}`)
//tenemos que remplazar los :id por el id del personaje al que queremos acceder
//le indicamos entre (el id y el valor del id al que queremos acceder)
//tambien tenemos que indicarle que este request se hace hacia otra pagina (no nuestro archivo actual) con crossDomain

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = {crossDomain:true}
$.get(lukeUrl,opts, function(data){ //lo podemos llamar como data o el nombre del objto en este caso luke
//para ver los parametros que nos llegan
    console.log(arguments)//los argumentos son variables que tienen las funciones que nos dan arrays con los parametros que tiene la funcion
    //nos muestra en la consola ->posicion 0 la data,1 string,2 request 
    console.log(`Hola, yo soy ${data.name}`) //solo se ejecuta si el request es exitoso
})
//callback funcion que se ejecuta en un futuro, no sabemos cuando
//el $get es el encargado de llamarlo, cuando termina el request

//en principio no sabemos la cantidad de parametros que nos llegan asi que buscamos en jquery.get
//cuales son los parametros que nos van a llegar 