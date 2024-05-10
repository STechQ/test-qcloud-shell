import { IObject } from "../../common/runtime/interfaces/objects/IObject";
import { IObjectEditorInitOptions, IObjectEditorModifiedStatus, IObjectEditorProgram, IObjectInfoItem } from "./IObjectEditorProgram";
declare global {
    interface Window {
        objectModels: Array<IObjectInfoItem>;
        mainModel: IObject;
    }
}
export declare class Program implements IObjectEditorProgram {
    updateMainModel: (model: IObject) => void;
    init(options: IObjectEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IObject;
    importModel(model: IObject, options: {
        objectModels: Array<IObjectInfoItem>;
    }): Promise<void>;
}
declare const onModifiedStatus: (status: IObjectEditorModifiedStatus) => void;
export { onModifiedStatus };
//# sourceMappingURL=program.d.ts.map