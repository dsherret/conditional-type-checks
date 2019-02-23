import { IsNullable, IsExact, Has, NotHas, IsNever, IsUnknown,
    assert, AssertTrue, AssertFalse, Assert } from "./index";

// IsNullable
{
    // matching
    assert<IsNullable<string | null>>(true);
    assert<IsNullable<string | undefined>>(true);
    assert<IsNullable<null | undefined>>(true); // maybe this shouldn't be true?

    // not matching
    assert<IsNullable<string>>(false);
}

// IsExact
{
    // matching
    assert<IsExact<string | number, string | number>>(true);
    assert<IsExact<string | number | Date, string | number | Date>>(true);
    assert<IsExact<string | undefined, string | undefined>>(true);

    // not matching
    assert<IsExact<string | number | Date, string | number>>(false);
    assert<IsExact<string, string | number>>(false);
    assert<IsExact<string | undefined, string>>(false);
}

// Has
{
    // matching
    assert<Has<string | number, string>>(true);
    assert<Has<number, number>>(true);
    assert<Has<string | number, Date | string>>(true); // maybe?

    // not matching
    assert<Has<string | number, Date>>(false);
    assert<Has<string, number>>(false);
}

// NotHas
{
    // matching
    assert<NotHas<string | number, Date>>(true);
    assert<NotHas<string, number>>(true);

    // not matching
    assert<NotHas<string | number, string>>(false);
    assert<NotHas<number, number>>(false);
    assert<NotHas<string | number, Date | string>>(false); // should be true?
}

// IsNever
{
    // matching
    assert<IsNever<never>>(true);

    // not matching
    assert<IsNever<string>>(false);
    assert<IsNever<any>>(false);
    assert<IsNever<unknown>>(false);
}

// IsUnknown
{
    // matching
    assert<IsUnknown<unknown>>(true);

    // not matching
    assert<IsUnknown<string>>(false);
    assert<IsUnknown<any>>(false);
    assert<IsUnknown<never>>(false);
}

// AssertTrue
{
    type test = AssertTrue<IsNever<never>>;
}

// AssertFalse
{
    type test = AssertFalse<IsNever<string>>;
}

// Assert
{
    type test = Assert<Has<string | number, number>, true>
        | Assert<Has<string | number, Date>, false>;
}