/**
 * If the type has the specified type.
 */
export type HasType<T, U> = T extends U ? true : never;

/**
 * If the type does not have the specified type.
 */
export type NotHasType<T, U> = IsNever<HasType<T, U>>;

/**
 * If the type is the never type.
 */
export type IsNever<T> = HasType<T, never>;

/**
 * If the type is possibly null or undefined.
 */
export type IsNullable<T> = T extends null | undefined ? true : never;

/**
 * If the type is not possibly null or undefined.
 */
export type IsNonNullable<T> = IsNever<IsNullable<T>>;

/**
 * If the type is the exact type.
 * @remarks This is useful for checking if two union types match exactly.
 */
export type IsExactType<T, U> = Exclude<T, U> extends never ? Exclude<U, T> extends never ? true : never : never;
