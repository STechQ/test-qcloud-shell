import { IThreadStates, IThreadScaler, IThreadScalerCallbacks } from "../main/threadManager";
import { ThreadPoolOptions } from "../main/threadPoolOptions";
export declare class MaxScaler implements IThreadScaler {
    private readonly options;
    private readonly callbacks;
    name: IThreadScaler["name"];
    constructor(options: ThreadPoolOptions, callbacks: IThreadScalerCallbacks);
    getInitialThreadCount(): number;
    scale<TJob, TJobResult>(states: IThreadStates<TJob, TJobResult>): void;
}
//# sourceMappingURL=maxScaler.d.ts.map