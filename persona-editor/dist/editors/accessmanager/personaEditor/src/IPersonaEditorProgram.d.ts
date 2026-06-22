import { IPersonaDesign } from "../../../../common/everything/accessmanager/designtime/IPersonaDesign";
import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { IWFModels } from "../../../../common/everything/workflow/runtimemodels/IModel";
type GetModelBody = (id: string, bodyKey: string) => Promise<IWFModels>;
export interface IPersonaEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IPersonaEditorInitOptions {
    onModifiedStatus?: (status: IPersonaEditorModifiedStatus, modelBody: IPersonaDesign) => void;
    getModelBody: GetModelBody;
    models: Array<IStudioUIModelBase>;
}
export declare function getDefaultModel(): IPersonaDesign;
export interface IEditorValidateResult {
    error?: {
        message: string;
    };
}
export interface IPersonaEditorProgram {
    init(options: IPersonaEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IPersonaDesign;
    importModel(data: IPersonaDesign): Promise<void>;
    setReadOnly(readonly: boolean): void;
    validateAndFixModel(): Promise<IEditorValidateResult>;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
    setModels(models: Array<IStudioUIModelBase>): void;
    setExternalPersonaIds(ids: string[]): void;
}
export {};
//# sourceMappingURL=IPersonaEditorProgram.d.ts.map