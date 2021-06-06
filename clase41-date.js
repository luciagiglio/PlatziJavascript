/*También existen métodos para obtener un valor de la fecha en específico. Estos métodos son:
getFullYear()
getMonth()
getDate()
getHours()
getMinutes()
getSeconds()
getMilliseconds()
getTime()
getDay()
Date.now()

Ejemplo:*/

var date = new Date()

var dateNow = {

	anio: date.getFullYear(),
	mes: date.getMonth(),
	dia: date.getDay()

}

console.log(`Hoy es: ${dateNow.dia}-${dateNow.mes}-${dateNow.anio}`)
