import { RuntimeMessage } from "./StepRuntime";
export interface IExpressionContext {
    msg: RuntimeMessage;
}
type ExpressionGetterReturnType = string | number | boolean | RuntimeMessage | undefined;
export type ExpressionGetter = (expression: IExpressionData, context: IExpressionContext) => Array<ExpressionGetterReturnType> | ExpressionGetterReturnType;
export type ExpressionSetter = (expression: ISetExpressionData, value: any, context: IExpressionContext) => void;
export interface ISetExpressionData extends IExpressionData {
    type: "context" | "output" | "wholeVars";
}
export interface IExpressionData {
    type: "enum" | "boolean" | "number" | "string" | "literal" | "input" | "context" | "output" | "wholeMsg" | "wholeVars" | "notSet";
    value: string;
}
export type IExpressionDataTypeSelection<T extends IExpressionData["type"]> = Extract<T, T>;
export {};
//# sourceMappingURL=IExpression.d.ts.map