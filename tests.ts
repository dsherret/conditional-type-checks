import { IsNullableType, IsExactType, IsNonNullableType, HasType, NotHasType, assert } from "./index";

const never: never = undefined as any as never;

// IsNullableType
{
    // matching
    assert<IsNullableType<string | null>>(true);
    assert<IsNullableType<string | undefined>>(true);
    assert<IsNullableType<null | undefined>>(true); // maybe this shouldn't be true?

    // not matching
    assert<IsNullableType<string>>(never);
}

// IsNonNullableType
{
    // matching
    assert<IsNonNullableType<string>>(true);

    // not matching
    assert<IsNonNullableType<string | null>>(never);
    assert<IsNonNullableType<string | undefined>>(never);
    assert<IsNonNullableType<null | undefined>>(never); // maybe this should be true?
}

// IsExactType
{
    // matching
    assert<IsExactType<string | number, string | number>>(true);
    assert<IsExactType<string | number | Date, string | number | Date>>(true);

    // not matching
    assert<IsExactType<string | number | Date, string | number>>(never);
    assert<IsExactType<string, string | number>>(never);
}

// HasType
{
    // matching
    assert<HasType<string | number, string>>(true);
    assert<HasType<number, number>>(true);
    assert<HasType<string | number, Date | string>>(true); // maybe?

    // not matching
    assert<HasType<string | number, Date>>(never);
    assert<HasType<string, number>>(never);
}

// NotHasType
{
    // not matching
    assert<NotHasType<string | number, Date>>(true);
    assert<NotHasType<string, number>>(true);

    // not matching
    assert<NotHasType<string | number, string>>(never);
    assert<NotHasType<number, number>>(never);
    assert<NotHasType<string | number, Date | string>>(never); // should be true?
}
