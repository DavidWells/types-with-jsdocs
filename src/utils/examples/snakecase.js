// https://twitter.com/anuraghazru/status/1444712390759575556
/**
 * @typedef {object} CardColors
 * @property {string} titleColor
 * @property {string} textColor
 * @property {string} iconColor
 */

/**
 * CamelToSnakeCase
 * @template S {string}
 * @typedef {S extends `${infer T}${infer U}`
 *  ? `${T extends Capitalize<T> ? "_" : ""}${Lowercase<T>}${CamelToSnakeCase<U>}`
 *  : S
 * } CamelToSnakeCase
 */

/**
 * Snakifies object properties
 * @template T
 * @typedef {{[K in keyof T as CamelToSnakeCase<K & string>]: T[K]}} Snakify
 */

/**
 * returns theme based colors with proper overrides and defaults
 * @param {Snakify<CardColors> & { fallbackTheme: string; theme: string }} options
 * @returns {CardColors}
 */
function getCardColors(options) {
  console.log(options);

  return {
    titleColor: "",
    iconColor: "",
    textColor: "",
  };
}

getCardColors({
  title_color: 'cool',
  text_color: 'nice',
  icon_color: 'red',
  fallbackTheme: 'blue',
  theme: 'custom'
});
