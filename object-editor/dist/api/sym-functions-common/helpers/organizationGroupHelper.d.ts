import { ISymphonyObject } from "@stechquick/symphony/dist";
import { MongoDBManager } from "../mongodb/mongoDBManager";
interface ISignedUpUserEmailObj {
    email: string;
    name: string;
    lastName: string;
}
export interface IOrganizationGroupOwnerMail {
    oldOwners: Array<ISignedUpUserEmailObj>;
    newOwners: Array<ISignedUpUserEmailObj>;
    organizationGroupName: string;
    addedBy?: ISignedUpUserEmailObj;
}
export interface IUpdateOrganizationGroupReq {
    mainOrganizationId: string;
}
export declare class OrganizationGroupHelper {
    static sendOrganizationGroupOwnerMail(sym: ISymphonyObject, emailData: IOrganizationGroupOwnerMail): Promise<void>;
    static updateOrganizationGroup(db: MongoDBManager, organizationGroupId: string, request: IUpdateOrganizationGroupReq): Promise<void>;
    static getOrganizationGroupOwners(orgId: string | undefined): Promise<string | string[]>;
}
export {};
//# sourceMappingURL=organizationGroupHelper.d.ts.map