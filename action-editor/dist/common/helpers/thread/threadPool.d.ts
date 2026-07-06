import { ISendMessageReplyToOptions, IThreadMsgKey, IThreadStopOptions } from "./main/threadManager";
import { IThreadPoolOptions } from "./main/threadPoolOptions";
import { IThreadRequestSource, ThreadBufferType } from "./common/IThreadRequest";
import { ThreadCustomMsgDict, UserWorkerDataType } from "./common/IThreadMessages";
import { IStructedSendOptions } from "@stechquick/algae/lib/helpers/socket/structuredSocket";
import { OmitTyped } from "@stechquick/symphony-common/lib/helpers/typeHelper";
import { IThreadPool } from "./IThreadPool";
export { isWebpack } from "./common/webpackHelper";
export declare class ThreadPool<TJob, TJobResult, TWorkerData extends UserWorkerDataType = UserWorkerDataType, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> implements IThreadPool<TJob, TJobResult, TWorkerData, TCustomMsgType> {
    private readonly initialOptions;
    private readonly options;
    private readonly threadManager;
    constructor(initialOptions: IThreadPoolOptions<TWorkerData>);
    /**
     *
     * @param job normal job data to be sent via ser/deser of post message
     * @param jobBuffers large buffers to be moved to worker thread memory space. (removed from main threads mamory space)
     * @returns
     */
    execute(job: IThreadRequestSource<TJob>): Promise<import("./common/IThreadRequest").IThreadResultTarget<TJobResult>>;
    stop(options: IThreadStopOptions): Promise<import("./main/threadManager").IThreadStopResult>;
    sendCustomMessageToAll(message: TCustomMsgType[keyof TCustomMsgType], options: OmitTyped<IStructedSendOptions<ThreadBufferType>, "replyId">): Promise<{
        threadId: number;
        prom: Promise<{
            message: import("./common/IThreadMessages").IThreadCustomMsgDictValue;
        } | undefined>;
    }[]>;
    sendCustomMessageReplyTo(message: TCustomMsgType[keyof TCustomMsgType], options: ISendMessageReplyToOptions): Promise<{
        message: import("./common/IThreadMessages").IThreadCustomMsgDictValue;
    } | undefined>;
    subscribeCustomMessage(key: keyof TCustomMsgType, cb: (message: TCustomMsgType[keyof TCustomMsgType], msgKey: IThreadMsgKey) => (void | Promise<void>)): void;
    report(): import("./common/IThreadReport").IThreadPoolReport;
}
//# sourceMappingURL=threadPool.d.ts.map