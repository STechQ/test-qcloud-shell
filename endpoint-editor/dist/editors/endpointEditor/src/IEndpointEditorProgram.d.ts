import { IEndpointDesign, IEndpointState } from "../../../common/everything/endpoint/designtimeModels/IEndpoint";
import { ModelValidatorResult } from "./helpers/ModelValidator";
import { IEndpointLocationDetail } from "../../../common/helpers/modelSearch/endpointModelSearch";
export interface IEndpointEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IEndpointEditorInitOptions {
    onModifiedStatus?: (status: IEndpointEditorModifiedStatus, modelBody: IEndpointDesign) => void;
    onModelBodyRequire: (modelId: string) => Promise<any | undefined>;
    openModelInNewTab?: (modelID: string) => void;
}
export declare function getDefaultModel(): IEndpointDesign;
export interface IEndpointEditorData {
    mainModel: IEndpointDesign;
    triggers: Array<{
        name: string;
        modelId: string;
        tooltip?: string;
    }>;
}
export interface IEndpointModelImport {
    mainModel: IEndpointEditorData["mainModel"];
    triggers: IEndpointEditorData["triggers"];
}
export interface IEndpointEditorProgram {
    init(options: IEndpointEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IEndpointDesign;
    importModel(data: IEndpointModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
    validateAndFixModel(): ModelValidatorResult;
    referenceSearchResult(result: IEndpointLocationDetail): Promise<void>;
    getEndpointState(): IEndpointState;
    setEndpointState(state: IEndpointState): void;
}
//# sourceMappingURL=IEndpointEditorProgram.d.ts.map