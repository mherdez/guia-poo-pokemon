# Conceptos básicos de objeto

Un objeto es una colección de datos relacionados y/o funcionalidad (que generalmente consta de algunas variables y funciones, que se denominan propiedades y métodos cuando están dentro de objetos).

## Definición e iniciación

Al igual que con muchas cosas en JavaScript, la creación de un objeto a menudo comienza con la definición e iniciación de una variable.

Se puede crear un objeto vacío ("estructura vacía") usando una de dos sintaxis:

~~~js
let user = new Object(); // "object constructor" syntax
let user = {};           // "object literal" syntax
~~~

Por lo general, se utilizan los corchetes de cifras `{...}`. Esa declaración se llama objeto literal.

~~~js
let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
~~~

Una propiedad tiene una clave (también conocida como "nombre" o "identificador") antes de los dos puntos ":" y un valor a la derecha.

En el objeto `user`, hay dos propiedades:

La primera propiedad tiene el nombre `name` y el valor **"John"**.
El segundo tiene el nombre `age` y el valor **30**.

Almacenan propiedades (pares clave-valor), donde:

- Las claves de propiedad deben ser cadenas o símbolos (generalmente cadenas).
- Los valores pueden ser de cualquier tipo.

## Accediendo a la información

Se puede acceder a los valores de propiedad mediante la notación de puntos:

~~~js
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
~~~

Para acceder a una propiedad, podemos usar:

- La notación de punto: `obj.property`.
- Notación de corchetes `obj["property"]`.
Los corchetes permiten tomar la clave de una variable, como `obj[varWithKey]`.