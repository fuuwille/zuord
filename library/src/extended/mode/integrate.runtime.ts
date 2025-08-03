import { zuordCore as core } from "@zuord/core";

import type { ZuordModeX } from ".";


//

export const plain = core.mode.resolve([core.flags.base, core.flags.concat]) satisfies ZuordModeX.Integrate.Plain;

export const array = core.mode.resolve([core.flags.base, core.flags.unique]) satisfies ZuordModeX.Integrate.Array;