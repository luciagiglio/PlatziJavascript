function Persona(nombre,apellido,altura){
    console.log('me ejecutaron')
    this.nombre = nombre //this guardamos en memoria los parametros recibidos
    this.apellido = apellido
    this.altura = altura
    //return this es implicito
 }
    //this guarda dentro el valor de los datos del objeto
        Persona.prototype.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

Persona.prototype.soyAlto = () => this.altura > 1.8


var lucia = new Persona('lucia','giglio','1.90')
var jessi = new Persona('jessi', 'karpiuk','1.50')

//es importante donde se colocan las funciones, van antes de llamarlas 
//arrow functions y que sucede con los prototipos y quien es this en ellas