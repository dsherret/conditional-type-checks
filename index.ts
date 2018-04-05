/**
 * Asserts if the
 * @param expectTrue - If the passed in type parameter is expected to be true.
 */
export function assert<T extends true>(expectTrue: T) {
}

/**
 * If the type has the specified type.
 */
export type HasType<T, U> = T extends U ? true : never;

/**
 * If the type does not have the specified type.
 */
export type NotHasType<T, U> = HasType<T, U> extends never ? true : never;

/**
 * If the type is possibly null or undefined.
 */
export type IsNullableType<T> = T extends null | undefined ? true : never;

/**
 * If the type is not possibly null or undefined.
 */
export type IsNonNullableType<T> = IsNullableType<T> extends never ? true : never;

/**
 * If the type is the exact type.
 * @remarks This is useful for checking if two union types match exactly.
 */
export type IsExactType<T, U> = Exclude<T, U> extends never ? Exclude<U, T> extends never ? true : never : never;

// this doesn't work so don't add it
// export type IsNeverType<T> = T extends never ? true : never;
