import { ObjectID } from "../../dataType/runtimemodels/types";
import { IModelBaseFields } from "../../workflow/runtimemodels/IModel";
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export interface IHandlerParams {
    key: string;
    field: string;
}
export interface IEndpointHandler {
    transactionable: boolean;
    method: Array<HttpMethod> | HttpMethod;
    trigger: {
        type: "befunc" | "flow";
        modelId: ObjectID;
        inputMapping: {
            type: "requestToFlowInput";
            body?: string;
            headers?: string;
            pathParams?: Array<{
                key: string;
                field: string;
            }>;
            queryParams?: Array<{
                key: string;
                field: string;
            }>;
        };
        outputMapping: {
            type: "flowOutputToResponse";
            body?: string;
            headers?: string;
            statusCode?: string;
        };
    };
}
export interface IEndpointModel extends IModelBaseFields {
    type: "endpoint";
    name: string;
    path: string;
    middlewares: Array<any>;
    handlers: Array<IEndpointHandler>;
}
//# sourceMappingURL=IEndpointModel.d.ts.map