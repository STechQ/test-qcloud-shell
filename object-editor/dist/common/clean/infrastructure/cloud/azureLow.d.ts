/// <reference types="node" />
import { ResourceGroup } from "@azure/arm-resources";
import { StorageManagementClient, StorageAccountCreateParameters, StorageAccountUpdateParameters } from "@azure/arm-storage";
import { BlobItem, StaticWebsite } from "@azure/storage-blob";
import { ICloudDiContainer } from "../../domain/useCases/ICloudProvider";
import { RecordType } from "@azure/arm-dns";
import { IAzureCloudAppsCredentials } from "./azureLowCommon";
interface IStaticSiteOptions {
    indexDocument?: StaticWebsite["indexDocument"];
    errorDocument404Path?: StaticWebsite["errorDocument404Path"];
}
export type AzureBlobContentType = "application/json" | "image/jpeg" | "image/svg+xml";
export interface IUploadableObject {
    fullName: string;
    path: string;
    data: string | Buffer;
    contentType: AzureBlobContentType;
}
export interface IDeletableObject {
    fullName?: string;
    path: string;
}
export interface IDnsRecordBase {
    relativeName: string;
    type: RecordType;
}
export interface IDnsRecordNS extends IDnsRecordBase {
    type: "NS";
    nameServer: string;
}
export interface IDnsRecordCNAME extends IDnsRecordBase {
    type: "CNAME";
    alias: string;
}
export type DnsRecord = IDnsRecordNS | IDnsRecordCNAME;
export interface DeleteFolderResultFailType {
    blobName: string;
    errorCode: string | undefined;
}
export type DeleteFolderResult = {
    success: true;
    deletedCount: number;
} | {
    success: false;
    deletedCount: number;
    fails: Array<DeleteFolderResultFailType>;
};
export declare class AzureLow {
    private readonly dic;
    private readonly credentials;
    constructor(dic: ICloudDiContainer, credentials: IAzureCloudAppsCredentials);
    createDnsZone(resourceGroupName: string, zoneName: string): Promise<import("@azure/arm-dns").Zone>;
    createDnsRecord(resourceGroupName: string, zoneName: string, record: DnsRecord): Promise<void>;
    deleteDnsRecord(resourceGroupName: string, zoneName: string, record: IDnsRecordBase): Promise<void>;
    createResourceGroup(resourceGroupName: string, parameters: ResourceGroup): Promise<void>;
    deleteResourceGroup(resourceGroupName: string, options?: {
        wait?: boolean;
    }): Promise<void>;
    getStorageAccountProperties(resourceGroupName: string, storageAccountName: string, options: {
        storageClient?: StorageManagementClient;
    }): Promise<import("@azure/arm-storage").StorageAccount | undefined>;
    getStorageAccountKeys(resourceGroupName: string, storageAccountName: string, options: {
        storageClient?: StorageManagementClient;
    }): Promise<import("@azure/arm-storage").StorageAccountListKeysResult | undefined>;
    setStorageAccountProperties(resourceGroupName: string, storageAccountName: string, parameters: StorageAccountUpdateParameters): Promise<void>;
    deleteStorageAccount(resourceGroupName: string, storageAccountName: string): Promise<void>;
    createStorageAccount(resourceGroupName: string, options: {
        parameters: StorageAccountCreateParameters;
        updateTls?: boolean;
    }): Promise<{
        storageAccountName: string;
        webEndpoint: string;
    }>;
    upgradeToStaticSite(storageAccountName: string, options: IStaticSiteOptions): Promise<void>;
    uploadToStaticSite(storageAccountName: string, folderPath: string, options: {
        ignoreCb?: (fileName: string) => boolean;
    }): Promise<void>;
    private uploadFolder;
    uploadObjects(storageAccountName: string, containerName: string, items: Array<IUploadableObject>): Promise<void>;
    private createContainerIfNotExists;
    getBlobContent(storageAccountName: string, containerName: string, blobName: string): Promise<string>;
    getBlobObjectProperties(storageAccountName: string, containerName: string, blobName: string): Promise<import("@azure/storage-blob").BlobGetPropertiesResponse>;
    getBlobsUnderPath(storageAccountName: string, containerName: string, path: string): Promise<BlobItem[]>;
    private cumulateBlobsInFolder;
    deleteFolder(storageAccountName: string, folderName: string): Promise<DeleteFolderResult>;
    private checkResourceGroupExistence;
    private streamToString;
    deleteUser(userId: string): Promise<void>;
    private secretCredentials;
    private createStorageAccountName;
    private createResourceManagementClient;
    private createStorageManagementClient;
    private createBlobServiceClient;
    private createDnsClient;
}
export {};
//# sourceMappingURL=azureLow.d.ts.map