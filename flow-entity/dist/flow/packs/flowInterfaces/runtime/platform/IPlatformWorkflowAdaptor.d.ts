import { IStepFlowModelProps, StepFlowModelPropType } from "../../../../../common/runtime/interfaces/objects/IWorkflow";
import { IPlatformClientAdaptor } from "./IPlatformClientAdaptor";
export interface IPlatformWorkflowAdaptor {
    client?: IPlatformClientAdaptor;
    server?: IPlatformWorkflowServerAdaptor;
    flowExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    restServiceExecutor: (prop: IStepFlowModelProps) => Promise<any>;
}
export interface IPlatformWorkflowServerAdaptor {
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