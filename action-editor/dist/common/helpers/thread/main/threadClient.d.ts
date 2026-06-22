import { IStructedSendOptions } from '@stechquick/algae/lib/helpers/socket/structuredSocket';
import { ThreadPoolOptions } from './threadPoolOptions';
import { IThreadCustomMsgDictValue, IThreadMessages, ThreadCustomMsgDict } from '../common/IThreadMessages';
import { IPromiseData } from '@stechquick/symphony-common/lib/helpers/promiseData';
import { IThreadRequestSource, IThreadResultTarget, ThreadBufferType } from '../common/IThreadRequest';
import { IThreadReport, ThreadClientStatus } from '../common/IThreadReport';
export interface IJobQueueItem<TJob, TJobResult> {
    job: IThreadRequestSource<TJob>;
    jobResultProm: IPromiseData<IThreadResultTarget<TJobResult> | Error>;
}
interface IThreadCallbacks<TJob, TJobResult, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> {
    onCustomMsg: (message: TCustomMsgType[keyof TCustomMsgType], msgId: string, from: ThreadClient<TJob, TJobResult>) => (void | Promise<void>);
    onExit: (thread: ThreadClient<TJob, TJobResult>, code: number) => void;
    onDemandJobFromQueue: (thread: ThreadClient<TJob, TJobResult>) => IJobQueueItem<TJob, TJobResult> | undefined;
    onJobReady: (thread: ThreadClient<TJob, TJobResult>) => void;
    onError?: (thread: ThreadClient<TJob, TJobResult>, error: Error) => void;
    onOnline?: (thread: ThreadClient<TJob, TJobResult>) => void;
    onMessageError?: (thread: ThreadClient<TJob, TJobResult>, error: Error) => void;
}
export declare class ThreadClient<TJob, TJobResult> {
    private readonly callbacks;
    private readonly poolOptions;
    get jobCount(): number;
    private _jobCount;
    get status(): ThreadClientStatus;
    private _status;
    get asyncFree(): boolean;
    private _asyncFree;
    get workerThreadId(): number;
    private readonly _workerThreadId;
    private readonly worker;
    private readonly structuredSocket;
    private drainPromiseData;
    private lastErrorMessage?;
    constructor(callbacks: IThreadCallbacks<TJob, TJobResult>, poolOptions: ThreadPoolOptions);
    drain(): Promise<number>;
    private checkDrain;
    destroy(reason: string, options: {
        noWarn?: boolean;
    }): Promise<number>;
    private initRequest;
    sendJob(job: IThreadRequestSource<TJob>): Promise<Error | IThreadResultTarget<TJobResult>>;
    private asyncFreeUpdate;
    private checkQueue;
    private onError;
    private onExit;
    private onOnline;
    private onMessageError;
    private onCustomMessage;
    sendCustomMessage(message: IThreadMessages<TJob, TJobResult>["customMsg"]["message"], options: IStructedSendOptions<ThreadBufferType>): Promise<{
        message: IThreadCustomMsgDictValue;
    } | undefined>;
    report(): IThreadReport;
    private statusIs;
    private isStatus;
    private warnStatus;
    private assertStatus;
}
export {};
//# sourceMappingURL=threadClient.d.ts.map