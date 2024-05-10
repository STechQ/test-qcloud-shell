import { IPropertyObject, IPropertyNumber, IPropertyDateTime, IPropertyEnum, IPropertyBoolean, IPropertyString } from "./objects/IProperty";
export type DateTime = string;
export type ActionType = "start" | "complete" | "claim" | "assignToUser" | "assignToUnit" | "save" | "function" | "trigger";
export type PropertyType = IPropertyObject | IPropertyNumber | IPropertyDateTime | IPropertyEnum | IPropertyBoolean | IPropertyString;
export type CustomType = string;
//# sourceMappingURL=common.d.ts.map