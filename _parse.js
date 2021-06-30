const { parse, tokenizers } = require('comment-parser/lib')

// const source = `
// /**
//  * Description may go
//  * over few lines followed by @tags
//  * @param {string} name the name parameter
//  * @param {any} value the value of any type
//  */`

const source = `
/**
* Renders a <Button /> component
* @param  {object} [props] - Button props
* @param { import("./types").Pet } p
* @param  {string} [props.text] - My button
* @param  {string} [props.textColor] - the color of the text in the button
* @param  {string} [props.bgColor] - the background color of the button
* @param  {object} [props.overrideStyles] - used to set the CSS of the button
* @return {React.ReactElement} - React component
* @example
*  <Button>
*  hi
*  </Button>
*/
export default function Button(props = {}) {
  return (
    <button>{props.text || 'my button'}</button>
  )
}`

const parsed = parse(source, {
  spacing: 'preserve',
  tokenizers: [tokenizers.tag(), tokenizers.description('preserve')],
  trim: false
})

const { inspect } = require('util')
console.log(inspect(parsed, {showHidden: false, depth: null}))