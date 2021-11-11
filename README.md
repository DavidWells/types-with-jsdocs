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
- [Tips and tricks for working with types in JavaScript. voxpelli/types-in-js](https://github.com/voxpelli/types-in-js/discussions)
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
- [TypeScript without TypeScript -- JSDoc superpowers](https://fettblog.eu/typescript-jsdoc-superpowers/)
- [BeyondCodeBootcamp/jsdoc-typescript-starter: getting the most from JSDoc + tsserver (Type Linting without TypeScript)](https://github.com/BeyondCodeBootcamp/jsdoc-typescript-starter)
- https://github.com/simone-sanfratello/do-typescript-without-typescript + https://www.youtube.com/watch?v=xLDVfBUgD8U
- [TypeScript Without Transpilation](https://incrementalelm.com/typescript-without-transpilation/)
- [もう TypeScript の補助輪を外そう 明日は//@ts-check を使う](https://zenn.dev/asama/articles/0c66573e488b22)
- [JSDoc: TypeScript inside JavaScript and not the other way around 🤯](https://www.codejam.info/2021/10/jsdoc-typescript-inside-javascript.html)




- https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser
- https://github.com/hegemonic/catharsis
- https://github.com/jsdoctypeparser/jsdoctypeparser


## Runtime type checkers

- https://github.com/brielov/typed
- https://github.com/grantila/typeconv for https://github.com/grantila/suretype
- https://github.com/colinhacks/zod/ + https://github.com/fabien0102/ts-to-zod


## Msc

- A type detection utility for JavaScript https://github.com/sapphiredev/type / https://github.com/pkdev08/klasa-v13/blob/master/src/lib/util/Type.js

- eslint config https://github.com/Agoric/agoric-sdk/blob/20c4ff00adbffff067858c3c5702ae7a9e0522b8/packages/eslint-config/eslint-config.json
- https://github.com/benawad/gen-env-types

## Examples

- https://github.com/Ethan-Arrowood/lego-world-map-designer/blob/main/index.js
- https://gitlab.com/jugglinmike/friend-off/-/blob/main/src/server/room.js
