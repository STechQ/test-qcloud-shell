import { IModelBase } from "../IModel";
import { PropertyType } from "../common";
import { ISummaryDefinition } from "./ISummaryDefinition";
export interface IObjectProperty {
    id: string;
    version: string;
    name: string;
    _name: string;
    desc: string;
    properties: Record<string, PropertyType>;
    propIndexes?: Array<Record<number, number>>; /** properties order */
    persistProps?: Array<string>;
    summary?: Array<ISummaryDefinition>;
    keyColumn?: string;
    labelColumns?: Array<LabelType>;
}
export interface LabelType {
    type: 'string' | 'attribute';
    value: string;
}
export interface IObject extends IModelBase, IObjectProperty {
    type: 'object';
}
//# sourceMappingURL=IObject.d.ts.map