# Conditional Type Checks

As TypeScript's type system becomes more complex, it's useful to be able to write tests for what a type should be.

This library offers reusable types to do these checks:

* `HasType<T, U>` - Checks if `T` has `U`.
* `NotHasType<T, U>` - Checks if `T` does not have `U`.
* `IsNullableType<T>` - Checks if `T` is possibly `null` or `undefined`.
* `IsNonNullableType<T>` - Checks if `T` is not possibly `null` or `undefined`.
* `IsExactType<T, U>` - Checks if `T` exactly matches `U`.
* More to come...

These will resolve to the type `true` when they match and `never` otherwise.

Example test:

```ts
import { IsExactType } from "conditional-type-checks";

const result = someFunction(someString);

// throws a compile error if the type of `result` is not exactly `string | number`
const exactTypeTest: IsExactType<string | number, typeof result> = true;
```

Example failure:

```ts
// causes a compile error that `true` is not assignable to `never`
const nullableTest: IsNullableType<string> = true;
```
