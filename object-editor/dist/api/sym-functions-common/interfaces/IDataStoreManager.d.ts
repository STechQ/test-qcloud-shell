export type CollectionName = 
/** Organizational */
"Applications" | "Modules" | "ModuleVersions" | "ModelInfos" | "ModelHistoryInfos" | "AppVersions" | "ExternalTokens"
/** Could be moved to organizational */
 | "Jobs" | "JobSteps" | "ArtifactInfos" | "ArtifactContents" | "History" | "PipelineStatus" | "Logs" | "LivePreviews" | "PublishedApps"
/** Must be Main */
 | "Products" | "ProductVersions" | "ContentInfos" | "ContentBodies" | "History" | "Announcements" | "TenantDefinitions" | "TemplateInfos" | "TemplateBodies" | "Users" | "UserPreferences" | "UserPreferenceHistories" | "Organizations" | "Invitations" | "UserFeedbacks" | "UserRequests" | "Roles" | "Tags" | "OrganizationGroups" | 'SDActivities' | "StudioRequests";
export type UpdateTypeNullable<T> = {
    [K in keyof T]?: T[K] | ExpressionType<T>;
} | {
    [key: string]: any;
};
export type FilterElemMatch<T> = T extends (Array<any> | undefined) ? {
    $elemMatch?: T extends Array<any> ? FilterTypeNullable<T[number]> : undefined;
} : never;
export type FilterTypeNullable<T> = {
    [K in keyof T]?: T[K] | {
        $in?: Array<T[K]> | T[K];
        $ne?: T[K];
        $gt?: T[K];
        $lt?: T[K];
        $regex?: RegExp;
        $type: "string" | "array" | "number" | "bool";
    } | FilterElemMatch<T[K]>;
} | {
    [key: string]: any;
};
export type FilterTypeOrAnd<T> = {
    $or?: Array<FilterTypeNullable<T>>;
    $and?: Array<FilterTypeNullable<T>>;
};
type ModifyType<T, TValue> = {
    [K in keyof T]?: TValue;
};
type DolaredFields<T> = `$${string & keyof T}`;
type FunctionType<T> = {
    body: Function;
    args: Array<DolaredFields<T>>;
    lang: "js";
};
export type ExpressionType<T> = {
    $split?: [DolaredFields<T>, string];
    $add?: Array<ExpressionType<T>>;
    $multiply?: Array<ExpressionType<T>>;
    $toDecimal?: ExpressionType<T>;
    $arrayElemAt?: [string, number];
    $substr?: [DolaredFields<T>, number, number];
    $concat?: Array<string | ExpressionType<T>>;
} | number;
type LetType<T> = {
    vars: {
        [K: string]: ExpressionType<T>;
    };
    in: ExpressionType<T>;
};
type AddFieldType<T> = {
    [K: string]: {
        $function?: FunctionType<T>;
        $let: LetType<T>;
    };
};
export type AggregateType<T> = {
    $match?: Partial<T>;
    $sort?: ModifyType<T, 1 | -1> | {
        [K: string]: 1 | -1;
    };
    $limit?: number;
    $addFields?: AddFieldType<T>;
};
export type FilterType = Record<string, string | number | boolean | any>;
export type GetLastOptions = {
    sortField: string;
    direction: 1 | -1;
    filter?: FilterType;
};
export type SortObject = {
    sortField: string;
    direction: 1 | -1;
    priority: number;
};
export type GetOptions = {
    fields?: Array<string>;
    excludeFeilds?: Array<string>;
};
export type ListOptions<T = Array<string>> = {
    limit?: number;
    sort?: Array<SortObject>;
    fields?: T;
    excludeFeilds?: Array<string>;
    skip?: number;
};
export type UpdateResult = {
    modifiedCount: number;
};
export interface IDataStoreManager {
    dbName: string;
    scope<T = void>(cb: () => Promise<T> | T): Promise<T>;
    List2<T, RetT extends Partial<T> = T>(collection: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: ListOptions<Array<keyof RetT>>): Promise<Array<RetT>>;
    List<T, RetT = T>(collection: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: ListOptions): Promise<Array<RetT>>;
    Get<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>): Promise<T | undefined>;
    GetLast<T>(collection: CollectionName, options: GetLastOptions): Promise<T>;
    Insert<T extends object>(collection: CollectionName, item: T): Promise<T>;
    InsertMany<T extends object>(collection: CollectionName, items: Array<T>): Promise<void>;
    Update<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>): Promise<UpdateResult>;
    UpdateMany<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>): Promise<UpdateResult>;
    Delete<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>): Promise<number>;
    Count<T>(collection: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>): Promise<number>;
    Aggregate<T, RetT = T>(collection: CollectionName, pipeline: Array<AggregateType<T>>): Promise<Array<RetT>>;
}
export {};
//# sourceMappingURL=IDataStoreManager.d.ts.map