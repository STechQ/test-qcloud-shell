import { IDataTypeEditorInitOptions, IDataTypeEditorProgram, IDataTypeInfoItem } from "./IDataTypeEditorProgram";
import { IDataTypeModel } from "../../common/everything/dataType/runtimemodels/IDataTypeModel";
export declare class Program implements IDataTypeEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    updateMainModel: (model: IDataTypeModel) => void;
    init(options: IDataTypeEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IDataTypeModel;
    importModel(model: IDataTypeModel, options: {
        dataTypeModels: Array<IDataTypeInfoItem>;
    }): Promise<void>;
    setReadOnly(readonly: boolean): void;
}
//# sourceMappingURL=program.d.ts.map