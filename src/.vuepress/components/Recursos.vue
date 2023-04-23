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