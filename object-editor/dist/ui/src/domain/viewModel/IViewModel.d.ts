import { IApplication, IExportJobItem, IModel, IModule, ILoggedInUser } from "../model/models";
import { ITopMenuButton } from "../model/ui/ITopMenuButton";
import { INavItem } from "../model/ui/INavItem";
import { IMainStatisticInfo } from "../../../../common/qCloudTemp/backoffice";
import { IUser_SUSI } from "../../../../common/qCloudTemp/authentication";
import { IOrganizationGroup, ITags } from "../../../../common/qCloudTemp/quickCloud";
import { IUserRequest } from "../../../../common/qCloudTemp/userRequest";
import { IOrganizationUIExtended } from "../useCase/backoffice/IBackofficeUseCase";
import { IAnnouncementServiceObj } from "../../../../common/qCloudTemp/announcement";
import { IAnnouncementUIExtended } from "../useCase/IAnnouncementsUseCase";
import { IProcess } from "../useCase/IWorkflowViewUseCase";
import { IUser } from "../../../../common/runtime/interfaces/namedobjects/IUser";
export interface IViewModel {
    user?: ILoggedInUser;
    apps: Array<IApplication>;
    studio: {
        appId: string;
        appName: string;
        items: Array<IModel | IModule>;
        openItems?: Array<IModel>;
        currentItem?: IModel;
        tabOrder?: Array<string>;
        dnsEndpoint?: string;
        webPublishDate?: string;
        mobilePublishDate?: string;
        webPublishedBy?: string;
        mobilePublishedBy?: string;
        publishId?: string;
        livePreview?: {
            relayClients: {
                clients: Array<{
                    clientID: string;
                    name: string;
                }>;
            };
        };
        filters: {
            text?: string;
            ui: boolean;
            process: boolean;
            entity: boolean;
            image: boolean;
            setting: boolean;
            placeholder: boolean;
        };
        ui?: {
            navItems?: Array<INavItem>;
            sidebar: {
                component?: object;
                componentPath?: string;
                left: number;
            };
        };
        topMenu?: {
            additionalButtons?: Array<ITopMenuButton>;
            dynamicButtons?: Array<ITopMenuButton>;
        };
        export?: {
            lastUncompiledDate?: Date;
        };
        isStatisticsPageSelected?: boolean;
        isManagePageSelected?: boolean;
        workflowPreview?: {
            selectedUser?: IUser;
            selectedProcess?: IProcess | string;
        };
    };
    exportJobs?: Array<IExportJobItem>;
    backoffice?: {
        ui?: {
            breadcrumb?: Array<string>;
        };
        dashboard?: {
            mainStatistics: IMainStatisticInfo;
        };
        users?: Array<IUser_SUSI>;
        organizations?: Array<IOrganizationUIExtended>;
        tags?: Array<ITags>;
        userRequests?: Array<IUserRequest>;
        organizationGroups?: Array<IOrganizationGroup>;
        announcements?: Array<IAnnouncementServiceObj>;
    };
    announcements: Array<IAnnouncementUIExtended>;
}
export declare const IViewModel: unique symbol;
//# sourceMappingURL=IViewModel.d.ts.map