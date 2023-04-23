# Excepción

<center style='margin:30px'>
<img :src="$withBase('/img/pika-ko.png')" width='300' />
</center>


En programación orientada a objetos, una excepción es un objeto que se utiliza para indicar que ha ocurrido un error o una situación inesperada en la ejecución del programa. Las excepciones se utilizan para controlar errores en tiempo de ejecución y permiten que el programa reaccione de manera adecuada a situaciones que no se habían previsto en el diseño original.

En el caso de los Pokémon, por ejemplo, podríamos utilizar una excepción para indicar que un ataque no ha tenido éxito debido a que el Pokémon objetivo ha esquivado el ataque. Podríamos definir una clase `DodgedAttackError` que represente esta excepción:

~~~js
class DodgedAttackError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DodgedAttackError';
  }
}
~~~

Luego, podemos modificar el método `attack` de la clase `Pokemon` para que lance esta excepción cuando el ataque esquivado:

~~~js
attack() {
  const chance = Math.random();
  if (chance < 0.5) {
    console.log(`${this._name} ha atacado`);
  } else {
    throw new DodgedAttackError(`${this._name} ha esquivado el ataque`);
  }
}

~~~

Finalmente, podemos utilizar un bloque `try-catch` para manejar esta excepción en caso de que se lance durante una batalla:

~~~js
try {
  console.log(`${pokemon1.name} ataca a ${pokemon2.name}`);
  pokemon2.attack();
} catch (e) {
  console.log(e.message);
}
~~~

En este código, intentamos que `pokemon2` ataque a `pokemon1`. Si el ataque es esquivado, se lanzará una excepción de tipo `DodgedAttackError`, la cual será capturada por el bloque `catch` y se imprimirá un mensaje indicando que el ataque ha sido esquivado.