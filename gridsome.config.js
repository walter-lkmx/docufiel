// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/sass/**/*.scss'),
        path.resolve(__dirname, './src/flare/sass/functions/**/*.scss'),
        path.resolve(__dirname, './src/flare/sass/tokens/**/*.scss'),
        path.resolve(__dirname, './src/flare/sass/components/**/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Docufiel',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Content',
        baseDir: './content',
        pathPrefix: '/',
        template: './src/templates/WebPage.vue',
      }
    }
  ],
  transformers: {
    remark: {
      autolinkHeadings: false,
    }
  },

  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

    // or if you use scss
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
}
