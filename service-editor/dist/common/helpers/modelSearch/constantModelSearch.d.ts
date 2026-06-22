import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type IConstantLocationDetail = {
    envKey?: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class ConstantModelSearch implements IModelSearch<IConstantLocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IConstantLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IConstantLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private applyReplacement;
    private buildPolicy;
    private buildReadablePath;
}
//# sourceMappingURL=constantModelSearch.d.ts.map