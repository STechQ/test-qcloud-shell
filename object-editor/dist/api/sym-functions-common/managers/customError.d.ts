export interface ICustomErrorAdditionals {
    errorCode?: string;
    errorDetail?: string;
}
export interface ICustomErrorOptions {
    message: string;
    title?: string;
}
export interface ITechnicalErrorOptions {
    message: string;
    statusCode?: 200 | 401 | 400;
    body?: any;
    headers?: Record<string, string>;
}
export interface IPermissionErrorOptions {
    message: string;
    statusCode?: 200 | 401 | 400;
    body?: any;
    headers?: Record<string, string>;
}
export declare class TechnicalError extends Error {
    options: ITechnicalErrorOptions;
    static Name: string;
    constructor(options: ITechnicalErrorOptions);
}
export declare class PermissionError extends Error {
    options: IPermissionErrorOptions;
    static Name: string;
    constructor(options: IPermissionErrorOptions);
}
export declare class CustomError extends Error implements CustomError {
    static Name: string;
    constructor(options: ICustomErrorOptions);
}
export interface CustomError extends Error {
    title?: string;
}
//# sourceMappingURL=customError.d.ts.map