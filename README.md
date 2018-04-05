# Conditional Type Checks

As TypeScript's type system becomes more complex, it's useful to be able to write tests for what a type should be.

This library offers reusable types to do these checks.

## Type Checks

These types do the checks:

* `IsNullableType<T>` - Checks if `T` is possibly `null` or `undefined`.
* `IsNonNullableType<T>` - Checks if `T` is not possibly `null` or `undefined`.
* `IsExactType<T, U>` - Checks if `T` exactly matches `U`.
* `HasType<T, U>` - Checks if `T` has `U`.
* `NotHasType<T, U>` - Checks if `T` does not have `U`.
* `IsNeverType<T>` - Checks if `T` is the never type.
* More to come...

They will resolve to the type `true` when they match and `false` otherwise.

## Use

Doing a test:

```ts
import { assert, IsExactType, IsNullableType } from "conditional-type-checks";

const result = someFunction(someParam);
// compile error if the type of `result` is not exactly `string | number`
assert<IsExactType<typeof result, string | number>>(true);
```

Failure:

```ts
// causes a compile error that `true` is not assignable to `false`
assert<IsNullableType<string>>(true); // string is not nullable
```

## Install

```
npm install --save-dev conditional-type-checks
```
