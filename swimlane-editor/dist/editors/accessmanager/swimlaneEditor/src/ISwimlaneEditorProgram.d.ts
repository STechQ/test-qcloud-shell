import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { ISwimlaneDesign } from "../../../../common/everything/accessmanager/designtime/ISwimlaneDesign";
export interface ISwimlaneEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export declare function getDefaultModel(): ISwimlaneDesign;
export interface ModelValidatorResult {
    error?: Error;
    modifiedModel?: ISwimlaneDesign;
}
type GetModelBody = (id: string, bodyKey: string) => Promise<any>;
export interface ISwimlaneEditorInitOptions {
    onModifiedStatus?: (status: ISwimlaneEditorModifiedStatus, model: ISwimlaneDesign) => void;
    getModelBody: GetModelBody;
    roleModels: Array<IStudioUIModelBase>;
    openModelInNewTab?: (modelID: string) => void;
}
export interface ISwimlaneEditorProgram {
    init(options: ISwimlaneEditorInitOptions): Promise<void>;
    exportModel(): ISwimlaneDesign;
    importModel(data: ISwimlaneDesign): Promise<void>;
    setRoleModels(roleModels: ISwimlaneEditorInitOptions["roleModels"]): void;
    setExternalSwimlaneIds(ids: string[]): void;
    validateAndFixModel(): ModelValidatorResult;
}
export {};
//# sourceMappingURL=ISwimlaneEditorProgram.d.ts.map