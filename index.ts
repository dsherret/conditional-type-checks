/**
 * Asserts at compile time that the provided type argument's type resolves to the expected boolean literal type.
 * @param expectTrue - True if the passed in type argument resolved to true.
 */
export function assert<T extends true | false>(expectTrue: T) {
}

/**
 * Asserts at compile time that the provided type argument's type resolves to true.
 */
export type AssertTrue<T extends true> = never;

/**
 * Asserts at compile time that the provided type argument's type resolves to false.
 */
export type AssertFalse<T extends false> = never;

/**
 * Asserts at compile time that the provided type argument's type resolves to the expected boolean literal type.
 */
export type Assert<T extends true | false, Expected extends T> = never;

/**
 * If the type has the specified type.
 */
export type Has<T, U> = Extract<T, U> extends never ? false : true;
/** @deprecated Use `Has<T, U>` */
export type HasType<T, U> = Has<T, U>;

/**
 * If the type does not have the specified type.
 */
export type NotHas<T, U> = Has<T, U> extends true ? false : true;
/** @deprecated Use `NotHas<T, U>` */
export type NotHasType<T, U> = NotHas<T, U>;

/**
 * If the type is possibly null or undefined.
 */
export type IsNullable<T> = Extract<T, null | undefined> extends never ? false : true;
/** @deprecated Use `IsNullable<T>` */
export type IsNullableType<T> = IsNullable<T>;

/**
 * If the type is the exact type.
 * @remarks This is useful for checking if two union types match exactly.
 */
export type IsExact<T, U> = Exclude<T, U> extends never ? Exclude<U, T> extends never ? true : false : false;
/** @deprecated Use `IsExactType<T, U>` */
export type IsExactType<T, U> = IsExact<T, U>;

/**
 * Checks it the type is the never type.
 */
export type IsNever<T> = [T] extends [never] ? true : false;
/** @deprecated Use `IsNever<T>` */
export type IsNeverType<T> = IsNever<T>;
