import { IModelForWorkflow } from "../../qCloudTemp/quickCloud.js";
import { IDataStoreManager } from "../infrastructure/mongo/IDataStoreManager.js";
import { ModelType } from "../../everything/studio/ui/IStudioUIModelBase.js";
export declare class ModelHelper {
    static get(dsManager: IDataStoreManager, { idStr, version, appId }: {
        idStr: string;
        version: string | undefined;
        appId?: string | undefined;
    }): Promise<IModelForWorkflow>;
    static tryGet(dsManager: IDataStoreManager, modelInfo: {
        idStr: string;
        version: string | undefined;
        appId?: string | undefined;
    }): Promise<IModelForWorkflow> | undefined;
    static upsert(dsManager: IDataStoreManager, model: IModelForWorkflow, live: boolean, options?: {
        trxQueue?: any;
    }): Promise<undefined>;
    static updateCache(model: IModelForWorkflow, live: boolean): Promise<void>;
    private static getCacheKey;
    private static fixDirectDBIntervention;
    private static findRelatedConstant;
    private static findReferencedModels;
    private static updateEnvironmentForConstant;
    private static getDBKeyForConstant;
    static generateKeyForConstantWithName(appId: string, constantName: string): string;
    static getAppIdFromModelId(dsManager: IDataStoreManager, modelId: string, version?: string): Promise<string>;
    static listModelsByType(dbManager: IDataStoreManager, { type }: {
        type: ModelType;
    }): Promise<IModelForWorkflow[]>;
}
//# sourceMappingURL=ModelHelper.d.ts.map