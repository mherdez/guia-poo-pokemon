# Clases

<center>
<img :src="$withBase('/img/pokeballs.jpg')" width='400'/>
</center>

Las clases en JavaScript nos permiten definir un modelo o plantilla para la creación de objetos con propiedades y métodos en común. Podemos pensar en una clase como un molde que nos permite crear múltiples objetos con características similares.

Para crear una clase en JavaScript, usamos la palabra clave class, seguida del nombre de la clase y el cuerpo de la clase, que contiene las propiedades y métodos que queremos que tenga cada objeto de esa clase.

En el caso de los Pokémon, podríamos crear una clase `Pokemon` con las propiedades nombre, `tipo`, `nivel`, `ataque`, `defensa` y `velocidad`, y el método `atacar()`. Así se vería el código:

~~~js
class Pokemon {
  constructor(nombre, tipo, nivel, ataque, defensa, velocidad) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.nivel = nivel;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
  }

  atacar() {
    console.log(`${this.nombre} ha usado ataque básico!`);
  }
}

~~~

En este código, creamos la clase **Pokemon** con su constructor que recibe los parámetros de `nombre`, `tipo`, `nivel`, `ataque`, `defensa` y `velocidad`, y el método `atacar()`, que simplemente imprime un mensaje en la consola diciendo que el Pokémon ha usado un ataque básico.

Ahora, para crear un objeto de esta clase, podemos utilizar la palabra clave `new` seguida del nombre de la clase y los parámetros que queremos pasarle al constructor. Por ejemplo:

~~~js
const pikachu = new Pokemon('Pikachu', 'Eléctrico', 5, 55, 40, 90);
console.log(pikachu); // Imprime: Pokemon {nombre: 'Pikachu', tipo: 'Eléctrico', nivel: 5, ataque: 55, defensa: 40, velocidad: 90}
pikachu.atacar(); // Imprime: Pikachu ha usado ataque básico!

~~~

En este código, creamos un nuevo objeto `pikachu` de la clase `Pokemon` utilizando la palabra clave `new` y pasándole los parámetros correspondientes al constructor. Luego, imprimimos el objeto en la consola para verificar que se haya creado correctamente. Finalmente, llamamos al método `atacar()` del objeto `pikachu`, lo que imprime un mensaje diciendo que ha usado un ataque básico.

Así es como podemos utilizar clases en JavaScript para crear objetos con características y comportamientos en común.

<center>
<img :src="$withBase('/img/pokeball.png')" width='100'/>
<img :src="$withBase('/img/pika-glass.png')" width='300'/>
</center>