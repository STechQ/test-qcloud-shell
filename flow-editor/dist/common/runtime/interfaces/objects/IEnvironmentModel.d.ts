import { PropertyType } from "../common";
import { IModelBase } from "../IModel";
import { IObjectProperty } from "./IObject";
export interface IEnvironmentModel extends IModelBase, IObjectProperty {
    type: "envParam";
    mappings: Record<string, EnvironmentProps>;
}
export type EnvironmentProps = IEnvironmentProp | ConstantProp;
export interface IEnvironmentPropsBase {
    type: 'env' | 'constant';
}
export interface IEnvironmentProp extends IEnvironmentPropsBase {
    global: boolean;
    type: 'env';
    envKey: string;
    mock: string;
}
export type ConstantProp = IApplicationConstant | IGlobalConstant;
export interface IConstantPropBase extends IEnvironmentPropsBase {
    global: boolean;
    type: 'constant';
    constantType: PropertyType;
    ttl: number;
    functionId: string;
    functionVersion: string;
}
export interface IApplicationConstant extends IConstantPropBase {
    global: false;
}
export interface IGlobalConstant extends IConstantPropBase {
    global: true;
    db: boolean;
}
//# sourceMappingURL=IEnvironmentModel.d.ts.map