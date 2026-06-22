import { IPrivilegeDesign } from "../../../../common/everything/accessmanager/designtime/IPrivilegeDesign";
export interface IPrivilegeEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IPrivilegeEditorInitOptions {
    onModifiedStatus?: (status: IPrivilegeEditorModifiedStatus, modelBody: IPrivilegeDesign) => void;
}
export declare function getDefaultModel(): IPrivilegeDesign;
export interface IEditorValidateResult {
    error?: {
        message: string;
    };
}
export interface IPrivilegeEditorProgram {
    init(options: IPrivilegeEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IPrivilegeDesign;
    importModel(data: IPrivilegeDesign): Promise<void>;
    setReadOnly(readonly: boolean): void;
    setExternalPrivilegeIds(ids: string[]): void;
    validateAndFixModel(): Promise<IEditorValidateResult>;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
}
//# sourceMappingURL=IPrivilegeEditorProgram.d.ts.map