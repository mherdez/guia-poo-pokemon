# Polimorfismo

<center style='margin:30px'>
<img :src="$withBase('/img/pika-charmander.jpg')" width='350' />
</center>

El polimorfismo es otro de los conceptos clave de la programación orientada a objetos que se utiliza para referirse a la capacidad de los objetos de una clase para tomar diferentes formas. En otras palabras, un objeto puede ser tratado como si fuera un objeto de otra clase.

En el caso de los Pokémon, el polimorfismo nos permite tratar diferentes tipos de Pokémon de la misma manera, aunque cada uno tenga sus propias habilidades y propiedades. Por ejemplo, podemos crear un método para que un Pokémon ataque a otro y este método puede ser utilizado por cualquier tipo de Pokémon, sin importar su tipo.

Para ilustrar el concepto de polimorfismo, veamos un ejemplo en JavaScript que muestra cómo podemos tratar diferentes tipos de Pokémon de la misma manera:

~~~js
class Pokemon {
  constructor(name, type, health) {
    this.name = name;
    this.type = type;
    this.health = health;
  }

  attack(otherPokemon) {
    console.log(`${this.name} attacked ${otherPokemon.name} with a basic attack!`);
  }
}

class Pikachu extends Pokemon {
  constructor(name, health) {
    super(name, 'electric', health);
  }

  attack(otherPokemon) {
    console.log(`${this.name} attacked ${otherPokemon.name} with a thunderbolt!`);
  }
}

class Charmander extends Pokemon {
  constructor(name, health) {
    super(name, 'fire', health);
  }

  attack(otherPokemon) {
    console.log(`${this.name} attacked ${otherPokemon.name} with a flame thrower!`);
  }
}

const pikachu = new Pikachu('Pikachu', 100);
const charmander = new Charmander('Charmander', 100);

pikachu.attack(charmander);
charmander.attack(pikachu);

~~~

En este ejemplo, tenemos una clase `Pokemon` que define la estructura básica de un Pokémon, incluyendo su `nombre`, `tipo` y `salud`. Luego, tenemos dos clases que heredan de Pokemon: `Pikachu` y `Charmander`. Cada una de estas clases tiene su propio método `attack` que define cómo ataca el Pokémon en cuestión.

Sin embargo, en el código final, podemos ver cómo podemos tratar a ambos tipos de Pokémon de la misma manera al llamar al método **attack**. Esto es posible gracias al polimorfismo, que nos permite utilizar un método con el mismo nombre en diferentes clases, pero con un comportamiento diferente dependiendo de la clase.

En resumen, el polimorfismo es la capacidad de los objetos de una clase para tomar diferentes formas y comportarse de manera diferente según la clase en la que se encuentran.

En el ejemplo de los Pokémon, podemos tratar diferentes tipos de Pokémon de la misma manera gracias al polimorfismo, lo que nos permite escribir código más limpio y fácil de entender.