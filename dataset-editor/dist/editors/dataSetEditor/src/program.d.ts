import { IDataSetModel } from "../../../common/everything/dataSet/runtimemodels/IDataSetModel";
import { IDataSetEditorInitOptions, IDataSetEditorProgram, IDataSetModelImport } from "./IDataSetProgram";
export declare class Program implements IDataSetEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    updateMainModel: (model: IDataSetModel) => void;
    init(options: IDataSetEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(_: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): any;
    importModel(data: IDataSetModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
    referenceSearchResult(_: any): Promise<void>;
}
//# sourceMappingURL=program.d.ts.map