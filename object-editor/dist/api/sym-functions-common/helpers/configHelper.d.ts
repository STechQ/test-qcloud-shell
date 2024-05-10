import { ISymphonyObject } from "@stechquick/symphony/dist";
export declare class ConfigHelper {
    getAzureCredentials(sym: ISymphonyObject): {
        clientId: string;
        azureTenantId: string;
        clientSecret: string;
        subscriptionId: string;
        studio: {
            dnsZoneName: string;
            resourceGroupName: string;
        };
        adb2c: {
            applicationId: string;
            directoryId: string;
            clientSecret: string;
        };
    };
}
//# sourceMappingURL=configHelper.d.ts.map