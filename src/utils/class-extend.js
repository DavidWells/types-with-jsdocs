// https://fettblog.eu/typescript-jsdoc-superpowers/

/**
 * @template T
 * @extends {Set<T>}
 */
class SortableSet extends Set {
  // ...
}


/**
 * @augments {Set<string>}
 */
class StringSet extends Set {
  // ...
}