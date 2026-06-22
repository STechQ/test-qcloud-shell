import { MongoClient } from "mongodb";
type ISwitchStatus = "on" | "off";
type IPlatformSwitch = ISwitchStatus | undefined | (() => ISwitchStatus | undefined);
export declare class MongoConnectionManager {
    private clientDict;
    private platformSwitchCache;
    private logged;
    private log;
    private isOn;
    getConnection(url: string, platformSwitch: IPlatformSwitch, options?: {
        maxPoolSize?: number;
    }): Promise<MongoClient>;
    handleProcessClose(): void;
    closeAll(): Promise<void>;
    closeConnection(client: MongoClient): Promise<void>;
}
export {};
//# sourceMappingURL=mongoConnectionManager.d.ts.map