import { IExpressionData } from "./IExpression";
export interface ISwitchProps {
    type: 'switch';
    name: string;
    description: string;
    cases: Record<string, ICaseExp>;
    defaultExitPoint: string;
}
export interface ICase {
    left: Expression;
    operator: Operator;
    right: Expression;
}
export type Operator = "and" | "or" | "eq" | "ne" | "in" | "nin" | "gt" | "gte" | "lt" | "lte";
export type Expression = IVariableExp | ICaseExp;
export interface IExpressionBase {
    vType: "variable" | "case";
    negation?: boolean;
}
export interface IVariableExp extends IExpressionBase {
    vType: 'variable';
    v: IExpressionData;
}
export interface ICaseExp extends IExpressionBase {
    vType: 'case';
    v: ICase;
}
//# sourceMappingURL=ISwitch.d.ts.map