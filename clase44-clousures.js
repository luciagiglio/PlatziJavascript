/*Closures

Un closure es una función que recuerda el estado de las cosas cuando fue creada.
Una función que devuelve otra función con parámetros invocados en dos veces; primero el de la función ‘padre’ y luego el de la función ‘hijo’.

Para ejemplificar generemos una función que va a crear saludos. En este caso hagamos un saludo argentino, uno mexicano y otro para colombia.


function crearSaludo(finalDeFrase) {
	return function(nombre) {

	}
}

La función ‘padre’ es generadora o creadora de otras funciones y la función ‘hijo’ es anónima, es la que nos va a devolver el resultado.
Vamos a llamar esta función para crear constantes.


const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('amigo')

Entonces ahora podemos llamar a la función nuevamente a través de cada variable constante y pasando el parámetro de la función ‘hijo’ esta vez, el parámetro ‘nombre’ para generar el saludo de la siguiente manera.


saludoArgentino('Pablo')  // Hola Pablo che
saludoMexicano('Pablo')   // Hola Pablo wey
saludoColombiano('Pablo') // Hola Pablo amigo

Y agregamos la respuesta de la función (el console.log en este caso) en la que accedemos a la variable ‘finalDeFrase’ generada en la declaración de los diferentes saludos


function crearSaludo(finalDeFrase) {
	return function(nombre) {
		console.log(`Hola ${nombre} ${finalDeFrase}`)
	}
}

La variable ‘finalDeFrase’ es la generada en las constantes con el nombre mismo de la función, a partir del parámetro que le pasamos; ‘che’, ‘wey’ o ‘amigo’ en este caso.
La función ‘hijo’ recuerda cada una de las variables generadas que se usó para crear el saludo.
Y la función ‘hijo’ va a ser cada una de las constantes creadas; saludoArgentino, saludoMexicano o saludoColombiano en este mismo caso.


const saludoArgentino = crearSaludo('che')

Al invocar la función ‘hijo’ luego, le pasamos el parámetro ‘nombre’ y así la función se completa y nos imprime el saludo ‘Hola Pablo che’ en este caso.


saludoArgentino('Pablo')  // Hola Pablo che

El código completo queda así: */


function crearSaludo(finalDeFrase) {
	return function(nombre) {
		console.log(`Hola ${nombre} ${finalDeFrase}`)
	}
}

const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('wey')
const saludoColombiano = crearSaludo('amigo')

saludoArgentino('Pablo')  // Hola Pablo che
saludoMexicano('Pablo')   // Hola Pablo wey
saludoColombiano('Pablo') // Hola Pablo amigo



