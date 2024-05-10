import { AggregateType, CollectionName, FilterTypeNullable, FilterTypeOrAnd, GetLastOptions, GetOptions, IDataStoreManager, ListOptions, UpdateResult, UpdateTypeNullable } from "../interfaces/IDataStoreManager";
import { UpdateFilter } from "mongodb";
export declare class MongoDBManager implements IDataStoreManager {
    private url;
    private urlWithAdminPrivileges;
    private _dbName;
    private _client?;
    private _handleConnection;
    private state;
    constructor(dbName: string);
    private executeCommand;
    private openConn;
    private closeConn;
    private softDeleteFilter;
    get dbName(): string;
    private scopeState;
    scope<T = void>(cb: () => Promise<T> | T): Promise<T>;
    List2<T, RetT = T>(collection: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: ListOptions<Array<keyof RetT>>): Promise<Array<RetT>>;
    List<T, RetT = T>(collection: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: ListOptions): Promise<RetT[]>;
    Get<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, options?: GetOptions): Promise<T | undefined>;
    GetLast<T>(collection: CollectionName, options: GetLastOptions): Promise<T>;
    Insert<T extends object>(collection: CollectionName, item: T): Promise<T>;
    InsertMany<T extends object>(collection: CollectionName, items: Array<T>): Promise<void>;
    UpdateMany<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>, options?: {
        useSoftDeleteFilter: boolean;
    }): Promise<UpdateResult>;
    Update<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, updateValue: UpdateTypeNullable<T>, options?: {
        useSoftDeleteFilter: boolean;
    }): Promise<UpdateResult>;
    UpdateAsNative<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>, update: UpdateFilter<T> | Partial<T>, options?: {
        useSoftDeleteFilter: boolean;
    }): Promise<UpdateResult>;
    Delete<T>(collection: CollectionName, filter: FilterTypeNullable<T> | FilterTypeOrAnd<T>): Promise<number>;
    Count<T>(collection: CollectionName, filter?: FilterTypeNullable<T> | FilterTypeOrAnd<T>): Promise<number>;
    Aggregate<T, RetT = T>(collection: CollectionName, pipeline: Array<AggregateType<T>>): Promise<RetT[]>;
    static createDatabase(dbName: string, collectionName: CollectionName): Promise<void>;
    static dropDatabase(dbName: string): Promise<boolean>;
}
//# sourceMappingURL=mongoDBManager.d.ts.map