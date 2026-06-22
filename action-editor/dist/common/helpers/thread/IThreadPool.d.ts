import { IStructedSendOptions } from "@stechquick/algae/lib/helpers/socket/structuredSocket";
import { OmitTyped } from "@stechquick/symphony-common/lib/helpers/typeHelper";
import { ThreadCustomMsgDict, UserWorkerDataType } from "./common/IThreadMessages";
import { IThreadPoolReport } from "./common/IThreadReport";
import { IThreadRequestSource, IThreadResultTarget, ThreadBufferType } from "./common/IThreadRequest";
import { ISendMessageReplyToOptions, IThreadMsgKey, IThreadStopOptions, IThreadStopResult, ThreadManager } from "./main/threadManager";
export interface IThreadPool<TJob, TJobResult, TWorkerData extends UserWorkerDataType = UserWorkerDataType, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> {
    execute(job: IThreadRequestSource<TJob>): Promise<IThreadResultTarget<TJobResult>>;
    stop(options: IThreadStopOptions): Promise<IThreadStopResult>;
    sendCustomMessageToAll(message: TCustomMsgType[keyof TCustomMsgType], options: OmitTyped<IStructedSendOptions<ThreadBufferType>, "replyId">): ReturnType<ThreadManager<TJob, TJobResult, TWorkerData, TCustomMsgType>["sendCustomMessageToAll"]>;
    sendCustomMessageReplyTo(message: TCustomMsgType[keyof TCustomMsgType], options: ISendMessageReplyToOptions): ReturnType<ThreadManager<TJob, TJobResult, TWorkerData, TCustomMsgType>["sendCustomMessageReplyTo"]>;
    subscribeCustomMessage(key: keyof TCustomMsgType, cb: (message: TCustomMsgType[keyof TCustomMsgType], msgKey: IThreadMsgKey) => (void | Promise<void>)): void;
    report(): IThreadPoolReport;
}
//# sourceMappingURL=IThreadPool.d.ts.map