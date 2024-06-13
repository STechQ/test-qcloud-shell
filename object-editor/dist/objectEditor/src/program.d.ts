import { IObjectEditorInitOptions, IObjectEditorProgram, IObjectInfoItem } from "./IObjectEditorProgram";
import { IObjectModel } from "../../common/everything/object/runtimemodels/IObjectModel";
export declare class Program implements IObjectEditorProgram {
    private initted;
    private options?;
    private data;
    private trigger?;
    updateMainModel: (model: IObjectModel) => void;
    init(options: IObjectEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IObjectModel;
    importModel(model: IObjectModel, options: {
        objectModels: Array<IObjectInfoItem>;
    }): Promise<void>;
}
//# sourceMappingURL=program.d.ts.map