import { integrate as $integrate } from "./zuord.runtime";
import { integrateArray as $integrateArray } from "./zuord.runtime";
import { merge as $merge } from "./zuord.runtime";
import { mergeArray as $mergeArray } from "./zuord.runtime";
import { evolve as $evolve } from "./zuord.runtime";
import { pick as $pick } from "./zuord.runtime";
import { omit as $omit } from "./zuord.runtime";

type zuordAPI = {
    integrate: typeof $integrate;
    integrateArray: typeof $integrateArray;
    merge: typeof $merge;
    mergeArray: typeof $mergeArray;
    evolve: typeof $evolve;
    pick: typeof $pick;
    omit: typeof $omit;
}

export declare const zuord: zuordAPI;

export * as Zuord from "./zuord.types";