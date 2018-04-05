import { IsNullableType, IsExactType, IsNonNullableType, HasType, NotHasType, assert } from "./index";

// IsNullableType
{
    // matching
    assert<IsNullableType<string | null>>(true);
    assert<IsNullableType<string | undefined>>(true);
    assert<IsNullableType<null | undefined>>(true); // maybe this shouldn't be true?

    // not matching
    assert<IsNullableType<string>>(false);
}

// IsNonNullableType
{
    // matching
    assert<IsNonNullableType<string>>(true);

    // not matching
    assert<IsNonNullableType<string | null>>(false);
    assert<IsNonNullableType<string | undefined>>(false);
    assert<IsNonNullableType<null | undefined>>(false); // maybe this should be true?
}

// IsExactType
{
    // matching
    assert<IsExactType<string | number, string | number>>(true);
    assert<IsExactType<string | number | Date, string | number | Date>>(true);

    // not matching
    assert<IsExactType<string | number | Date, string | number>>(false);
    assert<IsExactType<string, string | number>>(false);
}

// HasType
{
    // matching
    assert<HasType<string | number, string>>(true);
    assert<HasType<number, number>>(true);
    assert<HasType<string | number, Date | string>>(true); // maybe?

    // not matching
    assert<HasType<string | number, Date>>(false);
    assert<HasType<string, number>>(false);
}

// NotHasType
{
    // not matching
    assert<NotHasType<string | number, Date>>(true);
    assert<NotHasType<string, number>>(true);

    // not matching
    assert<NotHasType<string | number, string>>(false);
    assert<NotHasType<number, number>>(false);
    assert<NotHasType<string | number, Date | string>>(false); // should be true?
}
