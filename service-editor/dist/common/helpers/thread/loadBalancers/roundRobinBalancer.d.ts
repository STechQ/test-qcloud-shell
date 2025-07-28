import { ThreadClient } from "../main/threadClient";
import { IThreadStates, IThreadLoadBalancer } from "../main/threadManager";
import { ThreadPoolOptions } from "../main/threadPoolOptions";
export declare class RoundRobinBalancer implements IThreadLoadBalancer {
    private readonly options;
    name: IThreadLoadBalancer["name"];
    private last;
    private threadsArray;
    constructor(options: ThreadPoolOptions);
    notifyEvents: IThreadLoadBalancer["notifyEvents"];
    balance<TJob, TJobResult>(states: IThreadStates<TJob, TJobResult>): ThreadClient<TJob, TJobResult> | "queue";
    threadDemandsJob<TJob, TJobResult>(thread: ThreadClient<TJob, TJobResult>, jobQueues: IThreadStates<TJob, TJobResult>["jobQueues"]): boolean;
}
//# sourceMappingURL=roundRobinBalancer.d.ts.map