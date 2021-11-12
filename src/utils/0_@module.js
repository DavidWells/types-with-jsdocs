/** @module User */

const defaultUserName = "bob";

/**
 * Hello function
 * @param {string} name - person name
 */
function sayHello(name) {
  alert("hello " + name || defaultUserName);
}