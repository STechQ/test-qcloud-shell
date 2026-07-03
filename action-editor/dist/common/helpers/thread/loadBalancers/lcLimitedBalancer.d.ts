import { ThreadClient } from "../main/threadClient";
import { IThreadStates, IThreadLoadBalancer } from "../main/threadManager";
import { ThreadPoolOptions } from "../main/threadPoolOptions";
export declare class LcLimitedBalancer implements IThreadLoadBalancer {
    private readonly options;
    name: IThreadLoadBalancer["name"];
    constructor(options: ThreadPoolOptions);
    balance<TJob, TJobResult>(states: IThreadStates<TJob, TJobResult>): "queue" | ThreadClient<TJob, TJobResult>;
    threadDemandsJob<TJob, TJobResult>(thread: ThreadClient<TJob, TJobResult>, jobQueues: IThreadStates<TJob, TJobResult>["jobQueues"]): boolean;
}
//# sourceMappingURL=lcLimitedBalancer.d.ts.map