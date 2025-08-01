import { plain } from "./index.runtime";

type pickAPI = {
    readonly plain: typeof plain;
};

export declare const pick: pickAPI;

export * as Pick from "./index.types";