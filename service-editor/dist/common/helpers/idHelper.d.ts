import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
export declare class IdHelper {
    static extractId(str: string): string;
    static extractIdType(str: string): {
        modelType: string;
        id: string;
    } | undefined;
    static embedIdType(id: string, type: ModelType): string;
    static embedIdTypeWithAppId(appId: string, modelId: string, type: ModelType): string;
    static extractIdTypeWithAppId(str: string): {
        appId: string | undefined;
        id: string;
    };
}
//# sourceMappingURL=idHelper.d.ts.map