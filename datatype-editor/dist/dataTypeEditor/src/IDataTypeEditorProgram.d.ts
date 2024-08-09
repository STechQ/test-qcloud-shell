import { IDataTypeModel } from "../../common/everything/dataType/runtimemodels/IDataTypeModel";
export interface IDataTypeEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IDataTypeEditorInitOptions {
    onModifiedStatus?: (status: IDataTypeEditorModifiedStatus) => void;
}
export declare function getDefaultModel(): IDataTypeModel;
export interface IDataTypeEditorData {
    dataTypeModels: Array<IDataTypeInfoItem>;
    mainModel: IDataTypeModel;
}
export interface IDataTypeEditorProgram {
    init(options: IDataTypeEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IDataTypeModel;
    importModel(model: IDataTypeModel, options: {
        dataTypeModels: Array<IDataTypeInfoItem>;
    }): Promise<void>;
    setReadOnly(readonly: boolean): void;
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
    attributes: Array<string>;
}
//# sourceMappingURL=IDataTypeEditorProgram.d.ts.map