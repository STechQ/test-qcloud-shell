import { ICloudDiContainer, IDatabaseConnectionStrings } from "../../domain/useCases/ICloudProvider";
import { IAzureCloudAppsCredentials } from "./azureLowCommon";
export interface ICreateCosmosDbParameters {
    location: string;
    kind: "MongoDB";
    enableServerless?: boolean;
}
export declare class AzureLowCosmos {
    private readonly dic;
    private readonly credentials;
    constructor(dic: ICloudDiContainer, credentials: IAzureCloudAppsCredentials);
    createCosmosDb(resourceGroupName: string, parameters: ICreateCosmosDbParameters): Promise<{
        cosmosDbAccountName: string;
        connectionStrings: IDatabaseConnectionStrings | undefined;
    }>;
    deleteCosmosDb(resourceGroupName: string, cosmosDbAccountName: string): Promise<void>;
    private checkIfCosmosDbExistsInResourceGroup;
    private getCosmosDbConnectionStrings;
    private createCosmosDbAccountName;
    private secretCredentials;
    private createCosmosDBManagementClient;
}
//# sourceMappingURL=azureLowCosmos.d.ts.map