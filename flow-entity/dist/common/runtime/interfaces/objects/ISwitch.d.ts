import { IWFExpressionData } from "../../IWorkflowExpression";
export interface ISwitchProps {
    type: 'switch';
    name: string;
    description: string;
    cases: Record<string, ICaseExp | IDefaultCase>;
}
export interface ICaseInfo {
    props?: {
        name: string;
        _name: string;
    };
}
export interface ICase extends ICaseInfo {
    left: Expression;
    operator: Operator;
    right: Expression;
}
export interface IDefaultCase extends ICaseInfo {
}
export type Operator = "and" | "or" | "eq" | "ne" | "in" | "nin" | "gt" | "gte" | "lt" | "lte";
export type Expression = IVariableExp | ICaseExp;
export interface IExpressionBase {
    vType: "variable" | "case";
    negation?: boolean;
}
export interface IVariableExp extends IExpressionBase {
    vType: 'variable';
    v: IWFExpressionData;
}
export interface ICaseExp extends IExpressionBase, ICaseInfo {
    vType: 'case';
    v: ICase;
}
//# sourceMappingURL=ISwitch.d.ts.map