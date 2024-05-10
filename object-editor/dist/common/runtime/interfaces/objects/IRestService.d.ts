import { IStore } from "../store/IStore";
import { IWFExpressionData, IWFSetExpressionData } from "../../IWorkflowExpression";
import { IModelBase } from "../IModel";
export interface IRestService extends IModelBase {
    id: string;
    version: string;
    type: 'restService';
    name: string;
    _name: string;
    desc: string;
    httpMethod: Array<HttpMethod>;
    contentType?: ContentType;
    hostKey: IWFExpressionData;
    requestHeader?: Record<string, IWFExpressionData>;
    requestUrl?: Array<IRestUrlParam>;
    requestBody?: Array<{
        bodyKey: string;
        value: IWFExpressionData;
    }>;
    responseHeader?: Record<string, IWFSetExpressionData>;
    responseBody?: Array<{
        bodyKey: string;
        value: IWFSetExpressionData;
    }>;
    responseStatus?: IWFSetExpressionData;
    cachePeriod?: number;
    mock?: Array<IRestMock>;
    store: IStore;
}
export type HttpMethod = 'GET' | 'POST';
export type ContentType = 'application/json';
export type IRestUrlParam = IRestPathVariable | IRestQueryParams;
export interface IRestUrlParamBase {
    type: "PATH" | "QUERY";
    required?: boolean;
}
export interface IRestPathVariable extends IRestUrlParamBase {
    type: "PATH";
    value: IWFExpressionData;
}
export interface IRestQueryParams extends IRestUrlParamBase {
    type: "QUERY";
    key: IWFExpressionData;
    value: IWFExpressionData;
}
export interface IVariable {
    name: string;
    _name: string;
    desc: string;
    type: string;
    isList: boolean;
}
export interface IRestMock {
    reqExp: string;
    responseHeaders: Record<string, string>;
    responseBody: Record<string, any>;
    responseStatus: number;
}
//# sourceMappingURL=IRestService.d.ts.map