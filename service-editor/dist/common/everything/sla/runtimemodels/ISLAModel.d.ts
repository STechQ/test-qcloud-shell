import { IExpressionData } from "../../dataType/runtimemodels/IExpression";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export interface ISLAModel extends IModelBaseFields {
    name: string;
    description: string;
    slaInfo: SLABase[];
    initialPriority?: number;
    userId?: IExpressionData;
}
export interface SLABase {
    escalationFunctionId: string;
    type: SLAType;
    interval: TimeInterval;
    useBusinessDays: boolean;
    priority?: number;
    description: string;
    name: string;
}
export interface TimeInterval {
    days?: number;
    hours?: number;
    minutes?: number;
}
export declare enum SLAType {
    GOAL = "GOAL",
    DEADLINE = "DEADLINE",
    CRITICAL = "CRITICAL"
}
export declare const defaultSLATypes: SLABase[];
//# sourceMappingURL=ISLAModel.d.ts.map