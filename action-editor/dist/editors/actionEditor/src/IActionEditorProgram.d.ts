import { IActionDesign, IActionItem } from "../../../common/everything/action/IActionDesign";
import { IWFModels } from "../../../common/everything/workflow/runtimemodels/IModel";
import { IStudioUIModelBase } from "../../../common/everything/studio/ui/IStudioUIModelBase";
import { INestedStore } from "../../../common/everything/store/designtimemodels/IStoreModel";
export interface IActionEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IActionEditorAvailablePrivilege {
    id: string;
    label: string;
}
export interface IActionPrivilege {
    id: string;
    refId: string;
    description: string;
}
type GetModelBody = (id: string, bodyKey: string) => Promise<IWFModels>;
export interface IActionEditorInitOptions {
    onModifiedStatus?: (status: IActionEditorModifiedStatus, modelBody: IActionDesign) => void;
    getModelBody?: GetModelBody;
    models?: Array<IStudioUIModelBase>;
    allExternalActions?: Array<IActionItem>;
    openModelInNewTab?: (modelId: string, modelType: string) => void;
    nestedStore?: INestedStore;
}
export declare function getDefaultModel(): IActionDesign;
export interface IEditorValidateResult {
    error?: {
        message: string;
    };
}
export interface IActionEditorProgram {
    init(options: IActionEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IActionDesign;
    importModel(data: IActionDesign): Promise<void>;
    setReadOnly(readonly: boolean): void;
    setModels(models: Array<IStudioUIModelBase>): void;
    setExternalActions(actions: Array<IActionItem>): void;
    setSchema(nestedStore: INestedStore): void;
    validateAndFixModel(): Promise<IEditorValidateResult>;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
}
export {};
//# sourceMappingURL=IActionEditorProgram.d.ts.map