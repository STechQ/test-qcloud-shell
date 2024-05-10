import { IOrganization } from "../../../common/qCloudTemp/membership";
import { ISymphonyObject } from "@stechquick/symphony/dist";
import { UserRoleNames } from "../../../common/qCloudTemp/authorization";
declare const dicts: {
    orgId_DbName: Map<string, string>;
    roleId_RoleName: Map<string, UserRoleNames>;
    roleName_RoleId: Map<string, string>;
};
export declare class CumulativeCaches {
    static clearCache(name: keyof typeof dicts): Promise<void>;
    static removeFromCache(name: keyof typeof dicts, ID: string): void;
    static getOrganizationDbNameById(organizationId: string): Promise<string>;
    static getOrganizationDbName(sym: ISymphonyObject): Promise<string>;
    static getOrganizationDbID(sym: ISymphonyObject): Promise<string>;
    static getOrgDbName(orgId: string): Promise<string>;
    static getOrganization(orgId: string): Promise<IOrganization | undefined>;
    static getRoleNameById(roleId: string): Promise<UserRoleNames>;
    static getRoleIdByName(roleName: UserRoleNames): Promise<string>;
}
export {};
//# sourceMappingURL=cumulativeCaches.d.ts.map