import { IDecisionTableModel } from "../../../common/everything/decisionTable/runtimeModels/IDecisionTableModel";
import { IDecisionTableData, IDecisionTableInitOptions, IDecisionTableProgram } from "./IDecisionTableProgram";
export declare class Program implements IDecisionTableProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    private triggerUndo?;
    private triggerRedo?;
    private errorHandlers?;
    private isUndoDisabled?;
    private isRedoDisabled?;
    updateMainModel: (data: IDecisionTableModel) => void;
    init(options: IDecisionTableInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IDecisionTableModel;
    importModel(data: IDecisionTableData): Promise<void>;
    setReadOnly(readonly: boolean): void;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
    validate(): string | undefined;
}
//# sourceMappingURL=program.d.ts.map