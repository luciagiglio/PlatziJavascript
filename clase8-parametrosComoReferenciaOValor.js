
var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    edad:23
}

function cumpleanos(edad){
    //persona.edad +=1 //me incrementa la edad del objeto
    edad +=1


}

cumpleanos(lucia.edad) 
cumpleanos2(lucia)

function cumpleanos2(persona){
    persona.edad +=1 //me incrementa la edad del objeto
//mi funcion va a afectar a mi objeto
return{
...persona,
edad:persona.edad+1

}

}