# Herencia


<center style='margin:30px'>
<img :src="$withBase('/img/pikas.jpg')" width='400' />
</center>

La herencia es un concepto importante en programación orientada a objetos que nos permite crear nuevas clases basadas en clases existentes, lo que nos permite reutilizar código y evitar la duplicación de esfuerzos.

En el caso de los **Pokémon**, podríamos crear diferentes tipos de **Pokémon**, como los Pokémon *eléctricos*, *acuáticos*, de *fuego*, entre otros. Cada uno de estos tipos de **Pokémon** tendría algunas propiedades y métodos en común, pero también tendría propiedades y métodos únicos.

Por ejemplo, los **Pokémon eléctricos** tendrían **propiedades** y **métodos** que los diferencian de los **Pokémon acuáticos**.

<center style='margin:50px'>
<img :src="$withBase('/img/ball-electric.png')" width='150' style='margin:5px'/>
<img :src="$withBase('/img/ball-water.png')" width='150' style='margin:5px'/>
<img :src="$withBase('/img/ball-fire.png')" width='150' style='margin:5px'/>
</center>

Para crear estas subclases, podemos utilizar la herencia. Para hacerlo, creamos una nueva clase utilizando la palabra clave `class`, y luego usamos la palabra clave `extends` seguida del nombre de la clase padre que queremos heredar. Luego, definimos las nuevas propiedades y métodos que queremos agregar a esta subclase.

Por ejemplo, para crear una subclase `PokemonElectrico` que herede de la clase **Pokemon**, podríamos hacer lo siguiente:

~~~js
class PokemonElectrico extends Pokemon {
  constructor(nombre, nivel, ataque, defensa, velocidad) {
    super(nombre, 'Eléctrico', nivel, ataque, defensa, velocidad);
  }

  atacar() {
    console.log(`${this.nombre} ha usado ataque eléctrico!`);
  }
}
~~~

En este código, creamos la clase `PokemonElectrico` que hereda de la clase Pokemon, utilizando la palabra clave `extends`. Luego, definimos el constructor de la clase, que recibe los parámetros de `nombre`, `nivel`, `ataque`, `defensa` y `velocidad`, y llamamos al `constructor` de la clase padre utilizando la palabra clave `super` y pasándole los mismos parámetros.

Además, hemos definido un nuevo método `atacar()` para la subclase `PokemonElectrico`, que reemplaza el método `atacar()` de la clase padre. De esta manera, el método `atacar()` de la subclase `PokemonElectrico` imprime un mensaje diferente en la consola.

Ahora, para crear un objeto de la subclase `PokemonElectrico`, podemos utilizar la palabra clave `new` seguida del nombre de la subclase y los parámetros que queremos pasarle al constructor. Por ejemplo:

~~~js
const pikachu = new `PokemonElectrico`('Pikachu', 5, 55, 40, 90);
console.log(pikachu); // Imprime: `PokemonElectrico` {nombre: 'Pikachu', tipo: 'Eléctrico', nivel: 5, ataque: 55, defensa: 40, velocidad: 90}
pikachu.atacar(); // Imprime: Pikachu ha usado ataque eléctrico!
~~~

<center>
<img :src="$withBase('/img/pika-run.png')" width='200'/>
</center>

En este código, creamos un nuevo objeto pikachu de la subclase `PokemonElectrico` utilizando la palabra clave new y pasándole los parámetros correspondientes al constructor. Luego, imprimimos el objeto en la consola para verificar que se haya creado correctamente. Finalmente, llamamos al método `atacar()` del objeto pikachu, lo que imprime un mensaje diciendo que ha usado un ataque eléctrico.

Así es como podemos utilizar la herencia para crear nuevas subclases basadas en clases existentes, reutilizando código y agregando funcionalidades únicas a cada subclase. En el caso de los **Pokémon**, la herencia nos permite crear diferentes tipos de **Pokémon** con diferentes propiedades y métodos, pero que comparten algunas características en común.

Por ejemplo, podríamos crear la subclase **PokemonFuego** que hereda de la clase Pokemon y que tiene un método `atacar()` que imprime un mensaje diciendo que ha usado un ataque de fuego. O podríamos crear la subclase **PokemonAgua** que hereda de la clase Pokemon y que tiene un método `atacar()` que imprime un mensaje diciendo que ha usado un ataque de agua.

~~~js
class PokemonFuego extends Pokemon {
  constructor(nombre, nivel, ataque, defensa, velocidad) {
    super(nombre, 'Fuego', nivel, ataque, defensa, velocidad);
  }

  atacar() {
    console.log(`${this.nombre} ha usado ataque de fuego!`);
  }
}

class PokemonAgua extends Pokemon {
  constructor(nombre, nivel, ataque, defensa, velocidad) {
    super(nombre, 'Agua', nivel, ataque, defensa, velocidad);
  }

  atacar() {
    console.log(`${this.nombre} ha usado ataque de agua!`);
  }
}
~~~

En estos ejemplos, creamos las subclases **PokemonFuego** y **PokemonAgua** que heredan de la clase Pokemon, utilizando la palabra clave `extends`. Luego, definimos el `constructor` de cada clase y llamamos al constructor de la clase padre utilizando la palabra clave `super`.

Además, hemos definido un nuevo método `atacar()` para cada subclase, que reemplaza el método `atacar()` de la clase padre. De esta manera, el método `atacar()` de la subclase **PokemonFuego** imprime un mensaje diciendo que ha usado un ataque de fuego, mientras que el método `atacar()` de la subclase **PokemonAgua** imprime un mensaje diciendo que ha usado un ataque de agua.

Ahora, podemos crear objetos de cada subclase utilizando la palabra clave `new` y llamando al `constructor` correspondiente:

~~~js
const charmander = new PokemonFuego('Charmander', 5, 50, 40, 65);
console.log(charmander); // Imprime: PokemonFuego {nombre: 'Charmander', tipo: 'Fuego', nivel: 5, ataque: 50, defensa: 40, velocidad: 65}
charmander.atacar(); // Imprime: Charmander ha usado ataque de fuego!

~~~

<center>
<img :src="$withBase('/img/charmander.png')" width='180'/>
</center>

~~~js
const squirtle = new PokemonAgua('Squirtle', 5, 48, 65, 43);
console.log(squirtle); // Imprime: PokemonAgua {nombre: 'Squirtle', tipo: 'Agua', nivel: 5, ataque: 48, defensa: 65, velocidad: 43}
squirtle.atacar(); // Imprime: Squirtle ha usado ataque de agua!
~~~

<center>
<img :src="$withBase('/img/squirtle.png')" width='180'/>
</center>


En este código, creamos objetos de las subclases **PokemonFuego** y **PokemonAgua** utilizando la palabra clave new y pasándoles los parámetros correspondientes al `constructor` de cada subclase. Luego, imprimimos los objetos en la consola para verificar que se hayan creado correctamente. Finalmente, llamamos al método `atacar()` de cada objeto, lo que imprime un mensaje diciendo qué tipo de ataque ha usado el **Pokémon**.

La herencia es una poderosa herramienta de la programación orientada a objetos que nos permite crear clases relacionadas y estructurar nuestro código de una manera clara y fácil de entender.

En el caso de los **Pokémon**, la herencia nos permite crear diferentes tipos de **Pokémon** con diferentes propiedades y métodos, pero que comparten algunas características en común.

<center>
<img :src="$withBase('/img/pokemon-types.png')" />
</center>


Es importante tener en cuenta que la herencia también tiene sus limitaciones y que abusar de ella puede llevar a un código difícil de mantener y entender. Es por eso que es importante diseñar nuestra estructura de clases cuidadosamente y pensar bien qué propiedades y métodos deben estar en la clase padre y cuáles deben estar en las subclases.

En resumen, la herencia es una herramienta poderosa de la programación orientada a objetos que nos permite crear clases relacionadas y estructurar nuestro código de una manera clara y fácil de entender. En el caso de los **Pokémon**, la herencia nos permite crear diferentes tipos de **Pokémon** con diferentes propiedades y métodos, pero que comparten algunas características en común.

