import { WorkflowRuntimeMsg } from "./WorkflowRuntime";
import * as flowRuntime from "@stechquick/flow-interfaces/runtime/index.js";
export type IWFExpressionContext = flowRuntime.RuntimeMessage;
type WFExpressionGetterReturnType = string | number | boolean | WorkflowRuntimeMsg | undefined;
export type WFExpressionGetter = (expression: IWFExpressionData, instance: IWFExpressionContext) => Array<WFExpressionGetterReturnType> | WFExpressionGetterReturnType;
export type WFExpressionSetter = (expression: IWFSetExpressionData, value: any, instance: IWFExpressionContext) => void;
export interface IWFSetExpressionData extends IWFExpressionData {
    type: "context" | "output" | "wholeVars";
}
export interface IWFExpressionData {
    type: "enum" | "boolean" | "number" | "string" | "literal" | "context" | "input" | "output" | "props" | "wholeMsg" | "wholeVars" | "notSet";
    value: string;
}
export type IExpressionDataTypeSelection<T extends IWFExpressionData["type"]> = Extract<T, T>;
export {};
//# sourceMappingURL=IWorkflowExpression.d.ts.map