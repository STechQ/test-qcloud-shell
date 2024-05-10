/// <reference types="node" />
import { IUpdateDbOrganizationoptions } from "../../../../api/sym-functions-common/helpers/organizationHelper";
import { ICrypto } from "../infrastructure/ICrypto";
import { ILogger } from "../infrastructure/ILogger";
import { IMime } from "../infrastructure/IMime";
import { Stats } from "fs";
export interface ICloudProviderFileSystem {
    getStatAsync(source: string): Promise<Stats>;
    getItemsAsync(path: string): Promise<Array<string>>;
}
export declare const ICloudProviderFileSystem: unique symbol;
export interface ICloudDiContainer {
    logger: ILogger;
    mime: IMime;
    fileSystem: ICloudProviderFileSystem;
    crypto: ICrypto;
}
export interface IOrganizationCloud {
    azure?: {
        resourceGroupID?: string;
        modelStorageID?: string;
        storageHostUrl?: string;
        storageWebSiteEnabled?: boolean;
        dnsZoneName?: string;
    };
    plateauGCP?: {
        environmentPrefix?: string;
    };
}
export interface IOrganizationOptions {
    organizationId: string;
    organizationName: string;
    region: string;
    envID: string;
    cloud?: IOrganizationCloud;
}
export type UpdateOrganizationOnDBCallback = (organizationId: string, params: {
    cloud: IOrganizationCloud;
}, options?: IUpdateDbOrganizationoptions) => Promise<void>;
export type UpdateAppOnDBCallback = (organizationId: string, appID: string, params: {
    cloud: IAppCloud;
}) => Promise<void>;
export interface ICreateOrganizationOptions {
    organization: IOrganizationOptions;
    callbacks: {
        updateOrganizationOnDBCallback: UpdateOrganizationOnDBCallback;
    };
}
export interface IDeleteOrganizationOptions {
    organization: IOrganizationOptions;
}
export type IAzureDatabaseType = "cosmon";
export interface IDatabaseConnectionStrings {
    readWrite?: {
        primary?: string;
        secondary?: string;
    };
    readOnly?: {
        primary?: string;
        secondary?: string;
    };
}
export interface IAppCloud {
    azure?: {
        uiStorageID?: string;
        webEndpoint?: string;
        relativeDnsRecord?: string;
        dnsEndpoint?: string;
        web?: {
            publishDate: Date;
            publishedBy: string;
        };
        mobile?: {
            publishDate: Date;
            publishedBy: string;
            publishId: string;
        };
        backend?: {
            appServicePlan?: string;
            funcionAppName?: string;
            functionAppEndpoint?: string;
            database?: {
                name: string;
                type: IAzureDatabaseType;
                connStrings: IDatabaseConnectionStrings;
            };
        };
        organizationStoragePath?: string;
    };
    plateauGCP?: {
        web?: {
            publishDate: Date;
            publishedBy: string;
        };
        mobile?: {
            publishDate: Date;
            publishedBy: string;
        };
        hosts?: Array<string>;
        isActive: boolean;
    };
}
export interface IAppOptions extends IAppBaseOptions {
    uiFolderPath?: string;
    backendFolderPath?: string;
}
export interface IAppDeleteOptions extends IAppBaseOptions {
}
export interface IAppUpdateOptions extends IAppBaseOptions {
}
interface IAppBaseOptions {
    appID: string;
    appName: string;
    organizationId: string;
    cloud?: IAppCloud;
}
export interface ICreateAppOptions {
    organization: IOrganizationOptions;
    app: IAppOptions;
    createdBy: string;
    publishId?: string;
    cause: "web" | "mobile" | "web+mobile";
    databaseOptions?: {
        type: IAzureDatabaseType;
    };
    callbacks: {
        updateAppOnDBCallback: UpdateAppOnDBCallback;
        updateOrganizationOnDBCallback: UpdateOrganizationOnDBCallback;
    };
}
export interface IDeleteAppOptions {
    organization: IOrganizationOptions;
    app: IAppDeleteOptions;
}
export interface IUpdateUIOptions {
    organization: IOrganizationOptions;
    app: IAppUpdateOptions;
    callbacks: {
        updateApp: UpdateAppOnDBCallback;
    };
}
export interface IUploadModelsToStorageOptions {
    organization: IOrganizationOptions;
    callbacks: {
        updateOrganizationOnDBCallback: UpdateOrganizationOnDBCallback;
    };
}
export interface IUploadCdnFilesToStorageOptions extends IUploadModelsToStorageOptions {
}
export interface IUploadToOrganizationWebContainerOptions {
    organization: IOrganizationOptions;
    callbacks: {
        updateOrganization: UpdateOrganizationOnDBCallback;
    };
}
export interface IDeleteCdnFilesFromStorageOptions {
    organization: IOrganizationOptions;
    application: IAppOptions;
    callbacks: {
        updateApp: UpdateAppOnDBCallback;
    };
}
export interface ICloudProvider {
    type: "azure" | "aws";
    createOrganization(options: ICreateOrganizationOptions): Promise<void>;
    deleteOrganization(options: IDeleteOrganizationOptions): Promise<void>;
    createApp(options: ICreateAppOptions): Promise<void>;
    deleteApp(options: IDeleteAppOptions): Promise<void>;
    updateApp(options: IUpdateUIOptions, newName: string): Promise<void>;
}
export declare const ICloudProvider: unique symbol;
export {};
//# sourceMappingURL=ICloudProvider.d.ts.map