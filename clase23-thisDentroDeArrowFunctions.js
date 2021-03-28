//arrow functions y que sucede con los prototipos y quien es this en ellas


function Persona(nombre,apellido,altura){
    console.log('me ejecutaron')
    this.nombre = nombre //this guardamos en memoria los parametros recibidos
    this.apellido = apellido
    this.altura = altura
   
 }
    //this guarda dentro el valor de los datos del objeto
        Persona.prototype.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }

//Persona.prototype.soyAlto = () => this.altura > 1.8 //retornaba falso siendo verdadero

Persona.prototype.soyAlto = () => 
{
   // debugger
   //this.altura esta referenciando a window y no a persona
   //este this apunta a el espacio de afuera ***
return this.altura > 1.8
}
//*** a un this que esta aca
//con las arrow function el this no funciona como deberia



var lucia = new Persona('lucia','giglio','1.90')
var jessi = new Persona('jessi', 'karpiuk','1.50')