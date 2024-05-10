import { ClientSecretCredential } from "@azure/identity";
export interface IAzureCloudAppsCredentials {
    clientId: string;
    azureTenantId: string;
    clientSecret: string;
    subscriptionId: string;
    studio: {
        dnsZoneName: string;
        resourceGroupName: string;
    };
    adb2c?: {
        applicationId: string;
        directoryId: string;
        clientSecret: string;
    };
}
type HandlerReturn = void | undefined | {
    retry?: boolean;
};
export declare function handle<T>(cb: () => Promise<T>, handlers: Record<number, ((err: Error) => HandlerReturn | Promise<HandlerReturn>) | undefined>): Promise<T | undefined>;
export declare const createSecretCredentials: (credentials: IAzureCloudAppsCredentials) => ClientSecretCredential;
export {};
//# sourceMappingURL=azureLowCommon.d.ts.map