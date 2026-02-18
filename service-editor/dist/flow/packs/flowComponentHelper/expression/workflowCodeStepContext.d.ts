/// <reference types="node" />
import { CompleteActionType, IDataSearchResponse, IPlatformWFFAdaptor } from "@stechquick/flow-interfaces/runtime/platform/IPlatformWorkflowAdaptor";
import { IAddActivityProp } from "../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { DataInstance } from "../../../../common/everything/workflow/runtimeObjects/DataInstance";
import { IContext } from "../../../../common/everything/workflow/runtimeObjects/IContext";
import { IDataSearchParams } from "../../../../common/everything/workflow/runtimeObjects/IDataSearch";
import { FlowObjectContext } from "./contextCreator";
import { CustomType } from "../../../../common/everything/workflow/runtimemodels/types";
import { IFile } from "../../../../common/everything/workflow/runtimeObjects/namedobjects/IFile";
import { IActionData } from "../../../../common/everything/workflow/runtimeObjects/IAction";
import { IProcessInstance } from "../../../../common/everything/workflow/runtimeObjects/namedobjects/IProcessInstance";
export interface IWorkflowMethods {
    addActivity(prop: IAddActivityProp): Promise<void>;
    openProcessbyLock(processInstanceId: string): Promise<IContext>;
    complete(processInstanceId: string, taskId: string, dataInstance: DataInstance, actionType: CompleteActionType, customType: CustomType): Promise<boolean>;
    commit(processInstanceId: string, taskId: string, dataInstance: DataInstance): Promise<boolean>;
    dataSearch: {
        searchQuery: (prop: IDataSearchParams) => Promise<IDataSearchResponse>;
    };
    file: {
        upload: (fileBody: string | Blob | Uint8Array | Buffer, fileName: string, label: string, action: IActionData) => Promise<IFile>;
        delete: (storageHandle: string, action: IActionData) => Promise<void>;
    };
    thread: {
        retryBrokenThread: (threadId: string, processInstanceId: string) => Promise<IProcessInstance>;
    };
}
export declare function createWorkflowCodeStepContext(workflow: IPlatformWFFAdaptor): Extract<FlowObjectContext, {
    type: "workflow";
}>;
//# sourceMappingURL=workflowCodeStepContext.d.ts.map