import { ISLAModel } from "../../common/everything/sla/runtimemodels/ISLAModel";
import { ISLALocationDetail } from "../../common/helpers/modelSearch/slaModelSearch";
import { ISlaEditorInitOptions, ISlaEditorProgram, ISLAModelImport } from "./ISlaEditorProgram";
export declare class Program implements ISlaEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    updateMainModel: (model: ISLAModel) => void;
    openModelInNewTab: (modelID: string) => void;
    init(options: ISlaEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(_: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): ISLAModel;
    importModel(data: ISLAModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
    referenceSearchResult(result: ISLALocationDetail): Promise<void>;
}
//# sourceMappingURL=program.d.ts.map