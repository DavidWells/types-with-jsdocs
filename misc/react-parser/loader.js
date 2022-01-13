const { getOptions } = require('loader-utils')

const docgen = require('./index')

const EXPORT = /export\s+default\s+(?:class\s+|function\s*|)([A-Za-z0-9]+)/

module.exports = async function DocGenLoader(source) {
  const callback = this.async()
  const { resourcePath } = this
  const options = {
    test: /./,
    root: process.cwd(),
    ...getOptions(this),
  }

  if (/\.(jsx|tsx)$/.test(resourcePath) && options.test.test(resourcePath)) {
    try {
      const meta = docgen(resourcePath, source, options.root)
      const docs = `\nconst __docs__ = ${JSON.stringify(
        meta,
        null,
        2
      )}`.replace(
        /"--\{computed\}-->(.*)<--\{computed\}--"/g,
        (_, code) => code
      )

      const matches = EXPORT.exec(source)

      if (matches) {
        source = source + docs + `\n${matches[1]}.__docs = __docs__\n`
      }
    } catch (error) {
      this.emitError(new Error(resourcePath + ' in ' + error.message))
    }
  }

  callback(null, source)
}
