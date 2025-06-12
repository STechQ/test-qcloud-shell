import { IMongoDBConnectionManager } from "./IDataStoreManager";
import { MongoClient } from "mongodb";
export declare class MongoDBConnectionManager implements IMongoDBConnectionManager {
    private clientDict;
    constructor();
    getConnection(url: string, options: {
        maxPoolSize: number;
    }): Promise<MongoClient>;
    private events;
    private clearEvents;
    private handleProcessClose;
    private closeAll;
}
//# sourceMappingURL=mongoDBConnectionManager.d.ts.map