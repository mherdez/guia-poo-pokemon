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
      '/pages/02-clases',
      '/pages/03-herencia',
      '/pages/04-polimorfismo',
      '/pages/05-encapsulamiento',
      '/pages/06-excepcion',
      '/pages/07-batalla',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
