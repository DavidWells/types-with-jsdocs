# Vite + JSDoc + TS 

Experimentation repo for various ways to type react apps.

See [./src](./src) folder for examples

## Typescript ignore errors

> Pro-tip: [CLI tool to automatically add ignore comments](https://github.com/kawamataryo/suppress-ts-errors)

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

## Resources & Articles

- [JSDoc typings: all the benefits of TypeScript, with none of the drawbacks](https://gils-blog.tayar.org/posts/jsdoc-typings-all-the-benefits-none-of-the-drawbacks/) + [giltayar/jsdoc-typing](https://github.com/giltayar/jsdoc-typing)
- [Tips and tricks for working with types in JavaScript. voxpelli/types-in-js](https://github.com/voxpelli/types-in-js/discussions)
- [JSDoc Cheatsheet](https://devhints.io/jsdoc)
- [JSDoc Cheatsheet and Type Safety Tricks on Joshua's Docs](https://docs.joshuatz.com/cheatsheets/js/jsdoc/)
- [JSDoc Cheatsheet by Jacob Paris](https://www.jacobparis.com/blog/jsdoc-cheatsheet)
- [jsdoc-examples: Examples of using JSDoc to document JavaScript](https://github.com/bradtraversy/jsdoc-examples)
- [Documentation and JSDoc](https://www.balena.io/blog/open-source-guide-1-documentation-and-jsdoc/)
- [brettz9/awesome-jsdoc: A list of awesome jsdoc tools, resources, etc.](https://github.com/brettz9/awesome-jsdoc)
- [TSConfig.json reference](https://www.typescriptlang.org/tsconfig)
- [Understand the use of JSDoc through code](https://github.com/chunjin666/jsdoc-learning)
- [JSDoc & React. JSDoc is very versatile tool. It… | by Anton Krinitsyn | Medium](https://medium.com/@antonkrinitsyn/jsdoc-react-5e6c530880a0)
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
- [andreidmt/tpl-ts-jsdoc: Plain JavaScript with types by leveraging TypeScript's JSDoc support.](https://github.com/andreidmt/tpl-ts-jsdoc)
- https://github.com/stereobooster/type-o-rama
- [TypeScript Type Safety with AJV Standalone](https://rehanvdm.com/blog/typescript-type-safety-with-ajv-standalone) + https://github.com/rehanvdm/ajv-standalone-type-saftey
- [Highest Voted 'jsdoc' Questions - Stack Overflow](https://stackoverflow.com/questions/tagged/jsdoc)

## Tools

## Doc parsers

- https://github.com/ccontrols/structured-types
- https://github.com/yashag/jsdoctor/
- https://github.com/jsdoc-type-pratt-parser/jsdoc-type-pratt-parser
- https://github.com/hegemonic/catharsis
- https://github.com/jsdoctypeparser/jsdoctypeparser
- https://github.com/reactjs/react-docgen
- https://github.com/syavorsky/comment-parser
- https://api-extractor.com/pages/tsdoc/tag_example/
- https://github.com/eslint/doctrine
- https://github.com/DavidWells/jsdoc-parser - Updated fork of dox
- https://github.com/jonschlinkert/parse-comments Parse JavaScript code comments.
- https://github.com/jonschlinkert/tokenize-comment
- https://github.com/jsdoc2md/jsdoc-api - A programmatic interface for jsdoc3 with a few extra features

## Formatters

- [hosseinmd/prettier-plugin-jsdoc: A prettier plugin for formatting Jsdoc.](https://github.com/hosseinmd/prettier-plugin-jsdoc)
- [Prettier for JSdoc](https://github.com/homer0/packages/tree/main/packages/public/prettier-plugin-jsdoc)

## Conversion tools

- https://transform.tools Transform lots of stuff!
- https://github.com/vega/ts-json-schema-generator or https://github.com/horiuchi/dtsgenerator TypeScript d.ts file generator from JSON Schema file
- https://github.com/YousefED/typescript-json-schema
- https://github.com/LinbuduLab/json-to-type-graphql JSON / Object / Request ---> TypeGraphQL Class!
- https://github.com/develar/ts2jsdoc - Generate JSDoc from Typescript
- Object to schema https://github.com/unjs/untyped
- Generate TS types from SQL schema https://github.com/vramework/schemats
- https://github.com/rmp135/sql-ts Generate TypeScript interfaces from a SQL database.
- OpenAPI to TS https://github.com/drwpow/openapi-typescript
- Generate type.d from openapi spec https://github.com/sigoden/openapi/tree/main/packages/typegen-openapi
- protocol buffer messages to TS https://github.com/thesayyn/protoc-gen-ts
- Protobuff to JSON schema https://github.com/devongovett/protobuf-jsonschema
- Convert TS to flow https://github.com/zxbodya/flowts/blob/master/packages/tsflow/src/convertToFlow.ts
- Typescript for CSS modules https://github.com/mrmckeb/typescript-plugin-css-modules
- JS doc to json schema https://github.com/brettz9/jsdoc-jsonschema
- https://github.com/Surnet/swagger-jsdoc + https://github.com/ajmnz/swagger-jsdoc-indent - Generates swagger/openapi specification based on jsDoc comments and YAML files.
- https://github.com/stereobooster/type-o-rama Directory of conversion tools
- https://github.com/quicktype/quicktype - Generate types and converters from JSON, Schema, and GraphQL
- [TS to JS with JSdoc](https://github.com/futurGH/ts-to-jsdoc)
- [JSON to JSDoc](https://transform.tools/json-to-jsdoc)
- https://github.com/unjs/untyped
- GraphQL to JSONSchema https://github.com/charlypoly/graphql-to-json-schema
- https://github.com/nijikokun/generate-schema Convert JSON Objects to MySQL, JSON Schema, Mongoose, Google BigQuery, Swagger
- https://github.com/xiaobebe/extract-typescript-types

## Extra imported types

- https://github.com/krzkaczor/ts-essentials
- https://github.com/millsp/ts-toolbelt
- https://github.com/sindresorhus/type-fest
- https://github.com/Col0ring/types-kit
- https://github.com/alii/typestr
- https://github.com/ghoullier/awesome-template-literal-types
- https://github.com/jrylan/json-schema-typed JSON schema type
- https://github.com/jrylan/http-method-enum HTTP methods as a TypeScript enum.
- https://github.com/jrylan/enum-utils/
- https://github.com/ronami/meta-typing
- https://github.com/piotrwitek/utility-types
- https://github.com/Lucifier129/coproduct
- https://github.com/garronej/tsafe

## Doc Generators

- https://github.com/galvez/typejuice
- https://github.com/jsdoc2md/jsdoc-to-markdown#readme
- https://github.com/yashag/jsdoctor A smart jsdoc generator
- https://github.com/documentationjs/documentation
- https://github.com/DavidWells/microsoft-api-documenter-example using `@microsoft/api-extractor` + `@microsoft/api-documenter`
- https://github.com/TypeStrong/typedoc + https://github.com/panva/oauth4webapi/blob/51866b3d65a7ac92a8811e26e55c320f4828a7fc/package.json#L25
- https://github.com/LinusU/ts-readme-generator
- https://github.com/marijnh/getdocs-ts + https://github.com/marijnh/builddocs

## Runtime type checkers

- https://github.com/David-Kunz/derive-type Derive types dynamically by running tests to capture value combinations
- https://github.com/brielov/typed
- https://github.com/grantila/typeconv for https://github.com/grantila/suretype
- https://github.com/colinhacks/zod/ + https://github.com/fabien0102/ts-to-zod + https://github.com/alii/azs
- Tiny zod https://github.com/davidmdm/myzod
- https://github.com/ianstormtaylor/superstruct
- https://github.com/skarab42/tson - Type Safe Object Notation & Validation
- https://github.com/pelotom/runtypes
- https://github.com/vedantroy/typecheck.macro
- https://github.com/sindresorhus/is + https://github.com/sindresorhus/ts-extras
- https://github.com/sindresorhus/ow
- https://github.com/shigma/schemastery
- https://github.com/yona3/typescanner
- https://github.com/rhys-vdw/ts-auto-guard
- https://github.com/imbrn/v8n
- https://github.com/d-kimuson/type-predicates-generator
- https://github.com/milesj/optimal
- https://github.com/jquense/yup
- https://github.com/sideway/joi
- https://github.com/drummer1992/sito
- https://github.com/vitalets/micro-schema
- https://github.com/daniel7grant/dvali
- https://github.com/crinklesio/schemas
- https://github.com/facebook/prop-types
- https://github.com/elierotenberg/typed-assert
- https://github.com/suchipi/serializable-types
- https://github.com/gcanti/io-ts
- https://github.com/thenativeweb/typedescriptor
- https://github.com/thenativeweb/ensurethat
- https://github.com/thenativeweb/formats
- https://github.com/suchipi/pheno



## VScode extensions

- https://github.com/Perkovec/JSDocLivePreview
- https://github.com/zachhardesty7/jsdoc-comment-toggler/blob/master/src/extension.ts

## Msc

- [@jitl/ts-simple-type](https://github.com/DavidWells?tab=repositories&type=&language=&q=](https://github.com/justjake/ts-simple-type) - provides a simple, type-safe API for analyzing types, constructing new types, and generating code based on types.
- [typesync](https://github.com/jeffijoe/typesync) Install missing TypeScript typings for dependencies in your package.json.
- [type-coverage](https://github.com/plantain-00/type-coverage) A CLI tool to check type coverage for typescript code
- [typescript-error-reporter-action](https://github.com/Gozala/typescript-error-reporter-action) GitHub Action to diagnose TypeScript errors and report the result on PR.
- A type detection utility for JavaScript https://github.com/sapphiredev/type / https://github.com/pkdev08/klasa-v13/blob/master/src/lib/util/Type.js
- Zod to TS https://github.com/sachinraja/zod-to-ts
- eslint config https://github.com/Agoric/agoric-sdk/blob/20c4ff00adbffff067858c3c5702ae7a9e0522b8/packages/eslint-config/eslint-config.json + https://github.com/homer0/packages/tree/main/packages/personal/eslint-plugin
- https://github.com/benawad/gen-env-types - Generate a .d.ts and .env.example file from your .env file 
- Converts from JSON Schema to JSDoc https://github.com/n3ps/json-schema-to-jsdoc or https://github.com/mizuka-wu/json-schema-to-jsdoc/blob/master/src/plugins/jsonschema2jsdoc.js
- https://github.com/stereobooster/type-o-rama
- https://github.com/johnthecat/babel-plugin-jsdoc-runtime-typecheck/
- https://github.com/heavenshell/ts-lehre
- Clean theme https://github.com/cdaringe/jsdock
- https://github.com/homer0/jsdoc-ts-utils/
- https://github.com/vytenisu/npm-dts Generate index.d.ts file
- Remove typescript types https://github.com/cyco130/detype
- Babel traverse mobx to jsdoc https://github.com/Feverqwe/mst-jsdoc-gen/blob/master/getJsDoc.js
- https://github.com/zacanger/jsdoctap Test runner for doctests using JSDoc examples and node-tap. or https://github.com/TechQuery/test-example/blob/master/source/TestFile.js OR https://github.com/kiwicopple/doctest-js
- Tool to generate a single bundle of dts https://github.com/timocov/dts-bundle-generator
- https://github.com/garbles/json-schema-multi-compiler
- https://github.com/json-schema-faker/json-schema-faker
- https://github.com/typescript-cheatsheets/react
- https://github.com/gendocu-com/grpc-docs - Interactive gRPC API Documentation
- https://github.com/2fd/graphtype Generate TypeScripts definitions from GraphQL
- https://github.com/rawrmaan/restyped End-to-end typing for REST APIs with TypeScript
- https://github.com/etienne-dldc/zensql A Typescript type-safe SQL system
- https://github.com/Ff00ff/mammoth A type-safe Postgres query builder for TypeScript.
- https://github.com/JoshuaKGoldberg/TypeStat Converts JavaScript to TypeScript and TypeScript to better TypeScript.
- https://github.com/airtasker/spot Write API as code and generate other API contract formats (OpenAPI, Swagger, JSON Schema)
- https://github.com/readmeio/oas Easily create and manage OpenAPI Documents via code comments
- https://github.com/Akryum/vue-typegen scan components and generate types
- https://github.com/deanshub/data-from-types generates data from TypeScript types
- https://github.com/chasefleming/enum-xyz Enums in vanilla JS via proxy
- https://github.com/apidoc/apidoc RESTful web API Documentation Generator.
- https://github.com/twentyfourg/jest-apidoc Generate api docs from jest tests
- https://github.com/thenativeweb/is-typescript Check if project is typescript
- https://github.com/suchipi/convert-to-dts


## Examples

- https://github.com/Ethan-Arrowood/lego-world-map-designer/blob/main/index.js
- https://gitlab.com/jugglinmike/friend-off/-/blob/main/src/server/room.js
- https://github.com/Kr1an/react-jsdoc-sample + https://github.com/Kr1an/jsdoc-react-express-sample/blob/master/src/Single.js
- https://github.com/wooorm/f-ck
- https://github.com/micromark/micromark/blob/edbfa7a2d358d3264bd4524e947698cd7f7b480f/packages/micromark-util-types/index.js
- https://github.com/fenomas/noa/blob/master/src/index.js
- https://github.com/apollographql/apollo-server/issues/5097#issuecomment-822867819 + https://github.com/jaydenseric/graphql-upload/blob/master/package.json
- https://github.com/MrShoenel/orchestration-tools + https://mrshoenel.github.io/orchestration-tools/
- https://github.com/rubengomex/js-spotify-api/blob/master/src/index.js
- https://github.com/homer0/parserror/blob/c12b20e3a321e1e01f41178eceb1d3210991d40f/src/parserror.js#L240
- https://github.com/knockaway/loan-calculator/blob/master/lib/calculate-apr.js#L5-L19


## Using test code for docs

- https://github.com/linear/linear/blob/bc39d23af232f9fdbe7df458b0aaa9554ca83c57/packages/sdk/src/_tests/readme.test.ts#L57-L70 + https://github.com/linear/linear/blob/94af540244864fbe466fb933256278e04e87513e/docs/markdown-magic.config.js + https://github.com/linear/linear/blob/94af540244864fbe466fb933256278e04e87513e/docs/transforms/code-section.js
- Pull in sub sections of markdown to other files https://github.com/linear/linear/blob/93981d3a3db571e2f8efdce9f5271ea678941c43/packages/codegen-doc/README.md#L32
+ https://github.com/linear/linear/blob/93981d3a3db571e2f8efdce9f5271ea678941c43/docs/transforms/text-section.js + https://github.com/linear/linear/blame/bc39d23af232f9fdbe7df458b0aaa9554ca83c57/README.md#L42


 
