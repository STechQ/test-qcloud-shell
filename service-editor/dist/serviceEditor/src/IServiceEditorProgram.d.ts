import { IRestService } from "../../common/runtime/interfaces/objects/IRestService";
export interface IServiceEditorModifiedStatus {
    state?: boolean;
    model?: boolean;
}
export interface IServiceEditorInitOptions {
    onModifiedStatus?: (status: IServiceEditorModifiedStatus) => void;
    objectInfo?: Array<{
        name: string;
        id: string;
        version?: string;
    }>;
}
export interface IServiceEditorProgram {
    init(options: IServiceEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IRestService;
    importModel(model: IRestService): Promise<void>;
}
//# sourceMappingURL=IServiceEditorProgram.d.ts.map