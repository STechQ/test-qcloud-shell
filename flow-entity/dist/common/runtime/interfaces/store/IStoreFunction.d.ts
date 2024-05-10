import { IWFExpressionData } from "../../IWorkflowExpression";
import { IFlow } from "../objects/IFlow";
export interface IStoreFunction {
    name: string;
    _name: string;
    desc: string;
    props: IStoreFunctionPropsBase;
    inline: IFlow;
    link?: {
        formId: string;
        formLastUpdate: Date;
    };
}
export interface IStoreFunctionPropsBase {
    type: "function" | "event" | "dataEvent";
}
export interface IDataEventMapping extends IStoreFunctionPropsBase {
    type: "dataEvent";
    source: IWFExpressionData;
    event: "onChange";
}
export interface IEventMapping extends IStoreFunctionPropsBase {
    type: "event";
    source: IWFExpressionData;
    event: "Pre-render" | "End-Render" | "Before Submit" | "Unload";
}
//# sourceMappingURL=IStoreFunction.d.ts.map