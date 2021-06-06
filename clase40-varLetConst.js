/*var - let - const

• Cuando declaramos variables con ‘var’ siempre conviene declararlas ‘arriba’ del código en el que sea claro cuáles van a ser las variables que se van a usar dentro de nuestra función o programa.

• Dentro de una función javascript detecta todas las variables declaradas con ‘var’ y las ‘declara’ por sí solo como si estuvieran ‘arriba’ en el código. Por lo que si se declara un var dentro de un bloque else y este no es accedido por el condicional, la variable ‘var’ declarada dentro de ese else existe de todas maneras.

• Si utilizamos ‘let’, el alcance de esa variable se ve reducido únicamente al bloque de código donde es utilizado.

• ‘const’ se comporta parecido a let sólo que no es posible reasignarlo.

• Es posible modificar una variable ‘const’ en el caso de un array[ ] con el método push() por ejemplo.

• Reducir siempre al mínimo el alcance de nuestras variables.

• Utilizar 'let’ si tenemos que reasignar una variable.

• Si nunca tenem */