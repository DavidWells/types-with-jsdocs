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

```js
// @ts-ignore-start
// @ts-ignore-end
```

[Nuclear option to disable in file](https://github.com/Microsoft/TypeScript/issues/19573#issuecomment-924972932)

```js
// @ts-nocheck
```

## Tools

- [JSON to JSDoc](https://transform.tools/json-to-jsdoc)
- [typesync](https://github.com/jeffijoe/typesync) Install missing TypeScript typings for dependencies in your package.json.
- [type-coverage](https://github.com/plantain-00/type-coverage) A CLI tool to check type coverage for typescript code
- [typescript-error-reporter-action](https://github.com/Gozala/typescript-error-reporter-action) GitHub Action to diagnose TypeScript errors and report the result on PR.


## Resources

- [JSDoc typings: all the benefits of TypeScript, with none of the drawbacks](https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/) + [giltayar/jsdoc-typing](https://github.com/giltayar/jsdoc-typing)
- [Tips and tricks for working with types in JavaScript. voxpelli/types-in-js](https://github.com/voxpelli/types-in-js/discussions)
- [JSDoc Cheatsheet](https://devhints.io/jsdoc)
- [JSDoc Cheatsheet and Type Safety Tricks | Joshua's Docs](https://docs.joshuatz.com/cheatsheets/js/jsdoc/)
- [JSDoc Cheatsheet | Jacob Paris](https://www.jacobparis.com/blog/jsdoc-cheatsheet)
- [jsdoc-examples: Examples of using JSDoc to document JavaScript](https://github.com/bradtraversy/jsdoc-examples)
- [Documentation and JSDoc](https://www.balena.io/blog/open-source-guide-1-documentation-and-jsdoc/)
- [DavidWells/jsdoc-parser: Updated fork of dox](https://github.com/DavidWells/jsdoc-parser)
- [TSConfig.json reference](https://www.typescriptlang.org/tsconfig)
- [jsdoc-templates-demo: demo of well-known jsdoc3 templates](https://github.com/cancerberoSgx/jsdoc-templates-demo) & [examples](https://cancerberosgx.github.io/jsdoc-templates-demo/demo/)
- [Check your JS with TS](https://whistlr.info/2021/check-js-with-ts/)
- [JSDoc & React](https://medium.com/@antonkrinitsyn/jsdoc-react-5e6c530880a0)
- [TypeScript-JSDoc-Guides](https://gist.github.com/DeruiDENG/074b15de1ebc23ee8d307c14198c1231)
- https://dev.to/t7yang/type-safety-in-javascript-with-jsdoc-and-vscode-1a28
- https://medium.com/@antonkrinitsyn/jsdoc-generic-types-typescript-db213cf48640
- [TypeScript without TypeScript -- JSDoc superpowers](https://fettblog.eu/typescript-jsdoc-superpowers/)
- [BeyondCodeBootcamp/jsdoc-typescript-starter: getting the most from JSDoc + tsserver (Type Linting without TypeScript)](https://github.com/BeyondCodeBootcamp/jsdoc-typescript-starter)
- https://github.com/simone-sanfratello/do-typescript-without-typescript + https://www.youtube.com/watch?v=xLDVfBUgD8U
- [TypeScript Without Transpilation](https://incrementalelm.com/typescript-without-transpilation/)
- [もう TypeScript の補助輪を外そう 明日は//@ts-check を使う](https://zenn.dev/asama/articles/0c66573e488b22)
- [JSDoc: TypeScript inside JavaScript and not the other way around 🤯](https://www.codejam.info/2021/10/jsdoc-typescript-inside-javascript.html)
- [Type Safe JavaScript with JSDoc](https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76)
- [switch to using the "default export" to appease tsserver](https://twitter.com/_beyondcode/status/1431105142888140802)
- [Utilise JSDoc comment tags so that VSCode intellisense works great!](https://blog.shhdharmen.me/how-to-utilise-jsdoc-comment-tags-so-that-visual-studio-code-intellisense-works-great)
- [JSDoc Crash Course 2021](https://codekila.com/jsdoc-crash-course-2021-javascript-documentation-generator/)
- https://github.com/ipfs/aegir/blob/master/md/ts-jsdoc.md


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
- https://github.com/jsdoc2md/jsdoc-to-markdown#readme
- https://github.com/Surnet/swagger-jsdoc


## Examples

- https://github.com/Ethan-Arrowood/lego-world-map-designer/blob/main/index.js
- https://gitlab.com/jugglinmike/friend-off/-/blob/main/src/server/room.js
- https://github.com/wooorm/f-ck
- https://github.com/micromark/micromark/blob/edbfa7a2d358d3264bd4524e947698cd7f7b480f/packages/micromark-util-types/index.js
- https://github.com/fenomas/noa/blob/master/src/index.js
- https://github.com/apollographql/apollo-server/issues/5097#issuecomment-822867819 + https://github.com/jaydenseric/graphql-upload/blob/master/package.json
