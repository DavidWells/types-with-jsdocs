# Vite + JSDoc + TS 

Experimentation repo for various ways to type react apps.

See [./src](./src) folder for examples

## Typescript ignore

The `//@ts-ignore` tells TypeScript to ignore the TypeScript errors in the line following the comment.

```js
function mapValues(object, mapFunction) {
  //@ts-ignore
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, mapFunction(value)]))
}
```

This `//@ts-expect-error` will ignore any typechecking failures in the next line, but will fail the typecheck if there are no errors

```js
function mapValues(object, mapFunction) {
  //@ts-expect-error
  return Object.fromEntries(Object.entries(object).map(([key, value]) => [key, mapFunction(value)]))
}
```

## Resources

- [JSDoc typings: all the benefits of TypeScript, with none of the drawbacks](https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/) + [giltayar/jsdoc-typing](https://github.com/giltayar/jsdoc-typing)
- [Discussions · voxpelli/types-in-js](https://github.com/voxpelli/types-in-js/discussions)
- [JSDoc Cheatsheet](https://devhints.io/jsdoc)
- [jsdoc-examples: Examples of using JSDoc to document JavaScript](https://github.com/bradtraversy/jsdoc-examples)
- [Documentation and JSDoc](https://www.balena.io/blog/open-source-guide-1-documentation-and-jsdoc/)
- [DavidWells/jsdoc-parser: Updated fork of dox](https://github.com/DavidWells/jsdoc-parser)
- [TSConfig.json reference](https://www.typescriptlang.org/tsconfig)
- [jsdoc-templates-demo: demo of well-known jsdoc3 templates](https://github.com/cancerberoSgx/jsdoc-templates-demo) & [examples](https://cancerberosgx.github.io/jsdoc-templates-demo/demo/)
