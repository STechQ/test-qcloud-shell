import { AppServicePlan, User, WebAppsGetResponse } from "@azure/arm-appservice";
import { ICloudDiContainer } from "../../domain/useCases/ICloudProvider";
import { IAzureCloudAppsCredentials } from "./azureLowCommon";
export interface IAppServicePlan extends AppServicePlan {
    kind: "functionapp" | "";
}
export interface IFunctionAppServicePlan extends IAppServicePlan {
    kind: "functionapp";
    reserved: true;
    sku: {
        name: "Y1";
        tier: "Dynamic";
        size: "Y1";
        family: "Y";
        capacity: 0;
    };
}
export interface IFunctionAppParams {
    storageAccountName: string;
    appServicePlanName: string;
    storageAccountKey: string;
    location: string;
}
export declare class AzureFunctionsLow {
    private readonly dic;
    private readonly credentials;
    constructor(dic: ICloudDiContainer, credentials: IAzureCloudAppsCredentials);
    getFunctionApp(resourceGroupName: string, functionAppName: string): Promise<WebAppsGetResponse>;
    createFunctionApp(resourceGroupName: string, appParams: IFunctionAppParams): Promise<{
        functionAppName: string;
        functionAppEndpoint: string;
    }>;
    updateFunctionAppEnvVars(resourceGroupName: string, functionAppName: string, envVars: Record<string, string>): Promise<void>;
    getFunctionAppEnvVars(resourceGroupName: string, functionAppName: string): Promise<Record<string, string>>;
    deleteFunctionApp(resourceGroupName: string, funcAppName: string): Promise<void>;
    getPublishingCredentials(resourceGroupName: string, functionAppName: string): Promise<User>;
    createAppServicePlan(resourceGroupName: string, appServicePlanName: string, appServicePlan: AppServicePlan): Promise<AppServicePlan>;
    deleteAppServicePlan(resourceGroupName: string, appServicePlanName: string): Promise<void>;
    publishFunctionAppWithZipDeploy(functionAppName: string, publishingCredentials: User, folderPath: string): Promise<void>;
    private secretCredentials;
    private createWebSiteManagementClient;
    private createFunctionAppName;
    private createFunctionAppSiteEnvelope;
}
//# sourceMappingURL=azureLowFunctions.d.ts.map