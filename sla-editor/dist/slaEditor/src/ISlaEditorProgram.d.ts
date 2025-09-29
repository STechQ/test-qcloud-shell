import { ISLAModel } from "../../common/everything/sla/runtimemodels/ISLAModel";
import { ISLALocationDetail } from "../../common/helpers/modelSearch/slaModelSearch";
export interface ISlaEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface ISlaEditorInitOptions {
    onModifiedStatus?: (status: ISlaEditorModifiedStatus, modelBody: ISLAModel) => void;
    openModelInNewTab?: (modelID: string) => void;
}
export interface ISlaEditorData {
    mainModel: ISLAModel;
    functionModels: Array<{
        ID: string;
        name: string;
        overridden?: boolean;
        modelBody: string;
    }>;
    constantModels: Array<{
        ID: string;
        name: string;
        value: string;
        overridden?: boolean;
    }>;
    dataTypes: Array<{
        ID: string;
        modelBody: string;
    }>;
}
export interface ISLAModelImport {
    mainModel: ISLAModel;
    options: {
        functionModels: ISlaEditorData["functionModels"];
        constantModels: ISlaEditorData["constantModels"];
    };
}
export interface ISlaEditorProgram {
    init(options: ISlaEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): ISLAModel;
    importModel(data: ISLAModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
    referenceSearchResult(result: ISLALocationDetail): Promise<void>;
}
export declare function getDefaultModel(): ISLAModel;
//# sourceMappingURL=ISlaEditorProgram.d.ts.map