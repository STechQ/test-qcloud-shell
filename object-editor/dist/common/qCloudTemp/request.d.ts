export interface IStudioRequestRequest {
    targetUserEmail: string;
    description: string;
    type: "joinOrganizationGroup";
    organizationName?: string;
}
export interface IStudioRequest extends IStudioRequestRequest {
    id: string;
    createDate: Date;
    targetIds: Array<string>;
    requestingUserId: string;
    requestingUserEmail: string;
}
//# sourceMappingURL=request.d.ts.map