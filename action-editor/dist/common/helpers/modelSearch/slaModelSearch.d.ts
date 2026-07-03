import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type ISLALocationDetail = {
    fileName: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class SLAModelSearch implements IModelSearch<ISLALocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: ISLALocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<ISLALocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private buildPolicy;
}
//# sourceMappingURL=slaModelSearch.d.ts.map