# Abstracción


<center style='margin:30px'>
<img :src="$withBase('/img/pika-abstracto.png')" width='400' />
</center>

En programación orientada a objetos, la abstracción se refiere a la capacidad de representar un objeto del mundo real de una manera simplificada y abstracta. En otras palabras, se trata de ocultar los detalles innecesarios y centrarse en lo esencial del objeto.

En el caso de los **Pokémon**, podemos utilizar la abstracción para representar un **Pokémon** de una manera simplificada, sin necesidad de conocer todos los detalles internos que conforman al **Pokémon**. Por ejemplo, podríamos definir una clase `Pokemon` que tenga solo las propiedades y métodos necesarios para representar un **Pokémon** básico:

~~~js
class Pokemon {

  #name;
  #type;
  #hp;

  constructor(name, type, hp) {
    this.#name = name;
    this.#type = type;
    this.#hp = hp;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get hp() {
    return this.#hp;
  }

  set hp(value) {
    this.#hp = value;
  }

  attack() {
    console.log(`${this.#name} ha atacado`);
  }
}

~~~

En este ejemplo, hemos definido una clase Pokemon con tres propiedades: `#name` (nombre), `#type` (tipo) y `#hp` (puntos de salud). Además, hemos definido dos métodos `get` para obtener el nombre y el tipo del Pokémon, y un método `set` para establecer los puntos de salud del Pokémon.

También hemos definido un método `attack` que simplemente imprime un mensaje indicando que el Pokémon ha atacado.

Esta abstracción nos permite representar un Pokémon de manera simplificada y trabajar con él en el código sin tener que preocuparnos por los detalles internos que conforman al Pokémon. Por ejemplo, podríamos crear un objeto `pikachu` de la clase `Pokemon` y trabajar con él de la siguiente manera:

~~~js
const pikachu = new Pokemon('Pikachu', 'Electric', 100);
console.log(`El tipo de ${pikachu.name} es ${pikachu.type}`);
pikachu.attack();

~~~

En este código, hemos creado un objeto `pikachu` de la clase `Pokemon`, estableciendo su nombre, tipo y puntos de salud. Luego, hemos utilizado los métodos `get` para obtener el nombre y el tipo de pikachu, y hemos llamado al método `attack` para que `pikachu` ataque. Todo esto se ha hecho de manera simplificada, sin tener que preocuparnos por los detalles internos que conforman a `pikachu`.

<center style='margin:30px'>
<img :src="$withBase('/img/riachu.png')" width='250' />
</center>

Además, la abstracción también nos permite crear clases más especializadas que heredan de la clase `Pokemon` y que contienen propiedades y métodos específicos para cada tipo de Pokémon.

Por ejemplo, podríamos crear una clase `ElectricPokemon` que herede de `Pokemon` y que tenga propiedades y métodos específicos para los Pokémon eléctricos:

~~~js
class ElectricPokemon extends Pokemon {

  #electricAttack;

  constructor(name, hp) {
    super(name, 'Electric', hp);
    this.#electricAttack = 'Impactrueno';
  }

  get electricAttack() {
    return this.#electricAttack;
  }

  useElectricAttack() {
    console.log(`${this.name} ha usado ${this.#electricAttack}`);
  }
}

~~~

En este ejemplo, hemos creado una clase `ElectricPokemon` que hereda de la clase `Pokemon`. Además de las propiedades y métodos de la clase `Pokemon`, la clase `ElectricPokemon` tiene una propiedad adicional `#electricAttack` (ataque eléctrico) y un método adicional `useElectricAttack` (usar ataque eléctrico).

Cuando creamos un objeto de la clase `ElectricPokemon`, como por ejemplo un objeto `raichu`, podemos utilizar tanto las propiedades y métodos de la clase `Pokemon` como las propiedades y métodos específicos de la clase `ElectricPokemon`:

~~~js
const raichu = new ElectricPokemon('Raichu', 120);
console.log(`El tipo de ${raichu.name} es ${raichu.type}`);
raichu.attack();
raichu.useElectricAttack();
~~~

En este código, hemos creado un objeto `raichu` de la clase `ElectricPokemon`, estableciendo su nombre y puntos de salud. Luego, hemos utilizado los métodos `get` para obtener el nombre y el tipo de `raichu`, hemos llamado al método `attack` para que `raichu` ataque, y finalmente hemos llamado al método `useElectricAttack` para que `raichu` use su ataque eléctrico.

En resumen, la abstracción nos permite representar objetos de manera simplificada y trabajar con ellos sin tener que preocuparnos por los detalles internos que conforman al objeto. Además, nos permite crear clases más especializadas que heredan de una clase base y que contienen propiedades y métodos específicos para cada tipo de objeto.

:::tip En resumen
La abstracción se refiere a la idea de simplificar la representación de un objeto mediante la selección de las características y operaciones más importantes y relevantes para un determinado contexto. Es decir, se trata de representar un objeto de forma simplificada, omitiendo los detalles innecesarios y destacando los aspectos más relevantes para el uso que se le va a dar.
:::

:::warning ¡Ojo!
El operador `super` se utiliza en las clases de JavaScript para acceder a la implementación de un método en la clase padre de una clase. Sin embargo, no es posible utilizar el operador `super` para acceder a propiedades privadas de la clase padre que estén definidas como `#propiedad`.

Si se intenta acceder a una propiedad privada de la clase padre utilizando `super.#propiedad`, se producirá un error en tiempo de ejecución. Esto se debe a que el uso de `#propiedad` está restringido al ámbito de la clase donde se define, lo que significa que no puede ser accedido por clases hijas o por cualquier otro código fuera de la clase.

En su lugar, se puede utilizar un método público de la clase padre para acceder a la propiedad privada y devolver su valor. Luego, el método público de la clase padre puede ser llamado utilizando `super.metodoPublico()` en la clase hija para obtener el valor de la propiedad privada.
:::