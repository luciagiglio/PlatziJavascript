//a que variables pueden acceder, alcance global, se pueden acceder desde cualquier lado
//alcance local solo se pueden acceder dentro de la funcion
var nombre = 'lucia'
 // no contaminar la variable global
function imprimirNombreEnMayusculas(n){ //modificamos la variable local n pero no la global nombre

    //como hacer para no modificar la variable global
    n = n.toUppercase()
    console.log(n)
}


imprimirNombreEnMayusculas(nombre)
//toda variable que no este definida dentro de una funcion es accesible globalmente