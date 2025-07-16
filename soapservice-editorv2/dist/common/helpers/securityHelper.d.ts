export declare class SecurityHelper {
    generateToken<T extends Record<string, any>>(tokenBody: T, secret: string, options?: {
        expireTime?: number | undefined;
    }): string;
}
//# sourceMappingURL=securityHelper.d.ts.map