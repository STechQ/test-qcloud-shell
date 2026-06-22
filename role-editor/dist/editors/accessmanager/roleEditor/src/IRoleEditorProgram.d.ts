import { IRoleDesign, IRoleWithRef } from "../../../../common/everything/accessmanager/designtime/IRoleDesign";
import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { IWFModels } from "../../../../common/everything/workflow/runtimemodels/IModel";
type GetModelBody = (id: string, bodyKey: string) => Promise<IWFModels>;
export interface IPrivilege {
    id: string;
    refId: string;
    description: string;
}
export interface IRoleDerivedData {
    privileges: Array<IPrivilege>;
    allExternalRoles: Array<IRoleWithRef>;
}
export interface IRoleEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IRoleEditorInitOptions {
    onModifiedStatus?: (status: IRoleEditorModifiedStatus, modelBody: IRoleDesign) => void;
    getModelBody: GetModelBody;
    models: Array<IStudioUIModelBase>;
}
export declare function getDefaultModel(): IRoleDesign;
export interface IEditorValidateResult {
    error?: {
        message: string;
    };
}
export interface IRoleEditorProgram {
    init(options: IRoleEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IRoleDesign;
    importModel(data: IRoleDesign): Promise<void>;
    setReadOnly(readonly: boolean): void;
    validateAndFixModel(): Promise<IEditorValidateResult>;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
    setModels(models: Array<IStudioUIModelBase>): void;
    setExternalRoleIds(ids: string[]): void;
}
export {};
//# sourceMappingURL=IRoleEditorProgram.d.ts.map