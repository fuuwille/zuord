import type { first as $first } from "./tuple.runtime";
import type { last as $last } from "./tuple.runtime";
import type { nest as $nest } from "./tuple.runtime";

type zuordTupleAPI = {
    first: typeof $first;
    last: typeof $last;
    nest: typeof $nest;
}

export declare const zuordTuple: zuordTupleAPI;

export * as ZuordTuple from "./tuple.types";