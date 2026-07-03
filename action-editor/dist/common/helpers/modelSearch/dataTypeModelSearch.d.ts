import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export type IDataTypeLocationDetail = {
    key: string;
    index?: number;
    matchedValue?: string;
    isReplaceable?: boolean;
};
export declare class DataTypeModelSearch implements IModelSearch<IDataTypeLocationDetail> {
    private readonly pathDictionary;
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: IDataTypeLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<IDataTypeLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private applyReplacement;
    private buildReplacePolicy;
    private buildPath;
    private resolvePathByDictionary;
    private buildPathSignature;
    private extractIndex;
    private isAttributeFieldContainer;
    private isAttributePath;
    private isQueryFieldPath;
    private getAttributeBySegments;
}
//# sourceMappingURL=dataTypeModelSearch.d.ts.map