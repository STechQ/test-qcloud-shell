type ThreadClientStatusInitial = "0-initial";
export type ThreadClientStatus = ThreadClientStatusInitial | "1-online" | "2-running" | "3-draining" | "3-stopping" | "4-stopped";
export interface IThreadReport {
    threadId: number;
    status: ThreadClientStatus;
    jobCount: number;
    asyncFree: boolean;
}
export interface IThreadPoolReport {
    balancer: {
        name: string;
        threadReports: Array<IThreadReport>;
        jobQueue: number;
    };
    scaler: {
        name: string;
        sizes: {
            workingThreads: number;
            initializingThreads: number;
            drainingThreads: number;
        };
    };
}
export {};
//# sourceMappingURL=IThreadReport.d.ts.map