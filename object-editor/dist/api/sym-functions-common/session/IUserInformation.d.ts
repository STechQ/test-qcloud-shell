import { IUser_SUSI } from "../../../common/qCloudTemp/authentication";
export interface IUserInformation {
    userId: IUser_SUSI["id"];
    userObjectId: IUser_SUSI["objectId"];
    userEmail: IUser_SUSI["email"];
    organizationIds: IUser_SUSI["organizationIds"];
    userRoleIds?: IUser_SUSI["userRoleIds"];
    sessionId?: string;
}
//# sourceMappingURL=IUserInformation.d.ts.map