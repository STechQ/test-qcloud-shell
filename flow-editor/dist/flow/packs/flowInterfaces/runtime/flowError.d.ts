export interface IFlowError {
    readonly type: "business" | "technical";
    readonly category: "warn" | "error";
    readonly message: string;
    readonly code: string;
    readonly summary?: string;
    readonly parameters?: Record<string, string>;
}
export declare class FlowError extends Error implements IFlowError {
    readonly type: IFlowError["type"];
    readonly category: IFlowError["category"];
    readonly code: IFlowError["code"];
    readonly summary?: IFlowError["summary"];
    readonly parameters?: IFlowError["parameters"];
    constructor(errorData: IFlowError);
}
//# sourceMappingURL=flowError.d.ts.map