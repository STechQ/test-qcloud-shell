import { ISymphonyObject } from "@stechquick/symphony/dist/src/infrastructure/managers/symphonyObject/symphonyObjectManager";
import { TReqDefault, TReqHeaderDefault, TReqHeaderSingleDefault } from "@stechquick/symphony/dist/src/infrastructure/managers/symphonyObject/symphonyRequest";
import { TRespDefault, TRespHeaderDefault } from "@stechquick/symphony/dist/src/infrastructure/managers/symphonyObject/symphonyResponse";
import { SymFunc } from "@stechquick/symphony/dist/src/symphony";
export interface IServiceResult<T = any> {
    status: "success" | "error" | "customerror" | "permissionError";
    data: T;
    error?: {
        message: string;
        title?: string;
    };
}
export interface IServiceExecuter {
    responseData: () => any;
    sym: ISymphonyObject;
    logResponse?: boolean;
    contentType?: "application/json" | 'text/plain';
}
export declare class ServiceHelper {
    static CreateResponse3<TReq extends TReqDefault = TReqDefault, TReqHeader extends TReqHeaderDefault = TReqHeaderDefault, TResp extends TRespDefault = TRespDefault, TRespHeader extends TRespHeaderDefault = TRespHeaderDefault, TReqHeaderSingle extends TReqHeaderSingleDefault = TReqHeaderSingleDefault>(func: (sym: ISymphonyObject<TReq, TReqHeader, TResp, TRespHeader, TReqHeaderSingle>) => Promise<TResp>, options: Omit<Omit<IServiceExecuter, "responseData">, "sym">): SymFunc<TReq, TReqHeader, TResp, TRespHeader, TReqHeaderSingle>;
    static CreateResponse2(param1: IServiceExecuter["responseData"], options: Omit<IServiceExecuter, "responseData">): Promise<void>;
    static CreateResponse(options: IServiceExecuter): Promise<void>;
    static HandleError(error: unknown, sym: ISymphonyObject): void;
}
//# sourceMappingURL=serviceHelper.d.ts.map