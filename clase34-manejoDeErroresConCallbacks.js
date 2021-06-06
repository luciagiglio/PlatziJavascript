//como hacer para que al haber un corte de internet y se este a la mitad de un request no se pierda

const API_URL = "https://swapi.dev/api/";
const PEOPLE_URL = "people/:id";


const opts = { crossDomain: true };

/*const onPeopleResponse = function (persona) {
  consola.log(`Hola, yo soy ${persona.name}`);
};*/


function obtenerPersonaje(id, callback) {
  const url = `${API_URL}${PEOPLE_URL.replace(":id", id)}`;

  $ //jquery
    .get(url, opts, callback)
    .fail(()=> {
      console.log(`Sucedio un error, No se pudo obtener el personaje ${id}`)
    })
  }


obtenerPersonaje(1, function (persona) { //utiliza jquery
    consola.log(`Hola, yo soy ${persona.name}`)
  obtenerPersonaje(2, function (persona) {
    consola.log(`Hola, yo soy ${persona.name}`)
    obtenerPersonaje(3, function(persona){
    consola.log(`Hola, yo soy ${persona.name}`)
  });
});
});
  