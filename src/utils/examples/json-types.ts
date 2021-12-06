/**
 * A type representing all allowed JSON primitive values.
 *
 * @public
 */
export type JsonPrimitive = number | string | boolean | null;

/**
 * A type representing all allowed JSON object values.
 *
 * @public
 */
export type JsonObject = { [key in string]?: JsonValue };

/**
 * A type representing all allowed JSON array values.
 *
 * @public
 */
export interface JsonArray extends Array<JsonValue> {}

/**
 * A type representing all allowed JSON values.
 *
 * @public
 */
export type JsonValue = JsonObject | JsonArray | JsonPrimitive;