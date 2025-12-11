import { IEndpointEditorInitOptions, IEndpointEditorProgram, IEndpointModelImport } from "./IEndpointEditorProgram";
import { IEndpointDesign, IEndpointState } from "../../../common/everything/endpoint/designtimeModels/IEndpoint";
import { ModelValidatorResult } from "./helpers/ModelValidator";
import { IEndpointLocationDetail } from "../../../common/helpers/modelSearch/endpointModelSearch";
export declare const defaultState: IEndpointState;
export declare class Program implements IEndpointEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    private triggerUndo?;
    private triggerRedo?;
    private isUndoDisabled?;
    private isRedoDisabled?;
    private triggerTabState?;
    private triggerState?;
    private endpointState;
    updateMainModel: (data: IEndpointDesign) => void;
    openModelInNewTab: (modelID: string) => void;
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
    setEndpointState: (state?: IEndpointState) => void;
}
//# sourceMappingURL=program.d.ts.map