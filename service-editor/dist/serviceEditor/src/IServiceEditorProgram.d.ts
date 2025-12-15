import { IRestServiceDesign } from "../../common/everything/restService/designtimeModels/IRestService";
import { IServiceLocationDetail } from "../../common/helpers/modelSearch/serviceModelSearch";
export interface IServiceEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IServiceEditorInitOptions {
    onModifiedStatus?: (status: IServiceEditorModifiedStatus, modelBody: IRestServiceDesign) => void;
    openModelInNewTab?: (modelID: string) => void;
}
export declare function getDefaultModel(): IRestServiceDesign;
export interface IServiceEditorData {
    mainModel: IRestServiceDesign;
    constantInfo: Array<{
        name: string;
        value: string;
        overridden?: boolean;
        path?: string;
    }>;
    dataTypes: Array<{
        ID: string;
        name: string;
        overridden?: boolean;
        modelBody: string;
        path?: string;
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
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
    referenceSearchResult(result: IServiceLocationDetail): Promise<void>;
}
//# sourceMappingURL=IServiceEditorProgram.d.ts.map