//pedasos de codigo reutilizables (funciones)

var nombre = 'lucia', edad = 28

function saludar(nom, ed){
console.log(`Hola ${nom} tienes ${ed} años?`)

}

saludar(nombre, edad)// pasa las variables de afuera pero si cuando llamo
//a la funcion le agrego en los parentesis otros datos lo va a tomar
//se pueden pasar parametros invertidos o uno solo