/*Funciones Recursivas

Para realizar recursividad necesitamos 2 cosa; 1 caso base y 1 caso recursivo.
Usaremos una división para mostrar las funciones recursivas.

Algoritmo de nuestro ejercicio:

13 /4_

13 - 4 = 9 1 => caso recursivo
9 - 4 = 5 1 => caso recursivo
5 - 4 = 1 1 => caso recursivo
1 - 4 = -3 0 => caso base

La función:  */


function divisionEntera(dividendo, divisor) {
	if (dividendo < divisor) {
		return 0
	}
	return 1 + divisionEntera(dividendo - divisor, divisor)  
}

//‘dividendo - divisor’ en el primer parámetro de nuestra función recursiva invocada dentro de sí misma sería el ‘caso recursivo’ que se repetirá mientras la condición no se cumpla. Cuando la función se cumple, ‘caso base’ termina la recursividad, termina la operación y nos entrega el resultado de la división en valor entero.