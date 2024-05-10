import { IUser_SUSI } from "../../../common/qCloudTemp/authentication";
import { IUserFeedback } from "../../../common/qCloudTemp/feedback";
import { IOrganization } from "../../../common/qCloudTemp/membership";
import { IUserRequest } from "../../../common/qCloudTemp/userRequest";
export interface IEmailSendingSettings {
    sendGridApiKey: string;
    invitation: {
        from: {
            name: string;
            email: string;
        };
        newUsertemplateId: string;
        signedUpUserTemplateId: string;
    };
    setOrgGroupOwner: {
        from: {
            name: string;
            email: string;
        };
        templateId: string;
    };
    feedback: {
        from: {
            name: string;
            email: string;
        };
        to: Record<number, string>;
        templateId: string;
    };
    userPremiumAcountRequest: {
        from: {
            name: string;
            email: string;
        };
        templateId: string;
    };
    joinOrgGroupRequest: {
        from: {
            name: string;
            email: string;
        };
        templateId: string;
    };
}
export interface IInvitationEmailData {
    organization: string;
    inviter: {
        email: string;
        name: string;
        lastName: string;
    };
    invitedUser: {
        name?: string;
        lastName?: string;
    };
    invitationUrl: string;
}
export interface ISetOrganizationGroupOwnersMailData {
    url: string;
    organizationGroupName: string;
}
export interface IUserFeedbackEmailData {
    user: IUser_SUSI;
    feedback: IUserFeedback;
}
export interface IUserPremiumAccountRequestEmailData {
    sender: IUser_SUSI;
    request: IUserRequest;
    organization: IOrganization;
    backoffice: {
        dashboardUrl: string;
        userDetailsUrl: string;
        orgDetailsUrl: string;
    };
}
export interface IStudioRequestMailData {
    url: string;
    requesterName: string;
}
//# sourceMappingURL=IEmailTypes.d.ts.map