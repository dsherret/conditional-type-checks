# Conditional Type Checks

[![npm version](https://badge.fury.io/js/conditional-type-checks.svg)](https://badge.fury.io/js/conditional-type-checks)
[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

As TypeScript's type system becomes more complex it's useful to be able to write tests for what a type should be.

This library offers reusable conditional types to do these checks.

## Type Checks

These will resolve to the type `true` when they match and `false` otherwise.

* `IsNullable<T>` - Checks if `T` is possibly `null` or `undefined`.
* `IsExact<T, U>` - Checks if `T` exactly matches `U`.
* `Has<T, U>` - Checks if `T` has `U`.
* `NotHas<T, U>` - Checks if `T` does not have `U`.
* `IsAny<T>` - Checks if `T` is the `any` type.
* `IsNever<T>` - Checks if `T` is the `never` type.
* `IsUnknown<T>` - Checks if `T` is the `unknown` type.
* More to come...

## Ways to Test

Use what you prefer:

1. The `AssertTrue`, `AssertFalse`, or `Assert` types.
2. The `assert` function.

### Use with `AssertTrue`, `AssertFalse`, and `Assert`

Doing a test:

```ts
import { AssertTrue, AssertFalse, Has, IsNever, IsNullable } from "conditional-type-checks";

const result = someFunction(someArg);

type doTest = AssertTrue<Has<typeof result, string> | IsNullable<typeof result>>
    | AssertFalse<IsNever<typeof result>>
    | Assert<Has<typeof result, number>, true>;
```

**Warning:** Do not use an intersection type between checks (ex. `Has<string | number, string> & IsNever<never>`) because it will cause everything to pass if only one of the checks passes.

### Use with `assert`

Doing a test:

```ts
import { assert, IsExact } from "conditional-type-checks";

const result = someFunction(someArg);

// compile error if the type of `result` is not exactly `string | number`
assert<IsExact<typeof result, string | number>>(true);
```

Failure:

```ts
// causes a compile error that `true` is not assignable to `false`
assert<IsNullable<string>>(true); // string is not nullable
```

## Install

```
npm install --save-dev conditional-type-checks
```
