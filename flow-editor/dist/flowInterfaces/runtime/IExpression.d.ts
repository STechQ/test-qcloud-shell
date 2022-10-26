import { RuntimeMessage } from "./StepRuntime";
export interface IExpressionContext {
    msg: RuntimeMessage;
}
export declare type ExpressionGetter = (expression: IExpressionData, context: IExpressionContext) => string | number | boolean | RuntimeMessage;
export declare type ExpressionSetter = (expression: ISetExpressionData, value: any, context: IExpressionContext) => RuntimeMessage;
export interface ISetExpressionData extends IExpressionData {
    type: "msg";
}
export interface IExpressionData {
    type: "string" | "number" | "boolean" | "msg" | "wholeMsg";
    value: string;
}
//# sourceMappingURL=IExpression.d.ts.map