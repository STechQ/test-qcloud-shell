import { IRoleDesign } from '../../../../common/everything/accessmanager/designtime/IRoleDesign';
import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { IRoleEditorData } from './components/RoleEditor';
import { IEditorValidateResult, IRoleEditorInitOptions, IRoleEditorProgram } from './IRoleEditorProgram';
export declare class Program implements IRoleEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    private triggerModels?;
    private triggerDerivedData?;
    private externalRoleIds;
    private triggerExternalRoleIds?;
    private triggerUndo?;
    private triggerRedo?;
    private errorHandlers?;
    private isUndoDisabled?;
    private isRedoDisabled?;
    updateMainModel: (data: IRoleDesign) => void;
    validateAndFixModel(): Promise<IEditorValidateResult>;
    private fetchDerivedData;
    init(options: IRoleEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IRoleDesign;
    importModel(data: IRoleEditorData): Promise<void>;
    setReadOnly(readonly: boolean): void;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
    setModels(models: IStudioUIModelBase[]): void;
    setExternalRoleIds(ids: string[]): void;
}
//# sourceMappingURL=program.d.ts.map