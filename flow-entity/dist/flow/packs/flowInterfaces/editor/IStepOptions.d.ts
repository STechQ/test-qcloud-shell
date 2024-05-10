import { IExpressionData } from "../runtime/IExpression";
import { IPropObject } from "../runtime/IStepModel";
import { IEntity, IEntityInfo } from "../runtime/IEntity";
import { IVariable } from "../../../../common/runtime/interfaces/objects/IVariable";
import * as React from "react";
import { ICaseExp } from "../../../../common/runtime/interfaces/objects/ISwitch";
import { IStore } from "../../../../common/runtime/interfaces/store/IStore";
import { IStoreSchema } from "../../../../common/runtime/interfaces/store/IStoreSchema";
export interface IExpressionInputOptions {
    width?: string;
}
export interface IExpressionEnumOptions {
    type: "enum";
    options: Array<{
        value?: string;
        text: string;
    }>;
    text?: string;
}
export interface IExpressionOptions {
    types: Array<Exclude<IExpressionData["type"], "enum"> | IExpressionEnumOptions>;
    expression?: IExpressionData;
    onChange?: (value: IExpressionData, iValid: boolean) => void;
    inputOptions?: IExpressionInputOptions;
}
export interface IUIPageInfo {
    qjsonPath: string;
    name: string;
}
export interface IModelInfoForFlow {
    id: string;
    name: string;
    version: string;
}
export interface IFlowModelBodyIO {
    inputs: Record<string, IVariable>;
    outputs: Record<string, IVariable>;
}
export type ListUIPagesCb = () => Promise<Array<IUIPageInfo>>;
export type ListFuncFlowPagesCb = () => Promise<Array<IModelInfoForFlow>>;
export type ListQjsonPagesCb = () => Promise<Array<IModelInfoForFlow>>;
export type GetFlowModelBody = (id: string, version: string) => Promise<IFlowModelBodyIO>;
export type GetObjectModel = () => Promise<Array<IModelInfoForFlow>>;
export type GetEntityList = () => Promise<Array<IEntityInfo>> | Array<IEntityInfo>;
export type GetEntity = (entityPath: string) => Promise<IEntity> | IEntity;
export type GetRoles = () => Array<IExpressionData>;
export type GetSwimlanes = () => Array<ISwimlaneProp>;
export type SetStoreSchema = (id: string, schema: IStoreSchema) => IStore;
export interface ISwitchArea {
    title: string;
    case: ICaseExp;
}
export interface ISwitchPropCase {
    operator: "==" | "other" | "empty" | "null";
    expression: IExpressionData;
    output: number;
    id: number;
}
export interface ISwimlaneProp {
    id: string;
    name: IExpressionData;
}
export interface IEditSectionInput<PropType = IPropObject> {
    propValues: PropType;
    callbacks: {
        setProp: <TName extends keyof PropType & string>(name: TName, value: PropType[TName]) => void;
        setOutputs: (outputs: Array<string>) => void;
        setSwimlaneName: (name: IExpressionData) => void;
        entity?: {
            getList: GetEntityList;
            get: GetEntity;
        };
        ui?: {
            listUIPages?: ListUIPagesCb;
            listFuncFlowPages?: ListFuncFlowPagesCb;
            basePath?: string;
            listQjsonPages?: ListQjsonPagesCb;
            getFlowModelBody?: GetFlowModelBody;
            getObjectModel?: GetObjectModel;
            getRoles?: GetRoles;
            getSwimlanes?: GetSwimlanes;
            setSchema?: SetStoreSchema;
        };
        loading: (show: boolean) => void;
        setSwitchArea?: (switchArea: ISwitchArea) => void;
        intelliInterfaces?: IStore;
    };
    react: {
        prop: {
            NameDiv: React.ReactDOM["div"];
            DescDiv: React.ReactDOM["div"];
        };
        ExpressionComp: (options: IExpressionOptions) => JSX.Element;
    };
}
export interface IStepStyle {
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    fill?: string;
    /**
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS's colors as `String`.
     */
    stroke?: string;
    borderLeft?: string;
}
export type ReactEditSection = () => JSX.Element;
export interface IInputInfo {
    name: string;
    color?: string;
}
export interface IStepOptions<PropType = IPropObject> {
    name: string;
    version: string;
    outputs: Array<string> | ((props: PropType | undefined) => Array<string>);
    inputs: Array<IInputInfo> | (() => Array<IInputInfo>);
    autoStarts?: boolean;
    color?: string;
    icon?: string;
    description?: string;
    editSection?: (options: IEditSectionInput<PropType>) => (ReactEditSection | HTMLElement);
    defaultProps?: () => PropType;
}
//# sourceMappingURL=IStepOptions.d.ts.map