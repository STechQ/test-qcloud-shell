import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
import { IVariable } from "./IVariable";
import { ObjectModelType, StringType } from "./types";
export interface IObjectModel extends IModelBaseFields, IObjectProperty {
    type: ObjectModelType;
}
export interface IObjectProperty {
    name: string;
    _name: string;
    desc: string;
    attributes: Record<string, IVariable>;
    summary?: Array<IObjectSummary>;
    keyColumn?: string;
    labels?: Array<IObjectLabel>;
}
export interface IObjectLabel {
    type: StringType | 'attribute';
    value: string;
}
export interface IObjectSummary {
    attribute: string;
    header: string;
    display?: boolean;
}
//# sourceMappingURL=IObjectModel.d.ts.map