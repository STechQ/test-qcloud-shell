import { IPlatformClientAdaptor } from "./IPlatformClientAdaptor";
export interface IPlatformWorkflowAdaptor {
    client?: IPlatformClientAdaptor;
    server?: IPlatformWorkflowServerAdaptor;
    getContext: () => Record<string, any> | undefined;
    flowExecutor: (id: string, version: string, params: IPlatformWorkflowAdaptorParams) => Promise<any>;
}
export interface IPlatformWorkflowServerAdaptor {
    request: (request: IPlatformWorkflowServerRequest) => Promise<IPlatformWorkflowServerResponse>;
    urlGetter: (key: string) => Promise<string>;
}
export interface IPlatformWorkflowAdaptorParams {
    context?: any;
    input?: Record<string, any>;
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