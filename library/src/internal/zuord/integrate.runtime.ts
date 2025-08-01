import { zuordType as type, ZuordType as Type } from "@zuord/type";
import { ZuordCore as Core } from "@zuord/core";

export const plain = <TBase extends Type.Plain, TInput extends Type.Plain, TMode>(base: TBase, input: TInput, mode: TMode ) => {
    const { shallow } = mode as Core.Mode.Flags;

    const result: any = {};
    const stack: Array<{ target: Type.Plain; sourceA: Type.Plain; sourceB: Type.Plain }> = [{ target: result, sourceA: base, sourceB: input }];

    while (stack.length) {
        const { target, sourceA, sourceB } = stack.pop()!;

        if (shallow) {
            Object.assign(target, sourceA, sourceB);
            continue;
        }

        const keys = new Set([...Object.keys(sourceA || {}), ...Object.keys(sourceB || {})]);

        keys.forEach(key => {
            const valA = sourceA?.[key];
            const valB = sourceB?.[key];

            if (Array.isArray(valA) && Array.isArray(valB)) {
                target[key] = array(valA, valB, mode);
            } else if (valB !== undefined && type.plain(valA) && type.plain(valB)) {
                stack.push({ target: target[key] = {}, sourceA: valA, sourceB: valB });
            } else if (valB !== undefined) {
                target[key] = valB;
            } else {
                target[key] = valA;
            }
        });
    }

    return result;
}

export const array = <TBase extends Type.Array, TInput extends Type.Array, TMode>(base: TBase, input: TInput, mode: TMode) => {
    const { concat, unique } = mode as Core.Mode.Flags;

    if (concat) {
        return unique ? Array.from(new Set([...base, ...input])) : [...base, ...input];
    }

    return input;
}