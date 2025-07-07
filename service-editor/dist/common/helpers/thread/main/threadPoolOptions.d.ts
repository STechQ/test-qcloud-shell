/// <reference types="node" />
import { WorkerOptions } from 'worker_threads';
import { OmitTyped } from "@stechquick/symphony-common/lib/helpers/typeHelper";
import { IThreadLogger } from "../common/IThreadLogger";
import { UserWorkerDataType } from '../common/IThreadMessages';
import { IThreadLoadBalancer, IThreadScaler } from './threadManager';
export type ThreadOptions<TWorkerData extends UserWorkerDataType = UserWorkerDataType> = OmitTyped<OmitTyped<WorkerOptions, "env">, "workerData"> & {
    userWorkerData?: TWorkerData;
};
export interface IThreadPoolOptionDefaults<TWorkerData extends UserWorkerDataType = UserWorkerDataType> {
    maxThreadSize: number;
    minThreadSize: number;
    threadOptions: ThreadOptions<TWorkerData>;
    logger?: IThreadLogger;
    entryPointFullPath: string;
    balancer: {
        name: IThreadLoadBalancer["name"];
    };
    scaler: {
        name: IThreadScaler["name"];
    };
}
export type IThreadPoolOptions<TWorkerData extends UserWorkerDataType> = {
    [K in keyof IThreadPoolOptionDefaults]?: IThreadPoolOptionDefaults[K];
} & {
    threadOptions?: ThreadOptions<TWorkerData>;
    entryPointFullPath: string;
};
export declare class ThreadPoolOptions<TWorkerData extends UserWorkerDataType = UserWorkerDataType> implements IThreadPoolOptionDefaults {
    readonly maxThreadSize: number;
    readonly minThreadSize: number;
    readonly threadOptions: ThreadOptions;
    readonly logger?: IThreadLogger;
    readonly entryPointFullPath: string;
    readonly balancer: {
        name: IThreadLoadBalancer["name"];
    };
    readonly scaler: {
        name: IThreadScaler["name"];
    };
    constructor(options: IThreadPoolOptions<TWorkerData>);
    private getNumber;
    private getBalancer;
    private getScaler;
}
//# sourceMappingURL=threadPoolOptions.d.ts.map