/*Memoización: ahorrando cómputo

Este proceso nos va a permitir ahorrar procesamiento, ahorrar cómputo, guardando ciertos resultados de algunas cuentas.

Usaremos otro ejemplo de recursividad:

Factoriales:

!6 = 6* 5 * 4 * 3 * 2 * 1 = 720

!12 = 12 * 11 * 10 * 9 * … * 1 == 12 * 11 * 10 * 9 * 8 * 7 * !6  */

//Cómo guardamos los resultados para no tener que volver a realizar cuentas ya hechas.


	function factorial(n) {
		if(n === 1) {
			return 1
		}
		returnn * factorial(n - 1)
	}

//Ahora guardamos en una cache los resultados de las operaciones ya hechas.


	function factorial(n) {
		if(!this.cache) {
			this.cache = {}
		}
		if (this.cache[n]){
			return this.cache[n]
		}
		if(n === 1) {
			return 1
		}
		this.cache[n] = n * factorial(n - 1)
		return this.cache[n]
	}

