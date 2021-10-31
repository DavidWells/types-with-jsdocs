# Vite + JSDoc + TS 

Experimentation repo for various ways to type react apps.

See [./src](./src) folder for examples

## Typescript ignore

The `//@ts-ignore` tells TypeScript to ignore the TypeScript errors in the line following the comment.

```js
function mapValues(object, mapFunction) {
  // @ts-ignore
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

[Ignoring multiple lines](https://github.com/Microsoft/TypeScript/issues/19573#issuecomment-457598978)

```
// @ts-ignore-start
// @ts-ignore-end
```

[Nuclear option to disable in file](https://github.com/Microsoft/TypeScript/issues/19573#issuecomment-924972932)

```
// @ts-nocheck
```

## Tools

- [JSON to JSDoc](https://transform.tools/json-to-jsdoc)


## Resources

- [JSDoc typings: all the benefits of TypeScript, with none of the drawbacks](https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/) + [giltayar/jsdoc-typing](https://github.com/giltayar/jsdoc-typing)
- [Discussions · voxpelli/types-in-js](https://github.com/voxpelli/types-in-js/discussions)
- [JSDoc Cheatsheet](https://devhints.io/jsdoc)
- [jsdoc-examples: Examples of using JSDoc to document JavaScript](https://github.com/bradtraversy/jsdoc-examples)
- [Documentation and JSDoc](https://www.balena.io/blog/open-source-guide-1-documentation-and-jsdoc/)
- [DavidWells/jsdoc-parser: Updated fork of dox](https://github.com/DavidWells/jsdoc-parser)
- [TSConfig.json reference](https://www.typescriptlang.org/tsconfig)
- [jsdoc-templates-demo: demo of well-known jsdoc3 templates](https://github.com/cancerberoSgx/jsdoc-templates-demo) & [examples](https://cancerberosgx.github.io/jsdoc-templates-demo/demo/)
- [JSDoc & React](https://medium.com/@antonkrinitsyn/jsdoc-react-5e6c530880a0)
- [TypeScript-JSDoc-Guides](https://gist.github.com/DeruiDENG/074b15de1ebc23ee8d307c14198c1231)
- https://dev.to/t7yang/type-safety-in-javascript-with-jsdoc-and-vscode-1a28
- https://medium.com/@antonkrinitsyn/jsdoc-generic-types-typescript-db213cf48640
- [JSDoc Cheatsheet and Type Safety Tricks | Joshua's Docs](https://docs.joshuatz.com/cheatsheets/js/jsdoc/)


## Runtime type checkers

- https://github.com/brielov/typed
- https://github.com/grantila/typeconv for https://github.com/grantila/suretype
- https://github.com/colinhacks/zod/ + https://github.com/fabien0102/ts-to-zod
