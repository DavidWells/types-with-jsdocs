const { getPostCSSConfig } = require('@davidwells/config-postcss')
// const variable = require('./src/_variables')
// const mixins = require('./src/_mixins')

const defaultPlugins = getPostCSSConfig({
  isNext: true, 
  variables: {
    blue: 'red',
    nice: 'yellow',
  },
  // mixins: mixins
})

module.exports = {
  plugins: {
    ...defaultPlugins,
  },
}
