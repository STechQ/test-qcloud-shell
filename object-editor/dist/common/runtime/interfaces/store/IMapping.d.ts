import { IWFExpressionData, IWFSetExpressionData } from "../../IWorkflowExpression";
export interface IMapping {
    inParamMapping: Array<IInParameterMapping>;
    outParamMapping: Array<IOutParameterMapping>;
    props?: Record<string, any>;
}
export interface IInParameterMapping {
    variable: IWFExpressionData;
    mapping: IWFExpressionData;
}
export interface IOutParameterMapping {
    variable: IWFSetExpressionData;
    mapping: IWFSetExpressionData;
}
//# sourceMappingURL=IMapping.d.ts.map