module.exports = {
  dest: 'docs',
  base: '/guia-poo-pokemon/',
  lang: 'es-ES',
  title: 'Programación Orientada a Objetos con Pokemones 🕹',
  description: 'Entendiendo POO con analogías y ejemplos. ITCampeche',
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
      '/pages/02-clases',
      '/pages/03-encapsulamiento',
      '/pages/04-herencia',
      '/pages/05-polimorfismo',
      '/pages/06-abstraccion',
      '/pages/07-excepcion',
      '/pages/08-resumen',
      '/pages/09-batalla',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
