import { IServiceEditorInitOptions, IServiceEditorProgram, IServiceModelImport } from "./IServiceEditorProgram";
import { IRestServiceDesign } from "../../common/everything/restService/designtimeModels/IRestService";
export declare class Program implements IServiceEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    updateMainModel: (data: IRestServiceDesign) => void;
    init(options: IServiceEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IRestServiceDesign;
    importModel(data: IServiceModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
}
//# sourceMappingURL=program.d.ts.map