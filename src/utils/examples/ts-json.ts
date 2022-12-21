// https://github.com/samchon/typescript-json/tree/master#json-schema-generation
// https://github.com/samchon/typescript-json/tree/master#comment-tags
export interface TagExample {
  /* -----------------------------------------------------------
      ARRAYS
  ----------------------------------------------------------- */
  /**
   * You can limit array length like below.
   * 
   * @minItems 3
   * @maxItems 10
   * 
   * Also, you can use `@items` tag instead.
   * 
   * @items (5, 10] --> 5 < length <= 10
   * @items [7      --> 7 <= length
   * @items 12)     --> length < 12
   * 
   * Furthermore, you can use additional tags for each item.
   * 
   * @type uint
   * @format uuid
   */
  array: Array<string|number>;

  /**
   * If two-dimensional array comes, length limit would work for 
   * both 1st and 2nd level arraies. Also using additional tags 
   * for each item (string) would still work.
   * 
   * @items (5, 10)
   * @format url
   */
  matrix: string[][];

  /* -----------------------------------------------------------
      NUMBERS
  ----------------------------------------------------------- */
  /**
   * Type of number.
   * 
   * It must be one of integer or unsigned integer.
   * 
   * @type int
   * @type uint
   */
  type: number;

  /**
   * You can limit range of numeric value like below.
   * 
   * @minimum 5
   * @maximum 10
   * 
   * Also, you can use `@range` tag instead.
   * 
   * @range (5, 10] --> 5 < x <= 10
   * @range [7      --> 7 <= x
   * @range 12)     --> x < 12
   */
  range: number;

  /**
   * Step tag requires minimum or exclusiveMinimum tag.
   * 
   * 3, 13, 23, 33, ...
   * 
   * @step 10
   * @exclusiveMinimum 3
   * @range [3
   */
  step: number;

  /**
   * Value must be multiple of the given number.
   * 
   * -5, 0, 5, 10, 15, ...
   * 
   * @multipleOf 5
   */
  multipleOf: number;

  /* -----------------------------------------------------------
      STRINGS
  ----------------------------------------------------------- */
  /**
   * You can limit string length like below.
   * 
   * @minLength 3
   * @maxLength 10
   * 
   * Also, you can use `@length` tag instead.
   * 
   * @length 10      --> length = 10
   * @length [3, 7]  --> 3 <= length && length <= 7
   * @length (5, 10) --> 5 < length && length < 10
   * @length [4      --> 4 < length
   * @length 7)      --> length < 7
   */
  length: string;

  /**
   * Mobile number composed by only numbers.
   * 
   * Note that, `typescript-json` does not support flag of regex,
   * because JSON schema definition does not support it either.
   * Therefore, write regex pattern without `/` characters and flag.
   * 
   * @pattern ^0[0-9]{7,16} 
   *     -> RegExp(/[0-9]{7,16}/).test("01012345678")
   */
  mobile: string;

  /**
   * E-mail address.
   * 
   * @format email
   */
  email: string;

  /**
   * UUID value.
   * 
   * @format uuid
   */
  uuid: string;

  /**
   * URL address.
   * 
   * @format url
   */
  url: string;

  /**
   * IPv4 address.
   * 
   * @format ipv4
   */
  ipv4: string;

  /**
   * IPv6 address.
   * 
   * @format ipv6
   */
  ipv6: string;
}