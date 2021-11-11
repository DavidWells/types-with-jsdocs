// https://zenn.dev/asama/articles/0c66573e488b22

/** @type {HTMLElement|null} */
const myElement = document.querySelector('.my-div');
if (myElement) {
  myElement.dataset.myData = "";
}

/** @type {Window} */
var win;