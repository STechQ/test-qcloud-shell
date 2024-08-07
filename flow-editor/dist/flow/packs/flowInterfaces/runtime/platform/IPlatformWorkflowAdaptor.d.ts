import { ICounterPropType, StepFlowModelPropType } from "../../../../../common/everything/workflow/runtimemodels/IWorkflow";
import { MongoClient } from "mongodb";
export interface IPlatformWorkflowAdaptor {
    flowExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    restServiceExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    soapServiceExecutor: (prop: StepFlowModelPropType) => Promise<any>;
    keyExecutor: (prop: ICounterPropType) => Promise<any>;
    db: () => {
        mongo: (url: string) => Promise<MongoClient>;
    };
    request: () => {
        headers: Record<string, string>;
    };
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