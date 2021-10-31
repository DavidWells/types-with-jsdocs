/* initialize JSDOM */
// import './misc/_setup-tests.js' // with jsdom pkh // OR -r global-jsdom/register
// import { setupJSDOM } from './misc/_initJSDom'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import React from 'react'
import { render } from "@testing-library/react"

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
  console.log('result.container.innerHTML', result.container.innerHTML)
  assert.match(result.container.innerHTML, 'inside')
})

// Needed to exit process once tests finish
// @ts-ignore
test.after(() => setTimeout(() => process.exit(0), 300))

test.run()