import { IWFExpressionData } from "../../IWorkflowExpression";
export type VariableType = "string" | "number" | "datetime" | "enum" | "object" | "boolean" | "named";
export interface IVariable {
    name: string;
    _name: string;
    desc: string;
    props: {
        type: VariableType;
        objectID?: string;
        objectVersion?: string;
    };
    list?: boolean;
    required?: boolean;
    link?: {
        formId: string;
        formLastUpdate: Date;
    };
    defaultValue?: IWFExpressionData;
}
//# sourceMappingURL=IVariable.d.ts.map