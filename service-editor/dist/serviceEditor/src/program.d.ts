import { IServiceEditorInitOptions, IServiceEditorModifiedStatus, IServiceEditorProgram } from "./IServiceEditorProgram";
import { IRestService } from "../../common/runtime/interfaces/objects/IRestService";
declare global {
    interface Window {
        model: IRestService;
        modified?: (modifyInfo: {
            state?: boolean;
            model?: boolean;
        }) => void;
        objectInfo?: Array<{
            name: string;
            id: string;
            version?: string;
        }>;
    }
}
export declare class Program implements IServiceEditorProgram {
    init(options: IServiceEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IRestService;
    importModel(model: IRestService): Promise<void>;
    private updateModel;
    private defaultModel;
}
declare const onModifiedStatus: (status: IServiceEditorModifiedStatus) => void;
export { onModifiedStatus };
//# sourceMappingURL=program.d.ts.map