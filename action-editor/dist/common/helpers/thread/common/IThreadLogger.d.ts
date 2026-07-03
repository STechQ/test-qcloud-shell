type TNumberDigit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export interface IThreadLogItem {
    message: string;
    level: "debug" | "log" | "info" | "warn" | "error";
    error?: Error;
    additional?: any;
    code: `${TNumberDigit}${TNumberDigit}`;
}
export interface IThreadLogger {
    log: (logItem: IThreadLogItem) => void;
}
export {};
//# sourceMappingURL=IThreadLogger.d.ts.map