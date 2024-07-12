import { ModelType } from "../everything/studio/ui/IStudioUIModelBase";
export declare class IdHelper {
    static extractId(str: string): string;
    static extractIdType(str: string): {
        modelType: string;
        id: string;
    } | undefined;
    static embedIdType(id: string, type: ModelType): string;
}
//# sourceMappingURL=idHelper.d.ts.map