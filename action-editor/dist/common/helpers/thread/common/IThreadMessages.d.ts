import { OmitTyped } from "@stechquick/symphony-common/lib/helpers/typeHelper";
import { ITransferableError } from "./threadErrorHelper";
export type UserWorkerDataType = {
    [key: string]: any;
    secret?: Record<string, any>;
};
export interface IThreadCustomMsgDictValue {
    type: string;
    [key: string]: any;
}
export type ThreadCustomMsgDict = Record<string, IThreadCustomMsgDictValue>;
export type IThreadMessages<TJob, TJobResult, TUserWorkerData extends UserWorkerDataType = UserWorkerDataType, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> = {
    workerInitialData: {
        type: "workerInitialData";
        userWorkerData?: OmitTyped<TUserWorkerData, "secret">;
    };
    workerInitRequest: {
        type: "workerInitRequest";
        secretWorkerData?: TUserWorkerData["secret"];
    };
    workerInitResponse: {
        type: "workerInitResponse";
    };
    jobRequest: {
        type: "jobRequest";
        job: TJob;
    };
    jobResponse: {
        type: "jobResponse";
        result: TJobResult;
    };
    jobResponseError: {
        type: "jobResponseError";
        error: {
            name: string;
            message: string;
            stack: string | undefined;
        };
    };
    asyncFreeUpdate: {
        type: "asyncFreeUpdate";
        isFree: boolean;
    };
    customMsg: {
        type: "customMsg";
        to: number | "main";
        from: number | "main";
        awaitResponse?: true;
        error?: ITransferableError;
        message: TCustomMsgType[keyof TCustomMsgType];
    };
};
//# sourceMappingURL=IThreadMessages.d.ts.map