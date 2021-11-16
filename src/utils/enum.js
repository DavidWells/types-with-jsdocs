
/**
 * Simple Enum
 * @param {'a'|'b'} blabla 
 */
function fn (blabla) {}
// usage
fn('a')

// ───────────────────────


/** @enum {number} */
const JSDocState = {
  BeginningOfLine: 0,
  SawAsterisk: 1,
  SavingComments: 2,
};


/** @enum {number} */
const HTTPStatusCodes = {
  ok: 200,
  forbidden: 403,
  notFound: 404,
  // errorsWhenChecked: 'me' // 💣
}

/** 
 * Types of fruit
 * @enum {string} 
 */
const fruits = {
  A: 'apples',
  B: 'banana',
  C: 'carrots',
}

/** @enum {function(number): number} */
const MathFuncs = {
  add1: (n) => n + 1,
  id: (n) => -n,
  sub1: (n) => n - 1,
};

/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
export const triState = {
  /** The true value */
  TRUE: 1,
  FALSE: -1,
  /** @type {boolean} */
  MAYBE: true,
};

/**
 * String enum function example
 * @enum {function(string): string}
 * @description
 * Functions that return a string
 */
const TestFuncs = {
  one: (n) => n + 'one',
  two: (n) => n + 'two',
  three: (n) => n + 'xyz',
};

TestFuncs.two;

// ───────────────────────
// Enum into Array https://medium.com/@antonkrinitsyn/jsdoc-frequent-patterns-436dad6dbee1

/**
 * Type of player
 * @typedef {'ally' | 'enemy'} PlayerType
 */

/**
 * Team players
 * @typedef Player
 * @property {PlayerType} type
 */

/** @type {Player[]} */
const players = [
  {
    type: 'enemy',
  }
]

// ────────Using type defs ───────────────

/**
 * @typedef {Object} Food
 * @property {string} name - What the food should be called
 * @property {('meat' | 'veggie' | 'other')} type - The food's type
 */

/** @type Food */
export const food = {
  name: 'beef',
  type: 'meat',
}

// ────────Using literal type arrays ───────────────

/**
 * Tuple with literal type
 * @type {[
  '12px',
  '16px',
  '20px',
  '24px',
]}
 */
const sizesScale = [
  '12px', // 0
  '16px', // 1
  '20px', // 2
  '24px', // 3
];

// The literal types will follow sub-sequence assignment like so:
const sizes = {
  ...sizesScale,
  xs: sizesScale[0],
  sm: sizesScale[1],
  md: sizesScale[2],
  lg: sizesScale[3],
}

// ────────Using typedefs ───────────────

/**
 * @typedef {'one' | 'two' | 'three' | 'four'} SpecialEnum
 */

/** 
 * Types of fruit
 * @enum {string}
 */
const otherThing = {
  one: 'one',
  two: 'two',
  three: 'three',
}


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

// ───────────────────────
// https://gist.github.com/nicolashery/b30d0464dbd016aa3978129652aa1385

/**
 * @typedef {string} RuneId
 */

/** @type {RuneTierE} */
export const RuneTierE = {
  COMMON: 1,
  SEMIRARE: 2,
  RARE: 3,
};

/** @type {{name: RuneId, tier: RuneTier}[]} */
const runes = [
  { name: "El", tier: RuneTierE.COMMON },
  { name: "Eld", tier: RuneTierE.COMMON }
]

// ───────────────────────
// https://gist.github.com/nicolashery/b30d0464dbd016aa3978129652aa1385

/** @type {Models.ProductTagEnum} */
const ProductTag = {
  Popular: "popular",
  Featured: "featured",
  Sale: "sale"
};

/**
 * @param {Models.Product} product
 * @returns {boolean}
 */
function isPromoted(product) {
  return (
    product.tags.indexOf(ProductTag.Featured) >= 0 &&
    product.tags.indexOf(ProductTag.Sale) >= 0
  );
}

// ───────────────────────

const assert = require('assert')

/** @enum {string} */
export const DealStage = {
  EVAL: required('HUBSPOT_DEALSTAGE_EVAL'),
  CLOSED_WON: required('HUBSPOT_DEALSTAGE_CLOSED_WON'),
  CLOSED_LOST: required('HUBSPOT_DEALSTAGE_CLOSED_LOST'),
};

/**
 * 
 * @param {string} key 
 * @returns {string}
 */
function required(key) {
  const value = process.env[key];
  assert.ok(value, `ENV key ${key} is required`);
  return value;
}

/**
 * @param {DealStage} dealstage 
 */
function dostuff(dealstage) {
  if (dealstage === DealStage.CLOSED_LOST) {

  }
  // 🔥 BROKEN
  if (dealstage === 'hi') {
    
  }
}


// ─────────Reference enum value in a typedef ──────────────
// https://github.com/jsdoc/jsdoc/issues/1740#issuecomment-603123567
// Broken

/** @enum {number} */
const TArticleRefineFilterType = {
  /** @member {number} */
  ByDepartment: 0,
  /** @member {number} */
  ByTag: 1
}

/**
 * @typedef TArticleRefineFilterByDepartmentInfo
 * @property {typeof TArticleRefineFilterType.ByDepartment} type
 */

/** @type TArticleRefineFilterByDepartmentInfo */
const depInfo = {
  type: 1 // Broken can be any number
}


// ───────────────────────
// https://github.com/MrShoenel/orchestration-tools/blob/master/lib/JobQueue.js#L436

/**
 * @readonly
 * @enum {Number}
 */
const JobQueueCapacityPolicy = {
	/**
	 * Ignore the policy, and keep on enqueueing items, regardless of
	 * whether the maximum capacity is reached or not.
	 */
	Ignore: 0,
	/**
	 * When the maximum capacity is reached, new items added to the
	 * queue will be silently discarded.
	 */
	Discard: 1,
	/**
	 * When enqueueing new items and the maximum capacity is already
	 * reached, an Error is thrown.
	 */
	ThrowError: 2,
};


// ───────────────────────
// https://github.com/chunjin666/jsdoc-learning/blob/master/src/03-enum/%40enum.js#L4

/** @enum {number} */
const  OrderState  =  {
  NotPaid : 0 ,
  Paid: 1,
  Failure: 2,
};

/**
 *
 * @param {OrderState} state
 */
function checkOrderState(state) {
  switch (state) {
    case  OrderState.NotPaid :
      // ...
      break;
    case OrderState.Paid:
      // ...
      break;
    case OrderState.Failure:
      // ...
      break;
    // default:
    //   throw Error("invalid state")
  }
}

checkOrderState(OrderState.NotPaid); // Ok


// ------------------------------------------------------------------------------
// You can also write the enumeration type as a more precise union type,

/**
 * @enum {'development' | 'staging' | 'production'}
 */
const EnvTypes = {
  /** @type {'development'} */
  Development: 'development',
  /** @type {'staging'} */
  Staging: 'staging',
  /** @type {'production'} */
  Production: 'production',
};

/**
* @type {Record <EnvTypes, {baseURL: string, title ?: string}>}
 */
const AppConfig = {
  [EnvTypes.Development] : { baseURL : '/dev' , title : 'xxx'  } ,
  [EnvTypes.Staging] : { baseURL : '/stage' , title : 'yyy'  } ,
  [EnvTypes.Production] : { baseURL : '/prod' , title : 'zzz'  } ,
};

/** @type {EnvTypes} */
let env = 'staging';

// The type of return value can be correctly inferred here
function getAppConfigGlobal()  {
  return AppConfig[env];
}

/**
 * @param {EnvTypes} envType
 * @returns 
 */
function getAppConfig(envType)  {
  return AppConfig[envType];
}

const xyz = getAppConfig('production')
console.log(xyz.baseURL)