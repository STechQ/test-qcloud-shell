import { ParsedWsdl } from "./models/parsed-wsdl";
import { IThreadLogger } from "../thread/common/IThreadLogger";
import { IThreadEntyPoint } from "../thread/common/IThreadEntryPoint";
export interface IWsdlParserJob {
    wsdl: string;
}
export interface IWsdlParserResult {
    parsedWsdl: ParsedWsdl;
}
export declare const logger: IThreadLogger;
export declare class WsdlParserThreadPool {
    private wsdlParserTP;
    constructor();
    sendJob(wsdl: string): Promise<ParsedWsdl>;
}
type WsdlParserEntryPoint = IThreadEntyPoint<IWsdlParserJob, IWsdlParserResult>;
export declare class ThreadEntry implements WsdlParserEntryPoint {
    workerTarget: WsdlParserEntryPoint["workerTarget"];
    onInit: WsdlParserEntryPoint["onInit"];
}
export {};
//# sourceMappingURL=wsdlParserThreadHelper.d.ts.map