# Código avanzado

## Componentes de Vue

Se puede utilizar **Componentes de Vue** para desarrollar sitios más complejos pero con mayor claridad al incorporar programación en `js` a través del framework de Vue.

### components/Recursos.vue

~~~js
<template>
  <div>
    <h4>Este listado de referencias se desarrollo con un componente de Vue</h4>
    <ul>
      <li v-for='(item, index) in recursos' key='index'>
        <a :href=item.link> {{ item.name }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recursos: [
        { name: 'Node.js / npm', link: 'https://nodejs.org/es/'},
        { name: 'Vuepress', link: 'https://vuepress.vuejs.org/'},
        { name: 'Markdown', link: 'https://www.markdownguide.org/'},
        { name: 'Github', link: 'https://github.com/'},
        { name: 'Visual Studio Code', link: 'https://code.visualstudio.com/'},
        ]
      }
    }
  }
</script>
~~~~

### pages/avanzado.md

~~~html
# Componentes

<Recursos />
~~~

<Recursos />

De esta forma, las posibilidades de creación de sitios con Vue crece exponencialmente.