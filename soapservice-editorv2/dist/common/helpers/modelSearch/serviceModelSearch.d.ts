import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type IServiceLocationDetail = {
    fileName: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class ServiceModelSearch implements IModelSearch<IServiceLocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IServiceLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IServiceLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private buildPolicy;
}
//# sourceMappingURL=serviceModelSearch.d.ts.map