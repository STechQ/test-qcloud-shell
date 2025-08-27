import { ISoapServiceV2Design } from "../../common/everything/soapService/designtimeModels/ISoapServiceV2";
import { ISoapServiceV2LocationDetail } from "../../common/helpers/modelSearch/soapServiceV2ModelSearch";
export interface ISoapServiceEditorV2Program {
    init(options: ISoapServiceEditorV2InitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): ISoapServiceV2Design;
    importModel(data: ISoapServiceV2ModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
    referenceSearchResult(result: ISoapServiceV2LocationDetail): Promise<void>;
}
export interface ISoapServiceEditorV2ModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface ISoapServiceEditorV2InitOptions {
    onModifiedStatus?: (status: ISoapServiceEditorV2ModifiedStatus, modelBody: ISoapServiceV2Design) => void;
}
export interface ISoapServiceEditorV2Data {
    mainModel: ISoapServiceV2Design;
    constantInfo: Array<{
        name: string;
        value: string;
        overridden?: boolean;
    }>;
    dataTypes: Array<{
        ID: string;
        name: string;
        overridden?: boolean;
        modelBody: string;
    }>;
}
export interface ISoapServiceV2ModelImport {
    mainModel: ISoapServiceEditorV2Data["mainModel"];
    options?: {
        constantInfo: ISoapServiceEditorV2Data["constantInfo"];
        dataTypes: ISoapServiceEditorV2Data["dataTypes"];
    };
}
export declare function getDefaultModel(): ISoapServiceV2Design;
//# sourceMappingURL=ISoapServiceEditorV2Program.d.ts.map