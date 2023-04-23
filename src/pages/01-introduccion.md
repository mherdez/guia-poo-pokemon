# Objeto

<center>
<img :src="$withBase('/img/pika-abstracto.png')" width='300'/>
</center>

Un objeto es una colección de datos relacionados y/o funcionalidad (que generalmente consta de algunas variables y funciones, que se denominan propiedades y métodos cuando están dentro de objetos).

Es decir, un objeto es una colección de propiedades, y cada propiedad es una asociación entre un nombre (o clave) y un valor.

## Definición e iniciación

Al igual que con muchas cosas en JavaScript, la creación de un objeto a menudo comienza con la definición e iniciación de una variable.

Se puede crear un objeto vacío ("estructura vacía") usando una de dos sintaxis:

~~~js
let pokemon = new Object(); // "object constructor" syntax
let pokemon = {};           // "object literal" syntax
~~~

Por lo general, se utilizan los corchetes de cifras `{...}`. Esa declaración se llama objeto literal.

Podríamos crear un objeto para representar un Pokémon de la siguiente manera:

~~~js
const pikachu = {
  nombre: 'Pikachu',
  tipo: 'Eléctrico',
  nivel: 10,
  ataque: 55,
  defensa: 30,
  velocidad: 90,
  atacar() {
    console.log(`${this.nombre} ha usado ataque rápido!`);
  },
  recibirDanio(danio) {
    this.defensa -= danio;
    console.log(`${this.nombre} ha recibido ${danio} puntos de daño.`);
  }
};

~~~

En este ejemplo, **pikachu** es un objeto con varias propiedades que representan características de un Pokémon, como su `nombre`, `tipo`, `nivel`, etc. Además, también tiene dos métodos: `atacar()` y `recibirDanio()`, que representan las acciones que puede realizar un Pokémon en una batalla.

Almacenan propiedades (pares clave-valor), donde:

- Las claves de propiedad deben ser cadenas o símbolos (generalmente cadenas).
- Los valores pueden ser de cualquier tipo.

## Accediendo a la información

Se puede acceder a los valores de propiedad mediante la notación de puntos:

~~~js
// get property values of the object:
console.log( pikachu.name ); // Pikachu
console.log( pikachu.tipo ); // Eléctrico
~~~

Para acceder a una propiedad, podemos usar:

- La notación de punto: `obj.property`.
- Notación de corchetes `obj["property"]`.
Los corchetes permiten tomar la clave de una variable, como `obj[varWithKey]`.