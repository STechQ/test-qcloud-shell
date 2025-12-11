import { IDataTypeModel } from "../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { IVariable } from "../../common/everything/dataType/runtimemodels/IVariable";
import { ModelValidatorResult } from "./helper/ModelValidator";
import { IDataTypeLocationDetail } from "../../common/helpers/modelSearch/dataTypeModelSearch";
export interface IDataTypeEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IDataTypeEditorInitOptions {
    onModifiedStatus?: (status: IDataTypeEditorModifiedStatus, modelBody: IDataTypeModel) => void;
    ownerId?: string;
    openModelInNewTab?: (modelID: string) => void;
}
export declare function getDefaultModel(): IDataTypeModel;
export interface IDataTypeEditorData {
    dataTypeModels: Array<IDataTypeInfoItem>;
    dataSetModels: Array<IDataSetInfoItem>;
    mainModel: IDataTypeModel;
}
export interface IDataTypeEditorProgram {
    init(options: IDataTypeEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    validateAndFixModel(): ModelValidatorResult;
    exportModel(): IDataTypeModel;
    importModel(model: IDataTypeModel, options: {
        dataTypeModels: Array<IDataTypeInfoItem>;
        dataSetModels: Array<IDataSetInfoItem>;
    }): Promise<void>;
    setReadOnly(readonly: boolean): void;
    referenceSearchResult(result: IDataTypeLocationDetail): Promise<void>;
}
export interface IInitOptions {
    ui?: {
        onObjectListRequire?: GetDataTypeListModel;
    };
}
export type GetDataTypeListModel = () => Promise<Array<IDataTypeInfoItem>>;
export interface IDataTypeInfoItem {
    name: string;
    _name?: string;
    objectID: string;
    attributes: Record<string, IVariable>;
    path?: string;
}
export interface IDataSetInfoItem {
    name: string;
    type: "set";
    objectID: string;
    options: Set<string>;
    path?: string;
}
//# sourceMappingURL=IDataTypeEditorProgram.d.ts.map