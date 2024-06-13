import { IObjectModel } from "../../common/everything/object/runtimemodels/IObjectModel";
export interface IObjectEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IObjectEditorInitOptions {
    onModifiedStatus?: (status: IObjectEditorModifiedStatus) => void;
}
export declare function getDefaultModel(): IObjectModel;
export interface IObjectEditorData {
    objectModels: Array<IObjectInfoItem>;
    mainModel: IObjectModel;
}
export interface IObjectEditorProgram {
    init(options: IObjectEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IObjectModel;
    importModel(model: IObjectModel, options: {
        objectModels: Array<IObjectInfoItem>;
    }): Promise<void>;
}
export interface IInitOptions {
    ui?: {
        onObjectListRequire?: GetObjectListModel;
    };
}
export type GetObjectListModel = () => Promise<Array<IObjectInfoItem>>;
export interface IObjectInfoItem {
    name: string;
    _name?: string;
    objectID: string;
    attributes: Array<string>;
}
//# sourceMappingURL=IObjectEditorProgram.d.ts.map