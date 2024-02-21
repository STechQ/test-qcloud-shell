import { IModelBase } from "./IModel";
export interface IPropertyBase {
    name: string;
    description?: string;
    array?: boolean;
    required?: boolean;
    type: "object" | "string" | "boolean" | "number";
}
export interface IPropertyObject extends IPropertyBase {
    type: "object";
    item: IEntity;
}
export type PropertyString = IPropertyString | IPropertyStringRegex;
export interface IPropertyStringBase extends IPropertyBase {
    type: "string";
    minLength?: number;
    maxLength?: number;
    secret?: boolean;
    unique?: boolean;
    /**
     * @param base64 base64 encoded characters.
     * @param binary any sequence of octets.
     * @param date full-date of [RFC3339]
     * @param dateTime date-time of [RFC3339]
     * @see https://www.rfc-editor.org/rfc/rfc3339.
     * @param regex defined by @type IPropertyStringRegex
     */
    format?: "base64" | "binary" | "email" | "date" | "dateTime" | "regex";
}
export interface IPropertyString extends IPropertyStringBase {
    format?: "base64" | "binary" | "email" | "date" | "dateTime";
}
export interface IPropertyStringRegex extends IPropertyStringBase {
    format: "regex";
    regex: string;
}
export interface IPropertyBoolean extends IPropertyBase {
    type: "boolean";
}
export interface IPropertyNumber extends IPropertyBase {
    type: "number";
    min?: number;
    max?: number;
    unique?: boolean;
}
export type Property = IPropertyObject | PropertyString | IPropertyBoolean | IPropertyNumber;
export interface IEntityInfo {
    path: string;
    name: string;
}
export interface IEntity extends IModelBase {
    name: string;
    properties: Array<Property>;
    type: 'entity';
}
//# sourceMappingURL=IEntity.d.ts.map