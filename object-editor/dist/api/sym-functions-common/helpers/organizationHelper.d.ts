import { IOrganizationCloud } from "../../../common/clean/domain/useCases/ICloudProvider";
import { MongoDBManager } from "../mongodb/mongoDBManager";
import { IOrganization, IOrganizationCalculatedInfo } from "../../../common/qCloudTemp/membership";
import { ISymphonyObject } from "@stechquick/symphony/dist";
import { IUserInformation } from "../session/IUserInformation";
export interface IUpdateDbOrganizationoptions {
    firstCloudCreation?: boolean;
    qCloudDb?: MongoDBManager;
}
export declare class OrganizationHelper {
    static createOrganization(name: string, userInfo: IUserInformation, sym: ISymphonyObject, isMainOrg?: boolean, organizationGroupId?: string): Promise<{
        newOrg: IOrganization;
    }>;
    static getOrganization(sym: ISymphonyObject): Promise<IOrganization>;
    static getOrganizationById(id: IOrganization["id"]): Promise<IOrganization>;
    static getOrganizationByDBName(dbName: string): Promise<IOrganization>;
    static updateOrganization(id: IOrganization["id"], updates: {
        bodyCloud?: IOrganizationCloud;
        calculatedInfo?: IOrganizationCalculatedInfo;
    }, updaterMail?: string, options?: IUpdateDbOrganizationoptions): Promise<import("../interfaces/IDataStoreManager").UpdateResult>;
    static deleteOrganization(organizationId: IOrganization["id"], sym: ISymphonyObject): Promise<void>;
    private static getCloudObject;
    private static initContainer;
    private static createOrganizationOptions;
    private static createUpdateOrganizationCallback;
    private static checkUserOrgLimit;
    static checkAppVersionPermission(sym: ISymphonyObject): Promise<boolean | undefined>;
}
//# sourceMappingURL=organizationHelper.d.ts.map