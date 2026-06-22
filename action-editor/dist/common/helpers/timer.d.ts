export interface ITimerOptions {
    time: number;
    callback: () => void;
    interval?: {
        time: number;
        callback: () => void;
    };
}
export declare class Timer {
    private options?;
    private mainInterval?;
    private targetTime?;
    private lastIntervalCall;
    isTimerRunning: boolean;
    reset(): void;
    setUp(options: ITimerOptions): void;
    restart(): void;
}
//# sourceMappingURL=timer.d.ts.map