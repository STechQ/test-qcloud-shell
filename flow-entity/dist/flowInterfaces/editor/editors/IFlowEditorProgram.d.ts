import { IFlowModel } from "../../runtime/IFlowModel";
import { IFlowCopyModel, IFlowDesignModel } from "../IFlowDesignModel";
import { IFlowEditorModel } from "../IFlowEditorModel";
import { IFlowEditorState } from "../IFlowEditorState";
import { GetEntity, GetEntityList, GetFlowModelBody, GetObjectModel, IStepOptions, ListFuncFlowPagesCb, ListUIPagesCb } from "../IStepOptions";
import { IModifiedStatus } from "../common/IModifiedStatus";
export interface IExportTypeMap {
    "both": IFlowEditorModel;
    "design": IFlowDesignModel;
    "runtime": IFlowModel;
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
        onFlowModelBodyRequire?: GetFlowModelBody;
        onObjectModelRequire?: GetObjectModel;
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
    setReadonly(readonly: boolean): void;
    undo(): Promise<boolean>;
    redo(): Promise<boolean>;
}
//# sourceMappingURL=IFlowEditorProgram.d.ts.map