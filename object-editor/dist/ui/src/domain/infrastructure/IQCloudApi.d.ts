import { ExportType, ICreateDeployJobParam, ICreateExportJobParam, IDeployJobItem, IExportItem, IExportJobDbItem, IExportJobHistoryDbItem, IExportJobHistoryRequest, IGetExportJobsByGroupIDRequest, IInitJobHistoryRequest, IListExportJobsResponse, JobType } from "../../../../common/qCloudTemp/exporter";
import { ICustomLivePreview, IDefaultLivePreview, ILivePreview, ILivePreviewSettingsRetval } from "../../../../common/qCloudTemp/livePreview";
import { IEditorTypes, IOrganization, IOrganizationFeatures } from "../../../../common/qCloudTemp/membership";
import { AppSettingsModelKeys, IModelBody, IModelBodyObject, IModelInfo, IModuleVersion, IOrganizationActions, IOrganizationGroup, IQCloudLogItem, ISDActivities, ITags, ITenantDefinitions, ITreeviewItem, ModelAdditionals, ModelType, ModuleShareType, ObjectID, UsageType } from "../../../../common/qCloudTemp/quickCloud";
import { IModuleProduct, IModuleProductVer } from "../../../../common/qCloudTemp/store";
import { IAddFeedbackRequest, IAddFeedbackResponse, IAddModelFromTemplateRequest, IAddModelFromTemplateResponse, IAddModelRequest, IAddModelResponse, IAddOrUpdatePreferencesResponse, IAddOrganizationGroupRequest, IAddTagRequest, IAddUserPremiumAccountRequestRequest, IAddUserPremiumAccountRequestResponse, IAddUserStandAloneInfoRequest, IBoAddAnnouncementRequest, IBoAddAnnouncementResponseConsumer, IBoDeleteAnnouncementRequest, IBoGetAzureCredentialsResponse, IBoListAnnouncementsResponseConsumer, IBoListApplicationsResponse, IBoListOrganizationUsersResponse, IBoRemoveTagFromOrganizationRequest, IBoRemoveUserFromOrganizationRequest, IBoUpdateAnnouncementRequest, IBoUpdateAnnouncementResponseConsumer, IBoUpdateOrganizationResponse, ICheckExistenceOfModuleVersionResponse, ICreateOrganizationResponse, IDeleteFolderRequest, IDeleteInvitationRequest, IGetChatBotResponse, IGetCodeAssistantResponse, IGetFileSystemModelsResponse, IGetMainStatisticInfoResponse, IGetModelInformationsRequest, IGetModelResponse, IGetModuleRequest, IGetModuleResponse, IGetOrganizaionGroupDetailsByUserTypeResponse, IGetOrganizaionGroupDetailsRequest, IGetOrganizaionGroupDetailsResponse, IGetOrganizationGroupReqRequest, IGetOrganizationGroupReqResponse, IGetOrganizationInfoResponse, IGetOrganizationUsersRequest, IGetOrganizationUsersResponse, IGetPreferencesResponse, IGetProfileResponse, IGetUserInfoResponse, IInvitationRequest, IListAnnouncementsResponseConsumer, IListChildItemsResponse, IListInvitationsResponse, IListOrganizationsResponse, IListUserOrganizationsResponse, IListUserRequestsResponse, IListUsersResponse, IRelaseModuleRequest, IRemoveUserFromOrganizationRequest, ISignInResponse, IUndoCheckoutRequest, IUndoCheckoutResponse, IUpdateApplicationRequest, IUpdateFolderRequest, IUpdateFolderResponse, IUpdateInvitationRequest, IUpdateJoinOrgGroupRequest, IUpdateMobileUsage, IUpdateModelRequest, IUpdateModelResponse, IUpdateOrganizaionGroupOwnersRequest, IUpdateOrganizaionGroupRequest, IUpdateOrganizationOwnerRequest, IUpdateProfileResponse, IUpdateTagRequest, IUpdateUserInfoResponse, IXlsxExportRequest, IReleaseApplicationRequest, IGenerateTokenResponse, IGenerateTokenRequest, IDeleteApplicationVersionRequest, IDeleteApplicationVersionResponse, IDeleteTokenRequest, IDeleteTokenResponse, IAddAppVersionPackJobRequest, IValidateTokenResponse, IGetAppActiveTokenResponse } from "../../../../common/qCloudTemp/symDtoObjects";
import { ITemplateInfo, TemplateType } from '../../../../common/qCloudTemp/template';
import { IApplication, IAppVersion, IExportJobArtifactInfoItem, IExportJobItem, IExportJobStepItem, IExportViewItem, ILoggedInUser, IModel, IModelHistoryInfo, IModule, ModelHistoryType } from "../model/models";
import { IModuleBackend } from "../../../../common/qCloudTemp/quickCloud";
import { IStudioRequestRequest, IStudioRequest } from "../../../../common/qCloudTemp/request";
import { IExternalToken } from "../../../../common/qCloudTemp/externalToken";
export interface IGetModelHistoryResponse extends IGetModelResponse {
    modelID: string;
    historyType: string;
    ownerItem: string;
    version: string;
}
export interface IlistExportJobStepLogsResponse {
    logs: Array<string>;
}
export interface IDublicateModelResponse {
    modelInfo: IModelInfo;
    modelBody: Array<IModelBody>;
}
export interface IUpdateLivePreviewRequest {
    links?: ICustomLivePreview["links"];
    deepLinkParam?: ICustomLivePreview["deepLinkParam"];
    models?: ICustomLivePreview["models"];
    expiryDate?: ICustomLivePreview["expiryDate"];
    password?: ICustomLivePreview["password"];
    selected?: ICustomLivePreview["selected"];
}
export interface ICreateLivePreviewRequest {
    appID: string;
    type: ILivePreview["type"];
    links?: ICustomLivePreview["links"];
    deepLinkParam?: ICustomLivePreview["deepLinkParam"];
    models?: ICustomLivePreview["models"];
    expiryDate?: ICustomLivePreview["expiryDate"];
    password?: ICustomLivePreview["password"];
    selected: ICustomLivePreview["selected"];
}
export interface ICreateModelFromTemplateParam {
    name: string;
    ownerId: string;
    modelInfoID: string;
    modelType: ModelType;
    modelAdditionals: ModelAdditionals;
    version?: string;
    path: string;
}
export interface IListModelsRequest {
    applicationID: string;
    getModelBodies?: boolean;
    usageType?: UsageType;
}
export interface ICreateUserRequest {
    name: string;
    mailAddress: string;
    password: string;
}
export interface IUpdateModelParams {
    name?: string;
    model?: Array<IModelBodyObject>;
    checkin?: boolean;
    release?: boolean;
    publish?: boolean;
    shortComment?: string;
    comment?: string;
    ownerItem?: IApplication | IModule;
    modelType?: ModelType;
    modelAdditionals?: ModelAdditionals;
    ownerUser?: ILoggedInUser;
    appID?: string;
    version?: string;
    isUnmodifiable?: boolean;
    path?: string;
    outerOrgId?: string;
}
export interface IUpdateUserInfo {
    createOrgLimit: number;
}
export interface IBoUpdateOrganizationProps {
    accountType?: "premium" | "beta";
    createAppLimit: number;
    actions: IOrganizationActions;
    applications: IEditorTypes;
    environmentPrefix: string;
    features: IOrganizationFeatures;
    tags: Array<ITags['ID']>;
    organizationGroupId?: string;
}
export interface IQCloudApi {
    signIn(invitationId?: string): Promise<ISignInResponse>;
    signOut(): Promise<void>;
    getProfile(): Promise<IGetProfileResponse>;
    updateProfile(properties: {
        name: string;
        lastName: string;
        role: string;
    }): Promise<IUpdateProfileResponse>;
    getPreferences(): Promise<IGetPreferencesResponse>;
    updatePreferences(preferences: {
        emailConsent: boolean;
    }): Promise<IAddOrUpdatePreferencesResponse>;
    listUserOrganizations(): Promise<Array<IListUserOrganizationsResponse>>;
    getOrganization(organizationId: IOrganization["id"]): Promise<IOrganization>;
    listUserInvitations(): Promise<IListInvitationsResponse>;
    createOrganization(name: IOrganization["name"], options: {
        isMainOrg?: boolean;
        organizationGroupId?: string;
    }): Promise<ICreateOrganizationResponse>;
    listAnnouncements(): Promise<IListAnnouncementsResponseConsumer>;
    createModel(request: IAddModelRequest): PromiseLike<IAddModelResponse>;
    createModule(name: string, options: {
        description?: string;
        prefix?: string;
        applicationID?: string;
    }): Promise<IModuleBackend>;
    createApplication(params: {
        name: string;
        description?: string;
        logo?: string;
        color?: string;
    }): PromiseLike<{
        application: IApplication;
        organization: IOrganization;
    }>;
    createLog(logItem: IQCloudLogItem): Promise<{
        ID: string;
    }>;
    getModelInfo(ID: string, params?: {
        checkoutControl?: boolean;
        createCheckout?: boolean;
        isGetCheckoutUserInfo?: boolean;
    }): Promise<IGetModelResponse>;
    getModel(ID: string, params?: {
        checkoutControl?: boolean;
        createCheckout?: boolean;
        retrieveBody?: boolean;
        isGetCheckoutUserInfo?: boolean;
        version?: string;
        isUnmodifiable?: boolean;
    }): Promise<IGetModelResponse>;
    getFileSystemModels(fileSystemIds: Array<string>): Promise<IGetFileSystemModelsResponse>;
    updateModel(params: IUpdateModelRequest): Promise<IUpdateModelResponse>;
    updateModule(ID: string, params: {
        name?: string;
        description?: string;
        prefix?: string;
        ownerUser?: ILoggedInUser;
        mainOwner?: ObjectID;
        shareType?: ModuleShareType;
        applicationID?: string;
    }): PromiseLike<{
        module: IModule;
    }>;
    updateApplication(ID: string, params: IUpdateApplicationRequest): PromiseLike<{
        app: IApplication;
    }>;
    deleteModel(ID: string, appID: string | undefined, options?: {
        addHistory?: boolean;
    }): PromiseLike<void>;
    deleteModule(ID: string, appID: string | undefined, options?: {
        addHistory?: boolean;
    }): PromiseLike<void>;
    deleteFolder(request: IDeleteFolderRequest): PromiseLike<void>;
    updateFolder(request: IUpdateFolderRequest): Promise<IUpdateFolderResponse>;
    addDeleteApplicationJob(ID: string, addHistory?: boolean): PromiseLike<void>;
    duplicateModel(sourceModel: IModel, name: string, appID: string | undefined): Promise<IModel>;
    listApplications(getDetails?: boolean): PromiseLike<Array<IApplication>>;
    listModules(applicationID?: string, outerOrgId?: string): Promise<Array<IModule>>;
    listModuleVersions(moduleID: string, outerOrgId?: string): Promise<Array<IModuleVersion>>;
    listMultiModuleVersions(moduleIDs: Array<string>): Promise<IModuleVersion[]>;
    listModels(options: IListModelsRequest): Promise<Array<IGetModelResponse>>;
    getLPSettings(appID: string): Promise<Record<AppSettingsModelKeys, ILivePreviewSettingsRetval>>;
    listModuleChildItems(module: IModule): Promise<IListChildItemsResponse>;
    listModelBodies(modelIDs: Array<string>): Promise<Array<IModelBody>>;
    getApplicationDetails(appID: string): PromiseLike<IApplication["details"]>;
    getApplication(appID: string): Promise<IApplication>;
    getExportTypes(): Promise<Array<{
        name: ExportType;
        text: string;
    }>>;
    getchatbotresponse(userQuestion: string, chatHistory: Record<string, any>): Promise<IGetChatBotResponse>;
    getCodeAssistantResponse(monacoEditorValue: string, action: "refactor" | "explain", metrics: {
        correlationid: string;
        requestSource: "selection" | "fullEvent";
    }): Promise<IGetCodeAssistantResponse["response"]>;
    getExportSelectionData(applicationID: string, exportType: ExportType): Promise<Array<IExportViewItem>>;
    listModelHistories(modelID: string, historyType?: ModelHistoryType | undefined): Promise<IModelHistoryInfo[]>;
    listMultiModelHistories(modelIDs: Array<string>, historyType?: ModelHistoryType | undefined): Promise<IModelHistoryInfo[]>;
    getModelHistory(historyID: string): Promise<IGetModelHistoryResponse>;
    createExportJob(appID: string, exportType: ExportType, exportItems: Array<IExportItem>, groupID?: string, layer?: number): Promise<IExportJobItem>;
    createDeployJobs(deployJobs: Array<IDeployJobItem>, isGroup: boolean): Promise<void>;
    createBuildJobs(jobs: Array<ICreateDeployJobParam>): Promise<Array<IExportJobDbItem>>;
    addDeletePlateauEnvJob(appID: string): Promise<void>;
    startDeploymentJob(param: ICreateDeployJobParam): Promise<IExportJobDbItem>;
    createPackJobs(jobs: Array<ICreateExportJobParam>): Promise<Array<IExportJobDbItem>>;
    getExportJobsByGroupId(req: IGetExportJobsByGroupIDRequest): Promise<IListExportJobsResponse>;
    listExportJobs(jobType: JobType, options?: {
        appID?: string;
    }): Promise<Array<IExportJobItem>>;
    initPublishHistory(request: IInitJobHistoryRequest): Promise<IExportJobHistoryDbItem>;
    listApplicationJobHistory(request: IExportJobHistoryRequest): Promise<Array<IExportJobHistoryDbItem>>;
    listExportJobSteps(ID: string, isMultiStep?: boolean): Promise<Array<IExportJobStepItem>>;
    listExportJobStepLogs(stepID: string): Promise<IlistExportJobStepLogsResponse>;
    listExportJobArtifacts(ID: string): Promise<Array<IExportJobArtifactInfoItem>>;
    listTreeviewItems(applicationID: string): Promise<Array<ITreeviewItem>>;
    attachModuletoApplication(appID: string, moduleID: string, version?: string, outerOrgId?: string): Promise<string | void>;
    detachModuleFromApplication(appID: string, moduleID: string, version?: string, outerOrgId?: string): Promise<void>;
    getApplicationUISettings(applicationID?: string): Promise<Array<ITenantDefinitions>>;
    getApplicationDeploySettings(applicationID: string): Promise<ITenantDefinitions[]>;
    getTenantDefinition(ID: string): Promise<ITenantDefinitions>;
    setRootScreen(ID: string): Promise<void>;
    putModuleInStore(objectID: string): Promise<{
        product: IModuleProduct;
        productVer: IModuleProductVer;
    }>;
    createLivePreview(options?: ICreateLivePreviewRequest): Promise<ILivePreview>;
    updateLivePreview(ID: string, options?: IUpdateLivePreviewRequest): PromiseLike<void>;
    updateSelectedLivePreview(appID: string): PromiseLike<void>;
    getLivePreviewInfo(appID: string, options?: {
        selected?: boolean;
        type?: ILivePreview["type"];
    }): Promise<ICustomLivePreview | IDefaultLivePreview>;
    listLivePreviewInfo(appID: string): Promise<Array<ICustomLivePreview | IDefaultLivePreview>>;
    listTemplateInfos(type?: TemplateType): Promise<Array<ITemplateInfo>>;
    createModelFromTemplate(request: IAddModelFromTemplateRequest): Promise<IAddModelFromTemplateResponse>;
    undoCheckout(request: IUndoCheckoutRequest): Promise<IUndoCheckoutResponse>;
    createInvitation(request: IInvitationRequest): Promise<void>;
    listOrganizationUsers(request: IGetOrganizationUsersRequest): Promise<IGetOrganizationUsersResponse>;
    listOrganizationInvitations(): Promise<IListInvitationsResponse>;
    deleteInvitation(request: IDeleteInvitationRequest): Promise<void>;
    removeUserFromOrganization(request: IRemoveUserFromOrganizationRequest): Promise<void>;
    updateOrganizationOwner(request: IUpdateOrganizationOwnerRequest): Promise<IOrganization>;
    updateInvitation(request: IUpdateInvitationRequest): Promise<void>;
    createFeedback(request: IAddFeedbackRequest): Promise<IAddFeedbackResponse>;
    releaseModule(request: IRelaseModuleRequest): Promise<IModuleVersion>;
    getModule(request: IGetModuleRequest): Promise<IGetModuleResponse>;
    getModelInformations(request: IGetModelInformationsRequest): Promise<Array<IModelInfo>>;
    addOrgGroupModule(request: Array<IModelInfo>, outerOrgId: string): Promise<void>;
    checkExistenceOfModuleVersion(request: {
        moduleID: string;
        versionToCheck: string;
    }): Promise<ICheckExistenceOfModuleVersionResponse>;
    addDeleteOrganizationJob(organizationId: string, organizationName: string): Promise<void>;
    addUserStandAloneInfo(request: IAddUserStandAloneInfoRequest): Promise<void>;
    deleteUserStandAloneInfo(userId: string): Promise<void>;
    createUserPremiumAccountRequest(request: IAddUserPremiumAccountRequestRequest): Promise<IAddUserPremiumAccountRequestResponse>;
    updateUserMobileUsage(request: IUpdateMobileUsage): Promise<void>;
    listOrgGroupUsers(): Promise<IListOrganizationsResponse>;
    getOrganizationGroupDetails(request: IGetOrganizaionGroupDetailsRequest): Promise<IGetOrganizaionGroupDetailsByUserTypeResponse>;
    deleteOrganizationFromGroup(organizationId: string): Promise<void>;
    getAIResponsiveSuggestions(layoutModel: object, metrics: {
        correlationid: string;
        requestid: number;
    }): Promise<object>;
    getUserById(userId: string): Promise<IGetUserInfoResponse>;
    getMainStatisticInfo(): Promise<IGetMainStatisticInfoResponse>;
    getUserInfo(userId: string): Promise<IGetUserInfoResponse>;
    getOrganizationInfo(organizationId: string): Promise<IGetOrganizationInfoResponse>;
    bo_listUsers(): Promise<IListUsersResponse>;
    bo_listOrganizations(): Promise<IListOrganizationsResponse>;
    updateUserInfo(userId: string, properties: IUpdateUserInfo): Promise<IUpdateUserInfoResponse>;
    bo_removeUserFromOrganization(properties: IBoRemoveUserFromOrganizationRequest): Promise<void>;
    bo_listOrganizationUsers(organizationId: string): Promise<IBoListOrganizationUsersResponse>;
    bo_listOrganizationApps(organizationId: string): Promise<IBoListApplicationsResponse>;
    bo_addDeleteOrganizationJob(organizationId: string, organizationName: string): Promise<void>;
    bo_updateOrganization(organizationId: string, properties: IBoUpdateOrganizationProps): Promise<IBoUpdateOrganizationResponse>;
    bo_updateOrganizationGroupOwners(request: IUpdateOrganizaionGroupOwnersRequest): Promise<void>;
    bo_getAzureCredentials(): Promise<IBoGetAzureCredentialsResponse>;
    bo_deleteUser(userId: string): Promise<void>;
    bo_addtag(request: IAddTagRequest): Promise<ITags>;
    bo_deletetag(tagId: string): Promise<void>;
    bo_listtag(): Promise<Array<ITags>>;
    bo_gettag(tagId: string): Promise<ITags>;
    bo_updatetag(request: IUpdateTagRequest): Promise<void>;
    bo_getOrganizationsByTag(tagId: string): Promise<Array<IOrganization>>;
    bo_removeTagFromOrganization(properties: IBoRemoveTagFromOrganizationRequest): Promise<void>;
    bo_listAnnouncements(): Promise<IBoListAnnouncementsResponseConsumer>;
    bo_createAnnouncement(request: IBoAddAnnouncementRequest): Promise<IBoAddAnnouncementResponseConsumer>;
    bo_updateAnnouncement(request: IBoUpdateAnnouncementRequest): Promise<IBoUpdateAnnouncementResponseConsumer>;
    bo_deleteAnnouncement(request: IBoDeleteAnnouncementRequest): Promise<void>;
    bo_listUserRequests(): Promise<IListUserRequestsResponse>;
    bo_addOrganizationGroup(properties: IAddOrganizationGroupRequest): Promise<IOrganizationGroup>;
    bo_listOrganizationGroups(): Promise<Array<IOrganizationGroup>>;
    bo_updateOrganizationGroup(request: IUpdateOrganizaionGroupRequest): Promise<void>;
    bo_getOrganizationGroupDetails(request: IGetOrganizaionGroupDetailsRequest): Promise<IGetOrganizaionGroupDetailsResponse>;
    bo_deleteOrganizationGroup(organizationGroupId: string): Promise<void>;
    bo_deleteOrganizationFromGroup(organizationId: string): Promise<void>;
    sendJoinOrganizationGroupRequest(request: IStudioRequestRequest): Promise<IStudioRequest>;
    updateJoinOrgGroupRequest(request: IUpdateJoinOrgGroupRequest): Promise<void>;
    getStudioRequests(request: IGetOrganizationGroupReqRequest): Promise<IGetOrganizationGroupReqResponse[]>;
    bo_listServiceDesignerActivities(): Promise<Array<ISDActivities>>;
    bo_xlsxexport(request: IXlsxExportRequest): Promise<any>;
    listAppVersions(appID: string): Promise<Array<IAppVersion>>;
    releaseAppVersion(request: IReleaseApplicationRequest): Promise<IAppVersion>;
    deleteAppVersion(request: IDeleteApplicationVersionRequest): Promise<IDeleteApplicationVersionResponse>;
    getApplicationVersion(versionID: string): Promise<IAppVersion>;
    createAppVersionPackJobs(request: IAddAppVersionPackJobRequest): Promise<IExportJobDbItem>;
    generateShareToken(request: IGenerateTokenRequest): Promise<IGenerateTokenResponse>;
    validateToken(appID: ObjectID, token: string): Promise<IValidateTokenResponse>;
    deleteToken(request: IDeleteTokenRequest): Promise<IDeleteTokenResponse>;
    getAppActiveToken(appID: string): Promise<IGetAppActiveTokenResponse>;
    deactivateToken(appID: string): Promise<IExternalToken>;
}
export declare const IQCloudApi: unique symbol;
//# sourceMappingURL=IQCloudApi.d.ts.map