# Encapsulamiento


<center style='margin:30px'>
<img :src="$withBase('/img/pika-detective.png')" width='300' />
</center>

El encapsulamiento es uno de los principales conceptos de la programación orientada a objetos y se refiere a la idea de que los datos y el comportamiento de un objeto deben estar ocultos y protegidos dentro del objeto mismo. Es decir, que los datos y métodos de un objeto solo deben ser accesibles desde dentro del objeto mismo y no desde fuera.

En JavaScript, el símbolo `"#"` se utiliza para indicar que una propiedad o método de una clase es privado. Esto significa que solo se puede acceder a él desde dentro de la propia clase, y no desde fuera.

Esto ayuda a garantizar el encapsulamiento y la seguridad de los datos de la clase, ya que se evita que otros objetos o partes del programa puedan modificarlos directamente.

El uso del símbolo `"#"` se conoce como sintaxis de campo privado de clase, y es una característica introducida en `ECMAScript 2019` para permitir la definición de propiedades privadas en las clases de JavaScript.

~~~js

class Pokemon {

  #nivel;

  constructor(nombre, tipo, nivel) {
    this._nombre = nombre;
    this._tipo = tipo;
    this.#nivel = nivel;
  }

  #subirNivel(puntos) {
    if( puntos >= 10 ) {
      this.#nivel += 1;
      console.log(`${this._nombre} ha subido al nivel ${this.#nivel}`)
    }
  }

  get xp() {
    return this.#nivel;
  }

  ganaXp(puntos) {
    this.#subirNivel(puntos)
  }

}


const pika = new Pokemon('Pika', 'electrico', 1);

console.log(pika.xp);
pika.ganaXp(10)

console.log(pika.xp);
~~~

Este código define la clase Pokemon utilizando la sintaxis de clases de JavaScript. La clase tiene tres propiedades: `_nombre`, `_tipo` y `#nivel`. La propiedad `#nivel` está definida como privada utilizando la sintaxis de "private fields" introducida en ECMAScript 2019.

La clase también tiene un método constructor que acepta tres parámetros y los asigna a las propiedades correspondientes. Además, tiene un método privado #subirNivel que aumenta el nivel del Pokemon en función de la cantidad de puntos de experiencia ganados. El método `#subirNivel` solo se puede acceder dentro de la clase y no desde fuera.

La clase también tiene dos métodos públicos. El primer método, `xp`, es un **getter** que devuelve el nivel del Pokemon. El segundo método, `ganaXp`, toma una cantidad de puntos de experiencia como argumento y llama al método privado `#subirNivel` para aumentar el nivel del Pokemon si los puntos de experiencia son suficientes.

En la parte final del código, se crea un objeto `pika` a partir de la clase `Pokemon` y se muestra el nivel inicial del Pokemon utilizando el `getter xp`. A continuación, se llama al método `ganaXp` con una cantidad de puntos de experiencia de 10, lo que aumenta el nivel del Pokemon. Finalmente, se muestra el nivel actualizado del Pokemon utilizando el `getter xp`.

En resumen, este código simula la experiencia y el nivel de un Pokemon utilizando propiedades y métodos públicos y privados de una clase en JavaScript.

:::tip En resumen
El encapsulamiento se refiere a la idea de ocultar la complejidad de un objeto y proteger sus datos internos mediante el uso de métodos y propiedades privadas y públicas. Es decir, se trata de ocultar la implementación interna de un objeto y sólo exponer una interfaz pública que permita interactuar con él de forma controlada.
:::

