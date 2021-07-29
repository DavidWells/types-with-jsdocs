/*
 Example of object shorthand with optional 
*/

/**
 *	@param {string} selector
 *	@param {{
 *	 name?: string
 *	 stopIf?: () => boolean
 *	 context?: Document | HTMLElement
 *	 timeout?: number
 *	}} options
 *	@returns {Promise<HTMLElement>}
*/
function getElement(selector, {
  name = '',
  stopIf = () => true,
  context = document,
  timeout = Infinity,
} = {}){
  return new Promise((resolve) => {

  })
}

getElement('test')
/* // type errors
getElement('test', { unexpected: true })
getElement('test', { timeout: '123' })
/** */