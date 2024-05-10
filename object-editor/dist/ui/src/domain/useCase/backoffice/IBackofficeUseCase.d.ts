import { IUser_SUSI } from "../../../../../common/qCloudTemp/authentication";
import { IOrganization } from "../../../../../common/qCloudTemp/membership";
import { IOrganizationGroup, ISDActivities, ITags } from "../../../../../common/qCloudTemp/quickCloud";
import { IAddOrganizationGroupRequest, IAddTagRequest, IBoRemoveTagFromOrganizationRequest, IBoRemoveUserFromOrganizationRequest, IGetOrganizaionGroupDetailsRequest, IGetOrganizaionGroupDetailsResponse, IUpdateMobileUsage, IUpdateOrganizaionGroupRequest, IUpdateTagRequest, IUpdateOrganizaionGroupOwnersRequest } from "../../../../../common/qCloudTemp/symDtoObjects";
import { IUserRequest } from "../../../../../common/qCloudTemp/userRequest";
import { IBoUpdateOrganizationProps, IUpdateUserInfo } from "../../infrastructure/IQCloudApi";
import { IApplication, IApplicationExtended } from "../../model/models";
export declare const IgnoredOrgGroupIds: string[];
export interface IAzureResourceGroupUrls {
    overviewUrl: string;
    costUrl: string;
}
export interface IOrganizationUIExtended extends IOrganization {
    organizationGroupName?: string;
    createdBy?: string;
    tagNames?: Array<string>;
    licensed?: 'LICENSED' | 'Demo Org' | 'Free';
}
export interface IUser_SUSIExtended extends IUser_SUSI {
    organizationNames?: Array<string>;
    organizationGroupNames?: Array<string>;
    licensed?: 'LICENSED' | 'Demo User' | 'Free';
}
export interface IUserRequestExtended extends IUserRequest {
    userName?: string;
    userLastname?: string;
    userRole?: string;
    organizationName?: string;
    organizationAccountType?: string;
}
export interface IBackofficeUseCase {
    setBreadcrumb(values: Array<string>): void;
    clearBreadcrumb(): void;
    getAzureResourceGroupUrls(resourceGroupId: string): Promise<IAzureResourceGroupUrls>;
    getDashboardInfo(): Promise<void>;
    getUserInfo(userId: string): Promise<IUser_SUSI>;
    getOrganizationInfo(organizationId: string): Promise<IOrganization>;
    listUsers(): Promise<void>;
    listOrganizations(): Promise<Array<IOrganizationUIExtended>>;
    getOrgGroupNameByOrgID(orgID: string): Promise<string | undefined>;
    updateUserInfo(userId: string, properties: IUpdateUserInfo): Promise<IUser_SUSI>;
    removeUserFromOrganization(properties: IBoRemoveUserFromOrganizationRequest): Promise<void>;
    listOrganizationUsers(organizationId: string): Promise<Array<IUser_SUSI>>;
    listOrganizationApps(organizationId: string): Promise<Array<IApplication>>;
    deleteOrganization(organizationId: string, organizationName: string): Promise<void>;
    updateOrganization(organizationId: string, properties: IBoUpdateOrganizationProps): Promise<IOrganization>;
    deleteUser(userId: string, userEmail: string): Promise<void>;
    getOrganizationsByUserId(userID: string): Promise<IOrganization[]>;
    addTag(properties: IAddTagRequest): Promise<void>;
    getTag(tagID: string): Promise<ITags>;
    listTags(): Promise<void>;
    updateTag(properties: IUpdateTagRequest): Promise<void>;
    deleteTag(tagID: string): Promise<void>;
    getOrganizationsByTagId(tagID: string): Promise<IOrganization[]>;
    removeTagFromOrganization(properties: IBoRemoveTagFromOrganizationRequest): Promise<void>;
    listUserRequests(): Promise<Array<IUserRequest>>;
    addOrganizationGroup(properties: IAddOrganizationGroupRequest): Promise<void>;
    listOrganizationGroups(): Promise<IOrganizationGroup[]>;
    updateOrganizationGroup(request: IUpdateOrganizaionGroupRequest): Promise<void>;
    updateOrganizationGroupOwners(request: IUpdateOrganizaionGroupOwnersRequest): Promise<void>;
    getOrganizationGroupDetails(request: IGetOrganizaionGroupDetailsRequest): Promise<IGetOrganizaionGroupDetailsResponse>;
    getOrganizationAppsByOrganizationIdForOrgGroup(orgID: string, orgGroup: IGetOrganizaionGroupDetailsResponse): IApplication[] | undefined;
    getAllAppsForOrgGroup(orgGroup: IGetOrganizaionGroupDetailsResponse): IApplicationExtended[];
    getUsersPerOrganizationForOrgGroup(orgID: string, orgGroup: IGetOrganizaionGroupDetailsResponse): IUser_SUSI[];
    deleteOrganizationFromGorup(organizationId: string): Promise<void>;
    deleteOrganizationGroup(organizationGroupId: string): Promise<void>;
    listServiceDesignerActivities(): Promise<Array<ISDActivities>>;
    downloadActivityXlsxFile(activities: Array<ISDActivities>): Promise<void>;
    updateUserMobileUsage(mobileUsage: IUpdateMobileUsage): Promise<void>;
    downloadUserListXlsxFile(users: Array<IUser_SUSIExtended>): Promise<void>;
    downloadOrganizationListXlsxFile(organizations: Array<IOrganizationUIExtended>): Promise<void>;
    deleteUserStandAloneInfo(userId: string): Promise<void>;
}
export declare const IBackofficeUseCase: unique symbol;
//# sourceMappingURL=IBackofficeUseCase.d.ts.map