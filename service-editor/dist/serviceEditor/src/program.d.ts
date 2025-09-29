import { IServiceEditorInitOptions, IServiceEditorProgram, IServiceModelImport } from "./IServiceEditorProgram";
import { IRestServiceDesign } from "../../common/everything/restService/designtimeModels/IRestService";
import { IServiceLocationDetail } from "../../common/helpers/modelSearch/serviceModelSearch";
export declare class Program implements IServiceEditorProgram {
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
    updateMainModel: (data: IRestServiceDesign) => void;
    openModelInNewTab: (modelID: string) => void;
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
//# sourceMappingURL=program.d.ts.map