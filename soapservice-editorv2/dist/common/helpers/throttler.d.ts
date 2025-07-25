export interface IThrottleOptions {
    time: number;
    triggerLastCall?: boolean;
}
export declare class Throttler {
    static throttle<TFunc extends Function>(cb: TFunc, { time, triggerLastCall }: IThrottleOptions): TFunc;
}
//# sourceMappingURL=throttler.d.ts.map