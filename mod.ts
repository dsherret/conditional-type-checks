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
 * Checks if type `T` has the specified type `U`.
 */
export type Has<T, U> = IsAny<T> extends true ? true
  : IsAny<U> extends true ? false
  : Extract<T, U> extends never ? false
  : true;

/**
 * Checks if type `T` does not have the specified type `U`.
 */
export type NotHas<T, U> = Has<T, U> extends false ? true : false;

/**
 * Checks if type `T` is possibly null or undefined.
 */
export type IsNullable<T> = Extract<T, null | undefined> extends never ? false : true;

/**
 * Checks if type `T` exactly matches type `U`.
 */
export type IsExact<T, U> = TupleMatches<AnyToBrand<T>, AnyToBrand<U>> extends true
  ? TupleMatches<DeepPrepareIsExact<T>, DeepPrepareIsExact<U>> extends true ? true
  : false
  : false;

type DeepPrepareIsExact<T, VisitedTypes = never> = {
  // make optional properties required
  [P in keyof T]-?: IsAny<T[P]> extends true ? AnyBrand : DeepPrepareIsExactProp<T[P], T, VisitedTypes>;
};

type DeepPrepareIsExactProp<Prop, Parent, VisitedTypes> = Prop extends VisitedTypes
  // recursive, bail
  ? Prop
  // not recursive, keep going and add the parent type as a visited type
  : DeepPrepareIsExact<Prop, VisitedTypes | Parent>;

/**
 * Checks if type `T` is the `any` type.
 */
// https://stackoverflow.com/a/49928360/3406963
export type IsAny<T> = 0 extends (1 & T) ? true : false;

/**
 * Checks if type `T` is the `never` type.
 */
export type IsNever<T> = [T] extends [never] ? true : false;

/**
 * Checks if type `T` is the `unknown` type.
 */
export type IsUnknown<T> = unknown extends T ? ([T] extends [null] ? false : true) : false;

type TupleMatches<T, U> = Matches<[T], [U]>;
type Matches<T, U> = T extends U ? U extends T ? true : false : false;

type AnyToBrand<T> = IsAny<T> extends true ? AnyBrand : T;
type AnyBrand = { __conditionalTypeChecksAny__: undefined };
