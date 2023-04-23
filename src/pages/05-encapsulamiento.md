# Encapsulamiento


<center style='margin:30px'>
<img :src="$withBase('/img/pika-detective.png')" width='300' />
</center>

El encapsulamiento es uno de los principales conceptos de la programación orientada a objetos y se refiere a la idea de que los datos y el comportamiento de un objeto deben estar ocultos y protegidos dentro del objeto mismo. Es decir, que los datos y métodos de un objeto solo deben ser accesibles desde dentro del objeto mismo y no desde fuera.

En el caso de los Pokémon, el encapsulamiento nos permite proteger los datos y métodos de un Pokémon, como su salud o sus ataques, para que no puedan ser modificados desde fuera del objeto. En otras palabras, los datos y métodos de un Pokémon solo deben ser accesibles y modificables a través de métodos específicos que estén diseñados para ese propósito.

Para ilustrar el concepto de encapsulamiento, veamos un ejemplo en JavaScript que muestra cómo podemos proteger los datos y métodos de un objeto de Pokémon:

~~~js
class Pokemon {
  constructor(name, type, health) {
    this._name = name;
    this._type = type;
    this._health = health;
  }

  get name() {
    return this._name;
  }

  get type() {
    return this._type;
  }

  get health() {
    return this._health;
  }

  set health(value) {
    this._health = value;
  }

  _calculateDamage() {
    return Math.floor(Math.random() * 10) + 1;
  }

  attack(otherPokemon) {
    const damage = this._calculateDamage();
    otherPokemon.health -= damage;
    console.log(`${this.name} attacked ${otherPokemon.name} and dealt ${damage} damage!`);
  }
}

const pikachu = new Pokemon('Pikachu', 'electric', 100);
const charmander = new Pokemon('Charmander', 'fire', 100);

pikachu.health = 90;
console.log(pikachu.health);

charmander.attack(pikachu);
console.log(pikachu.health);

~~~
En este ejemplo, podemos ver que los datos y métodos de un objeto de Pokémon están protegidos dentro del objeto mismo y solo pueden ser accesibles a través de los métodos get y set definidos en la clase. Además, el método _calculateDamage está oculto y solo puede ser llamado desde dentro de la clase.

Esto nos permite proteger los datos de un objeto de Pokémon, como su salud, para que no puedan ser modificados directamente desde fuera del objeto. En su lugar, tenemos que utilizar el método set para modificar la salud de un Pokémon.

En resumen, el encapsulamiento es un concepto fundamental de la programación orientada a objetos que nos permite proteger los datos y métodos de un objeto para que no puedan ser accedidos o modificados directamente desde fuera del objeto. En el ejemplo de los Pokémon, podemos proteger la salud y otros datos de un Pokémon para garantizar la integridad y consistencia de nuestro código.