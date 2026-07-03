import { ThreadPoolOptions } from './threadPoolOptions';
import { IJobQueueItem, ThreadClient } from './threadClient';
import { IThreadRequestSource, ThreadBufferType } from '../common/IThreadRequest';
import { IThreadCustomMsgDictValue, ThreadCustomMsgDict, UserWorkerDataType } from '../common/IThreadMessages';
import { IStructedSendOptions } from '@stechquick/algae/lib/helpers/socket/structuredSocket';
import { OmitTyped } from '@stechquick/symphony-common/lib/helpers/typeHelper';
import { CustomMessageCB } from '../common/customMessageHandler';
import { IThreadPoolReport } from '../common/IThreadReport';
export interface IThreadStates<TJob, TJobResult> {
    /**
     * @see ThreadClientStatus 2-
     */
    workingThreads: Set<ThreadClient<TJob, TJobResult>>;
    /**
     * @see ThreadClientStatus 3-
     */
    drainingThreads: Set<ThreadClient<TJob, TJobResult>>;
    /**
     * @see ThreadClientStatus 0- & 1-
     */
    initializingThreads: Set<ThreadClient<TJob, TJobResult>>;
    jobQueues: Array<IJobQueueItem<TJob, TJobResult>>;
}
export interface IThreadNotifyEvents {
    deleteThread<TJob, TJobResult>(thread: ThreadClient<TJob, TJobResult>): void;
    addThread<TJob, TJobResult>(thread: ThreadClient<TJob, TJobResult>): void;
}
export interface IThreadLoadBalancerCtor {
    new (options: ThreadPoolOptions): IThreadLoadBalancer;
}
export interface IThreadLoadBalancer {
    name: "roundRobin" | "leastConnection" | "leastConnectionLimited";
    notifyEvents?: IThreadNotifyEvents;
    balance<TJob, TJobResult>(states: IThreadStates<TJob, TJobResult>): ThreadClient<TJob, TJobResult> | "queue";
    threadDemandsJob<TJob, TJobResult>(thread: ThreadClient<TJob, TJobResult>, jobQueues: IThreadStates<TJob, TJobResult>["jobQueues"]): boolean;
}
export interface IThreadScalerCallbacks {
    scaleUpTo: (targetWorkerCount: number) => (Array<ThreadClient<any, any>> | undefined);
    scaleDown: (deleteThreads: Array<ThreadClient<any, any>>) => void;
}
export interface IThreadScalerCtor {
    new (options: ThreadPoolOptions, callbacks: IThreadScalerCallbacks): IThreadScaler;
}
export interface IThreadScaler {
    name: "min" | "max";
    getInitialThreadCount(): number;
    notifyEvents?: IThreadNotifyEvents;
    scale<TJob, TJobResult>(states: IThreadStates<TJob, TJobResult>): void;
}
export interface IThreadStopOptions {
    drainTimeInMs: number;
}
export interface IThreadStopResult {
    drainedCount: number;
    killedCount: number;
}
export type IThreadMsgKey = {
    msgId: string;
};
export type ISendMessageReplyToOptions = OmitTyped<IStructedSendOptions<ThreadBufferType>, "replyId"> & {
    replyId: IThreadMsgKey;
};
export declare class ThreadManager<TJob, TJobResult, TWorkerData extends UserWorkerDataType = UserWorkerDataType, TCustomMsgType extends ThreadCustomMsgDict = ThreadCustomMsgDict> {
    private readonly poolOptions;
    private readonly balancerCtor;
    private readonly scalerCtor;
    private workingThreads;
    private drainingThreads;
    private initializingThreads;
    private messageWaitingThreadMap;
    private customMsgHandler;
    private jobQueues;
    private balancer;
    private scaler;
    constructor(poolOptions: ThreadPoolOptions, balancerCtor: IThreadLoadBalancerCtor, scalerCtor: IThreadScalerCtor);
    private threadSetAdd;
    private threadSetDelete;
    private scaleUpTo;
    private scaleDown;
    private onThreadExit;
    private onThreadCustomMessage;
    subscribeCustomMessage(key: keyof TCustomMsgType, cb: CustomMessageCB<IThreadMsgKey, TCustomMsgType>): void;
    sendCustomMessageReplyTo(message: TCustomMsgType[keyof TCustomMsgType], options: ISendMessageReplyToOptions): Promise<{
        message: IThreadCustomMsgDictValue;
    } | undefined>;
    sendCustomMessageToAll(message: TCustomMsgType[keyof TCustomMsgType], options: OmitTyped<IStructedSendOptions<ThreadBufferType>, "replyId">): Promise<{
        threadId: number;
        prom: ReturnType<ThreadClient<TJob, TJobResult>["sendCustomMessage"]>;
    }[]>;
    send(job: IThreadRequestSource<TJob>): Promise<Error | import("../common/IThreadRequest").IThreadResultTarget<TJobResult>>;
    private queue;
    private onDemandJobFromQueue;
    stop(options: IThreadStopOptions): Promise<IThreadStopResult>;
    report(): IThreadPoolReport;
}
//# sourceMappingURL=threadManager.d.ts.map