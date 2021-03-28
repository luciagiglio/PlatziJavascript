//
var lucia = {
    nombre:'lucia',
    apellido:'giglio',
    altura:1.73
}
var mateo = {
    nombre:'mateo',
    apellido:'lopez',
    altura:1.62

}

var persona = [lucia, mateo]//podemos de hacer array de cualquier cosa

//para filtrar necesitamos el array y una funcion

//var personasAltas = persona.filter(esAlta)//dentro va la condicion
//const esAlta = persona => persona.altura > 1.8

const pasarAlturaACms = persona => { 
    //persona.altura *= 100
    //creamos un nuevo objeto para cargar el array con la altura en cms
    return {...persona, altura: persona.altura*100}
    //otro nuevo objeto en el cual pisamos la altura el dato
}

const pasarAlturaACms2 = persona => ({
    ...persona,
    altura:persona.altura *100
})
//los parentesis en las arrowFunction nos indica que retorna el objeto que estamos creando




var personasCms = persona.map(pasarAlturaACms)//map nos devuelve un nuevo array

console.log(personasCms)