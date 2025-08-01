export interface ILogItem {
    level: "debug" | "info" | "log" | "warning" | "error";
    message: string;
    additional?: any;
    error?: unknown;
}
export interface ILogger {
    log(item: ILogItem): void;
}
//# sourceMappingURL=ILogger.d.ts.map