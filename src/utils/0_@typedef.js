/**
 * First name & last name
 * @typedef {{firstName: string, lastName: string}} BrokenName
 */

/**
 * @param {string} name
 * @returns {BrokenName}
 */
function breakName(name) {
  const [first, ...rest] = name.split(' ')

  return {
    firstName: first, 
    lastName: rest.join(' ')
  }
}

// ───────────────────────
// Combining typedefs https://github.com/microsoft/TypeScript/issues/42048

/** @typedef {{ name: string, age: number }} Bar - A Bar thing of sorts. */ // <-- This is for documentation tooling, and TS understand it.

/** @typedef {Bar & { color: string }} ExtendBar - A Foo type of thing. */ // <-- This is for documentation tooling, and TS understand it.

/** @type {ExtendBar} */
const combinedBar = { name: 'bob', age: 21, color: 'purple' }


// ───────────────────────
// https://github.com/jsdoc/jsdoc/issues/1890#issuecomment-774715480

/**
 * @typedef {object} Employee
 * @property {string} name - The name of an employee.
 * @property {string} department - The employee's department.
 */
/**
 * @typedef {object} Company
 * @property {string} name - The name of the company.
 * @property {Employee[]} employees - The employees who are responsible for the project.
 */
/**
 * Assign the project to a list of employees of the given company.
 * @param {Company} company - The company this project has been contracted to.
 */
function testFunc(company) { }


// ───────────────────────

/**
* @typedef FieldType
* @property {string} Text "text"
* @property {string} Date "date"
* @property {string} DateTime "datetime"
* @property {string} Number "number"
* @property {string} Currency "currency"
* @property {string} CheckBox "checkbox"
* @property {string} ComboBox "combobox"
* @property {string} Dropdownlist "dropdownlist"
* @property {string} Label "label"
* @property {string} TextArea "textarea"
* @property {string} JsonEditor "jsoneditor"
* @property {string} NoteEditor "noteeditor"
* @property {string} ScriptEditor "scripteditor"
* @property {string} SqlEditor "sqleditor"
*/

/** @type {FieldType} */
const fieldtype = {
  Text: "text",
  Date: "date",
  DateTime: "datetime",
  Number: "number",
  Currency: "currency",
  CheckBox: "checkbox",
  ComboBox: "combobox",
  Dropdownlist: "dropdownlist",
  Label: "label",
  TextArea: "textarea",
  JsonEditor: "jsoneditor",
  NoteEditor: "noteeditor",
  ScriptEditor: "scripteditor",
  SqlEditor: "sqleditor",
}


// ───────────────────────
// https://github.com/n3ps/json-schema-to-jsdoc/blob/master/test.js#L803

/**
 * @typedef {object}
 * @property {string} [aStringProp]
 * @property {object} [anObjectProp]
 * @property {boolean} [anObjectProp.aNestedProp] Boolean desc.
 * @property {array} [anObjectProp.aNestedArrayProp] Array desc.
 * @property {number} anObjectProp.aNestedArrayProp
 * @property {?string} [nullableType]
 * @property {string|number} [multipleTypes]
 * @property {"hello"|"there"|"world"} [enumStringProp]
 */

// ───────────────────────
// https://github.com/artdecocode/typal

/**
 * @typedef {Object} SessionConfig Description of Session Config.
 * @prop {string} key The cookie key.
 * @prop {number|'session'} [maxAge=86400000] maxAge in ms. Default is 1 day.
 * @prop {boolean} [overwrite] Can overwrite or not. Default `true`.
 * @prop {boolean} [httpOnly] httpOnly or not or not. Default `true`.
 * @prop {boolean} [signed=false] Signed or not. Default `false`.
 * @prop {boolean} [rolling] Force a session identifier cookie to be set.
 * @prop {boolean} [renew] Renew session when session is nearly expired.
 */


// ───────────────────────
// https://github.com/homer0/jsdoc-ts-utils/blob/main/src/typedef.js#L26

/**
 * @typedef {Object} TSUtilsOptions
 * @property {boolean} typedefImports
 * Whether or not to enable the feature that removes `typedef` statements that use
 * `import`.
 * Default `true`.
 * @property {boolean} typeOfTypes
 * Whether or not to enable the feature that replaces `{typeof T}` with `{Class.<T>}`.
 * Default `true`.
 * @property {boolean} extendTypes
 * Whether or not to enable the feature that allows intersections to be reformatted.
 * Default `true`.
 * @property {boolean} modulesOnMemberOf
 * Whether or not to enable the feature that fixes modules' paths on `memeberof` so they
 * can use dot notation. Default `true`.
 * @property {boolean} modulesTypesShortName
 * Whether or not to register modules types without the module path too. Default `true`.
 * @property {boolean} parentTag
 * Whether or not to transform all `parent` tags into `memberof`. Default `true`.
 * @property {boolean} typeScriptUtilityTypes
 * Whether or not to add the external utility types from TypeScript. Default `true`.
 * @property {?Object.<string, string>} tagsReplacement
 * A dictionary of tags to replace, they keys are the tags being used and the values the
 * tag that should be used. Default `null`.
 */