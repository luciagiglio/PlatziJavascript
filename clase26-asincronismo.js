//podemos pasar funciones como parametros

//por mas que usemos class, todo es un prototipo

class Persona{
    constructor(nombre, apellido){
    this.nombre=nombre
    this.apellido=apellido
    
    }

//se puede mandar o no y es opcional es decir puedo poner lucia.saludar()
     saludar(fnResponderSaludo){
        var {nombre, apellido}=this
        console.log(`Hola me llamo ${nombre} ${apellido}`)
        //preguntar si pasaron una funcion
        if(fnResponderSaludo)//0 null y undefine siempre dan false
        {
            fnResponderSaludo(nombre,apellido,false)//false xq no es desarrollador o lo podemos omitir xq en el if de desarrolador tambien tenemos un if
        }
    }

    soyAlto()
    {
    return this.altura >1.8
    }

}

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura){
        super(nombre,apellido,altura)
    // this.nombre=nombre
    // this.apellido=apellido
    // this.altura=altura
    }
    saludar(fnResponderSaludo)
    {
        //var nombre =this.nombre
        //var apellido = this.apellido
        var {nombre, apellido}=this
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
        
        if(fnResponderSaludo)//0 null y undefine siempre dan false
        {
            fnResponderSaludo(nombre,apellido,true) 
        }
    }
}

function responderSaludo(nombre, apellido, esDeveloper)
{
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDeveloper)
    {
        console.log(`no sabia que eras desarrollador/a`)
    }
}


Persona.prototype.saludar = function(){}
Persona.prototype.soyAlto = function(){}

var lucia = new Persona('lucia','giglio')
var jessi = new Desarrollador('sasha', 'lifzyc','1.90')

lucia.saludar(responderSaludo)
jessi.saludar(responderSaludo)