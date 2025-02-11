import { IRestServiceDesign } from "../../common/everything/restService/designtimeModels/IRestService";
export interface IServiceEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IServiceEditorInitOptions {
    onModifiedStatus?: (status: IServiceEditorModifiedStatus) => void;
}
export declare function getDefaultModel(): IRestServiceDesign;
export interface IServiceEditorData {
    mainModel: IRestServiceDesign;
    constantInfo: Array<{
        name: string;
        value: string;
    }>;
    dataTypes: Array<{
        ID: string;
        name: string;
        modelBody: string;
    }>;
}
export interface IServiceModelImport {
    mainModel: IServiceEditorData["mainModel"];
    options: {
        constantInfo: IServiceEditorData["constantInfo"];
        dataTypes: IServiceEditorData["dataTypes"];
    };
}
export interface IServiceEditorProgram {
    init(options: IServiceEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IRestServiceDesign;
    importModel(data: IServiceModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
}
//# sourceMappingURL=IServiceEditorProgram.d.ts.map