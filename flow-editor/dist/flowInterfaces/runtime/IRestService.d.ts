import { IExpressionData, ISetExpressionData } from "./IExpression";
import { IModelBase } from "./IModel";
export interface IRestService extends IModelBase {
    id: string;
    version: string;
    type: 'restService';
    name: string;
    _name: string;
    desc: string;
    httpMethod: Array<HttpMethod>;
    contentType?: ContentType;
    hostKey: string;
    requestHeader?: Record<string, IExpressionData>;
    requestUrl?: Array<IRestUrlParam>;
    requestBody?: Array<{
        targetKey: string;
        src: IExpressionData;
    }>;
    responseHeader?: Record<string, ISetExpressionData>;
    responseBody?: Array<{
        srcKey: string;
        target: ISetExpressionData;
    }>;
    responseStatus?: ISetExpressionData;
    cachePeriod?: number;
    mock?: Array<IRestMock>;
    inVariables?: Array<IVariable>;
    outVariables?: Array<IVariable>;
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
    value: IExpressionData;
}
export interface IRestQueryParams extends IRestUrlParamBase {
    type: "QUERY";
    key: IExpressionData;
    value: IExpressionData;
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
    respHeaders: Record<string, string>;
    respBody: Record<string, any>;
    respStatus: number;
}
//# sourceMappingURL=IRestService.d.ts.map