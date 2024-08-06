import { ObjectWithRoles } from "../runtimemodels/IWorkflow";
import { ActionType, CustomType } from "../runtimemodels/types";
export type IAction = ObjectWithRoles & {
    actionType: ActionType;
    customType: CustomType;
    label: string;
    props?: IActionProp;
};
export type IActionProp = {
    uniqueKeys?: Array<string>;
    userBound?: boolean;
};
//# sourceMappingURL=IAction.d.ts.map