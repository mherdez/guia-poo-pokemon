module.exports = {
  dest: 'docs',
  base: '/guia-poo-pokemon/',
  lang: 'es-ES',
  title: 'Programación Orientada a Objetos con Pokemones 🕹',
  description: 'Curso intersemestral de Vuepress. ITCampeche',
  themeConfig: {
    editLinks: false,
    lastUpdated: false,
    nav: [
    //   {
        // text: 'VuePress',
    //     link: 'https://v1.vuepress.vuejs.org/guide'
    //   },
    //   {
    //     text: 'Markdown',
    //     link: 'https://programminghistorian.org/es/lecciones/introduccion-a-markdown'
    //   },
      {
        text: 'MDN web docs. Introducción a los objetos',
        link: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects'
      },
      {
        text: 'Javscript.info: Objects - the basics',
        link: 'https://javascript.info/object-basics'
      },
      {
        text: 'PokeApi',
        link: 'https://pokeapi.co/'
      },
    ],
    sidebar: [
      '/',
      '/pages/01-introduccion',
      '/pages/02-markdown',
      '/pages/03-design',
      '/pages/04-practica-2',
      '/pages/05-deploy',
      '/pages/06-practica-3',
      '/pages/07-avanzado',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
