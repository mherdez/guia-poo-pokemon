# Batalla Pokemon

## Pikachu vs Charmander vs Squirtle

<center style='margin:30px'>
<img :src="$withBase('/img/pokemon-fight.png')" width='600' />
</center>


Primero, vamos a crear las instancias de los Pokémon:

~~~js
class Pokemon {
  constructor(name, type, level) {
    this._name = name;
    this._type = type;
    this._level = level;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      console.log('Error: el nombre debe ser una cadena de caracteres');
    }
  }

  get type() {
    return this._type;
  }

  set type(newType) {
    if (typeof newType === 'string') {
      this._type = newType;
    } else {
      console.log('Error: el tipo debe ser una cadena de caracteres');
    }
  }

  get level() {
    return this._level;
  }

  set level(newLevel) {
    if (typeof newLevel === 'number' && newLevel >= 1 && newLevel <= 100) {
      this._level = newLevel;
    } else {
      console.log('Error: el nivel debe ser un número entre 1 y 100');
    }
  }

  attack() {
    console.log(`${this._name} ha atacado`);
  }
}

const pikachu = new Pokemon('Pikachu', 'Eléctrico', 20);
const charmander = new Pokemon('Charmander', 'Fuego', 15);
const squirtle = new Pokemon('Squirtle', 'Agua', 18);

~~~

Ahora, vamos a simular la batalla. Para ello, podemos crear una función que tome dos Pokémon como argumentos y los haga atacar entre sí:

~~~js
function battle(pokemon1, pokemon2) {
  console.log(`${pokemon1.name} (nivel ${pokemon1.level}, tipo ${pokemon1.type}) vs ${pokemon2.name} (nivel ${pokemon2.level}, tipo ${pokemon2.type})`);

  console.log(`${pokemon1.name} ataca a ${pokemon2.name}`);
  pokemon2.level -= 5;
  console.log(`${pokemon2.name} ahora tiene nivel ${pokemon2.level}`);

  console.log(`${pokemon2.name} ataca a ${pokemon1.name}`);
  pokemon1.level -= 5;
  console.log(`${pokemon1.name} ahora tiene nivel ${pokemon1.level}`);

  console.log('¡Fin de la batalla!');
}

~~~

Esta función imprime información sobre los dos Pokémon que van a combatir, los hace atacar entre sí y luego imprime el resultado de la batalla.

Finalmente, podemos llamar a esta función para simular una batalla entre Pikachu, Charmander y Squirtle:

~~~js
battle(pikachu, charmander);
battle(charmander, squirtle);
battle(squirtle, pikachu);
~~~


