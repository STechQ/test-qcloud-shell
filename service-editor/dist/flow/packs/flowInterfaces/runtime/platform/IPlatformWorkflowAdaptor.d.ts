import { IAddActivityProp, ICounterPropType, StepFlowModelPropType } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { IWorkflowContext } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowContext";
import { IWorkflowIncomingRequest } from "../../../../../common/everything/workflow/runtimeObjects/IWorkflowIncomingRequest";
import { IRestServiceCallPropType } from "../../../flowComponents/runtime/restServiceCall";
export interface IPlatformWFFAdaptor {
    flowExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    restServiceExecutor: (prop: IRestServiceCallPropType) => Promise<any>;
    soapServiceExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    keyExecutor: (prop: ICounterPropType) => Promise<any>;
    workflowDb: () => {
        permanentStore: {
            get: (key: string) => Promise<any>;
            set: (key: string, value: any) => Promise<any>;
        };
    };
    context: () => IWorkflowContext | undefined;
    getIncomingRequest: () => IWorkflowIncomingRequest;
    constantsWId: Record<string, any>;
    userId: string | undefined;
    addActivity: (prop: IAddActivityProp) => Promise<void>;
}
export interface IPlatformWorkflowServerResponse {
    status: number;
    headers: Record<string, string>;
    data: any;
}
export interface IPlatformWorkflowServerRequest {
    method: "GET" | "POST";
    url: string;
    headers?: Record<string, string>;
    body?: any;
}
//# sourceMappingURL=IPlatformWorkflowAdaptor.d.ts.map