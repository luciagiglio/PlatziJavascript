/*
Estructura de datos inmutables

Las estructuras de datos inmutables nos van a permitir deshacernos de los “efectos colaterales” cuando estamos desarrollando (side effects; efecto de lado según Sacha).

Dada el siguiente código:
*/

const pablo = {
	nombre: 'Pablo',
	apellido: 'Andrés',
	edad: 30
}

const cumpleanos = persona => persona.edad++

//La función modificará la edad en el objeto cada vez que se ejecute:


pablo
//{nombre: "Pablo", apellido: "Andrés", edad: 30}

cumpleanos(pablo)
//30

pablo
//{nombre: "Pablo", apellido: "Andrés", edad: 31}

cumpleanos(pablo)
//31

pablo
//{nombre: "Pablo", apellido: "Andrés", edad: 32}

cumpleanos(pablo)
//32

pablo
//{nombre: "Pablo", apellido: "Andrés", edad: 33}


//Este es el llamado side effect (efecto de lado). La función puede modificar el objeto sin que nosotros así lo queramos.
//Para evitar este efecto colateral definimos una función inmutable.


const cumpleanosInmutable = persona => ({
	...persona,
	edad: persona.edad + 1
})

//Si le pasamos el objeto ‘pablo’ la función nos devolverá un nuevo objeto sin modificar el anterior.



pablo
// {nombre: "Pablo", apellido: "Andrés", edad: 33}

cumpleanosInmutable(pablo)
// {nombre: "Pablo", apellido: "Andrés", edad: 34}

cumpleanosInmutable(pablo)
// {nombre: "Pablo", apellido: "Andrés", edad: 34}

pablo
// {nombre: "Pablo", apellido: "Andrés", edad: 33}

cumpleanosInmutable(pablo)
// {nombre: "Pablo", apellido: "Andrés", edad: 34}

cumpleanosInmutable(pablo)
// {nombre: "Pablo", apellido: "Andrés", edad: 34}

pablo
// {nombre: "Pablo", apellido: "Andrés", edad: 33}


//La “desventaja” que tendremos es que para guardar el valor de la función vamos a tener que generar una nueva variable.


const pabloViejo = cumpleanosInmutable(pablo)
const pabloMasViejo = cumpleanosInmutable(pabloViejo)


//Utilizar estructuras de datos es parte de las buenas prácticas de javascript ya que nos permite deshacernos de los “efectos de lado” y no preocuparnos de modificar código inconscientemente y que se “rompa todo” en cualquier otro lado.




/*
La forma que muestra Sacha para crear objetos inmutables puede fallar si tienes objetos que tengan otros objetos por dentro, por ejemplo:

const nicolas = {
	altura : {
		valor: 170,
		unidad: 'cm'
	},
	nombre: 'Nicolás'
}

const nicolasClon = {
	...nicolas
}

//Si después queremos modificar por ejemplo el valor de la altura del clon
nicolasClon.altura.valor = 180
//También estamos modificando la altura del objeto nicolas

console.log(nicolasClon.altura.valor) //180
console.log(nicolas.altura.valor) //180

Una truco que puedes usar para copiar objetos y sean inmutables sin importa que hayan objetos nested es primero hacerle un JSON.parse(JSON.stringify(objeto)) a el objeto que quieras copiar.

Modificando la función de sacha quedaría así:

const compleanosInmutable = persona => {
	persona = JSON.parse(JSON.stringify(persona))
	return {
		...persona
		edad: persona.edad + 1
	}
}

De esta forma si necesitas puedes modificar el valor retornado por la función aunque tenga una propiedad que sea un objeto por dentro.
*/