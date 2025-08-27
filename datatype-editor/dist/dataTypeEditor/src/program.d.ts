import { IDataTypeEditorInitOptions, IDataTypeEditorProgram, IDataTypeInfoItem } from "./IDataTypeEditorProgram";
import { IDataTypeModel } from "../../common/everything/dataType/runtimemodels/IDataTypeModel";
import { ModelValidatorResult } from "./helper/ModelValidator";
import { IDataTypeLocationDetail } from "../../common/helpers/modelSearch/dataTypeModelSearch";
export declare class Program implements IDataTypeEditorProgram {
    private initted;
    private options?;
    private data;
    private isReadOnly;
    private trigger?;
    private triggerReadOnly?;
    private triggerTabState?;
    updateMainModel: (model: IDataTypeModel) => void;
    init(options: IDataTypeEditorInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    exportModel(): IDataTypeModel;
    validateAndFixModel(): ModelValidatorResult;
    importModel(model: IDataTypeModel, options: {
        dataTypeModels: Array<IDataTypeInfoItem>;
    }): Promise<void>;
    setReadOnly(readonly: boolean): void;
    referenceSearchResult(result: IDataTypeLocationDetail): Promise<void>;
}
//# sourceMappingURL=program.d.ts.map