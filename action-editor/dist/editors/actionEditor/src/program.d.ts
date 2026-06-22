import { IActionDesign } from "../../../common/everything/action/IActionDesign";
import { IStudioUIModelBase } from "../../../common/everything/studio/ui/IStudioUIModelBase";
import { IActionEditorData } from "./components/ActionEditor";
import { IActionEditorInitOptions, IActionEditorProgram, IEditorValidateResult } from "./IActionEditorProgram";
import { IActionItem } from "../../../common/everything/action/IActionDesign";
import { INestedStore } from "../../../common/everything/store/designtimemodels/IStoreModel";
export declare class Program implements IActionEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private debounceTimer;
    trigger?: (data: IActionEditorData) => void;
    triggerReadOnly?: (isReadOnly: boolean) => void;
    private triggerModels?;
    private triggerPrivileges?;
    private triggerExternalActions?;
    private triggerNestedStore?;
    private triggerUndo?;
    private triggerRedo?;
    private errorHandlers?;
    private isUndoDisabled?;
    private isRedoDisabled?;
    updateMainModel: (data: IActionDesign) => void;
    validateAndFixModel(): Promise<IEditorValidateResult>;
    private fetchPrivileges;
    init(options: IActionEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(_element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IActionDesign;
    importModel(data: IActionEditorData): Promise<void>;
    setReadOnly(readonly: boolean): void;
    setModels(models: IStudioUIModelBase[]): void;
    setExternalActions(actions: IActionItem[]): void;
    setSchema(nestedStore: INestedStore): void;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
}
//# sourceMappingURL=program.d.ts.map