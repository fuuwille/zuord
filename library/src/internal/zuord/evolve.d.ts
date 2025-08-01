import { plain as $plain } from "./evolve.runtime";
import { array as $array } from "./evolve.runtime";

type evolveAPI = {
    readonly plain: typeof $plain;
    readonly array: typeof $array;
}

export declare const evolve: evolveAPI;

export * as Evolve from "./evolve.types";