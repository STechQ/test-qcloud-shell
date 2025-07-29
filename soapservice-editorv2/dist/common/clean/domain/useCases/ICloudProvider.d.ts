/// <reference types="node" />
import { ICrypto } from "../infrastructure/ICrypto";
import { ILogger } from "../infrastructure/ILogger";
import { IMime } from "../infrastructure/IMime";
import { Stats } from "fs";
import { IOrganizationCloud } from "../../../qCloudTemp/membership";
import { IAppCloud, IAzureDatabaseType } from "../../../qCloudTemp/application";
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
export interface IOrganizationOptions {
    organizationId: string;
    organizationName: string;
    region: string;
    envID: string;
    cloud?: IOrganizationCloud;
}
export interface UpdateOrganizationOnDBCallbackOptions {
    firstCloudCreation?: boolean;
}
export type UpdateOrganizationOnDBCallback = (organizationId: string, params: {
    cloud: IOrganizationCloud;
}, options?: UpdateOrganizationOnDBCallbackOptions) => Promise<void>;
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