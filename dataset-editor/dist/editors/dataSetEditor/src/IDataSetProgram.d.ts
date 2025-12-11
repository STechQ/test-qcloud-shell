import { IDataSetModel } from "../../../common/everything/dataSet/runtimemodels/IDataSetModel";
export interface IDataSetEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IDataSetEditorInitOptions {
    onModifiedStatus?: (status: IDataSetEditorModifiedStatus, modelBody: IDataSetModel) => void;
}
export interface IDataSetEditorData {
    mainModel: IDataSetModel;
}
export interface IDataSetModelImport {
    mainModel: IDataSetModel;
}
export interface IDataSetEditorProgram {
    init(options: IDataSetEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IDataSetModel;
    importModel(data: IDataSetModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
}
export declare function getDefaultModel(): IDataSetModel;
//# sourceMappingURL=IDataSetProgram.d.ts.map