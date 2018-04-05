/**
 * Asserts if the type provided in the type parameter resolves to true.
 * @param expectTrue - True if the passed in type parameter resolved to true.
 */
export function assert<T extends true | false>(expectTrue: T) {
}

/**
 * If the type has the specified type.
 */
export type HasType<T, U> = Extract<T, U> extends never ? false : true;

/**
 * If the type does not have the specified type.
 */
export type NotHasType<T, U> = HasType<T, U> extends true ? false : true;

/**
 * If the type is possibly null or undefined.
 */
export type IsNullableType<T> = Extract<T, null | undefined> extends never ? false : true;

/**
 * If the type is not possibly null or undefined.
 */
export type IsNonNullableType<T> = IsNullableType<T> extends true ? false : true;

/**
 * If the type is the exact type.
 * @remarks This is useful for checking if two union types match exactly.
 */
export type IsExactType<T, U> = Exclude<T, U> extends never ? Exclude<U, T> extends never ? true : false : false;

/**
 * Checks it the type is the never type.
 */
export type IsNeverType<T> = [T] extends [never] ? true : false;
