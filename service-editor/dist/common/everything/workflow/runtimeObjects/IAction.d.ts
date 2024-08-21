import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { ObjectWithRoles, StepFlowModelPropType } from "../runtimemodels/IWorkflow";
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
    validation?: IExpressionData;
    function?: StepFlowModelPropType;
};
//# sourceMappingURL=IAction.d.ts.map