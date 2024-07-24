import { IOrganization } from "./membership";
export interface IMainStatisticInfo {
    organizations: Array<IOrganization>;
    userCount: number;
    licensedUserCount?: number;
    organizationCount?: number;
    licensedOrgCount?: number;
    applicationCount?: number;
    licensedAppCount?: number;
    tagCount: number;
    userRequestCount: number;
    orgGroupCount: number;
    sdUserCount?: number;
    announcement: {
        count: number;
        activeCount: number;
    };
}
//# sourceMappingURL=backoffice.d.ts.map