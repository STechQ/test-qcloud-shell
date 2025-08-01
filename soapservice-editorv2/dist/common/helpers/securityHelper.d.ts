export declare class SecurityHelper {
    static verifyToken<T extends Record<string, any>>(token: string, secret: string): Promise<T | null>;
    generateToken<T extends Record<string, any>>(tokenBody: T, secret: string, options?: {
        expireTime?: number | undefined;
    }): string;
}
//# sourceMappingURL=securityHelper.d.ts.map