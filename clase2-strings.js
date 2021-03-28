var nombre = 'Lucia', apellido = 'Giglio'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)//primer caracter del string o posicion del caracter en este caso posicion 0
var cantidadDeLetrasDelNombre = nombre.length

//interpolacion de texto con `` comillas invertidas
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
var nombreCompleto2 = nombre +' '+apellido

//acceder a un substring dentro de un string, 
//funcion substr. accedemos a los caracteres del nombre
//en este caso accedemos a posicion del caracter (1 seria el segundo) y hasta donde queremos tomar (2 caracteres el mencionado y el siguiente)
var str = nombre.substr(1, 2)

//ejercicio mostrar la ultima letra del nombre del usuario
var ult = nombre.length
var ultimaLetranombre = nombre.substr((ult-1), 1)