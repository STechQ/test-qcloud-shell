import { IPrivilegeDesign } from '../../../../common/everything/accessmanager/designtime/IPrivilegeDesign';
import { IPrivilegeEditorData } from './components/PrivilegeEditor';
import { IEditorValidateResult, IPrivilegeEditorInitOptions, IPrivilegeEditorProgram } from './IPrivilegeEditorProgram';
export declare class Program implements IPrivilegeEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private externalIds;
    private trigger?;
    private triggerReadOnly?;
    private triggerExternalIds?;
    private triggerUndo?;
    private triggerRedo?;
    private errorHandlers?;
    private isUndoDisabled?;
    private isRedoDisabled?;
    updateMainModel: (data: IPrivilegeDesign) => void;
    validateAndFixModel(): Promise<IEditorValidateResult>;
    init(options: IPrivilegeEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IPrivilegeDesign;
    importModel(data: IPrivilegeEditorData): Promise<void>;
    setReadOnly(readonly: boolean): void;
    setExternalPrivilegeIds(ids: string[]): void;
    undo(): void;
    redo(): void;
    getUndoRedoState(): {
        undoDisabled: boolean | undefined;
        redoDisabled: boolean | undefined;
    };
}
//# sourceMappingURL=program.d.ts.map