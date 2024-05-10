import { IFlowModel } from "../../runtime/IFlowModel";
import { IFlowCopyModel, IFlowDesignModel } from "../IFlowDesignModel";
import { IFlowEditorModel } from "../IFlowEditorModel";
import { IFlowEditorState } from "../IFlowEditorState";
import { GetEntity, GetEntityList, GetFlowModelBody, GetObjectModel, IStepOptions, ListFuncFlowPagesCb, ListUIPagesCb, SetStoreSchema } from "../IStepOptions";
import { IModifiedStatus } from "../common/IModifiedStatus";
import { IWorkflow } from "../../../../../common/runtime/interfaces/objects/IWorkflow";
import { IStoreSchema } from "../../../../../common/runtime/interfaces/store/IStoreSchema";
export interface IExportTypeMap {
    both: IFlowEditorModel;
    design: IFlowDesignModel;
    runtime: IFlowModel | IWorkflow;
}
export interface IStepRequireInfo {
    stepName: string;
    version: string;
}
export interface IInitOptions {
    onStepRequire: (stepInfos: Array<IStepRequireInfo>) => Promise<Array<IStepOptions | string>>;
    onHistoryStatus?: (status: {
        undo: boolean;
        redo: boolean;
    }) => void;
    onCopyPasteStatus?: (status: {
        copy?: boolean;
        paste?: boolean;
    }) => void;
    onModifiedStatus?: (status: IModifiedStatus) => void;
    entity?: {
        onListRequire: GetEntityList;
        onRequire: GetEntity;
    };
    ui?: {
        onUIPageListRequire?: ListUIPagesCb;
        onFuncFlowListRequire?: ListFuncFlowPagesCb;
        onQJsonListRequire?: ListFuncFlowPagesCb;
        onFlowModelBodyRequire?: GetFlowModelBody;
        onObjectModelRequire?: GetObjectModel;
        onStoreSchemaRequire?: SetStoreSchema;
        basePath?: string;
    };
}
export interface IFlowEditorProgram {
    init(options: IInitOptions): Promise<void>;
    destroy(): Promise<void>;
    mount(element: HTMLElement | HTMLIFrameElement): void;
    unmount(): void;
    registerStep(step: IStepOptions | string): void;
    exportModel<KType extends keyof IExportTypeMap>(type: KType): IExportTypeMap[KType];
    importModel(model: IFlowDesignModel): Promise<void>;
    copy(): IFlowCopyModel;
    paste(model: IFlowCopyModel): Promise<void>;
    getState(): IFlowEditorState;
    setState(state?: IFlowEditorState): void;
    setSchema(schema: IStoreSchema): void;
    setReadonly(readonly: boolean): void;
    setIsWorkFlow(isWorkFlow: boolean): void;
    undo(): Promise<boolean>;
    redo(): Promise<boolean>;
}
//# sourceMappingURL=IFlowEditorProgram.d.ts.map