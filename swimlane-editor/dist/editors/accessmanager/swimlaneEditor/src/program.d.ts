import { ISwimlaneEditorInitOptions, ISwimlaneEditorProgram, ModelValidatorResult } from "./ISwimlaneEditorProgram";
import './App.css';
import { ISwimlaneDesign } from "../../../../common/everything/accessmanager/designtime/ISwimlaneDesign";
export declare class Program implements ISwimlaneEditorProgram {
    private initted;
    private options?;
    private isReadOnly;
    private data;
    private externalIds;
    private trigger?;
    private triggerReadOnly?;
    private triggerTabState?;
    private triggerRoleModels?;
    private triggerExternalIds?;
    updateModel: (model: ISwimlaneDesign) => void;
    openModelInNewTab: (modelID: string) => void;
    importModel(data: ISwimlaneDesign): Promise<void>;
    init(options: ISwimlaneEditorInitOptions): Promise<void>;
    updateMainModel: (data: ISwimlaneDesign) => void;
    exportModel(): ISwimlaneDesign;
    setRoleModels(roleModels: ISwimlaneEditorInitOptions["roleModels"]): void;
    setExternalSwimlaneIds(ids: string[]): void;
    validateAndFixModel(): ModelValidatorResult;
}
//# sourceMappingURL=program.d.ts.map