//estructura repetitiva, condicional multiple

//le muestra pregunta al usuario y le pide datos
//muestra un cuadro

var signo = prompt('Cual es tu signo?')
console.log(signo)

switch(signo)
{
case 'leo':
    console.log(`El signo de ${signo} para hoy da mala pata`)
break

case 'cancer':
    console.log(`El signo de ${signo} para hoy da buena pata`)
break
default:
    console.log('no es un signo zodiacal valido')
    break




}