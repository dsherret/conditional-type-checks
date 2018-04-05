import { IsNullableType, IsExactType } from "./index";

// todo: more tests... kind of tired at the moment

const never: never = undefined as any as never;

// IsNullable
{
    // matching
    const match1: IsNullableType<string | null> = true;
    const match2: IsNullableType<string | undefined> = true;
    const match3: IsNullableType<null | undefined> = true; // maybe this shouldn't be true?

    // not matching
    const fail1: IsNullableType<string> = never;
}

// IsExactType
{
    // matching
    const match1: IsExactType<string | number, string | number> = true;
    const match2: IsExactType<string | number | Date, string | number | Date> = true;

    // not matching
    const fail1: IsExactType<string | number | Date, string | number> = never;
    const fail2: IsExactType<string, string | number> = never;
}
