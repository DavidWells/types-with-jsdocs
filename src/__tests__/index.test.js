/* initialize JSDOM */
// import './misc/_setup-tests.js' // with jsdom pkh // OR -r global-jsdom/register
// import { setupJSDOM } from './misc/_initJSDom'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import React from 'react'
import { fireEvent, render } from "@testing-library/react"
import Button from '../0_Button_PropTypes_Class'
/* Ignoring CSS modules https://github.com/avajs/ava/issues/2038#issuecomment-864300925 */
import TodoList from '../TodoList'
import { itSupportsClassName } from './misc/utils'

/*
https://github.com/modosc/global-jsdom
https://www.npmjs.com/package/mock-css-modules
*/

test('Tests run', async () => {
  assert.is(true, true)
})

test("Renders component in test", async () => {
  const MyComponent = () => {
    return (
      <>
        <div>
          <span>inside</span>
          <span>another</span>
        </div>
        <div>outside</div>
      </>
    );
  };

  const result = render(<MyComponent />)
  assert.ok(result)
  // console.log('result.container.innerHTML', result.container.innerHTML)
  assert.match(result.container.innerHTML, 'inside')
})

test("Class component renders", async () => {
  // Ensure it supports classes
  assert.ok(itSupportsClassName(Button))

  const result = render(<Button>hi</Button>)
  assert.ok(result)
  console.log('result.container.innerHTML', result.container.innerHTML)
  // assert.match(result.container.innerHTML, 'inside')
 
})

test("component with css modules renders", async () => {
  const result = render(<TodoList />)
  assert.ok(result)
  // console.log('result.container.innerHTML', result.container.innerHTML)
  assert.match(result.container.innerHTML, 'Complain about miners')
})

// Needed to exit process once tests finish
// @ts-ignore
test.after(() => setTimeout(() => process.exit(0), 300))

test.run()