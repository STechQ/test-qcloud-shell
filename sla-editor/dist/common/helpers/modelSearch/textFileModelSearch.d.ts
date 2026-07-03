import { IModelBodyObject } from "../../qCloudTemp/quickCloud";
import { ILocationResult, IModelSearch, IModelSearchOptions } from "./IModelSearch";
export interface ICssLocationDetail {
    lineNumber: number;
    column: number;
    code: string;
    searchValue: string;
    key?: string;
    matchedValue?: string;
    isReplaceable?: boolean;
}
export declare class TextFileModelSearch implements IModelSearch<ICssLocationDetail> {
    private readonly engine;
    replacer: (modelBody: Array<IModelBodyObject>, searchValue: string, replaceValue: string, result: ICssLocationDetail) => Array<IModelBodyObject>;
    locationFinder: (modelBody: string, searchValue: string, fileName: string, onMatch: (result: ILocationResult<ICssLocationDetail>) => void, searchOptions?: IModelSearchOptions) => void;
    private applyReplacement;
    private shouldVisitKey;
    private encodeMatchKey;
    private decodeMatchKey;
}
//# sourceMappingURL=textFileModelSearch.d.ts.map