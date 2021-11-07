
// https://fettblog.eu/typescript-jsdoc-superpowers/
// Using typeof referrence to defaultCallback

/**
 * @param {number} status The status code as a number
 * @param {string} data The data to work with
 */
function defaultCallback(status, data) {
  if(status === 200) {
    document.body.innerHTML = data
  }
}

/**
 * @param {string} url the URL to load data from
 * @param {typeof defaultCallback} cb what to do afterwards
 */
function loadData(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url)
  xhr.onload = () => {
    cb(xhr.status, xhr.responseText)
  }
}