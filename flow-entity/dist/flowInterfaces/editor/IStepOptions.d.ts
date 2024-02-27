/// <reference types="react" />
import { IExpressionData } from "../runtime/IExpression";
import { IPropObject } from "../runtime/IStepModel";
import { IEntity, IEntityInfo } from "../runtime/IEntity";
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
export interface IObjectEntry {
    name: string;
    type: "string" | "number" | "boolean" | "object" | "datetime" | "enum";
    selectedObject?: IModelInfoForFlow;
}
export interface IObjectMappingProps {
    values: Array<IObjectEntry>;
    objectOptions: Array<IModelInfoForFlow>;
    onChange: (newValues: Array<IObjectEntry>) => void;
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
    inputs: Array<IObjectEntry>;
    outputs: Array<IObjectEntry>;
}
export type ListUIPagesCb = () => Promise<Array<IUIPageInfo>>;
export type ListFuncFlowPagesCb = () => Promise<Array<IModelInfoForFlow>>;
export type GetFlowModelBody = (id: string, version: string) => Promise<IFlowModelBodyIO>;
export type GetObjectModel = () => Promise<Array<IModelInfoForFlow>>;
export type GetEntityList = () => Promise<Array<IEntityInfo>> | Array<IEntityInfo>;
export type GetEntity = (entityPath: string) => Promise<IEntity> | IEntity;
export interface IEditSectionInput<PropType = IPropObject> {
    propValues: PropType;
    callbacks: {
        setProp: <TName extends keyof PropType & string>(name: TName, value: PropType[TName]) => void;
        setOutputs: (outputs: Array<string>) => void;
        entity?: {
            getList: GetEntityList;
            get: GetEntity;
        };
        ui?: {
            listUIPages?: ListUIPagesCb;
            listFuncFlowPages?: ListFuncFlowPagesCb;
            getFlowModelBody?: GetFlowModelBody;
            getObjectModel?: GetObjectModel;
        };
        loading: (show: boolean) => void;
    };
    react: {
        prop: {
            NameDiv: React.ReactDOM["div"];
            DescDiv: React.ReactDOM["div"];
        };
        ExpressionComp: (options: IExpressionOptions) => JSX.Element;
        ObjectMap: (props: IObjectMappingProps) => JSX.Element;
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
    style?: IStepStyle;
    editSection?: (options: IEditSectionInput<PropType>) => (ReactEditSection | HTMLElement);
    defaultProps?: () => PropType;
}
//# sourceMappingURL=IStepOptions.d.ts.map