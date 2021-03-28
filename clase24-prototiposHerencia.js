//para hacer herencia
//herencia prototipal, no existe la herencia directa, mensaje _proto_ busca hasta que encuentra la funcion 



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

//clase 24
function Desarrollador(nombre, apellido){
this.nombre =nombre
this.apellido=apellido
}
function HeredaDe(prototipoHijo, prototipoPadre){
var fn = function(){}
fn.prototype = prototipoPadres.prototype//todas las funciones tienen el atributo prototype
prototipoHijo.prototype = new fn
//para no pisar el prototype del padre se lo pasamos a otro objeto
claseHija.prototype.constructor = prototipoHijo
}


//pisa el saludar cuando el objeto se llama desarrollador
Desarrollador.prototype.saludar = function()
{
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}


HeredaDe(Desarrollador, Persona)


// var lucia = new Persona('lucia','giglio','1.90')
// var jessi = new Persona('jessi', 'karpiuk','1.50')