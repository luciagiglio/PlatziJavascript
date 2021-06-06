const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";

//const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true };

const onPeopleResponse = function (persona) {
  consola.log(`Hola, yo soy ${persona.name}`);
};
//vamos a cambiar la funcion para ordenar la secuencia de ejecucion que vamos a querer
//cb o fn se le puede llamar al callback

function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;
  $.get(url, opts, onPeopleResponse);
}

//si coloco oobtenerPersonaje(1, obreter personaje(2)) seria lo mismo en el sentido de como muestra los datos, es decir que se ejecuta
//enseguida asi que se me seguirian ejecutando sin conocer yo cual esta primero en cada llamada de los datos

if (callback){
    callback
}
//para que el server que responde los request en distintos ordenes, como mejorar eso.


obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3);
  });//callback infierno,
}); //esa funcion define que luego de ese personaje se obtiene el otro
