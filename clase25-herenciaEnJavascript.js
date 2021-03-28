//por mas que usemos class, todo es un prototipo

class Persona{
    constructor(nombre, apellido){
    this.nombre=nombre
    this.apellido=apellido
    
    }


     saludar(){
        console.log(`Hola me llamo ${nombre} ${apellido}`)
    
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
    saludar()
    {
        console.log(`Hola me llamo ${nombre} ${apellido} y soy desarrollador/a`)
    }
}



Persona.prototype.saludar = function(){}
Persona.prototype.soyAlto = function(){}

var lucia = new Persona('lucia','giglio')
var jessi = new Desarrollador('sasha', 'lifzyc','1.90')