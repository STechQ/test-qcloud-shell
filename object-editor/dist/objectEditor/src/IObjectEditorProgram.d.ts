import { IObject } from "../../common/runtime/interfaces/objects/IObject";
export interface IObjectEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IObjectEditorInitOptions {
    onModifiedStatus?: (status: IObjectEditorModifiedStatus) => void;
}
export interface IObjectEditorProgram {
    init(options: IObjectEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IObject;
    importModel(model: IObject, options: {
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
    objectVersion: string;
    attributes: Array<string>;
}
//# sourceMappingURL=IObjectEditorProgram.d.ts.map