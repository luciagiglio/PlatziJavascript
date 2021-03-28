//incremento de variable

var edad = 23

//edad = edad+1 lo mismo que lo de abajo

edad +=1
var precio = 200.3

var total = precio * 100 * 3 / 100 //para que nos mas exacto 

var total = Math.round(precio*100*3)/100// redondea el valor 
var totalStr = total.toFixed(2) //siempre tene en cuenta solo dos(en este caso) decimales despues de la coma

var total2 = parseFloat(totalStr) //transforma de un string a un decimal

var pizza = 8
var personas =2
var cantidadPorcionesPorPersona = pizza/personas

