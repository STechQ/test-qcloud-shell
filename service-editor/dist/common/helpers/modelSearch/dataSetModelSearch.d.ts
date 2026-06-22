import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
export type IDataSetLocationDetail = {
    index?: number;
    searchValue?: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class DataSetModelSearch implements IModelSearch<IDataSetLocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IDataSetLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IDataSetLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private applyReplacement;
    private buildPolicy;
    private buildPath;
    private shouldVisitKey;
    private extractOptionIndex;
    private parseModel;
    private isDictionaryValuePath;
    private toOptionArray;
}
//# sourceMappingURL=dataSetModelSearch.d.ts.map