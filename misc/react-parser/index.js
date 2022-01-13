// const ts = require('typescript')
const ReactDocGen = require('react-docgen')
const ReactDocGenTS = require('react-docgen-typescript')
const doctrine = require('doctrine')
const fs = require('fs')
const path = require('path')
const deIndent = require('de-indent')

/**
 * Parse JSDoc from prop description.
 *
 * @param {Prop} prop
 * @returns {Prop}
 */
function prepareProp(prop) {
  if (prop.description) {
    const meta = doctrine.parse(prop.description)

    prop.description = meta.description

    meta.tags.forEach(({ title, description, ...tag }) => {
      prop[title] = description || true
    })
  }

  delete prop.parent

  return prop
}

function parseTS(file, source) {
  return ReactDocGenTS.withDefaultConfig({
    propFilter: {
      skipPropsWithName: ['className'],
    },
    componentNameResolver(exp, src) {
      if (exp.name === 'default') {
        return path
          .basename(file)
          .replace(/\.tsx/, '')
          .replace(/(?:^|-)([a-z])/g, (_, c) => c.toUpperCase())
      }
    },
  }).parse(file)[0]
}

function parseJS(file, source) {
  return ReactDocGen.parse(source)
}

/**
 * Parse file to JSDoc Meta
 * @argument {string} filename
 * @argument {string=} source
 * @returns {JSDocMeta}
 */
module.exports = function parse(file, source, root = process.cwd()) {
  const isTS = /\.tsx$/.test(file)
  source = source || fs.readFileSync(file)

  const meta = isTS ? parseTS(file, source) : parseJS(file, source)

  if (!meta) throw new Error('Failed to parse ' + file)

  const docs = doctrine.parse(meta.description)

  meta.description = docs.description

  docs.tags.forEach((tag) => {
    if (tag.title === 'example') {
      meta[tag.title] = meta[tag.title] || []
      meta[tag.title].push(deIndent(tag.description))
    } else meta[tag.title] = tag.description
  })

  if (meta.methods) {
    meta.methods.forEach((method) => {
      const doc = doctrine.parse(method.docblock || '')
      delete method.docblock
      method.private = !doc.tags.some((tag) => tag.title === 'public')
    })
  }

  meta.props = Object.entries(meta.props || {}).reduce(
    (acc, [name, prop]) => acc.concat([{ name, ...prepareProp(prop) }]),
    []
  )
  meta.name =
    meta.displayName || meta.name || path.basename(file).replace(/\.jsx?$/, '')
  meta.file = path.relative(root, file)

  return meta
}

/** @typedef {{value: string, computed: boolean}} PropValue */
/** @typedef {{name: string, value?: any, raw?: string}} PropType */
/** @typedef {{name: string, type: PropType, defaultValue?: PropValue, required: boolean, description: string?, private?: boolean}} Prop */
/** @typedef {{name: string, description: string?, version: string, status: string, props: Array<Prop>}} JSDocMeta */
