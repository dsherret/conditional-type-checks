import { IsNullableType, IsExactType, IsNonNullableType, HasType, NotHasType } from "./index";

// it seems this isNever method is necessary because assigning `never` to `true` is ok
const never: never = undefined as any as never;
const isNever: (...values: never[]) => void = () => { };

// IsNullableType
{
    // matching
    const match1: IsNullableType<string | null> = true;
    const match2: IsNullableType<string | undefined> = true;
    const match3: IsNullableType<null | undefined> = true; // maybe this shouldn't be true?

    // not matching
    const fail1: IsNullableType<string> = never;
}

// IsNonNullableType
{
    // matching
    const match1: IsNonNullableType<string> = true;

    // not matching
    const fail1: IsNonNullableType<string | null> = never;
    const fail2: IsNonNullableType<string | undefined> = never;
    const fail3: IsNonNullableType<null | undefined> = never; // maybe this should be true?
    isNever(fail1, fail2, fail3);
}

// IsExactType
{
    // matching
    const match1: IsExactType<string | number, string | number> = true;
    const match2: IsExactType<string | number | Date, string | number | Date> = true;

    // not matching
    const fail1: IsExactType<string | number | Date, string | number> = never;
    const fail2: IsExactType<string, string | number> = never;
    isNever(fail1, fail2);
}

// HasType
{
    // matching
    const match1: HasType<string | number, string> = true;
    const match2: HasType<number, number> = true;
    const match3: HasType<string | number, Date | string> = true; // maybe?

    // not matching
    const fail1: HasType<string | number, Date> = never;
    const fail2: HasType<string, number> = never;
    isNever(fail1, fail2);
}

// NotHasType
{
    // not matching
    const match1: NotHasType<string | number, Date> = true;
    const match2: NotHasType<string, number> = true;

    // not matching
    const fail1: NotHasType<string | number, string> = never;
    const fail2: NotHasType<number, number> = never;
    const fail3: NotHasType<string | number, Date | string> = never; // should be true?
    isNever(fail1, fail2, fail3);
}
