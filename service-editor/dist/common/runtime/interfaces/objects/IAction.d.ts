import { IWFExpressionData } from "../../IWorkflowExpression";
import { ActionType, CustomType } from "../common";
export interface IAction {
    actionType: ActionType;
    customType: CustomType;
    label: string;
    roles: Array<string>;
    props?: IActionProp;
}
export interface IActionProp {
    uniqueKeys?: Array<string>;
    userBound?: boolean;
    userProp?: IWFExpressionData;
    unitProp?: IWFExpressionData;
}
//# sourceMappingURL=IAction.d.ts.map