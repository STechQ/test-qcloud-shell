import { StringTemplates } from "./../../helpers/templates/StringTemplates";
import { NumberTemplates } from "./../../helpers/templates/NumberTemplates";
import { IWFExpressionData } from "../../IWorkflowExpression";
export interface IPropertyBase {
    name: string;
    _name: string;
    desc: string;
    type: "string" | "number" | "datetime" | "enum" | "object" | "boolean";
    isArray?: boolean;
    required?: boolean;
    default?: IWFExpressionData;
}
export interface IPropertyString extends IPropertyBase {
    type: "string";
    template?: StringTemplates;
    regex?: string;
}
export interface IPropertyBoolean extends IPropertyBase {
    type: "boolean";
    tristate?: boolean;
    template?: string;
}
export interface IPropertyEnum extends IPropertyBase {
    type: "enum";
    objectID: string;
    objectVersion: string;
}
export interface IPropertyDateTime extends IPropertyBase {
    type: "datetime";
    template?: string;
    format?: string;
}
export interface IPropertyNumber extends IPropertyBase {
    type: "number";
    template?: NumberTemplates;
    format?: string;
    digitLengths?: [number, number];
}
export interface IPropertyObject extends IPropertyBase {
    type: "object";
    objectID: string;
    objectVersion: string;
}
export type PropertyType = IPropertyBoolean | IPropertyDateTime | IPropertyEnum | IPropertyNumber | IPropertyObject | IPropertyString;
//# sourceMappingURL=IProperty.d.ts.map