import { IsNullableType, IsExactType, HasType, NotHasType, IsNeverType, assert, AssertTrue, AssertFalse,
    Assert } from "./index";

// IsNullableType
{
    // matching
    assert<IsNullableType<string | null>>(true);
    assert<IsNullableType<string | undefined>>(true);
    assert<IsNullableType<null | undefined>>(true); // maybe this shouldn't be true?

    // not matching
    assert<IsNullableType<string>>(false);
}

// IsExactType
{
    // matching
    assert<IsExactType<string | number, string | number>>(true);
    assert<IsExactType<string | number | Date, string | number | Date>>(true);
    assert<IsExactType<string | undefined, string | undefined>>(true);

    // not matching
    assert<IsExactType<string | number | Date, string | number>>(false);
    assert<IsExactType<string, string | number>>(false);
    assert<IsExactType<string | undefined, string>>(false);
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
    // matching
    assert<NotHasType<string | number, Date>>(true);
    assert<NotHasType<string, number>>(true);

    // not matching
    assert<NotHasType<string | number, string>>(false);
    assert<NotHasType<number, number>>(false);
    assert<NotHasType<string | number, Date | string>>(false); // should be true?
}

// IsNeverType
{
    // matching
    assert<IsNeverType<never>>(true);

    // not matching
    assert<IsNeverType<string>>(false);
}

// AssertTrue
{
    type test = AssertTrue<IsNeverType<never>>;
}

// AssertFalse
{
    type test = AssertFalse<IsNeverType<string>>;
}

// Assert
{
    type test = Assert<HasType<string | number, number>, true>
        | Assert<HasType<string | number, Date>, false>;
}