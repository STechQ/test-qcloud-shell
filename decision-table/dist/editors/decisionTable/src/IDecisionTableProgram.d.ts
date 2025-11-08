import { IDecisionTableModel } from "../../../common/everything/decisionTable/runtimeModels/IDecisionTableModel";
export interface IDecisionTableModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IDecisionTableInitOptions {
    onModifiedStatus?: (status: IDecisionTableModifiedStatus, modelBody: IDecisionTableModel) => void;
}
export declare function getDefaultModel(): IDecisionTableModel;
export interface IDecisionTableData {
    mainModel: IDecisionTableModel;
    name: string;
}
export interface IDecisionTableProgram {
    init(options: IDecisionTableInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IDecisionTableModel;
    importModel(data: IDecisionTableData): Promise<void>;
    setReadOnly(readonly: boolean): void;
    validate(): string | undefined;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
}
//# sourceMappingURL=IDecisionTableProgram.d.ts.map