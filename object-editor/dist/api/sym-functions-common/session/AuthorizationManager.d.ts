import { IOrganization } from "../../../common/qCloudTemp/membership";
import { ISymphonyObject } from "@stechquick/symphony/dist";
import { IUserInformation } from "./IUserInformation";
import { UserRoleNames } from "../../../common/qCloudTemp/authorization";
export declare class AuthorizationManager {
    static getOrganizationId(sym: ISymphonyObject): Promise<string>;
    static assertOrganizationOwner(userInfo: IUserInformation, organization?: IOrganization): Promise<void>;
    static assertUserInRole(sym: ISymphonyObject, roleNames: Array<UserRoleNames>): Promise<{
        userInfo: IUserInformation;
    }>;
}
//# sourceMappingURL=AuthorizationManager.d.ts.map