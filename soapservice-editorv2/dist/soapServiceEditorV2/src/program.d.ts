import { ISoapServiceEditorV2InitOptions, ISoapServiceEditorV2Program, ISoapServiceV2ModelImport } from "./ISoapServiceEditorV2Program";
import { ISoapServiceV2Design } from "../../common/everything/soapService/designtimeModels/ISoapServiceV2";
import { ISoapServiceV2LocationDetail } from "../../common/helpers/modelSearch/soapServiceV2ModelSearch";
export declare class Program implements ISoapServiceEditorV2Program {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    updateMainModel: (data: ISoapServiceV2Design) => void;
    openModelInNewTab: (modelID: string) => void;
    init(options: ISoapServiceEditorV2InitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): ISoapServiceV2Design;
    importModel(data: ISoapServiceV2ModelImport): Promise<void>;
    setReadOnly(readonly: boolean): void;
    referenceSearchResult(result: ISoapServiceV2LocationDetail): Promise<void>;
}
//# sourceMappingURL=program.d.ts.map