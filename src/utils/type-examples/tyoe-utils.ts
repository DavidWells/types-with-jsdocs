// https://github.com/shm-open/utilities/blob/master/src/types.ts

/**
 * Make a Partial<T> type with all its field types as partial - recursively
 */
export type RecursivePartial<T> = {
    [P in keyof T]?: T[P] extends (infer U)[]
        ? RecursivePartial<U>[]
        :
        T[P] extends object
        ? RecursivePartial<T[P]>
        : T[P];
};

/**
 * Nullable<T> could be T or undefined or null
 */
export type Nullable<T> = T | undefined | null;

/**
 * Extract the type of object property
 */
export type PropertyType<T extends object, K extends keyof T> = T[K];

/**
 * Extract the type of array item
 */
export type ArrayItemType<T extends unknown[]> = T[number];

/**
 * Extract the types array of function parameters
 * @deprecated please use ts built-in Parameters<T> instead.
 */
export type ParametersTypes<T> = T extends (...args: infer P) => unknown ? P : [];

/**
 * Convert interface to type, so it can be used to work with Record<string, unknown>
 * check out this thread for details
 * https://github.com/microsoft/TypeScript/issues/15300#issuecomment-760165845
 * @example foo as Typify<typeof foo>
 */
export type Typify<T> = { [K in keyof T]: T[K] };

/**
 * convert object into typified instance, it's nothing more than `as Typify<typeof foo>`
 * just works as an shorthand of explicit cast.
 * @param target interface type object
 * @returns the target itself, typified
 */
export function typify<T>(target: T): Typify<T> {
    return target;
}

/**
 * Covert type T to Promise<T> except for Promises
 */
export type Promisify<T> = T extends Promise<unknown>
    ? T
    : T extends boolean
    ? Promise<boolean>
    : Promise<T>;