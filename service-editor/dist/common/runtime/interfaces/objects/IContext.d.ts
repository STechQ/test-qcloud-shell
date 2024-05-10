import { IProcessInstance } from "../namedobjects/IProcessInstance";
import { EntityInstance } from "./EntityInstance";
export interface IContext {
    entity: EntityInstance;
    vars: Record<string, any>;
    processInstance: IProcessInstance;
}
//# sourceMappingURL=IContext.d.ts.map