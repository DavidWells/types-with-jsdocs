// ----------------------------------------------------- typeof
// https://github.com/chunjin666/jsdoc-learning/blob/master/src/01-types/04-%40type-advanced.js#L19
// When the type of a value is more complicated and cumbersome to write, you can use `typeof` to get its type.

const userAccountDefault = {
  id: 1,
  username: 'name1',
  account: 'account',
  age: 18,
  isLogin : false ,
};

/**
 *
 * @param {typeof userAccountDefault} account
 */
export function setAccount(account) {
  console.log(account.id)
}

setAccount({
  id: 2,
  username: 'name2',
  account: 'account2',
  age: 22,
  isLogin : true,
})