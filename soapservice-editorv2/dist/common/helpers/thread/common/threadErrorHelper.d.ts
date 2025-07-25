export interface ITransferableError {
    message: string;
    stack?: string;
    errors?: Array<ITransferableError>;
    axios?: {
        code?: IAxiosError["code"];
        cause?: ITransferableError;
        response?: IAxiosError["response"];
        config: IAxiosError["config"];
    };
}
interface IAxiosError {
    isAxiosError: boolean;
    code?: string;
    cause?: Error;
    config?: {
        url?: string;
    };
    response?: {
        data: unknown;
        headers: Record<string, any>;
        status: number;
        statusText: string;
    };
}
export declare class ThreadErrorHelper {
    static createError(transferError: ITransferableError, additionals: {
        message?: string;
    }): Error;
    static convertErrorToTransferable(err: Error): ITransferableError;
}
export {};
//# sourceMappingURL=threadErrorHelper.d.ts.map