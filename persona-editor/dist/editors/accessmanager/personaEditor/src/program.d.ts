import { IPersonaDesign } from '../../../../common/everything/accessmanager/designtime/IPersonaDesign';
import { IStudioUIModelBase } from "../../../../common/everything/studio/ui/IStudioUIModelBase";
import { IEditorValidateResult, IPersonaEditorInitOptions, IPersonaEditorProgram } from './IPersonaEditorProgram';
export declare class Program implements IPersonaEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    private triggerModels?;
    private externalPersonaIds;
    private triggerExternalPersonaIds?;
    private triggerUndo?;
    private triggerRedo?;
    private errorHandlers?;
    private isUndoDisabled?;
    private isRedoDisabled?;
    updateMainModel: (data: IPersonaDesign) => void;
    validateAndFixModel(): Promise<IEditorValidateResult>;
    init(options: IPersonaEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IPersonaDesign;
    importModel(data: IPersonaDesign): Promise<void>;
    setReadOnly(readonly: boolean): void;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
    setModels(models: IStudioUIModelBase[]): void;
    setExternalPersonaIds(ids: string[]): void;
}
//# sourceMappingURL=program.d.ts.map