import { ISLAModel } from "../../common/everything/sla/runtimemodels/ISLAModel";
import { ISlaEditorInitOptions, ISlaEditorProgram, ISLAModelImport } from "./ISlaEditorProgram";
export declare class Program implements ISlaEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    updateMainModel: (model: ISLAModel) => void;
    init(options: ISlaEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(_: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): ISLAModel;
    importModel(data: ISLAModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
}
//# sourceMappingURL=program.d.ts.map