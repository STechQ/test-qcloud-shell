import { IThreadMessages, ThreadCustomMsgDict, UserWorkerDataType } from '../common/IThreadMessages';
import { IStructedSendOptions } from '@stechquick/algae/lib/helpers/socket/structuredSocket';
import { IThreadLogger } from '../common/IThreadLogger';
import { IThreadEntyPoint } from '../common/IThreadEntryPoint';
import { IThreadRequestTarget, IThreadResultSource, ThreadBufferType } from '../common/IThreadRequest';
export interface IThreadEntryOptions<TJob, TJobResult, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> {
    logger: IThreadLogger;
    onJob: (job: IThreadRequestTarget<TJob>) => Promise<IThreadResultSource<TJobResult>>;
    onClose: () => void;
}
export declare class ThreadEntry<TJob, TJobResult, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> {
    private options;
    private readonly socket;
    private readonly structuredSocket;
    private isRunning;
    private jobCount;
    readonly threadId: number;
    private customMsgHandler;
    constructor(options: IThreadEntryOptions<TJob, TJobResult, TCustomMsgType>);
    asyncFreeUpdate(isFree: IThreadMessages<TJob, TJobResult>["asyncFreeUpdate"]["isFree"]): void;
    private onClose;
    private checkEnd;
    private onWorkerInitRequest;
    private onJobRequest;
    subscribeCustomMessage(key: keyof TCustomMsgType, cb: (message: TCustomMsgType[keyof TCustomMsgType], msgKey: string) => (void | Promise<void>)): void;
    private onCustomMessage;
    sendCustomMessageToMain(message: IThreadMessages<TJob, TJobResult, UserWorkerDataType, TCustomMsgType>["customMsg"]["message"], options: IStructedSendOptions<ThreadBufferType>): Promise<{
        message: TCustomMsgType[keyof TCustomMsgType];
    } | undefined>;
}
export declare function startWorker(entryPoint: IThreadEntyPoint<any, any, any, any> | {
    new (): IThreadEntyPoint<any, any, any, any>;
}): Promise<void>;
//# sourceMappingURL=threadEntry.d.ts.map