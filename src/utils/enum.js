
/** @enum {number} */
const JSDocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
};


/** @enum {function(number): number} */
const MathFuncs = {
  add1: (n) => n + 1,
  id: (n) => -n,
  sub1: (n) => n - 1,
};
 


/**
 * @typedef {'pinball' | 'skee-ball' | 'ddr' | 'whack-a-mole'} GameName
 */

/**
 * Get an adjusted point total, based on game weight and house rules
 *  - Make sure to pass un-adjusted scores
 * @example
 * ```js
 * const adjusted = getAdjustedTotal({
 *    ddr: 2500,
 *    "whack-a-mole": 10
 * }).adjustedTotal;
 * ```
 * @param {Partial<Record<GameName, number>>} gameHistory
 * @returns {{total: number, adjustedTotal: number, avgWeight: number}} totals
 */
function getAdjustedTotal(gameHistory) {
  console.log(gameHistory.pinball)
  console.log(gameHistory['skee-ball'])
  // implementation details omitted
  return { 
    total: 2, 
    adjustedTotal: 3, 
    avgWeight: 4
  }
}