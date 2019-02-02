# Conditional Type Checks

As TypeScript's type system becomes more complex, it's useful to be able to write tests for what a type should be.

This library offers reusable types to do these checks.

## Type Checks

These types do the checks:

* `IsNullableType<T>` - Checks if `T` is possibly `null` or `undefined`.
* `IsExactType<T, U>` - Checks if `T` exactly matches `U`.
* `HasType<T, U>` - Checks if `T` has `U`.
* `NotHasType<T, U>` - Checks if `T` does not have `U`.
* `IsNeverType<T>` - Checks if `T` is the never type.
* More to come...

They will resolve to the type `true` when they match and `false` otherwise.

## Ways to Test

Use either (whichever you prefer);

1. The `AssertTrue`, `AssertFalse`, or `Assert` types.
2. The `assert` function.

### Use with `AssertTrue`, `AssertFalse`, and `Assert

Doing a test:

```ts
import { AssertTrue, AssertFalse, HasType, IsNeverType, IsNullableType } from "conditional-type-checks";

const result = someFunction(someArg);

type doTest = AssertTrue<HasType<typeof result, string> | IsNullableType<typeof result>>
    | AssertFalse<IsNeverType<typeof result>>
    | Assert<HasType<typeof result, number>, true>;
```

**Warning:** Do not use an intersection type in the type parameter for `AssertTrue` and `AssertFalse` (ex. `HasType<string | number, string> & IsNeverType<never>`) because it will cause the assertion to pass if only one of the checks passes.

### Use with `assert`

Doing a test:

```ts
import { assert, IsExactType, IsNullableType } from "conditional-type-checks";

const result = someFunction(someArg);
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
